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
let _isolate_helper = require("./_isolate_helper");
let async = require("./async");
let dartx = dart.dartx;
class Capability extends core.Object {
  static new() {
    return new _isolate_helper.CapabilityImpl();
  }
}
dart.setSignature(Capability, {
  constructors: () => ({new: [Capability, []]})
});
class Isolate extends core.Object {
  Isolate(controlPort, {pauseCapability = null, terminateCapability = null} = {}) {
    this.controlPort = controlPort;
    this.pauseCapability = pauseCapability;
    this.terminateCapability = terminateCapability;
  }
  static spawn(entryPoint, message, {paused = false} = {}) {
    try {
      return _isolate_helper.IsolateNatives.spawnFunction(entryPoint, message, paused).then(dart.fn(msg => new Isolate(dart.as(msg[dartx.get](1), SendPort), {pauseCapability: dart.as(msg[dartx.get](2), Capability), terminateCapability: dart.as(msg[dartx.get](3), Capability)}), Isolate, [core.List]));
    } catch (e) {
      let st = dart.stackTrace(e);
      return async.Future$(Isolate).error(e, st);
    }

  }
}
dart.setSignature(Isolate, {
  constructors: () => ({Isolate: [Isolate, [SendPort], {pauseCapability: Capability, terminateCapability: Capability}]}),
  statics: () => ({spawn: [async.Future$(Isolate), [dart.functionType(dart.void, [dart.dynamic]), dart.dynamic], {paused: core.bool}]}),
  names: ['spawn']
});
Isolate.IMMEDIATE = 0;
Isolate.BEFORE_NEXT_EVENT = 1;
class SendPort extends core.Object {}
SendPort[dart.implements] = () => [Capability];
class ReceivePort extends core.Object {
  static new() {
    return new _isolate_helper.ReceivePortImpl();
  }
}
ReceivePort[dart.implements] = () => [async.Stream];
dart.setSignature(ReceivePort, {
  constructors: () => ({new: [ReceivePort, []]})
});
class RawReceivePort extends core.Object {
  static new(handler) {
    if (handler === void 0) handler = null;
    return new _isolate_helper.RawReceivePortImpl(handler);
  }
}
dart.setSignature(RawReceivePort, {
  constructors: () => ({new: [RawReceivePort, [], [dart.functionType(dart.void, [dart.dynamic])]]})
});
// Exports:
exports.Capability = Capability;
exports.Isolate = Isolate;
exports.SendPort = SendPort;
exports.ReceivePort = ReceivePort;
exports.RawReceivePort = RawReceivePort;
