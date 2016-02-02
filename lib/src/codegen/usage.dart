// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';

import '../utils.dart';

typedef bool ReachabilityPredicate(Element e);

class UsageVisitor extends GeneralizingAstVisitor {
  // TODO(ochafik): Detect reflect & reflectType.
  bool followReflection;
  bool debug;
  final _specialRoots = new Set<Element>();
  final _graph = new DirectedGraph<Object>();

  UsageVisitor({this.followReflection : true, this.debug : true});

  AstNode getSameOrAncestor(AstNode node, bool predicate(AstNode node)) =>
      predicate(node) ? node : node.getAncestor(predicate);

  List<Element> _currentEnclosingElement = const<Element>[];
  @override
  visitNode(AstNode node) {
    if (node is Declaration && node.element != null && _isSpecial(node.element)) {
      _specialRoots.add(node.element);
    }
    var oldEnclosingElement = _currentEnclosingElement;
    setEnclosing(Element e) {
      _currentEnclosingElement = e == null ? [] : [e];
    }
    if (node is Declaration) {
      if (node is ClassTypeAlias) {
        var e = node.name.bestElement;
        if (e != node.element) throw new Error();
      }
      setEnclosing(node.element);
    } else if (node is VariableDeclarationList) {
      _currentEnclosingElement = node.variables.map((v) => v.element).toList();
    } else if (node is ClassTypeAlias) {
      setEnclosing(node.name.bestElement);
    }

    // stderr.writeln("NODE: $node (${node.runtimeType})");
    super.visitNode(node);

    _currentEnclosingElement = oldEnclosingElement;
  }

  Element _normalize(Element e) {
    // if (e is PropertyAccessorElement) return _normalize(e.variable);
    if (e is ConstructorElement) {
      // Normalize generic constructors (Map<dynamic, dynamic> -> Map<K, V>).
      var cls = e.enclosingElement;
      var ctor = e.isDefaultConstructor
          ? cls.type.lookUpConstructor(e.name, cls.library)
          : cls.getNamedConstructor(e.name);
      return ctor;
    }
    return e;
  }

  _addEdge(AstNode node, List<Element> froms, to) {
    for (Element from in froms) {
      if (from == null || to == null) throw new ArgumentError('Invalid edge: $from -> $to');
      if (from == to) continue;

      // if (to is Element && to.name == '_Manager') {
      //   stderr.writeln('MAP EDGE(${node.runtimeType}): [${from.name}: ${from.runtimeType}] -> [${to.name}: ${to.runtimeType}]'
      //     // '\n$node'
      //   );
      // }
      _graph.addEdge(from, to);
    }
  }

  _declareDep(AstNode node, to) {
    assert(to is Element || to is _UnresolvedElement);

    if (to is Element) to = _normalize(to);

    var froms = _currentEnclosingElement;
    // if (froms.isEmpty) throw new ArgumentError('No origin for destination $to ($node)');
    _addEdge(node, froms, to);
    if (to is ClassMemberElement) {
      _addEdge(node, froms, to.enclosingElement);
    } else if (to is PropertyAccessorElement) {
      _addEdge(node, froms, to.variable);
    } else if (to is PropertyInducingElement) {
      // TODO(ochafik): Refine.
      if (to.getter != null) _addEdge(node, froms, to.getter);
      if (to.setter != null) _addEdge(node, froms, to.setter);
    }
  }

  // static ClassElement _getElement(InterfaceType type) => type.element;

  Iterable<ClassElement> _collectHierarchy(ClassElement e) sync* {
    yield e;
    yield* e.allSupertypes.expand((InterfaceType t) => _collectHierarchy(t.element));
    // if (e.supertype != null) yield e.supertype.element;
    // if (e.interfaces != null) yield* e.interfaces.map(_getElement);
    // if (e.mixins != null) yield* e.mixins.map(_getElement);
  }

  @override
  visitTypeName(TypeName node) {
    var e = node?.type?.element;
    if (e != null) _declareDep(node, e);
    super.visitTypeName(node);
  }

  @override
  visitAnnotatedNode(AnnotatedNode node) {
    for (var annotation in node.metadata) {
      _declareDep(node, annotation.elementAnnotation.element);
    }
    super.visitAnnotatedNode(node);
  }

  visitConstructorDeclaration(ConstructorDeclaration node) {
    var e = node.element?.redirectedConstructor;
    if (e != null) _declareDep(node, e);
    super.visitConstructorDeclaration(node);
  }

  @override
  visitSuperConstructorInvocation(SuperConstructorInvocation node) {
    _declareDep(node, node.staticElement);
    super.visitSuperConstructorInvocation(node);
  }

  @override
  visitConstructorFieldInitializer(ConstructorFieldInitializer node) {
    _declareDep(node, node.fieldName.bestElement);
    super.visitConstructorFieldInitializer(node);
  }

  @override
  visitRedirectingConstructorInvocation(RedirectingConstructorInvocation node) {
    _declareDep(node, node.staticElement);
    super.visitRedirectingConstructorInvocation(node);
  }

  @override
  visitVariableDeclaration(VariableDeclaration node) {
    var e = node.element.type.element;
    if (e != null) _declareDep(node, e);
    super.visitVariableDeclaration(node);
  }

  @override
  visitVariableDeclarationList(VariableDeclarationList node) {
    node.variables.forEach(visitVariableDeclaration);
    super.visitVariableDeclarationList(node);
  }

  @override
  visitIsExpression(IsExpression node) {
    _declareDep(node, node.type.type.element);
    super.visitIsExpression(node);
  }

  @override
  visitAsExpression(AsExpression node) {
    _declareDep(node, node.type.type.element);
    super.visitAsExpression(node);
  }

  @override
  visitCatchClause(CatchClause node) {
    // TODO(ochafik): Redundant with visitTypeName?
    var e = node.exceptionType?.type?.element;
    if (e != null) _declareDep(node, e);
    super.visitCatchClause(node);
  }

  @override
  visitPropertyAccess(PropertyAccess node) {
    var target = node.realTarget;
    _declareTargetPropertyDep(node, target.bestType.element, node.propertyName.bestElement, node.propertyName.name);
    return super.visitPropertyAccess(node);
  }

  @override
  visitInstanceCreationExpression(InstanceCreationExpression node) {
    _declareDep(node, node.constructorName.staticElement);
    _declareDep(node, node.staticElement);
    super.visitInstanceCreationExpression(node);
  }

  @override
  visitIndexExpression(IndexExpression node) {
    var op = node.parent is AssignmentExpression ? '[]=' : '[]';
    _declareTargetPropertyDep(node, node.realTarget?.bestType?.element, node.bestElement, op);
    super.visitIndexExpression(node);
  }

  @override
  visitMethodInvocation(MethodInvocation node) {
    // stderr.writeln('NODE: ${node}');
    // stderr.writeln('FROM: ${_enclosingElement(node)}');
    // stderr.writeln('node.methodName.bestElement = ${node.methodName.bestElement}');
    // stderr.writeln('node.methodName.propagatedElement = ${node.methodName.propagatedElement}');
    // stderr.writeln('node.target?.propagatedType?.element = ${node.target?.propagatedType?.element}');
    var target = node.target?.bestType?.element;
    _declareTargetPropertyDep(node, target, node.methodName.bestElement, node.methodName.name);
    super.visitMethodInvocation(node);
  }

  void _declareTargetPropertyDep(AstNode node, Element target, Element memberElement, String propertyName) {//Identifier name) {
    if (memberElement != null) {
      _declareDep(node, memberElement);
    }
    if (target is! ClassElement) {
      if (memberElement == null) _declareDep(node, new _UnresolvedElement(null, propertyName));
    } else {
      for (var ancestor in _collectHierarchy(target)) {
        _declareDep(node, new _UnresolvedElement(ancestor, propertyName));
      }
    }
  }

  @override
  visitClassDeclaration(ClassDeclaration node) {
    _visitClassElement(node, node.element);
    super.visitClassDeclaration(node);
  }

  void _visitClassElement(AstNode node, ClassElement e) {
    for (var ancestor in _collectHierarchy(e)) {
      if (ancestor == e) continue;
      _declareDep(node, ancestor);
    }

    var defaultCtor = e.type.lookUpConstructor('', e.library);
    if (defaultCtor != null) {
      _addEdge(node, [e], defaultCtor);
    }
  }

  @override
  visitClassTypeAlias(ClassTypeAlias node) {
    _visitClassElement(node, node.element);
    super.visitClassTypeAlias(node);
  }

  @override
  visitFormalParameterList(FormalParameterList node) {
    for (var param in node.parameters) {
      var e = param.element?.type?.element;
      if (e != null) _declareDep(node, e);
    }
    super.visitFormalParameterList(node);
  }

  @override
  visitMethodDeclaration(MethodDeclaration node) {
    if (node.returnType != null) visitTypeName(node.returnType);
    if (node.parameters != null) visitFormalParameterList(node.parameters);
    super.visitMethodDeclaration(node);
  }

  @override
  visitFunctionDeclaration(FunctionDeclaration node) {
    if (node.returnType != null) visitTypeName(node.returnType);
    if (node.functionExpression.parameters != null) {
      visitFormalParameterList(node.functionExpression.parameters);
    }
    super.visitFunctionDeclaration(node);
  }

  @override
  visitFunctionTypeAlias(FunctionTypeAlias node) {
    if (node.returnType != null) visitTypeName(node.returnType);
    visitFormalParameterList(node.parameters);
    super.visitFunctionTypeAlias(node);
  }

  // @override
  // visitPrefixedIdentifier(PrefixedIdentifier node) {
  //   super.visitPrefixedIdentifier(node);
  // }

  @override
  visitIdentifier(Identifier node) {
    var e = node.bestElement;
    if (e != null) {
      _declareDep(node, e);
    } else {
      var enclosingClass = getSameOrAncestor(node, (a) {
        return a is ClassDeclaration || a is ClassTypeAlias;
      });
      if (enclosingClass != null) {
        _declareTargetPropertyDep(node, enclosingClass.element, node.bestElement, node.name);
      }
    }
    super.visitIdentifier(node);
  }

  bool _isSpecial(Element e) {
    var uri = e.source.uri.toString();
    return
      uri == 'dart:_debugger' && (debug || e.name == 'registerDevtoolsFormatter') ||
      uri == 'dart:_isolate_helper' && e.name == 'startRootIsolate' ||
      // uri == 'dart:_interceptors' ||
      // e. /
      // e.name == 'floor' ||
      e.name == 'iterator' ||
      e.name == 'values' ||
      e is ClassMemberElement && (
        e.enclosingElement.name == 'JSNumber' ||
        e.enclosingElement.name == 'JSArray' ||
        e.enclosingElement.name == 'JSBool'
      ) ||
      uri == 'dart:collection' && (
        e.name == 'LinkedHashSetCell' ||
        e.name == 'LinkedHashMapCell' ||
        e is ClassMemberElement && (
          e.enclosingElement.name == 'MappedIterator' ||
          e.enclosingElement.name == 'LinkedHashMapKeyIterable' ||
          e.enclosingElement.name == 'ListQueue' ||
          e.enclosingElement.name == '_LinkedHashSet' ||
          e.enclosingElement.name == '_LinkedHashMap'
        )
      );
  }
  ReachabilityPredicate buildReachabilityPredicate(Set<Element> roots) {
    var accessible = _graph.getTransitiveClosure(
        new Set<Element>()..addAll(_specialRoots)..addAll(roots));
    bool isReachable(Element e) {
      e = _normalize(e);

      if (e == null) throw new ArgumentError.notNull('e');
      if (accessible.contains(e)) return true;

      // if (e is ClassMemberElement) {
      //   if (_isSpecial(e) || _isSpecial(e.enclosingElement)) {
      //     stderr.writeln("SPECIAL: $e");
      //   // if (_specialRoots.contains(e.enclosingElement)) {
      //   //   s
      //     return true;
      //   }
      // }
      // if (_isSpecial(e)) {
      //   stderr.writeln("SPECIAL: $e");
      //   stderr.writeln('INCOMING($e): ${_graph.getIncoming(e)}');
      //   // if (e.name.contains('_Manager')) {
      //     var path;
      //     for (var root in roots) {
      //       path = _graph.getSomePath(roots, e);
      //       if (path != null) {
      //         stderr.writeln('FOUND PATH from $root to $e:\n\t' + path.join('\n\t'));
      //         break;
      //       }
      //     }
      //     if (path == null) stderr.writeln('FOUND NO PATH $e');
      //   // }
      //   return true;
      // }

      bool containsUnresolved() {
        if (e is FunctionElement) {
          return accessible.contains(new _UnresolvedElement(null, e.name));
        }
        if (e is ClassMemberElement || e is PropertyAccessorElement) {
          var enclosingClass = e.getAncestor((a) => a is ClassElement);
          if (enclosingClass != null) {
            return _collectHierarchy(enclosingClass)
                .any((ClassElement parent) {
                  var parentMemberElement;
                  if (e is PropertyAccessorElement) {
                    parentMemberElement = parent.getField(e.variable.name);
                  } else if (e is PropertyInducingElement) {
                    parentMemberElement = parent.getField(e.name);
                  } else if (e is MethodElement) {
                    parentMemberElement = parent.getMethod(e.name);
                  }
                  return parentMemberElement != null && accessible.contains(parentMemberElement) ||
                      accessible.contains(new _UnresolvedElement(parent, e.name));
                });
          } else {
            return accessible.contains(new _UnresolvedElement(null, e.name));
          }
        }
        // stderr.writeln('Unreachable by default: $e: ${e.runtimeType}');
        return false;
      }
      var res = containsUnresolved();
      // if (e.name.contains('Map') && res) stderr.writeln("CONTAINS UNRESOLVED: $e");
      return res;
    }
    return isReachable;
  }
}

class _UnresolvedElement {
  final Element targetElement;
  final String name;
  _UnresolvedElement(this.targetElement, this.name);
  operator==(other) =>
      other is _UnresolvedElement &&
      targetElement == other.targetElement &&
      name == other.name;
  get hashCode =>
      (targetElement?.hashCode ?? 0) ^ name.hashCode;

  toString() => 'Unresolved(${targetElement?.name}.$name)';

  noSuchMethod(i) => super.noSuchMethod(i);
}
