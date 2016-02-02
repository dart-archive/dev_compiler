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
  const _keepMethod2 = Symbol('_keepMethod2');
  class _Foo extends core.Object {
    _Foo() {
    }
    keep() {
    }
    keepMethod1() {}
    [_keepMethod2]() {
      _Foo._keepStaticMethod2();
    }
    static _keepStaticMethod1() {}
    static _keepStaticMethod2() {}
  }
  dart.defineNamedConstructor(_Foo, 'keep');
  dart.setSignature(_Foo, {
    constructors: () => ({
      _Foo: [_Foo, []],
      keep: [_Foo, []]
    }),
    methods: () => ({
      keepMethod1: [dart.dynamic, []],
      [_keepMethod2]: [dart.dynamic, []]
    }),
    statics: () => ({
      _keepStaticMethod1: [dart.dynamic, []],
      _keepStaticMethod2: [dart.dynamic, []]
    }),
    names: ['_keepStaticMethod1', '_keepStaticMethod2']
  });
  class _Bar extends core.Object {
    keepMethod1() {}
  }
  dart.setSignature(_Bar, {
    methods: () => ({keepMethod1: [dart.dynamic, []]})
  });
  function _testRefs(args) {
    new _Keep1();
    _keep2();
    exports._keep3;
    exports._keep4;
    _keep5;
    let foo = new _Foo();
    foo = new _Foo.keep();
    foo.keepMethod1();
    foo[_keepMethod2]();
    let fooBar = dart.equals(dart.dload(args, 'length'), 1) ? new _Foo() : new _Bar();
    dart.dsend(fooBar, 'keepMethod1');
    _Foo._keepStaticMethod1();
  }
  dart.fn(_testRefs);
  class _Base extends core.Object {
    _() {
    }
    kept() {
      this._();
    }
    report() {
      this.measure();
    }
    measure() {
      this.run();
    }
  }
  dart.defineNamedConstructor(_Base, '_');
  dart.defineNamedConstructor(_Base, 'kept');
  dart.setSignature(_Base, {
    constructors: () => ({
      _: [_Base, []],
      kept: [_Base, []]
    }),
    methods: () => ({
      report: [dart.dynamic, []],
      measure: [dart.dynamic, []]
    })
  });
  class _Sub extends _Base {
    _Sub() {
      super.kept();
    }
    run() {
      return core.print('Sub');
    }
  }
  dart.setSignature(_Sub, {
    constructors: () => ({_Sub: [_Sub, []]}),
    methods: () => ({run: [dart.dynamic, []]})
  });
  class _KeepEx extends core.Error {
    _KeepEx() {
      super.Error();
    }
  }
  function _testInheritance(args) {
    new _Sub().report();
  }
  dart.fn(_testInheritance);
  function main(args) {
    try {
      _testRefs(args);
      _testInheritance(args);
    } catch (e) {
      if (dart.is(e, _KeepEx)) core.print(e);
    }

  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
