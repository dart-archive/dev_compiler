// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:analyzer/src/generated/element.dart';
import 'package:analyzer/src/generated/ast.dart' hide ConstantEvaluator;

import 'backend.dart';
import '../../js/js_ast.dart' as JS;
import '../../js/precedence.dart';
import '../../closure/closure_type.dart';

class FileSystem {}

class Es6Backend extends Backend {
  final FileSystem _fileSystem;
  Es6Backend(this._fileSystem);

  LibraryBuilder libraryBuilder(LibraryElement element) =>
      new Es6LibraryBuilder(this, element);

  MethodCallBuilder methodCallBuilder() => new Es6MethodCallBuilder(this);

  TypeRef buildDartTypeRef(DartType type) {
    // TODO(ochafik)
  }

  /// Used for interop (imported Closure libs) and for basic types.
  /// TODO(ochafik): Merge [ClosureType] in this hierarchy.
  TypeRef buildClosureTypeRef(ClosureType type) {
    // TODO(ochafik)
  }

  /// Similar in mind to [MaybeQualifiedId], but not a JS [Node].
  /// Note: the same type might be imported multiple times with different prefixes(?),
  /// so a pass might just walk through the imported refs and coalesce them, maybe respecting
  /// some of the original prefixes, then outputting modules as it wants / replacing
  /// those refs as needed.
  TypeRef buildImportedTypeRef(String library, String originalPrefix, String name) {
    // TODO(ochafik)
  }
  /// Reference to a type parameter defined in a Dart class / method.
  TypeRef buildTypeParamRef(ClassBuilder owner, String name) {
    // TODO(ochafik)
  }
  TypeRef buildGenericTypeRef(TypeRef rawType, List<TypeRef> typeParams) {
    // TODO(ochafik)
  }
  TypeRef buildOpaqueTypeRef(JS.Expression expression) {
    // TODO(ochafik)
  }
}

/// JavaScript type reference.
class Es6TypeRef extends TypeRef {
  int get precedenceLevel => EXPRESSION;
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
      TypeRef returnType, List<TypeRef> paramTypes) {
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

enum DartMethodCallType {
  dsend, dcall, directDispatch, staticDispatch
}

class Es6MethodCallBuilder extends MethodCallBuilder {
  final Es6Backend _backend;
  Es6MethodCallBuilder(this._backend);

  JS.Expression build() {
    // TODO(ochafik)
  }
}
