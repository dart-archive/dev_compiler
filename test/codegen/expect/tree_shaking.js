dart_library.library('tree_shaking', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class _Keep1 extends core.Object {}
  function _keep2() {
  }
  dart.fn(_keep2);
  exports._keep3 = null;
  exports._keep4 = 0;
  const _keep5 = 0;
  const _keep1 = Symbol('_keep1');
  class _Foo extends core.Object {
    _Foo() {
    }
    keep() {
    }
    [_keep1]() {}
  }
  dart.defineNamedConstructor(_Foo, 'keep');
  dart.setSignature(_Foo, {
    constructors: () => ({
      _Foo: [_Foo, []],
      keep: [_Foo, []]
    }),
    methods: () => ({[_keep1]: [dart.dynamic, []]})
  });
  function main() {
    new _Keep1();
    _keep2();
    exports._keep3;
    exports._keep4;
    _keep5;
    let foo = new _Foo();
    foo = new _Foo.keep();
    foo[_keep1]();
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
