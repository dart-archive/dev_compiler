dart_library.library('syncstar_syntax', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core',
  'expect/expect'
], /* Lazy imports */[
], function(exports, dart, core, expect) {
  'use strict';
  let dartx = dart.dartx;
  function foo() {
    return dart.syncStar(function*() {
      yield 1;
      yield* dart.list([2, 3], core.int);
    }, core.int);
  }
  dart.fn(foo, core.Iterable$(core.int), []);
  class Class extends core.Object {
    bar() {
      return dart.syncStar(function*() {
        yield 1;
        yield* dart.list([2, 3], core.int);
      }, core.int);
    }
    static baz() {
      return dart.syncStar(function*() {
        yield 1;
        yield* dart.list([2, 3], core.int);
      }, core.int);
    }
  }
  dart.setSignature(Class, {
    methods: () => ({bar: [core.Iterable$(core.int), []]}),
    statics: () => ({baz: [core.Iterable$(core.int), []]}),
    names: ['baz']
  });
  function main() {
    function qux() {
      return dart.syncStar(function*() {
        yield 1;
        yield* dart.list([2, 3], core.int);
      }, core.int);
    }
    dart.fn(qux, core.Iterable$(core.int), []);
    dart.dcall(expect.Expect.listEquals, [1, 2, 3], dart.dcall(dart.dcall(foo)[dartx.toList]));
    dart.dcall(expect.Expect.listEquals, [1, 2, 3], dart.dcall(dart.dcall(new Class().bar)[dartx.toList]));
    dart.dcall(expect.Expect.listEquals, [1, 2, 3], dart.dcall(dart.dcall(Class.baz)[dartx.toList]));
    dart.dcall(expect.Expect.listEquals, [1, 2, 3], dart.dcall(dart.dcall(qux)[dartx.toList]));
  }
  dart.fn(main);
  // Exports:
  exports.foo = foo;
  exports.Class = Class;
  exports.main = main;
});
