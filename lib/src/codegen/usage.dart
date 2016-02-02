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
  // TODO(ochafik): Follow annotations.
  bool followAnnotations;
  final _graph = new DirectedGraph<Object>();

  UsageVisitor({this.followAnnotations : true, this.followReflection : true});

  AstNode getSameOrAncestor(AstNode node, bool predicate(AstNode node)) =>
      predicate(node) ? node : node.getAncestor(predicate);

  List<Element> _enclosingElement(AstNode node) {
    var ancestor = getSameOrAncestor(node, (AstNode node) {
      return node is Declaration || node is VariableDeclarationList;
    });
    if (ancestor is VariableDeclarationList) {
      return ancestor.variables.map((v) => v.element).toList();
    }
    Declaration decl = ancestor;
    Element e;
    if (decl is ClassTypeAlias) {
      e = decl.name.bestElement;
    } else {
      e = decl?.element;
    }
    // if (e == null) throw new StateError('No enclosing element for $node (${node.runtimeType}): ${node?.parent}, ${node?.parent?.parent}');
    if (e == null && node is ConstructorDeclaration) throw new StateError('No enclosing element for $node (${node.runtimeType}): ${node?.parent}, ${node?.parent?.parent}');
    return e == null ? const<Element>[] : <Element>[e];
  }

  Element _normalize(Element e) {
    if (e is ConstructorElement) {
      // Normalize generic constructors (Map<dynamic, dynamic> -> Map<K, V>).
      var cls = e.enclosingElement;
      var ctor = e.isDefaultConstructor
          ? cls.constructors.firstWhere((c) => c.isDefaultConstructor)
          : cls.getNamedConstructor(e.name);
      return ctor;
    }
    return e;
  }

  _addEdge(AstNode node, List<Element> froms, to) {
    for (Element from in froms) {
      if (from == null || to == null) throw new ArgumentError('Invalid edge: $from -> $to');
      if (from == to) continue;

      // if (to is TypeDefiningElement) {
      //   to = to.type.element;
      // }
      //'$from' == '$to') throw new StateError('$from');
      // stderr.writeln('Dep ${from} -> ${to}');
      // var f = from is ConstructorElement ? (from.isDefaultConstructor ? from.name : '${from.enclosingElement.name}.${from.name}') : from.name;//'$from', t = '$to';
      // isMap(s) => from is ConstructorElement && s.startsWith('Map') || s.endsWith('Map');
      // if (isMap(f)) {//} || isMap(t)) {
        // stderr.writeln('MAP EDGE(${node.runtimeType}): [${from.name}: ${from.runtimeType}] -> [${to.name}: ${to.runtimeType}]');
      // }
      _graph.addEdge(from, to);
    }
  }

  _declareDep(AstNode node, to) {
    assert(to is Element || to is _UnresolvedElement);

    if (to is Element) {
      to = _normalize(to);
      if (isSpecial(to)) {
        stderr.writeln("REGISTERING SPECIAL: $to");
        //return true;
      }
    }
    var froms = _enclosingElement(node);
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
    // else if (to is ClassTypeAlias) {
    //   var e = to.name.bestElement;
    //   stderr.writeln("ALIAS: $froms -> $to ($e)");
    //   if (e != null) _addEdge(node, froms, e);
    // }
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
    // else stderr.writeln("NO TYPE: $node");
    super.visitTypeName(node);
  }

  // visitNode(AstNode node) {
  //   stderr.writeln("NODE: $node (${node.runtimeType})");
  //   super.visitNode(node);
  // }

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
    _declareTargetPropertyDep(node, target.bestType.element, node.propertyName);
    return super.visitPropertyAccess(node);
  }

  @override
  visitInstanceCreationExpression(InstanceCreationExpression node) {
    _declareDep(node, node.constructorName.staticElement);
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
    _visitClassElement(node, node.element);
    super.visitClassDeclaration(node);
  }

  void _visitClassElement(AstNode node, ClassElement e) {
    for (var ancestor in _collectHierarchy(e)) {
      if (ancestor == e) continue;
      _declareDep(node, ancestor);
    }
  }

  @override
  visitClassTypeAlias(ClassTypeAlias node) {
    _visitClassElement(node, node.element);
    // stderr.writeln("ALIAS: ${node.element}: ${node.element.runtimeType}");
    // if (node.superclass != null) visitTypeName(node.superclass);
    // if (node.implementsClause != null) node.implementsClause.interfaces.forEach(visitTypeName);
    // if (node.withClause != null) node.withClause.mixinTypes.forEach(visitTypeName);
    //
    // for (var tparam in node.typeParameters.typeParameters) {
    //   if (tparam.bound != null) visitTypeName(tparam.bound);
    // }
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
        _declareTargetPropertyDep(node, enclosingClass.element, node);
      }
    }
    super.visitIdentifier(node);
  }

  bool isSpecial(Element e) {
    return
      false;
      // e.name == 'startRootIsolate' ||
      // e.name == 'topEventLoop' ||
      // e.name == 'globalPostMessageDefined' ||
      // e.name == '_global' || e.name == 'globalWindow' || e.name == 'globalWorker' ||
      // e.name == 'nextIsolateId' ||
      // e.name == 'controlPort' ||
      // e.name == 'RawReceivePortImpl' || e.name == '_controlPort' ||
      // // e.name == 'toString' ||
      // e.name == '_nativeDetectEnvironment' ||
      // e.name == 'registerDevtoolsFormatter' || // dart:_debugger
      // // e.name.endsWith('MapMixin') || e.name.endsWith('MapView') ||
      // e.name == '_StreamController' ||
      // e.name == '_LinkedHashMap' ||
      // e.name == '_LinkedHashSet' ||
      // e.name == '_HashSetBase' ||
      // e.name == 'SetBase' ||
      // e.name == 'JS_CREATE_ISOLATE' ||
      // e.name == 'JS_SET_CURRENT_ISOLATE' ||
      // e.name == 'Capability' || e.name == 'CapabilityImpl' ||
      // e.name == 'random64' || e.name == '_internal' ||
      // e.name == 'SendPort' ||
      // e.name == 'LinkedHashSetCell' || e.name == 'LinkedHashMapCell' ||
      // // e.name == '_isStringElement' || e.name == '_isNumericElement' || e.name == '_newHashTable' ||
      // e.name == '_MainManagerStub' ||
      // e.name == '_nativeInitWorkerMessageHandler' ||
      // e.name == 'IsolateNatives' ||
      // e.name == '_globalState' || // for setter
      // e.name == 'ListQueue' ||
      // e is ClassMemberElement && (
      //     e.enclosingElement.name == 'ListQueue' ||
      //     e.enclosingElement.name == 'JSArray' ||
      //     e.enclosingElement.name == '_Manager' ||
      //     e.enclosingElement.name == '_EventLoop' ||
      //     e.enclosingElement.name == '_LinkedHashSet' ||
      //     e.enclosingElement.name == '_LinkedHashMap' ||
      //     e.enclosingElement.name == '_IsolateContext'
      // ) ||
      // // e.name.endsWith('ListMixin') || e.name.endsWith('ListView') || e.name == 'ListBase' ||
      // // e.name == '_isPowerOf2' ||
      // // '$e'.contains('_isPowerOf2') ||
      // // e.name == 'markFixedList' ||
      // e.name == '_AsyncStreamControllerDispatch' ||
      // e.name == '_SyncStreamControllerDispatch' ||
      // e.name == '_NoCallbacks' ||
      // e.name == '_NoCallbackSyncStreamController';
  }
  ReachabilityPredicate buildReachabilityPredicate(Set<Element> roots) {
    var accessible = _graph.getTransitiveClosure(roots);
    bool isReachable(Element e) {
      e = _normalize(e);

      if (e == null) throw new ArgumentError.notNull('e');
      if (accessible.contains(e)) return true;
      if (e is PropertyAccessorElement && accessible.contains(e.variable)) return true;

      if (isSpecial(e)) {
        // stderr.writeln("SPECIAL: $e");
        return true;
      }
      // if (e.name == 'MapMixin') {
      //   for (var n in accessible.map((e) => e.name).toSet().toList()..sort()) {
      //     stderr.writeln('  $n');
      //   }
      //   // for (var x in accessible.toList()..sort((a, b) => a.name.compar)) {
      //   //   if (x.name == 'MapMixin') {
      //   //     throw new StateError('$e vs. $x: ${e == x}');
      //   //   }
      //   //   print('  ')
      //   // }
      //   throw new StateError('FAILED TO FIND MapMixin (roots = $roots)!');
      //   //
      //     // if (node.name.name == 'MapMixin') throw new Error();
      // }
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
      // stderr.writeln('Unreachable by default: $e: ${e.runtimeType}');
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
