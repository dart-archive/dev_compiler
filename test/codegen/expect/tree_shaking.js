dart_library.library('tree_shaking', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class _Drop1 extends core.Object {
    keepMethod1() {}
  }
  dart.setSignature(_Drop1, {
    methods: () => ({keepMethod1: [dart.dynamic, []]})
  });
  function _drop2() {
  }
  dart.fn(_drop2);
  exports._drop3 = null;
  exports._drop4 = 0;
  const _drop5 = 0;
  class _Keep1 extends core.Object {}
  function _keep2() {
  }
  dart.fn(_keep2);
  exports._keep3 = null;
  exports._keep4 = 0;
  const _keep5 = 0;
  const _dropMethod1 = Symbol('_dropMethod1');
  const _keepMethod2 = Symbol('_keepMethod2');
  class _Foo extends core.Object {
    _Foo() {
    }
    dropped() {
    }
    keep() {
    }
    [_dropMethod1]() {}
    keepMethod1() {}
    [_keepMethod2]() {
      _Foo._keepStaticMethod2();
    }
    static dropStaticMethod1() {}
    static _keepStaticMethod1() {}
    static _keepStaticMethod2() {}
  }
  dart.defineNamedConstructor(_Foo, 'dropped');
  dart.defineNamedConstructor(_Foo, 'keep');
  dart.setSignature(_Foo, {
    constructors: () => ({
      _Foo: [_Foo, []],
      dropped: [_Foo, []],
      keep: [_Foo, []]
    }),
    methods: () => ({
      [_dropMethod1]: [dart.dynamic, []],
      keepMethod1: [dart.dynamic, []],
      [_keepMethod2]: [dart.dynamic, []]
    }),
    statics: () => ({
      dropStaticMethod1: [dart.dynamic, []],
      _keepStaticMethod1: [dart.dynamic, []],
      _keepStaticMethod2: [dart.dynamic, []]
    }),
    names: ['dropStaticMethod1', '_keepStaticMethod1', '_keepStaticMethod2']
  });
  class _Bar extends core.Object {
    dropMethod1() {}
    keepMethod1() {}
  }
  dart.setSignature(_Bar, {
    methods: () => ({
      dropMethod1: [dart.dynamic, []],
      keepMethod1: [dart.dynamic, []]
    })
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
    dropped() {
      this._();
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
  dart.defineNamedConstructor(_Base, 'dropped');
  dart.defineNamedConstructor(_Base, 'kept');
  dart.setSignature(_Base, {
    constructors: () => ({
      _: [_Base, []],
      dropped: [_Base, []],
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
    dropped() {
      super.dropped();
    }
    run() {
      return core.print('Sub');
    }
  }
  dart.defineNamedConstructor(_Sub, 'dropped');
  dart.setSignature(_Sub, {
    constructors: () => ({
      _Sub: [_Sub, []],
      dropped: [_Sub, []]
    }),
    methods: () => ({run: [dart.dynamic, []]})
  });
  function _testInheritance(args) {
    new _Sub().report();
  }
  dart.fn(_testInheritance);
  function main(args) {
    _testRefs(args);
    _testInheritance(args);
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
