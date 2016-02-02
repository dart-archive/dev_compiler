'use strict';
require("./_debugger");
require("./html_common");
require("./html");
require("./_metadata");
require("./js");
require("./_js_mirrors");
require("./mirrors");
require("./convert");
require("./_js_primitives");
require("./_isolate_helper");
require("./_native_typed_data");
require("./typed_data");
require("./isolate");
require("./_js_helper");
require("./_js_embedded_names");
require("./_foreign_helper");
require("./async");
require("./_interceptors");
require("./math");
require("./_internal");
require("./collection");
require("./core");
let dart = require("./_runtime");
let core = require("./core");
let _interceptors = require("./_interceptors");
let _js_primitives = require("./_js_primitives");
let dartx = dart.dartx;
class EfficientLength extends core.Object {}
const _Transformation$ = dart.generic(function(S, T) {
  const _Transformation = dart.typedef('_Transformation', () => dart.functionType(T, [S]));
  return _Transformation;
});
let _Transformation = _Transformation$();
const _ElementPredicate$ = dart.generic(function(E) {
  const _ElementPredicate = dart.typedef('_ElementPredicate', () => dart.functionType(core.bool, [E]));
  return _ElementPredicate;
});
let _ElementPredicate = _ElementPredicate$();
const _ExpandFunction$ = dart.generic(function(S, T) {
  const _ExpandFunction = dart.typedef('_ExpandFunction', () => dart.functionType(core.Iterable$(T), [S]));
  return _ExpandFunction;
});
let _ExpandFunction = _ExpandFunction$();
const __CastType0$ = dart.generic(function(S, T) {
  const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.Iterable$(T), [S]));
  return __CastType0;
});
let __CastType0 = __CastType0$();
const __CastType2$ = dart.generic(function(T) {
  const __CastType2 = dart.typedef('__CastType2', () => dart.functionType(core.bool, [T]));
  return __CastType2;
});
let __CastType2 = __CastType2$();
const FixedLengthListMixin$ = dart.generic(function(E) {
  class FixedLengthListMixin extends core.Object {
    set length(newLength) {
      dart.throw(new core.UnsupportedError("Cannot change the length of a fixed-length list"));
    }
    add(value) {
      dart.as(value, E);
      dart.throw(new core.UnsupportedError("Cannot add to a fixed-length list"));
    }
    remove(element) {
      dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
    }
    clear() {
      dart.throw(new core.UnsupportedError("Cannot clear a fixed-length list"));
    }
    removeLast() {
      dart.throw(new core.UnsupportedError("Cannot remove from a fixed-length list"));
    }
  }
  dart.setSignature(FixedLengthListMixin, {
    methods: () => ({
      add: [dart.void, [E]],
      remove: [core.bool, [core.Object]],
      clear: [dart.void, []],
      removeLast: [E, []]
    })
  });
  return FixedLengthListMixin;
});
let FixedLengthListMixin = FixedLengthListMixin$();
function makeListFixedLength(growableList) {
  _interceptors.JSArray.markFixedList(growableList);
  return growableList;
}
dart.fn(makeListFixedLength, core.List, [core.List]);
exports.printToZone = null;
function printToConsole(line) {
  _js_primitives.printString(`${line}`);
}
dart.fn(printToConsole, dart.void, [core.String]);
const _name = dart.JsSymbol('_name');
class Symbol extends core.Object {
  Symbol(name) {
    this[_name] = name;
  }
  get hashCode() {
    let arbitraryPrime = 664597;
    return 536870911 & arbitraryPrime * dart.notNull(dart.hashCode(this[_name]));
  }
  toString() {
    return `Symbol("${this[_name]}")`;
  }
  static getName(symbol) {
    return symbol[_name];
  }
}
Symbol[dart.implements] = () => [core.Symbol];
dart.setSignature(Symbol, {
  constructors: () => ({Symbol: [Symbol, [core.String]]}),
  statics: () => ({getName: [core.String, [Symbol]]}),
  names: ['getName']
});
// Exports:
exports.EfficientLength = EfficientLength;
exports.FixedLengthListMixin$ = FixedLengthListMixin$;
exports.FixedLengthListMixin = FixedLengthListMixin;
exports.makeListFixedLength = makeListFixedLength;
exports.printToConsole = printToConsole;
exports.Symbol = Symbol;
