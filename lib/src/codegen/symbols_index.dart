// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/src/generated/ast.dart';
import 'package:analyzer/src/generated/element.dart';

class SymbolIndexingVisitor extends GeneralizingAstVisitor {
  final _topLevelsByName = <String, Set<Element>>{};
  final _membersByName = <String, Set<ClassMemberElement>>{};
  final _membersByClassByName = <ClassElement, Map<String, ClassMemberElement>>{};

  getClassMembers(ClassElement e) {
    return _membersByClassByName.putIfAbsent(e, () {
      var members = <String, ClassMemberElement>{};
      for (var m in e.methods) {
        members[m.name] = m;
      }
      for (var m in e.fields) {
        members[m.name] = m;
      }
      return members;
    });
  }

  Iterable<Element> getPotentialTargets(String name, {bool allowTopLevels: true}) {
    return _membersByName[name] ?? const [];
  }
  void _foundTopLevelElement(String name, ExecutableElement e) {
    _topLevelsByName.putIfAbsent(name, () => new Set<Element>.identity()).add(e);
  }

  // void _foundExecutableElement(String name, ExecutableElement e) {
  //   if (e is ClassMemberElement) {
  //     _foundMemberElement(name, e);
  //   } else {
  //     _foundTopLevelElement(name, e);
  //   }
  // }
  void _foundMemberElement(String name, ClassMemberElement e) {
    if (name == 'add') stderr.writeln("REGISTERING($name) = ${_str(e)}");
    _membersByName.putIfAbsent(name, () => new Set<ClassMemberElement>.identity()).add(e);
    // _membersByClassByName.putIfAbsent(e.enclosingElement, () => <String, ClassMemberElement>{})[name] = e;
  }

  @override
  visitTopLevelVariableDeclaration(TopLevelVariableDeclaration node) {
    for (var v in node.variables.variables) {
      _foundTopLevelElement(v.name.name, node.element);
    }
    super.visitTopLevelVariableDeclaration(node);
  }

  @override
  visitClassDeclaration(ClassDeclaration node) {
    _visitClassElement(node, node.element);
  }

  void _visitClassElement(AstNode node, ClassElement e) {
    for (var m in e.methods) {
      _foundMemberElement(m.name, m);
    }
    for (var m in e.fields) {
      _foundMemberElement(m.name, m);
    }
  }

  @override
  visitClassTypeAlias(ClassTypeAlias node) {
    _visitClassElement(node, node.element);
  }

  @override
  visitMethodDeclaration(MethodDeclaration node) {
    //_foundExecutableElement(node.name.name, node.element);
  }

  @override
  visitFieldDeclaration(FieldDeclaration node) {
    // for (var field in node.fields.variables) {
    //   _foundMemberElement(field.name.name, field.element as FieldElement);
    // }
  }

  // @override
  // visitFunctionDeclarationStatement(FunctionDeclarationStatement node) {
  //   visitFunctionDeclaration(node.functionDeclaration);
  //   // super.visitFunctionDeclarationStatement(node);
  // }

  @override
  visitFunctionTypeAlias(FunctionTypeAlias node) {
    _foundTopLevelElement(node.name.name, node.element);
  }
}
