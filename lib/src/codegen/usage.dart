// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';

import '../utils.dart';

typedef bool ReachabilityPredicate(Element e, {bool throwIfNot});

class UsageVisitor extends GeneralizingAstVisitor {
  final _extensionMembers = <ClassElement, Map<String, ClassMemberElement>>{};
  // final _extensionMappings = <ClassElement, Set<ClassElement>>{};
  // TODO(ochafik): Detect reflect & reflectType.
  bool followReflection;
  bool debug;
  final _specialRoots = new Set<Element>.identity();
  final _graph = new DirectedGraph<Object>();

  UsageVisitor(Set<ClassElement> extensionTypes, {this.followReflection : true, this.debug : true}) {
    // var extensionMappings = <ClassElement, Set<ClassElement>>{};
    for (var t in extensionTypes) {
      visit(InterfaceType a) {
        if (a.isObject || a == t) return;
        // stderr.writeln('Extension: $a');
        var members = _extensionMembers.putIfAbsent(a.element, () => <String, ClassMemberElement>{});
        for (var m in a.methods) {
          members[m.name] = m;
        }
        for (var m in a.accessors) {
          if (m.isGetter) {
            members[m.name] = m.variable;
          }
        }
        // extensionMappings.putIfAbsent(a.element, () => new Set<ClassElement>()).add(t);
        a.element.allSupertypes.forEach(visit);
      }
      t.interfaces.forEach(visit);
      // for (var a in _collectHierarchy(t, useExtensions: false)) {
      //   if (t == a /*|| a.type.isObject*/) continue;
      //   _extensionMappings.putIfAbsent(a, () => new Set<ClassElement>()).add(t);
      // }
    }
    // stderr.writeln('ExtensionMappings:');
    // _extensionMembers.forEach((from, tos) {
    //   stderr.writeln('\t${from.name}: ${tos.keys.join(", ")}');
    // });
  }

  bool _isSpecialRoot(Element e) {
    e = _normalize(e);
    var uri = e.source.uri.toString();
    var res =
      uri.startsWith('dart:_runtime') ||
      uri == 'dart:_debugger' && (debug || e.name == 'registerDevtoolsFormatter') ||
      uri == 'dart:_isolate_helper' && e.name == 'startRootIsolate' ||
      // // e.name == 'iterator' ||
      // e is ClassMemberElement && (
      //   e.name == 'values'
      // //   e.enclosingElement.name == 'Map' && e.name == 'values'
      // ) ||
      uri.startsWith('dart:core') && (
          e.name == 'List' ||
          e.name == 'String' ||
          e.name == 'Iterator' ||
          e.name == 'Object'
      ) ||
      uri.startsWith('dart:_interceptors') && (
          e.name == 'Interceptor' ||
          e.name == 'JSNumber' ||
          e.name == 'JSArray' ||
          e.name == 'JSBool' ||
          e is ClassMemberElement && (
            e.enclosingElement.name == 'JSNumber' && e.name == 'truncate' ||
            e.enclosingElement.name == 'JSArray' && e.name == 'checkGrowable'
          )
      ) ||
      uri == 'dart:_internal/iterable.dart' && (
        e.name == 'MappedIterator'
      ) ||
      uri.startsWith('dart:collection') && (
        e.name == 'ListBase' ||
        e.name == 'ListMixin' ||
        e.name == 'LinkedHashSetCell' ||
        e.name == 'LinkedHashMapCell' ||
        e.name == 'IterableBase' ||
        e.name == 'LinkedHashMapKeyIterable' ||
        e.name == 'LinkedHashMapKeyIterator' ||
        e.name == 'ListQueue' ||
        // e.name == '_LinkedHashSet' ||
        // e.name == '_LinkedHashMap' ||
        e is ClassMemberElement && (
          // e.enclosingElement.name == 'MappedIterator' ||
          // e.enclosingElement.name == 'LinkedHashMapKeyIterable' ||
          // e.enclosingElement.name == 'ListQueue' ||
          e.enclosingElement.name == '_LinkedHashSet' ||
          e.enclosingElement.name == '_LinkedHashMap' ||
          e.enclosingElement.name == 'Map' && e.name == 'values'
        )
      );
    // if (e.name == 'dynamicR') {//e.name == 'MappedIterator') { //e.enclosingElement.name == 'JSNumber') {
    //   stderr.writeln("_isSpecialRoot(${_str(e)} @ $uri) = $res");
    // }
    return res;
  }

  AstNode getSameOrAncestor(AstNode node, bool predicate(AstNode node)) =>
      predicate(node) ? node : node.getAncestor(predicate);

  Element _currentEnclosingElement;

  _withEnclosingElement(Element e, action()) {
    if (e != null && _isSpecialRoot(e)) _specialRoots.add(e);

    var oldEnclosingElement = _currentEnclosingElement;
    _currentEnclosingElement = e ?? oldEnclosingElement;
    var res = action();
    _currentEnclosingElement = oldEnclosingElement;
    return res;
  }

  Element _normalize(Element e) {
    if (e is PropertyAccessorElement) return _normalize(e.variable);
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

  _addEdge(AstNode node, Element from, to) {
    if (from == null || to == null) {
      var ancestor = node is Declaration ? node : node.getAncestor((a) => a is Declaration);
      throw new ArgumentError('Invalid edge for $node (<- ${node?.parent} <- ${node?.parent?.parent}): $from -> $to (found ancestor: $ancestor (${ancestor.runtimeType}))');
    }
    if (from == to) return;

    // if (to is Element && to.name.contains('LinkedHashMap') && from.name.contains('LinkedHashMap')) {
    //   stderr.writeln('MAP EDGE(${node.runtimeType}): [${from.name}: ${from.runtimeType}] -> [${to.name}: ${to.runtimeType}]'
    //     '\n$node'
    //   );
    // }
    _graph.addEdge(from, to);
  }

  _declareDep(AstNode node, to) {
    assert(to is Element || to is _UnresolvedElement);

    if (to is Element) to = _normalize(to);

    var from = _currentEnclosingElement;
    // if (froms.isEmpty) throw new ArgumentError('No origin for destination $to ($node)');
    _addEdge(node, from, to);
    if (to is ClassMemberElement) {
      _addEdge(node, from, to.enclosingElement);
    } else if (to is PropertyAccessorElement) {
      _addEdge(node, from, to.variable);
    } else if (to is PropertyInducingElement) {
      // TODO(ochafik): Refine.
      if (to.getter != null) _addEdge(node, from, to.getter);
      if (to.setter != null) _addEdge(node, from, to.setter);
    }
  }

  // static ClassElement _getElement(InterfaceType type) => type.element;

  Iterable<ClassElement> _collectHierarchy(ClassElement e, {bool useExtensions: true}) sync* {
    yield e;
    // if (!e.type.isObject) {
    yield* e.allSupertypes.expand((InterfaceType t) => _collectHierarchy(t.element));

      // if (useExtensions) {
      //   yield* _extensionMappings[e] ?? [];
      // }
    // }
  }

  @override
  visitLibraryDirective(LibraryDirective node) {
    // Do nothing.
  }

  @override
  visitPartDirective(PartDirective node) {
    // Do nothing.
  }

  @override
  visitPartOfDirective(PartOfDirective node) {
    // Do nothing.
  }

  @override
  visitImportDirective(ImportDirective node) {
    // Do nothing.
  }

  @override
  visitExportDirective(ExportDirective node) {
    // Do nothing.
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

  @override
  visitDeclaredIdentifier(DeclaredIdentifier node) {
    _withEnclosingElement(node.element, () {
      super.visitDeclaredIdentifier(node);
    });
  }

  // @override
  // visitDeclaration(Declaration node) {
  //   if (node is! DeclaredIdentifier &&
  //       node is! MethodDeclaration &&
  //       node is! FunctionDeclaration &&
  //       node is! ClassDeclaration &&
  //       node is! ConstructorDeclaration &&
  //       node is! FieldDeclaration &&
  //       node is! TopLevelVariableDeclaration &&
  //       node is! VariableDeclaration &&
  //       node is! ClassTypeAlias) {
  //     stderr.writeln('DECL: $node (${node.runtimeType})');
  //   }
  //   super.visitDeclaration(node);
  // }

  @override
  visitConstructorDeclaration(ConstructorDeclaration node) {
    _withEnclosingElement(node.element, () {
      var e = node.element?.redirectedConstructor;
      if (e != null) _declareDep(node, e);
      // if (node.element.enclosingElement.name.contains('LinkedHashMap')) {
      //   stderr.writeln('CONSTRUCTOR: $node');
      //   super.visitConstructorDeclaration(node);
      //   stderr.writeln('CONSTRUCTOR DONE');
      //   return;
      // }
      super.visitConstructorDeclaration(node);
    });
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
    _withEnclosingElement(node.element, () {
      var e = node.element.type.element;
      if (e != null) _declareDep(node, e);
      super.visitVariableDeclaration(node);
    });
  }

  @override
  visitTopLevelVariableDeclaration(TopLevelVariableDeclaration node) {
    visitVariableDeclarationList(node.variables);
  }

  @override
  visitVariableDeclarationList(VariableDeclarationList node) {
    for (VariableDeclaration v in node.variables) {
      _withEnclosingElement(v.element, () {
        if (node.type != null) visitTypeName(node.type);
        visitVariableDeclaration(v);
      });
    }
    // super.visitVariableDeclarationList(node);
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
    super.visitPropertyAccess(node);
  }

  @override
  visitExpression(Expression node) {
    var e = node.bestType?.element;
    if (e != null) _declareDep(node, e);
    super.visitExpression(node);
  }

  @override
  visitInstanceCreationExpression(InstanceCreationExpression node) {
    // if (node.bestType?.element?.name?.contains('LinkedHashMap') == true) {
    //   stderr.writeln('INSTANCE CREATION: $node\n\t$_currentEnclosingElement\n\t${node.bestType?.element}\n\t${node.constructorName.staticElement}\n\t${node.staticElement}');
    // }
    // _declareDep(node, node.constructorName.staticElement);
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
      if (memberElement == null) {
        _declareDep(node, new _UnresolvedElement(null, propertyName));
      }
    } else {
      var members = _extensionMembers[target];
      memberElement ??= members == null ? null : members[propertyName];

      if (memberElement != null) {
        _declareDep(node, memberElement);
      }

      for (var ancestor in _collectHierarchy(target)) {
        if (ancestor == target) continue;

        var e = ancestor.getField(propertyName);
        e ??= ancestor.getGetter(propertyName);
        e ??= ancestor.getSetter(propertyName);
        e ??= ancestor.getMethod(propertyName);
        // if ((propertyName == 'floor' || propertyName == 'truncate')) {
        //   if (e != null) {
        //     stderr.writeln('RESOLVED ON ANCESTOR ${ancestor.name} of ${target.name}: ${e.name}');
        //   } else {
        //     stderr.writeln('NOT RESOLVED ON ANCESTOR ${ancestor.name} of ${target.name}: $propertyName');
        //   }
        // }
        e ??= new _UnresolvedElement(ancestor, propertyName);
        _declareDep(node, e);
      }
    }
  }

  @override
  visitClassDeclaration(ClassDeclaration node) {
    _withEnclosingElement(node.element, () {
      _visitClassElement(node, node.element);
      super.visitClassDeclaration(node);
    });
  }

  void _visitClassElement(AstNode node, ClassElement e) {
    for (var ancestor in _collectHierarchy(e)) {
      if (ancestor == e) continue;
      _declareDep(node, ancestor);
    }

    var defaultCtor = e.type.lookUpConstructor('', e.library);
    if (defaultCtor != null) {
      _addEdge(node, e, defaultCtor);
    }
  }

  @override
  visitClassTypeAlias(ClassTypeAlias node) {
    _withEnclosingElement(node.name.bestElement, () {
      _visitClassElement(node, node.element);
      super.visitClassTypeAlias(node);
    });
  }

  @override
  visitFormalParameterList(FormalParameterList node) {
    for (var param in node.parameters) {
      _declareDep(node, param.element);
      if (param is DefaultFormalParameter) param.defaultValue?.accept(this);
      var e = param.element?.type?.element;
      if (e != null) _declareDep(node, e);
    }
    super.visitFormalParameterList(node);
  }

  @override
  visitMethodDeclaration(MethodDeclaration node) {
    _withEnclosingElement(node.element, () {
      if (node.returnType != null) visitTypeName(node.returnType);
      if (node.parameters != null) visitFormalParameterList(node.parameters);
      super.visitMethodDeclaration(node);
    });
  }

  @override
  visitFieldDeclaration(FieldDeclaration node) {
    _withEnclosingElement(node.element, () {
      super.visitFieldDeclaration(node);
    });
  }

  @override
  visitFunctionDeclarationStatement(FunctionDeclarationStatement node) {
    visitFunctionDeclaration(node.functionDeclaration);
    // super.visitFunctionDeclarationStatement(node);
  }

  @override
  visitFunctionExpression(FunctionExpression node) {
    _withEnclosingElement(node.element, () {
      if (node.parameters != null) {
        visitFormalParameterList(node.parameters);
      }
      super.visitFunctionExpression(node);
    });
  }

  @override
  visitFunctionDeclaration(FunctionDeclaration node) {
    _withEnclosingElement(node.element, () {
      if (node.returnType != null) visitTypeName(node.returnType);
      visitFunctionExpression(node.functionExpression);
      super.visitFunctionDeclaration(node);
    });
  }

  @override
  visitFunctionTypeAlias(FunctionTypeAlias node) {
    _withEnclosingElement(node.element, () {
      if (node.returnType != null) visitTypeName(node.returnType);
      visitFormalParameterList(node.parameters);
      super.visitFunctionTypeAlias(node);
    });
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

  ReachabilityPredicate buildReachabilityPredicate(Set<Element> roots) {
    // stderr.writeln("#\n# BUILDING PREDICATE\n#");

    var allRoots = new Set<Element>.identity()..addAll(_specialRoots)..addAll(roots);
    var accessible = _graph.getTransitiveClosure(allRoots);
    bool isReachable(Element e, {bool throwIfNot: false}) {
      if (e == null) throw new ArgumentError.notNull('e');
      e = _normalize(e);

      printDiagnostic() {
        stderr.writeln("$e: ${e.runtimeType}");
        stderr.writeln("SPECIAL ROOTS:\n\t${(_specialRoots.map(_str).toSet().toList()..sort()).join("\n\t")}");
        var path = _graph.getSomePath(allRoots, e);
        if (path != null) {
          stderr.writeln('FOUND PATH to $e:\n\t' + path.map(_str).join(' -> '));
        } else {
          stderr.writeln('FOUND NO PATH ${_str(e)}');
          stderr.writeln('INCOMING(${_str(e)}): ${_graph.getIncoming(e)?.map(_str)}');
        }
      }
      // if (e.name == 'generic') //e.name.contains('_ChildNodeListLazy') || e.name.contains('ListBase'))
      //   printDiagnostic();

      // isInExtensionType() {
      //   if (e is ClassMemberElement) {
      //     for (var p in _collectHierarchy(e.enclosingElement)) {
      //       if (_extensionTypes.contains(p)) return true;
      //     }
      //   }
      //   return false;
      // }
      if (accessible.contains(e) || _specialRoots.contains(e)) {
        // if (isInExtensionType() && (e.name == 'floor' || e.name == 'truncate')) stderr.writeln("EXT reachable: ${e.enclosingElement.name}.${e.name}");
        return true;
      }
      var uri = e.source.uri.toString();
      if (e.name == '_Manager') {//uri.startsWith('dart:_runtime') && e.name == 'dynamicR') {
        printDiagnostic();
        stderr.writeln('SPECIAL TREATMENT: ${_str(e)} (_specialRoots.contains: ${_specialRoots.contains(e)})');
        return true;
      }

      if (throwIfNot) {
        printDiagnostic();
        throw new StateError('Not reachable: ${_str(e)}');
      }

      // if (isInExtensionType() && (e.name == 'floor' || e.name == 'truncate')) stderr.writeln("EXT not reachable: ${e.enclosingElement.name}.${e.name}");
      //   if (_isSpecialRoot(e) || _isSpecialRoot(e.enclosingElement)) {
      //     stderr.writeln("SPECIAL: $e");
      //   // if (_specialRoots.contains(e.enclosingElement)) {
      //   //   s
      //     return true;
      //   }
      // }
      // if (_isSpecialRoot(e)) {
      //   stderr.writeln("SPECIAL: $e");
      //   stderr.writeln('INCOMING($e): ${_graph.getIncoming(e)}');
      //   return true;
      // }

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
    return isReachable;
    // return (e) {
    //   var res = isReachable(e);
    //   if (e.name.contains('_ChildNodeListLazy')) stderr.writeln("REACHABLE(${e.name} = $res");
    //   return res;
    // };
  }

  getTreeShakingData(Element e) =>
      'Incoming: ${_graph.getIncoming(e).map(_str).join(', ')}';
  String _str(Element e) {
    // if (e is PropertyAccessorElement) e = e.variable;
    var suffix = '${e.name} (${e.runtimeType} @ ${e.source.uri})';
    return e is ClassMemberElement ? '${e.enclosingElement.name}.$suffix' : suffix;
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
