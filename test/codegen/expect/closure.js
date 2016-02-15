const exports = {};
import dart from "./dart/_runtime";
import core from "./dart/core";
import js from "./dart/js";
let dartx = dart.dartx;
function generic_function(items, seed) {
  let strings = items[dartx.map](dart.fn(i => `${i}`, core.String, [dart.dynamic]))[dartx.toList]();
  return items;
}
dart.fn(generic_function, () => dart.definiteFunctionType(core.List, [core.List, dart.dynamic]));
const Callback = dart.typedef('Callback', () => dart.functionType(dart.void, [], {i: core.int}));
const Foo$ = dart.generic(function(T) {
  class Foo extends core.Object {
    Foo(i, v) {
      this.i = i;
      this.v = v;
      this.b = null;
      this.s = null;
    }
    static build() {
      return new (Foo$(T))(1, null);
    }
    untyped_method(a, b) {}
    pass(t) {
      dart.as(t, T);
      return t;
    }
    typed_method(foo, list, i, n, d, b, s, a, o, f) {
      return '';
    }
    optional_params(a, b = null, c = null) {}
    static named_params(a, {b = null, c = null} = {}) {}
    nullary_method() {}
    function_params(f, g, cb) {
      dart.as(f, dart.functionType(core.int, [dart.dynamic], [dart.dynamic]));
      dart.as(g, dart.functionType(dart.dynamic, [dart.dynamic], {y: core.String, z: dart.dynamic}));
      cb({i: this.i});
    }
    run(a, b, c, e, {h = null} = {}) {
      dart.as(c, dart.functionType(core.List, [core.String]));
      dart.as(e, dart.functionType(core.List$(core.int), [dart.functionType(dart.dynamic, [dart.dynamic])]));
    }
    get prop() {
      return null;
    }
    set prop(value) {}
    static get staticProp() {
      return null;
    }
    static set staticProp(value) {}
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
      optional_params: [dart.dynamic, [dart.dynamic], [dart.dynamic, core.int]],
      nullary_method: [dart.dynamic, []],
      function_params: [dart.dynamic, [dart.functionType(core.int, [dart.dynamic], [dart.dynamic]), dart.functionType(dart.dynamic, [dart.dynamic], {y: core.String, z: dart.dynamic}), Callback]],
      run: [dart.dynamic, [core.List, core.String, dart.functionType(core.List, [core.String]), dart.functionType(core.List$(core.int), [dart.functionType(dart.dynamic, [dart.dynamic])])], {h: core.Map$(core.Map, core.Map)}]
    }),
    statics: () => ({named_params: [dart.dynamic, [dart.dynamic], {b: dart.dynamic, c: core.int}]}),
    names: ['named_params']
  });
  Foo.some_static_constant = "abc";
  Foo.some_static_final = "abc";
  Foo.some_static_var = "abc";
  return Foo;
});
let Foo = Foo$();
class Bar extends core.Object {}
const Baz$super = dart.mixin(Foo$(core.int), Bar);
class Baz extends Baz$super {
  Baz(i) {
    super.Foo(i, 123);
  }
}
dart.setSignature(Baz, {
  constructors: () => ({Baz: [Baz, [core.int]]})
});
function main(args) {
}
dart.fn(main, dart.void, [dart.dynamic]);
const some_top_level_constant = "abc";
exports.some_top_level_final = "abc";
exports.some_top_level_var = "abc";
// Exports:
exports.generic_function = generic_function;
exports.Callback = Callback;
exports.Foo$ = Foo$;
exports.Foo = Foo;
exports.Bar = Bar;
exports.Baz = Baz;
exports.main = main;
exports.some_top_level_constant = some_top_level_constant;
export default exports;
