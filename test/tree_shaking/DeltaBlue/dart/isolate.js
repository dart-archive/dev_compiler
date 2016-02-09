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
let _isolate_helper = require("dart/_isolate_helper");
let async = require("dart/async");
let dartx = dart.dartx;
// /* Incoming: Isolate.pauseCapability (FieldElementImpl @ dart:isolate), Isolate.terminateCapability (FieldElementImpl @ dart:isolate), Isolate. (ConstructorElementImpl @ dart:isolate), Isolate.pause (MethodElementImpl @ dart:isolate), Isolate._pause (MethodElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), Isolate.resume (MethodElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), Isolate.kill (MethodElementImpl @ dart:isolate), SendPort (ClassElementImpl @ dart:isolate), Capability. (ConstructorElementImpl @ dart:isolate/capability.dart), _IsolateContext.pauseCapability (ConstFieldElementImpl @ dart:_isolate_helper), _IsolateContext.terminateCapability (ConstFieldElementImpl @ dart:_isolate_helper), _IsolateContext.pauseTokens (FieldElementImpl @ dart:_isolate_helper), _IsolateContext.addPause (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.removePause (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.setErrorsFatal (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.handleKill (MethodElementImpl @ dart:_isolate_helper), IsolateNatives.currentIsolate (FieldElementImpl @ dart:_isolate_helper), IsolateNatives._startIsolate (MethodElementImpl @ dart:_isolate_helper), _BaseSendPort (ClassElementImpl @ dart:_isolate_helper), _NativeJsSendPort (ClassElementImpl @ dart:_isolate_helper), _WorkerSendPort (ClassElementImpl @ dart:_isolate_helper), CapabilityImpl (ClassElementImpl @ dart:_isolate_helper) */
class Capability extends core.Object {
  static new() {
    return new _isolate_helper.CapabilityImpl();
  }
}
dart.setSignature(Capability, {
  constructors: () => ({new: [Capability, []]})
});
// /* Incoming: Isolate. (ConstructorElementImpl @ dart:isolate), Isolate.current (FieldElementImpl @ dart:isolate), Isolate.spawn (MethodElementImpl @ dart:isolate), Isolate.spawnUri (MethodElementImpl @ dart:isolate), Isolate.errors (FieldElementImpl @ dart:isolate), Isolate._currentIsolateCache (ConstFieldElementImpl @ dart:isolate), _IsolateContext.handlePing (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.handleKill (MethodElementImpl @ dart:_isolate_helper), IsolateNatives.currentIsolate (FieldElementImpl @ dart:_isolate_helper) */
class Isolate extends core.Object {
  Isolate(controlPort, {pauseCapability = null, terminateCapability = null} = {}) {
    this.controlPort = controlPort;
    this.pauseCapability = pauseCapability;
    this.terminateCapability = terminateCapability;
  }
}
dart.setSignature(Isolate, {
  constructors: () => ({Isolate: [Isolate, [SendPort], {pauseCapability: Capability, terminateCapability: Capability}]})
});
Isolate.IMMEDIATE = 0;
Isolate.BEFORE_NEXT_EVENT = 1;
Isolate.AS_EVENT = 2;
// /* Incoming: Isolate.controlPort (FieldElementImpl @ dart:isolate), Isolate. (ConstructorElementImpl @ dart:isolate), Isolate._pause (MethodElementImpl @ dart:isolate), Isolate.resume (MethodElementImpl @ dart:isolate), Isolate.addOnExitListener (MethodElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), Isolate.removeOnExitListener (MethodElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), Isolate.setErrorsFatal (MethodElementImpl @ dart:isolate), Isolate.kill (MethodElementImpl @ dart:isolate), Isolate.ping (MethodElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), Isolate.addErrorListener (MethodElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), Isolate.removeErrorListener (MethodElementImpl @ dart:isolate), message (LocalVariableElementImpl @ dart:isolate), Isolate.errors (FieldElementImpl @ dart:isolate), ReceivePort.sendPort (FieldElementImpl @ dart:isolate), RawReceivePort.sendPort (FieldElementImpl @ dart:isolate), _IsolateContext.errorPorts (FieldElementImpl @ dart:_isolate_helper), _IsolateContext.addDoneListener (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.removeDoneListener (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.handlePing (MethodElementImpl @ dart:_isolate_helper), respond (FunctionElementImpl @ dart:_isolate_helper), _IsolateContext.addErrorListener (MethodElementImpl @ dart:_isolate_helper), _IsolateContext.removeErrorListener (MethodElementImpl @ dart:_isolate_helper), port (LocalVariableElementImpl @ dart:_isolate_helper), _IsolateContext.handleUncaughtError (MethodElementImpl @ dart:_isolate_helper), port (LocalVariableElementImpl @ dart:_isolate_helper), _IsolateContext.kill (MethodElementImpl @ dart:_isolate_helper), port (LocalVariableElementImpl @ dart:_isolate_helper), IsolateNatives._processWorkerMessage (MethodElementImpl @ dart:_isolate_helper), signalReply (LocalVariableElementImpl @ dart:_isolate_helper), IsolateNatives.spawn (MethodElementImpl @ dart:_isolate_helper), IsolateNatives._startWorker (MethodElementImpl @ dart:_isolate_helper), IsolateNatives._startNonWorker (MethodElementImpl @ dart:_isolate_helper), IsolateNatives.currentIsolate (FieldElementImpl @ dart:_isolate_helper), IsolateNatives._startIsolate (MethodElementImpl @ dart:_isolate_helper), IsolateNatives._spawnWorker (MethodElementImpl @ dart:_isolate_helper), _BaseSendPort (ClassElementImpl @ dart:_isolate_helper), _BaseSendPort._checkReplyTo (MethodElementImpl @ dart:_isolate_helper), _NativeJsSendPort (ClassElementImpl @ dart:_isolate_helper), _WorkerSendPort (ClassElementImpl @ dart:_isolate_helper), RawReceivePortImpl.sendPort (FieldElementImpl @ dart:_isolate_helper), ReceivePortImpl.sendPort (FieldElementImpl @ dart:_isolate_helper), _Deserializer.deserialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeSendPort (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), result (LocalVariableElementImpl @ dart:_isolate_helper/isolate_serialization.dart), _Deserializer.deserializeRawSendPort (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart), result (LocalVariableElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
class SendPort extends core.Object {}
SendPort[dart.implements] = () => [Capability];
// /* Incoming: ReceivePort. (ConstructorElementImpl @ dart:isolate), ReceivePort.fromRawReceivePort (ConstructorElementImpl @ dart:isolate), port (LocalVariableElementImpl @ dart:_isolate_helper), IsolateNatives.spawn (MethodElementImpl @ dart:_isolate_helper), signalReply (LocalVariableElementImpl @ dart:_isolate_helper), ReceivePortImpl (ClassElementImpl @ dart:_isolate_helper) */
class ReceivePort extends core.Object {
  static new() {
    return new _isolate_helper.ReceivePortImpl();
  }
}
ReceivePort[dart.implements] = () => [async.Stream];
dart.setSignature(ReceivePort, {
  constructors: () => ({new: [ReceivePort, []]})
});
// /* Incoming: port (LocalVariableElementImpl @ dart:isolate), Isolate.errors (FieldElementImpl @ dart:isolate), ReceivePort.fromRawReceivePort (ConstructorElementImpl @ dart:isolate), RawReceivePort. (ConstructorElementImpl @ dart:isolate), RawReceivePortImpl (ClassElementImpl @ dart:_isolate_helper), ReceivePortImpl._rawPort (FieldElementImpl @ dart:_isolate_helper), ReceivePortImpl.fromRawReceivePort (ConstructorElementImpl @ dart:_isolate_helper), ReceivePortImpl.close (MethodElementImpl @ dart:_isolate_helper), ReceivePortImpl.sendPort (FieldElementImpl @ dart:_isolate_helper), _Serializer.serialize (MethodElementImpl @ dart:_isolate_helper/isolate_serialization.dart) */
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
