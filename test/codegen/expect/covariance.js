dart_library.library('covariance', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  const _t = Symbol('_t');
  const Foo$ = dart.generic(function(T) {
    class Foo extends core.Object {
      Foo() {
        this[_t] = null;
      }
      add(t) {
        dart.as(t, T);
        this[_t] = t;
      }
      forEach(fn) {
        dart.as(fn, dart.functionType(dart.voidR, [T]));
        fn(this[_t]);
      }
    }
    dart.setSignature(Foo, {
      methods: () => ({
        add: [dart.dynamicR, [T]],
        forEach: [dart.dynamicR, [dart.functionType(dart.voidR, [T])]]
      })
    });
    return Foo;
  });
  const Foo = Foo$();
  class Bar extends Foo$(core.int) {
    Bar() {
      super.Foo();
    }
    add(x) {
      core.print(`Bar.add got ${x}`);
      super.add(x);
    }
  }
  dart.setSignature(Bar, {
    methods: () => ({add: [dart.dynamicR, [core.int]]})
  });
  function main() {
    let foo = new Bar();
    foo.add('hi');
  }
  dart.fn(main);
  // Exports:
  exports.Foo$ = Foo$;
  exports.Foo = Foo;
  exports.Bar = Bar;
  exports.main = main;
});
