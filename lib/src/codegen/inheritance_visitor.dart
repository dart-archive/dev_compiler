// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';

import '../utils.dart';

import 'member_utils.dart';
import 'package:dev_compiler/src/info.dart';
import 'dart:io';

MemberResolver getMemberResolver(List<LibraryUnit> libraryUnits) {
  var visitor = new InheritanceVisitor();
  for (var libraryUnit in libraryUnits) {
    for (var unit in libraryUnit.libraryThenParts) {
      unit.accept(visitor);
    }
  }
  return visitor;
}

class InheritanceVisitor extends GeneralizingAstVisitor implements MemberResolver {

  final _descendentsGraph = new DirectedGraph<ClassElement>();
  // final _topLevelsByName = <String, Set<Element>>{};
  // final _membersByName = <String, Set<ClassMemberElement>>{};

  @override
  Iterable<DartType> getPossibleTypes(Expression node) sync* {
    var type = node.bestType;
    yield type;
    if (type is InterfaceType) {
      for (var descendent in _descendentsGraph.getTransitiveClosure([type.element])) {
        yield descendent.type;
      }
      yield *type.element.allSupertypes;
    }
  }

  @override
  Iterable<ClassMemberElement> getPossibleMembers(
      Expression target, ClassElement targetElement,
      MemberKind kind, CallSignature callSignature) {
    var res = new Set<ClassMemberElement>();
    var family = _getFamily(targetElement);
    for (var e in family) {
      var m = getMember(e, kind, callSignature.name);
      if (m != null && !callSignature.matches(m)) m = null;

      if (m == null) m = getMember(e, MemberKind.method, 'noSuchMethod');
      if (m != null) res.add(m);
    }
    // if (callSignature.name == 'keepMethod1') {
    //   stderr.writeln('family($targetElement) = $family');
    //   stderr.writeln('Members($targetElement, $callSignature) = $res');
    // }
    return res;
  }

  Iterable<ClassElement> _getFamily(ClassElement e) sync* {
    yield e;
    yield *_descendentsGraph.getTransitiveClosure([e]);
    for (var ancestor in e.allSupertypes) {
      yield ancestor.element;
    }
  }

  // Iterable<Element> getPossibleTargets(ClassElement)
  // Iterable<Element> _getPotentialTargets(String name, {bool allowTopLevels: true}) {
  //   return _membersByName[name] ?? const [];
  // }

  // void _foundTopLevelElement(String name, ExecutableElement e) {
  //   _topLevelsByName.putIfAbsent(name, () => new Set<Element>.identity()).add(e);
  // }
  //
  // void _foundMemberElement(String name, ClassMemberElement e) {
  //   _membersByName.putIfAbsent(name, () => new Set<ClassMemberElement>.identity()).add(e);
  // }

  // @override
  // visitTopLevelVariableDeclaration(TopLevelVariableDeclaration node) {
  //   for (var v in node.variables.variables) {
  //     _foundTopLevelElement(v.name.name, node.element);
  //   }
  // }
  //
  // @override
  // visitFunctionDeclaration(FunctionDeclaration node) {
  //   // TODO(ochafik)
  //   _foundTopLevelElement(node.name.name, node.element);
  // }

  @override
  visitClassDeclaration(ClassDeclaration node) {
    _visitClassElement(node, node.element);
  }

  @override
  visitClassTypeAlias(ClassTypeAlias node) {
    _visitClassElement(node, node.element);
  }

  void _visitClassElement(AstNode node, ClassElement e) {
    // var members = _getClassMembers(e);
    // members.forEach((name, e) {
    //   _foundMemberElement(name, e);
    // });

    // TODO(ochafik): Do some escape analysis to know which methods can
    // actually be called from each call site, instead of this broad catchall.
    for (InterfaceType ancestorType in e.allSupertypes) {
      stderr.writeln("CLASS: $e -> $ancestorType");
      _descendentsGraph.addEdge(ancestorType.element, e);
    }
  }
}
