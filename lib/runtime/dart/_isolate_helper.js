dart_library.library('dart/_isolate_helper', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core',
  'dart/_interceptors',
  'dart/_js_helper',
  'dart/isolate',
  'dart/_foreign_helper',
  'dart/collection',
  'dart/async'
], /* Lazy imports */[
  'dart/_native_typed_data',
  'dart/_js_embedded_names'
], function(exports, dart, core, _interceptors, _js_helper, isolate, _foreign_helper, collection, async, _native_typed_data, _js_embedded_names) {
  'use strict';
  let dartx = dart.dartx;
  function _serializeMessage(message) {
    return dart.dcall(new _Serializer().serialize, message);
  }
  dart.fn(_serializeMessage);
  function _deserializeMessage(message) {
    return dart.dcall(new _Deserializer().deserialize, message);
  }
  dart.fn(_deserializeMessage);
  function _clone(message) {
    let serializer = new _Serializer({serializeSendPorts: false});
    let deserializer = new _Deserializer();
    return dart.dcall(deserializer.deserialize, dart.dcall(serializer.serialize, message));
  }
  dart.fn(_clone);
  let _serializeSendPorts = Symbol('_serializeSendPorts');
  let _workerId = Symbol('_workerId');
  let _isolateId = Symbol('_isolateId');
  let _receivePortId = Symbol('_receivePortId');
  let _id = Symbol('_id');
  let _receivePort = Symbol('_receivePort');
  class _Serializer extends core.Object {
    _Serializer(opts) {
      let serializeSendPorts = opts && 'serializeSendPorts' in opts ? opts.serializeSendPorts : true;
      this.serializedObjectIds = core.Map$(dart.dynamic, core.int).identity();
      this[_serializeSendPorts] = dart.as(serializeSendPorts, core.bool);
    }
    serialize(x) {
      if (dart.notNull(dart.dcall(this.isPrimitive, x)))
        return dart.dcall(this.serializePrimitive, x);
      let serializationId = this.serializedObjectIds.get(x);
      if (serializationId != null)
        return dart.dcall(this.makeRef, serializationId);
      serializationId = this.serializedObjectIds.length;
      this.serializedObjectIds.set(x, serializationId);
      if (dart.is(x, _native_typed_data.NativeByteBuffer))
        return dart.dcall(this.serializeByteBuffer, x);
      if (dart.is(x, _native_typed_data.NativeTypedData))
        return dart.dcall(this.serializeTypedData, x);
      if (dart.is(x, _interceptors.JSIndexable))
        return dart.dcall(this.serializeJSIndexable, x);
      if (dart.is(x, _js_helper.InternalMap))
        return dart.dcall(this.serializeMap, x);
      if (dart.is(x, _interceptors.JSObject))
        return dart.dcall(this.serializeJSObject, x);
      if (dart.is(x, _interceptors.Interceptor))
        dart.dcall(this.unsupported, x);
      if (dart.is(x, isolate.RawReceivePort)) {
        dart.dcall(this.unsupported, x, "RawReceivePorts can't be transmitted:");
      }
      if (dart.is(x, _NativeJsSendPort))
        return dart.dcall(this.serializeJsSendPort, x);
      if (dart.is(x, _WorkerSendPort))
        return dart.dcall(this.serializeWorkerSendPort, x);
      if (dart.is(x, core.Function))
        return dart.dcall(this.serializeClosure, x);
      return dart.dcall(this.serializeDartObject, x);
    }
    unsupported(x, message) {
      if (message === void 0)
        message = null;
      if (message == null)
        message = "Can't transmit:";
      dart.throw(new core.UnsupportedError(`${message} ${x}`));
    }
    makeRef(serializationId) {
      return ["ref", serializationId];
    }
    isPrimitive(x) {
      return x == null || typeof x == 'string' || typeof x == 'number' || typeof x == 'boolean';
    }
    serializePrimitive(primitive) {
      return primitive;
    }
    serializeByteBuffer(buffer) {
      return ["buffer", buffer];
    }
    serializeTypedData(data) {
      return ["typed", data];
    }
    serializeJSIndexable(indexable) {
      dart.assert(!(typeof indexable == 'string'));
      let serialized = dart.as(dart.dcall(this.serializeArray, indexable), core.List);
      if (dart.is(indexable, _interceptors.JSFixedArray))
        return ["fixed", serialized];
      if (dart.is(indexable, _interceptors.JSExtendableArray))
        return ["extendable", serialized];
      if (dart.is(indexable, _interceptors.JSMutableArray))
        return ["mutable", serialized];
      if (dart.is(indexable, _interceptors.JSArray))
        return ["const", serialized];
      dart.dcall(this.unsupported, indexable, "Can't serialize indexable: ");
      return null;
    }
    serializeArray(x) {
      let serialized = [];
      serialized[dartx.length] = x[dartx.length];
      for (let i = 0; dart.notNull(i) < dart.notNull(x[dartx.length]); i = dart.notNull(i) + 1) {
        serialized[dartx.set](i, dart.dcall(this.serialize, x[dartx.get](i)));
      }
      return serialized;
    }
    serializeArrayInPlace(x) {
      for (let i = 0; dart.notNull(i) < dart.notNull(x[dartx.length]); i = dart.notNull(i) + 1) {
        x[dartx.set](i, dart.dcall(this.serialize, x[dartx.get](i)));
      }
      return x;
    }
    serializeMap(x) {
      let serializeTearOff = dart.bind(this, 'serialize');
      return ['map', dart.dcall(dart.dcall(x.keys[dartx.map], serializeTearOff)[dartx.toList]), dart.dcall(dart.dcall(x.values[dartx.map], serializeTearOff)[dartx.toList])];
    }
    serializeJSObject(x) {
      if (dart.notNull(dart.as(!!x.constructor, core.bool)) && dart.notNull(dart.as(x.constructor !== Object, core.bool))) {
        dart.dcall(this.unsupported, x, "Only plain JS Objects are supported:");
      }
      let keys = dart.as(Object.keys(x), core.List);
      let values = [];
      values[dartx.length] = keys[dartx.length];
      for (let i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
        values[dartx.set](i, dart.dcall(this.serialize, x[keys[dartx.get](i)]));
      }
      return ['js-object', keys, values];
    }
    serializeWorkerSendPort(x) {
      if (dart.notNull(this[_serializeSendPorts])) {
        return ['sendport', x[_workerId], x[_isolateId], x[_receivePortId]];
      }
      return ['raw sendport', x];
    }
    serializeJsSendPort(x) {
      if (dart.notNull(this[_serializeSendPorts])) {
        let workerId = exports._globalState.currentManagerId;
        return ['sendport', workerId, x[_isolateId], x[_receivePort][_id]];
      }
      return ['raw sendport', x];
    }
    serializeCapability(x) {
      return ['capability', x[_id]];
    }
    serializeClosure(x) {
      let name = dart.dcall(IsolateNatives._getJSFunctionName, x);
      if (name == null) {
        dart.dcall(this.unsupported, x, "Closures can't be transmitted:");
      }
      return ['function', name];
    }
    serializeDartObject(x) {
      let classExtractor = dart.dcall(_foreign_helper.JS_EMBEDDED_GLOBAL, '', _js_embedded_names.CLASS_ID_EXTRACTOR);
      let fieldsExtractor = dart.dcall(_foreign_helper.JS_EMBEDDED_GLOBAL, '', _js_embedded_names.CLASS_FIELDS_EXTRACTOR);
      let classId = dart.as(classExtractor(x), core.String);
      let fields = dart.as(fieldsExtractor(x), core.List);
      return ['dart', classId, dart.dcall(this.serializeArrayInPlace, fields)];
    }
  }
  dart.setSignature(_Serializer, {
    constructors: () => ({_Serializer: [_Serializer, [], {serializeSendPorts: dart.dynamic}]}),
    methods: () => ({
      serialize: [dart.dynamic, [dart.dynamic]],
      unsupported: [dart.void, [dart.dynamic], [core.String]],
      makeRef: [dart.dynamic, [core.int]],
      isPrimitive: [core.bool, [dart.dynamic]],
      serializePrimitive: [dart.dynamic, [dart.dynamic]],
      serializeByteBuffer: [dart.dynamic, [_native_typed_data.NativeByteBuffer]],
      serializeTypedData: [dart.dynamic, [_native_typed_data.NativeTypedData]],
      serializeJSIndexable: [dart.dynamic, [_interceptors.JSIndexable]],
      serializeArray: [dart.dynamic, [_interceptors.JSArray]],
      serializeArrayInPlace: [dart.dynamic, [_interceptors.JSArray]],
      serializeMap: [dart.dynamic, [core.Map]],
      serializeJSObject: [dart.dynamic, [_interceptors.JSObject]],
      serializeWorkerSendPort: [dart.dynamic, [_WorkerSendPort]],
      serializeJsSendPort: [dart.dynamic, [_NativeJsSendPort]],
      serializeCapability: [dart.dynamic, [CapabilityImpl]],
      serializeClosure: [dart.dynamic, [core.Function]],
      serializeDartObject: [dart.dynamic, [dart.dynamic]]
    })
  });
  let _adjustSendPorts = Symbol('_adjustSendPorts');
  class _Deserializer extends core.Object {
    _Deserializer(opts) {
      let adjustSendPorts = opts && 'adjustSendPorts' in opts ? opts.adjustSendPorts : true;
      this.deserializedObjects = core.List.new();
      this[_adjustSendPorts] = dart.as(adjustSendPorts, core.bool);
    }
    deserialize(x) {
      if (dart.notNull(dart.dcall(this.isPrimitive, x)))
        return dart.dcall(this.deserializePrimitive, x);
      if (!dart.is(x, _interceptors.JSArray))
        dart.throw(new core.ArgumentError(`Bad serialized message: ${x}`));
      switch (dart.dload(x, 'first')) {
        case "ref":
        {
          return dart.dcall(this.deserializeRef, x);
        }
        case "buffer":
        {
          return dart.dcall(this.deserializeByteBuffer, x);
        }
        case "typed":
        {
          return dart.dcall(this.deserializeTypedData, x);
        }
        case "fixed":
        {
          return dart.dcall(this.deserializeFixed, x);
        }
        case "extendable":
        {
          return dart.dcall(this.deserializeExtendable, x);
        }
        case "mutable":
        {
          return dart.dcall(this.deserializeMutable, x);
        }
        case "const":
        {
          return dart.dcall(this.deserializeConst, x);
        }
        case "map":
        {
          return dart.dcall(this.deserializeMap, x);
        }
        case "sendport":
        {
          return dart.dcall(this.deserializeSendPort, x);
        }
        case "raw sendport":
        {
          return dart.dcall(this.deserializeRawSendPort, x);
        }
        case "js-object":
        {
          return dart.dcall(this.deserializeJSObject, x);
        }
        case "function":
        {
          return dart.dcall(this.deserializeClosure, x);
        }
        case "dart":
        {
          return dart.dcall(this.deserializeDartObject, x);
        }
        default:
        {
          dart.throw(`couldn't deserialize: ${x}`);
        }
      }
    }
    isPrimitive(x) {
      return x == null || typeof x == 'string' || typeof x == 'number' || typeof x == 'boolean';
    }
    deserializePrimitive(x) {
      return x;
    }
    deserializeRef(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'ref'));
      let serializationId = dart.as(dart.dindex(x, 1), core.int);
      return this.deserializedObjects[dartx.get](serializationId);
    }
    deserializeByteBuffer(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'buffer'));
      let result = dart.as(dart.dindex(x, 1), _native_typed_data.NativeByteBuffer);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return result;
    }
    deserializeTypedData(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'typed'));
      let result = dart.as(dart.dindex(x, 1), _native_typed_data.NativeTypedData);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return result;
    }
    deserializeArrayInPlace(x) {
      for (let i = 0; dart.notNull(i) < dart.notNull(x[dartx.length]); i = dart.notNull(i) + 1) {
        x[dartx.set](i, dart.dcall(this.deserialize, x[dartx.get](i)));
      }
      return x;
    }
    deserializeFixed(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'fixed'));
      let result = dart.as(dart.dindex(x, 1), core.List);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return _interceptors.JSArray.markFixed(dart.dcall(this.deserializeArrayInPlace, result));
    }
    deserializeExtendable(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'extendable'));
      let result = dart.as(dart.dindex(x, 1), core.List);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return _interceptors.JSArray.markGrowable(dart.dcall(this.deserializeArrayInPlace, result));
    }
    deserializeMutable(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'mutable'));
      let result = dart.as(dart.dindex(x, 1), core.List);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return dart.dcall(this.deserializeArrayInPlace, result);
    }
    deserializeConst(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'const'));
      let result = dart.as(dart.dindex(x, 1), core.List);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return _interceptors.JSArray.markFixed(dart.dcall(this.deserializeArrayInPlace, result));
    }
    deserializeMap(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'map'));
      let keys = dart.as(dart.dindex(x, 1), core.List);
      let values = dart.as(dart.dindex(x, 2), core.List);
      let result = dart.map();
      dart.dcall(this.deserializedObjects[dartx.add], result);
      keys = dart.dcall(dart.dcall(keys[dartx.map], dart.bind(this, 'deserialize'))[dartx.toList]);
      for (let i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
        result.set(keys[dartx.get](i), dart.dcall(this.deserialize, values[dartx.get](i)));
      }
      return result;
    }
    deserializeSendPort(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'sendport'));
      let managerId = dart.as(dart.dindex(x, 1), core.int);
      let isolateId = dart.as(dart.dindex(x, 2), core.int);
      let receivePortId = dart.as(dart.dindex(x, 3), core.int);
      let result = null;
      if (managerId == exports._globalState.currentManagerId) {
        let isolate = exports._globalState.isolates.get(isolateId);
        if (isolate == null)
          return null;
        let receivePort = dart.dsend(isolate, 'lookup', receivePortId);
        if (receivePort == null)
          return null;
        result = new _NativeJsSendPort(dart.as(receivePort, RawReceivePortImpl), isolateId);
      } else {
        result = new _WorkerSendPort(managerId, isolateId, receivePortId);
      }
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return result;
    }
    deserializeRawSendPort(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'raw sendport'));
      let result = dart.as(dart.dindex(x, 1), isolate.SendPort);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return result;
    }
    deserializeJSObject(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'js-object'));
      let keys = dart.as(dart.dindex(x, 1), core.List);
      let values = dart.as(dart.dindex(x, 2), core.List);
      let o = {};
      dart.dcall(this.deserializedObjects[dartx.add], o);
      for (let i = 0; dart.notNull(i) < dart.notNull(keys[dartx.length]); i = dart.notNull(i) + 1) {
        o[keys[dartx.get](i)] = dart.dcall(this.deserialize, values[dartx.get](i));
      }
      return o;
    }
    deserializeClosure(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'function'));
      let name = dart.as(dart.dindex(x, 1), core.String);
      let result = dart.as(dart.dcall(IsolateNatives._getJSFunctionFromName, name), core.Function);
      dart.dcall(this.deserializedObjects[dartx.add], result);
      return result;
    }
    deserializeDartObject(x) {
      dart.assert(dart.equals(dart.dindex(x, 0), 'dart'));
      let classId = dart.as(dart.dindex(x, 1), core.String);
      let fields = dart.as(dart.dindex(x, 2), core.List);
      let instanceFromClassId = dart.dcall(_foreign_helper.JS_EMBEDDED_GLOBAL, '', _js_embedded_names.INSTANCE_FROM_CLASS_ID);
      let initializeObject = dart.dcall(_foreign_helper.JS_EMBEDDED_GLOBAL, '', _js_embedded_names.INITIALIZE_EMPTY_INSTANCE);
      let emptyInstance = instanceFromClassId(classId);
      dart.dcall(this.deserializedObjects[dartx.add], emptyInstance);
      dart.dcall(this.deserializeArrayInPlace, fields);
      return initializeObject(classId, emptyInstance, fields);
    }
  }
  dart.setSignature(_Deserializer, {
    constructors: () => ({_Deserializer: [_Deserializer, [], {adjustSendPorts: dart.dynamic}]}),
    methods: () => ({
      deserialize: [dart.dynamic, [dart.dynamic]],
      isPrimitive: [core.bool, [dart.dynamic]],
      deserializePrimitive: [dart.dynamic, [dart.dynamic]],
      deserializeRef: [dart.dynamic, [dart.dynamic]],
      deserializeByteBuffer: [_native_typed_data.NativeByteBuffer, [dart.dynamic]],
      deserializeTypedData: [_native_typed_data.NativeTypedData, [dart.dynamic]],
      deserializeArrayInPlace: [core.List, [_interceptors.JSArray]],
      deserializeFixed: [core.List, [dart.dynamic]],
      deserializeExtendable: [core.List, [dart.dynamic]],
      deserializeMutable: [core.List, [dart.dynamic]],
      deserializeConst: [core.List, [dart.dynamic]],
      deserializeMap: [core.Map, [dart.dynamic]],
      deserializeSendPort: [isolate.SendPort, [dart.dynamic]],
      deserializeRawSendPort: [isolate.SendPort, [dart.dynamic]],
      deserializeJSObject: [dart.dynamic, [dart.dynamic]],
      deserializeClosure: [core.Function, [dart.dynamic]],
      deserializeDartObject: [dart.dynamic, [dart.dynamic]]
    })
  });
  function _callInIsolate(isolate, func) {
    let result = dart.dcall(isolate.eval, func);
    dart.dcall(exports._globalState.topEventLoop.run);
    return result;
  }
  dart.fn(_callInIsolate, () => dart.definiteFunctionType(dart.dynamic, [_IsolateContext, core.Function]));
  let _activeJsAsyncCount = Symbol('_activeJsAsyncCount');
  function enterJsAsync() {
    let o = exports._globalState.topEventLoop;
    o[_activeJsAsyncCount] = dart.notNull(o[_activeJsAsyncCount]) + 1;
  }
  dart.fn(enterJsAsync);
  function leaveJsAsync() {
    let o = exports._globalState.topEventLoop;
    o[_activeJsAsyncCount] = dart.notNull(o[_activeJsAsyncCount]) - 1;
    dart.assert(dart.notNull(exports._globalState.topEventLoop[_activeJsAsyncCount]) >= 0);
  }
  dart.fn(leaveJsAsync);
  function isWorker() {
    return exports._globalState.isWorker;
  }
  dart.fn(isWorker, core.bool, []);
  function _currentIsolate() {
    return exports._globalState.currentContext;
  }
  dart.fn(_currentIsolate, () => dart.definiteFunctionType(_IsolateContext, []));
  function startRootIsolate(entry, args) {
    args = args;
    if (args == null)
      args = [];
    if (!dart.is(args, core.List)) {
      dart.throw(new core.ArgumentError(`Arguments to main must be a List: ${args}`));
    }
    exports._globalState = new _Manager(dart.as(entry, core.Function));
    if (dart.notNull(exports._globalState.isWorker))
      return;
    let rootContext = new _IsolateContext();
    exports._globalState.rootContext = dart.as(rootContext, _IsolateContext);
    exports._globalState.currentContext = dart.as(rootContext, _IsolateContext);
    if (dart.is(entry, _MainFunctionArgs)) {
      dart.dsend(rootContext, 'eval', dart.fn(() => {
        dart.dcall(entry, args);
      }));
    } else if (dart.is(entry, _MainFunctionArgsMessage)) {
      dart.dsend(rootContext, 'eval', dart.fn(() => {
        dart.dcall(entry, args, null);
      }));
    } else {
      dart.dsend(rootContext, 'eval', entry);
    }
    dart.dcall(exports._globalState.topEventLoop.run);
  }
  dart.fn(startRootIsolate, dart.void, [dart.dynamic, dart.dynamic]);
  dart.copyProperties(exports, {
    get _globalState() {
      return dart.as(dart.globalState, _Manager);
    },
    set _globalState(val) {
      dart.globalState = val;
    }
  });
  let _nativeDetectEnvironment = Symbol('_nativeDetectEnvironment');
  let _nativeInitWorkerMessageHandler = Symbol('_nativeInitWorkerMessageHandler');
  class _Manager extends core.Object {
    get useWorkers() {
      return this.supportsWorkers;
    }
    _Manager(entry) {
      this.entry = entry;
      this.nextIsolateId = 0;
      this.currentManagerId = 0;
      this.nextManagerId = 1;
      this.currentContext = null;
      this.rootContext = null;
      this.topEventLoop = null;
      this.fromCommandLine = null;
      this.isWorker = null;
      this.supportsWorkers = null;
      this.isolates = null;
      this.mainManager = null;
      this.managers = null;
      dart.dcall(this[_nativeDetectEnvironment]);
      this.topEventLoop = new _EventLoop();
      this.isolates = core.Map$(core.int, _IsolateContext).new();
      this.managers = core.Map$(core.int, dart.dynamic).new();
      if (dart.notNull(this.isWorker)) {
        this.mainManager = new _MainManagerStub();
        dart.dcall(this[_nativeInitWorkerMessageHandler]);
      }
    }
    [_nativeDetectEnvironment]() {
      let isWindowDefined = exports.globalWindow != null;
      let isWorkerDefined = exports.globalWorker != null;
      this.isWorker = !dart.notNull(isWindowDefined) && dart.notNull(exports.globalPostMessageDefined);
      this.supportsWorkers = dart.notNull(this.isWorker) || dart.notNull(isWorkerDefined) && IsolateNatives.thisScript != null;
      this.fromCommandLine = !dart.notNull(isWindowDefined) && !dart.notNull(this.isWorker);
    }
    [_nativeInitWorkerMessageHandler]() {
      let func = (function(f, a) {
        return function(e) {
          f(a, e);
        };
      })(IsolateNatives._processWorkerMessage, this.mainManager);
      self.onmessage = func;
      self.dartPrint = self.dartPrint || (function(serialize) {
        return function(object) {
          if (self.console && self.console.log) {
            self.console.log(object);
          } else {
            self.postMessage(serialize(object));
          }
        };
      })(_Manager._serializePrintMessage);
    }
    static _serializePrintMessage(object) {
      return dart.dcall(_serializeMessage, dart.map({command: "print", msg: object}));
    }
    maybeCloseWorker() {
      if (dart.notNull(this.isWorker) && dart.notNull(this.isolates.isEmpty) && this.topEventLoop[_activeJsAsyncCount] == 0) {
        dart.dcall(this.mainManager.postMessage, dart.dcall(_serializeMessage, dart.map({command: 'close'})));
      }
    }
  }
  dart.setSignature(_Manager, {
    constructors: () => ({_Manager: [_Manager, [core.Function]]}),
    methods: () => ({
      [_nativeDetectEnvironment]: [dart.void, []],
      [_nativeInitWorkerMessageHandler]: [dart.void, []],
      maybeCloseWorker: [dart.void, []]
    }),
    statics: () => ({_serializePrintMessage: [dart.dynamic, [dart.dynamic]]}),
    names: ['_serializePrintMessage']
  });
  let _scheduledControlEvents = Symbol('_scheduledControlEvents');
  let _isExecutingEvent = Symbol('_isExecutingEvent');
  let _updateGlobalState = Symbol('_updateGlobalState');
  let _setGlobals = Symbol('_setGlobals');
  let _addRegistration = Symbol('_addRegistration');
  let _close = Symbol('_close');
  class _IsolateContext extends core.Object {
    _IsolateContext() {
      this.id = (() => {
        let o = exports._globalState, x = o.nextIsolateId;
        o.nextIsolateId = dart.notNull(x) + 1;
        return x;
      })();
      this.ports = core.Map$(core.int, RawReceivePortImpl).new();
      this.weakPorts = core.Set$(core.int).new();
      this.isolateStatics = dart.dcall(_foreign_helper.JS_CREATE_ISOLATE);
      this.controlPort = new RawReceivePortImpl._controlPort();
      this.pauseCapability = isolate.Capability.new();
      this.terminateCapability = isolate.Capability.new();
      this.delayedEvents = dart.list([], _IsolateEvent);
      this.pauseTokens = core.Set$(isolate.Capability).new();
      this.errorPorts = core.Set$(isolate.SendPort).new();
      this.initialized = false;
      this.isPaused = false;
      this.doneHandlers = null;
      this[_scheduledControlEvents] = null;
      this[_isExecutingEvent] = false;
      this.errorsAreFatal = true;
      dart.dcall(this.registerWeak, this.controlPort[_id], this.controlPort);
    }
    addPause(authentification, resume) {
      if (!dart.equals(this.pauseCapability, authentification))
        return;
      if (dart.notNull(dart.dcall(this.pauseTokens.add, resume)) && !dart.notNull(this.isPaused)) {
        this.isPaused = true;
      }
      dart.dcall(this[_updateGlobalState]);
    }
    removePause(resume) {
      if (!dart.notNull(this.isPaused))
        return;
      dart.dcall(this.pauseTokens.remove, resume);
      if (dart.notNull(this.pauseTokens.isEmpty)) {
        while (dart.notNull(this.delayedEvents[dartx.isNotEmpty])) {
          let event = dart.dcall(this.delayedEvents[dartx.removeLast]);
          dart.dcall(exports._globalState.topEventLoop.prequeue, event);
        }
        this.isPaused = false;
      }
      dart.dcall(this[_updateGlobalState]);
    }
    addDoneListener(responsePort) {
      if (this.doneHandlers == null) {
        this.doneHandlers = [];
      }
      if (dart.notNull(dart.as(dart.dsend(this.doneHandlers, 'contains', responsePort), core.bool)))
        return;
      dart.dsend(this.doneHandlers, 'add', responsePort);
    }
    removeDoneListener(responsePort) {
      if (this.doneHandlers == null)
        return;
      dart.dsend(this.doneHandlers, 'remove', responsePort);
    }
    setErrorsFatal(authentification, errorsAreFatal) {
      if (!dart.equals(this.terminateCapability, authentification))
        return;
      this.errorsAreFatal = errorsAreFatal;
    }
    handlePing(responsePort, pingType) {
      if (pingType == isolate.Isolate.IMMEDIATE || pingType == isolate.Isolate.BEFORE_NEXT_EVENT && !dart.notNull(this[_isExecutingEvent])) {
        dart.dcall(responsePort.send, null);
        return;
      }
      function respond() {
        dart.dcall(responsePort.send, null);
      }
      dart.fn(respond, dart.void, []);
      if (pingType == isolate.Isolate.AS_EVENT) {
        dart.dcall(exports._globalState.topEventLoop.enqueue, this, respond, "ping");
        return;
      }
      dart.assert(pingType == isolate.Isolate.BEFORE_NEXT_EVENT);
      if (this[_scheduledControlEvents] == null) {
        this[_scheduledControlEvents] = collection.Queue.new();
      }
      dart.dsend(this[_scheduledControlEvents], 'addLast', respond);
    }
    handleKill(authentification, priority) {
      if (!dart.equals(this.terminateCapability, authentification))
        return;
      if (priority == isolate.Isolate.IMMEDIATE || priority == isolate.Isolate.BEFORE_NEXT_EVENT && !dart.notNull(this[_isExecutingEvent])) {
        dart.dcall(this.kill);
        return;
      }
      if (priority == isolate.Isolate.AS_EVENT) {
        dart.dcall(exports._globalState.topEventLoop.enqueue, this, dart.bind(this, 'kill'), "kill");
        return;
      }
      dart.assert(priority == isolate.Isolate.BEFORE_NEXT_EVENT);
      if (this[_scheduledControlEvents] == null) {
        this[_scheduledControlEvents] = collection.Queue.new();
      }
      dart.dsend(this[_scheduledControlEvents], 'addLast', dart.bind(this, 'kill'));
    }
    addErrorListener(port) {
      dart.dcall(this.errorPorts.add, port);
    }
    removeErrorListener(port) {
      dart.dcall(this.errorPorts.remove, port);
    }
    handleUncaughtError(error, stackTrace) {
      if (dart.notNull(this.errorPorts.isEmpty)) {
        if (dart.notNull(this.errorsAreFatal) && dart.notNull(dart.dcall(core.identical, this, exports._globalState.rootContext))) {
          return;
        }
        if (dart.notNull(dart.as(self.console && self.console.error, core.bool))) {
          self.console.error(error, stackTrace);
        } else {
          dart.dcall(core.print, error);
          if (stackTrace != null)
            dart.dcall(core.print, stackTrace);
        }
        return;
      }
      let message = core.List.new(2);
      message[dartx.set](0, dart.dsend(error, 'toString'));
      message[dartx.set](1, stackTrace == null ? null : dart.dcall(stackTrace.toString));
      for (let port of this.errorPorts)
        dart.dcall(port.send, message);
    }
    eval(code) {
      let old = exports._globalState.currentContext;
      exports._globalState.currentContext = this;
      dart.dcall(this[_setGlobals]);
      let result = null;
      this[_isExecutingEvent] = true;
      try {
        result = dart.dcall(code);
      } catch (e) {
        let s = dart.stackTrace(e);
        dart.dcall(this.handleUncaughtError, e, s);
        if (dart.notNull(this.errorsAreFatal)) {
          dart.dcall(this.kill);
          if (dart.notNull(dart.dcall(core.identical, this, exports._globalState.rootContext))) {
            throw e;
          }
        }
      }
 finally {
        this[_isExecutingEvent] = false;
        exports._globalState.currentContext = dart.as(old, _IsolateContext);
        if (old != null)
          dart.dsend(old, _setGlobals);
        if (this[_scheduledControlEvents] != null) {
          while (dart.notNull(dart.as(dart.dload(this[_scheduledControlEvents], 'isNotEmpty'), core.bool))) {
            dart.dcall(dart.dsend(this[_scheduledControlEvents], 'removeFirst'));
          }
        }
      }
      return result;
    }
    [_setGlobals]() {
      dart.dcall(_foreign_helper.JS_SET_CURRENT_ISOLATE, this.isolateStatics);
    }
    handleControlMessage(message) {
      switch (dart.dindex(message, 0)) {
        case "pause":
        {
          dart.dcall(this.addPause, dart.dindex(message, 1), dart.dindex(message, 2));
          break;
        }
        case "resume":
        {
          dart.dcall(this.removePause, dart.dindex(message, 1));
          break;
        }
        case 'add-ondone':
        {
          dart.dcall(this.addDoneListener, dart.dindex(message, 1));
          break;
        }
        case 'remove-ondone':
        {
          dart.dcall(this.removeDoneListener, dart.dindex(message, 1));
          break;
        }
        case 'set-errors-fatal':
        {
          dart.dcall(this.setErrorsFatal, dart.dindex(message, 1), dart.dindex(message, 2));
          break;
        }
        case "ping":
        {
          dart.dcall(this.handlePing, dart.dindex(message, 1), dart.dindex(message, 2));
          break;
        }
        case "kill":
        {
          dart.dcall(this.handleKill, dart.dindex(message, 1), dart.dindex(message, 2));
          break;
        }
        case "getErrors":
        {
          dart.dcall(this.addErrorListener, dart.dindex(message, 1));
          break;
        }
        case "stopErrors":
        {
          dart.dcall(this.removeErrorListener, dart.dindex(message, 1));
          break;
        }
        default:
      }
    }
    lookup(portId) {
      return this.ports.get(portId);
    }
    [_addRegistration](portId, port) {
      if (dart.notNull(dart.dcall(this.ports.containsKey, portId))) {
        dart.throw(core.Exception.new("Registry: ports must be registered only once."));
      }
      this.ports.set(portId, port);
    }
    register(portId, port) {
      dart.dcall(this[_addRegistration], portId, port);
      dart.dcall(this[_updateGlobalState]);
    }
    registerWeak(portId, port) {
      dart.dcall(this.weakPorts.add, portId);
      dart.dcall(this[_addRegistration], portId, port);
    }
    [_updateGlobalState]() {
      if (dart.notNull(this.ports.length) - dart.notNull(this.weakPorts.length) > 0 || dart.notNull(this.isPaused) || !dart.notNull(this.initialized)) {
        exports._globalState.isolates.set(this.id, this);
      } else {
        dart.dcall(this.kill);
      }
    }
    kill() {
      if (this[_scheduledControlEvents] != null) {
        dart.dsend(this[_scheduledControlEvents], 'clear');
      }
      for (let port of this.ports.values) {
        dart.dsend(port, _close);
      }
      dart.dcall(this.ports.clear);
      dart.dcall(this.weakPorts.clear);
      dart.dcall(exports._globalState.isolates.remove, this.id);
      dart.dcall(this.errorPorts.clear);
      if (this.doneHandlers != null) {
        for (let port of dart.as(this.doneHandlers, core.Iterable$(isolate.SendPort))) {
          dart.dcall(port.send, null);
        }
        this.doneHandlers = null;
      }
    }
    unregister(portId) {
      dart.dcall(this.ports.remove, portId);
      dart.dcall(this.weakPorts.remove, portId);
      dart.dcall(this[_updateGlobalState]);
    }
  }
  _IsolateContext[dart.implements] = () => [_foreign_helper.IsolateContext];
  dart.setSignature(_IsolateContext, {
    constructors: () => ({_IsolateContext: [_IsolateContext, []]}),
    methods: () => ({
      addPause: [dart.void, [isolate.Capability, isolate.Capability]],
      removePause: [dart.void, [isolate.Capability]],
      addDoneListener: [dart.void, [isolate.SendPort]],
      removeDoneListener: [dart.void, [isolate.SendPort]],
      setErrorsFatal: [dart.void, [isolate.Capability, core.bool]],
      handlePing: [dart.void, [isolate.SendPort, core.int]],
      handleKill: [dart.void, [isolate.Capability, core.int]],
      addErrorListener: [dart.void, [isolate.SendPort]],
      removeErrorListener: [dart.void, [isolate.SendPort]],
      handleUncaughtError: [dart.void, [dart.dynamic, core.StackTrace]],
      eval: [dart.dynamic, [core.Function]],
      [_setGlobals]: [dart.void, []],
      handleControlMessage: [dart.void, [dart.dynamic]],
      lookup: [RawReceivePortImpl, [core.int]],
      [_addRegistration]: [dart.void, [core.int, RawReceivePortImpl]],
      register: [dart.void, [core.int, RawReceivePortImpl]],
      registerWeak: [dart.void, [core.int, RawReceivePortImpl]],
      [_updateGlobalState]: [dart.void, []],
      kill: [dart.void, []],
      unregister: [dart.void, [core.int]]
    })
  });
  let _runHelper = Symbol('_runHelper');
  class _EventLoop extends core.Object {
    _EventLoop() {
      this.events = collection.Queue$(_IsolateEvent).new();
      this[_activeJsAsyncCount] = 0;
    }
    enqueue(isolate, fn, msg) {
      dart.dcall(this.events.addLast, new _IsolateEvent(dart.as(isolate, _IsolateContext), dart.as(fn, core.Function), dart.as(msg, core.String)));
    }
    prequeue(event) {
      dart.dcall(this.events.addFirst, event);
    }
    dequeue() {
      if (dart.notNull(this.events.isEmpty))
        return null;
      return dart.dcall(this.events.removeFirst);
    }
    checkOpenReceivePortsFromCommandLine() {
      if (exports._globalState.rootContext != null && dart.notNull(dart.dcall(exports._globalState.isolates.containsKey, exports._globalState.rootContext.id)) && dart.notNull(exports._globalState.fromCommandLine) && dart.notNull(exports._globalState.rootContext.ports.isEmpty)) {
        dart.throw(core.Exception.new("Program exited with open ReceivePorts."));
      }
    }
    runIteration() {
      let event = dart.dcall(this.dequeue);
      if (event == null) {
        dart.dcall(this.checkOpenReceivePortsFromCommandLine);
        dart.dcall(exports._globalState.maybeCloseWorker);
        return false;
      }
      dart.dsend(event, 'process');
      return true;
    }
    [_runHelper]() {
      if (exports.globalWindow != null) {
        let next = (function() {
          if (!dart.notNull(dart.dcall(this.runIteration)))
            return;
          dart.dcall(async.Timer.run, next);
        }).bind(this);
        dart.fn(next);
        dart.dcall(next);
      } else {
        while (dart.notNull(dart.dcall(this.runIteration))) {
        }
      }
    }
    run() {
      if (!dart.notNull(exports._globalState.isWorker)) {
        dart.dcall(this[_runHelper]);
      } else {
        try {
          dart.dcall(this[_runHelper]);
        } catch (e) {
          let trace = dart.stackTrace(e);
          dart.dcall(exports._globalState.mainManager.postMessage, dart.dcall(_serializeMessage, dart.map({command: 'error', msg: `${e}\n${trace}`})));
        }

      }
    }
  }
  dart.setSignature(_EventLoop, {
    constructors: () => ({_EventLoop: [_EventLoop, []]}),
    methods: () => ({
      enqueue: [dart.void, [dart.dynamic, dart.dynamic, dart.dynamic]],
      prequeue: [dart.void, [_IsolateEvent]],
      dequeue: [_IsolateEvent, []],
      checkOpenReceivePortsFromCommandLine: [dart.void, []],
      runIteration: [core.bool, []],
      [_runHelper]: [dart.void, []],
      run: [dart.void, []]
    })
  });
  class _IsolateEvent extends core.Object {
    _IsolateEvent(isolate, fn, message) {
      this.isolate = isolate;
      this.fn = fn;
      this.message = message;
    }
    process() {
      if (dart.notNull(this.isolate.isPaused)) {
        dart.dcall(this.isolate.delayedEvents[dartx.add], this);
        return;
      }
      dart.dcall(this.isolate.eval, this.fn);
    }
  }
  dart.setSignature(_IsolateEvent, {
    constructors: () => ({_IsolateEvent: [_IsolateEvent, [_IsolateContext, core.Function, core.String]]}),
    methods: () => ({process: [dart.void, []]})
  });
  dart.defineLazyProperties(exports, {
    get _global() {
      return typeof global == 'undefined' ? self : global;
    }
  });
  class _MainManagerStub extends core.Object {
    postMessage(msg) {
      exports._global.postMessage(msg);
    }
  }
  dart.setSignature(_MainManagerStub, {
    methods: () => ({postMessage: [dart.void, [dart.dynamic]]})
  });
  let _SPAWNED_SIGNAL = "spawned";
  let _SPAWN_FAILED_SIGNAL = "spawn failed";
  dart.copyProperties(exports, {
    get globalWindow() {
      return exports._global.window;
    },
    get globalWorker() {
      return exports._global.Worker;
    },
    get globalPostMessageDefined() {
      return dart.as(!!exports._global.postMessage, core.bool);
    }
  });
  let _MainFunction = dart.typedef('_MainFunction', () => dart.functionType(dart.dynamic, []));
  let _MainFunctionArgs = dart.typedef('_MainFunctionArgs', () => dart.functionType(dart.dynamic, [dart.dynamic]));
  let _MainFunctionArgsMessage = dart.typedef('_MainFunctionArgsMessage', () => dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
  class IsolateNatives extends core.Object {
    static computeThisScript() {
      let currentScript = document.currentScript;
      if (currentScript != null) {
        return dart.as(String(currentScript.src), core.String);
      }
      if (dart.notNull(_js_helper.Primitives.isD8))
        return dart.dcall(IsolateNatives.computeThisScriptD8);
      if (dart.notNull(_js_helper.Primitives.isJsshell))
        return dart.dcall(IsolateNatives.computeThisScriptJsshell);
      if (exports._globalState != null && dart.notNull(exports._globalState.isWorker)) {
        return dart.dcall(IsolateNatives.computeThisScriptFromTrace);
      }
      return null;
    }
    static computeThisScriptJsshell() {
      return dart.as(thisFilename(), core.String);
    }
    static computeThisScriptD8() {
      return dart.dcall(IsolateNatives.computeThisScriptFromTrace);
    }
    static computeThisScriptFromTrace() {
      let stack = new Error().stack;
      if (stack == null) {
        stack = (function() {
          try {
            throw new Error();
          } catch (e) {
            return e.stack;
          }

        })();
        if (stack == null)
          dart.throw(new core.UnsupportedError('No stack trace'));
      }
      let pattern = null, matches = null;
      pattern = new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$", "m");
      matches = stack.match(pattern);
      if (matches != null)
        return dart.as(matches[1], core.String);
      pattern = new RegExp("^[^@]*@(.*):[0-9]*$", "m");
      matches = stack.match(pattern);
      if (matches != null)
        return dart.as(matches[1], core.String);
      dart.throw(new core.UnsupportedError(`Cannot extract URI from "${stack}"`));
    }
    static _getEventData(e) {
      return e.data;
    }
    static _processWorkerMessage(sender, e) {
      let msg = dart.dcall(_deserializeMessage, dart.dcall(IsolateNatives._getEventData, e));
      switch (dart.dindex(msg, 'command')) {
        case 'start':
        {
          exports._globalState.currentManagerId = dart.as(dart.dindex(msg, 'id'), core.int);
          let functionName = dart.as(dart.dindex(msg, 'functionName'), core.String);
          let entryPoint = functionName == null ? exports._globalState.entry : dart.as(dart.dcall(IsolateNatives._getJSFunctionFromName, functionName), core.Function);
          let args = dart.dindex(msg, 'args');
          let message = dart.dcall(_deserializeMessage, dart.dindex(msg, 'msg'));
          let isSpawnUri = dart.dindex(msg, 'isSpawnUri');
          let startPaused = dart.dindex(msg, 'startPaused');
          let replyTo = dart.dcall(_deserializeMessage, dart.dindex(msg, 'replyTo'));
          let context = new _IsolateContext();
          dart.dcall(exports._globalState.topEventLoop.enqueue, context, dart.fn(() => {
            dart.dcall(IsolateNatives._startIsolate, entryPoint, args, message, isSpawnUri, startPaused, replyTo);
          }), 'worker-start');
          exports._globalState.currentContext = dart.as(context, _IsolateContext);
          dart.dcall(exports._globalState.topEventLoop.run);
          break;
        }
        case 'spawn-worker':
        {
          if (IsolateNatives.enableSpawnWorker != null)
            dart.dcall(IsolateNatives.handleSpawnWorkerRequest, msg);
          break;
        }
        case 'message':
        {
          let port = dart.as(dart.dindex(msg, 'port'), isolate.SendPort);
          if (port != null) {
            dart.dsend(dart.dindex(msg, 'port'), 'send', dart.dindex(msg, 'msg'));
          }
          dart.dcall(exports._globalState.topEventLoop.run);
          break;
        }
        case 'close':
        {
          dart.dcall(exports._globalState.managers.remove, IsolateNatives.workerIds.get(sender));
          sender.terminate();
          dart.dcall(exports._globalState.topEventLoop.run);
          break;
        }
        case 'log':
        {
          dart.dcall(IsolateNatives._log, dart.dindex(msg, 'msg'));
          break;
        }
        case 'print':
        {
          if (dart.notNull(exports._globalState.isWorker)) {
            dart.dcall(exports._globalState.mainManager.postMessage, dart.dcall(_serializeMessage, dart.map({command: 'print', msg: msg})));
          } else {
            dart.dcall(core.print, dart.dindex(msg, 'msg'));
          }
          break;
        }
        case 'error':
        {
          dart.throw(dart.dindex(msg, 'msg'));
        }
      }
    }
    static handleSpawnWorkerRequest(msg) {
      let replyPort = dart.dindex(msg, 'replyPort');
      dart.dcall(dart.dcall(IsolateNatives.spawn, dart.dindex(msg, 'functionName'), dart.dindex(msg, 'uri'), dart.dindex(msg, 'args'), dart.dindex(msg, 'msg'), false, dart.dindex(msg, 'isSpawnUri'), dart.dindex(msg, 'startPaused')).then, dart.fn(msg => {
        dart.dsend(replyPort, 'send', msg);
      }), {onError: dart.fn(errorMessage => {
          dart.dsend(replyPort, 'send', [_SPAWN_FAILED_SIGNAL, errorMessage]);
        }, dart.dynamic, [core.String])});
    }
    static _log(msg) {
      if (dart.notNull(exports._globalState.isWorker)) {
        dart.dcall(exports._globalState.mainManager.postMessage, dart.dcall(_serializeMessage, dart.map({command: 'log', msg: msg})));
      } else {
        try {
          dart.dcall(IsolateNatives._consoleLog, msg);
        } catch (e) {
          let trace = dart.stackTrace(e);
          dart.throw(core.Exception.new(trace));
        }

      }
    }
    static _consoleLog(msg) {
      self.console.log(msg);
    }
    static _getJSFunctionFromName(functionName) {
      let globalFunctionsContainer = dart.dcall(_foreign_helper.JS_EMBEDDED_GLOBAL, "", _js_embedded_names.GLOBAL_FUNCTIONS);
      return globalFunctionsContainer[functionName]();
    }
    static _getJSFunctionName(f) {
      return dart.as(f.$name, core.String);
    }
    static _allocate(ctor) {
      return new ctor();
    }
    static spawnFunction(topLevelFunction, message, startPaused) {
      IsolateNatives.enableSpawnWorker = true;
      let name = dart.dcall(IsolateNatives._getJSFunctionName, topLevelFunction);
      if (name == null) {
        dart.throw(new core.UnsupportedError("only top-level functions can be spawned."));
      }
      let isLight = false;
      let isSpawnUri = false;
      return dart.dcall(IsolateNatives.spawn, name, null, null, message, isLight, isSpawnUri, startPaused);
    }
    static spawnUri(uri, args, message, startPaused) {
      IsolateNatives.enableSpawnWorker = true;
      let isLight = false;
      let isSpawnUri = true;
      return dart.dcall(IsolateNatives.spawn, null, dart.dcall(uri.toString), args, message, isLight, isSpawnUri, startPaused);
    }
    static spawn(functionName, uri, args, message, isLight, isSpawnUri, startPaused) {
      if (uri != null && dart.notNull(dart.dcall(uri[dartx.endsWith], ".dart"))) {
        uri = dart.notNull(uri) + ".js";
      }
      let port = isolate.ReceivePort.new();
      let completer = async.Completer$(core.List).new();
      dart.dcall(port.first.then, dart.fn(msg => {
        if (dart.equals(dart.dindex(msg, 0), _SPAWNED_SIGNAL)) {
          dart.dcall(completer.complete, msg);
        } else {
          dart.assert(dart.equals(dart.dindex(msg, 0), _SPAWN_FAILED_SIGNAL));
          dart.dcall(completer.completeError, dart.dindex(msg, 1));
        }
      }));
      let signalReply = port.sendPort;
      if (dart.notNull(exports._globalState.useWorkers) && !dart.notNull(isLight)) {
        dart.dcall(IsolateNatives._startWorker, functionName, uri, args, message, isSpawnUri, startPaused, signalReply, dart.fn(message => dart.dcall(completer.completeError, message), dart.void, [core.String]));
      } else {
        dart.dcall(IsolateNatives._startNonWorker, functionName, uri, args, message, isSpawnUri, startPaused, signalReply);
      }
      return completer.future;
    }
    static _startWorker(functionName, uri, args, message, isSpawnUri, startPaused, replyPort, onError) {
      if (args != null)
        args = core.List$(core.String).from(args);
      if (dart.notNull(exports._globalState.isWorker)) {
        dart.dcall(exports._globalState.mainManager.postMessage, dart.dcall(_serializeMessage, dart.map({command: 'spawn-worker', functionName: functionName, args: args, msg: message, uri: uri, isSpawnUri: isSpawnUri, startPaused: startPaused, replyPort: replyPort})));
      } else {
        dart.dcall(IsolateNatives._spawnWorker, functionName, uri, args, message, isSpawnUri, startPaused, replyPort, onError);
      }
    }
    static _startNonWorker(functionName, uri, args, message, isSpawnUri, startPaused, replyPort) {
      if (uri != null) {
        dart.throw(new core.UnsupportedError("Currently spawnUri is not supported without web workers."));
      }
      message = dart.dcall(_clone, message);
      if (args != null)
        args = core.List$(core.String).from(args);
      dart.dcall(exports._globalState.topEventLoop.enqueue, new _IsolateContext(), dart.fn(() => {
        let func = dart.dcall(IsolateNatives._getJSFunctionFromName, functionName);
        dart.dcall(IsolateNatives._startIsolate, func, args, message, isSpawnUri, startPaused, replyPort);
      }), 'nonworker start');
    }
    static get currentIsolate() {
      let context = dart.as(dart.dcall(_foreign_helper.JS_CURRENT_ISOLATE_CONTEXT), _IsolateContext);
      return new isolate.Isolate(context.controlPort.sendPort, {pauseCapability: context.pauseCapability, terminateCapability: context.terminateCapability});
    }
    static _startIsolate(topLevel, args, message, isSpawnUri, startPaused, replyTo) {
      let context = dart.as(dart.dcall(_foreign_helper.JS_CURRENT_ISOLATE_CONTEXT), _IsolateContext);
      dart.dcall(_js_helper.Primitives.initializeStatics, context.id);
      dart.dcall(replyTo.send, [_SPAWNED_SIGNAL, context.controlPort.sendPort, context.pauseCapability, context.terminateCapability]);
      function runStartFunction() {
        context.initialized = true;
        if (!dart.notNull(isSpawnUri)) {
          dart.dcall(topLevel, message);
        } else if (dart.is(topLevel, _MainFunctionArgsMessage)) {
          dart.dcall(topLevel, args, message);
        } else if (dart.is(topLevel, _MainFunctionArgs)) {
          dart.dcall(topLevel, args);
        } else {
          dart.dcall(topLevel);
        }
      }
      dart.fn(runStartFunction, dart.void, []);
      if (dart.notNull(startPaused)) {
        dart.dcall(context.addPause, context.pauseCapability, context.pauseCapability);
        dart.dcall(exports._globalState.topEventLoop.enqueue, context, runStartFunction, 'start isolate');
      } else {
        dart.dcall(runStartFunction);
      }
    }
    static _spawnWorker(functionName, uri, args, message, isSpawnUri, startPaused, replyPort, onError) {
      if (uri == null)
        uri = IsolateNatives.thisScript;
      let worker = new Worker(uri);
      let onerrorTrampoline = (function(f, u, c) {
        return function(e) {
          return f(e, u, c);
        };
      })(IsolateNatives.workerOnError, uri, onError);
      worker.onerror = onerrorTrampoline;
      let processWorkerMessageTrampoline = (function(f, a) {
        return function(e) {
          e.onerror = null;
          return f(a, e);
        };
      })(IsolateNatives._processWorkerMessage, worker);
      worker.onmessage = processWorkerMessageTrampoline;
      let o = exports._globalState;
      let workerId = o.nextManagerId;
      o.nextManagerId = dart.notNull(workerId) + 1;
      IsolateNatives.workerIds.set(worker, dart.as(workerId, core.int));
      exports._globalState.managers.set(dart.as(workerId, core.int), worker);
      worker.postMessage(dart.dcall(_serializeMessage, dart.map({command: 'start', id: workerId, replyTo: dart.dcall(_serializeMessage, replyPort), args: args, msg: dart.dcall(_serializeMessage, message), isSpawnUri: isSpawnUri, startPaused: startPaused, functionName: functionName})));
    }
    static workerOnError(event, uri, onError) {
      event.preventDefault();
      let message = dart.as(event.message, core.String);
      if (message == null) {
        message = `Error spawning worker for ${uri}`;
      } else {
        message = `Error spawning worker for ${uri} (${message})`;
      }
      onError(message);
      return true;
    }
  }
  dart.setSignature(IsolateNatives, {
    statics: () => ({
      computeThisScript: [core.String, []],
      computeThisScriptJsshell: [core.String, []],
      computeThisScriptD8: [core.String, []],
      computeThisScriptFromTrace: [core.String, []],
      _getEventData: [dart.dynamic, [dart.dynamic]],
      _processWorkerMessage: [dart.void, [dart.dynamic, dart.dynamic]],
      handleSpawnWorkerRequest: [dart.dynamic, [dart.dynamic]],
      _log: [dart.dynamic, [dart.dynamic]],
      _consoleLog: [dart.void, [dart.dynamic]],
      _getJSFunctionFromName: [dart.dynamic, [core.String]],
      _getJSFunctionName: [core.String, [core.Function]],
      _allocate: [dart.dynamic, [dart.dynamic]],
      spawnFunction: [async.Future$(core.List), [dart.functionType(dart.void, [dart.dynamic]), dart.dynamic, core.bool]],
      spawnUri: [async.Future$(core.List), [core.Uri, core.List$(core.String), dart.dynamic, core.bool]],
      spawn: [async.Future$(core.List), [core.String, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, core.bool]],
      _startWorker: [dart.void, [core.String, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort, dart.functionType(dart.void, [core.String])]],
      _startNonWorker: [dart.void, [core.String, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort]],
      _startIsolate: [dart.void, [core.Function, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort]],
      _spawnWorker: [dart.void, [dart.dynamic, core.String, core.List$(core.String), dart.dynamic, core.bool, core.bool, isolate.SendPort, dart.functionType(dart.void, [core.String])]],
      workerOnError: [core.bool, [dart.dynamic, core.String, dart.functionType(dart.void, [core.String])]]
    }),
    names: ['computeThisScript', 'computeThisScriptJsshell', 'computeThisScriptD8', 'computeThisScriptFromTrace', '_getEventData', '_processWorkerMessage', 'handleSpawnWorkerRequest', '_log', '_consoleLog', '_getJSFunctionFromName', '_getJSFunctionName', '_allocate', 'spawnFunction', 'spawnUri', 'spawn', '_startWorker', '_startNonWorker', '_startIsolate', '_spawnWorker', 'workerOnError']
  });
  IsolateNatives.enableSpawnWorker = null;
  dart.defineLazyProperties(IsolateNatives, {
    get thisScript() {
      return dart.dcall(IsolateNatives.computeThisScript);
    },
    set thisScript(_) {},
    get workerIds() {
      return new (core.Expando$(core.int))();
    }
  });
  let _checkReplyTo = Symbol('_checkReplyTo');
  class _BaseSendPort extends core.Object {
    _BaseSendPort(isolateId) {
      this[_isolateId] = isolateId;
    }
    [_checkReplyTo](replyTo) {
      if (replyTo != null && !dart.is(replyTo, _NativeJsSendPort) && !dart.is(replyTo, _WorkerSendPort)) {
        dart.throw(core.Exception.new("SendPort.send: Illegal replyTo port type"));
      }
    }
  }
  _BaseSendPort[dart.implements] = () => [isolate.SendPort];
  dart.setSignature(_BaseSendPort, {
    constructors: () => ({_BaseSendPort: [_BaseSendPort, [core.int]]}),
    methods: () => ({[_checkReplyTo]: [dart.void, [isolate.SendPort]]})
  });
  let _isClosed = Symbol('_isClosed');
  let _add = Symbol('_add');
  class _NativeJsSendPort extends _BaseSendPort {
    _NativeJsSendPort(receivePort, isolateId) {
      this[_receivePort] = receivePort;
      super._BaseSendPort(isolateId);
    }
    send(message) {
      let isolate = exports._globalState.isolates.get(this[_isolateId]);
      if (isolate == null)
        return;
      if (dart.notNull(this[_receivePort][_isClosed]))
        return;
      let msg = dart.dcall(_clone, message);
      if (dart.equals(dart.dload(isolate, 'controlPort'), this[_receivePort])) {
        dart.dsend(isolate, 'handleControlMessage', msg);
        return;
      }
      dart.dcall(exports._globalState.topEventLoop.enqueue, isolate, dart.fn((() => {
        if (!dart.notNull(this[_receivePort][_isClosed])) {
          dart.dcall(this[_receivePort][_add], msg);
        }
      }).bind(this)), `receive ${message}`);
    }
    ['=='](other) {
      return dart.is(other, _NativeJsSendPort) && dart.equals(this[_receivePort], dart.dload(other, _receivePort));
    }
    get hashCode() {
      return this[_receivePort][_id];
    }
  }
  _NativeJsSendPort[dart.implements] = () => [isolate.SendPort];
  dart.setSignature(_NativeJsSendPort, {
    constructors: () => ({_NativeJsSendPort: [_NativeJsSendPort, [RawReceivePortImpl, core.int]]}),
    methods: () => ({send: [dart.void, [dart.dynamic]]})
  });
  class _WorkerSendPort extends _BaseSendPort {
    _WorkerSendPort(workerId, isolateId, receivePortId) {
      this[_workerId] = workerId;
      this[_receivePortId] = receivePortId;
      super._BaseSendPort(isolateId);
    }
    send(message) {
      let workerMessage = dart.dcall(_serializeMessage, dart.map({command: 'message', port: this, msg: message}));
      if (dart.notNull(exports._globalState.isWorker)) {
        dart.dcall(exports._globalState.mainManager.postMessage, workerMessage);
      } else {
        let manager = exports._globalState.managers.get(this[_workerId]);
        if (manager != null) {
          manager.postMessage(workerMessage);
        }
      }
    }
    ['=='](other) {
      return dart.is(other, _WorkerSendPort) && dart.equals(this[_workerId], dart.dload(other, _workerId)) && dart.equals(this[_isolateId], dart.dload(other, _isolateId)) && dart.equals(this[_receivePortId], dart.dload(other, _receivePortId));
    }
    get hashCode() {
      return dart.notNull(this[_workerId]) << 16 ^ dart.notNull(this[_isolateId]) << 8 ^ dart.notNull(this[_receivePortId]);
    }
  }
  _WorkerSendPort[dart.implements] = () => [isolate.SendPort];
  dart.setSignature(_WorkerSendPort, {
    constructors: () => ({_WorkerSendPort: [_WorkerSendPort, [core.int, core.int, core.int]]}),
    methods: () => ({send: [dart.void, [dart.dynamic]]})
  });
  let _handler = Symbol('_handler');
  class RawReceivePortImpl extends core.Object {
    RawReceivePortImpl(handler) {
      this[_handler] = handler;
      this[_id] = (() => {
        let x = RawReceivePortImpl._nextFreeId;
        RawReceivePortImpl._nextFreeId = dart.notNull(x) + 1;
        return x;
      })();
      this[_isClosed] = false;
      dart.dcall(exports._globalState.currentContext.register, this[_id], this);
    }
    weak(handler) {
      this[_handler] = handler;
      this[_id] = (() => {
        let x = RawReceivePortImpl._nextFreeId;
        RawReceivePortImpl._nextFreeId = dart.notNull(x) + 1;
        return x;
      })();
      this[_isClosed] = false;
      dart.dcall(exports._globalState.currentContext.registerWeak, this[_id], this);
    }
    _controlPort() {
      this[_handler] = null;
      this[_id] = 0;
      this[_isClosed] = false;
    }
    set handler(newHandler) {
      this[_handler] = newHandler;
    }
    [_close]() {
      this[_isClosed] = true;
      this[_handler] = null;
    }
    close() {
      if (dart.notNull(this[_isClosed]))
        return;
      this[_isClosed] = true;
      this[_handler] = null;
      dart.dcall(exports._globalState.currentContext.unregister, this[_id]);
    }
    [_add](dataEvent) {
      if (dart.notNull(this[_isClosed]))
        return;
      dart.dcall(this[_handler], dataEvent);
    }
    get sendPort() {
      return new _NativeJsSendPort(this, exports._globalState.currentContext.id);
    }
  }
  RawReceivePortImpl[dart.implements] = () => [isolate.RawReceivePort];
  dart.defineNamedConstructor(RawReceivePortImpl, 'weak');
  dart.defineNamedConstructor(RawReceivePortImpl, '_controlPort');
  dart.setSignature(RawReceivePortImpl, {
    constructors: () => ({
      RawReceivePortImpl: [RawReceivePortImpl, [core.Function]],
      weak: [RawReceivePortImpl, [core.Function]],
      _controlPort: [RawReceivePortImpl, []]
    }),
    methods: () => ({
      [_close]: [dart.void, []],
      close: [dart.void, []],
      [_add]: [dart.void, [dart.dynamic]]
    })
  });
  RawReceivePortImpl._nextFreeId = 1;
  let _rawPort = Symbol('_rawPort');
  let _controller = Symbol('_controller');
  class ReceivePortImpl extends async.Stream {
    ReceivePortImpl() {
      this.fromRawReceivePort(new RawReceivePortImpl(null));
    }
    weak() {
      this.fromRawReceivePort(new RawReceivePortImpl.weak(null));
    }
    fromRawReceivePort(rawPort) {
      this[_rawPort] = rawPort;
      this[_controller] = null;
      super.Stream();
      this[_controller] = async.StreamController.new({onCancel: dart.bind(this, 'close'), sync: true});
      this[_rawPort].handler = dart.bind(this[_controller], 'add');
    }
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return dart.dcall(this[_controller].stream.listen, onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    close() {
      dart.dcall(this[_rawPort].close);
      dart.dcall(this[_controller].close);
    }
    get sendPort() {
      return this[_rawPort].sendPort;
    }
  }
  ReceivePortImpl[dart.implements] = () => [isolate.ReceivePort];
  dart.defineNamedConstructor(ReceivePortImpl, 'weak');
  dart.defineNamedConstructor(ReceivePortImpl, 'fromRawReceivePort');
  dart.setSignature(ReceivePortImpl, {
    constructors: () => ({
      ReceivePortImpl: [ReceivePortImpl, []],
      weak: [ReceivePortImpl, []],
      fromRawReceivePort: [ReceivePortImpl, [isolate.RawReceivePort]]
    }),
    methods: () => ({
      listen: [async.StreamSubscription, [dart.functionType(dart.void, [dart.dynamic])], {onError: core.Function, onDone: dart.functionType(dart.void, []), cancelOnError: core.bool}],
      close: [dart.void, []]
    })
  });
  let _once = Symbol('_once');
  let _inEventLoop = Symbol('_inEventLoop');
  let _handle = Symbol('_handle');
  class TimerImpl extends core.Object {
    TimerImpl(milliseconds, callback) {
      this[_once] = true;
      this[_inEventLoop] = false;
      this[_handle] = null;
      if (milliseconds == 0 && (!dart.notNull(dart.dcall(hasTimer)) || dart.notNull(exports._globalState.isWorker))) {
        let internalCallback = (function() {
          this[_handle] = null;
          callback();
        }).bind(this);
        dart.fn(internalCallback, dart.void, []);
        this[_handle] = 1;
        dart.dcall(exports._globalState.topEventLoop.enqueue, exports._globalState.currentContext, internalCallback, 'timer');
        this[_inEventLoop] = true;
      } else if (dart.notNull(dart.dcall(hasTimer))) {
        let internalCallback = (function() {
          this[_handle] = null;
          dart.dcall(leaveJsAsync);
          callback();
        }).bind(this);
        dart.fn(internalCallback, dart.void, []);
        dart.dcall(enterJsAsync);
        this[_handle] = dart.as(self.setTimeout(internalCallback, milliseconds), core.int);
      } else {
        dart.assert(dart.notNull(milliseconds) > 0);
        dart.throw(new core.UnsupportedError("Timer greater than 0."));
      }
    }
    periodic(milliseconds, callback) {
      this[_once] = false;
      this[_inEventLoop] = false;
      this[_handle] = null;
      if (dart.notNull(dart.dcall(hasTimer))) {
        dart.dcall(enterJsAsync);
        this[_handle] = dart.as(self.setInterval(dart.fn((() => {
          callback(this);
        }).bind(this)), milliseconds), core.int);
      } else {
        dart.throw(new core.UnsupportedError("Periodic timer."));
      }
    }
    cancel() {
      if (dart.notNull(dart.dcall(hasTimer))) {
        if (dart.notNull(this[_inEventLoop])) {
          dart.throw(new core.UnsupportedError("Timer in event loop cannot be canceled."));
        }
        if (this[_handle] == null)
          return;
        dart.dcall(leaveJsAsync);
        if (dart.notNull(this[_once])) {
          self.clearTimeout(this[_handle]);
        } else {
          self.clearInterval(this[_handle]);
        }
        this[_handle] = null;
      } else {
        dart.throw(new core.UnsupportedError("Canceling a timer."));
      }
    }
    get isActive() {
      return this[_handle] != null;
    }
  }
  TimerImpl[dart.implements] = () => [async.Timer];
  dart.defineNamedConstructor(TimerImpl, 'periodic');
  dart.setSignature(TimerImpl, {
    constructors: () => ({
      TimerImpl: [TimerImpl, [core.int, dart.functionType(dart.void, [])]],
      periodic: [TimerImpl, [core.int, dart.functionType(dart.void, [async.Timer])]]
    }),
    methods: () => ({cancel: [dart.void, []]})
  });
  function hasTimer() {
    return self.setTimeout != null;
  }
  dart.fn(hasTimer, core.bool, []);
  class CapabilityImpl extends core.Object {
    CapabilityImpl() {
      this._internal(dart.dcall(_js_helper.random64));
    }
    _internal(id) {
      this[_id] = id;
    }
    get hashCode() {
      let hash = this[_id];
      hash = dart.notNull(hash) >> 0 ^ (dart.notNull(hash) / 4294967296)[dartx.truncate]();
      hash = ~dart.notNull(hash) + (dart.notNull(hash) << 15) & 4294967295;
      hash = dart.notNull(hash) ^ dart.notNull(hash) >> 12;
      hash = dart.notNull(hash) * 5 & 4294967295;
      hash = dart.notNull(hash) ^ dart.notNull(hash) >> 4;
      hash = dart.notNull(hash) * 2057 & 4294967295;
      hash = dart.notNull(hash) ^ dart.notNull(hash) >> 16;
      return hash;
    }
    ['=='](other) {
      if (dart.notNull(dart.dcall(core.identical, other, this)))
        return true;
      if (dart.is(other, CapabilityImpl)) {
        return dart.dcall(core.identical, this[_id], other[_id]);
      }
      return false;
    }
  }
  CapabilityImpl[dart.implements] = () => [isolate.Capability];
  dart.defineNamedConstructor(CapabilityImpl, '_internal');
  dart.setSignature(CapabilityImpl, {
    constructors: () => ({
      CapabilityImpl: [CapabilityImpl, []],
      _internal: [CapabilityImpl, [core.int]]
    }),
    methods: () => ({'==': [core.bool, [core.Object]]})
  });
  // Exports:
  exports.enterJsAsync = enterJsAsync;
  exports.leaveJsAsync = leaveJsAsync;
  exports.isWorker = isWorker;
  exports.startRootIsolate = startRootIsolate;
  exports.IsolateNatives = IsolateNatives;
  exports.RawReceivePortImpl = RawReceivePortImpl;
  exports.ReceivePortImpl = ReceivePortImpl;
  exports.TimerImpl = TimerImpl;
  exports.hasTimer = hasTimer;
  exports.CapabilityImpl = CapabilityImpl;
});
