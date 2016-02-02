dart_library.library('dart/_native_typed_data', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/typed_data',
  'dart/_js_helper'
], /* Lazy imports */[
], function(exports, dart, core, typed_data, _js_helper) {
  'use strict';
  let dartx = dart.dartx;
  class NativeByteBuffer extends core.Object {}
  NativeByteBuffer[dart.implements] = () => [typed_data.ByteBuffer];
  NativeByteBuffer[dart.metadata] = () => [dart.const(new _js_helper.Native("ArrayBuffer"))];
  class NativeTypedData extends core.Object {}
  NativeTypedData[dart.implements] = () => [typed_data.TypedData];
  NativeTypedData[dart.metadata] = () => [dart.const(new _js_helper.Native("ArrayBufferView"))];
  // Exports:
  exports.NativeByteBuffer = NativeByteBuffer;
  exports.NativeTypedData = NativeTypedData;
});
