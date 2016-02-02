// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';

import '../utils.dart';

typedef bool ReachabilityPredicate(Element e);

final _treeShake = Platform.environment['TREE_SHAKE'] != '0';
final _verbose = Platform.environment['VERBOSE'] == '1';

class UsageVisitor extends GeneralizingAstVisitor {
  // TODO(ochafik): Detect reflect & reflectType.
  bool followReflection;
  // TODO(ochafik): Follow annotations.
  bool followAnnotations;
  final _graph = new DirectedGraph<Object>();

  UsageVisitor({this.followAnnotations : true, this.followReflection : true});

  _enclosingElement(AstNode node) {
    var ancestor = node.getAncestor((AstNode node) {
      return node is Declaration || node is VariableDeclarationList;
    });
    if (ancestor is VariableDeclarationList) {
      return ancestor.variables;
    }
    Declaration decl = ancestor;
    var e = decl?.element;
    return e == null ? [] : [e];
  }

  _addEdge(froms, to) {
    for (var from in froms) {
      if (from == null || to == null) throw new ArgumentError('Invalid edge: $from -> $to');
      _graph.addEdge(from, to);
    }
  }
  _declareDep(AstNode node, Object to) {
    var froms = _enclosingElement(node);
    if (froms == null) {
      stderr.writeln("NO ENCLOSING ELEMENT: $node: ${node.runtimeType} (-> $to)\nparent: ${node.parent?.parent}: ${node.parent?.runtimeType}: ${node.parent is Declaration}");
      return;
    }
    // stderr.writeln('Dep ${node} -> ${to}');
    if (_verbose) stderr.writeln('Dep ${froms} -> ${to}');
    _addEdge(froms, to);
    if (to is ClassMemberElement) {
      _addEdge(froms, to.enclosingElement);
    } else if (to is PropertyAccessorElement) {
      _addEdge(froms, to.variable);
    } else if (to is PropertyInducingElement) {
      // TODO(ochafik): Refine.
      if (to.getter != null) _addEdge(froms, to.getter);
      if (to.setter != null) _addEdge(froms, to.setter);
    }
  }

  Iterable<ClassElement> _collectHierarchy(ClassElement e) sync* {
    yield e;
    if (e.supertype != null) yield e.supertype.element;
    if (e.interfaces != null) yield* e.interfaces.map((i) => i.element);
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
    var e = node.exceptionType?.type?.element;
    if (e != null) _declareDep(node, e);
    super.visitCatchClause(node);
  }

  @override
  visitPropertyAccess(PropertyAccess node) {
    var target = node.realTarget;
    if (target is Identifier) {
      _declareTargetPropertyDep(node, target.bestElement, node.propertyName);
    } else {
      if (_verbose) stderr.writeln('ERROR: $target: ${target.runtimeType}');
    }
    return super.visitPropertyAccess(node);
  }

  @override
  visitInstanceCreationExpression(InstanceCreationExpression node) {
    _declareDep(node, node.staticElement);
    super.visitInstanceCreationExpression(node);
  }

  @override
  visitMethodInvocation(MethodInvocation node) {
    // stderr.writeln('NODE: ${node}');
    // stderr.writeln('FROM: ${_enclosingElement(node)}');
    // stderr.writeln('node.methodName.bestElement = ${node.methodName.bestElement}');
    // stderr.writeln('node.methodName.propagatedElement = ${node.methodName.propagatedElement}');
    // stderr.writeln('node.target?.propagatedType?.element = ${node.target?.propagatedType?.element}');
    var target = node.target?.bestType?.element;
    _declareTargetPropertyDep(node, target, node.methodName);
    super.visitMethodInvocation(node);
  }

  void _declareTargetPropertyDep(AstNode node, Element target, Identifier name) {
    var e = name.bestElement;
    if (e != null) {
      _declareDep(node, e);
    }
    if (target is! ClassElement) {
      if (e == null) _declareDep(node, new _UnresolvedElement(null, name.name));
    } else {
      for (var ancestor in _collectHierarchy(target)) {
        _declareDep(node, new _UnresolvedElement(ancestor, name.name));
      }
    }
  }

  @override
  visitClassDeclaration(ClassDeclaration node) {
    var e = node.element;
    for (var ancestor in _collectHierarchy(e)) {
      if (ancestor == e) continue;
      _declareDep(node, ancestor);
    }
    super.visitClassDeclaration(node);
  }

  @override
  visitIdentifier(Identifier node) {
    var e = node.bestElement;
    if (e != null) {
      _declareDep(node, e);
    } else {
      var enclosingClass = node.getAncestor((a) => a is ClassDeclaration);
      if (enclosingClass != null) {
        _declareTargetPropertyDep(node, enclosingClass.element, node);
      }
    }
    super.visitIdentifier(node);
  }

  ReachabilityPredicate buildReachabilityPredicate(Set<Element> roots) {
    if (!_treeShake) return (_) => true;

    var accessible = _graph.getTransitiveClosure(roots);
    bool isReachable(Element e) {
      if (accessible.contains(e)) return true;
      if (e is FunctionElement) {
        return accessible.contains(new _UnresolvedElement(null, e.name));
      }
      // if (e is ClassMemberElement && !isReachable(e.enclosingElement)) {
      //   return false;
      // }
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
      if (_verbose) stderr.writeln('Unreachable by default: $e: ${e.runtimeType}');
      return false;
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
