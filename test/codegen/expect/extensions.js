dart_library.library('extensions', null, /* Imports */[
  'dart/_runtime',
  'dart/collection',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, collection, core) {
  'use strict';
  let dartx = dart.dartx;
  exports[dart.uri] = 'file:///usr/local/google/vsm/dev_compiler/test/codegen/extensions.dart';
  class StringIterable extends collection.IterableBase$(core.String) {
    StringIterable() {
      this.iterator = null;
      super.IterableBase();
    }
  }
  dart.virtualField(StringIterable, 'iterator');
  dart.setSignature(StringIterable, {});
  dart.defineExtensionMembers(StringIterable, ['iterator']);
  StringIterable[dart.owner] = exports;
  function main() {
    return new StringIterable();
  }
  dart.fn(main);
  // Exports:
  exports.StringIterable = StringIterable;
  exports.main = main;
});
