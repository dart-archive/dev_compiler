// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.codegen.module_builder;

import 'package:path/path.dart' show relative;

import '../js/js_ast.dart' as JS;
import '../js/js_ast.dart' show js;
import '../options.dart' show ModuleFormat;

/// Helper that builds JS modules in a given [ModuleFormat].
abstract class ModuleBuilder {
  final _exports = <String, String>{};
  final _imports = <_ModuleImport>[];

  ModuleBuilder._();

  /// Returns a [format]-specific [ModuleBuilder].
  /// - [jsPath] is the path of the module being built.
  /// - [jsModuleValue] is the default value to use for the library, in case of
  ///   js interop (comes from the @js.JS(jsModuleValue) annotation on the
  ///   library directive). It is null in any other case.
  /// - [exportsVar] is the name of the object on which items are exported. Lazy
  ///   variables and constants are assumed to be declared on this instance.
  factory ModuleBuilder(ModuleFormat format) {
    switch (format) {
      case ModuleFormat.legacy:
        return new LegacyModuleBuilder();
      case ModuleFormat.es6:
        return new ES6ModuleBuilder();
      case ModuleFormat.closure:
        return new ES6ModuleBuilder(emitLazyImports: false);
      case ModuleFormat.node:
        return new NodeModuleBuilder();
    }
  }

  /// Adds [name] to the list of names to be exported from the module.
  void addExport(String name, String exportName) {
    _exports[name] = exportName;
  }

  /// Adds an import from a module named [name] and locally aliased as [libVar].
  /// When [isLazy] is `true`, the import should be lazy (i.e. there is some
  /// cyclic dependency of imports).
  /// When [libVar] is `null`, the import is there just to force the import
  /// order.
  void addImport(String name, JS.Identifier libVar, {bool isLazy: false}) {
    _imports.add(new _ModuleImport(name, libVar, isLazy));
  }

  /// Builds a program out of menu items.
  JS.Program build(String jsPath, String jsModuleValue,
      JS.Identifier exportsVar, Iterable<JS.ModuleItem> moduleItems);

  /// Flattens blocks in [stats] to a single list of module items.
  /// Note that in general, blocks should not be flattened, because it can
  /// mess up with block-level scoping (let, const).
  // TODO(ochafik): Remove this / find better pattern (adding statements as they
  // are generated from [JSCodegenVisitor], instead of composing them with
  // [_statements]).
  Iterable<JS.ModuleItem> _flattenBlocks(List<JS.ModuleItem> stats) =>
      stats.expand((item) => item is JS.Block
          ? _flattenBlocks(item.statements) : [item]);
}

class _ModuleImport {
  final String name;
  final JS.Identifier libVar;
  // TODO(jmesserly): Assess whether we can remove this (we shouldn't need it
  // even in our legacy module format, but it might still be useful for Closure
  // with ES6 modules).
  final bool isLazy;
  _ModuleImport(this.name, this.libVar, this.isLazy);
}

/// Generates modules for with DDC's `dart_library.js` loading mechanism.
class LegacyModuleBuilder extends ModuleBuilder {
  LegacyModuleBuilder() : super._();

  JS.Program build(String jsPath, String jsModuleValue,
      JS.Identifier exportsVar, Iterable<JS.ModuleItem> moduleItems) {
    // TODO(jmesserly): it would be great to run the renamer on the body,
    // then figure out if we really need each of these parameters.
    // See ES6 modules: https://github.com/dart-lang/dev_compiler/issues/34
    var params = [exportsVar];
    var lazyParams = [];

    var imports = <JS.Expression>[];
    var lazyImports = <JS.Expression>[];
    var moduleStatements = <JS.Statement>[];

    for (var i in _imports) {
      // No need to force the import order for the legacy library mechanism.
      if (i.libVar == null) continue;
      (i.isLazy ? lazyImports : imports).add(js.string(i.name, "'"));
      (i.isLazy ? lazyParams : params).add(i.libVar);
    }
    params.addAll(lazyParams);

    moduleStatements.addAll(_flattenBlocks(moduleItems));

    if (_exports.isNotEmpty) {
      moduleStatements.add(js.comment('Exports:'));
      // TODO(jmesserly): make these immutable in JS?
      _exports.forEach((name, exportName) {
        moduleStatements
            .add(js.statement('#.# = #;', [exportsVar, exportName, name]));
      });
    }

    var module =
        js.call("function(#) { 'use strict'; #; }", [params, moduleStatements]);

    var moduleDef = js.statement("dart_library.library(#, #, #, #, #)", [
      js.string(jsPath, "'"),
      jsModuleValue ?? new JS.LiteralNull(),
      js.commentExpression(
          "Imports", new JS.ArrayInitializer(imports, multiline: true)),
      js.commentExpression("Lazy imports",
          new JS.ArrayInitializer(lazyImports, multiline: true)),
      module
    ]);
    return new JS.Program(<JS.ModuleItem>[moduleDef]);
  }
}

String relativeModuleName(String moduleName, {String from}) {
  var relativeName = relative('/' + moduleName, from: '/' + from + '/..');
  return relativeName.startsWith('.') ? relativeName : './$relativeName';
}

/// Generates ES6 modules.
// TODO(ochafik): Break strong dep cycles to accommodate the Closure Compiler.
class ES6ModuleBuilder extends ModuleBuilder {
  final bool emitLazyImports;

  ES6ModuleBuilder({this.emitLazyImports : true}) : super._();

  int iNextAlias = 1;
  JS.Program build(String jsPath, String jsModuleValue,
      JS.Identifier exportsVar, Iterable<JS.ModuleItem> moduleItems) {
    var moduleStatements = <JS.ModuleItem>[
      js.statement("const # = {};", [exportsVar])
    ];

    // TODO(jmesserly): it would be great to run the renamer on the body,
    // then figure out if we really need each of these parameters.
    // See ES6 modules: https://github.com/dart-lang/dev_compiler/issues/34
    for (var i in _imports) {
      var moduleName = js.string(relativeModuleName(i.name, from: jsPath));
      if (i.libVar == null) continue;
      if (i.isLazy && !emitLazyImports) continue;
      // moduleStatements.add(js.statement('#.imports = {};', [exportsVar]));
      moduleStatements.add(new JS.ImportDeclaration(
          defaultBinding: i.libVar, from: moduleName));
    }

    moduleStatements.addAll(_flattenBlocks(moduleItems));

    if (_exports.isNotEmpty) {
      moduleStatements.add(js.comment('Exports:'));
      // TODO(jmesserly): make these immutable in JS?
      _exports.forEach((name, exportName) {
        moduleStatements
            .add(js.statement('#.# = #;', [exportsVar, exportName, name]));
      });
      moduleStatements
          .add(new JS.ExportDeclaration(exportsVar, isDefault: true));
    }
    // TODO(ochafik): What to do of jsModuleValue?
    return new JS.Program(moduleStatements);
  }
}

/// Generates node modules.
class NodeModuleBuilder extends ModuleBuilder {
  NodeModuleBuilder() : super._();

  JS.Program build(String jsPath, String jsModuleValue,
      JS.Identifier exportsVar, Iterable<JS.ModuleItem> moduleItems) {
    var moduleStatements = <JS.ModuleItem>[
      js.statement("'use strict';"),
      // js.statement("console.log('Loading ' + #);", [js.string(jsPath)])
    ];

    moduleItems = _flattenBlocks(moduleItems);

    var prioritaryExportItems = <JS.ModuleItem>[];
    var normalItems = <JS.ModuleItem>[];

    var exported = new Set<String>();
    emitExport(String name, List<JS.ModuleItem> items) {
      if (exported.add(name)) {
        items.add(js.statement('#.# = #;', [exportsVar, _exports[name], name]));
      }
    }

    getPrioritaryExportName(JS.ModuleItem item) {
      if (jsPath == 'dart/core') {
        if (item is JS.ClassDeclaration) {
          var name = item.classExpr.name.name;
          switch (name) {
            case 'Object':
            case 'Match':
              return name;
          }
        }
      }
      return null;
    }

    for (var item in moduleItems) {
      var prioritaryExportName = getPrioritaryExportName(item);
      if (prioritaryExportName != null) {
        prioritaryExportItems.add(item);
        emitExport(prioritaryExportName, prioritaryExportItems);
      } else {
        normalItems.add(item);
      }
    }

    moduleStatements.addAll(prioritaryExportItems);

    for (var i in _imports) {
      var moduleName = js.string(relativeModuleName(i.name, from: jsPath));
      if (i.libVar == null) {
        moduleStatements.add(js.statement('require(#);', [moduleName]));
      } else {
        moduleStatements.add(
            js.statement('let # = require(#);', [i.libVar, moduleName]));
      }
    }

    moduleStatements.addAll(normalItems);

    if (_exports.isNotEmpty) {
      moduleStatements.add(js.comment('Exports:'));
      _exports.keys.forEach((name) => emitExport(name, moduleStatements));
    }
    // TODO(ochafik): What to do of jsModuleValue?
    return new JS.Program(moduleStatements);
  }
}
