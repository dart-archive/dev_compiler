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
let _native_typed_data = require("./_native_typed_data");
let dartx = dart.dartx;
class ByteBuffer extends core.Object {}
class TypedData extends core.Object {}
const _littleEndian = Symbol('_littleEndian');
class Endianness extends core.Object {
  _(littleEndian) {
    this[_littleEndian] = littleEndian;
  }
}
dart.defineNamedConstructor(Endianness, '_');
dart.setSignature(Endianness, {
  constructors: () => ({_: [Endianness, [core.bool]]})
});
dart.defineLazyProperties(Endianness, {
  get BIG_ENDIAN() {
    return dart.const(new Endianness._(false));
  }
});
class ByteData extends core.Object {
  static new(length) {
    return _native_typed_data.NativeByteData.new(length);
  }
}
ByteData[dart.implements] = () => [TypedData];
dart.setSignature(ByteData, {
  constructors: () => ({new: [ByteData, [core.int]]})
});
class Int8List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeInt8List.new(length);
  }
}
Int8List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Int8List, {
  constructors: () => ({new: [Int8List, [core.int]]})
});
class Uint8List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint8List.new(length);
  }
}
Uint8List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint8List, {
  constructors: () => ({new: [Uint8List, [core.int]]})
});
class Uint8ClampedList extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint8ClampedList.new(length);
  }
}
Uint8ClampedList[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint8ClampedList, {
  constructors: () => ({new: [Uint8ClampedList, [core.int]]})
});
class Int16List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeInt16List.new(length);
  }
}
Int16List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Int16List, {
  constructors: () => ({new: [Int16List, [core.int]]})
});
class Uint16List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint16List.new(length);
  }
}
Uint16List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint16List, {
  constructors: () => ({new: [Uint16List, [core.int]]})
});
class Int32List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeInt32List.new(length);
  }
}
Int32List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Int32List, {
  constructors: () => ({new: [Int32List, [core.int]]})
});
class Uint32List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeUint32List.new(length);
  }
}
Uint32List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint32List, {
  constructors: () => ({new: [Uint32List, [core.int]]})
});
class Int64List extends core.Object {
  static new(length) {
    dart.throw(new core.UnsupportedError("Int64List not supported by dart2js."));
  }
}
Int64List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Int64List, {
  constructors: () => ({new: [Int64List, [core.int]]})
});
class Uint64List extends core.Object {
  static new(length) {
    dart.throw(new core.UnsupportedError("Uint64List not supported by dart2js."));
  }
}
Uint64List[dart.implements] = () => [core.List$(core.int), TypedData];
dart.setSignature(Uint64List, {
  constructors: () => ({new: [Uint64List, [core.int]]})
});
class Float32List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeFloat32List.new(length);
  }
}
Float32List[dart.implements] = () => [core.List$(core.double), TypedData];
dart.setSignature(Float32List, {
  constructors: () => ({new: [Float32List, [core.int]]})
});
class Float64List extends core.Object {
  static new(length) {
    return _native_typed_data.NativeFloat64List.new(length);
  }
}
Float64List[dart.implements] = () => [core.List$(core.double), TypedData];
dart.setSignature(Float64List, {
  constructors: () => ({new: [Float64List, [core.int]]})
});
class Float32x4List extends core.Object {
  static new(length) {
    return new _native_typed_data.NativeFloat32x4List(length);
  }
}
Float32x4List[dart.implements] = () => [core.List$(Float32x4), TypedData];
dart.setSignature(Float32x4List, {
  constructors: () => ({new: [Float32x4List, [core.int]]})
});
class Int32x4List extends core.Object {
  static new(length) {
    return new _native_typed_data.NativeInt32x4List(length);
  }
}
Int32x4List[dart.implements] = () => [core.List$(Int32x4), TypedData];
dart.setSignature(Int32x4List, {
  constructors: () => ({new: [Int32x4List, [core.int]]})
});
class Float64x2List extends core.Object {
  static new(length) {
    return new _native_typed_data.NativeFloat64x2List(length);
  }
}
Float64x2List[dart.implements] = () => [core.List$(Float64x2), TypedData];
dart.setSignature(Float64x2List, {
  constructors: () => ({new: [Float64x2List, [core.int]]})
});
class Float32x4 extends core.Object {
  static new(x, y, z, w) {
    return new _native_typed_data.NativeFloat32x4(x, y, z, w);
  }
}
dart.setSignature(Float32x4, {
  constructors: () => ({new: [Float32x4, [core.double, core.double, core.double, core.double]]})
});
class Int32x4 extends core.Object {
  static new(x, y, z, w) {
    return new _native_typed_data.NativeInt32x4(x, y, z, w);
  }
}
dart.setSignature(Int32x4, {
  constructors: () => ({new: [Int32x4, [core.int, core.int, core.int, core.int]]})
});
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
exports.Endianness = Endianness;
exports.ByteData = ByteData;
exports.Int8List = Int8List;
exports.Uint8List = Uint8List;
exports.Uint8ClampedList = Uint8ClampedList;
exports.Int16List = Int16List;
exports.Uint16List = Uint16List;
exports.Int32List = Int32List;
exports.Uint32List = Uint32List;
exports.Int64List = Int64List;
exports.Uint64List = Uint64List;
exports.Float32List = Float32List;
exports.Float64List = Float64List;
exports.Float32x4List = Float32x4List;
exports.Int32x4List = Int32x4List;
exports.Float64x2List = Float64x2List;
exports.Float32x4 = Float32x4;
exports.Int32x4 = Int32x4;
exports.Float64x2 = Float64x2;
