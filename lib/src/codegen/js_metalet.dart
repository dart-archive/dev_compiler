// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.codegen.js_metalet;

// TODO(jmesserly): import from its own package
import 'package:dev_compiler/src/js/js_ast.dart';
import 'package:dev_compiler/src/js/precedence.dart';

import 'js_names.dart' show JSTemporary;

/// A synthetic `let*` node, similar to that found in Scheme.
///
/// For example, postfix increment can be desugared as:
///
///     // psuedocode mix of Scheme and JS:
///     (let* (x1=expr1, x2=expr2, t=expr1[expr2]) { x1[x2] = t + 1; t })
///
/// [JSMetaLet] will simplify itself automatically when [toExpression],
/// [toStatement], or [toReturn] is called.
///
/// * variables used once will be inlined.
/// * if used in a statement context they can emit as blocks.
/// * if return value is not used it can be eliminated, see [statelessResult].
/// * if there are no variables, the codegen will be simplified.
///
/// Because this deals with JS AST nodes, it is not aware of any Dart semantics
/// around statelessness (such as `final` variables). [variables] should not
/// be created for these Dart expressions.
///
class JSMetaLet extends Expression {
  /// Creates a temporary to contain the value of [expr]. The temporary can be
  /// used multiple times in the resulting expression. For example:
  /// `expr ** 2` could be compiled as `expr * expr`. The temporary scope will
  /// ensure `expr` is only evaluated once: `(x => x * x)(expr)`.
  ///
  /// If the expression does not end up using `x` more than once, or if those
  /// expressions can be treated as [stateless] (e.g. they are non-mutated
  /// variables), then the resulting code will be simplified automatically.
  final Map<String, Expression> variables;

  /// A list of expressions in the body.
  /// Conceptually this is like a comma expression: the last value is returned.
  final List<Expression> body;

  /// True if the final expression in [body] can be skipped in [toStatement].
  final bool statelessResult;

  Expression _expression;
  Statement _statement;
  Statement _return;

  JSMetaLet(this.variables, this.body, {this.statelessResult: false});

  /// Returns an expression that ignores the result. This is similar to
  /// [toStatement] but returns an expression.
  Expression toVoidExpression() {
    if (!statelessResult) return this;
    // Return a new MetaLet.
    // This allows [toStatement] and [toReturn] to compose nicely.
    return new JSMetaLet(variables, body.toList()..removeLast());
  }

  Expression toAssignExpression(Expression left) {
    if (left is Identifier) {
      var simple = _simplifyAssignment(left);
      if (simple != null) return simple;

      var exprs = body.toList();
      exprs.add(exprs.removeLast().toAssignExpression(left));
      return new JSMetaLet(variables, exprs);
    }
    return super.toAssignExpression(left);
  }

  Statement toVariableDeclaration(Identifier name) {
    var simple = _simplifyAssignment(name, isDeclaration: true);
    if (simple != null) return simple.toStatement();
    return super.toVariableDeclaration(name);
  }

  Expression toExpression() {
    if (_expression != null) return _expression;

    var params = [];
    var values = [];
    var letBody = _build(params, values, new Expression.binary(body, ','));

    // Note that [precedenceLevel] must be aware of this possibility, because
    // comma expression has different precedence from call.
    if (params.isEmpty) return _expression = letBody;

    // Assign parameters inside the body, to get sequential let* behavior
    // (subsequent bindings can refer to previous ones), and also to be a bit
    // more readable (lexical order matches source order).
    var vars = [];
    for (int i = 0; i < params.length; i++) {
      vars.add(new Assignment(params[i], values[i]));
    }
    letBody = new Binary(',', new Expression.binary(vars, ','), letBody);

    // Convert the comma back to a block, for readability.
    if (vars.length + body.length >= 4) letBody = letBody.toReturn();

    return new Call(new ArrowFun(params, letBody), []);
  }

  Statement toStatement() {
    if (_statement != null) return _statement;

    // Skip return value if not used.
    var statements = body.map((e) => e.toStatement()).toList();
    if (statelessResult) statements.removeLast();
    return _statement = _finishStatement(statements);
  }

  Statement toReturn() {
    if (_return != null) return _return;
    var statements = body
        .map((e) => e == body.last ? e.toReturn() : e.toStatement())
        .toList();
    return _return = _finishStatement(statements);
  }

  accept(NodeVisitor visitor) => toExpression().accept(visitor);

  void visitChildren(NodeVisitor visitor) {
    toExpression().visitChildren(visitor);
  }

  /// This generates as either a comma expression or a call.
  int get precedenceLevel => variables.isEmpty ? EXPRESSION : CALL;

  Statement _finishStatement(List<Statement> statements) {
    var params = [];
    var values = [];
    var block = _build(params, values, new Block(statements));
    if (params.isEmpty) return _return = block;

    var vars = [];
    for (int i = 0; i < params.length; i++) {
      vars.add(new VariableInitialization(params[i], values[i]));
    }

    return new Block(
        [new VariableDeclarationList('let', vars).toStatement(), block]);
  }

  Node _build(List<JSTemporary> params, List<Expression> values, Node node) {
    // Visit the tree and count how many times each temp was used.
    var counter = new _VariableUseCounter();
    node.accept(counter);
    // Also count the init expressions.
    for (var init in variables.values) init.accept(counter);

    var substitutions = {};
    _substitute(node) => new Template(null, node).safeCreate(substitutions);

    variables.forEach((name, init) {
      // Since this is let*, subsequent variables can refer to previous ones,
      // so we need to substitute here.
      init = _substitute(init);
      int n = counter.counts[name];
      if (n == null || n < 2) {
        substitutions[name] = _substitute(init);
      } else {
        params.add(substitutions[name] = new JSTemporary(name));
        values.add(init);
      }
    });

    // Interpolate the body:
    // Replace interpolated exprs with their value, if it only occurs once.
    // Otherwise replace it with a temp, which will be assigned once.
    return _substitute(node);
  }

  /// If we finish with an assignment to an identifier, try to simplify the
  /// block. For example:
  ///
  ///     ((_) => _.add(1), _.add(2), result = _)([])
  ///
  /// Can be transformed to:
  ///
  ///     (result = [], result.add(1), result.add(2), result)
  ///
  /// However we should not simplify in this case because `result` is read:
  ///
  ///     ((_) => _.addAll(result), _.add(2), result = _)([])
  ///
  JSMetaLet _simplifyAssignment(Identifier left, {bool isDeclaration: false}) {
    // See if the result value is a let* temporary variable.
    if (body.last is! InterpolatedExpression) return null;

    InterpolatedExpression last = body.last;
    String name = last.nameOrPosition;
    if (!variables.containsKey(name)) return null;

    // Variables declared can't be used inside their initializer.
    if (!isDeclaration) {
      var finder = new _IdentFinder(left.name);
      for (var expr in body) {
        if (finder.found) break;
        expr.accept(finder);
      }
      // If the identifier was used elsewhere, bail, because we're going to
      // change the order of when the assignment happens.
      if (finder.found) return null;
    }

    var vars = new Map<String, Expression>.from(variables);
    var value = vars.remove(name);
    Expression assign;
    if (isDeclaration) {
      // Technically, putting one of these in a comma expression is not
      // legal. However when isDeclaration is true, toStatement will be
      // called immediately on the JSMetaLet, which results in legal JS.
      assign = new VariableDeclarationList(
          'let', [new VariableInitialization(left, value)]);
    } else {
      assign = value.toAssignExpression(left);
    }

    var newBody = new Expression.binary([assign]..addAll(body), ',');
    Binary comma = new Template(null, newBody).safeCreate({name: left});
    return new JSMetaLet(vars, comma.commaToExpressionList(),
        statelessResult: statelessResult);
  }
}

class _VariableUseCounter extends BaseVisitor {
  final counts = <String, int>{};
  visitInterpolatedExpression(InterpolatedExpression node) {
    int n = counts[node.nameOrPosition];
    counts[node.nameOrPosition] = n == null ? 1 : n + 1;
  }
}

class _IdentFinder extends BaseVisitor {
  final String name;
  bool found = false;
  _IdentFinder(this.name);

  visitIdentifier(Identifier node) {
    if (node.name == name) found = true;
  }
  visitNode(Node node) {
    if (!found) super.visitNode(node);
  }
}
