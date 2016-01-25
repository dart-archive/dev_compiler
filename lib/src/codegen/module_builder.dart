// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.codegen.module_builder;

import '../js/js_ast.dart' as JS;
import '../js/js_ast.dart' show js;
import '../options.dart' show ModuleFormat;

/// Helper that builds JS modules in a given [ModuleFormat].
abstract class ModuleBuilder {
  final String _jsPath;
  final String _jsModuleValue;
  final JS.Identifier _exportsVar;
  final _exports = <String, String>{};
  final _imports = <_ModuleImport>[];

  ModuleBuilder._(this._jsPath, this._jsModuleValue, this._exportsVar);

  /// Returns a [format]-specific [ModuleBuilder].
  /// - [jsPath] is the path of the module being built.
  /// - [jsModuleValue] is the default value to use for the library, in case of
  ///   js interop (comes from the @js.JS(jsModuleValue) annotation on the
  ///   library directive). It is null in any other case.
  /// - [exportsVar] is the name of the object on which items are exported. Lazy
  ///   variables and constants are assumed to be declared on this instance.
  factory ModuleBuilder(String jsPath, String jsModuleValue,
      JS.Identifier exportsVar, ModuleFormat format) {
    switch (format) {
      case ModuleFormat.legacy:
        return new LegacyModuleBuilder(jsPath, jsModuleValue, exportsVar);
      case ModuleFormat.es6:
        return new ES6ModuleBuilder(jsPath, jsModuleValue, exportsVar);
      case ModuleFormat.node:
        return new NodeModuleBuilder(jsPath, jsModuleValue, exportsVar);
    }
  }

  /// Adds [name] to the list of names to be exported from the module.
  void addExport(String name, String exportName) {
    _exports[name] = exportName;
  }

  /// Adds an import from a module named [name] and locally aliased as [libVar].
  /// When [isLazy] is true, the import should be lazy (i.e. there is some
  /// cyclic dependency of imports).
  void addImport(String name, JS.Identifier libVar, {bool isLazy: false}) {
    _imports.add(new _ModuleImport(name, libVar, isLazy));
  }

  /// Builds a program out of menu items.
  JS.Program build(Iterable<JS.ModuleItem> moduleItems);
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
  LegacyModuleBuilder(jsPath, _jsModuleValue, _exportsVar)
      : super._(jsPath, _jsModuleValue, _exportsVar);

  JS.Program build(Iterable<JS.ModuleItem> moduleItems) {
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
      _exports.forEach((name, exportName) {
        moduleStatements
            .add(js.statement('#.# = #;', [_exportsVar, exportName, name]));
      });
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
    return new JS.Program(<JS.ModuleItem>[moduleDef]);
  }
}

/// Generates ES6 modules.
// TODO(ochafik): Break strong dep cycles to accommodate the Closure Compiler.
class ES6ModuleBuilder extends ModuleBuilder {
  ES6ModuleBuilder(jsPath, _jsModuleValue, _exportsVar)
      : super._(jsPath, _jsModuleValue, _exportsVar);

  JS.Program build(Iterable<JS.ModuleItem> moduleItems) {
    var moduleStatements = <JS.ModuleItem>[
      // Lazy declarations may reference exports.
      js.statement("const # = {};", [_exportsVar])
    ];

    // TODO(jmesserly): it would be great to run the renamer on the body,
    // then figure out if we really need each of these parameters.
    // See ES6 modules: https://github.com/dart-lang/dev_compiler/issues/34
    for (var i in _imports) {
      // TODO(ochafik): laziness, late binding, etc, to support Closure...
      moduleStatements.add(new JS.ImportDeclaration(
          defaultBinding: i.libVar, from: js.string(i.name)));
    }

    moduleStatements.addAll(_flattenBlocks(moduleItems));

    if (_exports.isNotEmpty) {
      moduleStatements.add(js.comment('Exports:'));
      // TODO(jmesserly): make these immutable in JS?
      _exports.forEach((name, exportName) {
        moduleStatements
            .add(js.statement('#.# = #;', [_exportsVar, exportName, name]));
      });
      moduleStatements
          .add(new JS.ExportDeclaration(_exportsVar, isDefault: true));
    }
    // TODO(ochafik): What to do of _jsModuleValue?
    return new JS.Program(moduleStatements);
  }
}

/// Generates node modules.
class NodeModuleBuilder extends ModuleBuilder {
  NodeModuleBuilder(jsPath, _jsModuleValue, _exportsVar)
      : super._(jsPath, _jsModuleValue, _exportsVar);

  JS.Program build(Iterable<JS.ModuleItem> moduleItems) {
    var moduleStatements = <JS.ModuleItem>[
      js.statement("'use strict';"),
      js.statement("console.log('Loading module ' + #);", [js.string(_jsPath)])
    ];

    var deferLazyImports = true;

    require(i) {
      moduleStatements.add(js.statement("console.log('  ${i.isLazy ? 'Lazy ' : ''}Require ' + # + ' from ' + #);", [js.string(i.name), js.string(_jsPath)]));
      moduleStatements.add(js.statement((i.isLazy ? '' : 'var ') + '# = require(#);', [i.libVar, js.string(i.name)]));
      moduleStatements.add(js.statement("if (!#) throw new Error('Require failed: ' + #);", [i.libVar, js.string(i.name)]));
    }
    for (var i in _imports) {
      if (i.isLazy && deferLazyImports) {
        moduleStatements.add(js.statement('var # = {};', [i.libVar]));
      } else {
        require(i);
      }
    }

    moduleItems = _flattenBlocks(moduleItems);
    isDecl(JS.ModuleItem i) {
      var res = i is JS.ClassDeclaration || i is JS.FunctionDeclaration ||
          i is JS.ExpressionStatement && i.expression is JS.VariableDeclarationList;
      return res;
    }

    moduleStatements.addAll(moduleItems.where(isDecl));

    if (_exports.isNotEmpty) {
      moduleStatements.add(js.comment('Exports:'));
      // TODO(jmesserly): make these immutable in JS?
      _exports.forEach((name, exportName) {
        moduleStatements
            .add(js.statement('#.# = #;', [_exportsVar, exportName, name]));
      });
    }

    moduleStatements.addAll(moduleItems.where((i) => !isDecl(i)));

    if (deferLazyImports) {
      for (var i in _imports) {
        if (i.isLazy) {
          require(i);
        }
      }
    }
    moduleStatements.add(js.statement("console.log('  Done loading module ' + #);", [js.string(_jsPath)]));

    // TODO(ochafik): What to do of _jsModuleValue?
    return new JS.Program(moduleStatements);
  }
}

/// Flattens blocks in [stats] to a single list of module items.
/// Note that in general, blocks should not be flattened, because it can
/// mess up with block-level scoping (let, const).
// TODO(ochafik): Remove this / find better pattern (adding statements as they
// are generated from [JSCodegenVisitor], instead of composing them with
// [_statements]).
Iterable<JS.ModuleItem> _flattenBlocks(List<JS.ModuleItem> stats) =>
    stats.expand((item) => item is JS.Block ? _flattenBlocks(item.statements) : [item]);
