'use strict';
require("dart/_debugger");
require("dart/html_common");
require("dart/html");
require("dart/_metadata");
require("dart/js");
require("dart/_js_mirrors");
require("dart/mirrors");
require("dart/convert");
require("dart/_js_primitives");
require("dart/_isolate_helper");
require("dart/_native_typed_data");
require("dart/typed_data");
require("dart/isolate");
require("dart/_js_helper");
require("dart/_js_embedded_names");
require("dart/_foreign_helper");
require("dart/async");
require("dart/_interceptors");
require("dart/math");
require("dart/_internal");
require("dart/collection");
require("dart/core");
let dart = require("dart/_runtime");
let core = require("dart/core");
let collection = require("dart/collection");
let _foreign_helper = require("dart/_foreign_helper");
let _interceptors = require("dart/_interceptors");
let dartx = dart.dartx;
// /* Incoming: NativeByteBuffer (ClassElementImpl @ dart:_native_typed_data), NativeTypedData (ClassElementImpl @ dart:_native_typed_data), NativeByteData (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data), Native. (ConstructorElementImpl @ dart:_js_helper/annotations.dart) */
class Native extends core.Object {
  Native(name) {
    this.name = name;
  }
}
dart.setSignature(Native, {
  constructors: () => ({Native: [Native, [core.String]]})
});
// /* Incoming: JSBool (ClassElementImpl @ dart:_interceptors), JSArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSNumber (ClassElementImpl @ dart:_interceptors/js_number.dart), JSString (ClassElementImpl @ dart:_interceptors/js_string.dart), JsPeerInterface. (ConstructorElementImpl @ dart:_js_helper/annotations.dart) */
class JsPeerInterface extends core.Object {
  JsPeerInterface({name = null} = {}) {
    this.name = name;
  }
}
dart.setSignature(JsPeerInterface, {
  constructors: () => ({JsPeerInterface: [JsPeerInterface, [], {name: core.String}]})
});
const _nativeGlobalVersion = Symbol('_nativeGlobalVersion');
function regExpGetGlobalNative(regexp) {
  let nativeRegexp = regexp[_nativeGlobalVersion];
  nativeRegexp.lastIndex = 0;
  return nativeRegexp;
}
dart.fn(regExpGetGlobalNative, () => dart.definiteFunctionType(dart.dynamic, [JSSyntaxRegExp]));
const _nativeRegExp = Symbol('_nativeRegExp');
const _nativeGlobalRegExp = Symbol('_nativeGlobalRegExp');
const _isMultiLine = Symbol('_isMultiLine');
const _isCaseSensitive = Symbol('_isCaseSensitive');
const _execGlobal = Symbol('_execGlobal');
// /* Incoming: JSString.split (MethodElementImpl @ dart:_interceptors/js_string.dart), re (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), JSString.indexOf (MethodElementImpl @ dart:_interceptors/js_string.dart), re (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), match (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), regExpGetNative (FunctionElementImpl @ dart:_js_helper/regexp_helper.dart), regExpGetGlobalNative (FunctionElementImpl @ dart:_js_helper/regexp_helper.dart), nativeRegexp (LocalVariableElementImpl @ dart:_js_helper/regexp_helper.dart), regExpCaptureCount (FunctionElementImpl @ dart:_js_helper/regexp_helper.dart), nativeAnchoredRegExp (LocalVariableElementImpl @ dart:_js_helper/regexp_helper.dart), JSSyntaxRegExp. (ConstructorElementImpl @ dart:_js_helper/regexp_helper.dart), JSSyntaxRegExp.firstMatch (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), JSSyntaxRegExp.allMatches (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), JSSyntaxRegExp._execGlobal (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), JSSyntaxRegExp._execAnchored (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), _AllMatchesIterable._re (FieldElementImpl @ dart:_js_helper/regexp_helper.dart), _AllMatchesIterable. (ConstructorElementImpl @ dart:_js_helper/regexp_helper.dart), _AllMatchesIterable.iterator (FieldElementImpl @ dart:_js_helper/regexp_helper.dart), _AllMatchesIterator._regExp (FieldElementImpl @ dart:_js_helper/regexp_helper.dart), _AllMatchesIterator. (ConstructorElementImpl @ dart:_js_helper/regexp_helper.dart), match (LocalVariableElementImpl @ dart:_js_helper/regexp_helper.dart), firstMatchAfter (FunctionElementImpl @ dart:_js_helper/regexp_helper.dart), stringContainsUnchecked (FunctionElementImpl @ dart:_js_helper/string_helper.dart), stringReplaceAllUnchecked (FunctionElementImpl @ dart:_js_helper/string_helper.dart), re (LocalVariableElementImpl @ dart:_js_helper/string_helper.dart), stringReplaceFirstUnchecked (FunctionElementImpl @ dart:_js_helper/string_helper.dart), RegExp. (ConstructorElementImpl @ dart:core/regexp.dart) */
class JSSyntaxRegExp extends core.Object {
  toString() {
    return `RegExp/${this.pattern}/`;
  }
  JSSyntaxRegExp(source, {multiLine = false, caseSensitive = true} = {}) {
    this.pattern = source;
    this[_nativeRegExp] = JSSyntaxRegExp.makeNative(source, multiLine, caseSensitive, false);
    this[_nativeGlobalRegExp] = null;
  }
  get [_nativeGlobalVersion]() {
    if (this[_nativeGlobalRegExp] != null) return this[_nativeGlobalRegExp];
    return this[_nativeGlobalRegExp] = JSSyntaxRegExp.makeNative(this.pattern, this[_isMultiLine], this[_isCaseSensitive], true);
  }
  get [_isMultiLine]() {
    return this[_nativeRegExp].multiline;
  }
  get [_isCaseSensitive]() {
    return !this[_nativeRegExp].ignoreCase;
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
  hasMatch(string) {
    return this[_nativeRegExp].test(checkString(string));
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
  [_execGlobal](string, start) {
    let regexp = this[_nativeGlobalVersion];
    regexp.lastIndex = start;
    let match = dart.as(regexp.exec(string), core.List);
    if (match == null) return null;
    return new _MatchImplementation(this, dart.as(match, core.List$(core.String)));
  }
}
JSSyntaxRegExp[dart.implements] = () => [core.RegExp];
dart.setSignature(JSSyntaxRegExp, {
  constructors: () => ({JSSyntaxRegExp: [JSSyntaxRegExp, [core.String], {multiLine: core.bool, caseSensitive: core.bool}]}),
  methods: () => ({
    hasMatch: [core.bool, [core.String]],
    allMatches: [core.Iterable$(core.Match), [core.String], [core.int]],
    [_execGlobal]: [core.Match, [core.String, core.int]]
  }),
  statics: () => ({makeNative: [dart.dynamic, [core.String, core.bool, core.bool, core.bool]]}),
  names: ['makeNative']
});
dart.defineExtensionMembers(JSSyntaxRegExp, ['allMatches']);
const _match = Symbol('_match');
// /* Incoming: JSSyntaxRegExp.firstMatch (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), JSSyntaxRegExp._execGlobal (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), JSSyntaxRegExp._execAnchored (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), _MatchImplementation. (ConstructorElementImpl @ dart:_js_helper/regexp_helper.dart) */
class _MatchImplementation extends core.Object {
  _MatchImplementation(pattern, match) {
    this.pattern = pattern;
    this[_match] = match;
    dart.assert(typeof this[_match].input == 'string');
    dart.assert(typeof this[_match].index == 'number');
  }
  group(index) {
    return this[_match][dartx.get](index);
  }
  get(index) {
    return this.group(index);
  }
}
_MatchImplementation[dart.implements] = () => [core.Match];
dart.setSignature(_MatchImplementation, {
  constructors: () => ({_MatchImplementation: [_MatchImplementation, [core.Pattern, core.List$(core.String)]]}),
  methods: () => ({
    group: [core.String, [core.int]],
    get: [core.String, [core.int]]
  })
});
const _re = Symbol('_re');
const _string = Symbol('_string');
const _start = Symbol('_start');
// /* Incoming: JSSyntaxRegExp.allMatches (MethodElementImpl @ dart:_js_helper/regexp_helper.dart), _AllMatchesIterable. (ConstructorElementImpl @ dart:_js_helper/regexp_helper.dart) */
class _AllMatchesIterable extends collection.IterableBase$(core.Match) {
  _AllMatchesIterable(re, string, start) {
    this[_re] = re;
    this[_string] = string;
    this[_start] = start;
    super.IterableBase();
  }
  get iterator() {
    return new _AllMatchesIterator(this[_re], this[_string], this[_start]);
  }
}
dart.setSignature(_AllMatchesIterable, {
  constructors: () => ({_AllMatchesIterable: [_AllMatchesIterable, [JSSyntaxRegExp, core.String, core.int]]})
});
dart.defineExtensionMembers(_AllMatchesIterable, ['iterator']);
const _regExp = Symbol('_regExp');
const _nextIndex = Symbol('_nextIndex');
const _current = Symbol('_current');
// /* Incoming: _AllMatchesIterable.iterator (FieldElementImpl @ dart:_js_helper/regexp_helper.dart), _AllMatchesIterator. (ConstructorElementImpl @ dart:_js_helper/regexp_helper.dart) */
class _AllMatchesIterator extends core.Object {
  _AllMatchesIterator(regExp, string, nextIndex) {
    this[_regExp] = regExp;
    this[_string] = string;
    this[_nextIndex] = nextIndex;
    this[_current] = null;
  }
  moveNext() {
    if (this[_string] == null) return false;
    if (dart.notNull(this[_nextIndex]) <= dart.notNull(this[_string][dartx.length])) {
      let match = this[_regExp][_execGlobal](this[_string], this[_nextIndex]);
      if (match != null) {
        this[_current] = match;
        let nextIndex = match.end;
        if (match.start == nextIndex) {
          nextIndex = dart.notNull(nextIndex) + 1;
        }
        this[_nextIndex] = nextIndex;
        return true;
      }
    }
    this[_current] = null;
    this[_string] = null;
    return false;
  }
}
_AllMatchesIterator[dart.implements] = () => [core.Iterator$(core.Match)];
dart.setSignature(_AllMatchesIterator, {
  constructors: () => ({_AllMatchesIterator: [_AllMatchesIterator, [JSSyntaxRegExp, core.String, core.int]]}),
  methods: () => ({moveNext: [core.bool, []]})
});
function firstMatchAfter(regExp, string, start) {
  return regExp[_execGlobal](string, start);
}
dart.fn(firstMatchAfter, core.Match, [JSSyntaxRegExp, core.String, core.int]);
// /* Incoming: JSString.matchAsPrefix (MethodElementImpl @ dart:_interceptors/js_string.dart), StringMatch. (ConstructorElementImpl @ dart:_js_helper/string_helper.dart), allMatchesInStringUnchecked (FunctionElementImpl @ dart:_js_helper/string_helper.dart), stringReplaceAllEmptyFuncUnchecked (FunctionElementImpl @ dart:_js_helper/string_helper.dart), stringReplaceAllStringFuncUnchecked (FunctionElementImpl @ dart:_js_helper/string_helper.dart) */
class StringMatch extends core.Object {
  StringMatch(start, input, pattern) {
    this.start = start;
    this.input = input;
    this.pattern = pattern;
  }
  get(g) {
    return this.group(g);
  }
  group(group_) {
    if (group_ != 0) {
      dart.throw(new core.RangeError.value(group_));
    }
    return this.pattern;
  }
}
StringMatch[dart.implements] = () => [core.Match];
dart.setSignature(StringMatch, {
  constructors: () => ({StringMatch: [StringMatch, [core.int, core.String, core.String]]}),
  methods: () => ({
    get: [core.String, [core.int]],
    group: [core.String, [core.int]]
  })
});
function allMatchesInStringUnchecked(needle, haystack, startIndex) {
  let result = core.List$(core.Match).new();
  let length = haystack[dartx.length];
  let patternLength = needle[dartx.length];
  while (true) {
    let position = haystack[dartx.indexOf](needle, startIndex);
    if (position == -1) {
      break;
    }
    result[dartx.add](new StringMatch(position, haystack, needle));
    let endIndex = dart.notNull(position) + dart.notNull(patternLength);
    if (endIndex == length) {
      break;
    } else if (position == endIndex) {
      startIndex = dart.notNull(startIndex) + 1;
    } else {
      startIndex = endIndex;
    }
  }
  return result;
}
dart.fn(allMatchesInStringUnchecked, core.List$(core.Match), [core.String, core.String, core.int]);
function stringContainsUnchecked(receiver, other, startIndex) {
  if (typeof other == 'string') {
    return !dart.equals(dart.dsend(receiver, 'indexOf', other, startIndex), -1);
  } else if (dart.is(other, JSSyntaxRegExp)) {
    return other.hasMatch(dart.as(dart.dsend(receiver, 'substring', startIndex), core.String));
  } else {
    let substr = dart.dsend(receiver, 'substring', startIndex);
    return dart.dload(dart.dsend(other, 'allMatches', substr), 'isNotEmpty');
  }
}
dart.fn(stringContainsUnchecked);
function stringReplaceJS(receiver, replacer, to) {
  to = to.replace(/\$/g, "$$$$");
  return receiver.replace(replacer, to);
}
dart.fn(stringReplaceJS);
const ESCAPE_REGEXP = '[[\\]{}()*+?.\\\\^$|]';
function stringReplaceAllUnchecked(receiver, from, to) {
  checkString(to);
  if (typeof from == 'string') {
    if (from == "") {
      if (dart.equals(receiver, "")) {
        return to;
      } else {
        let result = new core.StringBuffer();
        let length = dart.as(dart.dload(receiver, 'length'), core.int);
        result.write(to);
        for (let i = 0; i < dart.notNull(length); i++) {
          result.write(dart.dindex(receiver, i));
          result.write(to);
        }
        return dart.toString(result);
      }
    } else {
      let quoter = new RegExp(ESCAPE_REGEXP, 'g');
      let quoted = from.replace(quoter, "\\$&");
      let replacer = new RegExp(quoted, 'g');
      return stringReplaceJS(receiver, replacer, to);
    }
  } else if (dart.is(from, JSSyntaxRegExp)) {
    let re = regExpGetGlobalNative(from);
    return stringReplaceJS(receiver, re, to);
  } else {
    checkNull(from);
    dart.throw("String.replaceAll(Pattern) UNIMPLEMENTED");
  }
}
dart.fn(stringReplaceAllUnchecked);
// /* Incoming: _Serializer.serialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _LinkedHashMap (ClassElementImpl @ dart:collection), _LinkedIdentityHashMap (ClassElementImpl @ dart:collection), _LinkedCustomHashMap (ClassElementImpl @ dart:collection) */
class InternalMap extends core.Object {}
// /* Incoming: JSArray.hashCode (FieldElementImpl @ dart:_interceptors/js_array.dart), IsolateNatives.computeThisScript (MethodElementImpl @ dart:_isolate_helper), IsolateNatives._startIsolate (MethodElementImpl @ dart:_isolate_helper), objectHashCode (FunctionElementImpl @ dart:_js_helper), TypeErrorImplementation. (ConstructorElementImpl @ dart:_js_helper), DateTime._internal (ConstructorElementImpl @ dart:core/date_time.dart), DateTime._now (ConstructorElementImpl @ dart:core/date_time.dart), DateTime._brokenDownDateToMillisecondsSinceEpoch (MethodElementImpl @ dart:core/date_time.dart), DateTime.timeZoneName (FieldElementImpl @ dart:core/date_time.dart), DateTime.timeZoneOffset (FieldElementImpl @ dart:core/date_time.dart), DateTime.year (FieldElementImpl @ dart:core/date_time.dart), DateTime.month (FieldElementImpl @ dart:core/date_time.dart), DateTime.day (FieldElementImpl @ dart:core/date_time.dart), DateTime.hour (FieldElementImpl @ dart:core/date_time.dart), DateTime.minute (FieldElementImpl @ dart:core/date_time.dart), DateTime.second (FieldElementImpl @ dart:core/date_time.dart), DateTime.millisecond (FieldElementImpl @ dart:core/date_time.dart), DateTime.weekday (FieldElementImpl @ dart:core/date_time.dart), double.parse (MethodElementImpl @ dart:core/double.dart), Error._objectToString (MethodElementImpl @ dart:core/errors.dart), Error.stackTrace (FieldElementImpl @ dart:core/errors.dart), values (LocalVariableElementImpl @ dart:core/expando.dart), Expando.[] (MethodElementImpl @ dart:core/expando.dart), values (LocalVariableElementImpl @ dart:core/expando.dart), Expando.[]= (MethodElementImpl @ dart:core/expando.dart), key (LocalVariableElementImpl @ dart:core/expando.dart), Expando._getKey (MethodElementImpl @ dart:core/expando.dart), identical (FunctionElementImpl @ dart:core/identical.dart), int.parse (MethodElementImpl @ dart:core/int.dart), Object.hashCode (FieldElementImpl @ dart:core/object.dart), Object.toString (MethodElementImpl @ dart:core/object.dart), Stopwatch._initTicker (MethodElementImpl @ dart:core/stopwatch.dart), Stopwatch._now (MethodElementImpl @ dart:core/stopwatch.dart), String.fromCharCodes (ConstructorElementImpl @ dart:core/string.dart), String.fromCharCode (ConstructorElementImpl @ dart:core/string.dart), String._stringFromIterable (MethodElementImpl @ dart:core/string.dart), StringBuffer.toString (MethodElementImpl @ dart:core/string_buffer.dart), StringBuffer._writeString (MethodElementImpl @ dart:core/string_buffer.dart), uri (LocalVariableElementImpl @ dart:core/uri.dart) */
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
  static _fromCharCodeApply(array) {
    let result = "";
    let kMaxApply = 500;
    let end = array[dartx.length];
    for (let i = 0; i < dart.notNull(end); i = i + kMaxApply) {
      let subarray = null;
      if (dart.notNull(end) <= kMaxApply) {
        subarray = array;
      } else {
        subarray = array.slice(i, i + kMaxApply < dart.notNull(end) ? i + kMaxApply : end);
      }
      result = result + String.fromCharCode.apply(null, subarray);
    }
    return result;
  }
  static stringFromCodePoints(codePoints) {
    let a = dart.list([], core.int);
    for (let i of dart.as(codePoints, core.Iterable)) {
      if (!(typeof i == 'number')) dart.throw(new core.ArgumentError(i));
      if (dart.notNull(dart.as(dart.dsend(i, '<=', 65535), core.bool))) {
        a[dartx.add](dart.as(i, core.int));
      } else if (dart.notNull(dart.as(dart.dsend(i, '<=', 1114111), core.bool))) {
        a[dartx.add](dart.asInt((55296)[dartx['+']](dart.as(dart.dsend(dart.dsend(dart.dsend(i, '-', 65536), '>>', 10), '&', 1023), core.num))));
        a[dartx.add](dart.asInt((56320)[dartx['+']](dart.as(dart.dsend(i, '&', 1023), core.num))));
      } else {
        dart.throw(new core.ArgumentError(i));
      }
    }
    return Primitives._fromCharCodeApply(a);
  }
  static stringFromCharCodes(charCodes) {
    for (let i of dart.as(charCodes, core.Iterable)) {
      if (!(typeof i == 'number')) dart.throw(new core.ArgumentError(i));
      if (dart.notNull(dart.as(dart.dsend(i, '<', 0), core.bool))) dart.throw(new core.ArgumentError(i));
      if (dart.notNull(dart.as(dart.dsend(i, '>', 65535), core.bool))) return Primitives.stringFromCodePoints(charCodes);
    }
    return Primitives._fromCharCodeApply(dart.as(charCodes, core.List$(core.int)));
  }
  static stringConcatUnchecked(string1, string2) {
    return _foreign_helper.JS_STRING_CONCAT(string1, string2);
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
  static lazyAsJsDate(receiver) {
    if (receiver.date === void 0) {
      receiver.date = new Date(dart.dload(receiver, 'millisecondsSinceEpoch'));
    }
    return receiver.date;
  }
  static getYear(receiver) {
    return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCFullYear() + 0 : Primitives.lazyAsJsDate(receiver).getFullYear() + 0;
  }
  static getMonth(receiver) {
    return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCMonth() + 1 : Primitives.lazyAsJsDate(receiver).getMonth() + 1;
  }
  static getDay(receiver) {
    return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCDate() + 0 : Primitives.lazyAsJsDate(receiver).getDate() + 0;
  }
  static getHours(receiver) {
    return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCHours() + 0 : Primitives.lazyAsJsDate(receiver).getHours() + 0;
  }
  static getMinutes(receiver) {
    return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCMinutes() + 0 : Primitives.lazyAsJsDate(receiver).getMinutes() + 0;
  }
  static getSeconds(receiver) {
    return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCSeconds() + 0 : Primitives.lazyAsJsDate(receiver).getSeconds() + 0;
  }
  static getMilliseconds(receiver) {
    return dart.notNull(dart.as(dart.dload(receiver, 'isUtc'), core.bool)) ? Primitives.lazyAsJsDate(receiver).getUTCMilliseconds() + 0 : Primitives.lazyAsJsDate(receiver).getMilliseconds() + 0;
  }
  static getProperty(object, key) {
    if (object == null || typeof object == 'boolean' || typeof object == 'number' || typeof object == 'string') {
      dart.throw(new core.ArgumentError(object));
    }
    return object[key];
  }
  static setProperty(object, key, value) {
    if (object == null || typeof object == 'boolean' || typeof object == 'number' || typeof object == 'string') {
      dart.throw(new core.ArgumentError(object));
    }
    object[key] = value;
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
    _fromCharCodeApply: [core.String, [core.List$(core.int)]],
    stringFromCodePoints: [core.String, [dart.dynamic]],
    stringFromCharCodes: [core.String, [dart.dynamic]],
    stringConcatUnchecked: [core.String, [core.String, core.String]],
    flattenString: [core.String, [core.String]],
    valueFromDecomposedDate: [dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]],
    patchUpY2K: [dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic]],
    lazyAsJsDate: [dart.dynamic, [dart.dynamic]],
    getYear: [dart.dynamic, [dart.dynamic]],
    getMonth: [dart.dynamic, [dart.dynamic]],
    getDay: [dart.dynamic, [dart.dynamic]],
    getHours: [dart.dynamic, [dart.dynamic]],
    getMinutes: [dart.dynamic, [dart.dynamic]],
    getSeconds: [dart.dynamic, [dart.dynamic]],
    getMilliseconds: [dart.dynamic, [dart.dynamic]],
    getProperty: [dart.dynamic, [dart.dynamic, dart.dynamic]],
    setProperty: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
    identicalImplementation: [core.bool, [dart.dynamic, dart.dynamic]]
  }),
  names: ['initializeStatics', 'objectHashCode', 'objectToString', 'dateNow', 'initTicker', '_fromCharCodeApply', 'stringFromCodePoints', 'stringFromCharCodes', 'stringConcatUnchecked', 'flattenString', 'valueFromDecomposedDate', 'patchUpY2K', 'lazyAsJsDate', 'getYear', 'getMonth', 'getDay', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getProperty', 'setProperty', 'identicalImplementation']
});
Primitives.mirrorFunctionCacheName = '$cachedFunction';
Primitives.mirrorInvokeCacheName = '$cachedInvocation';
Primitives.timerFrequency = null;
Primitives.timerTicks = null;
function checkNull(object) {
  if (object == null) dart.throw(new core.ArgumentError(null));
  return object;
}
dart.fn(checkNull);
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
// /* Incoming: getTraceFromException (FunctionElementImpl @ dart:_js_helper), _StackTrace. (ConstructorElementImpl @ dart:_js_helper) */
class _StackTrace extends core.Object {
  _StackTrace(exception) {
    this[_exception] = exception;
    this[_trace] = null;
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
// /* Incoming: NativeTypedArray (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data) */
class JavaScriptIndexingBehavior extends _interceptors.JSMutableIndexable {}
// /* Incoming: throwCastError (FunctionElementImpl @ dart:_runtime/errors.dart), CastErrorImplementation. (ConstructorElementImpl @ dart:_js_helper) */
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
function jsonEncodeNative(string) {
  return JSON.stringify(string);
}
dart.fn(jsonEncodeNative, core.String, [core.String]);
const _jsIterator = Symbol('_jsIterator');
// /* Incoming: SyncIterator. (ConstructorElementImpl @ dart:_js_helper), SyncIterable.iterator (FieldElementImpl @ dart:_js_helper) */
const SyncIterator$ = dart.generic(function(E) {
  class SyncIterator extends core.Object {
    SyncIterator(jsIterator) {
      this[_jsIterator] = jsIterator;
      this[_current] = null;
    }
    moveNext() {
      let ret = this[_jsIterator].next();
      this[_current] = dart.as(ret.value, E);
      return !ret.done;
    }
  }
  SyncIterator[dart.implements] = () => [core.Iterator$(E)];
  dart.setSignature(SyncIterator, {
    constructors: () => ({SyncIterator: [SyncIterator$(E), [dart.dynamic]]}),
    methods: () => ({moveNext: [core.bool, []]})
  });
  return SyncIterator;
});
let SyncIterator = SyncIterator$();
const _generator = Symbol('_generator');
const _args = Symbol('_args');
// /* Incoming: syncStar (FunctionElementImpl @ dart:_runtime/generators.dart), SyncIterable. (ConstructorElementImpl @ dart:_js_helper) */
const SyncIterable$ = dart.generic(function(E) {
  class SyncIterable extends collection.IterableBase$(E) {
    SyncIterable(generator, args) {
      this[_generator] = generator;
      this[_args] = args;
      super.IterableBase();
    }
    [_jsIterator]() {
      return this[_generator](...this[_args]);
    }
    get iterator() {
      return new (SyncIterator$(E))(this[_jsIterator]());
    }
  }
  dart.setSignature(SyncIterable, {
    constructors: () => ({SyncIterable: [SyncIterable$(E), [dart.dynamic, dart.dynamic]]}),
    methods: () => ({[_jsIterator]: [dart.dynamic, []]})
  });
  dart.defineExtensionMembers(SyncIterable, ['iterator']);
  return SyncIterable;
});
let SyncIterable = SyncIterable$();
// Exports:
exports.Native = Native;
exports.JsPeerInterface = JsPeerInterface;
exports.regExpGetGlobalNative = regExpGetGlobalNative;
exports.JSSyntaxRegExp = JSSyntaxRegExp;
exports.firstMatchAfter = firstMatchAfter;
exports.StringMatch = StringMatch;
exports.allMatchesInStringUnchecked = allMatchesInStringUnchecked;
exports.stringContainsUnchecked = stringContainsUnchecked;
exports.stringReplaceJS = stringReplaceJS;
exports.ESCAPE_REGEXP = ESCAPE_REGEXP;
exports.stringReplaceAllUnchecked = stringReplaceAllUnchecked;
exports.InternalMap = InternalMap;
exports.Primitives = Primitives;
exports.checkNull = checkNull;
exports.checkInt = checkInt;
exports.checkBool = checkBool;
exports.checkString = checkString;
exports.getTraceFromException = getTraceFromException;
exports.objectHashCode = objectHashCode;
exports.JavaScriptIndexingBehavior = JavaScriptIndexingBehavior;
exports.CastErrorImplementation = CastErrorImplementation;
exports.random64 = random64;
exports.jsonEncodeNative = jsonEncodeNative;
exports.SyncIterator$ = SyncIterator$;
exports.SyncIterator = SyncIterator;
exports.SyncIterable$ = SyncIterable$;
exports.SyncIterable = SyncIterable;
