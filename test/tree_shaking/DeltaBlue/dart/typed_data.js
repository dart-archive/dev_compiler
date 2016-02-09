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
let _native_typed_data = require("dart/_native_typed_data");
let dartx = dart.dartx;
// /* Incoming: TypedData.buffer (FieldElementImpl @ dart:typed_data), Endianness.HOST_ENDIAN (ConstFieldElementImpl @ dart:typed_data), ByteData.view (ConstructorElementImpl @ dart:typed_data), Int8List.view (ConstructorElementImpl @ dart:typed_data), Uint8List.view (ConstructorElementImpl @ dart:typed_data), Uint8ClampedList.view (ConstructorElementImpl @ dart:typed_data), Int16List.view (ConstructorElementImpl @ dart:typed_data), Uint16List.view (ConstructorElementImpl @ dart:typed_data), Int32List.view (ConstructorElementImpl @ dart:typed_data), Uint32List.view (ConstructorElementImpl @ dart:typed_data), Int64List.view (ConstructorElementImpl @ dart:typed_data), Uint64List.view (ConstructorElementImpl @ dart:typed_data), Float32List.view (ConstructorElementImpl @ dart:typed_data), Float64List.view (ConstructorElementImpl @ dart:typed_data), Float32x4List.view (ConstructorElementImpl @ dart:typed_data), Int32x4List.view (ConstructorElementImpl @ dart:typed_data), Float64x2List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer (ClassElementImpl @ dart:_native_typed_data), NativeByteBuffer.runtimeType (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4List.buffer (FieldElementImpl @ dart:_native_typed_data), NativeInt32x4List.buffer (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2List.buffer (FieldElementImpl @ dart:_native_typed_data), NativeTypedData.buffer (FieldElementImpl @ dart:_native_typed_data), NativeByteData.view (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeInt8List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint16List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint32List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8ClampedList.view (ConstructorElementImpl @ dart:_native_typed_data), NativeUint8List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4._uint32view (ConstFieldElementImpl @ dart:_native_typed_data), view (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat64x2._uint32View (FieldElementImpl @ dart:_native_typed_data), addChunk (FunctionElementImpl @ dart:convert/json.dart) */
class ByteBuffer extends core.Object {}
// /* Incoming: ByteData (ClassElementImpl @ dart:typed_data), Int8List (ClassElementImpl @ dart:typed_data), Uint8List (ClassElementImpl @ dart:typed_data), Uint8ClampedList (ClassElementImpl @ dart:typed_data), Int16List (ClassElementImpl @ dart:typed_data), Uint16List (ClassElementImpl @ dart:typed_data), Int32List (ClassElementImpl @ dart:typed_data), Uint32List (ClassElementImpl @ dart:typed_data), Int64List (ClassElementImpl @ dart:typed_data), Uint64List (ClassElementImpl @ dart:typed_data), Float32List (ClassElementImpl @ dart:typed_data), Float64List (ClassElementImpl @ dart:typed_data), Float32x4List (ClassElementImpl @ dart:typed_data), Int32x4List (ClassElementImpl @ dart:typed_data), Float64x2List (ClassElementImpl @ dart:typed_data), NativeFloat32x4List (ClassElementImpl @ dart:_native_typed_data), NativeInt32x4List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64x2List (ClassElementImpl @ dart:_native_typed_data), NativeTypedData (ClassElementImpl @ dart:_native_typed_data), NativeByteData (ClassElementImpl @ dart:_native_typed_data), NativeTypedArray (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfDouble (ClassElementImpl @ dart:_native_typed_data), NativeTypedArrayOfInt (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data) */
class TypedData extends core.Object {}
// /* Incoming: ByteBuffer.asInt8List (MethodElementImpl @ dart:typed_data), Int8List. (ConstructorElementImpl @ dart:typed_data), Int8List.fromList (ConstructorElementImpl @ dart:typed_data), Int8List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt8List (MethodElementImpl @ dart:_native_typed_data), NativeInt8List (ClassElementImpl @ dart:_native_typed_data), NativeInt8List.view (ConstructorElementImpl @ dart:_native_typed_data), NativeInt8List.runtimeType (FieldElementImpl @ dart:_native_typed_data), NativeInt8List._create3 (MethodElementImpl @ dart:_native_typed_data) */
class Int8List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeInt8List.new(length);
  }
}
Int8List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Int8List, {
  constructors: () => ({new: [Int8List, [core.int]]})
});
// /* Incoming: ByteBuffer.asUint8List (MethodElementImpl @ dart:typed_data), Uint8List. (ConstructorElementImpl @ dart:typed_data), Uint8List.fromList (ConstructorElementImpl @ dart:typed_data), Uint8List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint8List (MethodElementImpl @ dart:_native_typed_data), NativeUint8List (ClassElementImpl @ dart:_native_typed_data), NativeUint8List.runtimeType (FieldElementImpl @ dart:_native_typed_data), result (LocalVariableElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetEncoder.convert (MethodElementImpl @ dart:convert/ascii.dart), _ByteCallbackSink._buffer (FieldElementImpl @ dart:convert/byte_conversion.dart), grown (LocalVariableElementImpl @ dart:convert/byte_conversion.dart), _ByteCallbackSink.add (MethodElementImpl @ dart:convert/byte_conversion.dart), JsonUtf8Encoder._utf8Encode (MethodElementImpl @ dart:convert/json.dart), addChunk (FunctionElementImpl @ dart:convert/json.dart), result (LocalVariableElementImpl @ dart:convert/json.dart), JsonUtf8Encoder.convert (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink._addChunk (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier.buffer (FieldElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier. (ConstructorElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier.stringify (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier.flush (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier.writeByte (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8StringifierPretty.writeIndentation (MethodElementImpl @ dart:convert/json.dart), Utf8Encoder.convert (MethodElementImpl @ dart:convert/utf.dart), _Utf8Encoder._createBuffer (MethodElementImpl @ dart:convert/utf.dart) */
class Uint8List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint8List.new(length);
  }
}
Uint8List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint8List, {
  constructors: () => ({new: [Uint8List, [core.int]]})
});
// /* Incoming: ByteBuffer.asUint8ClampedList (MethodElementImpl @ dart:typed_data), Uint8ClampedList. (ConstructorElementImpl @ dart:typed_data), Uint8ClampedList.fromList (ConstructorElementImpl @ dart:typed_data), Uint8ClampedList.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint8ClampedList (MethodElementImpl @ dart:_native_typed_data), NativeUint8ClampedList (ClassElementImpl @ dart:_native_typed_data), NativeUint8ClampedList.runtimeType (FieldElementImpl @ dart:_native_typed_data) */
class Uint8ClampedList extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint8ClampedList.new(length);
  }
}
Uint8ClampedList[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint8ClampedList, {
  constructors: () => ({new: [Uint8ClampedList, [core.int]]})
});
// /* Incoming: ByteBuffer.asInt16List (MethodElementImpl @ dart:typed_data), Int16List. (ConstructorElementImpl @ dart:typed_data), Int16List.fromList (ConstructorElementImpl @ dart:typed_data), Int16List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt16List (MethodElementImpl @ dart:_native_typed_data), NativeInt16List (ClassElementImpl @ dart:_native_typed_data), NativeInt16List.runtimeType (FieldElementImpl @ dart:_native_typed_data) */
class Int16List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeInt16List.new(length);
  }
}
Int16List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Int16List, {
  constructors: () => ({new: [Int16List, [core.int]]})
});
// /* Incoming: ByteBuffer.asUint16List (MethodElementImpl @ dart:typed_data), Endianness.HOST_ENDIAN (ConstFieldElementImpl @ dart:typed_data), Uint16List. (ConstructorElementImpl @ dart:typed_data), Uint16List.fromList (ConstructorElementImpl @ dart:typed_data), Uint16List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint16List (MethodElementImpl @ dart:_native_typed_data), NativeUint16List (ClassElementImpl @ dart:_native_typed_data), NativeUint16List.runtimeType (FieldElementImpl @ dart:_native_typed_data) */
class Uint16List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint16List.new(length);
  }
}
Uint16List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint16List, {
  constructors: () => ({new: [Uint16List, [core.int]]})
});
// /* Incoming: ByteBuffer.asInt32List (MethodElementImpl @ dart:typed_data), Int32List. (ConstructorElementImpl @ dart:typed_data), Int32List.fromList (ConstructorElementImpl @ dart:typed_data), Int32List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt32List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4List._storage (FieldElementImpl @ dart:_native_typed_data), NativeInt32x4List._externalStorage (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List.buffer (FieldElementImpl @ dart:_native_typed_data), NativeInt32x4List.lengthInBytes (FieldElementImpl @ dart:_native_typed_data), NativeInt32x4List.offsetInBytes (FieldElementImpl @ dart:_native_typed_data), NativeInt32x4List.length (FieldElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4List.[]= (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeInt32List (ClassElementImpl @ dart:_native_typed_data), NativeInt32List.runtimeType (FieldElementImpl @ dart:_native_typed_data), view (LocalVariableElementImpl @ dart:_native_typed_data) */
class Int32List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeInt32List.new(length);
  }
}
Int32List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Int32List, {
  constructors: () => ({new: [Int32List, [core.int]]})
});
// /* Incoming: ByteBuffer.asUint32List (MethodElementImpl @ dart:typed_data), Uint32List. (ConstructorElementImpl @ dart:typed_data), Uint32List.fromList (ConstructorElementImpl @ dart:typed_data), Uint32List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asUint32List (MethodElementImpl @ dart:_native_typed_data), NativeUint32List (ClassElementImpl @ dart:_native_typed_data), NativeUint32List.runtimeType (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4._uint32view (ConstFieldElementImpl @ dart:_native_typed_data), NativeFloat32x4.fromInt32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), view (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.signMask (FieldElementImpl @ dart:_native_typed_data), intView (LocalVariableElementImpl @ dart:_native_typed_data), stx (LocalVariableElementImpl @ dart:_native_typed_data), sty (LocalVariableElementImpl @ dart:_native_typed_data), stz (LocalVariableElementImpl @ dart:_native_typed_data), stw (LocalVariableElementImpl @ dart:_native_typed_data), sfx (LocalVariableElementImpl @ dart:_native_typed_data), sfy (LocalVariableElementImpl @ dart:_native_typed_data), sfz (LocalVariableElementImpl @ dart:_native_typed_data), sfw (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4.select (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2._uint32View (FieldElementImpl @ dart:_native_typed_data) */
class Uint32List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint32List.new(length);
  }
}
Uint32List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint32List, {
  constructors: () => ({new: [Uint32List, [core.int]]})
});
// /* Incoming: ByteBuffer.asFloat32List (MethodElementImpl @ dart:typed_data), Float32List. (ConstructorElementImpl @ dart:typed_data), Float32List.fromList (ConstructorElementImpl @ dart:typed_data), Float32List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat32List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32List (ClassElementImpl @ dart:_native_typed_data), NativeFloat32List.runtimeType (FieldElementImpl @ dart:_native_typed_data) */
class Float32List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeFloat32List.new(length);
  }
}
Float32List[dart.implements] = () => [core.List$(core.double), TypedData];
dart.setSignature(Float32List, {
  constructors: () => ({new: [Float32List, [core.int]]})
});
// /* Incoming: ByteBuffer.asFloat64List (MethodElementImpl @ dart:typed_data), Float64List. (ConstructorElementImpl @ dart:typed_data), Float64List.fromList (ConstructorElementImpl @ dart:typed_data), Float64List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat64List (MethodElementImpl @ dart:_native_typed_data), storage (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat64List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64List.runtimeType (FieldElementImpl @ dart:_native_typed_data) */
class Float64List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeFloat64List.new(length);
  }
}
Float64List[dart.implements] = () => [core.List$(core.double), TypedData];
dart.setSignature(Float64List, {
  constructors: () => ({new: [Float64List, [core.int]]})
});
// /* Incoming: ByteBuffer.asFloat32x4List (MethodElementImpl @ dart:typed_data), Float32x4List. (ConstructorElementImpl @ dart:typed_data), Float32x4List.fromList (ConstructorElementImpl @ dart:typed_data), Float32x4List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat32x4List (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4List (ClassElementImpl @ dart:_native_typed_data), NativeFloat32x4List.runtimeType (FieldElementImpl @ dart:_native_typed_data), NativeFloat32x4List.elementSizeInBytes (FieldElementImpl @ dart:_native_typed_data) */
class Float32x4List extends core.Object {
  static new(length) {
    return new _native_typed_data.NativeFloat32x4List(length);
  }
}
Float32x4List[dart.implements] = () => [core.List$(Float32x4), TypedData];
dart.setSignature(Float32x4List, {
  constructors: () => ({new: [Float32x4List, [core.int]]})
});
// /* Incoming: ByteBuffer.asInt32x4List (MethodElementImpl @ dart:typed_data), Int32x4List. (ConstructorElementImpl @ dart:typed_data), Int32x4List.fromList (ConstructorElementImpl @ dart:typed_data), Int32x4List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asInt32x4List (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4List (ClassElementImpl @ dart:_native_typed_data), NativeInt32x4List.runtimeType (FieldElementImpl @ dart:_native_typed_data), NativeInt32x4List.elementSizeInBytes (FieldElementImpl @ dart:_native_typed_data) */
class Int32x4List extends core.Object {
  static new(length) {
    return new _native_typed_data.NativeInt32x4List(length);
  }
}
Int32x4List[dart.implements] = () => [core.List$(Int32x4), TypedData];
dart.setSignature(Int32x4List, {
  constructors: () => ({new: [Int32x4List, [core.int]]})
});
// /* Incoming: ByteBuffer.asFloat64x2List (MethodElementImpl @ dart:typed_data), Float64x2List. (ConstructorElementImpl @ dart:typed_data), Float64x2List.fromList (ConstructorElementImpl @ dart:typed_data), Float64x2List.view (ConstructorElementImpl @ dart:typed_data), NativeByteBuffer.asFloat64x2List (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64x2List.runtimeType (FieldElementImpl @ dart:_native_typed_data), NativeFloat64x2List.elementSizeInBytes (FieldElementImpl @ dart:_native_typed_data) */
class Float64x2List extends core.Object {
  static new(length) {
    return new _native_typed_data.NativeFloat64x2List(length);
  }
}
Float64x2List[dart.implements] = () => [core.List$(Float64x2), TypedData];
dart.setSignature(Float64x2List, {
  constructors: () => ({new: [Float64x2List, [core.int]]})
});
// /* Incoming: Float32x4List (ClassElementImpl @ dart:typed_data), Float32x4List.fromList (ConstructorElementImpl @ dart:typed_data), Float32x4. (ConstructorElementImpl @ dart:typed_data), Float32x4.splat (ConstructorElementImpl @ dart:typed_data), Float32x4.zero (ConstructorElementImpl @ dart:typed_data), Float32x4.fromInt32x4Bits (ConstructorElementImpl @ dart:typed_data), Float32x4.fromFloat64x2 (ConstructorElementImpl @ dart:typed_data), Float32x4.+ (MethodElementImpl @ dart:typed_data), Float32x4.unary- (MethodElementImpl @ dart:typed_data), Float32x4.- (MethodElementImpl @ dart:typed_data), Float32x4.* (MethodElementImpl @ dart:typed_data), Float32x4./ (MethodElementImpl @ dart:typed_data), Float32x4.lessThan (MethodElementImpl @ dart:typed_data), Float32x4.lessThanOrEqual (MethodElementImpl @ dart:typed_data), Float32x4.greaterThan (MethodElementImpl @ dart:typed_data), Float32x4.greaterThanOrEqual (MethodElementImpl @ dart:typed_data), Float32x4.equal (MethodElementImpl @ dart:typed_data), Float32x4.notEqual (MethodElementImpl @ dart:typed_data), Float32x4.scale (MethodElementImpl @ dart:typed_data), Float32x4.abs (MethodElementImpl @ dart:typed_data), Float32x4.clamp (MethodElementImpl @ dart:typed_data), Float32x4.shuffle (MethodElementImpl @ dart:typed_data), Float32x4.shuffleMix (MethodElementImpl @ dart:typed_data), Float32x4.withX (MethodElementImpl @ dart:typed_data), Float32x4.withY (MethodElementImpl @ dart:typed_data), Float32x4.withZ (MethodElementImpl @ dart:typed_data), Float32x4.withW (MethodElementImpl @ dart:typed_data), Float32x4.min (MethodElementImpl @ dart:typed_data), Float32x4.max (MethodElementImpl @ dart:typed_data), Float32x4.sqrt (MethodElementImpl @ dart:typed_data), Float32x4.reciprocal (MethodElementImpl @ dart:typed_data), Float32x4.reciprocalSqrt (MethodElementImpl @ dart:typed_data), Int32x4.fromFloat32x4Bits (ConstructorElementImpl @ dart:typed_data), Int32x4.select (MethodElementImpl @ dart:typed_data), Float64x2.fromFloat32x4 (ConstructorElementImpl @ dart:typed_data), NativeFloat32x4List (ClassElementImpl @ dart:_native_typed_data), NativeFloat32x4List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), e (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4List.[] (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4List.[]= (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4 (ClassElementImpl @ dart:_native_typed_data), NativeFloat32x4.+ (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.unary- (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.- (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.* (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4./ (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.lessThan (MethodElementImpl @ dart:_native_typed_data), _cx (LocalVariableElementImpl @ dart:_native_typed_data), _cy (LocalVariableElementImpl @ dart:_native_typed_data), _cz (LocalVariableElementImpl @ dart:_native_typed_data), _cw (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.lessThanOrEqual (MethodElementImpl @ dart:_native_typed_data), _cx (LocalVariableElementImpl @ dart:_native_typed_data), _cy (LocalVariableElementImpl @ dart:_native_typed_data), _cz (LocalVariableElementImpl @ dart:_native_typed_data), _cw (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.greaterThan (MethodElementImpl @ dart:_native_typed_data), _cx (LocalVariableElementImpl @ dart:_native_typed_data), _cy (LocalVariableElementImpl @ dart:_native_typed_data), _cz (LocalVariableElementImpl @ dart:_native_typed_data), _cw (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.greaterThanOrEqual (MethodElementImpl @ dart:_native_typed_data), _cx (LocalVariableElementImpl @ dart:_native_typed_data), _cy (LocalVariableElementImpl @ dart:_native_typed_data), _cz (LocalVariableElementImpl @ dart:_native_typed_data), _cw (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.equal (MethodElementImpl @ dart:_native_typed_data), _cx (LocalVariableElementImpl @ dart:_native_typed_data), _cy (LocalVariableElementImpl @ dart:_native_typed_data), _cz (LocalVariableElementImpl @ dart:_native_typed_data), _cw (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.notEqual (MethodElementImpl @ dart:_native_typed_data), _cx (LocalVariableElementImpl @ dart:_native_typed_data), _cy (LocalVariableElementImpl @ dart:_native_typed_data), _cz (LocalVariableElementImpl @ dart:_native_typed_data), _cw (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.scale (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.abs (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.clamp (MethodElementImpl @ dart:_native_typed_data), _lx (LocalVariableElementImpl @ dart:_native_typed_data), _ly (LocalVariableElementImpl @ dart:_native_typed_data), _lz (LocalVariableElementImpl @ dart:_native_typed_data), _lw (LocalVariableElementImpl @ dart:_native_typed_data), _ux (LocalVariableElementImpl @ dart:_native_typed_data), _uy (LocalVariableElementImpl @ dart:_native_typed_data), _uz (LocalVariableElementImpl @ dart:_native_typed_data), _uw (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.shuffle (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.shuffleMix (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withX (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withY (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withZ (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.withW (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.min (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.max (MethodElementImpl @ dart:_native_typed_data), _x (LocalVariableElementImpl @ dart:_native_typed_data), _y (LocalVariableElementImpl @ dart:_native_typed_data), _z (LocalVariableElementImpl @ dart:_native_typed_data), _w (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat32x4.sqrt (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.reciprocal (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.reciprocalSqrt (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.fromFloat32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4.select (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.fromFloat32x4 (ConstructorElementImpl @ dart:_native_typed_data) */
class Float32x4 extends core.Object {
  static new(x, y, z, w) {
    return new _native_typed_data.NativeFloat32x4(x, y, z, w);
  }
}
dart.setSignature(Float32x4, {
  constructors: () => ({new: [Float32x4, [core.double, core.double, core.double, core.double]]})
});
// /* Incoming: Int32x4List (ClassElementImpl @ dart:typed_data), Int32x4List.fromList (ConstructorElementImpl @ dart:typed_data), Float32x4.fromInt32x4Bits (ConstructorElementImpl @ dart:typed_data), Float32x4.lessThan (MethodElementImpl @ dart:typed_data), Float32x4.lessThanOrEqual (MethodElementImpl @ dart:typed_data), Float32x4.greaterThan (MethodElementImpl @ dart:typed_data), Float32x4.greaterThanOrEqual (MethodElementImpl @ dart:typed_data), Float32x4.equal (MethodElementImpl @ dart:typed_data), Float32x4.notEqual (MethodElementImpl @ dart:typed_data), Int32x4. (ConstructorElementImpl @ dart:typed_data), Int32x4.bool (ConstructorElementImpl @ dart:typed_data), Int32x4.fromFloat32x4Bits (ConstructorElementImpl @ dart:typed_data), Int32x4.| (MethodElementImpl @ dart:typed_data), Int32x4.& (MethodElementImpl @ dart:typed_data), Int32x4.^ (MethodElementImpl @ dart:typed_data), Int32x4.+ (MethodElementImpl @ dart:typed_data), Int32x4.- (MethodElementImpl @ dart:typed_data), Int32x4.shuffle (MethodElementImpl @ dart:typed_data), Int32x4.shuffleMix (MethodElementImpl @ dart:typed_data), Int32x4.withX (MethodElementImpl @ dart:typed_data), Int32x4.withY (MethodElementImpl @ dart:typed_data), Int32x4.withZ (MethodElementImpl @ dart:typed_data), Int32x4.withW (MethodElementImpl @ dart:typed_data), Int32x4.withFlagX (MethodElementImpl @ dart:typed_data), Int32x4.withFlagY (MethodElementImpl @ dart:typed_data), Int32x4.withFlagZ (MethodElementImpl @ dart:typed_data), Int32x4.withFlagW (MethodElementImpl @ dart:typed_data), NativeInt32x4List (ClassElementImpl @ dart:_native_typed_data), NativeInt32x4List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), e (LocalVariableElementImpl @ dart:_native_typed_data), NativeInt32x4List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeInt32x4List.[] (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4List.[]= (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.fromInt32x4Bits (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat32x4.lessThan (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.lessThanOrEqual (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.greaterThan (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.greaterThanOrEqual (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.equal (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.notEqual (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4 (ClassElementImpl @ dart:_native_typed_data), NativeInt32x4.| (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.& (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.^ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.+ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.- (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.unary- (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.shuffle (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.shuffleMix (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withX (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withY (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withZ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withW (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagX (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagY (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagZ (MethodElementImpl @ dart:_native_typed_data), NativeInt32x4.withFlagW (MethodElementImpl @ dart:_native_typed_data) */
class Int32x4 extends core.Object {
  static new(x, y, z, w) {
    return new _native_typed_data.NativeInt32x4(x, y, z, w);
  }
}
dart.setSignature(Int32x4, {
  constructors: () => ({new: [Int32x4, [core.int, core.int, core.int, core.int]]})
});
// /* Incoming: Float64x2List (ClassElementImpl @ dart:typed_data), Float64x2List.fromList (ConstructorElementImpl @ dart:typed_data), Float32x4.fromFloat64x2 (ConstructorElementImpl @ dart:typed_data), Float64x2. (ConstructorElementImpl @ dart:typed_data), Float64x2.splat (ConstructorElementImpl @ dart:typed_data), Float64x2.zero (ConstructorElementImpl @ dart:typed_data), Float64x2.fromFloat32x4 (ConstructorElementImpl @ dart:typed_data), Float64x2.+ (MethodElementImpl @ dart:typed_data), Float64x2.unary- (MethodElementImpl @ dart:typed_data), Float64x2.- (MethodElementImpl @ dart:typed_data), Float64x2.* (MethodElementImpl @ dart:typed_data), Float64x2./ (MethodElementImpl @ dart:typed_data), Float64x2.scale (MethodElementImpl @ dart:typed_data), Float64x2.abs (MethodElementImpl @ dart:typed_data), Float64x2.clamp (MethodElementImpl @ dart:typed_data), Float64x2.withX (MethodElementImpl @ dart:typed_data), Float64x2.withY (MethodElementImpl @ dart:typed_data), Float64x2.min (MethodElementImpl @ dart:typed_data), Float64x2.max (MethodElementImpl @ dart:typed_data), Float64x2.sqrt (MethodElementImpl @ dart:typed_data), NativeFloat64x2List (ClassElementImpl @ dart:_native_typed_data), NativeFloat64x2List._slowFromList (ConstructorElementImpl @ dart:_native_typed_data), e (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat64x2List.fromList (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2List.[] (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2List.[]= (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2List.sublist (MethodElementImpl @ dart:_native_typed_data), NativeFloat32x4.fromFloat64x2 (ConstructorElementImpl @ dart:_native_typed_data), NativeFloat64x2 (ClassElementImpl @ dart:_native_typed_data), NativeFloat64x2.+ (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.unary- (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.- (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.* (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2./ (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.scale (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.abs (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.clamp (MethodElementImpl @ dart:_native_typed_data), _lx (LocalVariableElementImpl @ dart:_native_typed_data), _ly (LocalVariableElementImpl @ dart:_native_typed_data), _ux (LocalVariableElementImpl @ dart:_native_typed_data), _uy (LocalVariableElementImpl @ dart:_native_typed_data), NativeFloat64x2.withX (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.withY (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.min (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.max (MethodElementImpl @ dart:_native_typed_data), NativeFloat64x2.sqrt (MethodElementImpl @ dart:_native_typed_data) */
class Float64x2 extends core.Object {
  static new(x, y) {
    return new _native_typed_data.NativeFloat64x2(x, y);
  }
}
dart.setSignature(Float64x2, {
  constructors: () => ({new: [Float64x2, [core.double, core.double]]})
});
// Exports:
exports.ByteBuffer = ByteBuffer;
exports.TypedData = TypedData;
exports.Int8List = Int8List;
exports.Uint8List = Uint8List;
exports.Uint8ClampedList = Uint8ClampedList;
exports.Int16List = Int16List;
exports.Uint16List = Uint16List;
exports.Int32List = Int32List;
exports.Uint32List = Uint32List;
exports.Float32List = Float32List;
exports.Float64List = Float64List;
exports.Float32x4List = Float32x4List;
exports.Int32x4List = Int32x4List;
exports.Float64x2List = Float64x2List;
exports.Float32x4 = Float32x4;
exports.Int32x4 = Int32x4;
exports.Float64x2 = Float64x2;
