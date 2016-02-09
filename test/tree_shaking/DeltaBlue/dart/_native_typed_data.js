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
let typed_data = require("dart/typed_data");
let _js_helper = require("dart/_js_helper");
let collection = require("dart/collection");
let _internal = require("dart/_internal");
let dartx = dart.dartx;
// /* Incoming: NativeByteBuffer.asUint8List (MethodElementImpl @ dart:_native_typed_data), NativeByteBuffer.asInt8List (MethodElementImpl @ dart:_native_typed_data), NativeByteBuffer.asUint8ClampedList (MethodElementImpl @ dart:_native_typed_data), NativeByteBuffer.asUint16List (MethodElementImpl @ dart:_native_typed_data), NativeByteBuffer.asInt16List (MethodElementImpl @ dart:_native_typed_data), NativeByteBuffer.asUint32List (MethodElementImpl @ dart:_native_typed_data), NativeByteBuffer.asInt32List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeByteBuffer.asFloat32List (MethodElementImpl @ dart:_native_typed_data), NativeByteBuffer.asFloat64List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeByteBuffer.asByteData (MethodElementImpl @ dart:_native_typed_data), _checkViewArguments (FunctionElementImpl @ dart:_native_typed_data), NativeInt16List.view (ConstructorElementImpl @ dart:_native_typed_data), _Serializer.serialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Serializer.serializeByteBuffer (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeByteBuffer (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), result (LocalVariableElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
class NativeByteBuffer extends core.Object {}
NativeByteBuffer[dart.implements] = () => [typed_data.ByteBuffer];
NativeByteBuffer[dart.metadata] = () => [dart.const(new _js_helper.Native("ArrayBuffer"))];
const _storage = Symbol('_storage');
const _invalidIndex = Symbol('_invalidIndex');
const _checkIndex = Symbol('_checkIndex');
// /* Incoming: Float32x4List. (ConstructorElementImpl @ dart:typed_data), Float32x4List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat32x4List (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4List. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List._externalStorage (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List._invalidIndex (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4List.sublist (MethodElementImpl @ dart:_native_typed_data) */
class NativeFloat32x4List extends dart.mixin(core.Object, collection.ListMixin$(typed_data.Float32x4), _internal.FixedLengthListMixin$(typed_data.Float32x4)) {
  NativeFloat32x4List(length) {
    this[_storage] = NativeFloat32List.new(dart.notNull(length) * 4);
  }
  [_invalidIndex](index, length) {
    if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(length)) {
      if (length == this.length) {
        dart.throw(core.RangeError.index(index, this));
      }
      dart.throw(new core.RangeError.range(index, 0, dart.notNull(length) - 1));
    } else {
      dart.throw(new core.ArgumentError(`Invalid list index ${index}`));
    }
  }
  [_checkIndex](index, length) {
    if (index >>> 0 != index || dart.notNull(index) >= dart.notNull(length)) {
      this[_invalidIndex](index, length);
    }
  }
  get length() {
    return (dart.notNull(this[_storage].length) / 4)[dartx.truncate]();
  }
  get(index) {
    this[_checkIndex](index, this.length);
    let _x = this[_storage].get(dart.notNull(index) * 4 + 0);
    let _y = this[_storage].get(dart.notNull(index) * 4 + 1);
    let _z = this[_storage].get(dart.notNull(index) * 4 + 2);
    let _w = this[_storage].get(dart.notNull(index) * 4 + 3);
    return new NativeFloat32x4._truncated(_x, _y, _z, _w);
  }
  set(index, value) {
    this[_checkIndex](index, this.length);
    this[_storage].set(dart.notNull(index) * 4 + 0, value.x);
    this[_storage].set(dart.notNull(index) * 4 + 1, value.y);
    this[_storage].set(dart.notNull(index) * 4 + 2, value.z);
    this[_storage].set(dart.notNull(index) * 4 + 3, value.w);
    return value;
  }
}
NativeFloat32x4List[dart.implements] = () => [typed_data.Float32x4List];
dart.setSignature(NativeFloat32x4List, {
  constructors: () => ({NativeFloat32x4List: [NativeFloat32x4List, [core.int]]}),
  methods: () => ({
    [_invalidIndex]: [dart.void, [core.int, core.int]],
    [_checkIndex]: [dart.void, [core.int, core.int]],
    get: [typed_data.Float32x4, [core.int]],
    set: [dart.void, [core.int, typed_data.Float32x4]]
  })
});
dart.defineExtensionMembers(NativeFloat32x4List, ['get', 'set', 'length']);
// /* Incoming: Int32x4List. (ConstructorElementImpl @ dart:typed_data), Int32x4List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt32x4List (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4List. (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List._externalStorage (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List._invalidIndex (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4List.sublist (MethodElementImpl @ dart:_native_typed_data) */
class NativeInt32x4List extends dart.mixin(core.Object, collection.ListMixin$(typed_data.Int32x4), _internal.FixedLengthListMixin$(typed_data.Int32x4)) {
  NativeInt32x4List(length) {
    this[_storage] = NativeInt32List.new(dart.notNull(length) * 4);
  }
  [_invalidIndex](index, length) {
    if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(length)) {
      if (length == this.length) {
        dart.throw(core.RangeError.index(index, this));
      }
      dart.throw(new core.RangeError.range(index, 0, dart.notNull(length) - 1));
    } else {
      dart.throw(new core.ArgumentError(`Invalid list index ${index}`));
    }
  }
  [_checkIndex](index, length) {
    if (index >>> 0 != index || index >= length) {
      this[_invalidIndex](index, length);
    }
  }
  get length() {
    return (dart.notNull(this[_storage].length) / 4)[dartx.truncate]();
  }
  get(index) {
    this[_checkIndex](index, this.length);
    let _x = this[_storage].get(dart.notNull(index) * 4 + 0);
    let _y = this[_storage].get(dart.notNull(index) * 4 + 1);
    let _z = this[_storage].get(dart.notNull(index) * 4 + 2);
    let _w = this[_storage].get(dart.notNull(index) * 4 + 3);
    return new NativeInt32x4._truncated(_x, _y, _z, _w);
  }
  set(index, value) {
    this[_checkIndex](index, this.length);
    this[_storage].set(dart.notNull(index) * 4 + 0, value.x);
    this[_storage].set(dart.notNull(index) * 4 + 1, value.y);
    this[_storage].set(dart.notNull(index) * 4 + 2, value.z);
    this[_storage].set(dart.notNull(index) * 4 + 3, value.w);
    return value;
  }
}
NativeInt32x4List[dart.implements] = () => [typed_data.Int32x4List];
dart.setSignature(NativeInt32x4List, {
  constructors: () => ({NativeInt32x4List: [NativeInt32x4List, [core.int]]}),
  methods: () => ({
    [_invalidIndex]: [dart.void, [core.int, core.int]],
    [_checkIndex]: [dart.void, [core.int, core.int]],
    get: [typed_data.Int32x4, [core.int]],
    set: [dart.void, [core.int, typed_data.Int32x4]]
  })
});
dart.defineExtensionMembers(NativeInt32x4List, ['get', 'set', 'length']);
// /* Incoming: Float64x2List. (ConstructorElementImpl @ dart:typed_data), Float64x2List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat64x2List (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2List. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List._externalStorage (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List._invalidIndex (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2List.sublist (MethodElementImpl @ dart:_native_typed_data) */
class NativeFloat64x2List extends dart.mixin(core.Object, collection.ListMixin$(typed_data.Float64x2), _internal.FixedLengthListMixin$(typed_data.Float64x2)) {
  NativeFloat64x2List(length) {
    this[_storage] = NativeFloat64List.new(dart.notNull(length) * 2);
  }
  [_invalidIndex](index, length) {
    if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(length)) {
      if (length == this.length) {
        dart.throw(core.RangeError.index(index, this));
      }
      dart.throw(new core.RangeError.range(index, 0, dart.notNull(length) - 1));
    } else {
      dart.throw(new core.ArgumentError(`Invalid list index ${index}`));
    }
  }
  [_checkIndex](index, length) {
    if (index >>> 0 != index || dart.notNull(index) >= dart.notNull(length)) {
      this[_invalidIndex](index, length);
    }
  }
  get length() {
    return (dart.notNull(this[_storage].length) / 2)[dartx.truncate]();
  }
  get(index) {
    this[_checkIndex](index, this.length);
    let _x = this[_storage].get(dart.notNull(index) * 2 + 0);
    let _y = this[_storage].get(dart.notNull(index) * 2 + 1);
    return typed_data.Float64x2.new(_x, _y);
  }
  set(index, value) {
    this[_checkIndex](index, this.length);
    this[_storage].set(dart.notNull(index) * 2 + 0, value.x);
    this[_storage].set(dart.notNull(index) * 2 + 1, value.y);
    return value;
  }
}
NativeFloat64x2List[dart.implements] = () => [typed_data.Float64x2List];
dart.setSignature(NativeFloat64x2List, {
  constructors: () => ({NativeFloat64x2List: [NativeFloat64x2List, [core.int]]}),
  methods: () => ({
    [_invalidIndex]: [dart.void, [core.int, core.int]],
    [_checkIndex]: [dart.void, [core.int, core.int]],
    get: [typed_data.Float64x2, [core.int]],
    set: [dart.void, [core.int, typed_data.Float64x2]]
  })
});
dart.defineExtensionMembers(NativeFloat64x2List, ['get', 'set', 'length']);
// /* Incoming: NativeTypedData._invalidIndex (MethodElementImpl @ dart:_native_typed_data), NativeByteData (ClassElementImpl @ dart:_native_typed_data), NativeTypedArray (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data), _Serializer.serialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Serializer.serializeTypedData (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeTypedData (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), result (LocalVariableElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
class NativeTypedData extends core.Object {
  [_invalidIndex](index, length) {
    if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(length)) {
      if (dart.is(this, core.List)) {
        if (dart.equals(length, dart.dload(this, 'length'))) {
          dart.throw(core.RangeError.index(index, this));
        }
      }
      dart.throw(new core.RangeError.range(index, 0, dart.notNull(length) - 1));
    } else {
      dart.throw(new core.ArgumentError(`Invalid list index ${index}`));
    }
  }
  [_checkIndex](index, length) {
    if (index >>> 0 !== index || index >= dart.notNull(length)) {
      this[_invalidIndex](index, length);
    }
  }
}
NativeTypedData[dart.implements] = () => [typed_data.TypedData];
dart.setSignature(NativeTypedData, {
  methods: () => ({
    [_invalidIndex]: [dart.void, [core.int, core.int]],
    [_checkIndex]: [dart.void, [core.int, core.int]]
  })
});
NativeTypedData[dart.metadata] = () => [dart.const(new _js_helper.Native("ArrayBufferView"))];
function _checkLength(length) {
  if (!(typeof length == 'number')) dart.throw(new core.ArgumentError(`Invalid length ${length}`));
  return dart.as(length, core.int);
}
dart.fn(_checkLength, core.int, [dart.dynamic]);
// /* Incoming: NativeTypedArray._setRangeFast (MethodElementImpl @ dart:_native_typed_data), targetLength (LocalVariableElementImpl @ dart:_native_typed_data), sourceLength (LocalVariableElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data) */
class NativeTypedArray extends NativeTypedData {}
NativeTypedArray[dart.implements] = () => [_js_helper.JavaScriptIndexingBehavior];
// /* Incoming: NativeTypedArrayOfDouble.length (FieldElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble.[] (MethodElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble.[]= (MethodElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble.setRange (MethodElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data) */
class NativeTypedArrayOfDouble extends dart.mixin(NativeTypedArray, collection.ListMixin$(core.double), _internal.FixedLengthListMixin$(core.double)) {
  get length() {
    return this.length;
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  set(index, value) {
    this[_checkIndex](index, this.length);
    this[index] = value;
    return value;
  }
}
dart.setSignature(NativeTypedArrayOfDouble, {
  methods: () => ({
    get: [core.double, [core.int]],
    set: [dart.void, [core.int, core.num]]
  })
});
dart.defineExtensionMembers(NativeTypedArrayOfDouble, ['get', 'set', 'length']);
// /* Incoming: NativeTypedArrayOfInt.length (FieldElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt.[]= (MethodElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt.setRange (MethodElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data) */
class NativeTypedArrayOfInt extends dart.mixin(NativeTypedArray, collection.ListMixin$(core.int), _internal.FixedLengthListMixin$(core.int)) {
  get length() {
    return this.length;
  }
  set(index, value) {
    this[_checkIndex](index, this.length);
    this[index] = value;
    return value;
  }
}
NativeTypedArrayOfInt[dart.implements] = () => [core.List$(core.int)];
dart.setSignature(NativeTypedArrayOfInt, {
  methods: () => ({set: [dart.void, [core.int, core.int]]})
});
dart.defineExtensionMembers(NativeTypedArrayOfInt, ['set', 'length']);
// /* Incoming: Float32List. (ConstructorElementImpl @ dart:typed_data), Float32List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat32List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeByteBuffer.asFloat32x4List (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4List._storage (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4List. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List._externalStorage (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List.buffer (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4List.lengthInBytes (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4List.offsetInBytes (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4List.length (FieldElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4List.[]= (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeFloat32List. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32List.view (ConstructorElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeFloat32List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeFloat32List._create2 (MethodElementImpl @ dart:_native_typed_data), NativeFloat32List._create3 (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4._list (ConstFieldElementImpl @ dart:_native_typed_data), NativeFloat32x4._uint32view (ConstFieldElementImpl @ dart:_native_typed_data), NativeFloat32x4._truncate (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.fromInt32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4.signMask (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4.shuffle (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.shuffleMix (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), floatList (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4.fromFloat32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), view (LocalVariableElementImpl @ dart:_native_typed_data), floatList (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4.select (MethodElementImpl @ dart:_native_typed_data) */
class NativeFloat32List extends NativeTypedArrayOfDouble {
  static new(length) {
    return NativeFloat32List._create1(_checkLength(length));
  }
  static _create1(arg) {
    return dart.as(new Float32Array(arg), NativeFloat32List);
  }
}
NativeFloat32List[dart.implements] = () => [typed_data.Float32List];
dart.setSignature(NativeFloat32List, {
  constructors: () => ({new: [NativeFloat32List, [core.int]]}),
  statics: () => ({_create1: [NativeFloat32List, [dart.dynamic]]}),
  names: ['_create1']
});
NativeFloat32List[dart.metadata] = () => [dart.const(new _js_helper.Native("Float32Array"))];
// /* Incoming: Float64List. (ConstructorElementImpl @ dart:typed_data), Float64List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat64List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeByteBuffer.asFloat64x2List (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2List._storage (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2List. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List._externalStorage (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List.buffer (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2List.lengthInBytes (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2List.offsetInBytes (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2List.length (FieldElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat64x2List.[]= (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeFloat64List. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64List.view (ConstructorElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat64List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeFloat64List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeFloat64List._create2 (MethodElementImpl @ dart:_native_typed_data), NativeFloat64List._create3 (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2._list (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2._uint32View (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2.signMask (FieldElementImpl @ dart:_native_typed_data) */
class NativeFloat64List extends NativeTypedArrayOfDouble {
  static new(length) {
    return NativeFloat64List._create1(_checkLength(length));
  }
  static _create1(arg) {
    return dart.as(new Float64Array(arg), NativeFloat64List);
  }
}
NativeFloat64List[dart.implements] = () => [typed_data.Float64List];
dart.setSignature(NativeFloat64List, {
  constructors: () => ({new: [NativeFloat64List, [core.int]]}),
  statics: () => ({_create1: [NativeFloat64List, [dart.dynamic]]}),
  names: ['_create1']
});
NativeFloat64List[dart.metadata] = () => [dart.const(new _js_helper.Native("Float64Array"))];
// /* Incoming: Int16List. (ConstructorElementImpl @ dart:typed_data), Int16List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt16List (MethodElementImpl @ dart:_native_typed_data), NativeInt16List. (ConstructorElementImpl @ dart:_native_typed_data), NativeInt16List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt16List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeInt16List.[] (MethodElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt16List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeInt16List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeInt16List._create2 (MethodElementImpl @ dart:_native_typed_data), NativeInt16List._create3 (MethodElementImpl @ dart:_native_typed_data) */
class NativeInt16List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeInt16List._create1(_checkLength(length));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  static _create1(arg) {
    return dart.as(new Int16Array(arg), NativeInt16List);
  }
}
NativeInt16List[dart.implements] = () => [typed_data.Int16List];
dart.setSignature(NativeInt16List, {
  constructors: () => ({new: [NativeInt16List, [core.int]]}),
  methods: () => ({get: [core.int, [core.int]]}),
  statics: () => ({_create1: [NativeInt16List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeInt16List, ['get']);
NativeInt16List[dart.metadata] = () => [dart.const(new _js_helper.Native("Int16Array"))];
// /* Incoming: Int32List. (ConstructorElementImpl @ dart:typed_data), Int32List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt32List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeByteBuffer.asInt32x4List (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4List. (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32List. (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32List.[] (MethodElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeInt32List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeInt32List._create2 (MethodElementImpl @ dart:_native_typed_data), NativeInt32List._create3 (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4._list (ConstFieldElementImpl @ dart:_native_typed_data), NativeInt32x4._truncate (MethodElementImpl @ dart:_native_typed_data), view (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4.fromFloat32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4.shuffle (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4.shuffleMix (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data) */
class NativeInt32List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeInt32List._create1(_checkLength(length));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  static _create1(arg) {
    return dart.as(new Int32Array(arg), NativeInt32List);
  }
}
NativeInt32List[dart.implements] = () => [typed_data.Int32List];
dart.setSignature(NativeInt32List, {
  constructors: () => ({new: [NativeInt32List, [core.int]]}),
  methods: () => ({get: [core.int, [core.int]]}),
  statics: () => ({_create1: [NativeInt32List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeInt32List, ['get']);
NativeInt32List[dart.metadata] = () => [dart.const(new _js_helper.Native("Int32Array"))];
// /* Incoming: Int8List. (ConstructorElementImpl @ dart:typed_data), Int8List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt8List (MethodElementImpl @ dart:_native_typed_data), NativeInt8List. (ConstructorElementImpl @ dart:_native_typed_data), NativeInt8List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt8List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeInt8List.[] (MethodElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt8List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeInt8List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeInt8List._create2 (MethodElementImpl @ dart:_native_typed_data) */
class NativeInt8List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeInt8List._create1(_checkLength(length));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  static _create1(arg) {
    return dart.as(new Int8Array(arg), NativeInt8List);
  }
}
NativeInt8List[dart.implements] = () => [typed_data.Int8List];
dart.setSignature(NativeInt8List, {
  constructors: () => ({new: [NativeInt8List, [core.int]]}),
  methods: () => ({get: [core.int, [core.int]]}),
  statics: () => ({_create1: [NativeInt8List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeInt8List, ['get']);
NativeInt8List[dart.metadata] = () => [dart.const(new _js_helper.Native("Int8Array"))];
// /* Incoming: Uint16List. (ConstructorElementImpl @ dart:typed_data), Uint16List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint16List (MethodElementImpl @ dart:_native_typed_data), NativeUint16List. (ConstructorElementImpl @ dart:_native_typed_data), NativeUint16List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeUint16List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint16List.[] (MethodElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeUint16List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeUint16List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeUint16List._create2 (MethodElementImpl @ dart:_native_typed_data), NativeUint16List._create3 (MethodElementImpl @ dart:_native_typed_data) */
class NativeUint16List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint16List._create1(_checkLength(length));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  static _create1(arg) {
    return dart.as(new Uint16Array(arg), NativeUint16List);
  }
}
NativeUint16List[dart.implements] = () => [typed_data.Uint16List];
dart.setSignature(NativeUint16List, {
  constructors: () => ({new: [NativeUint16List, [core.int]]}),
  methods: () => ({get: [core.int, [core.int]]}),
  statics: () => ({_create1: [NativeUint16List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint16List, ['get']);
NativeUint16List[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint16Array"))];
// /* Incoming: Uint32List. (ConstructorElementImpl @ dart:typed_data), Uint32List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint32List (MethodElementImpl @ dart:_native_typed_data), NativeUint32List. (ConstructorElementImpl @ dart:_native_typed_data), NativeUint32List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeUint32List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint32List.[] (MethodElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeUint32List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeUint32List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeUint32List._create2 (MethodElementImpl @ dart:_native_typed_data), NativeUint32List._create3 (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2._uint32View (FieldElementImpl @ dart:_native_typed_data), view (LocalVariableElementImpl @ dart:_native_typed_data), mx (LocalVariableElementImpl @ dart:_native_typed_data), my (LocalVariableElementImpl @ dart:_native_typed_data) */
class NativeUint32List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint32List._create1(_checkLength(length));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  static _create1(arg) {
    return dart.as(new Uint32Array(arg), NativeUint32List);
  }
}
NativeUint32List[dart.implements] = () => [typed_data.Uint32List];
dart.setSignature(NativeUint32List, {
  constructors: () => ({new: [NativeUint32List, [core.int]]}),
  methods: () => ({get: [core.int, [core.int]]}),
  statics: () => ({_create1: [NativeUint32List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint32List, ['get']);
NativeUint32List[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint32Array"))];
// /* Incoming: Uint8ClampedList. (ConstructorElementImpl @ dart:typed_data), Uint8ClampedList.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint8ClampedList (MethodElementImpl @ dart:_native_typed_data), NativeUint8ClampedList. (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8ClampedList.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8ClampedList.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8ClampedList.length (FieldElementImpl @ dart:_native_typed_data), NativeUint8ClampedList.[] (MethodElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeUint8ClampedList.sublist (MethodElementImpl @ dart:_native_typed_data), NativeUint8ClampedList._create1 (MethodElementImpl @ dart:_native_typed_data), NativeUint8ClampedList._create2 (MethodElementImpl @ dart:_native_typed_data), NativeUint8ClampedList._create3 (MethodElementImpl @ dart:_native_typed_data) */
class NativeUint8ClampedList extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint8ClampedList._create1(_checkLength(length));
  }
  get length() {
    return this.length;
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  static _create1(arg) {
    return dart.as(new Uint8ClampedArray(arg), NativeUint8ClampedList);
  }
}
NativeUint8ClampedList[dart.implements] = () => [typed_data.Uint8ClampedList];
dart.setSignature(NativeUint8ClampedList, {
  constructors: () => ({new: [NativeUint8ClampedList, [core.int]]}),
  methods: () => ({get: [core.int, [core.int]]}),
  statics: () => ({_create1: [NativeUint8ClampedList, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint8ClampedList, ['get', 'length']);
NativeUint8ClampedList[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint8ClampedArray,CanvasPixelArray"))];
// /* Incoming: Uint8List. (ConstructorElementImpl @ dart:typed_data), Uint8List.fromList (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint8List (MethodElementImpl @ dart:_native_typed_data), NativeUint8List. (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8List.length (FieldElementImpl @ dart:_native_typed_data), NativeUint8List.[] (MethodElementImpl @ dart:_native_typed_data), source (LocalVariableElementImpl @ dart:_native_typed_data), NativeUint8List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeUint8List._create1 (MethodElementImpl @ dart:_native_typed_data), NativeUint8List._create2 (MethodElementImpl @ dart:_native_typed_data), NativeUint8List._create3 (MethodElementImpl @ dart:_native_typed_data) */
class NativeUint8List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint8List._create1(_checkLength(length));
  }
  get length() {
    return this.length;
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  static _create1(arg) {
    return dart.as(new Uint8Array(arg), NativeUint8List);
  }
}
NativeUint8List[dart.implements] = () => [typed_data.Uint8List];
dart.setSignature(NativeUint8List, {
  constructors: () => ({new: [NativeUint8List, [core.int]]}),
  methods: () => ({get: [core.int, [core.int]]}),
  statics: () => ({_create1: [NativeUint8List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint8List, ['get', 'length']);
NativeUint8List[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint8Array,!nonleaf"))];
// /* Incoming: Float32x4. (ConstructorElementImpl @ dart:typed_data), Float32x4.splat (ConstructorElementImpl @ dart:typed_data), Float32x4.zero (ConstructorElementImpl @ dart:typed_data), Float32x4.fromInt32x4Bits (ConstructorElementImpl @ dart:typed_data), Float32x4.fromFloat64x2 (ConstructorElementImpl @ dart:typed_data), NativeFloat32x4List.[] (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4.splat (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4.zero (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4.fromInt32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4.fromFloat64x2 (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4._doubles (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4._truncated (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4.+ (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.unary- (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.- (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.* (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4./ (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.scale (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.abs (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.clamp (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.shuffle (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.shuffleMix (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withX (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withY (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withZ (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withW (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.min (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.max (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.sqrt (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.reciprocal (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.reciprocalSqrt (MethodElementImpl @ dart:_native_typed_data), floatList (LocalVariableElementImpl @ dart:_native_typed_data), floatList (LocalVariableElementImpl @ dart:_native_typed_data), intView (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4.select (MethodElementImpl @ dart:_native_typed_data) */
class NativeFloat32x4 extends core.Object {
  static _truncate(x) {
    NativeFloat32x4._list.set(0, dart.as(x, core.num));
    return NativeFloat32x4._list.get(0);
  }
  NativeFloat32x4(x, y, z, w) {
    this.x = dart.as(NativeFloat32x4._truncate(x), core.double);
    this.y = dart.as(NativeFloat32x4._truncate(y), core.double);
    this.z = dart.as(NativeFloat32x4._truncate(z), core.double);
    this.w = dart.as(NativeFloat32x4._truncate(w), core.double);
    if (!(typeof x == 'number')) dart.throw(new core.ArgumentError(x));
    if (!(typeof y == 'number')) dart.throw(new core.ArgumentError(y));
    if (!(typeof z == 'number')) dart.throw(new core.ArgumentError(z));
    if (!(typeof w == 'number')) dart.throw(new core.ArgumentError(w));
  }
  _truncated(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  toString() {
    return `[${this.x}, ${this.y}, ${this.z}, ${this.w}]`;
  }
}
NativeFloat32x4[dart.implements] = () => [typed_data.Float32x4];
dart.defineNamedConstructor(NativeFloat32x4, '_truncated');
dart.setSignature(NativeFloat32x4, {
  constructors: () => ({
    NativeFloat32x4: [NativeFloat32x4, [core.double, core.double, core.double, core.double]],
    _truncated: [NativeFloat32x4, [core.double, core.double, core.double, core.double]]
  }),
  statics: () => ({_truncate: [dart.dynamic, [dart.dynamic]]}),
  names: ['_truncate']
});
dart.defineLazyProperties(NativeFloat32x4, {
  get _list() {
    return NativeFloat32List.new(4);
  }
});
// /* Incoming: Int32x4. (ConstructorElementImpl @ dart:typed_data), Int32x4.bool (ConstructorElementImpl @ dart:typed_data), Int32x4.fromFloat32x4Bits (ConstructorElementImpl @ dart:typed_data), NativeInt32x4List.[] (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.lessThan (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.lessThanOrEqual (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.greaterThan (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.greaterThanOrEqual (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.equal (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.notEqual (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4. (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4.bool (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4.fromFloat32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4._truncated (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4.| (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.& (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.^ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.+ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.- (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.unary- (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.shuffle (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.shuffleMix (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withX (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withY (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withZ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withW (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagX (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagY (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagZ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagW (MethodElementImpl @ dart:_native_typed_data) */
class NativeInt32x4 extends core.Object {
  static _truncate(x) {
    NativeInt32x4._list.set(0, dart.as(x, core.int));
    return NativeInt32x4._list.get(0);
  }
  NativeInt32x4(x, y, z, w) {
    this.x = dart.as(NativeInt32x4._truncate(x), core.int);
    this.y = dart.as(NativeInt32x4._truncate(y), core.int);
    this.z = dart.as(NativeInt32x4._truncate(z), core.int);
    this.w = dart.as(NativeInt32x4._truncate(w), core.int);
    if (x != this.x && !(typeof x == 'number')) dart.throw(new core.ArgumentError(x));
    if (y != this.y && !(typeof y == 'number')) dart.throw(new core.ArgumentError(y));
    if (z != this.z && !(typeof z == 'number')) dart.throw(new core.ArgumentError(z));
    if (w != this.w && !(typeof w == 'number')) dart.throw(new core.ArgumentError(w));
  }
  _truncated(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  toString() {
    return `[${this.x}, ${this.y}, ${this.z}, ${this.w}]`;
  }
}
NativeInt32x4[dart.implements] = () => [typed_data.Int32x4];
dart.defineNamedConstructor(NativeInt32x4, '_truncated');
dart.setSignature(NativeInt32x4, {
  constructors: () => ({
    NativeInt32x4: [NativeInt32x4, [core.int, core.int, core.int, core.int]],
    _truncated: [NativeInt32x4, [core.int, core.int, core.int, core.int]]
  }),
  statics: () => ({_truncate: [dart.dynamic, [dart.dynamic]]}),
  names: ['_truncate']
});
dart.defineLazyProperties(NativeInt32x4, {
  get _list() {
    return NativeInt32List.new(4);
  }
});
// /* Incoming: Float64x2. (ConstructorElementImpl @ dart:typed_data), Float64x2.splat (ConstructorElementImpl @ dart:typed_data), Float64x2.zero (ConstructorElementImpl @ dart:typed_data), Float64x2.fromFloat32x4 (ConstructorElementImpl @ dart:typed_data), NativeFloat64x2. (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2.splat (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2.zero (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2.fromFloat32x4 (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2._doubles (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2.+ (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.unary- (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.- (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.* (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2./ (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.scale (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.abs (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.clamp (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.withX (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.withY (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.min (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.max (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.sqrt (MethodElementImpl @ dart:_native_typed_data) */
class NativeFloat64x2 extends core.Object {
  NativeFloat64x2(x, y) {
    this.x = x;
    this.y = y;
    if (!(typeof this.x == 'number')) dart.throw(new core.ArgumentError(this.x));
    if (!(typeof this.y == 'number')) dart.throw(new core.ArgumentError(this.y));
  }
  toString() {
    return `[${this.x}, ${this.y}]`;
  }
}
NativeFloat64x2[dart.implements] = () => [typed_data.Float64x2];
dart.setSignature(NativeFloat64x2, {
  constructors: () => ({NativeFloat64x2: [NativeFloat64x2, [core.double, core.double]]})
});
// Exports:
exports.NativeByteBuffer = NativeByteBuffer;
exports.NativeFloat32x4List = NativeFloat32x4List;
exports.NativeInt32x4List = NativeInt32x4List;
exports.NativeFloat64x2List = NativeFloat64x2List;
exports.NativeTypedData = NativeTypedData;
exports.NativeTypedArray = NativeTypedArray;
exports.NativeTypedArrayOfDouble = NativeTypedArrayOfDouble;
exports.NativeTypedArrayOfInt = NativeTypedArrayOfInt;
exports.NativeFloat32List = NativeFloat32List;
exports.NativeFloat64List = NativeFloat64List;
exports.NativeInt16List = NativeInt16List;
exports.NativeInt32List = NativeInt32List;
exports.NativeInt8List = NativeInt8List;
exports.NativeUint16List = NativeUint16List;
exports.NativeUint32List = NativeUint32List;
exports.NativeUint8ClampedList = NativeUint8ClampedList;
exports.NativeUint8List = NativeUint8List;
exports.NativeFloat32x4 = NativeFloat32x4;
exports.NativeInt32x4 = NativeInt32x4;
exports.NativeFloat64x2 = NativeFloat64x2;
