// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';
import 'package:analyzer/dart/ast/ast.dart';
import 'package:analyzer/dart/ast/visitor.dart' show RecursiveAstVisitor;
import 'package:analyzer/dart/element/type.dart';

class ReifiedGenericsVisitor extends RecursiveAstVisitor {

  CompilationUnit _currentUnit;
  visitCompilationUnit(CompilationUnit node) {
    // if (node.element.source.isInSystemLibrary) return;

    try {
      _currentUnit = node;
      super.visitCompilationUnit(node);
    } finally {
      _currentUnit = null;
    }
  }

  @override
  visitIsExpression(IsExpression node) {
    _checkType(node, node.type, isAs: false);
    super.visitIsExpression(node);
  }

  @override
  visitAsExpression(AsExpression node) {
    _checkType(node, node.type, isAs: true);
    super.visitAsExpression(node);
  }

  void _checkType(AstNode node, TypeName typeName, {bool isAs}) {
    final type = typeName.type;
    if (isGenericType(type) && _currentUnit != null) {
      var location = _currentUnit.lineInfo?.getLocation(node.offset);
      var level = isAs ? 'WARNING' : 'ERROR';
      var kind = isAs ? 'as' : 'is';
      stderr.writeln("$level: ${_currentUnit?.element?.source?.uri}:${location.lineNumber}:${location.columnNumber}: Dangerous use of reified type $type in '$kind' expression:\n\t$node");
    }
  }
  bool isGenericType(DartType type) {
    if (type is TypeParameterType) {
      return true;
    } else if (type is ParameterizedType) {
      return type.typeArguments.any(isGenericType);
    }
    return false;
  }
}
