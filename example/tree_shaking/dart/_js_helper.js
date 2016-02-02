dart_library.library('dart/_js_helper', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/collection'
], /* Lazy imports */[
], function(exports, dart, core, collection) {
  'use strict';
  let dartx = dart.dartx;
  class Native extends core.Object {
    Native(name) {
      this.name = name;
    }
  }
  dart.setSignature(Native, {
    constructors: () => ({Native: [Native, [core.String]]})
  });
  class JsPeerInterface extends core.Object {
    JsPeerInterface({name = null} = {}) {
      this.name = name;
    }
  }
  dart.setSignature(JsPeerInterface, {
    constructors: () => ({JsPeerInterface: [JsPeerInterface, [], {name: core.String}]})
  });
  const _nativeRegExp = Symbol('_nativeRegExp');
  class JSSyntaxRegExp extends core.Object {
    toString() {
      return `RegExp/${this.pattern}/`;
    }
    JSSyntaxRegExp(source, {multiLine = false, caseSensitive = true} = {}) {
      this.pattern = source;
      this[_nativeRegExp] = JSSyntaxRegExp.makeNative(source, multiLine, caseSensitive, false);
    }
    static makeNative(source, multiLine, caseSensitive, global) {
      checkString(source);
      let m = dart.notNull(multiLine) ? 'm' : '';
      let i = dart.notNull(caseSensitive) ? '' : 'i';
      let g = dart.notNull(global) ? 'g' : '';
      let regexp = (function() {
        try {
          return new RegExp(source, m + i + g);
        } catch (e) {
          return e;
        }

      })();
      if (regexp instanceof RegExp) return regexp;
      let errorMessage = String(regexp);
      dart.throw(new core.FormatException(`Illegal RegExp pattern: ${source}, ${errorMessage}`));
    }
    firstMatch(string) {
      let m = dart.as(this[_nativeRegExp].exec(checkString(string)), core.List$(core.String));
      if (m == null) return null;
      return new _MatchImplementation(this, m);
    }
    allMatches(string, start) {
      if (start === void 0) start = 0;
      checkString(string);
      checkInt(start);
      if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(string[dartx.length])) {
        dart.throw(new core.RangeError.range(start, 0, string[dartx.length]));
      }
      return new _AllMatchesIterable(this, string, start);
    }
  }
  JSSyntaxRegExp[dart.implements] = () => [core.RegExp];
  dart.setSignature(JSSyntaxRegExp, {
    constructors: () => ({JSSyntaxRegExp: [JSSyntaxRegExp, [core.String], {multiLine: core.bool, caseSensitive: core.bool}]}),
    methods: () => ({
      firstMatch: [core.Match, [core.String]],
      allMatches: [core.Iterable$(core.Match), [core.String], [core.int]]
    }),
    statics: () => ({makeNative: [dart.dynamic, [core.String, core.bool, core.bool, core.bool]]}),
    names: ['makeNative']
  });
  class InternalMap extends core.Object {}
  class Primitives extends core.Object {
    static initializeStatics(id) {
      Primitives.mirrorFunctionCacheName = dart.notNull(Primitives.mirrorFunctionCacheName) + `_${id}`;
      Primitives.mirrorInvokeCacheName = dart.notNull(Primitives.mirrorInvokeCacheName) + `_${id}`;
    }
    static objectHashCode(object) {
      let hash = dart.as(object.$identityHash, core.int);
      if (hash == null) {
        hash = Math.random() * 0x3fffffff | 0;
        object.$identityHash = hash;
      }
      return hash;
    }
    static objectToString(object) {
      let name = dart.typeName(dart.realRuntimeType(object));
      return `Instance of '${name}'`;
    }
    static dateNow() {
      return Date.now();
    }
    static initTicker() {
      if (Primitives.timerFrequency != null) return;
      Primitives.timerFrequency = 1000;
      Primitives.timerTicks = Primitives.dateNow;
      if (typeof window == "undefined") return;
      let jsWindow = window;
      if (jsWindow == null) return;
      let performance = jsWindow.performance;
      if (performance == null) return;
      if (typeof performance.now != "function") return;
      Primitives.timerFrequency = 1000000;
      Primitives.timerTicks = dart.fn(() => (1000 * performance.now())[dartx.floor](), core.int, []);
    }
    static get isD8() {
      return typeof version == "function" && typeof os == "object" && "system" in os;
    }
    static get isJsshell() {
      return typeof version == "function" && typeof system == "function";
    }
    static flattenString(str) {
      return str.charCodeAt(0) == 0 ? str : str;
    }
    static valueFromDecomposedDate(years, month, day, hours, minutes, seconds, milliseconds, isUtc) {
      let MAX_MILLISECONDS_SINCE_EPOCH = 8640000000000000;
      checkInt(years);
      checkInt(month);
      checkInt(day);
      checkInt(hours);
      checkInt(minutes);
      checkInt(seconds);
      checkInt(milliseconds);
      checkBool(isUtc);
      let jsMonth = dart.dsend(month, '-', 1);
      let value = null;
      if (dart.notNull(dart.as(isUtc, core.bool))) {
        value = Date.UTC(years, jsMonth, day, hours, minutes, seconds, milliseconds);
      } else {
        value = new Date(years, jsMonth, day, hours, minutes, seconds, milliseconds).valueOf();
      }
      if (dart.notNull(dart.as(dart.dload(value, 'isNaN'), core.bool)) || dart.notNull(dart.as(dart.dsend(value, '<', -MAX_MILLISECONDS_SINCE_EPOCH), core.bool)) || dart.notNull(dart.as(dart.dsend(value, '>', MAX_MILLISECONDS_SINCE_EPOCH), core.bool))) {
        return null;
      }
      if (dart.notNull(dart.as(dart.dsend(years, '<=', 0), core.bool)) || dart.notNull(dart.as(dart.dsend(years, '<', 100), core.bool))) return Primitives.patchUpY2K(value, years, isUtc);
      return value;
    }
    static patchUpY2K(value, years, isUtc) {
      let date = new Date(value);
      if (dart.notNull(dart.as(isUtc, core.bool))) {
        date.setUTCFullYear(years);
      } else {
        date.setFullYear(years);
      }
      return date.valueOf();
    }
    static identicalImplementation(a, b) {
      return a == null ? b == null : a === b;
    }
  }
  dart.setSignature(Primitives, {
    statics: () => ({
      initializeStatics: [dart.void, [core.int]],
      objectHashCode: [core.int, [dart.dynamic]],
      objectToString: [core.String, [core.Object]],
      dateNow: [core.int, []],
      initTicker: [dart.void, []],
      flattenString: [core.String, [core.String]],
      valueFromDecomposedDate: [dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]],
      patchUpY2K: [dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic]],
      identicalImplementation: [core.bool, [dart.dynamic, dart.dynamic]]
    }),
    names: ['initializeStatics', 'objectHashCode', 'objectToString', 'dateNow', 'initTicker', 'flattenString', 'valueFromDecomposedDate', 'patchUpY2K', 'identicalImplementation']
  });
  Primitives.mirrorFunctionCacheName = '$cachedFunction';
  Primitives.mirrorInvokeCacheName = '$cachedInvocation';
  Primitives.timerFrequency = null;
  Primitives.timerTicks = null;
  function checkInt(value) {
    if (!(typeof value == 'number')) {
      dart.throw(new core.ArgumentError(value));
    }
    return value;
  }
  dart.fn(checkInt);
  function checkBool(value) {
    if (!(typeof value == 'boolean')) {
      dart.throw(new core.ArgumentError(value));
    }
    return value;
  }
  dart.fn(checkBool);
  function checkString(value) {
    if (!(typeof value == 'string')) {
      dart.throw(new core.ArgumentError(value));
    }
    return value;
  }
  dart.fn(checkString);
  function getTraceFromException(exception) {
    return new _StackTrace(exception);
  }
  dart.fn(getTraceFromException, core.StackTrace, [dart.dynamic]);
  const _exception = Symbol('_exception');
  const _trace = Symbol('_trace');
  class _StackTrace extends core.Object {
    _StackTrace(exception) {
      this[_exception] = exception;
    }
    toString() {
      if (this[_trace] != null) return this[_trace];
      let trace = null;
      if (typeof this[_exception] === "object") {
        trace = dart.as(this[_exception].stack, core.String);
      }
      return this[_trace] = trace == null ? '' : trace;
    }
  }
  _StackTrace[dart.implements] = () => [core.StackTrace];
  dart.setSignature(_StackTrace, {
    constructors: () => ({_StackTrace: [_StackTrace, [dart.dynamic]]})
  });
  function objectHashCode(object) {
    if (object == null || typeof object != 'object') {
      return dart.hashCode(object);
    } else {
      return Primitives.objectHashCode(object);
    }
  }
  dart.fn(objectHashCode, core.int, [dart.dynamic]);
  class CastErrorImplementation extends core.Error {
    CastErrorImplementation(actualType, expectedType) {
      this.message = `CastError: Casting value of type ${actualType} to` + ` incompatible type ${expectedType}`;
      super.Error();
    }
    toString() {
      return this.message;
    }
  }
  CastErrorImplementation[dart.implements] = () => [core.CastError];
  dart.setSignature(CastErrorImplementation, {
    constructors: () => ({CastErrorImplementation: [CastErrorImplementation, [core.Object, core.Object]]})
  });
  function random64() {
    let int32a = Math.random() * 0x100000000 >>> 0;
    let int32b = Math.random() * 0x100000000 >>> 0;
    return int32a + int32b * 4294967296;
  }
  dart.fn(random64, core.int, []);
  const _generator = Symbol('_generator');
  const _args = Symbol('_args');
  const _jsIterator = Symbol('_jsIterator');
  const SyncIterable$ = dart.generic(function(E) {
    class SyncIterable extends collection.IterableBase$(E) {
      SyncIterable(generator, args) {
        this[_generator] = generator;
        this[_args] = args;
        super.IterableBase();
      }
      get iterator() {
        return new (SyncIterator$(E))(this[_jsIterator]());
      }
    }
    dart.setSignature(SyncIterable, {
      constructors: () => ({SyncIterable: [SyncIterable$(E), [dart.dynamic, dart.dynamic]]})
    });
    dart.defineExtensionMembers(SyncIterable, ['iterator']);
    return SyncIterable;
  });
  let SyncIterable = SyncIterable$();
  // Exports:
  exports.Native = Native;
  exports.JsPeerInterface = JsPeerInterface;
  exports.JSSyntaxRegExp = JSSyntaxRegExp;
  exports.InternalMap = InternalMap;
  exports.Primitives = Primitives;
  exports.checkInt = checkInt;
  exports.checkBool = checkBool;
  exports.checkString = checkString;
  exports.getTraceFromException = getTraceFromException;
  exports.objectHashCode = objectHashCode;
  exports.CastErrorImplementation = CastErrorImplementation;
  exports.random64 = random64;
  exports.SyncIterable$ = SyncIterable$;
  exports.SyncIterable = SyncIterable;
});
