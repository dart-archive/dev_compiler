// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:analyzer/src/generated/element.dart';
import 'package:analyzer/src/generated/ast.dart' hide ConstantEvaluator;

import 'backend.dart';
import 'module_builder.dart';
import '../compiler.dart' show AbstractCompiler;
import '../js/js_ast.dart' as JS;
import 'js_names.dart' as JS;
import 'js_metalet.dart' as JS;

class Es6Backend extends Backend {
  final AbstractCompiler compiler;
  final ModuleBuilderFactory moduleBuilderFactory;
  Es6Backend(this.compiler, this.moduleBuilderFactory) : super.base();

  LibraryBuilder libraryBuilder(LibraryElement element) =>
      new Es6LibraryBuilder(this, moduleBuilderFactory(), element);
}

class Es6LibraryBuilder extends LibraryBuilder {
  final moduleItems = <JS.ModuleItem>[];
  final Es6Backend _backend;
  final LibraryElement element;
  final ModuleBuilder moduleBuilder;
  Es6LibraryBuilder(this._backend, this.moduleBuilder, this.element);
  JS.Expression get exportsVar => moduleBuilder.exportsVar;

  get compiler => _backend.compiler;

  void buildTypedef(
      FunctionTypeAliasElement element,
      JS.TypeRef returnType, List<JS.TypeRef> paramTypes) {
    // TODO(ochafik)
    // moduleItems.add();
  }

  ClassBuilder classBuilder(ClassElement element, ClassDeclaration node) =>
      new Es6ClassBuilder(moduleItems, element, node);

  void build() {
    var moduleBuilder = _backend.moduleBuilderFactory();
    var module = moduleBuilder.build(
        _backend.compiler.getModuleName(element.source.uri),
        jsModuleValue,
        moduleItems);

    // TODO(ochafik).
    // var out = _backend.compiler.getOutputPath(element.source.uri);
    // var flags = compiler.options;
    // var serverUri = flags.serverMode
    //     ? Uri.parse('http://${flags.host}:${flags.port}/')
    //     : null;
    // return writeJsLibrary(module, out, compiler.inputBaseDir, serverUri,
    //     emitSourceMaps: _backend.compiler.options.codegenOptions.emitSourceMaps);
    // TODO(ochafik)
  }
}

class Es6ClassBuilder extends DefaultClassBuilder {
  final List<JS.ModuleItem> out;
  final ClassElement element;
  final ClassDeclaration node;

  Es6ClassBuilder(this.out, this.element, this.node);

  void build() {
    // TODO(ochafik)
  }
}
