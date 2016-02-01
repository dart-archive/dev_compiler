// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';

import '../utils.dart';

typedef bool ReachabilityPredicate(Element e);

class UsageVisitor extends GeneralizingAstVisitor {
  final _graph = new DirectedGraph<Element>();

  _enclosingElement(AstNode node) =>
    (node.getAncestor((AstNode node) => node is Declaration) as Declaration)?.element;

  _declareDep(AstNode node, Element to) {
    var from = _enclosingElement(node);
    // stderr.writeln('Dep ${node} -> ${to}');
    stderr.writeln('Dep ${from} -> ${to}');
    _graph.addEdge(from, to);
    if (to is ClassMemberElement) {
      _graph.addEdge(from, to.enclosingElement);
    } else if (to is PropertyAccessorElement) {
      _graph.addEdge(from, to.variable);
    } else if (to is PropertyInducingElement) {
      var getter = to.getter;
      if (getter != null) _graph.addEdge(from, getter);
      var setter = to.setter;
      if (setter != null) _graph.addEdge(from, setter);
    }
  }

  Iterable<ClassElement> _collectHierarchy(ClassElement e) sync* {
    yield e;
    if (e.supertype != null) yield e.supertype.element;
    if (e.interfaces != null) yield* e.interfaces.map((i) => i.element);
  }

  // @override
  // R visitPrefixExpression(PrefixExpression node) => visitExpression(node);

  @override
  visitPropertyAccess(PropertyAccess node) {
    var target = node.realTarget;
    if (target is Identifier) {
      _declareTargetPropertyDep(node, target.bestElement, node.propertyName);
    } else {
      stderr.writeln('ERROR: $target: ${target.runtimeType}');
    }
    return super.visitPropertyAccess(node);
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
  visitIdentifier(Identifier node) {
    _declareDep(node, node.bestElement);
    super.visitIdentifier(node);
  }

  ReachabilityPredicate buildReachabilityPredicate(Set<Element> roots) {
    var accessible = _graph.getTransitiveClosure(roots);
    return (Element e) {
      if (accessible.contains(e)) return true;
      if (e is FunctionElement) {
        return accessible.contains(new _UnresolvedElement(null, e.name));
      }
      if (e is MethodElement || e is PropertyAccessorElement) {
        var enclosingClass = e.getAncestor((a) => a is ClassElement);
        if (enclosingClass != null) {
          return _collectHierarchy(enclosingClass)
              .any((parent) => accessible.contains(new _UnresolvedElement(parent, e.name)));
        } else {
          return accessible.contains(new _UnresolvedElement(null, e.name));
        }
      }
      if (e is MethodElement) {
        return _collectHierarchy(e.enclosingElement)
          .any((parent) => accessible.contains(new _UnresolvedElement(parent, e.name)));
      }
      stderr.writeln('Unreachable by default: $e');
      return false;
    };
  }
}

class _UnresolvedElement implements Element {
  final Element targetElement;
  final String name;
  _UnresolvedElement(this.targetElement, this.name);
  operator==(Element other) =>
      other is _UnresolvedElement &&
      targetElement == other.targetElement &&
      name == other.name;
  get hashCode =>
      (targetElement?.hashCode ?? 0) ^ name.hashCode;

  toString() => 'Unresolved(${targetElement?.name}.$name)';

  noSuchMethod(i) => super.noSuchMethod(i);
}
