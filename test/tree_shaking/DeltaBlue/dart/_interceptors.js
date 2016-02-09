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
let _js_helper = require("dart/_js_helper");
let _internal = require("dart/_internal");
let collection = require("dart/collection");
let dartx = dart.dartx;
// /* Incoming: JSArray. (ConstructorElementImpl @ dart:_interceptors/js_array.dart), JSArray.typed (ConstructorElementImpl @ dart:_interceptors/js_array.dart), JSArray.markFixed (ConstructorElementImpl @ dart:_interceptors/js_array.dart), JSArray.markGrowable (ConstructorElementImpl @ dart:_interceptors/js_array.dart), JSArray.checkGrowable (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.add (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.removeAt (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.insert (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.insertAll (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.setAll (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.removeLast (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.remove (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.removeWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.retainWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.where (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.expand (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.addAll (MethodElementImpl @ dart:_interceptors/js_array.dart), length (LocalVariableElementImpl @ dart:_interceptors/js_array.dart), JSArray.forEach (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.map (MethodElementImpl @ dart:_interceptors/js_array.dart), list (LocalVariableElementImpl @ dart:_interceptors/js_array.dart), JSArray.join (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.take (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.takeWhile (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.skip (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.skipWhile (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.reduce (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.fold (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.firstWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.lastWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.singleWhere (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.elementAt (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.sublist (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.getRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.first (FieldElementImpl @ dart:_interceptors/js_array.dart), JSArray.last (FieldElementImpl @ dart:_interceptors/js_array.dart), JSArray.single (FieldElementImpl @ dart:_interceptors/js_array.dart), receiverLength (LocalVariableElementImpl @ dart:_interceptors/js_array.dart), JSArray.removeRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.setRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.fillRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.replaceRange (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.any (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.every (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.reversed (FieldElementImpl @ dart:_interceptors/js_array.dart), JSArray.sort (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.shuffle (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.indexOf (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.lastIndexOf (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.contains (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.toString (MethodElementImpl @ dart:_interceptors/js_array.dart), list (LocalVariableElementImpl @ dart:_interceptors/js_array.dart), JSArray.toList (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.toSet (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.iterator (FieldElementImpl @ dart:_interceptors/js_array.dart), JSArray.hashCode (FieldElementImpl @ dart:_interceptors/js_array.dart), JSArray.length (FieldElementImpl @ dart:_interceptors/js_array.dart), JSArray.[] (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.[]= (MethodElementImpl @ dart:_interceptors/js_array.dart), JSArray.asMap (MethodElementImpl @ dart:_interceptors/js_array.dart), JSMutableArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSFixedArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSExtendableArray (ClassElementImpl @ dart:_interceptors/js_array.dart), _Serializer.serializeJSIndexable (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Serializer.serializeArray (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Serializer.serializeArrayInPlace (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeArrayInPlace (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeFixed (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeExtendable (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeConst (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), list (FunctionElementImpl @ dart:_runtime/classes.dart), isJsArray (FunctionElementImpl @ dart:_js_helper/js_rti.dart), makeListFixedLength (FunctionElementImpl @ dart:_internal/list.dart), List. (ConstructorElementImpl @ dart:core/list.dart), String.fromCharCodes (ConstructorElementImpl @ dart:core/string.dart) */
const JSArray$ = dart.generic(function(E) {
  dart.defineExtensionNames([
    'checkGrowable',
    'add',
    'removeLast',
    'remove',
    'clear',
    'sublist',
    'setRange',
    'indexOf',
    'contains',
    'isEmpty',
    'isNotEmpty',
    'toString',
    'iterator',
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
    [dartx.checkGrowable](reason) {
      if (this.fixed$length) {
        dart.throw(new core.UnsupportedError(dart.as(reason, core.String)));
      }
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
    [dartx.setRange](start, end, iterable, skipCount) {
      dart.as(iterable, core.Iterable$(E));
      if (skipCount === void 0) skipCount = 0;
      _internal.IterableMixinWorkaround.setRangeList(this, start, end, iterable, skipCount);
    }
    [dartx.indexOf](element, start) {
      if (start === void 0) start = 0;
      return _internal.IterableMixinWorkaround.indexOfList(this, element, start);
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
    get [dartx.iterator]() {
      return new (_internal.ListIterator$(E))(this);
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
      [dartx.checkGrowable]: [dart.dynamic, [dart.dynamic]],
      [dartx.add]: [dart.void, [E]],
      [dartx.removeLast]: [E, []],
      [dartx.remove]: [core.bool, [core.Object]],
      [dartx.clear]: [dart.void, []],
      [dartx.sublist]: [core.List$(E), [core.int], [core.int]],
      [dartx.setRange]: [dart.void, [core.int, core.int, core.Iterable$(E)], [core.int]],
      [dartx.indexOf]: [core.int, [core.Object], [core.int]],
      [dartx.contains]: [core.bool, [core.Object]],
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
// /* Incoming: JSFixedArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSExtendableArray (ClassElementImpl @ dart:_interceptors/js_array.dart), _Serializer.serializeJSIndexable (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
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
// /* Incoming: _Serializer.serializeJSIndexable (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
const JSFixedArray$ = dart.generic(function(E) {
  class JSFixedArray extends JSMutableArray$(E) {}
  return JSFixedArray;
});
let JSFixedArray = JSFixedArray$();
// /* Incoming: _Serializer.serializeJSIndexable (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
const JSExtendableArray$ = dart.generic(function(E) {
  class JSExtendableArray extends JSMutableArray$(E) {}
  return JSExtendableArray;
});
let JSExtendableArray = JSExtendableArray$();
// /* Incoming: Interceptor. (ConstructorElementImpl @ dart:_interceptors), JSBool (ClassElementImpl @ dart:_interceptors), JavaScriptObject (ClassElementImpl @ dart:_interceptors), PlainJavaScriptObject (ClassElementImpl @ dart:_interceptors), UnknownJavaScriptObject (ClassElementImpl @ dart:_interceptors), JSNumber (ClassElementImpl @ dart:_interceptors/js_number.dart), JSString (ClassElementImpl @ dart:_interceptors/js_string.dart), _Serializer.serialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
class Interceptor extends core.Object {
  Interceptor() {
  }
}
dart.setSignature(Interceptor, {
  constructors: () => ({Interceptor: [Interceptor, []]})
});
// /* Incoming: JSNumber. (ConstructorElementImpl @ dart:_interceptors/js_number.dart), JSNumber.compareTo (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.isNegative (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.isNaN (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.isInfinite (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.isFinite (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.remainder (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.abs (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.sign (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toInt (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.ceilToDouble (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.floorToDouble (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.roundToDouble (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.truncateToDouble (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.clamp (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toDouble (MethodElementImpl @ dart:_interceptors/js_number.dart), result (LocalVariableElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toStringAsFixed (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toStringAsExponential (MethodElementImpl @ dart:_interceptors/js_number.dart), result (LocalVariableElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toStringAsPrecision (MethodElementImpl @ dart:_interceptors/js_number.dart), result (LocalVariableElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toString (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.hashCode (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.unary- (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.+ (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.- (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber./ (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.* (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.% (MethodElementImpl @ dart:_interceptors/js_number.dart), result (LocalVariableElementImpl @ dart:_interceptors/js_number.dart), JSNumber.~/ (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber._tdivSlow (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber._shlPositive (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber._shrOtherPositive (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber._shrBothPositive (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.& (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.| (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.^ (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.< (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.> (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.<= (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.>= (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.isEven (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.isOdd (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toUnsigned (MethodElementImpl @ dart:_interceptors/js_number.dart), JSNumber.toSigned (MethodElementImpl @ dart:_interceptors/js_number.dart), nonneg (LocalVariableElementImpl @ dart:_interceptors/js_number.dart), JSNumber.bitLength (FieldElementImpl @ dart:_interceptors/js_number.dart), JSNumber.~ (MethodElementImpl @ dart:_interceptors/js_number.dart) */
dart.defineExtensionNames([
  'abs',
  'toInt',
  'truncate',
  'floor',
  'ceilToDouble',
  'floorToDouble',
  'truncateToDouble',
  'toRadixString',
  'toString'
]);
class JSNumber extends Interceptor {
  JSNumber() {
    super.Interceptor();
  }
  [dartx.abs]() {
    return Math.abs(this);
  }
  [dartx.toInt]() {
    if (this >= dart.notNull(JSNumber._MIN_INT32) && this <= dart.notNull(JSNumber._MAX_INT32)) {
      return this | 0;
    }
    if (isFinite(this)) {
      return this[dartx.truncateToDouble]() + 0;
    }
    dart.throw(new core.UnsupportedError('' + this));
  }
  [dartx.truncate]() {
    return this[dartx.toInt]();
  }
  [dartx.floor]() {
    return this[dartx.floorToDouble]()[dartx.toInt]();
  }
  [dartx.ceilToDouble]() {
    return Math.ceil(this);
  }
  [dartx.floorToDouble]() {
    return Math.floor(this);
  }
  [dartx.truncateToDouble]() {
    return this < 0 ? this[dartx.ceilToDouble]() : this[dartx.floorToDouble]();
  }
  [dartx.toRadixString](radix) {
    _js_helper.checkInt(radix);
    if (dart.notNull(radix) < 2 || dart.notNull(radix) > 36) dart.throw(new core.RangeError(radix));
    let result = this.toString(radix);
    let rightParenCode = 41;
    if (result[dartx.codeUnitAt](dart.notNull(result[dartx.length]) - 1) != rightParenCode) {
      return result;
    }
    return JSNumber._handleIEtoString(result);
  }
  static _handleIEtoString(result) {
    let match = /^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(result);
    if (match == null) {
      dart.throw(new core.UnsupportedError(`Unexpected toString result: ${result}`));
    }
    result = dart.dindex(match, 1);
    let exponent = +dart.dindex(match, 3);
    if (dart.dindex(match, 2) != null) {
      result = result + dart.dindex(match, 2);
      exponent = exponent - dart.dindex(match, 2).length;
    }
    return dart.notNull(result) + "0"[dartx['*']](exponent);
  }
  toString() {
    if (this == 0 && 1 / this < 0) {
      return '-0.0';
    } else {
      return "" + this;
    }
  }
}
JSNumber[dart.implements] = () => [core.int, core.double];
dart.setSignature(JSNumber, {
  constructors: () => ({JSNumber: [JSNumber, []]}),
  methods: () => ({
    [dartx.abs]: [JSNumber, []],
    [dartx.toInt]: [core.int, []],
    [dartx.truncate]: [core.int, []],
    [dartx.floor]: [core.int, []],
    [dartx.ceilToDouble]: [core.double, []],
    [dartx.floorToDouble]: [core.double, []],
    [dartx.truncateToDouble]: [core.double, []],
    [dartx.toRadixString]: [core.String, [core.int]]
  }),
  statics: () => ({_handleIEtoString: [core.String, [core.String]]}),
  names: ['_handleIEtoString']
});
JSNumber[dart.metadata] = () => [dart.const(new _js_helper.JsPeerInterface({name: 'Number'}))];
JSNumber._MIN_INT32 = -2147483648;
JSNumber._MAX_INT32 = 2147483647;
dart.registerExtension(dart.global.Number, JSNumber);
// /* Incoming: JSString. (ConstructorElementImpl @ dart:_interceptors/js_string.dart), JSString.codeUnitAt (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.allMatches (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.matchAsPrefix (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.+ (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.replaceAll (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.replaceAllMapped (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.splitMapJoin (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.replaceFirst (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.split (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString._defaultSplit (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.startsWith (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.substring (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.toLowerCase (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.toUpperCase (MethodElementImpl @ dart:_interceptors/js_string.dart), result (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), JSString.trimLeft (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.trimRight (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.* (MethodElementImpl @ dart:_interceptors/js_string.dart), s (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), delta (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), JSString.padLeft (MethodElementImpl @ dart:_interceptors/js_string.dart), delta (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), JSString.padRight (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.codeUnits (FieldElementImpl @ dart:_interceptors/js_string.dart), JSString.runes (FieldElementImpl @ dart:_interceptors/js_string.dart), JSString.indexOf (MethodElementImpl @ dart:_interceptors/js_string.dart), match (LocalVariableElementImpl @ dart:_interceptors/js_string.dart), JSString.lastIndexOf (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.contains (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.compareTo (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.toString (MethodElementImpl @ dart:_interceptors/js_string.dart), JSString.hashCode (FieldElementImpl @ dart:_interceptors/js_string.dart), JSString.length (FieldElementImpl @ dart:_interceptors/js_string.dart), JSString.[] (MethodElementImpl @ dart:_interceptors/js_string.dart) */
dart.defineExtensionNames([
  'codeUnitAt',
  'allMatches',
  'endsWith',
  'replaceAll',
  'startsWith',
  'substring',
  'indexOf',
  'contains',
  'isEmpty',
  'isNotEmpty',
  'toString',
  'length',
  'get'
]);
class JSString extends Interceptor {
  JSString() {
    super.Interceptor();
  }
  [dartx.codeUnitAt](index) {
    if (!(typeof index == 'number')) dart.throw(new core.ArgumentError(index));
    if (dart.notNull(index) < 0) dart.throw(new core.RangeError.value(index));
    if (dart.notNull(index) >= dart.notNull(this[dartx.length])) dart.throw(new core.RangeError.value(index));
    return this.charCodeAt(index);
  }
  [dartx.allMatches](string, start) {
    if (start === void 0) start = 0;
    _js_helper.checkString(string);
    _js_helper.checkInt(start);
    if (0 > dart.notNull(start) || dart.notNull(start) > dart.notNull(string[dartx.length])) {
      dart.throw(new core.RangeError.range(start, 0, string[dartx.length]));
    }
    return _js_helper.allMatchesInStringUnchecked(this, string, start);
  }
  [dartx.endsWith](other) {
    _js_helper.checkString(other);
    let otherLength = other[dartx.length];
    if (dart.notNull(otherLength) > dart.notNull(this[dartx.length])) return false;
    return other == this[dartx.substring](dart.notNull(this[dartx.length]) - dart.notNull(otherLength));
  }
  [dartx.replaceAll](from, to) {
    _js_helper.checkString(to);
    return dart.as(_js_helper.stringReplaceAllUnchecked(this, from, to), core.String);
  }
  [dartx.startsWith](pattern, index) {
    if (index === void 0) index = 0;
    _js_helper.checkInt(index);
    if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this[dartx.length])) {
      dart.throw(new core.RangeError.range(index, 0, this[dartx.length]));
    }
    if (typeof pattern == 'string') {
      let other = pattern;
      let otherLength = other[dartx.length];
      let endIndex = dart.notNull(index) + dart.notNull(otherLength);
      if (endIndex > dart.notNull(this[dartx.length])) return false;
      return other == this.substring(index, endIndex);
    }
    return pattern[dartx.matchAsPrefix](this, index) != null;
  }
  [dartx.substring](startIndex, endIndex) {
    if (endIndex === void 0) endIndex = null;
    _js_helper.checkInt(startIndex);
    if (endIndex == null) endIndex = this[dartx.length];
    _js_helper.checkInt(endIndex);
    if (dart.notNull(startIndex) < 0) dart.throw(new core.RangeError.value(startIndex));
    if (dart.notNull(startIndex) > dart.notNull(endIndex)) dart.throw(new core.RangeError.value(startIndex));
    if (dart.notNull(endIndex) > dart.notNull(this[dartx.length])) dart.throw(new core.RangeError.value(endIndex));
    return this.substring(startIndex, endIndex);
  }
  [dartx.indexOf](pattern, start) {
    if (start === void 0) start = 0;
    _js_helper.checkNull(pattern);
    if (!(typeof start == 'number')) dart.throw(new core.ArgumentError(start));
    if (dart.notNull(start) < 0 || dart.notNull(start) > dart.notNull(this[dartx.length])) {
      dart.throw(new core.RangeError.range(start, 0, this[dartx.length]));
    }
    if (typeof pattern == 'string') {
      return this.indexOf(pattern, start);
    }
    if (dart.is(pattern, _js_helper.JSSyntaxRegExp)) {
      let re = pattern;
      let match = _js_helper.firstMatchAfter(re, this, start);
      return match == null ? -1 : match.start;
    }
    for (let i = start; dart.notNull(i) <= dart.notNull(this[dartx.length]); i = dart.notNull(i) + 1) {
      if (pattern[dartx.matchAsPrefix](this, i) != null) return i;
    }
    return -1;
  }
  [dartx.contains](other, startIndex) {
    if (startIndex === void 0) startIndex = 0;
    _js_helper.checkNull(other);
    if (dart.notNull(startIndex) < 0 || dart.notNull(startIndex) > dart.notNull(this[dartx.length])) {
      dart.throw(new core.RangeError.range(startIndex, 0, this[dartx.length]));
    }
    return dart.as(_js_helper.stringContainsUnchecked(this, other, startIndex), core.bool);
  }
  get [dartx.isEmpty]() {
    return this[dartx.length] == 0;
  }
  get [dartx.isNotEmpty]() {
    return !dart.notNull(this[dartx.isEmpty]);
  }
  toString() {
    return this;
  }
  get [dartx.length]() {
    return this.length;
  }
  [dartx.get](index) {
    if (!(typeof index == 'number')) dart.throw(new core.ArgumentError(index));
    if (dart.notNull(index) >= dart.notNull(this[dartx.length]) || dart.notNull(index) < 0) dart.throw(new core.RangeError.value(index));
    return this[index];
  }
}
JSString[dart.implements] = () => [core.String, JSIndexable];
dart.setSignature(JSString, {
  constructors: () => ({JSString: [JSString, []]}),
  methods: () => ({
    [dartx.codeUnitAt]: [core.int, [core.int]],
    [dartx.allMatches]: [core.Iterable$(core.Match), [core.String], [core.int]],
    [dartx.endsWith]: [core.bool, [core.String]],
    [dartx.replaceAll]: [core.String, [core.Pattern, core.String]],
    [dartx.startsWith]: [core.bool, [core.Pattern], [core.int]],
    [dartx.substring]: [core.String, [core.int], [core.int]],
    [dartx.indexOf]: [core.int, [core.Pattern], [core.int]],
    [dartx.contains]: [core.bool, [core.Pattern], [core.int]],
    [dartx.get]: [core.String, [core.int]]
  })
});
JSString[dart.metadata] = () => [dart.const(new _js_helper.JsPeerInterface({name: 'String'}))];
dart.registerExtension(dart.global.String, JSString);
// /* Incoming: JSBool. (ConstructorElementImpl @ dart:_interceptors), JSBool.toString (MethodElementImpl @ dart:_interceptors), JSBool.hashCode (FieldElementImpl @ dart:_interceptors) */
dart.defineExtensionNames([
  'toString'
]);
class JSBool extends Interceptor {
  JSBool() {
    super.Interceptor();
  }
  toString() {
    return String(this);
  }
}
JSBool[dart.implements] = () => [core.bool];
dart.setSignature(JSBool, {
  constructors: () => ({JSBool: [JSBool, []]})
});
JSBool[dart.metadata] = () => [dart.const(new _js_helper.JsPeerInterface({name: 'Boolean'}))];
dart.registerExtension(dart.global.Boolean, JSBool);
// /* Incoming: JSMutableIndexable (ClassElementImpl @ dart:_interceptors), JSArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSMutableArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSFixedArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSExtendableArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSString (ClassElementImpl @ dart:_interceptors/js_string.dart), _ensureNativeList (FunctionElementImpl @ dart:_native_typed_data), NativeTypedArray (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data), _Serializer.serialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Serializer.serializeJSIndexable (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), serialized (LocalVariableElementImpl @ dart:_isolate_helper/isolate_serialization.dart), JavaScriptIndexingBehavior (ClassElementImpl @ dart:_js_helper) */
class JSIndexable extends core.Object {}
// /* Incoming: JSMutableArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSFixedArray (ClassElementImpl @ dart:_interceptors/js_array.dart), JSExtendableArray (ClassElementImpl @ dart:_interceptors/js_array.dart), NativeTypedArray (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data), JavaScriptIndexingBehavior (ClassElementImpl @ dart:_js_helper) */
class JSMutableIndexable extends JSIndexable {}
// /* Incoming: JavaScriptObject (ClassElementImpl @ dart:_interceptors), JavaScriptObject.runtimeType (FieldElementImpl @ dart:_interceptors), PlainJavaScriptObject (ClassElementImpl @ dart:_interceptors), UnknownJavaScriptObject (ClassElementImpl @ dart:_interceptors), _Serializer.serialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Serializer.serializeJSObject (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), keys (LocalVariableElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
class JSObject extends core.Object {}
// /* Incoming: JavaScriptObject. (ConstructorElementImpl @ dart:_interceptors), PlainJavaScriptObject (ClassElementImpl @ dart:_interceptors), UnknownJavaScriptObject (ClassElementImpl @ dart:_interceptors) */
class JavaScriptObject extends Interceptor {
  JavaScriptObject() {
    super.Interceptor();
  }
}
JavaScriptObject[dart.implements] = () => [JSObject];
dart.setSignature(JavaScriptObject, {
  constructors: () => ({JavaScriptObject: [JavaScriptObject, []]})
});
// /* Incoming: UnknownJavaScriptObject. (ConstructorElementImpl @ dart:_interceptors), UnknownJavaScriptObject.toString (MethodElementImpl @ dart:_interceptors) */
class UnknownJavaScriptObject extends JavaScriptObject {
  UnknownJavaScriptObject() {
    super.JavaScriptObject();
  }
  toString() {
    return String(this);
  }
}
dart.setSignature(UnknownJavaScriptObject, {
  constructors: () => ({UnknownJavaScriptObject: [UnknownJavaScriptObject, []]})
});
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
exports.JSNumber = JSNumber;
exports.JSString = JSString;
exports.JSBool = JSBool;
exports.JSIndexable = JSIndexable;
exports.JSMutableIndexable = JSMutableIndexable;
exports.JSObject = JSObject;
exports.JavaScriptObject = JavaScriptObject;
exports.UnknownJavaScriptObject = UnknownJavaScriptObject;
