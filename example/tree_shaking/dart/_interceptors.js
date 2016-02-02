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
let _internal = require("./_internal");
let _js_helper = require("./_js_helper");
let collection = require("./collection");
let dartx = dart.dartx;
const JSArray$ = dart.generic(function(E) {
  dart.defineExtensionNames([
    'add',
    'removeLast',
    'remove',
    'clear',
    'forEach',
    'map',
    'join',
    'sublist',
    'last',
    'setRange',
    'any',
    'sort',
    'contains',
    'isEmpty',
    'isNotEmpty',
    'toString',
    'toList',
    'iterator',
    'hashCode',
    'length',
    'length',
    'get',
    'set'
  ]);
  class JSArray extends core.Object {
    JSArray() {
    }
    static typed(allocation) {
      return dart.list(allocation, E);
    }
    static markFixed(allocation) {
      return JSArray$(E).typed(JSArray$().markFixedList(dart.as(allocation, core.List)));
    }
    static markGrowable(allocation) {
      return JSArray$(E).typed(allocation);
    }
    static markFixedList(list) {
      list.fixed$length = Array;
      return list;
    }
    [dartx.add](value) {
      dart.as(value, E);
      this[dartx.checkGrowable]('add');
      this.push(value);
    }
    [dartx.removeLast]() {
      this[dartx.checkGrowable]('removeLast');
      if (this[dartx.length] == 0) dart.throw(new core.RangeError.value(-1));
      return dart.as(this.pop(), E);
    }
    [dartx.remove](element) {
      this[dartx.checkGrowable]('remove');
      for (let i = 0; i < dart.notNull(this[dartx.length]); i++) {
        if (dart.equals(this[dartx.get](i), element)) {
          this.splice(i, 1);
          return true;
        }
      }
      return false;
    }
    [dartx.clear]() {
      this[dartx.length] = 0;
    }
    [dartx.forEach](f) {
      dart.as(f, dart.functionType(dart.void, [E]));
      let length = this[dartx.length];
      for (let i = 0; i < dart.notNull(length); i++) {
        f(dart.as(this[i], E));
        if (length != this[dartx.length]) {
          dart.throw(new core.ConcurrentModificationError(this));
        }
      }
    }
    [dartx.map](f) {
      dart.as(f, dart.functionType(dart.dynamic, [E]));
      return _internal.IterableMixinWorkaround.mapList(this, f);
    }
    [dartx.join](separator) {
      if (separator === void 0) separator = "";
      let list = core.List.new(this[dartx.length]);
      for (let i = 0; i < dart.notNull(this[dartx.length]); i++) {
        list[dartx.set](i, `${this[dartx.get](i)}`);
      }
      return list.join(separator);
    }
    [dartx.sublist](start, end) {
      if (end === void 0) end = null;
      _js_helper.checkNull(start);
      if (!(typeof start == 'number')) dart.throw(new core.ArgumentError(start));
      if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this[dartx.length])) {
        dart.throw(new core.RangeError.range(start, 0, this[dartx.length]));
      }
      if (end == null) {
        end = this[dartx.length];
      } else {
        if (!(typeof end == 'number')) dart.throw(new core.ArgumentError(end));
        if (dart.notNull(end) < dart.notNull(start) || dart.notNull(end) > dart.notNull(this[dartx.length])) {
          dart.throw(new core.RangeError.range(end, start, this[dartx.length]));
        }
      }
      if (start == end) return dart.list([], E);
      return JSArray$(E).typed(this.slice(start, end));
    }
    get [dartx.last]() {
      if (dart.notNull(this[dartx.length]) > 0) return this[dartx.get](dart.notNull(this[dartx.length]) - 1);
      dart.throw(new core.StateError("No elements"));
    }
    [dartx.setRange](start, end, iterable, skipCount) {
      dart.as(iterable, core.Iterable$(E));
      if (skipCount === void 0) skipCount = 0;
      _internal.IterableMixinWorkaround.setRangeList(this, start, end, iterable, skipCount);
    }
    [dartx.any](f) {
      dart.as(f, dart.functionType(core.bool, [E]));
      return _internal.IterableMixinWorkaround.any(this, f);
    }
    [dartx.sort](compare) {
      if (compare === void 0) compare = null;
      dart.as(compare, dart.functionType(core.int, [E, E]));
      _internal.IterableMixinWorkaround.sortList(this, compare);
    }
    [dartx.contains](other) {
      for (let i = 0; i < dart.notNull(this[dartx.length]); i++) {
        if (dart.equals(this[dartx.get](i), other)) return true;
      }
      return false;
    }
    get [dartx.isEmpty]() {
      return this[dartx.length] == 0;
    }
    get [dartx.isNotEmpty]() {
      return !dart.notNull(this[dartx.isEmpty]);
    }
    toString() {
      return collection.ListBase.listToString(this);
    }
    [dartx.toList]({growable = true} = {}) {
      let list = this.slice();
      if (!dart.notNull(growable)) JSArray$().markFixedList(dart.as(list, core.List));
      return JSArray$(E).typed(list);
    }
    get [dartx.iterator]() {
      return new (_internal.ListIterator$(E))(this);
    }
    get hashCode() {
      return _js_helper.Primitives.objectHashCode(this);
    }
    get [dartx.length]() {
      return this.length;
    }
    set [dartx.length](newLength) {
      if (!(typeof newLength == 'number')) dart.throw(new core.ArgumentError(newLength));
      if (dart.notNull(newLength) < 0) dart.throw(new core.RangeError.value(newLength));
      this[dartx.checkGrowable]('set length');
      this.length = newLength;
    }
    [dartx.get](index) {
      if (!(typeof index == 'number')) dart.throw(new core.ArgumentError(index));
      if (dart.notNull(index) >= dart.notNull(this[dartx.length]) || dart.notNull(index) < 0) dart.throw(new core.RangeError.value(index));
      return dart.as(this[index], E);
    }
    [dartx.set](index, value) {
      dart.as(value, E);
      if (!(typeof index == 'number')) dart.throw(new core.ArgumentError(index));
      if (dart.notNull(index) >= dart.notNull(this[dartx.length]) || dart.notNull(index) < 0) dart.throw(new core.RangeError.value(index));
      this[index] = value;
      return value;
    }
  }
  dart.setBaseClass(JSArray, dart.global.Array);
  JSArray[dart.implements] = () => [core.List$(E), JSIndexable];
  dart.setSignature(JSArray, {
    constructors: () => ({
      JSArray: [JSArray$(E), []],
      typed: [JSArray$(E), [dart.dynamic]],
      markFixed: [JSArray$(E), [dart.dynamic]],
      markGrowable: [JSArray$(E), [dart.dynamic]]
    }),
    methods: () => ({
      [dartx.add]: [dart.void, [E]],
      [dartx.removeLast]: [E, []],
      [dartx.remove]: [core.bool, [core.Object]],
      [dartx.clear]: [dart.void, []],
      [dartx.forEach]: [dart.void, [dart.functionType(dart.void, [E])]],
      [dartx.map]: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
      [dartx.join]: [core.String, [], [core.String]],
      [dartx.sublist]: [core.List$(E), [core.int], [core.int]],
      [dartx.setRange]: [dart.void, [core.int, core.int, core.Iterable$(E)], [core.int]],
      [dartx.any]: [core.bool, [dart.functionType(core.bool, [E])]],
      [dartx.sort]: [dart.void, [], [dart.functionType(core.int, [E, E])]],
      [dartx.contains]: [core.bool, [core.Object]],
      [dartx.toList]: [core.List$(E), [], {growable: core.bool}],
      [dartx.get]: [E, [core.int]],
      [dartx.set]: [dart.void, [core.int, E]]
    }),
    statics: () => ({markFixedList: [core.List, [core.List]]}),
    names: ['markFixedList']
  });
  JSArray[dart.metadata] = () => [dart.const(new _js_helper.JsPeerInterface({name: 'Array'}))];
  return JSArray;
});
let JSArray = JSArray$();
dart.registerExtension(dart.global.Array, JSArray);
const JSMutableArray$ = dart.generic(function(E) {
  class JSMutableArray extends JSArray$(E) {
    JSMutableArray() {
      super.JSArray();
    }
  }
  JSMutableArray[dart.implements] = () => [JSMutableIndexable];
  return JSMutableArray;
});
let JSMutableArray = JSMutableArray$();
const JSFixedArray$ = dart.generic(function(E) {
  class JSFixedArray extends JSMutableArray$(E) {}
  return JSFixedArray;
});
let JSFixedArray = JSFixedArray$();
const JSExtendableArray$ = dart.generic(function(E) {
  class JSExtendableArray extends JSMutableArray$(E) {}
  return JSExtendableArray;
});
let JSExtendableArray = JSExtendableArray$();
class Interceptor extends core.Object {
  Interceptor() {
  }
}
dart.setSignature(Interceptor, {
  constructors: () => ({Interceptor: [Interceptor, []]})
});
class JSIndexable extends core.Object {}
class JSMutableIndexable extends JSIndexable {}
class JSObject extends core.Object {}
// Exports:
exports.JSArray$ = JSArray$;
exports.JSArray = JSArray;
exports.JSMutableArray$ = JSMutableArray$;
exports.JSMutableArray = JSMutableArray;
exports.JSFixedArray$ = JSFixedArray$;
exports.JSFixedArray = JSFixedArray;
exports.JSExtendableArray$ = JSExtendableArray$;
exports.JSExtendableArray = JSExtendableArray;
exports.Interceptor = Interceptor;
exports.JSIndexable = JSIndexable;
exports.JSMutableIndexable = JSMutableIndexable;
exports.JSObject = JSObject;
