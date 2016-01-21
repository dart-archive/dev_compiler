// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.codegen.js_codegen;

import '../js/js_ast.dart' as JS;
import '../js/js_ast.dart' show js;
import '../options.dart' show ModuleFormat;

final _builderCtors = {
  ModuleFormat.es6: new ES6ModuleBuilder#,
  ModuleFormat.dart: new DartModuleBuilder#
};

abstract class ModuleBuilder {
  final String _jsPath;
  final String _jsModuleValue;
  final JS.Identifier _exportsVar;
  final List<String> _exports = <String>[];
  final List<_ModuleImport> _imports = <_ModuleImport>[];

  ModuleBuilder._(this._jsPath, this._jsModuleValue, this._exportsVar);

  factory ModuleBuilder(String jsPath, String _jsModuleValue, JS.Identifier _exportsVar, ModuleFormat format) {
    var ctor = _builderCtors[format];
    if (ctor == null) throw new ArgumentError("Unsupported format: $format");
    return ctor(jsPath, _jsModuleValue, _exportsVar);
  }

  void addExport(String name) {
    _exports.add(name);
  }
  void addImport(String name, JS.Identifier libVar, {bool isLazy: false}) {
    _imports.add(new _ModuleImport(name, libVar, isLazy));
  }

  List<JS.ModuleItem> build(List<JS.Statement> moduleItems);
}

class _ModuleImport {
  final String name;
  final JS.Identifier libVar;
  final bool isLazy;
  _ModuleImport(this.name, this.libVar, this.isLazy);
}

/// Generates modules for with DDC's `dart_library.js` loading mechanism.
class DartModuleBuilder extends ModuleBuilder {

  DartModuleBuilder(jsPath, _jsModuleValue, _exportsVar)
      : super._(jsPath, _jsModuleValue, _exportsVar);

  List<JS.ModuleItem> build(List<JS.Statement> moduleItems) {
    // TODO(jmesserly): it would be great to run the renamer on the body,
    // then figure out if we really need each of these parameters.
    // See ES6 modules: https://github.com/dart-lang/dev_compiler/issues/34
    var params = [_exportsVar];
    var lazyParams = [];

    var imports = <JS.Expression>[];
    var lazyImports = <JS.Expression>[];
    var moduleStatements = <JS.Statement>[];

    for (var i in _imports) {
      (i.isLazy ? lazyImports : imports).add(js.string(i.name, "'"));
      (i.isLazy ? lazyParams : params).add(i.libVar);
    }
    params.addAll(lazyParams);

    moduleStatements.addAll(_flattenBlocks(moduleItems));

    if (_exports.isNotEmpty) {
      moduleStatements.add(js.comment('Exports:'));
      // TODO(jmesserly): make these immutable in JS?
      for (var name in _exports) {
        moduleStatements.add(js.statement('#.# = #;', [_exportsVar, name, name]));
      }
    }

    var module =
        js.call("function(#) { 'use strict'; #; }", [params, moduleStatements]);

    var moduleDef = js.statement("dart_library.library(#, #, #, #, #)", [
      js.string(_jsPath, "'"),
      _jsModuleValue ?? new JS.LiteralNull(),
      js.commentExpression(
          "Imports", new JS.ArrayInitializer(imports, multiline: true)),
      js.commentExpression("Lazy imports",
          new JS.ArrayInitializer(lazyImports, multiline: true)),
      module
    ]);
    return <JS.ModuleItem>[moduleDef];
  }
}

/// Generates ES6 modules.
///
/// TODO(ochafik): Break strong dep cycles to accommodate the Closure Compiler.
class ES6ModuleBuilder extends ModuleBuilder {

  ES6ModuleBuilder(jsPath, _jsModuleValue, _exportsVar)
      : super._(jsPath, _jsModuleValue, _exportsVar);

  List<JS.ModuleItem> build(List<JS.Statement> moduleItems) {
    // TODO(jmesserly): it would be great to run the renamer on the body,
    // then figure out if we really need each of these parameters.
    // See ES6 modules: https://github.com/dart-lang/dev_compiler/issues/34
    var moduleStatements = <JS.ModuleItem>[];

    moduleStatements.add(js.statement("'use strict';"));
    // Lazy declarations may reference exports.
    moduleStatements.add(js.statement("const # = {};", [_exportsVar]));

    for (var i in _imports) {
      // TODO(ochafik): laziness, late binding, etc, to support Closure...
      moduleStatements.add(new JS.ImportDeclaration(
          defaultBinding: i.libVar,
          from: js.string(i.name)));
    }

    moduleStatements.addAll(_flattenBlocks(moduleItems));

    if (_exports.isNotEmpty) {
      moduleStatements.add(js.comment('Exports:'));
      // TODO(jmesserly): make these immutable in JS?
      for (var name in _exports) {
        moduleStatements.add(js.statement('#.# = #;', [_exportsVar, name, name]));
      }
      moduleStatements.add(new JS.ExportDeclaration(_exportsVar, isDefault: true));
    }
    // TODO(ochafik): What to do of _jsModuleValue?
    return moduleStatements;
  }
}

Iterable<JS.ModuleItem> _flattenBlocks(List<JS.ModuleItem> stats) =>
    stats.expand((item) => item is JS.Block ?  item.statements : [item]);
