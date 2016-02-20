dart_library.library('tree_shaking', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class _KeepAnnotation1 extends core.Object {
    _KeepAnnotation1() {
    }
  }
  dart.setSignature(_KeepAnnotation1, {
    constructors: () => ({_KeepAnnotation1: [_KeepAnnotation1, []]})
  });
  const _keepAnnotation2 = dart.const(new _KeepAnnotation1());
  const _keepThisUtilMember = Symbol('_keepThisUtilMember');
  class _Keep1 extends core.Object {
    _Keep1(entry) {
      this.entry = entry;
      this[_keepThisUtilMember]();
    }
    [_keepThisUtilMember]() {}
  }
  dart.setSignature(_Keep1, {
    constructors: () => ({_Keep1: [_Keep1, [core.Function]]}),
    methods: () => ({[_keepThisUtilMember]: [dart.void, []]})
  });
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
  const _m1 = Symbol('_m1');
  const _m2 = Symbol('_m2');
  class _Operators extends core.Object {
    get(_) {
      return this[_m1]();
    }
    set(key, value) {
      (() => {
        return this[_m2]();
      })();
      return value;
    }
    [_m1]() {}
    [_m2]() {}
  }
  dart.setSignature(_Operators, {
    methods: () => ({
      get: [dart.dynamic, [dart.dynamic]],
      set: [dart.dynamic, [dart.dynamic, dart.dynamic]],
      [_m1]: [dart.dynamic, []],
      [_m2]: [dart.dynamic, []]
    })
  });
  class _Bar extends core.Object {
    keepMethod1() {}
  }
  dart.setSignature(_Bar, {
    methods: () => ({keepMethod1: [dart.dynamic, []]})
  });
  const _Statics$ = dart.generic(function(T) {
    class _Statics extends core.Object {
      static _keepStatic1() {}
      static _keepStatic2() {}
      static get _keepStatic3() {
        return 0;
      }
      _Statics() {
        _Statics$()._keepStatic1();
        _Statics$()._keepStatic2();
        _Statics$()._keepStatic3;
        _Statics$()._keepStatic4;
      }
    }
    dart.setSignature(_Statics, {
      constructors: () => ({_Statics: [_Statics$(T), []]}),
      statics: () => ({
        _keepStatic1: [dart.void, []],
        _keepStatic2: [core.int, []]
      }),
      names: ['_keepStatic1', '_keepStatic2']
    });
    _Statics._keepStatic4 = 0;
    return _Statics;
  });
  let _Statics = _Statics$();
  function _testRefs(args) {
    new _Keep1(null);
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
    new (_Statics$(core.int))();
    let ops = new _Operators();
    ops.get(1);
    ops.set(1, 2);
  }
  dart.fn(_testRefs);
  class _RetainedByArg1 extends core.Object {}
  class _RetainedByArg2 extends core.Object {}
  class _RetainedByRetType1 extends core.Object {}
  class _Base extends core.Object {
    _() {
    }
    kept(arg) {
      this._();
    }
    report(arg) {
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
      kept: [_Base, [_RetainedByArg1]]
    }),
    methods: () => ({
      report: [_RetainedByRetType1, [_RetainedByArg2]],
      measure: [dart.dynamic, []]
    })
  });
  class _Sub extends _Base {
    _Sub() {
      super.kept(null);
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
    new _Sub().report(null);
  }
  dart.fn(_testInheritance);
  function main(args) {
    try {
      _testRefs(args);
      _testInheritance(args);
      _MyMap.new();
    } catch (e) {
      if (dart.is(e, _KeepEx)) core.print(e);
    }

  }
  dart.fn(main);
  const _MyMap$ = dart.generic(function(K, V) {
    class _MyMap extends core.Object {
      static new() {
        return new (_MyMapImpl$(K, V))();
      }
    }
    dart.setSignature(_MyMap, {
      constructors: () => ({new: [_MyMap$(K, V), []]})
    });
    return _MyMap;
  });
  let _MyMap = _MyMap$();
  const _MyMapMixin$ = dart.generic(function(K, V) {
    class _MyMapMixin extends core.Object {}
    _MyMapMixin[dart.implements] = () => [_MyMap$(K, V)];
    return _MyMapMixin;
  });
  let _MyMapMixin = _MyMapMixin$();
  const _MyMapBase$ = dart.generic(function(K, V) {
    class _MyMapBase extends dart.mixin(core.Object, _MyMapMixin$(K, V)) {}
    return _MyMapBase;
  });
  let _MyMapBase = _MyMapBase$();
  const _MyMapImpl$ = dart.generic(function(K, V) {
    class _MyMapImpl extends _MyMapBase$(K, V) {}
    _MyMapImpl[dart.implements] = () => [_MyMap$(K, V)];
    return _MyMapImpl;
  });
  let _MyMapImpl = _MyMapImpl$();
  // Exports:
  exports.main = main;
});
