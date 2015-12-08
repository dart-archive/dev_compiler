import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';
import 'package:analyzer/src/generated/scanner.dart';

/// Index of variable assignments and declarations.
abstract class AssignmentsIndex {
  /// Gets all the values ever assigned to [e], possibly expanding any compound
  /// assignment expression (e.g. `i += 2` yields an assigned value of
  /// `i + 2`).
  List<Expression> getAssignedValues(VariableElement e);

  /// Get the declaration of [e], or `null` if there is none.
  VariableDeclaration getDeclaration(VariableElement e);
}

/// Create an index of variable assignments and declarations occurring in all
/// the provided [nodes].
AssignmentsIndex indexLocalAssignments(Iterable<AstNode> nodes) {
  var visitor = new _LocalAssignmentsVisitor();
  nodes.forEach((n) => n.accept(visitor));
  return visitor;
}

/// Visits variable declarations and assignments and exposes an
/// [AssignmentIndex] interface.
///
/// TODO(ochafik): Introduce flow analysis (a variable may be nullable in
/// some places and not in others).
class _LocalAssignmentsVisitor extends GeneralizingAstVisitor
    implements AssignmentsIndex {
  final _assignedValues = <VariableElement, List<Expression>>{};
  final _declarations = <VariableElement, VariableDeclaration>{};

  @override
  List<Expression> getAssignedValues(VariableElement e) =>
      _assignedValues[e] ?? const <Expression>[];

  @override
  VariableDeclaration getDeclaration(VariableElement e) => _declarations[e];

  @override
  visitVariableDeclaration(VariableDeclaration node) {
    if (node.element is LocalVariableElement) {
      _declarations[node.element] = node;
    }
    super.visitVariableDeclaration(node);
  }

  @override
  visitAssignmentExpression(AssignmentExpression node) {
    var lhs = node.leftHandSide;
    var e = _getLocalVariable(lhs);
    if (e != null) _addLocalAssignment(e, node.rightHandSide);
    super.visitAssignmentExpression(node);
  }

  @override
  visitBinaryExpression(BinaryExpression node) {
    var op = node.operator.type;
    if (op.isAssignmentOperator) {
      var e = _getLocalVariable(node.leftOperand);
      if (e != null) {
        _addLocalAssignment(
            e,
            new BinaryExpression(
                node.leftOperand, _expandAssignmentOp(op), node.rightOperand));
      }
    }
    super.visitBinaryExpression(node);
  }

  @override
  visitPostfixExpression(PostfixExpression node) {
    var op = node.operator.type;
    if (op.isAssignmentOperator) {
      var e = _getLocalVariable(node.operand);
      if (e != null) {
        _addLocalAssignment(
            e, new PostfixExpression(node.operand, _expandAssignmentOp(op)));
      }
    }
    super.visitPostfixExpression(node);
  }

  @override
  visitPrefixExpression(PrefixExpression node) {
    var op = node.operator.type;
    if (op.isAssignmentOperator) {
      var e = _getLocalVariable(node.operand);
      if (e != null) {
        _addLocalAssignment(
            e, new PrefixExpression(_expandAssignmentOp(op), node.operand));
      }
    }
    super.visitPrefixExpression(node);
  }

  void _addLocalAssignment(VariableElement e, Expression value) =>
      _assignedValues.putIfAbsent(e, () => <Expression>[]).add(value);

  LocalVariableElement _getLocalVariable(Expression target) {
    if (target is SimpleIdentifier) {
      var e = target.bestElement;
      if (e is LocalVariableElement && e is! PropertyAccessorElement) {
        return e;
      }
    }
    return null;
  }
}

const Map<TokenType, TokenType> _opByAssignmentOp = const {
  TokenType.AMPERSAND_EQ: TokenType.AMPERSAND,
  TokenType.BANG_EQ: TokenType.BANG,
  TokenType.BAR_EQ: TokenType.BAR,
  TokenType.CARET_EQ: TokenType.CARET,
  TokenType.EQ_EQ: TokenType.EQ,
  TokenType.GT_EQ: TokenType.GT,
  TokenType.GT_GT_EQ: TokenType.GT_GT,
  TokenType.INDEX_EQ: TokenType.INDEX,
  TokenType.LT_EQ: TokenType.LT,
  TokenType.LT_LT_EQ: TokenType.LT_LT,
  TokenType.MINUS_EQ: TokenType.MINUS,
  TokenType.PERCENT_EQ: TokenType.PERCENT,
  TokenType.PLUS_EQ: TokenType.PLUS,
  TokenType.QUESTION_QUESTION_EQ: TokenType.QUESTION_QUESTION,
  TokenType.SLASH_EQ: TokenType.SLASH,
  TokenType.STAR_EQ: TokenType.STAR,
  TokenType.TILDE_SLASH_EQ: TokenType.TILDE_SLASH,
};

/// Transforms `+=` to `+`, `??=` to `??`, etc.
_expandAssignmentOp(TokenType assignmentOp) {
  assert(assignmentOp.isAssignmentOperator);
  var op = _opByAssignmentOp[assignmentOp];
  if (op == null) throw new ArgumentError("Can't expand op $assignmentOp");
  return op;
}
