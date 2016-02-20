dart_library.library('tree_shaking2', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class Foo extends core.Object {
    foo() {
      return 1;
    }
  }
  dart.setSignature(Foo, {
    methods: () => ({foo: [dart.dynamic, []]})
  });
  class Bar extends Foo {
    foo() {
      return 2;
    }
    get(x) {
      return 2;
    }
  }
  dart.setSignature(Bar, {
    methods: () => ({get: [dart.dynamic, [dart.dynamic]]})
  });
  class Constants extends core.Object {}
  Constants.X = 1;
  function main() {
    let foo = null;
    foo = new Bar();
    core.print(foo.foo());
    core.print(dart.dcall(foo.get(1)));
    core.print(Constants.X);
  }
  dart.fn(main);
  // Exports:
  exports.Foo = Foo;
  exports.Bar = Bar;
  exports.Constants = Constants;
  exports.main = main;
});
