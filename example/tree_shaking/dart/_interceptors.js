dart_library.library('dart/_interceptors', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/_internal',
  'dart/collection'
], /* Lazy imports */[
  'dart/_js_helper'
], function(exports, dart, core, _internal, collection, _js_helper) {
  'use strict';
  let dartx = dart.dartx;
  const JSArray$ = dart.generic(function(E) {
    dart.defineExtensionNames([
      'add',
      'remove',
      'clear',
      'map',
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
      [dartx.map](f) {
        dart.as(f, dart.functionType(dart.dynamic, [E]));
        return _internal.IterableMixinWorkaround.mapList(this, f);
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
        [dartx.remove]: [core.bool, [core.Object]],
        [dartx.clear]: [dart.void, []],
        [dartx.map]: [core.Iterable, [dart.functionType(dart.dynamic, [E])]],
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
});
