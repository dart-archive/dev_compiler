import 'dart:io';

import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/type.dart';
import 'package:dev_compiler/src/utils.dart';
import 'package:analyzer/dart/ast/visitor.dart';
import 'package:analyzer/dart/ast/ast.dart';
import 'package:analyzer/src/generated/utilities_dart.dart';
import 'package:analyzer/src/generated/resolver.dart';
import 'package:dev_compiler/src/compiler.dart';
import 'package:dev_compiler/src/info.dart';
import 'package:dev_compiler/src/codegen/tree_shaker.dart';
import 'package:analyzer/src/dart/element/type.dart';

import 'member_utils.dart';

// typedef bool ReachabilityPredicate(Element e, {bool throwIfNot});
ReachabilityPredicate analyzeTypeEscape(AbstractCompiler compiler, Iterable<LibraryUnit> libraryUnits) {
  stderr.writeln("Type escape analysis started!");
  var flowGraph = new DirectedGraph<_Variable>();
  var analyzer = new TypeEscapeAnalyzer(flowGraph, compiler.context.typeProvider, null);
  var visitor = new TypeEscapeVisitor(analyzer, compiler.context.typeProvider);
  for (var libraryUnit in libraryUnits) {
    for (var unit in libraryUnit.libraryThenParts) {
      unit.accept(visitor);
    }
  }
  stderr.writeln("Visitation ended!");

  analyzer.rootTypes.forEach((variable, types) {
    for (var type in types) {
      variable.addType(type, flowGraph.addEdge);
    }
  });
  var exact = analyzer.propagate(analyzer.rootTypes.keys);
  stderr.writeln("Propagation ended: $exact");

  for (var v in flowGraph.vertices) {
    stderr.writeln("$v:\n\t${v.types.join("\n\t")}");
  }

  // var reachabilityGraph = new
  bool isReachable(Element e, {bool throwIfNot}) {
    // TODO
    return true;
  }
  return isReachable;
}

class _AbstractInvocation {
  final DartType bestTargetType;
  final MemberKind kind;
  final String name;
  final positionalArgumentTypes = <DartType>[];
  final namedArgumentTypes = <String, DartType>{};
  CallSignature _signature;
  CallSignature get signature => _signature;
  _AbstractInvocation(this.bestTargetType, this.kind, this.name) {
    _signature = new CallSignature(name, positionalArgumentTypes.length, namedArgumentTypes.keys);
  }
}
class _DynamicBound {
  final bool isPositive;
  final DartType type;
  _DynamicBound(this.isPositive, this.type);
  get hashCode => type.hashCode ^ isPositive.hashCode;
  operator==(o) => o is _DynamicBound && isPositive == o.isPositive && type == o.type;
  toString() => ' ${isPositive ? 'is' : 'is!'} $type';
}
typedef bool _EdgeAdder(_Variable from, _Variable to);
// Return true if changed something (typically, if any addEdge call returned true).
// typedef Iterable<ClassMemberElement> _PossibleMemberGetters(DartType staticBound, Iterable<_DynamicBound> dynamicBounds, String memberName);

class _Variable {
  final Element element;
  final AstNode node;
  final DartType _staticBound;
  final Set<_DynamicBound> _dynamicBounds;
  final String _debugName;
  final _resolvedInvocationMembers = new Set<ClassMemberElement>();
  final _types = new Set<DartType>();
  final _invocations = <_AbstractInvocation>[];
  _VariableType _type;

  _Variable(this.element, this.node, this._debugName, this._staticBound, [this._dynamicBounds]);

  DartType get type {
    _type ??= new _VariableType(this);
    return _type;
  }

  Iterable<DartType> get types => _types;

  _Variable withDynamicBound(bool positive, DartType type) {
    var bound = new _DynamicBound(positive, type);
    if (_dynamicBounds?.contains(bound) == true) return this;
    var bounds = new Set<_DynamicBound>()..add(bound);
    if (_dynamicBounds != null) bounds.addAll(_dynamicBounds);
    return new _Variable(element, node, '$_debugName$bound', _staticBound, bounds);
  }

  @override toString() => _debugName + (_dynamicBounds?.join(', ') ?? '');

  bool addType(DartType type, _EdgeAdder addEdge) {
    if (type.isDynamic) throw new ArgumentError.value(type, 'type', 'is dynamic');

    if (_staticBound != null && !type.isAssignableTo(_staticBound)) {
      throw new ArgumentError.value(type, 'type', 'not assignable to bound of $this');
    }
    if (_dynamicBounds != null) {
      for (var dynamicBound in _dynamicBounds) {
        var assignable = type.isAssignableTo(dynamicBound.type);
        if (!(dynamicBound.isPositive ? assignable : !assignable)) {
          return false;
        }
      }
    }
    if (_types.add(type)) {
      if (type is! InterfaceType) {
        throw new StateError("Cannot call members ${_invocations.map((i) => i.name).toSet()} on $type (assignable to $this)");
      }
      return true;
    }
    return false;
  }

  // void addUnresolvedType(_PossibleMemberGetters getAllPossibleMethods, _EdgeAdder addEdge) {
  //   var changed = false;
  //   _resolutionCallbacks.forEach((MemberKind kind, memberCallbacks) {
  //     memberCallbacks.forEach((String memberName, callbacks) {
  //       for (var e in getAllPossibleMethods(_staticBound, _dynamicBounds, memberName)) {
  //         _resolvedInvocationMembers.add(e);
  //         for (var callback in callbacks) {
  //           changed = callback(e, addEdge) || changed;
  //         }
  //       }
  //     });
  //   });
  //   return changed;
  // }
}

class _VariableType extends DartType {
  final _Variable variable;
  _VariableType(this.variable);
}

class _ParameterizedVariableType implements ParameterizedType {
  final ParameterizedType _original;
  @override final List<DartType> typeArguments;
  _ParameterizedVariableType(this._original, this.typeArguments);
}

//
// class _ConcreteType {
//   final DartType type;
//   final _Variable variable;
//   _ConcreteType(this.type, this.variable);
//   toString() => "$variable: $type";
// }
// class _PendingEdge {
//   final _Variable from;
//   final _Variable to;
//   _ConcreteType(this.from, this.to);
//   get hashCode => from.hashCode ^ to.hashCode;
//   operator==(o) => o is PendingEdge && from == o.from && to == o.to;
//   toString() => "$from -> $to";
// }


/// ALGO:
/// - Get root types in pending variable types
/// - while has pending variable types:
///   - for type in pending variable types:
///     - Propagate type across edges and collect pending new edges
/// - After N iterations:
///   - pass dynamic to any variable with pending variable types, and propagate it.
///     - invocations on dynamic will create links to all methods of all statically-acceptable types.
/// - Reachability graph: inverse links than type propagation, with link from var to each potential type.
///   - Drop anything not reached.
///
class TypeEscapeAnalyzer {
  final DirectedGraph<_Variable> _flowGraph;
  final MemberResolver _memberResolver;
  // final _PossibleMemberGetters _getAllPossibleMembers;
  final rootTypes = <_Variable, Set<DartType>>{};
  final _defaultParameterValuesVariables = <ParameterElement, _Variable>{};
  final TypeProvider _types;
  TypeEscapeAnalyzer(this._flowGraph, this._types, this._memberResolver);

  final _elementVariables = <Element, _Variable>{};
  _Variable _getElementVariable(Element e) {
    if (e == null) return null;
    // if (e is PropertyInducingElement) {
    //   var v = _getElementVariable(e.getter);
    //   if (v == null) {
    //     v = new _Variable(e, null, _str(e), e.type);
    //     _elementVariables[e.getter] = v;
    //     _elementVariables[e.setter] = v;
    //   }
    //   throw new ArgumentError.value(e, 'e', 'is a PropertyInducingElement, expected a PropertyAccessorElement');
    // }
    return _elementVariables.putIfAbsent(e, () {
      var debugName = _str(e);
      DartType staticBound;
      if (e is FunctionTypedElement) {
        staticBound = e.returnType;
      }
      return new _Variable(e, null, debugName, staticBound);
    });
  }

  _addTypeToVariable(DartType type, _Variable variable) {
    stderr.writeln("ADDING $type to $variable");
    if (type == null) throw new ArgumentError.value(type, 'type', 'null');
    if (type is _VariableType) {
      _flowGraph.addEdge(type.variable, variable);
    } else if (type != null) {
      rootTypes.putIfAbsent(variable, () => new Set<DartType>()).add(type);
    }
  }

  void _propagateOnce(Iterable<_Variable> roots, _EdgeAdder addEdge) {
    var varsByType = <DartType, Set<_Variable>>{};
    for (var v in roots) {
      for (var t in v.types) {
        varsByType.putIfAbsent(t, () => new Set<_Variable>()).add(v);
      }
    }
    varsByType.forEach((type, vars) {
      for (var target in _flowGraph.getTransitiveClosure(vars)) {
        if (target.addType(type, addEdge)) {
          _propagateInvocations(type, target, addEdge);
        }
      }
    });
  }

  /// Returns true if complete success, false if had to stop after [maxIterations].
  bool propagate(Iterable<_Variable> roots, {int maxIterations: 10}) {
    for (int iteration = 0; iteration < maxIterations && roots.isNotEmpty; iteration++) {
      var nextRoots = new Set<_Variable>();
      _propagateOnce(roots, (from, to) {
        if (_flowGraph.addEdge(from, to)) {
          nextRoots.add(from);
        }
      });
      roots = nextRoots;
    }

    if (roots.isEmpty) return true;

    stderr.writeln("Failed to converge in $maxIterations iterations: $roots");
    var lastRoots = new Set<_Variable>();
    for (var v in roots) {
      for (var i in v._invocations) {
        for (ExecutableElement member in _memberResolver.getPossibleMembers(
            null, i.bestTargetType.element, i.kind, i.signature)) {
          _processInvocation(i, v, member, (from, to) {
            if (_flowGraph.addEdge(from, to)) {
              lastRoots.add(from);
            }
          });
        }
      }
    }
    _propagateOnce(lastRoots, (from, to) {
      throw new StateError('Should not try to propagate mode method calls in final untyped iteration! (attempted to propagate $from -> $to)');
    });
    return false;
  }

  void _processInvocation(_AbstractInvocation invocation, _Variable returnVariable, ExecutableElement element, [_EdgeAdder addEdge]) {
    addEdge ??= _flowGraph.addEdge;

    _addTypeToVariable(_getElementVariable(element)?.type, returnVariable);

    var params = element.parameters;
    int i = 0;
    for (var argType in invocation.positionalArgumentTypes) {
      var param = params[i++];
      _addTypeToVariable(argType, _getElementVariable(param));
    }

    var paramsByName = new Map.fromIterable(
        params.where((p) => p.parameterKind == ParameterKind.NAMED),
        key: (p) => p.name);

    invocation.namedArgumentTypes.forEach((name, argType) {
      var param = paramsByName[name];
      _addTypeToVariable(argType, _getElementVariable(param));
    });

    handleUnspecifiedParam(ParameterElement param) {
      _addTypeToVariable(
          _defaultParameterValuesVariables[param]?.type ?? _types.nullType,
          _getElementVariable(param));
    }
    for (int i = invocation.positionalArgumentTypes.length, n = params.length; i < n; i++) {
      var param = params[i];
      if (param.parameterKind == ParameterKind.NAMED) break;
      handleUnspecifiedParam(param);
    }
    paramsByName.forEach((name, param) {
      if (!invocation.namedArgumentTypes.containsKey(name)) {
        handleUnspecifiedParam(param);
      }
    });
  }

  _propagateInvocations(DartType targetType, _Variable v, _EdgeAdder addEdge) {
    ClassElement cls = targetType.element;
    for (var invocation in v._invocations) {
      var e = getMember(cls, invocation.kind, invocation.name);
      if (e == null) {
        stderr.writeln("No ${invocation.kind} ${invocation.name} defined on $targetType (assignable to $this)");
      } else {
        v._resolvedInvocationMembers.add(e);
        _processInvocation(invocation, v, e, addEdge);
      }
    }
  }

  void declareDefaultParameterValue(ParameterElement element, _Variable v) {
    _defaultParameterValuesVariables[element] = v;
  }
}

/// Finds all the variables / return types where types can propagate.
/// See [GeneralizingAstVisitor].
class TypeEscapeVisitor extends RecursiveAstVisitor<DartType> {
  // final flowGraph = new DirectedGraph<_Variable>();
  // final rootVariables = new Set<_Variable>();
  final TypeProvider _types;
  final TypeEscapeAnalyzer _typeEscapeAnalyzer;

  TypeEscapeVisitor(this._typeEscapeAnalyzer, this._types);

  @override
  visitVariableDeclaration(VariableDeclaration node) {
    var v = _typeEscapeAnalyzer._getElementVariable(node.element);
    var init = node.initializer;
    _typeEscapeAnalyzer._addTypeToVariable(
        init == null ? _types.nullType : init.accept(this), v);
  }

  @override
  visitDefaultFormalParameter(DefaultFormalParameter node) {
    var v = new _Variable(null, null, 'default param of ' + _str(node.element), node.element.type);
    _typeEscapeAnalyzer._addTypeToVariable(node.defaultValue.accept(this), v);
    // We introduce some indirection: if the parameter is always provided, then
    // we don't depend on it / its concrete types don't escape.
    _typeEscapeAnalyzer.declareDefaultParameterValue(node.element, v);
  }

  @override
  visitAssignmentExpression(AssignmentExpression node) {
    var lhs = node.leftHandSide;
    if (lhs is IndexExpression) {
      return _processMethodInvocation(
          node, MemberKind.method, VoidTypeImpl.instance, lhs.realTarget, null, '[]=', [lhs.index, node.rightHandSide]);
    }
    if (lhs is SimpleIdentifier && lhs.bestElement is PropertyAccessorElement) {
      var left = node.leftHandSide.accept(this);
      return _processMethodInvocation(
          node, MemberKind.setter, left, null, null, lhs.bestElement.setter.name, [node.rightHandSide]);
    }
    var left = node.leftHandSide.accept(this);
    var right = node.rightHandSide.accept(this);
    if (left is! _VariableType) throw new StateError("No LHS variable: $node: ${node.leftHandSide.runtimeType} ($left: ${left.runtimeType})");
    if (right == null) {
      stderr.writeln('Failed to get type of RHS: $node (rhs.runtimeType = ${node.rightHandSide.runtimeType})');
    } else {
      _typeEscapeAnalyzer._addTypeToVariable(right, left.variable);
    }
  }

  // dynamic/*=T*/ _makeVar/*<T>*/(Expression node, dynamic/*T*/ action(_Variable v)) {
  //   var v = new _Variable(null, node, '$node', node.bestType);
  //   return action(v);
  // }

  @override
  DartType visitSimpleIdentifier(SimpleIdentifier node) {
    var e = node.bestElement;
    if (e is TypeDefiningElement) {
      return e.type;
    } else if (e is LocalVariableElement || e is ParameterElement) {
      // TODO: resolve against target variable: could be a subclass getter, for instance.
      return _typeEscapeAnalyzer._getElementVariable(e)?.type;
    } else if (e is PropertyAccessorElement) {
      // TODO: resolve as a method.
      return _typeEscapeAnalyzer._getElementVariable(e.variable)?.type;
    } else if (e != null) {
      // TODO
      stderr.writeln('IDENT: node = $node, e = $e: ${e.runtimeType}');
    }
    return null;
  }

  // DartType visitPrefixedIdentifier(PrefixedIdentifier node) {
  //   // TODO: resolve like a method call.
  //   var e = node.bestElement;
  //
  //     _getVariable(e)?.type;
  // }

  DartType _processMethodInvocation(Expression node, MemberKind kind, DartType returnTypeBound, Expression target, ExecutableElement methodElement, String name, List<Expression> args) {
    var returnVariable = new _Variable(null, node, '$node', returnTypeBound);

    var invocation = new _AbstractInvocation(target?.bestType, kind, name);
    visit(Expression n) {
      var t = n.accept(this);
      if (t == null) throw new ArgumentError.value(n, 'n', 'got no type!');
      return t;
    }
    for (var arg in args) {
      if (arg is NamedExpression) {
        var name = arg.name.label.name;
        invocation.namedArgumentTypes[name] = visit(arg.expression);
      } else {
        invocation.positionalArgumentTypes.add(visit(arg));
      }
    }

    if (target != null) {
      returnVariable._invocations.add(invocation);
    } else {
      _typeEscapeAnalyzer._processInvocation(invocation, returnVariable, methodElement);
    }
    return returnVariable.type;
  }

  @override
  DartType visitMethodInvocation(MethodInvocation node) =>
      _processMethodInvocation(
          node,
          MemberKind.method,
          node.bestType,
          node.realTarget,
          node.methodName.bestElement,
          node.methodName.name,
          node.argumentList.arguments);

  @override
  DartType visitFunctionExpression(FunctionExpression node) {
    return _typeEscapeAnalyzer._getElementVariable(node.element)?.type;
  }

  @override
  DartType visitFunctionExpressionInvocation(FunctionExpressionInvocation node) {
    var functionType = node.function.accept(this);
    if (functionType is! _VariableType) throw new StateError('Not a variable type: ${functionType}: ${functionType.runtimeType} ($node; ${node.function.runtimeType})');
    stderr.writeln('FunctionExpressionInvocation: $node: ${node.bestElement}');
    return _typeEscapeAnalyzer._getElementVariable(node.bestElement)?.type;
  }

  DartType visitLiteral(Literal node) => node.bestType;

  @override
  DartType visitBooleanLiteral(BooleanLiteral node) => visitLiteral(node);

  @override
  DartType visitDoubleLiteral(DoubleLiteral node) => visitLiteral(node);

  @override
  DartType visitIntegerLiteral(IntegerLiteral node) => visitLiteral(node);

  @override
  DartType visitNullLiteral(NullLiteral node) => visitLiteral(node);

  @override
  DartType visitSimpleStringLiteral(SimpleStringLiteral node) => visitLiteral(node);

  @override
  DartType visitStringInterpolation(StringInterpolation node) => visitLiteral(node);

  @override
  DartType visitSymbolLiteral(SymbolLiteral node) => visitLiteral(node);

  @override
  DartType visitListLiteral(ListLiteral node) {
    ParameterizedType type = node.bestType;
    var elementTypeVariable = new _Variable(null, node, 'item type for $node', type.typeArguments.single);
    for (var element in node.elements) {
      _typeEscapeAnalyzer._addTypeToVariable(element.accept(this), elementTypeVariable);
    }
    // TODO(ochafik): Handle / propagate.
    return new _ParameterizedVariableType(type, [elementTypeVariable]);
  }

  @override
  DartType visitMapLiteral(MapLiteral node) {
    ParameterizedType type = node.bestType;
    assert(type.typeArguments.length == 2);
    var keyTypeVariable = new _Variable(null, node, 'key type for $node', type.typeArguments.first);
    var valueTypeVariable = new _Variable(null, node, 'value type for $node', type.typeArguments.last);
    for (var entry in node.entries) {
      _typeEscapeAnalyzer._addTypeToVariable(entry.key.accept(this), keyTypeVariable);
      _typeEscapeAnalyzer._addTypeToVariable(entry.value.accept(this), valueTypeVariable);
    }
    // TODO(ochafik): Handle / propagate.
    return new _ParameterizedVariableType(type, [keyTypeVariable, valueTypeVariable]);
  }
}

String _str(Element e) {
  // if (e is PropertyAccessorElement) e = e.variable;
  var suffix = '${e.name} (${e.runtimeType} @ ${e.source?.uri})';
  return e is ClassMemberElement
    ? '${e.enclosingElement.name}.$suffix'
    : e is ClassElement
        ? 'class $suffix'
        : suffix;
}
