dart_library.library('dart/isolate', null, /* Imports */[
  'dart/_runtime',
  'dart/core',
  'dart/async'
], /* Lazy imports */[
  'dart/_isolate_helper'
], function(exports, dart, core, async, _isolate_helper) {
  'use strict';
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
});
