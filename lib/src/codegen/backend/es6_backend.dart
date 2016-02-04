// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:analyzer/src/generated/element.dart';
import 'package:analyzer/src/generated/ast.dart' hide ConstantEvaluator;

import 'backend.dart';
import '../../js/js_ast.dart' as JS;
import '../module_builder.dart';
import '../../utils.dart' show FileSystem;

class Es6Backend extends Backend {
  final ModuleBuilder _moduleBuilder;
  final FileSystem _fileSystem;
  Es6Backend(this._moduleBuilder, this._fileSystem);

  LibraryBuilder libraryBuilder(LibraryElement element) =>
      new Es6LibraryBuilder(this, element);
}

class Es6LibraryBuilder extends LibraryBuilder {
  final Es6Backend _backend;
  final LibraryElement element;
  Es6LibraryBuilder(this._backend, this.element);

  LibraryPartBuilder libraryPartBuilder(CompilationUnitElement element) =>
      new Es6LibraryPartBuilder(_backend, element);

  void build() {
    // TODO(ochafik)
  }
}

class Es6LibraryPartBuilder extends LibraryPartBuilder {
  final Es6Backend _backend;
  final CompilationUnitElement element;
  Es6LibraryPartBuilder(this._backend, this.element);

  void buildTypedef(
      FunctionTypeAliasElement element,
      JS.TypeRef returnType, List<JS.TypeRef> paramTypes) {
    // TODO(ochafik)
  }

  ClassBuilder classBuilder(ClassElement element, ClassDeclaration node) =>
      new Es6ClassBuilder(_backend, element, node);
}

class Es6ClassBuilder extends DefaultClassBuilder {
  final Es6Backend _backend;
  final ClassElement element;
  final ClassDeclaration node;

  Es6ClassBuilder(this._backend, this.element, this.node);

  void build() {
    // TODO(ochafik)
  }
}
