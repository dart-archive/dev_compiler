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
let typed_data = require("./typed_data");
let _js_helper = require("./_js_helper");
let collection = require("./collection");
let _internal = require("./_internal");
let _interceptors = require("./_interceptors");
let dartx = dart.dartx;
class NativeByteBuffer extends core.Object {
  asUint32List(offsetInBytes, length) {
    if (offsetInBytes === void 0) offsetInBytes = 0;
    if (length === void 0) length = null;
    return NativeUint32List.view(this, offsetInBytes, length);
  }
  asInt32List(offsetInBytes, length) {
    if (offsetInBytes === void 0) offsetInBytes = 0;
    if (length === void 0) length = null;
    return NativeInt32List.view(this, offsetInBytes, length);
  }
}
NativeByteBuffer[dart.implements] = () => [typed_data.ByteBuffer];
dart.setSignature(NativeByteBuffer, {
  methods: () => ({
    asUint32List: [typed_data.Uint32List, [], [core.int, core.int]],
    asInt32List: [typed_data.Int32List, [], [core.int, core.int]]
  })
});
NativeByteBuffer[dart.metadata] = () => [dart.const(new _js_helper.Native("ArrayBuffer"))];
const _storage = Symbol('_storage');
const _checkIndex = Symbol('_checkIndex');
const _checkSublistArguments = Symbol('_checkSublistArguments');
class NativeFloat32x4List extends dart.mixin(core.Object, collection.ListMixin$(typed_data.Float32x4), _internal.FixedLengthListMixin$(typed_data.Float32x4)) {
  NativeFloat32x4List(length) {
    this[_storage] = NativeFloat32List.new(dart.notNull(length) * 4);
  }
  _externalStorage(storage) {
    this[_storage] = storage;
  }
  _slowFromList(list) {
    this[_storage] = NativeFloat32List.new(dart.notNull(list[dartx.length]) * 4);
    for (let i = 0; i < dart.notNull(list[dartx.length]); i++) {
      let e = list[dartx.get](i);
      this[_storage].set(i * 4 + 0, e.x);
      this[_storage].set(i * 4 + 1, e.y);
      this[_storage].set(i * 4 + 2, e.z);
      this[_storage].set(i * 4 + 3, e.w);
    }
  }
  static fromList(list) {
    if (dart.is(list, NativeFloat32x4List)) {
      return new NativeFloat32x4List._externalStorage(NativeFloat32List.fromList(list[_storage]));
    } else {
      return new NativeFloat32x4List._slowFromList(list);
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
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    return new NativeFloat32x4List._externalStorage(dart.as(this[_storage].sublist(dart.notNull(start) * 4, dart.notNull(end) * 4), NativeFloat32List));
  }
}
NativeFloat32x4List[dart.implements] = () => [typed_data.Float32x4List];
dart.defineNamedConstructor(NativeFloat32x4List, '_externalStorage');
dart.defineNamedConstructor(NativeFloat32x4List, '_slowFromList');
dart.setSignature(NativeFloat32x4List, {
  constructors: () => ({
    NativeFloat32x4List: [NativeFloat32x4List, [core.int]],
    _externalStorage: [NativeFloat32x4List, [NativeFloat32List]],
    _slowFromList: [NativeFloat32x4List, [core.List$(typed_data.Float32x4)]],
    fromList: [NativeFloat32x4List, [core.List$(typed_data.Float32x4)]]
  }),
  methods: () => ({
    get: [typed_data.Float32x4, [core.int]],
    set: [dart.void, [core.int, typed_data.Float32x4]],
    sublist: [core.List$(typed_data.Float32x4), [core.int], [core.int]]
  })
});
dart.defineExtensionMembers(NativeFloat32x4List, ['get', 'set', 'sublist', 'length']);
class NativeInt32x4List extends dart.mixin(core.Object, collection.ListMixin$(typed_data.Int32x4), _internal.FixedLengthListMixin$(typed_data.Int32x4)) {
  NativeInt32x4List(length) {
    this[_storage] = NativeInt32List.new(dart.notNull(length) * 4);
  }
  _externalStorage(storage) {
    this[_storage] = storage;
  }
  _slowFromList(list) {
    this[_storage] = NativeInt32List.new(dart.notNull(list[dartx.length]) * 4);
    for (let i = 0; i < dart.notNull(list[dartx.length]); i++) {
      let e = list[dartx.get](i);
      this[_storage].set(i * 4 + 0, e.x);
      this[_storage].set(i * 4 + 1, e.y);
      this[_storage].set(i * 4 + 2, e.z);
      this[_storage].set(i * 4 + 3, e.w);
    }
  }
  static fromList(list) {
    if (dart.is(list, NativeInt32x4List)) {
      return new NativeInt32x4List._externalStorage(NativeInt32List.fromList(list[_storage]));
    } else {
      return new NativeInt32x4List._slowFromList(list);
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
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    return new NativeInt32x4List._externalStorage(dart.as(this[_storage].sublist(dart.notNull(start) * 4, dart.notNull(end) * 4), typed_data.Int32List));
  }
}
NativeInt32x4List[dart.implements] = () => [typed_data.Int32x4List];
dart.defineNamedConstructor(NativeInt32x4List, '_externalStorage');
dart.defineNamedConstructor(NativeInt32x4List, '_slowFromList');
dart.setSignature(NativeInt32x4List, {
  constructors: () => ({
    NativeInt32x4List: [NativeInt32x4List, [core.int]],
    _externalStorage: [NativeInt32x4List, [typed_data.Int32List]],
    _slowFromList: [NativeInt32x4List, [core.List$(typed_data.Int32x4)]],
    fromList: [NativeInt32x4List, [core.List$(typed_data.Int32x4)]]
  }),
  methods: () => ({
    get: [typed_data.Int32x4, [core.int]],
    set: [dart.void, [core.int, typed_data.Int32x4]],
    sublist: [core.List$(typed_data.Int32x4), [core.int], [core.int]]
  })
});
dart.defineExtensionMembers(NativeInt32x4List, ['get', 'set', 'sublist', 'length']);
class NativeFloat64x2List extends dart.mixin(core.Object, collection.ListMixin$(typed_data.Float64x2), _internal.FixedLengthListMixin$(typed_data.Float64x2)) {
  NativeFloat64x2List(length) {
    this[_storage] = NativeFloat64List.new(dart.notNull(length) * 2);
  }
  _externalStorage(storage) {
    this[_storage] = storage;
  }
  _slowFromList(list) {
    this[_storage] = NativeFloat64List.new(dart.notNull(list[dartx.length]) * 2);
    for (let i = 0; i < dart.notNull(list[dartx.length]); i++) {
      let e = list[dartx.get](i);
      this[_storage].set(i * 2 + 0, e.x);
      this[_storage].set(i * 2 + 1, e.y);
    }
  }
  static fromList(list) {
    if (dart.is(list, NativeFloat64x2List)) {
      return new NativeFloat64x2List._externalStorage(NativeFloat64List.fromList(list[_storage]));
    } else {
      return new NativeFloat64x2List._slowFromList(list);
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
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    return new NativeFloat64x2List._externalStorage(dart.as(this[_storage].sublist(dart.notNull(start) * 2, dart.notNull(end) * 2), NativeFloat64List));
  }
}
NativeFloat64x2List[dart.implements] = () => [typed_data.Float64x2List];
dart.defineNamedConstructor(NativeFloat64x2List, '_externalStorage');
dart.defineNamedConstructor(NativeFloat64x2List, '_slowFromList');
dart.setSignature(NativeFloat64x2List, {
  constructors: () => ({
    NativeFloat64x2List: [NativeFloat64x2List, [core.int]],
    _externalStorage: [NativeFloat64x2List, [NativeFloat64List]],
    _slowFromList: [NativeFloat64x2List, [core.List$(typed_data.Float64x2)]],
    fromList: [NativeFloat64x2List, [core.List$(typed_data.Float64x2)]]
  }),
  methods: () => ({
    get: [typed_data.Float64x2, [core.int]],
    set: [dart.void, [core.int, typed_data.Float64x2]],
    sublist: [core.List$(typed_data.Float64x2), [core.int], [core.int]]
  })
});
dart.defineExtensionMembers(NativeFloat64x2List, ['get', 'set', 'sublist', 'length']);
const _invalidIndex = Symbol('_invalidIndex');
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
function _ensureNativeList(list) {
  if (dart.is(list, _interceptors.JSIndexable)) return list;
  let result = core.List.new(list[dartx.length]);
  for (let i = 0; i < dart.notNull(list[dartx.length]); i++) {
    result[dartx.set](i, list[dartx.get](i));
  }
  return result;
}
dart.fn(_ensureNativeList, core.List, [core.List]);
class NativeByteData extends NativeTypedData {
  static new(length) {
    return NativeByteData._create1(_checkLength(length));
  }
  static _create1(arg) {
    return dart.as(new DataView(new ArrayBuffer(arg)), NativeByteData);
  }
}
NativeByteData[dart.implements] = () => [typed_data.ByteData];
dart.setSignature(NativeByteData, {
  constructors: () => ({new: [NativeByteData, [core.int]]}),
  statics: () => ({_create1: [NativeByteData, [dart.dynamic]]}),
  names: ['_create1']
});
NativeByteData[dart.metadata] = () => [dart.const(new _js_helper.Native("DataView"))];
class NativeTypedArray extends NativeTypedData {}
NativeTypedArray[dart.implements] = () => [_js_helper.JavaScriptIndexingBehavior];
const _setRangeFast = Symbol('_setRangeFast');
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
  setRange(start, end, iterable, skipCount) {
    if (skipCount === void 0) skipCount = 0;
    if (dart.is(iterable, NativeTypedArrayOfDouble)) {
      this[_setRangeFast](start, end, iterable, skipCount);
      return;
    }
    super.setRange(start, end, iterable, skipCount);
  }
}
dart.setSignature(NativeTypedArrayOfDouble, {
  methods: () => ({
    get: [core.double, [core.int]],
    set: [dart.void, [core.int, core.num]],
    setRange: [dart.void, [core.int, core.int, core.Iterable$(core.double)], [core.int]]
  })
});
dart.defineExtensionMembers(NativeTypedArrayOfDouble, ['get', 'set', 'setRange', 'length']);
class NativeTypedArrayOfInt extends dart.mixin(NativeTypedArray, collection.ListMixin$(core.int), _internal.FixedLengthListMixin$(core.int)) {
  get length() {
    return this.length;
  }
  set(index, value) {
    this[_checkIndex](index, this.length);
    this[index] = value;
    return value;
  }
  setRange(start, end, iterable, skipCount) {
    if (skipCount === void 0) skipCount = 0;
    if (dart.is(iterable, NativeTypedArrayOfInt)) {
      this[_setRangeFast](start, end, iterable, skipCount);
      return;
    }
    super.setRange(start, end, iterable, skipCount);
  }
}
NativeTypedArrayOfInt[dart.implements] = () => [core.List$(core.int)];
dart.setSignature(NativeTypedArrayOfInt, {
  methods: () => ({
    set: [dart.void, [core.int, core.int]],
    setRange: [dart.void, [core.int, core.int, core.Iterable$(core.int)], [core.int]]
  })
});
dart.defineExtensionMembers(NativeTypedArrayOfInt, ['set', 'setRange', 'length']);
class NativeFloat32List extends NativeTypedArrayOfDouble {
  static new(length) {
    return NativeFloat32List._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeFloat32List._create1(_ensureNativeList(elements));
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeFloat32List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Float32Array(arg), NativeFloat32List);
  }
}
NativeFloat32List[dart.implements] = () => [typed_data.Float32List];
dart.setSignature(NativeFloat32List, {
  constructors: () => ({
    new: [NativeFloat32List, [core.int]],
    fromList: [NativeFloat32List, [core.List$(core.double)]]
  }),
  methods: () => ({sublist: [core.List$(core.double), [core.int], [core.int]]}),
  statics: () => ({_create1: [NativeFloat32List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeFloat32List, ['sublist']);
NativeFloat32List[dart.metadata] = () => [dart.const(new _js_helper.Native("Float32Array"))];
class NativeFloat64List extends NativeTypedArrayOfDouble {
  static new(length) {
    return NativeFloat64List._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeFloat64List._create1(_ensureNativeList(elements));
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeFloat64List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Float64Array(arg), NativeFloat64List);
  }
}
NativeFloat64List[dart.implements] = () => [typed_data.Float64List];
dart.setSignature(NativeFloat64List, {
  constructors: () => ({
    new: [NativeFloat64List, [core.int]],
    fromList: [NativeFloat64List, [core.List$(core.double)]]
  }),
  methods: () => ({sublist: [core.List$(core.double), [core.int], [core.int]]}),
  statics: () => ({_create1: [NativeFloat64List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeFloat64List, ['sublist']);
NativeFloat64List[dart.metadata] = () => [dart.const(new _js_helper.Native("Float64Array"))];
class NativeInt16List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeInt16List._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeInt16List._create1(_ensureNativeList(elements));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeInt16List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Int16Array(arg), NativeInt16List);
  }
}
NativeInt16List[dart.implements] = () => [typed_data.Int16List];
dart.setSignature(NativeInt16List, {
  constructors: () => ({
    new: [NativeInt16List, [core.int]],
    fromList: [NativeInt16List, [core.List$(core.int)]]
  }),
  methods: () => ({
    get: [core.int, [core.int]],
    sublist: [core.List$(core.int), [core.int], [core.int]]
  }),
  statics: () => ({_create1: [NativeInt16List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeInt16List, ['get', 'sublist']);
NativeInt16List[dart.metadata] = () => [dart.const(new _js_helper.Native("Int16Array"))];
class NativeInt32List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeInt32List._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeInt32List._create1(_ensureNativeList(elements));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeInt32List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Int32Array(arg), NativeInt32List);
  }
}
NativeInt32List[dart.implements] = () => [typed_data.Int32List];
dart.setSignature(NativeInt32List, {
  constructors: () => ({
    new: [NativeInt32List, [core.int]],
    fromList: [NativeInt32List, [core.List$(core.int)]]
  }),
  methods: () => ({
    get: [core.int, [core.int]],
    sublist: [core.List$(core.int), [core.int], [core.int]]
  }),
  statics: () => ({_create1: [NativeInt32List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeInt32List, ['get', 'sublist']);
NativeInt32List[dart.metadata] = () => [dart.const(new _js_helper.Native("Int32Array"))];
class NativeInt8List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeInt8List._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeInt8List._create1(_ensureNativeList(elements));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeInt8List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Int8Array(arg), NativeInt8List);
  }
}
NativeInt8List[dart.implements] = () => [typed_data.Int8List];
dart.setSignature(NativeInt8List, {
  constructors: () => ({
    new: [NativeInt8List, [core.int]],
    fromList: [NativeInt8List, [core.List$(core.int)]]
  }),
  methods: () => ({
    get: [core.int, [core.int]],
    sublist: [core.List$(core.int), [core.int], [core.int]]
  }),
  statics: () => ({_create1: [NativeInt8List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeInt8List, ['get', 'sublist']);
NativeInt8List[dart.metadata] = () => [dart.const(new _js_helper.Native("Int8Array"))];
class NativeUint16List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint16List._create1(_checkLength(length));
  }
  static fromList(list) {
    return NativeUint16List._create1(_ensureNativeList(list));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeUint16List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Uint16Array(arg), NativeUint16List);
  }
}
NativeUint16List[dart.implements] = () => [typed_data.Uint16List];
dart.setSignature(NativeUint16List, {
  constructors: () => ({
    new: [NativeUint16List, [core.int]],
    fromList: [NativeUint16List, [core.List$(core.int)]]
  }),
  methods: () => ({
    get: [core.int, [core.int]],
    sublist: [core.List$(core.int), [core.int], [core.int]]
  }),
  statics: () => ({_create1: [NativeUint16List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint16List, ['get', 'sublist']);
NativeUint16List[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint16Array"))];
class NativeUint32List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint32List._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeUint32List._create1(_ensureNativeList(elements));
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeUint32List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Uint32Array(arg), NativeUint32List);
  }
}
NativeUint32List[dart.implements] = () => [typed_data.Uint32List];
dart.setSignature(NativeUint32List, {
  constructors: () => ({
    new: [NativeUint32List, [core.int]],
    fromList: [NativeUint32List, [core.List$(core.int)]]
  }),
  methods: () => ({
    get: [core.int, [core.int]],
    sublist: [core.List$(core.int), [core.int], [core.int]]
  }),
  statics: () => ({_create1: [NativeUint32List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint32List, ['get', 'sublist']);
NativeUint32List[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint32Array"))];
class NativeUint8ClampedList extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint8ClampedList._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeUint8ClampedList._create1(_ensureNativeList(elements));
  }
  get length() {
    return this.length;
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeUint8ClampedList._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Uint8ClampedArray(arg), NativeUint8ClampedList);
  }
}
NativeUint8ClampedList[dart.implements] = () => [typed_data.Uint8ClampedList];
dart.setSignature(NativeUint8ClampedList, {
  constructors: () => ({
    new: [NativeUint8ClampedList, [core.int]],
    fromList: [NativeUint8ClampedList, [core.List$(core.int)]]
  }),
  methods: () => ({
    get: [core.int, [core.int]],
    sublist: [core.List$(core.int), [core.int], [core.int]]
  }),
  statics: () => ({_create1: [NativeUint8ClampedList, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint8ClampedList, ['get', 'sublist', 'length']);
NativeUint8ClampedList[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint8ClampedArray,CanvasPixelArray"))];
class NativeUint8List extends NativeTypedArrayOfInt {
  static new(length) {
    return NativeUint8List._create1(_checkLength(length));
  }
  static fromList(elements) {
    return NativeUint8List._create1(_ensureNativeList(elements));
  }
  get length() {
    return this.length;
  }
  get(index) {
    this[_checkIndex](index, this.length);
    return this[index];
  }
  sublist(start, end) {
    if (end === void 0) end = null;
    end = this[_checkSublistArguments](start, end, this.length);
    let source = this.subarray(start, end);
    return NativeUint8List._create1(source);
  }
  static _create1(arg) {
    return dart.as(new Uint8Array(arg), NativeUint8List);
  }
}
NativeUint8List[dart.implements] = () => [typed_data.Uint8List];
dart.setSignature(NativeUint8List, {
  constructors: () => ({
    new: [NativeUint8List, [core.int]],
    fromList: [NativeUint8List, [core.List$(core.int)]]
  }),
  methods: () => ({
    get: [core.int, [core.int]],
    sublist: [core.List$(core.int), [core.int], [core.int]]
  }),
  statics: () => ({_create1: [NativeUint8List, [dart.dynamic]]}),
  names: ['_create1']
});
dart.defineExtensionMembers(NativeUint8List, ['get', 'sublist', 'length']);
NativeUint8List[dart.metadata] = () => [dart.const(new _js_helper.Native("Uint8Array,!nonleaf"))];
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
  splat(v) {
    this.NativeFloat32x4(v, v, v, v);
  }
  zero() {
    this._truncated(0.0, 0.0, 0.0, 0.0);
  }
  static fromInt32x4Bits(i) {
    NativeFloat32x4._uint32view.set(0, i.x);
    NativeFloat32x4._uint32view.set(1, i.y);
    NativeFloat32x4._uint32view.set(2, i.z);
    NativeFloat32x4._uint32view.set(3, i.w);
    return new NativeFloat32x4._truncated(NativeFloat32x4._list.get(0), NativeFloat32x4._list.get(1), NativeFloat32x4._list.get(2), NativeFloat32x4._list.get(3));
  }
  fromFloat64x2(v) {
    this._truncated(dart.as(NativeFloat32x4._truncate(v.x), core.double), dart.as(NativeFloat32x4._truncate(v.y), core.double), 0.0, 0.0);
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
  abs() {
    let _x = this.x[dartx.abs]();
    let _y = this.y[dartx.abs]();
    let _z = this.z[dartx.abs]();
    let _w = this.w[dartx.abs]();
    return new NativeFloat32x4._truncated(_x, _y, _z, _w);
  }
}
NativeFloat32x4[dart.implements] = () => [typed_data.Float32x4];
dart.defineNamedConstructor(NativeFloat32x4, 'splat');
dart.defineNamedConstructor(NativeFloat32x4, 'zero');
dart.defineNamedConstructor(NativeFloat32x4, 'fromFloat64x2');
dart.defineNamedConstructor(NativeFloat32x4, '_truncated');
dart.setSignature(NativeFloat32x4, {
  constructors: () => ({
    NativeFloat32x4: [NativeFloat32x4, [core.double, core.double, core.double, core.double]],
    splat: [NativeFloat32x4, [core.double]],
    zero: [NativeFloat32x4, []],
    fromInt32x4Bits: [NativeFloat32x4, [typed_data.Int32x4]],
    fromFloat64x2: [NativeFloat32x4, [typed_data.Float64x2]],
    _truncated: [NativeFloat32x4, [core.double, core.double, core.double, core.double]]
  }),
  methods: () => ({abs: [typed_data.Float32x4, []]}),
  statics: () => ({_truncate: [dart.dynamic, [dart.dynamic]]}),
  names: ['_truncate']
});
dart.defineLazyProperties(NativeFloat32x4, {
  get _list() {
    return NativeFloat32List.new(4);
  },
  get _uint32view() {
    return NativeFloat32x4._list.buffer.asUint32List();
  }
});
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
  bool(x, y, z, w) {
    this.x = dart.notNull(x) ? -1 : 0;
    this.y = dart.notNull(y) ? -1 : 0;
    this.z = dart.notNull(z) ? -1 : 0;
    this.w = dart.notNull(w) ? -1 : 0;
  }
  static fromFloat32x4Bits(f) {
    let floatList = NativeFloat32x4._list;
    floatList.set(0, f.x);
    floatList.set(1, f.y);
    floatList.set(2, f.z);
    floatList.set(3, f.w);
    let view = dart.as(floatList.buffer.asInt32List(), NativeInt32List);
    return new NativeInt32x4._truncated(view.get(0), view.get(1), view.get(2), view.get(3));
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
dart.defineNamedConstructor(NativeInt32x4, 'bool');
dart.defineNamedConstructor(NativeInt32x4, '_truncated');
dart.setSignature(NativeInt32x4, {
  constructors: () => ({
    NativeInt32x4: [NativeInt32x4, [core.int, core.int, core.int, core.int]],
    bool: [NativeInt32x4, [core.bool, core.bool, core.bool, core.bool]],
    fromFloat32x4Bits: [NativeInt32x4, [typed_data.Float32x4]],
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
class NativeFloat64x2 extends core.Object {
  NativeFloat64x2(x, y) {
    this.x = x;
    this.y = y;
    if (!(typeof this.x == 'number')) dart.throw(new core.ArgumentError(this.x));
    if (!(typeof this.y == 'number')) dart.throw(new core.ArgumentError(this.y));
  }
  splat(v) {
    this.NativeFloat64x2(v, v);
  }
  zero() {
    this.splat(0.0);
  }
  fromFloat32x4(v) {
    this.NativeFloat64x2(v.x, v.y);
  }
  toString() {
    return `[${this.x}, ${this.y}]`;
  }
  abs() {
    return new NativeFloat64x2._doubles(this.x[dartx.abs](), this.y[dartx.abs]());
  }
}
NativeFloat64x2[dart.implements] = () => [typed_data.Float64x2];
dart.defineNamedConstructor(NativeFloat64x2, 'splat');
dart.defineNamedConstructor(NativeFloat64x2, 'zero');
dart.defineNamedConstructor(NativeFloat64x2, 'fromFloat32x4');
dart.setSignature(NativeFloat64x2, {
  constructors: () => ({
    NativeFloat64x2: [NativeFloat64x2, [core.double, core.double]],
    splat: [NativeFloat64x2, [core.double]],
    zero: [NativeFloat64x2, []],
    fromFloat32x4: [NativeFloat64x2, [typed_data.Float32x4]]
  }),
  methods: () => ({abs: [typed_data.Float64x2, []]})
});
// Exports:
exports.NativeByteBuffer = NativeByteBuffer;
exports.NativeFloat32x4List = NativeFloat32x4List;
exports.NativeInt32x4List = NativeInt32x4List;
exports.NativeFloat64x2List = NativeFloat64x2List;
exports.NativeTypedData = NativeTypedData;
exports.NativeByteData = NativeByteData;
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
