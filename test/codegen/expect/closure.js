dart_library.library('closure', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/js'
], /* Lazy imports */[
], function(exports, dart, core, js) {
  'use strict';
  let dartx = dart.dartx;
  /** @typedef */
  const Callback = dart.typedef('Callback', () => dart.functionType(dart.void, [], {i: core.int}));
  const Foo$ = dart.generic(function(T) {
    class Foo extends core.Object {
      Foo(i: number|null, v: T) {
        this.i = i;
        this.v = v;
        this.b = null;
        this.s = null;
      }
      static build() {
        return new (Foo$(T))(1, null);
      }
      untyped_method(a, b) {}
      pass(t: T) {
        dart.as(t, T);
        return t;
      }
      typed_method(foo: Foo<T>, list: core.List<E>, i: number|null, n: number|null, d: number|null, b: boolean|null, s: string, a: any[]<E>, o: Object, f: Function) {
        return '';
      }
      optional_params(a, b, c) {
        if (b === void 0) b = null;
        if (c === void 0) c = null;
      }
      static named_params(a, opts) {
        let b = opts && 'b' in opts ? opts.b : null;
        let c = opts && 'c' in opts ? opts.c : null;
      }
      nullary_method() {}
      function_params(f: (any, any) => number|null, g: (any, {y?: string, z?: any}) => any, cb: Callback) {
        dart.as(f, dart.functionType(core.int, [dart.dynamic], [dart.dynamic]));
        dart.as(g, dart.functionType(dart.dynamic, [dart.dynamic], {y: core.String, z: dart.dynamic}));
        cb({i: this.i});
      }
      run(a: core.List<E>, b: string, c: (string) => core.List<E>, e: ((any) => any) => core.List<E>, opts) {
        dart.as(c, dart.functionType(core.List, [core.String]));
        dart.as(e, dart.functionType(core.List$(core.int), [dart.functionType(dart.dynamic, [dart.dynamic])]));
        let h = opts && 'h' in opts ? opts.h : null;
      }
      get prop() {
        return null;
      }
      set prop(value: string) {}
      static get staticProp() {
        return null;
      }
      static set staticProp(value: string) {}
    }
    dart.setSignature(Foo, {
      constructors: () => ({
        Foo: [Foo$(T), [core.int, T]],
        build: [Foo$(T), []]
      }),
      methods: () => ({
        untyped_method: [dart.dynamic, [dart.dynamic, dart.dynamic]],
        pass: [T, [T]],
        typed_method: [core.String, [Foo$(), core.List, core.int, core.num, core.double, core.bool, core.String, js.JsArray, js.JsObject, js.JsFunction]],
        optional_params: [dart.dynamic, [dart.dynamic], [dart.dynamic, dart.dynamic]],
        nullary_method: [dart.dynamic, []],
        function_params: [dart.dynamic, [dart.functionType(core.int, [dart.dynamic], [dart.dynamic]), dart.functionType(dart.dynamic, [dart.dynamic], {y: core.String, z: dart.dynamic}), Callback]],
        run: [dart.dynamic, [core.List, core.String, dart.functionType(core.List, [core.String]), dart.functionType(core.List$(core.int), [dart.functionType(dart.dynamic, [dart.dynamic])])], {h: core.Map$(core.Map, core.Map)}]
      }),
      statics: () => ({named_params: [dart.dynamic, [dart.dynamic], {b: dart.dynamic, c: dart.dynamic}]}),
      names: ['named_params']
    });
    /** @final {string} */
    Foo.some_static_constant = "abc";
    /** @final {string} */
    Foo.some_static_final = "abc";
    /** @type {string} */
    Foo.some_static_var = "abc";
    return Foo;
  });
  let Foo = Foo$();
  class Bar extends core.Object {}
  const Baz$super = dart.mixin(Foo$(core.int), Bar);
  class Baz extends Baz$super {
    Baz(i: number|null) {
      super.Foo(i, 123);
    }
  }
  dart.setSignature(Baz, {
    constructors: () => ({Baz: [Baz, [core.int]]})
  });
  function main(args) {
  }
  dart.fn(main, dart.void, [dart.dynamic]);
  /** @final {string} */
  const some_top_level_constant: string = "abc";
  /** @final {string} */
  exports.some_top_level_final = "abc";
  /** @type {string} */
  exports.some_top_level_var = "abc";
  // Exports:
  exports.Callback = Callback;
  exports.Foo$ = Foo$;
  exports.Foo = Foo;
  exports.Bar = Bar;
  exports.Baz = Baz;
  exports.main = main;
  exports.some_top_level_constant = some_top_level_constant;
});
