// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';

import 'member_utils.dart';
import '../utils.dart';
import 'package:analyzer/src/generated/resolver.dart';
// import 'package:dev_compiler/src/codegen/type_escape_analysis.dart';

typedef bool ReachabilityPredicate(Element e, {bool throwIfNot});
typedef void _Action();

const _retainExpressionTypes = true;
const _retainStartRootIsolate = false;
const _dropToStrings = false;

/// Special cases:
/// - Edge to each extension type's method from the implemented interface method (List.add -> JSArray.add)
/// - Root non-tree-shakable elements:
///   - Anything from dart:_runtime
///   - startRootIsolate (dart:_isolate_helper)
///   - registerDevtoolsFormatter (dart:_debugger)
///   - core.String
///   - core.Iterator
///   - core.Object
///   - interceptors.JSNumber
///   - interceptors.JSArray
///   - interceptors.JSBool
///   - JSNumber.floor
///   - JSNumber.truncate
class TreeShakingVisitor extends GeneralizingAstVisitor {
  // final _extensionMembers = <ClassElement, Map<String, ClassMemberElement>>{};
  // final _extensionMappings = <ClassElement, Set<ClassElement>>{};
  // TODO(ochafik): Detect reflect & reflectType.
  bool followReflection;
  bool debug;
  final _pendingActions = <_Action>[];
  final _specialRoots = new Set<Element>.identity();
  final _graph = new DirectedGraph<Object>();
  final MemberResolver _memberResolver;
  final TypeProvider _types;

  // final _topLevelsByName = <String, Set<Element>>{};
  // final _membersByName = <String, Set<ClassMemberElement>>{};
  // final _membersByClassByName = <ClassElement, Map<String, ClassMemberElement>>{};

  TreeShakingVisitor(this._memberResolver, this._types, {this.followReflection : true, this.debug : true});

  _flushPendingActions() {
    _pendingActions.forEach((a) => a());
    _pendingActions.clear();
  }

  // _forAllMembers(ClassElement e, action(Element e)) {
  //   e.methods.forEach(action);
  //   e.fields.forEach(action);
  //   e.accessors.forEach(action);
  // }

  // Map<String, ClassMemberElement> _getClassMembers(ClassElement e) {
  //   var members = _membersByClassByName.putIfAbsent(e, () {
  //     var members = <String, ClassMemberElement>{};
  //     _forAllMembers(e, (m) {
  //       members[m.name] = _normalize(m);
  //     });
  //     return members;
  //   });
  //   if (members == null) throw new ArgumentError('$e');
  //   return members;
  // }
  //
  // Iterable<Element> _getPotentialTargets(String name, {bool allowTopLevels: true}) {
  //   return _membersByName[name] ?? const [];
  // }
  // void _foundTopLevelElement(String name, ExecutableElement e) {
  //   _topLevelsByName.putIfAbsent(name, () => new Set<Element>.identity()).add(e);
  // }
  //
  // void _foundMemberElement(String name, ClassMemberElement e) {
  //   // if (name == 'iterator') stderr.writeln("REGISTERING($name) = ${_str(e)}");
  //   _membersByName.putIfAbsent(name, () => new Set<ClassMemberElement>.identity()).add(e);
  // }

  bool _isSpecialRoot(Element e) {
    e = _normalize(e);
    var uri = e.source.uri.toString();
    var res =
      uri.startsWith('dart:_runtime') ||
      uri == 'dart:_debugger' && (debug || e.name == 'registerDevtoolsFormatter') ||
      uri == 'dart:_isolate_helper' && e.name == 'startRootIsolate' && _retainStartRootIsolate ||
      uri.startsWith('dart:_interceptors') && e is ClassMemberElement && e.enclosingElement.name == 'JSNumber' && (
        e.name == 'floor' ||
        e.name == 'truncate'
      ) ||
      false;
    return res;
  }

  AstNode getSameOrAncestor(AstNode node, bool predicate(AstNode node)) =>
      predicate(node) ? node : node.getAncestor(predicate);

  Element _currentEnclosingElement;

  _withEnclosingElement(Element e, action()) {
    if (e != null && _isSpecialRoot(e)) _specialRoots.add(_normalize(e));
    if (e == null) {
      throw new Error();
    }

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
      var ctor = e.name == null //.isDefaultConstructor
          ? cls.type.lookUpConstructor(e.name, cls.library)
          : cls.getNamedConstructor(e.name);
      return ctor;
    }
    return e;
  }

  bool _addEdge(AstNode node, Element from, Element to) {
    if (from == null || to == null || from is LibraryElement) {
      var ancestor = node is Declaration ? node : node?.getAncestor((a) => a is Declaration);
      throw new ArgumentError('Invalid edge for $node ($from -> $to). Found ancestor: $ancestor (${ancestor.runtimeType}\n\t<- ${node?.parent}\n\t<- ${node?.parent?.parent}');
    }
    if (from == to) return false;

    // if (to.name == 'startRootIsolate') {
    // // if (to is Element && to.name.contains('LinkedHashMap') && from.name.contains('LinkedHashMap')) {
    // stderr.writeln('MAP EDGE(${node.runtimeType}): [${from.name}: ${from.runtimeType}] -> [${to.name}: ${to.runtimeType}]');
    //     '\n$node'
    //   );
    //   try { throw new Error(); } catch (e, s) {
    //     stderr.write(s);
    //   }

    return _graph.addEdge(from, to);
  }

  _declareDep(AstNode node, Element to, [Element from]) {
    from ??= _currentEnclosingElement;
    from = _normalize(from);
    to = _normalize(to);
    // if (to.name == '_isStringElement') {
    //   stderr.writeln("FROM: ${from} (${from.runtimeType}) to ${to} (${to.runtimeType})");
    //   stderr.writeln("    ${from.enclosingElement}");
    // }
    _addEdge(node, from, to);
    if (to is ConstructorElement) {
      _addEdge(node, from, to.enclosingElement);
    }
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
  visitComment(Comment node) {
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
    // for (var v in node.variables.variables) {
    //   _foundTopLevelElement(v.name.name, node.element);
    // }
    visitVariableDeclarationList(node.variables);
    // super.visitTopLevelVariableDeclaration(node);
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
    _declareTargetPropertyDep(node, target, target.bestType.element, node.propertyName.bestElement, MemberKind.getter, node.propertyName.name, const<Expression>[]);
    super.visitPropertyAccess(node);
  }

  @override
  visitSimpleIdentifier(SimpleIdentifier node) {
    var e = node.bestType?.element;
    if (e != null) _declareDep(node, e);
    super.visitSimpleIdentifier(node);
  }

  @override
  visitPrefixedIdentifier(Expression node) {
    var e = node.bestType?.element;
    if (e != null) _declareDep(node, e);
    super.visitPrefixedIdentifier(node);
  }

  // @override
  // visitExpression(Expression node) {
  //   if (_retainExpressionTypes) {
  //     var e = node.bestType?.element;
  //     if (e != null && e is MethodElement && "$node".contains("this.measure")) {
  //       stderr.writeln('Retaining ${_str(e)} (from ${node.runtimeType}: $node)');
  //       _declareDep(node, e);
  //     }
  //   }
  //   super.visitExpression(node);
  // }

  @override
  visitInstanceCreationExpression(InstanceCreationExpression node) {
    // _declareDep(node, node.staticElement);
    _declareDep(node, node.constructorName.staticElement);
    // var e = node.bestType?.element;
    // if (e != null) _declareDep(node, e);

    super.visitInstanceCreationExpression(node);
  }

  @override
  visitIndexExpression(IndexExpression node) {
    var args = <Expression>[node.index];
    var name;
    var parent = node.parent;
    if (parent is AssignmentExpression) {
      name = '[]=';
      args.add(parent.rightHandSide);
    } else {
      name = '[]';
    }
    var target = node.realTarget;
    _declareTargetPropertyDep(
        node, target, target?.bestType?.element, node.bestElement,
        MemberKind.method, name, args);
    super.visitIndexExpression(node);
  }

  @override
  visitMethodInvocation(MethodInvocation node) {
    // if (node.methodName.name == 'warmup') {
    //   stderr.writeln('${node.target}: ${node.target?.runtimeType}');
    //   // stderr.writeln(node.element.source.uri);
    //   stderr.writeln('node.methodName.bestElement = ${node.methodName.bestElement}');
    //   // stderr.writeln('node.methodName.propagatedElement = ${node.methodName.propagatedElement}');
    //   stderr.writeln('node.target?.bestType?.element = ${node.target?.bestType?.element}');
    // }
    // }
    // stderr.writeln('NODE: ${node}');
    // stderr.writeln('FROM: ${_enclosingElement(node)}');
    // stderr.writeln('node.methodName.bestElement = ${node.methodName.bestElement}');
    // stderr.writeln('node.methodName.propagatedElement = ${node.methodName.propagatedElement}');
    // stderr.writeln('node.target?.propagatedType?.element = ${node.target?.propagatedType?.element}');
    var target = node.realTarget;
    _declareTargetPropertyDep(node, target, target?.bestType?.element, node.methodName.bestElement, MemberKind.method, node.methodName.name, node.argumentList.arguments);
    super.visitMethodInvocation(node);
  }

  ClassElement get _enclosingClass {
    var e = _currentEnclosingElement;
    while (e != null && e is! ClassElement) {
      e = e.enclosingElement;
    }
    return e;
  }
  void _declareTargetPropertyDep(AstNode node, Expression target, Element targetElement, Element memberElement, MemberKind memberKind, String propertyName, List<Expression> args) {//Identifier name) {
    targetElement ??= target == null ? _enclosingClass : _types.objectType.element;
    if (targetElement is TypeDefiningElement) {
      var type = targetElement.type;
      if (type.isDynamic || type.isBottom) {
        targetElement = _types.objectType.element;
      }
    }
    if (propertyName == 'keepMethod1') stderr.writeln('TARGET($node) = $targetElement (${targetElement.type.isDynamic}; ${_types.objectType.element}; ${targetElement.runtimeType})');
    if (memberElement != null && memberElement.enclosingElement is! ClassElement) {
      if (propertyName == '[]=') stderr.writeln('DIRECT DEP: ${_str(_currentEnclosingElement)} -> ${_str(memberElement)}');
      _declareDep(node, memberElement);
    }
    if (targetElement is ClassElement) {
      var signature = new CallSignature.forArgs(propertyName, args);
      // TODO(ochafik): lookup top-level functions visible from here? (or not needed?)
      var from = _currentEnclosingElement;
      _pendingActions.add(() {
        var potentialTargets = _memberResolver.getPossibleMembers(
            null, targetElement, memberKind, signature);
        if (propertyName == 'keepMethod1') stderr.writeln('POTENTIAL($propertyName in $node): ${potentialTargets.map(_str)}');
        for (var potentialTarget in potentialTargets) {
          // stderr.writeln("LAZY DEP ${_str(from)} -> ${_str(potentialTarget)}");
          // if (propertyName == '[]=') stderr.writeln('LAZY DEP: ${_str(from)} -> ${_str(potentialTarget)}');
          _declareDep(node, potentialTarget, from);
        }
      });
      // _declareDep(node, new _UnresolvedElement(null, propertyName));
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
    // var members = _getClassMembers(e);
    // members.forEach((name, e) {
    //   _foundMemberElement(name, e);
    // });

    // TODO(ochafik): Do some escape analysis to know which methods can
    // actually be called from each call site, instead of this broad catchall.
    for (InterfaceType ancestorType in e.allSupertypes) {
      var ancestor = ancestorType.element;
      _declareDep(node, ancestor);
      // _getClassMembers(ancestor).forEach((name, ancestorMember) {
      //   var member = members[name];
      //   if (member != null) {
      //     // If one calls the ancestor member, they might actually be calling our member.
      //     _addEdge(node, ancestorMember, member);
      //     // Not the other way around?
      //     // _addEdge(node, member, ancestorMember);
      //   }
      // });
    }

    var defaultCtor = e.type.lookUpConstructor('', e.library);
    if (defaultCtor != null) {
      //
      if (_addEdge(node, e, defaultCtor)) {
        stderr.writeln("CTOR: $e -> $defaultCtor");
      }
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
    //_foundExecutableElement(node.name.name, node.element);
    if (node.isStatic) {
      _declareDep(node, node.element.enclosingElement);
    }
    _withEnclosingElement(node.element, () {
      if (node.returnType != null) visitTypeName(node.returnType);
      if (node.parameters != null) visitFormalParameterList(node.parameters);
      super.visitMethodDeclaration(node);
    });
  }

  // @override
  // visitFieldDeclaration(FieldDeclaration node) {
  //   _withEnclosingElement(node.element, () {
  //     super.visitFieldDeclaration(node);
  //   });
  // }

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
    var e = node.bestElement ?? node.staticElement;
    if (e != null) {
      _declareDep(node, e);
    } else {
      var enclosingClass = node.getAncestor((a) {
        return a is ClassDeclaration || a is ClassTypeAlias;
      });
      if (enclosingClass != null) {
        _declareTargetPropertyDep(node, null, enclosingClass.element, e, MemberKind.getter, node.name, const<Expression>[]);
      }
    }
    super.visitIdentifier(node);
  }

  final _diagnosed = new Set<Element>.identity();
  ReachabilityPredicate buildReachabilityPredicate(Set<Element> roots) {
    // stderr.writeln("#\n# BUILDING PREDICATE\n#");
    _flushPendingActions();

    var allRoots = new Set<Element>.identity()..addAll(_specialRoots)..addAll(roots);
    var accessible = _graph.getTransitiveClosure(allRoots);

    refineVisibility() {
      var accessibleClasses = accessible.where((e) => e is ClassElement).toSet();
      var newAccessible = _graph.getTransitiveClosure(allRoots, (Element e) {
        // TODO(ochafik): Evaluate options here: dropping toStrings saves 10%.
        if (_dropToStrings && e.name == 'toString') return false;
        return e is! ClassMemberElement || accessibleClasses.contains(e.enclosingElement);
      });
      stderr.writeln("Old accessible = ${accessible.length}; new = ${newAccessible.length}");
      var changed = accessible.length != newAccessible.length;
      // for (var e in accessible) {
      //   if (e is! ClassElement) continue;
      //   if (!newAccessible.contains(e)) stderr.writeln("\tNo longer accessible: ${_str(e)}");
      // }
      accessible = newAccessible;
      return changed;
    }
    var _maxVisibilityIterations = 5;
    for (int i = 0; i < _maxVisibilityIterations; i++) {
      if (!refineVisibility()) break;
    }

    stderr.writeln("ACCESSIBILITY: ${accessible.length} / ${_graph.vertices.length}");

    bool isReachable(Element e, {bool throwIfNot: false}) {
      if (e == null) throw new ArgumentError.notNull('e');
      e = _normalize(e);

      printDiagnostic() {
        if (!_diagnosed.add(e)) return;

        // stderr.writeln("${_str(e)}");//": ${e.runtimeType}");
        // stderr.writeln("SPECIAL ROOTS:\n\t${(_specialRoots.map(_str).toSet().toList()..sort()).join("\n\t")}");
        var path = _graph.getSomePath(allRoots, e);
        if (path != null) {
          stderr.writeln('FOUND PATH to ${_str(e)}:\n\t' + path.map(_str).join('\n\t -> '));
        } else {
          stderr.writeln('FOUND NO PATH ${_str(e)}');
          stderr.writeln('\tINCOMING(${_str(e)}): ${_graph.getIncoming(e)?.map(_str)}');
        }
      }
      // var uri = e.source.uri.toString();
      // if (uri.startsWith('dart:_runtime')) //e.name == 'Baz')// && e.enclosingElement.name == '_LinkedHashSet') //e.name.contains('_ChildNodeListLazy') || e.name.contains('ListBase'))
      // if (e.name == 'removeLast')
      //   printDiagnostic();

      if (accessible.contains(e) || _specialRoots.contains(e)) {
        // if (isInExtensionType() && (e.name == 'floor' || e.name == 'truncate')) stderr.writeln("EXT reachable: ${e.enclosingElement.name}.${e.name}");
        return true;
      }
      // if (e.name == '_Manager') {//uri.startsWith('dart:_runtime') && e.name == 'dynamicR') {
      //   printDiagnostic();
      //   stderr.writeln('SPECIAL TREATMENT: ${_str(e)} (_specialRoots.contains: ${_specialRoots.contains(e)})');
      //   return true;
      // }

      if (throwIfNot) {
        printDiagnostic();
        throw new StateError('Not reachable: ${_str(e)}');
      }
      // stderr.writeln('Unreachable by default: $e: ${e.runtimeType}');
      return false;
    }
    // return (e, {bool throwIfNot}) => true;
    return isReachable;
    // return (e) {
    //   var res = isReachable(e);
    //   if (e.name.contains('_ChildNodeListLazy')) stderr.writeln("REACHABLE(${e.name} = $res");
    //   return res;
    // };
  }

  // _getTreeShakingData(Element e) =>
  //     'Incoming:\n\t${(_graph.getIncoming(e) ?? []).map(_str).join(',\n\t')}';
  String _str(Element e) {
    // if (e is PropertyAccessorElement) e = e.variable;
    var suffix = '${e?.name} (${e?.runtimeType} @ ${e?.source?.uri})';
    return e is ClassMemberElement
        ? '${e?.enclosingElement?.name}.$suffix'
        : e is ClassElement
            ? 'class $suffix'
            : suffix;
  }
}
