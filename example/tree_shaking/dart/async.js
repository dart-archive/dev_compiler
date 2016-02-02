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
let _internal = require("./_internal");
let dartx = dart.dartx;
function _registerErrorHandler(errorHandler, zone) {
  if (dart.is(errorHandler, ZoneBinaryCallback)) {
    return zone.registerBinaryCallback(errorHandler);
  } else {
    return zone.registerUnaryCallback(dart.as(errorHandler, __CastType0));
  }
}
dart.fn(_registerErrorHandler, () => dart.definiteFunctionType(core.Function, [core.Function, Zone]));
const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(dart.dynamic, [dart.dynamic]));
class _BroadcastSubscriptionLink extends core.Object {
  _BroadcastSubscriptionLink() {}
}
const _zone = Symbol('_zone');
const _state = Symbol('_state');
const _onData = Symbol('_onData');
const _onError = Symbol('_onError');
const _onDone = Symbol('_onDone');
const _isCanceled = Symbol('_isCanceled');
const _cancelFuture = Symbol('_cancelFuture');
const _cancel = Symbol('_cancel');
const _complete = Symbol('_complete');
const _completeError = Symbol('_completeError');
const _isClosed = Symbol('_isClosed');
const _canFire = Symbol('_canFire');
const _sendDone = Symbol('_sendDone');
const _addPending = Symbol('_addPending');
const _close = Symbol('_close');
const _BufferingStreamSubscription$ = dart.generic(function(T) {
  class _BufferingStreamSubscription extends core.Object {
    _BufferingStreamSubscription(onData, onError, onDone, cancelOnError) {
      this[_zone] = Zone.current;
      this[_state] = dart.notNull(cancelOnError) ? _BufferingStreamSubscription$()._STATE_CANCEL_ON_ERROR : 0;
      this[_onData] = null;
      this[_onError] = null;
      this[_onDone] = null;
      this.onData(onData);
      this.onError(onError);
      this.onDone(onDone);
    }
    onData(handleData) {
      dart.as(handleData, dart.functionType(dart.void, [T]));
      if (handleData == null) handleData = dart.as(_nullDataHandler, __CastType18);
      this[_onData] = dart.as(this[_zone].registerUnaryCallback(handleData), _DataHandler$(T));
    }
    onError(handleError) {
      if (handleError == null) handleError = _nullErrorHandler;
      this[_onError] = _registerErrorHandler(handleError, this[_zone]);
    }
    onDone(handleDone) {
      dart.as(handleDone, dart.functionType(dart.void, []));
      if (handleDone == null) handleDone = _nullDoneHandler;
      this[_onDone] = this[_zone].registerCallback(handleDone);
    }
    cancel() {
      this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BufferingStreamSubscription$()._STATE_WAIT_FOR_CANCEL);
      if (dart.notNull(this[_isCanceled])) return this[_cancelFuture];
      this[_cancel]();
      return this[_cancelFuture];
    }
    asFuture(futureValue) {
      if (futureValue === void 0) futureValue = null;
      let result = new (_Future$(T))();
      this[_onDone] = dart.fn(() => {
        result[_complete](futureValue);
      }, dart.void, []);
      this[_onError] = dart.fn(((error, stackTrace) => {
        this.cancel();
        result[_completeError](error, dart.as(stackTrace, core.StackTrace));
      }).bind(this));
      return result;
    }
    [_close]() {
      dart.assert(!dart.notNull(this[_isClosed]));
      if (dart.notNull(this[_isCanceled])) return;
      this[_state] = dart.notNull(this[_state]) | dart.notNull(_BufferingStreamSubscription$()._STATE_CLOSED);
      if (dart.notNull(this[_canFire])) {
        this[_sendDone]();
      } else {
        this[_addPending](dart.const(new _DelayedDone()));
      }
    }
  }
  _BufferingStreamSubscription[dart.implements] = () => [StreamSubscription$(T), _EventSink$(T), _EventDispatch$(T)];
  dart.setSignature(_BufferingStreamSubscription, {
    constructors: () => ({_BufferingStreamSubscription: [_BufferingStreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]}),
    methods: () => ({
      onData: [dart.void, [dart.functionType(dart.void, [T])]],
      onError: [dart.void, [core.Function]],
      onDone: [dart.void, [dart.functionType(dart.void, [])]],
      cancel: [Future, []],
      asFuture: [Future, [], [dart.dynamic]],
      [_close]: [dart.void, []]
    })
  });
  _BufferingStreamSubscription._STATE_CANCEL_ON_ERROR = 1;
  return _BufferingStreamSubscription;
});
let _BufferingStreamSubscription = _BufferingStreamSubscription$();
const _controller = Symbol('_controller');
const _ControllerSubscription$ = dart.generic(function(T) {
  class _ControllerSubscription extends _BufferingStreamSubscription$(T) {
    _ControllerSubscription(controller, onData, onError, onDone, cancelOnError) {
      this[_controller] = controller;
      super._BufferingStreamSubscription(onData, onError, onDone, cancelOnError);
    }
  }
  dart.setSignature(_ControllerSubscription, {
    constructors: () => ({_ControllerSubscription: [_ControllerSubscription$(T), [_StreamControllerLifecycle$(T), dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]})
  });
  return _ControllerSubscription;
});
let _ControllerSubscription = _ControllerSubscription$();
const _next = Symbol('_next');
const _previous = Symbol('_previous');
const _BroadcastSubscription$ = dart.generic(function(T) {
  class _BroadcastSubscription extends _ControllerSubscription$(T) {
    _BroadcastSubscription(controller, onData, onError, onDone, cancelOnError) {
      this[_next] = null;
      this[_previous] = null;
      super._ControllerSubscription(dart.as(controller, _StreamControllerLifecycle$(T)), onData, onError, onDone, cancelOnError);
      this[_next] = this[_previous] = this;
    }
  }
  _BroadcastSubscription[dart.implements] = () => [_BroadcastSubscriptionLink];
  dart.setSignature(_BroadcastSubscription, {
    constructors: () => ({_BroadcastSubscription: [_BroadcastSubscription$(T), [_StreamControllerLifecycle, dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]})
  });
  return _BroadcastSubscription;
});
let _BroadcastSubscription = _BroadcastSubscription$();
const _onListen = Symbol('_onListen');
const _onCancel = Symbol('_onCancel');
const _eventState = Symbol('_eventState');
const _addListener = Symbol('_addListener');
const _mayAddEvent = Symbol('_mayAddEvent');
const _addEventError = Symbol('_addEventError');
const _sendData = Symbol('_sendData');
const _sendError = Symbol('_sendError');
const _doneFuture = Symbol('_doneFuture');
const _ensureDoneFuture = Symbol('_ensureDoneFuture');
const _addStreamState = Symbol('_addStreamState');
const _isAddingStream = Symbol('_isAddingStream');
const _BroadcastStreamController$ = dart.generic(function(T) {
  class _BroadcastStreamController extends core.Object {
    _BroadcastStreamController(onListen, onCancel) {
      this[_onListen] = onListen;
      this[_onCancel] = onCancel;
      this[_state] = _BroadcastStreamController$()._STATE_INITIAL;
      this[_next] = null;
      this[_previous] = null;
      this[_next] = this[_previous] = this;
    }
    get stream() {
      return new (_BroadcastStream$(T))(this);
    }
    get isClosed() {
      return (dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_CLOSED)) != 0;
    }
    [_addListener](subscription) {
      dart.as(subscription, _BroadcastSubscription$(T));
      dart.assert(core.identical(subscription[_next], subscription));
      subscription[_previous] = this[_previous];
      subscription[_next] = this;
      this[_previous][_next] = subscription;
      this[_previous] = subscription;
      subscription[_eventState] = dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_EVENT_ID);
    }
    add(data) {
      dart.as(data, T);
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_addEventError]());
      this[_sendData](data);
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      error = _nonNullError(error);
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_addEventError]());
      let replacement = Zone.current.errorCallback(error, stackTrace);
      if (replacement != null) {
        error = _nonNullError(replacement.error);
        stackTrace = replacement.stackTrace;
      }
      this[_sendError](error, stackTrace);
    }
    close() {
      if (dart.notNull(this.isClosed)) {
        dart.assert(this[_doneFuture] != null);
        return this[_doneFuture];
      }
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_addEventError]());
      this[_state] = dart.notNull(this[_state]) | dart.notNull(_BroadcastStreamController$()._STATE_CLOSED);
      let doneFuture = this[_ensureDoneFuture]();
      this[_sendDone]();
      return doneFuture;
    }
    get done() {
      return this[_ensureDoneFuture]();
    }
    addStream(stream, {cancelOnError = true} = {}) {
      dart.as(stream, Stream$(T));
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_addEventError]());
      this[_state] = dart.notNull(this[_state]) | dart.notNull(_BroadcastStreamController$()._STATE_ADDSTREAM);
      this[_addStreamState] = new (_AddStreamState$(T))(this, stream, cancelOnError);
      return this[_addStreamState].addStreamFuture;
    }
    [_close]() {
      dart.assert(this[_isAddingStream]);
      let addState = this[_addStreamState];
      this[_addStreamState] = null;
      this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_BroadcastStreamController$()._STATE_ADDSTREAM);
      addState.complete();
    }
  }
  _BroadcastStreamController[dart.implements] = () => [StreamController$(T), _StreamControllerLifecycle$(T), _BroadcastSubscriptionLink, _EventSink$(T), _EventDispatch$(T)];
  dart.setSignature(_BroadcastStreamController, {
    constructors: () => ({_BroadcastStreamController: [_BroadcastStreamController$(T), [_NotificationHandler, _NotificationHandler]]}),
    methods: () => ({
      [_addListener]: [dart.void, [_BroadcastSubscription$(T)]],
      add: [dart.void, [T]],
      addError: [dart.void, [core.Object], [core.StackTrace]],
      close: [Future, []],
      addStream: [Future, [Stream$(T)], {cancelOnError: core.bool}],
      [_close]: [dart.void, []]
    })
  });
  _BroadcastStreamController._STATE_INITIAL = 0;
  return _BroadcastStreamController;
});
let _BroadcastStreamController = _BroadcastStreamController$();
const _SyncBroadcastStreamController$ = dart.generic(function(T) {
  class _SyncBroadcastStreamController extends _BroadcastStreamController$(T) {
    _SyncBroadcastStreamController(onListen, onCancel) {
      super._BroadcastStreamController(onListen, onCancel);
    }
  }
  dart.setSignature(_SyncBroadcastStreamController, {
    constructors: () => ({_SyncBroadcastStreamController: [_SyncBroadcastStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, [])]]})
  });
  return _SyncBroadcastStreamController;
});
let _SyncBroadcastStreamController = _SyncBroadcastStreamController$();
const _isFiring = Symbol('_isFiring');
const _addPendingEvent = Symbol('_addPendingEvent');
const _hasPending = Symbol('_hasPending');
const _pending = Symbol('_pending');
const _AsBroadcastStreamController$ = dart.generic(function(T) {
  class _AsBroadcastStreamController extends _SyncBroadcastStreamController$(T) {
    _AsBroadcastStreamController(onListen, onCancel) {
      super._SyncBroadcastStreamController(onListen, onCancel);
    }
    add(data) {
      dart.as(data, T);
      if (!dart.notNull(this.isClosed) && dart.notNull(this[_isFiring])) {
        this[_addPendingEvent](new (_DelayedData$(T))(data));
        return;
      }
      super.add(data);
      while (dart.notNull(this[_hasPending])) {
        this[_pending].handleNext(this);
      }
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      if (!dart.notNull(this.isClosed) && dart.notNull(this[_isFiring])) {
        this[_addPendingEvent](new _DelayedError(error, stackTrace));
        return;
      }
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_addEventError]());
      this[_sendError](error, stackTrace);
      while (dart.notNull(this[_hasPending])) {
        this[_pending].handleNext(this);
      }
    }
    close() {
      if (!dart.notNull(this.isClosed) && dart.notNull(this[_isFiring])) {
        this[_addPendingEvent](dart.const(new _DelayedDone()));
        this[_state] = dart.notNull(this[_state]) | dart.notNull(_BroadcastStreamController._STATE_CLOSED);
        return super.done;
      }
      let result = super.close();
      dart.assert(!dart.notNull(this[_hasPending]));
      return result;
    }
  }
  _AsBroadcastStreamController[dart.implements] = () => [_EventDispatch$(T)];
  dart.setSignature(_AsBroadcastStreamController, {
    constructors: () => ({_AsBroadcastStreamController: [_AsBroadcastStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, [])]]}),
    methods: () => ({add: [dart.void, [T]]})
  });
  return _AsBroadcastStreamController;
});
let _AsBroadcastStreamController = _AsBroadcastStreamController$();
const Future$ = dart.generic(function(T) {
  class Future extends core.Object {
    static new(computation) {
      let result = new (_Future$(T))();
      Timer.run(dart.fn(() => {
        try {
          result[_complete](computation());
        } catch (e) {
          let s = dart.stackTrace(e);
          _completeWithErrorCallback(result, e, s);
        }

      }, dart.void, []));
      return dart.as(result, Future$(T));
    }
    static error(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      error = _nonNullError(error);
      if (!dart.notNull(core.identical(Zone.current, _ROOT_ZONE))) {
        let replacement = Zone.current.errorCallback(error, stackTrace);
        if (replacement != null) {
          error = _nonNullError(replacement.error);
          stackTrace = replacement.stackTrace;
        }
      }
      return new (_Future$(T)).immediateError(error, stackTrace);
    }
    static forEach(input, f) {
      dart.as(f, dart.functionType(dart.dynamic, [dart.dynamic]));
      let iterator = input[dartx.iterator];
      return Future$().doWhile(dart.fn(() => {
        if (!dart.notNull(iterator.moveNext())) return false;
        return Future$().sync(dart.fn(() => dart.dcall(f, iterator.current))).then(dart.fn(_ => true, core.bool, [dart.dynamic]));
      }));
    }
  }
  dart.setSignature(Future, {
    constructors: () => ({
      new: [Future$(T), [dart.functionType(dart.dynamic, [])]],
      error: [Future$(T), [core.Object], [core.StackTrace]]
    }),
    statics: () => ({forEach: [Future$(), [core.Iterable, dart.functionType(dart.dynamic, [dart.dynamic])]]}),
    names: ['forEach']
  });
  return Future;
});
let Future = Future$();
const Completer$ = dart.generic(function(T) {
  class Completer extends core.Object {
    static new() {
      return new (_AsyncCompleter$(T))();
    }
  }
  dart.setSignature(Completer, {
    constructors: () => ({new: [Completer$(T), []]})
  });
  return Completer;
});
let Completer = Completer$();
function _completeWithErrorCallback(result, error, stackTrace) {
  let replacement = Zone.current.errorCallback(error, dart.as(stackTrace, core.StackTrace));
  if (replacement != null) {
    error = _nonNullError(replacement.error);
    stackTrace = replacement.stackTrace;
  }
  result[_completeError](error, dart.as(stackTrace, core.StackTrace));
}
dart.fn(_completeWithErrorCallback, () => dart.definiteFunctionType(dart.void, [_Future, dart.dynamic, dart.dynamic]));
function _nonNullError(error) {
  return error != null ? error : new core.NullThrownError();
}
dart.fn(_nonNullError, core.Object, [core.Object]);
const __CastType2 = dart.typedef('__CastType2', () => dart.functionType(dart.dynamic, [dart.dynamic]));
const _FutureOnValue$ = dart.generic(function(T) {
  const _FutureOnValue = dart.typedef('_FutureOnValue', () => dart.functionType(dart.dynamic, [T]));
  return _FutureOnValue;
});
let _FutureOnValue = _FutureOnValue$();
const _FutureErrorTest = dart.typedef('_FutureErrorTest', () => dart.functionType(core.bool, [dart.dynamic]));
const _FutureAction = dart.typedef('_FutureAction', () => dart.functionType(dart.dynamic, []));
const _mayComplete = Symbol('_mayComplete');
const _Completer$ = dart.generic(function(T) {
  class _Completer extends core.Object {
    _Completer() {
      this.future = new (_Future$(T))();
    }
    completeError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      error = _nonNullError(error);
      if (!dart.notNull(this.future[_mayComplete])) dart.throw(new core.StateError("Future already completed"));
      let replacement = Zone.current.errorCallback(error, stackTrace);
      if (replacement != null) {
        error = _nonNullError(replacement.error);
        stackTrace = replacement.stackTrace;
      }
      this[_completeError](error, stackTrace);
    }
  }
  _Completer[dart.implements] = () => [Completer$(T)];
  dart.setSignature(_Completer, {
    methods: () => ({completeError: [dart.void, [core.Object], [core.StackTrace]]})
  });
  return _Completer;
});
let _Completer = _Completer$();
const _asyncComplete = Symbol('_asyncComplete');
const _asyncCompleteError = Symbol('_asyncCompleteError');
const _AsyncCompleter$ = dart.generic(function(T) {
  class _AsyncCompleter extends _Completer$(T) {
    _AsyncCompleter() {
      super._Completer();
    }
    complete(value) {
      if (value === void 0) value = null;
      if (!dart.notNull(this.future[_mayComplete])) dart.throw(new core.StateError("Future already completed"));
      this.future[_asyncComplete](value);
    }
    [_completeError](error, stackTrace) {
      this.future[_asyncCompleteError](error, stackTrace);
    }
  }
  dart.setSignature(_AsyncCompleter, {
    methods: () => ({
      complete: [dart.void, [], [dart.dynamic]],
      [_completeError]: [dart.void, [core.Object, core.StackTrace]]
    })
  });
  return _AsyncCompleter;
});
let _AsyncCompleter = _AsyncCompleter$();
const _nextListener = Symbol('_nextListener');
const _onValue = Symbol('_onValue');
const _errorTest = Symbol('_errorTest');
const _whenCompleteAction = Symbol('_whenCompleteAction');
class _FutureListener extends core.Object {
  then(result, onValue, errorCallback) {
    this.result = result;
    this.callback = onValue;
    this.errorCallback = errorCallback;
    this.state = errorCallback == null ? _FutureListener.STATE_THEN : _FutureListener.STATE_THEN_ONERROR;
    this[_nextListener] = null;
  }
  chain(result) {
    this.result = result;
    this.callback = null;
    this.errorCallback = null;
    this.state = _FutureListener.STATE_CHAIN;
    this[_nextListener] = null;
  }
  get [_zone]() {
    return this.result[_zone];
  }
  get handlesValue() {
    return (dart.notNull(this.state) & dart.notNull(_FutureListener.MASK_VALUE)) != 0;
  }
  get hasErrorTest() {
    return this.state == _FutureListener.STATE_CATCHERROR_TEST;
  }
  get handlesComplete() {
    return this.state == _FutureListener.STATE_WHENCOMPLETE;
  }
  get [_onValue]() {
    dart.assert(this.handlesValue);
    return dart.as(this.callback, _FutureOnValue);
  }
  get [_onError]() {
    return this.errorCallback;
  }
  get [_errorTest]() {
    dart.assert(this.hasErrorTest);
    return dart.as(this.callback, _FutureErrorTest);
  }
  get [_whenCompleteAction]() {
    dart.assert(this.handlesComplete);
    return dart.as(this.callback, _FutureAction);
  }
}
dart.defineNamedConstructor(_FutureListener, 'then');
dart.defineNamedConstructor(_FutureListener, 'chain');
dart.setSignature(_FutureListener, {
  constructors: () => ({
    then: [_FutureListener, [_Future, _FutureOnValue, core.Function]],
    chain: [_FutureListener, [_Future]]
  })
});
_FutureListener.STATE_CHAIN = 0;
const _resultOrListeners = Symbol('_resultOrListeners');
const _isChained = Symbol('_isChained');
const _isComplete = Symbol('_isComplete');
const _hasError = Symbol('_hasError');
const _markPendingCompletion = Symbol('_markPendingCompletion');
const _error = Symbol('_error');
const _setValue = Symbol('_setValue');
const _setErrorObject = Symbol('_setErrorObject');
const _setError = Symbol('_setError');
const _removeListeners = Symbol('_removeListeners');
const _completeWithValue = Symbol('_completeWithValue');
const _value = Symbol('_value');
const _Future$ = dart.generic(function(T) {
  class _Future extends core.Object {
    _Future() {
      this[_zone] = Zone.current;
      this[_state] = _Future$()._INCOMPLETE;
      this[_resultOrListeners] = null;
    }
    immediateError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_zone] = Zone.current;
      this[_state] = _Future$()._INCOMPLETE;
      this[_resultOrListeners] = null;
      this[_asyncCompleteError](error, stackTrace);
    }
    get [_mayComplete]() {
      return this[_state] == _Future$()._INCOMPLETE;
    }
    get [_isChained]() {
      return this[_state] == _Future$()._CHAINED;
    }
    get [_isComplete]() {
      return dart.notNull(this[_state]) >= dart.notNull(_Future$()._VALUE);
    }
    get [_hasError]() {
      return this[_state] == _Future$()._ERROR;
    }
    set [_isChained](value) {
      if (dart.notNull(value)) {
        dart.assert(!dart.notNull(this[_isComplete]));
        this[_state] = _Future$()._CHAINED;
      } else {
        dart.assert(this[_isChained]);
        this[_state] = _Future$()._INCOMPLETE;
      }
    }
    then(f, {onError = null} = {}) {
      dart.as(f, dart.functionType(dart.dynamic, [T]));
      let result = new (_Future$())();
      if (!dart.notNull(core.identical(result[_zone], _ROOT_ZONE))) {
        f = dart.as(result[_zone].registerUnaryCallback(f), __CastType4);
        if (onError != null) {
          onError = _registerErrorHandler(onError, result[_zone]);
        }
      }
      this[_addListener](new _FutureListener.then(result, f, onError));
      return result;
    }
    catchError(onError, {test = null} = {}) {
      dart.as(test, dart.functionType(core.bool, [dart.dynamic]));
      let result = new (_Future$())();
      if (!dart.notNull(core.identical(result[_zone], _ROOT_ZONE))) {
        onError = _registerErrorHandler(onError, result[_zone]);
        if (test != null) test = dart.as(result[_zone].registerUnaryCallback(test), __CastType6);
      }
      this[_addListener](new _FutureListener.catchError(result, onError, test));
      return result;
    }
    [_markPendingCompletion]() {
      if (!dart.notNull(this[_mayComplete])) dart.throw(new core.StateError("Future already completed"));
      this[_state] = _Future$()._PENDING_COMPLETE;
    }
    get [_error]() {
      dart.assert(dart.notNull(this[_isComplete]) && dart.notNull(this[_hasError]));
      return dart.as(this[_resultOrListeners], AsyncError);
    }
    [_setValue](value) {
      dart.as(value, T);
      dart.assert(!dart.notNull(this[_isComplete]));
      this[_state] = _Future$()._VALUE;
      this[_resultOrListeners] = value;
    }
    [_setErrorObject](error) {
      dart.assert(!dart.notNull(this[_isComplete]));
      this[_state] = _Future$()._ERROR;
      this[_resultOrListeners] = error;
    }
    [_setError](error, stackTrace) {
      this[_setErrorObject](new AsyncError(error, stackTrace));
    }
    [_addListener](listener) {
      dart.assert(listener[_nextListener] == null);
      if (dart.notNull(this[_isComplete])) {
        this[_zone].scheduleMicrotask(dart.fn((() => {
          _Future$()._propagateToListeners(this, listener);
        }).bind(this), dart.void, []));
      } else {
        listener[_nextListener] = dart.as(this[_resultOrListeners], _FutureListener);
        this[_resultOrListeners] = listener;
      }
    }
    [_removeListeners]() {
      dart.assert(!dart.notNull(this[_isComplete]));
      let current = dart.as(this[_resultOrListeners], _FutureListener);
      this[_resultOrListeners] = null;
      let prev = null;
      while (current != null) {
        let next = current[_nextListener];
        current[_nextListener] = prev;
        prev = current;
        current = next;
      }
      return prev;
    }
    static _chainForeignFuture(source, target) {
      dart.assert(!dart.notNull(target[_isComplete]));
      dart.assert(!dart.is(source, _Future$()));
      target[_isChained] = true;
      source.then(dart.fn(value => {
        dart.assert(target[_isChained]);
        target[_completeWithValue](value);
      }), {onError: dart.fn((error, stackTrace) => {
          if (stackTrace === void 0) stackTrace = null;
          dart.assert(target[_isChained]);
          target[_completeError](error, dart.as(stackTrace, core.StackTrace));
        }, dart.dynamic, [dart.dynamic], [dart.dynamic])});
    }
    static _chainCoreFuture(source, target) {
      dart.assert(!dart.notNull(target[_isComplete]));
      dart.assert(dart.is(source, _Future$()));
      target[_isChained] = true;
      let listener = new _FutureListener.chain(target);
      if (dart.notNull(source[_isComplete])) {
        _Future$()._propagateToListeners(source, listener);
      } else {
        source[_addListener](listener);
      }
    }
    [_complete](value) {
      dart.assert(!dart.notNull(this[_isComplete]));
      if (dart.is(value, Future)) {
        if (dart.is(value, _Future$())) {
          _Future$()._chainCoreFuture(value, this);
        } else {
          _Future$()._chainForeignFuture(value, this);
        }
      } else {
        let listeners = this[_removeListeners]();
        this[_setValue](dart.as(value, T));
        _Future$()._propagateToListeners(this, listeners);
      }
    }
    [_completeWithValue](value) {
      dart.assert(!dart.notNull(this[_isComplete]));
      dart.assert(!dart.is(value, Future));
      let listeners = this[_removeListeners]();
      this[_setValue](dart.as(value, T));
      _Future$()._propagateToListeners(this, listeners);
    }
    [_completeError](error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      dart.assert(!dart.notNull(this[_isComplete]));
      let listeners = this[_removeListeners]();
      this[_setError](error, stackTrace);
      _Future$()._propagateToListeners(this, listeners);
    }
    [_asyncCompleteError](error, stackTrace) {
      dart.assert(!dart.notNull(this[_isComplete]));
      this[_markPendingCompletion]();
      this[_zone].scheduleMicrotask(dart.fn((() => {
        this[_completeError](error, stackTrace);
      }).bind(this), dart.void, []));
    }
    static _propagateToListeners(source, listeners) {
      while (true) {
        dart.assert(source[_isComplete]);
        let hasError = source[_hasError];
        if (listeners == null) {
          if (dart.notNull(hasError)) {
            let asyncError = source[_error];
            source[_zone].handleUncaughtError(asyncError.error, asyncError.stackTrace);
          }
          return;
        }
        while (listeners[_nextListener] != null) {
          let listener = listeners;
          listeners = listener[_nextListener];
          listener[_nextListener] = null;
          _Future$()._propagateToListeners(source, listener);
        }
        let listener = listeners;
        let listenerHasValue = true;
        let sourceValue = dart.notNull(hasError) ? null : source[_value];
        let listenerValueOrError = sourceValue;
        let isPropagationAborted = false;
        if (dart.notNull(hasError) || dart.notNull(listener.handlesValue) || dart.notNull(listener.handlesComplete)) {
          let zone = listener[_zone];
          if (dart.notNull(hasError) && !dart.notNull(source[_zone].inSameErrorZone(zone))) {
            let asyncError = source[_error];
            source[_zone].handleUncaughtError(asyncError.error, asyncError.stackTrace);
            return;
          }
          let oldZone = null;
          if (!dart.notNull(core.identical(Zone.current, zone))) {
            oldZone = Zone._enter(zone);
          }
          function handleValueCallback() {
            try {
              listenerValueOrError = zone.runUnary(listener[_onValue], sourceValue);
              return true;
            } catch (e) {
              let s = dart.stackTrace(e);
              listenerValueOrError = new AsyncError(e, s);
              return false;
            }

          }
          dart.fn(handleValueCallback, core.bool, []);
          function handleError() {
            let asyncError = source[_error];
            let matchesTest = true;
            if (dart.notNull(listener.hasErrorTest)) {
              let test = listener[_errorTest];
              try {
                matchesTest = dart.as(zone.runUnary(test, asyncError.error), core.bool);
              } catch (e) {
                let s = dart.stackTrace(e);
                listenerValueOrError = dart.notNull(core.identical(asyncError.error, e)) ? asyncError : new AsyncError(e, s);
                listenerHasValue = false;
                return;
              }

            }
            let errorCallback = listener[_onError];
            if (dart.notNull(matchesTest) && errorCallback != null) {
              try {
                if (dart.is(errorCallback, ZoneBinaryCallback)) {
                  listenerValueOrError = zone.runBinary(errorCallback, asyncError.error, asyncError.stackTrace);
                } else {
                  listenerValueOrError = zone.runUnary(dart.as(errorCallback, __CastType8), asyncError.error);
                }
              } catch (e) {
                let s = dart.stackTrace(e);
                listenerValueOrError = dart.notNull(core.identical(asyncError.error, e)) ? asyncError : new AsyncError(e, s);
                listenerHasValue = false;
                return;
              }

              listenerHasValue = true;
            } else {
              listenerValueOrError = asyncError;
              listenerHasValue = false;
            }
          }
          dart.fn(handleError, dart.void, []);
          function handleWhenCompleteCallback() {
            let completeResult = null;
            try {
              completeResult = zone.run(listener[_whenCompleteAction]);
            } catch (e) {
              let s = dart.stackTrace(e);
              if (dart.notNull(hasError) && dart.notNull(core.identical(source[_error].error, e))) {
                listenerValueOrError = source[_error];
              } else {
                listenerValueOrError = new AsyncError(e, s);
              }
              listenerHasValue = false;
              return;
            }

            if (dart.is(completeResult, Future)) {
              let result = listener.result;
              result[_isChained] = true;
              isPropagationAborted = true;
              dart.dsend(completeResult, 'then', dart.fn(ignored => {
                _Future$()._propagateToListeners(source, new _FutureListener.chain(result));
              }), {onError: dart.fn((error, stackTrace) => {
                  if (stackTrace === void 0) stackTrace = null;
                  if (!dart.is(completeResult, _Future$())) {
                    completeResult = new (_Future$())();
                    dart.dsend(completeResult, _setError, error, stackTrace);
                  }
                  _Future$()._propagateToListeners(dart.as(completeResult, _Future$()), new _FutureListener.chain(result));
                }, dart.dynamic, [dart.dynamic], [dart.dynamic])});
            }
          }
          dart.fn(handleWhenCompleteCallback, dart.void, []);
          if (!dart.notNull(hasError)) {
            if (dart.notNull(listener.handlesValue)) {
              listenerHasValue = handleValueCallback();
            }
          } else {
            handleError();
          }
          if (dart.notNull(listener.handlesComplete)) {
            handleWhenCompleteCallback();
          }
          if (oldZone != null) Zone._leave(oldZone);
          if (isPropagationAborted) return;
          if (dart.notNull(listenerHasValue) && !dart.notNull(core.identical(sourceValue, listenerValueOrError)) && dart.is(listenerValueOrError, Future)) {
            let chainSource = dart.as(listenerValueOrError, Future);
            let result = listener.result;
            if (dart.is(chainSource, _Future$())) {
              if (dart.notNull(chainSource[_isComplete])) {
                result[_isChained] = true;
                source = chainSource;
                listeners = new _FutureListener.chain(result);
                continue;
              } else {
                _Future$()._chainCoreFuture(chainSource, result);
              }
            } else {
              _Future$()._chainForeignFuture(chainSource, result);
            }
            return;
          }
        }
        let result = listener.result;
        listeners = result[_removeListeners]();
        if (dart.notNull(listenerHasValue)) {
          result[_setValue](listenerValueOrError);
        } else {
          let asyncError = dart.as(listenerValueOrError, AsyncError);
          result[_setErrorObject](asyncError);
        }
        source = result;
      }
    }
  }
  _Future[dart.implements] = () => [Future$(T)];
  dart.defineNamedConstructor(_Future, 'immediateError');
  dart.setSignature(_Future, {
    constructors: () => ({
      _Future: [_Future$(T), []],
      immediateError: [_Future$(T), [dart.dynamic], [core.StackTrace]]
    }),
    methods: () => ({
      then: [Future, [dart.functionType(dart.dynamic, [T])], {onError: core.Function}],
      catchError: [Future, [core.Function], {test: dart.functionType(core.bool, [dart.dynamic])}],
      [_markPendingCompletion]: [dart.void, []],
      [_setValue]: [dart.void, [T]],
      [_setErrorObject]: [dart.void, [AsyncError]],
      [_setError]: [dart.void, [core.Object, core.StackTrace]],
      [_addListener]: [dart.void, [_FutureListener]],
      [_removeListeners]: [_FutureListener, []],
      [_complete]: [dart.void, [dart.dynamic]],
      [_completeWithValue]: [dart.void, [dart.dynamic]],
      [_completeError]: [dart.void, [dart.dynamic], [core.StackTrace]],
      [_asyncCompleteError]: [dart.void, [dart.dynamic, core.StackTrace]]
    }),
    statics: () => ({
      _chainForeignFuture: [dart.void, [Future, _Future$()]],
      _chainCoreFuture: [dart.void, [_Future$(), _Future$()]],
      _propagateToListeners: [dart.void, [_Future$(), _FutureListener]]
    }),
    names: ['_chainForeignFuture', '_chainCoreFuture', '_propagateToListeners']
  });
  _Future._INCOMPLETE = 0;
  _Future._PENDING_COMPLETE = 1;
  _Future._VALUE = 4;
  _Future._ERROR = 8;
  return _Future;
});
let _Future = _Future$();
const __CastType4$ = dart.generic(function(T, S) {
  const __CastType4 = dart.typedef('__CastType4', () => dart.functionType(S, [T]));
  return __CastType4;
});
let __CastType4 = __CastType4$();
const __CastType6 = dart.typedef('__CastType6', () => dart.functionType(core.bool, [dart.dynamic]));
const __CastType8 = dart.typedef('__CastType8', () => dart.functionType(dart.dynamic, [dart.dynamic]));
const _AsyncCallback = dart.typedef('_AsyncCallback', () => dart.functionType(dart.void, []));
class _AsyncCallbackEntry extends core.Object {
  _AsyncCallbackEntry(callback) {
    this.callback = callback;
    this.next = null;
  }
}
dart.setSignature(_AsyncCallbackEntry, {
  constructors: () => ({_AsyncCallbackEntry: [_AsyncCallbackEntry, [_AsyncCallback]]})
});
exports._nextCallback = null;
exports._lastCallback = null;
exports._lastPriorityCallback = null;
exports._isInCallbackLoop = false;
function _asyncRunCallbackLoop() {
  while (exports._nextCallback != null) {
    exports._lastPriorityCallback = null;
    let entry = exports._nextCallback;
    exports._nextCallback = entry.next;
    if (exports._nextCallback == null) exports._lastCallback = null;
    entry.callback();
  }
}
dart.fn(_asyncRunCallbackLoop, dart.void, []);
function _asyncRunCallback() {
  exports._isInCallbackLoop = true;
  try {
    _asyncRunCallbackLoop();
  } finally {
    exports._lastPriorityCallback = null;
    exports._isInCallbackLoop = false;
    if (exports._nextCallback != null) _AsyncRun._scheduleImmediate(_asyncRunCallback);
  }
}
dart.fn(_asyncRunCallback, dart.void, []);
function _scheduleAsyncCallback(callback) {
  if (exports._nextCallback == null) {
    exports._nextCallback = exports._lastCallback = new _AsyncCallbackEntry(dart.as(callback, _AsyncCallback));
    if (!dart.notNull(exports._isInCallbackLoop)) {
      _AsyncRun._scheduleImmediate(_asyncRunCallback);
    }
  } else {
    let newEntry = new _AsyncCallbackEntry(dart.as(callback, _AsyncCallback));
    exports._lastCallback.next = newEntry;
    exports._lastCallback = newEntry;
  }
}
dart.fn(_scheduleAsyncCallback, dart.void, [dart.dynamic]);
function scheduleMicrotask(callback) {
  if (dart.notNull(core.identical(_ROOT_ZONE, Zone.current))) {
    _rootScheduleMicrotask(null, null, _ROOT_ZONE, callback);
    return;
  }
  Zone.current.scheduleMicrotask(Zone.current.bindCallback(callback, {runGuarded: true}));
}
dart.fn(scheduleMicrotask, dart.void, [dart.functionType(dart.void, [])]);
class _AsyncRun extends core.Object {
  static _scheduleImmediate(callback) {
    dart.dcall(_AsyncRun.scheduleImmediateClosure, callback);
  }
  static _initializeScheduleImmediate() {
    if (self.scheduleImmediate != null) {
      return _AsyncRun._scheduleImmediateJsOverride;
    }
    if (self.MutationObserver != null && self.document != null) {
      let div = self.document.createElement("div");
      let span = self.document.createElement("span");
      let storedCallback = null;
      function internalCallback(_) {
        _isolate_helper.leaveJsAsync();
        let f = storedCallback;
        storedCallback = null;
        dart.dcall(f);
      }
      dart.fn(internalCallback);
      ;
      let observer = new self.MutationObserver(internalCallback);
      observer.observe(div, {childList: true});
      return dart.fn(callback => {
        dart.assert(storedCallback == null);
        _isolate_helper.enterJsAsync();
        storedCallback = callback;
        div.firstChild ? div.removeChild(span) : div.appendChild(span);
      }, dart.dynamic, [dart.functionType(dart.void, [])]);
    } else if (self.setImmediate != null) {
      return _AsyncRun._scheduleImmediateWithSetImmediate;
    }
    return _AsyncRun._scheduleImmediateWithTimer;
  }
  static _scheduleImmediateJsOverride(callback) {
    function internalCallback() {
      _isolate_helper.leaveJsAsync();
      callback();
    }
    dart.fn(internalCallback);
    ;
    _isolate_helper.enterJsAsync();
    self.scheduleImmediate(internalCallback);
  }
  static _scheduleImmediateWithSetImmediate(callback) {
    function internalCallback() {
      _isolate_helper.leaveJsAsync();
      callback();
    }
    dart.fn(internalCallback);
    ;
    _isolate_helper.enterJsAsync();
    self.setImmediate(internalCallback);
  }
  static _scheduleImmediateWithTimer(callback) {
    Timer._createTimer(core.Duration.ZERO, callback);
  }
}
dart.setSignature(_AsyncRun, {
  statics: () => ({
    _scheduleImmediate: [dart.void, [dart.functionType(dart.void, [])]],
    _initializeScheduleImmediate: [core.Function, []],
    _scheduleImmediateJsOverride: [dart.void, [dart.functionType(dart.void, [])]],
    _scheduleImmediateWithSetImmediate: [dart.void, [dart.functionType(dart.void, [])]],
    _scheduleImmediateWithTimer: [dart.void, [dart.functionType(dart.void, [])]]
  }),
  names: ['_scheduleImmediate', '_initializeScheduleImmediate', '_scheduleImmediateJsOverride', '_scheduleImmediateWithSetImmediate', '_scheduleImmediateWithTimer']
});
dart.defineLazyProperties(_AsyncRun, {
  get scheduleImmediateClosure() {
    return _AsyncRun._initializeScheduleImmediate();
  }
});
const Stream$ = dart.generic(function(T) {
  class Stream extends core.Object {
    Stream() {
    }
    get isBroadcast() {
      return false;
    }
    asBroadcastStream({onListen = null, onCancel = null} = {}) {
      dart.as(onListen, dart.functionType(dart.void, [StreamSubscription$(T)]));
      dart.as(onCancel, dart.functionType(dart.void, [StreamSubscription$(T)]));
      return new (_AsBroadcastStream$(T))(this, dart.as(onListen, __CastType10), dart.as(onCancel, dart.functionType(dart.void, [StreamSubscription])));
    }
    where(test) {
      dart.as(test, dart.functionType(core.bool, [T]));
      return new (_WhereStream$(T))(this, test);
    }
    map(convert) {
      dart.as(convert, dart.functionType(dart.dynamic, [T]));
      return new (_MapStream$(T, dart.dynamic))(this, convert);
    }
    pipe(streamConsumer) {
      dart.as(streamConsumer, StreamConsumer$(T));
      return streamConsumer.addStream(this).then(dart.fn(_ => streamConsumer.close(), Future, [dart.dynamic]));
    }
    transform(streamTransformer) {
      dart.as(streamTransformer, StreamTransformer$(T, dart.dynamic));
      return streamTransformer.bind(this);
    }
    join(separator) {
      if (separator === void 0) separator = "";
      let result = new (_Future$(core.String))();
      let buffer = new core.StringBuffer();
      let subscription = null;
      let first = true;
      subscription = this.listen(dart.fn(element => {
        dart.as(element, T);
        if (!first) {
          buffer.write(separator);
        }
        first = false;
        try {
          buffer.write(element);
        } catch (e) {
          let s = dart.stackTrace(e);
          _cancelAndErrorWithReplacement(subscription, result, e, s);
        }

      }, dart.void, [T]), {onError: dart.fn(e => {
          result[_completeError](e);
        }), onDone: dart.fn(() => {
          result[_complete](dart.toString(buffer));
        }, dart.void, []), cancelOnError: true});
      return result;
    }
    contains(needle) {
      let future = new (_Future$(core.bool))();
      let subscription = null;
      subscription = this.listen(dart.fn(element => {
        dart.as(element, T);
        _runUserCode(dart.fn(() => dart.equals(element, needle), core.bool, []), dart.fn(isMatch => {
          if (dart.notNull(isMatch)) {
            _cancelAndValue(subscription, future, true);
          }
        }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
      }, dart.void, [T]), {onError: dart.bind(future, _completeError), onDone: dart.fn(() => {
          future[_complete](false);
        }, dart.void, []), cancelOnError: true});
      return future;
    }
    forEach(action) {
      dart.as(action, dart.functionType(dart.void, [T]));
      let future = new _Future();
      let subscription = null;
      subscription = this.listen(dart.fn(element => {
        dart.as(element, T);
        _runUserCode(dart.fn(() => action(element), dart.void, []), dart.fn(_ => {
        }), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
      }, dart.void, [T]), {onError: dart.bind(future, _completeError), onDone: dart.fn(() => {
          future[_complete](null);
        }, dart.void, []), cancelOnError: true});
      return future;
    }
    any(test) {
      dart.as(test, dart.functionType(core.bool, [T]));
      let future = new (_Future$(core.bool))();
      let subscription = null;
      subscription = this.listen(dart.fn(element => {
        dart.as(element, T);
        _runUserCode(dart.fn(() => test(element), core.bool, []), dart.fn(isMatch => {
          if (dart.notNull(isMatch)) {
            _cancelAndValue(subscription, future, true);
          }
        }, dart.dynamic, [core.bool]), dart.as(_cancelAndErrorClosure(subscription, future), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])));
      }, dart.void, [T]), {onError: dart.bind(future, _completeError), onDone: dart.fn(() => {
          future[_complete](false);
        }, dart.void, []), cancelOnError: true});
      return future;
    }
    get length() {
      let future = new (_Future$(core.int))();
      let count = 0;
      this.listen(dart.fn(_ => {
        dart.as(_, T);
        count++;
      }, dart.void, [T]), {onError: dart.bind(future, _completeError), onDone: dart.fn(() => {
          future[_complete](count);
        }, dart.void, []), cancelOnError: true});
      return future;
    }
    get isEmpty() {
      let future = new (_Future$(core.bool))();
      let subscription = null;
      subscription = this.listen(dart.fn(_ => {
        dart.as(_, T);
        _cancelAndValue(subscription, future, false);
      }, dart.void, [T]), {onError: dart.bind(future, _completeError), onDone: dart.fn(() => {
          future[_complete](true);
        }, dart.void, []), cancelOnError: true});
      return future;
    }
    toList() {
      let result = dart.list([], T);
      let future = new (_Future$(core.List$(T)))();
      this.listen(dart.fn(data => {
        dart.as(data, T);
        result[dartx.add](data);
      }, dart.void, [T]), {onError: dart.bind(future, _completeError), onDone: dart.fn(() => {
          future[_complete](result);
        }, dart.void, []), cancelOnError: true});
      return future;
    }
    skip(count) {
      return new (_SkipStream$(T))(this, count);
    }
    get last() {
      let future = new (_Future$(T))();
      let result = null;
      let foundResult = false;
      let subscription = null;
      subscription = this.listen(dart.fn(value => {
        dart.as(value, T);
        foundResult = true;
        result = value;
      }, dart.void, [T]), {onError: dart.bind(future, _completeError), onDone: dart.fn(() => {
          if (foundResult) {
            future[_complete](result);
            return;
          }
          try {
            dart.throw(_internal.IterableElementError.noElement());
          } catch (e) {
            let s = dart.stackTrace(e);
            _completeWithErrorCallback(future, e, s);
          }

        }, dart.void, []), cancelOnError: true});
      return future;
    }
  }
  dart.setSignature(Stream, {
    constructors: () => ({Stream: [Stream$(T), []]}),
    methods: () => ({
      asBroadcastStream: [Stream$(T), [], {onListen: dart.functionType(dart.void, [StreamSubscription$(T)]), onCancel: dart.functionType(dart.void, [StreamSubscription$(T)])}],
      where: [Stream$(T), [dart.functionType(core.bool, [T])]],
      map: [Stream$(), [dart.functionType(dart.dynamic, [T])]],
      pipe: [Future, [StreamConsumer$(T)]],
      transform: [Stream$(), [StreamTransformer$(T, dart.dynamic)]],
      join: [Future$(core.String), [], [core.String]],
      contains: [Future$(core.bool), [core.Object]],
      forEach: [Future, [dart.functionType(dart.void, [T])]],
      any: [Future$(core.bool), [dart.functionType(core.bool, [T])]],
      toList: [Future$(core.List$(T)), []],
      skip: [Stream$(T), [core.int]]
    })
  });
  return Stream;
});
let Stream = Stream$();
const StreamSubscription$ = dart.generic(function(T) {
  class StreamSubscription extends core.Object {}
  return StreamSubscription;
});
let StreamSubscription = StreamSubscription$();
const EventSink$ = dart.generic(function(T) {
  class EventSink extends core.Object {}
  EventSink[dart.implements] = () => [core.Sink$(T)];
  return EventSink;
});
let EventSink = EventSink$();
const StreamConsumer$ = dart.generic(function(S) {
  class StreamConsumer extends core.Object {}
  return StreamConsumer;
});
let StreamConsumer = StreamConsumer$();
const StreamSink$ = dart.generic(function(S) {
  class StreamSink extends core.Object {}
  StreamSink[dart.implements] = () => [StreamConsumer$(S), EventSink$(S)];
  return StreamSink;
});
let StreamSink = StreamSink$();
const StreamTransformer$ = dart.generic(function(S, T) {
  class StreamTransformer extends core.Object {
    static new(transformer) {
      return new (_StreamSubscriptionTransformer$(S, T))(transformer);
    }
    static fromHandlers(opts) {
      return new (_StreamHandlerTransformer$(S, T))(opts);
    }
  }
  dart.setSignature(StreamTransformer, {
    constructors: () => ({
      new: [StreamTransformer$(S, T), [dart.functionType(StreamSubscription$(T), [Stream$(S), core.bool])]],
      fromHandlers: [StreamTransformer$(S, T), [], {handleData: dart.functionType(dart.void, [S, EventSink$(T)]), handleError: dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]), handleDone: dart.functionType(dart.void, [EventSink$(T)])}]
    })
  });
  return StreamTransformer;
});
let StreamTransformer = StreamTransformer$();
const __CastType10 = dart.typedef('__CastType10', () => dart.functionType(dart.void, [StreamSubscription]));
const __CastType12 = dart.typedef('__CastType12', () => dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace]));
const __CastType15 = dart.typedef('__CastType15', () => dart.functionType(dart.void, []));
const __CastType16 = dart.typedef('__CastType16', () => dart.functionType(dart.void, [EventSink]));
const StreamController$ = dart.generic(function(T) {
  class StreamController extends core.Object {
    static new({onListen = null, onPause = null, onResume = null, onCancel = null, sync = false} = {}) {
      if (onListen == null && onPause == null && onResume == null && onCancel == null) {
        return dart.notNull(sync) ? new (_NoCallbackSyncStreamController$(T))() : new (_NoCallbackAsyncStreamController$(T))();
      }
      return dart.notNull(sync) ? new (_SyncStreamController$(T))(onListen, onPause, onResume, onCancel) : new (_AsyncStreamController$(T))(onListen, onPause, onResume, onCancel);
    }
  }
  StreamController[dart.implements] = () => [StreamSink$(T)];
  dart.setSignature(StreamController, {
    constructors: () => ({new: [StreamController$(T), [], {onListen: dart.functionType(dart.void, []), onPause: dart.functionType(dart.void, []), onResume: dart.functionType(dart.void, []), onCancel: dart.functionType(dart.dynamic, []), sync: core.bool}]})
  });
  return StreamController;
});
let StreamController = StreamController$();
const _StreamControllerLifecycle$ = dart.generic(function(T) {
  class _StreamControllerLifecycle extends core.Object {}
  return _StreamControllerLifecycle;
});
let _StreamControllerLifecycle = _StreamControllerLifecycle$();
const _badEventState = Symbol('_badEventState');
const _varData = Symbol('_varData');
const _add = Symbol('_add');
const _addError = Symbol('_addError');
const _closeUnchecked = Symbol('_closeUnchecked');
const _StreamController$ = dart.generic(function(T) {
  class _StreamController extends core.Object {
    _StreamController() {
    }
    get stream() {
      return new (_ControllerStream$(T))(this);
    }
    addStream(source, {cancelOnError = true} = {}) {
      dart.as(source, Stream$(T));
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_badEventState]());
      if (dart.notNull(this[_isCanceled])) return new _Future.immediate(null);
      let addState = new _StreamControllerAddStreamState(this, this[_varData], source, cancelOnError);
      this[_varData] = addState;
      this[_state] = dart.notNull(this[_state]) | dart.notNull(_StreamController$()._STATE_ADDSTREAM);
      return addState.addStreamFuture;
    }
    get done() {
      return this[_ensureDoneFuture]();
    }
    add(value) {
      dart.as(value, T);
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_badEventState]());
      this[_add](value);
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      error = _nonNullError(error);
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_badEventState]());
      let replacement = Zone.current.errorCallback(error, stackTrace);
      if (replacement != null) {
        error = _nonNullError(replacement.error);
        stackTrace = replacement.stackTrace;
      }
      this[_addError](error, stackTrace);
    }
    close() {
      if (dart.notNull(this.isClosed)) {
        return this[_ensureDoneFuture]();
      }
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_badEventState]());
      this[_closeUnchecked]();
      return this[_ensureDoneFuture]();
    }
    [_close]() {
      dart.assert(this[_isAddingStream]);
      let addState = dart.as(this[_varData], _StreamControllerAddStreamState);
      this[_varData] = addState.varData;
      this[_state] = dart.notNull(this[_state]) & ~dart.notNull(_StreamController$()._STATE_ADDSTREAM);
      addState.complete();
    }
  }
  _StreamController[dart.implements] = () => [StreamController$(T), _StreamControllerLifecycle$(T), _EventSink$(T), _EventDispatch$(T)];
  dart.setSignature(_StreamController, {
    constructors: () => ({_StreamController: [_StreamController$(T), []]}),
    methods: () => ({
      addStream: [Future, [Stream$(T)], {cancelOnError: core.bool}],
      add: [dart.void, [T]],
      addError: [dart.void, [core.Object], [core.StackTrace]],
      close: [Future, []],
      [_close]: [dart.void, []]
    })
  });
  return _StreamController;
});
let _StreamController = _StreamController$();
const _SyncStreamControllerDispatch$ = dart.generic(function(T) {
  class _SyncStreamControllerDispatch extends core.Object {}
  _SyncStreamControllerDispatch[dart.implements] = () => [_StreamController$(T)];
  return _SyncStreamControllerDispatch;
});
let _SyncStreamControllerDispatch = _SyncStreamControllerDispatch$();
const _AsyncStreamControllerDispatch$ = dart.generic(function(T) {
  class _AsyncStreamControllerDispatch extends core.Object {}
  _AsyncStreamControllerDispatch[dart.implements] = () => [_StreamController$(T)];
  return _AsyncStreamControllerDispatch;
});
let _AsyncStreamControllerDispatch = _AsyncStreamControllerDispatch$();
const _onPause = Symbol('_onPause');
const _onResume = Symbol('_onResume');
const _AsyncStreamController$ = dart.generic(function(T) {
  class _AsyncStreamController extends dart.mixin(_StreamController$(T), _AsyncStreamControllerDispatch$(T)) {
    _AsyncStreamController(onListen, onPause, onResume, onCancel) {
      this[_onListen] = onListen;
      this[_onPause] = onPause;
      this[_onResume] = onResume;
      this[_onCancel] = onCancel;
      super._StreamController();
    }
  }
  dart.setSignature(_AsyncStreamController, {
    constructors: () => ({_AsyncStreamController: [_AsyncStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.dynamic, [])]]})
  });
  return _AsyncStreamController;
});
let _AsyncStreamController = _AsyncStreamController$();
const _SyncStreamController$ = dart.generic(function(T) {
  class _SyncStreamController extends dart.mixin(_StreamController$(T), _SyncStreamControllerDispatch$(T)) {
    _SyncStreamController(onListen, onPause, onResume, onCancel) {
      this[_onListen] = onListen;
      this[_onPause] = onPause;
      this[_onResume] = onResume;
      this[_onCancel] = onCancel;
      super._StreamController();
    }
  }
  dart.setSignature(_SyncStreamController, {
    constructors: () => ({_SyncStreamController: [_SyncStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.void, []), dart.functionType(dart.dynamic, [])]]})
  });
  return _SyncStreamController;
});
let _SyncStreamController = _SyncStreamController$();
class _NoCallbacks extends core.Object {}
const _NoCallbackAsyncStreamController$ = dart.generic(function(T) {
  class _NoCallbackAsyncStreamController extends dart.mixin(_StreamController$(T), _AsyncStreamControllerDispatch$(T), _NoCallbacks) {
    _NoCallbackAsyncStreamController() {
      super._StreamController(...arguments);
    }
  }
  return _NoCallbackAsyncStreamController;
});
let _NoCallbackAsyncStreamController = _NoCallbackAsyncStreamController$();
const _NoCallbackSyncStreamController$ = dart.generic(function(T) {
  class _NoCallbackSyncStreamController extends dart.mixin(_StreamController$(T), _SyncStreamControllerDispatch$(T), _NoCallbacks) {
    _NoCallbackSyncStreamController() {
      super._StreamController(...arguments);
    }
  }
  return _NoCallbackSyncStreamController;
});
let _NoCallbackSyncStreamController = _NoCallbackSyncStreamController$();
const _NotificationHandler = dart.typedef('_NotificationHandler', () => dart.functionType(dart.dynamic, []));
const _EventSink$ = dart.generic(function(T) {
  class _EventSink extends core.Object {}
  return _EventSink;
});
let _EventSink = _EventSink$();
const _EventDispatch$ = dart.generic(function(T) {
  class _EventDispatch extends core.Object {}
  return _EventDispatch;
});
let _EventDispatch = _EventDispatch$();
const _createSubscription = Symbol('_createSubscription');
const _StreamImpl$ = dart.generic(function(T) {
  class _StreamImpl extends Stream$(T) {
    _StreamImpl() {
      super.Stream();
    }
    listen(onData, {onError = null, onDone = null, cancelOnError = null} = {}) {
      dart.as(onData, dart.functionType(dart.void, [T]));
      dart.as(onDone, dart.functionType(dart.void, []));
      cancelOnError = core.identical(true, cancelOnError);
      let subscription = this[_createSubscription](onData, onError, onDone, cancelOnError);
      this[_onListen](subscription);
      return dart.as(subscription, StreamSubscription$(T));
    }
  }
  dart.setSignature(_StreamImpl, {
    methods: () => ({listen: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {onError: core.Function, onDone: dart.functionType(dart.void, []), cancelOnError: core.bool}]})
  });
  return _StreamImpl;
});
let _StreamImpl = _StreamImpl$();
const _EventGenerator = dart.typedef('_EventGenerator', () => dart.functionType(_PendingEvents, []));
const _DataHandler$ = dart.generic(function(T) {
  const _DataHandler = dart.typedef('_DataHandler', () => dart.functionType(dart.void, [T]));
  return _DataHandler;
});
let _DataHandler = _DataHandler$();
const _DoneHandler = dart.typedef('_DoneHandler', () => dart.functionType(dart.void, []));
function _nullDataHandler(value) {
}
dart.fn(_nullDataHandler, dart.void, [dart.dynamic]);
function _nullErrorHandler(error, stackTrace) {
  if (stackTrace === void 0) stackTrace = null;
  Zone.current.handleUncaughtError(error, stackTrace);
}
dart.fn(_nullErrorHandler, dart.void, [dart.dynamic], [core.StackTrace]);
function _nullDoneHandler() {
}
dart.fn(_nullDoneHandler, dart.void, []);
const _DelayedEvent$ = dart.generic(function(T) {
  class _DelayedEvent extends core.Object {
    _DelayedEvent() {}
  }
  return _DelayedEvent;
});
let _DelayedEvent = _DelayedEvent$();
class _PendingEvents extends core.Object {
  _PendingEvents() {}
}
class _StreamImplEvents extends _PendingEvents {
  _StreamImplEvents() {
    super._PendingEvents();
  }
  get isEmpty() {
    return this.lastPendingEvent == null;
  }
  add(event) {
    if (this.lastPendingEvent == null) {
      this.firstPendingEvent = this.lastPendingEvent = event;
    } else {
      this.lastPendingEvent = this.lastPendingEvent.next = event;
    }
  }
  clear() {
    if (dart.notNull(this.isScheduled)) this.cancelSchedule();
    this.firstPendingEvent = this.lastPendingEvent = null;
  }
}
dart.setSignature(_StreamImplEvents, {
  methods: () => ({
    add: [dart.void, [_DelayedEvent]],
    clear: [dart.void, []]
  })
});
const _broadcastCallback = dart.typedef('_broadcastCallback', () => dart.functionType(dart.void, [StreamSubscription]));
const _source = Symbol('_source');
const _onListenHandler = Symbol('_onListenHandler');
const _onCancelHandler = Symbol('_onCancelHandler');
const _subscription = Symbol('_subscription');
const _subscribe = Symbol('_subscribe');
const _AsBroadcastStream$ = dart.generic(function(T) {
  class _AsBroadcastStream extends Stream$(T) {
    _AsBroadcastStream(source, onListenHandler, onCancelHandler) {
      this[_source] = source;
      this[_onListenHandler] = dart.as(Zone.current.registerUnaryCallback(onListenHandler), _broadcastCallback);
      this[_onCancelHandler] = dart.as(Zone.current.registerUnaryCallback(onCancelHandler), _broadcastCallback);
      this[_zone] = Zone.current;
      this[_controller] = null;
      this[_subscription] = null;
      super.Stream();
      this[_controller] = new (_AsBroadcastStreamController$(T))(dart.bind(this, _onListen), dart.bind(this, _onCancel));
    }
    get isBroadcast() {
      return true;
    }
    listen(onData, {onError = null, onDone = null, cancelOnError = null} = {}) {
      dart.as(onData, dart.functionType(dart.void, [T]));
      dart.as(onDone, dart.functionType(dart.void, []));
      if (this[_controller] == null || dart.notNull(this[_controller].isClosed)) {
        return new (_DoneStreamSubscription$(T))(onDone);
      }
      if (this[_subscription] == null) {
        this[_subscription] = this[_source].listen(dart.bind(this[_controller], 'add'), {onError: dart.bind(this[_controller], 'addError'), onDone: dart.bind(this[_controller], 'close')});
      }
      cancelOnError = core.identical(true, cancelOnError);
      return this[_controller][_subscribe](onData, onError, onDone, cancelOnError);
    }
    [_onCancel]() {
      let shutdown = this[_controller] == null || dart.notNull(this[_controller].isClosed);
      if (this[_onCancelHandler] != null) {
        this[_zone].runUnary(this[_onCancelHandler], new _BroadcastSubscriptionWrapper(this));
      }
      if (shutdown) {
        if (this[_subscription] != null) {
          this[_subscription].cancel();
          this[_subscription] = null;
        }
      }
    }
    [_onListen]() {
      if (this[_onListenHandler] != null) {
        this[_zone].runUnary(this[_onListenHandler], new _BroadcastSubscriptionWrapper(this));
      }
    }
  }
  dart.setSignature(_AsBroadcastStream, {
    constructors: () => ({_AsBroadcastStream: [_AsBroadcastStream$(T), [Stream$(T), dart.functionType(dart.void, [StreamSubscription]), dart.functionType(dart.void, [StreamSubscription])]]}),
    methods: () => ({
      listen: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {onError: core.Function, onDone: dart.functionType(dart.void, []), cancelOnError: core.bool}],
      [_onCancel]: [dart.void, []],
      [_onListen]: [dart.void, []]
    })
  });
  return _AsBroadcastStream;
});
let _AsBroadcastStream = _AsBroadcastStream$();
const _stream = Symbol('_stream');
const _cancelSubscription = Symbol('_cancelSubscription');
const _BroadcastSubscriptionWrapper$ = dart.generic(function(T) {
  class _BroadcastSubscriptionWrapper extends core.Object {
    _BroadcastSubscriptionWrapper(stream) {
      this[_stream] = stream;
    }
    onData(handleData) {
      dart.as(handleData, dart.functionType(dart.void, [T]));
      dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
    }
    onError(handleError) {
      dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
    }
    onDone(handleDone) {
      dart.as(handleDone, dart.functionType(dart.void, []));
      dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
    }
    cancel() {
      this[_stream][_cancelSubscription]();
      return null;
    }
    asFuture(futureValue) {
      if (futureValue === void 0) futureValue = null;
      dart.throw(new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription."));
    }
  }
  _BroadcastSubscriptionWrapper[dart.implements] = () => [StreamSubscription$(T)];
  dart.setSignature(_BroadcastSubscriptionWrapper, {
    constructors: () => ({_BroadcastSubscriptionWrapper: [_BroadcastSubscriptionWrapper$(T), [_AsBroadcastStream]]}),
    methods: () => ({
      onData: [dart.void, [dart.functionType(dart.void, [T])]],
      onError: [dart.void, [core.Function]],
      onDone: [dart.void, [dart.functionType(dart.void, [])]],
      cancel: [Future, []],
      asFuture: [Future, [], [dart.dynamic]]
    })
  });
  return _BroadcastSubscriptionWrapper;
});
let _BroadcastSubscriptionWrapper = _BroadcastSubscriptionWrapper$();
const __CastType18$ = dart.generic(function(T) {
  const __CastType18 = dart.typedef('__CastType18', () => dart.functionType(dart.void, [T]));
  return __CastType18;
});
let __CastType18 = __CastType18$();
const __CastType20 = dart.typedef('__CastType20', () => dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
const __CastType23 = dart.typedef('__CastType23', () => dart.functionType(dart.dynamic, [dart.dynamic]));
const _ForwardingStream$ = dart.generic(function(S, T) {
  class _ForwardingStream extends Stream$(T) {
    _ForwardingStream(source) {
      this[_source] = source;
      super.Stream();
    }
    get isBroadcast() {
      return this[_source].isBroadcast;
    }
    listen(onData, {onError = null, onDone = null, cancelOnError = null} = {}) {
      dart.as(onData, dart.functionType(dart.void, [T]));
      dart.as(onDone, dart.functionType(dart.void, []));
      cancelOnError = core.identical(true, cancelOnError);
      return this[_createSubscription](onData, onError, onDone, cancelOnError);
    }
  }
  dart.setSignature(_ForwardingStream, {
    constructors: () => ({_ForwardingStream: [_ForwardingStream$(S, T), [Stream$(S)]]}),
    methods: () => ({listen: [StreamSubscription$(T), [dart.functionType(dart.void, [T])], {onError: core.Function, onDone: dart.functionType(dart.void, []), cancelOnError: core.bool}]})
  });
  return _ForwardingStream;
});
let _ForwardingStream = _ForwardingStream$();
const _Predicate$ = dart.generic(function(T) {
  const _Predicate = dart.typedef('_Predicate', () => dart.functionType(core.bool, [T]));
  return _Predicate;
});
let _Predicate = _Predicate$();
const _test = Symbol('_test');
const _WhereStream$ = dart.generic(function(T) {
  class _WhereStream extends _ForwardingStream$(T, T) {
    _WhereStream(source, test) {
      this[_test] = test;
      super._ForwardingStream(source);
    }
  }
  dart.setSignature(_WhereStream, {
    constructors: () => ({_WhereStream: [_WhereStream$(T), [Stream$(T), dart.functionType(core.bool, [T])]]})
  });
  return _WhereStream;
});
let _WhereStream = _WhereStream$();
const _Transformation$ = dart.generic(function(S, T) {
  const _Transformation = dart.typedef('_Transformation', () => dart.functionType(T, [S]));
  return _Transformation;
});
let _Transformation = _Transformation$();
const _ErrorTest = dart.typedef('_ErrorTest', () => dart.functionType(core.bool, [dart.dynamic]));
const _remaining = Symbol('_remaining');
const _SkipStream$ = dart.generic(function(T) {
  class _SkipStream extends _ForwardingStream$(T, T) {
    _SkipStream(source, count) {
      this[_remaining] = count;
      super._ForwardingStream(source);
      if (!(typeof count == 'number') || dart.notNull(count) < 0) dart.throw(new core.ArgumentError(count));
    }
  }
  dart.setSignature(_SkipStream, {
    constructors: () => ({_SkipStream: [_SkipStream$(T), [Stream$(T), core.int]]})
  });
  return _SkipStream;
});
let _SkipStream = _SkipStream$();
const _Equality$ = dart.generic(function(T) {
  const _Equality = dart.typedef('_Equality', () => dart.functionType(core.bool, [T, T]));
  return _Equality;
});
let _Equality = _Equality$();
const _SinkMapper$ = dart.generic(function(S, T) {
  const _SinkMapper = dart.typedef('_SinkMapper', () => dart.functionType(EventSink$(S), [EventSink$(T)]));
  return _SinkMapper;
});
let _SinkMapper = _SinkMapper$();
const _sinkMapper = Symbol('_sinkMapper');
const _StreamSinkTransformer$ = dart.generic(function(S, T) {
  class _StreamSinkTransformer extends core.Object {
    _StreamSinkTransformer(sinkMapper) {
      this[_sinkMapper] = sinkMapper;
    }
    bind(stream) {
      dart.as(stream, Stream$(S));
      return new (_BoundSinkStream$(S, T))(stream, this[_sinkMapper]);
    }
  }
  _StreamSinkTransformer[dart.implements] = () => [StreamTransformer$(S, T)];
  dart.setSignature(_StreamSinkTransformer, {
    constructors: () => ({_StreamSinkTransformer: [_StreamSinkTransformer$(S, T), [_SinkMapper$(S, T)]]}),
    methods: () => ({bind: [Stream$(T), [Stream$(S)]]})
  });
  return _StreamSinkTransformer;
});
let _StreamSinkTransformer = _StreamSinkTransformer$();
const _TransformDataHandler$ = dart.generic(function(S, T) {
  const _TransformDataHandler = dart.typedef('_TransformDataHandler', () => dart.functionType(dart.void, [S, EventSink$(T)]));
  return _TransformDataHandler;
});
let _TransformDataHandler = _TransformDataHandler$();
const _TransformErrorHandler$ = dart.generic(function(T) {
  const _TransformErrorHandler = dart.typedef('_TransformErrorHandler', () => dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]));
  return _TransformErrorHandler;
});
let _TransformErrorHandler = _TransformErrorHandler$();
const _TransformDoneHandler$ = dart.generic(function(T) {
  const _TransformDoneHandler = dart.typedef('_TransformDoneHandler', () => dart.functionType(dart.void, [EventSink$(T)]));
  return _TransformDoneHandler;
});
let _TransformDoneHandler = _TransformDoneHandler$();
const _handleData = Symbol('_handleData');
const _handleError = Symbol('_handleError');
const _handleDone = Symbol('_handleDone');
const _sink = Symbol('_sink');
const _HandlerEventSink$ = dart.generic(function(S, T) {
  class _HandlerEventSink extends core.Object {
    _HandlerEventSink(handleData, handleError, handleDone, sink) {
      this[_handleData] = handleData;
      this[_handleError] = handleError;
      this[_handleDone] = handleDone;
      this[_sink] = sink;
    }
    add(data) {
      dart.as(data, S);
      return this[_handleData](data, this[_sink]);
    }
    addError(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      return this[_handleError](error, stackTrace, this[_sink]);
    }
    close() {
      return this[_handleDone](this[_sink]);
    }
  }
  _HandlerEventSink[dart.implements] = () => [EventSink$(S)];
  dart.setSignature(_HandlerEventSink, {
    constructors: () => ({_HandlerEventSink: [_HandlerEventSink$(S, T), [_TransformDataHandler$(S, T), _TransformErrorHandler$(T), _TransformDoneHandler$(T), EventSink$(T)]]}),
    methods: () => ({
      add: [dart.void, [S]],
      addError: [dart.void, [core.Object], [core.StackTrace]],
      close: [dart.void, []]
    })
  });
  return _HandlerEventSink;
});
let _HandlerEventSink = _HandlerEventSink$();
const _StreamHandlerTransformer$ = dart.generic(function(S, T) {
  class _StreamHandlerTransformer extends _StreamSinkTransformer$(S, T) {
    _StreamHandlerTransformer({handleData = null, handleError = null, handleDone = null} = {}) {
      super._StreamSinkTransformer(dart.fn(outputSink => {
        dart.as(outputSink, EventSink$(T));
        if (handleData == null) handleData = dart.as(_StreamHandlerTransformer$()._defaultHandleData, __CastType25);
        if (handleError == null) handleError = dart.as(_StreamHandlerTransformer$()._defaultHandleError, __CastType28);
        if (handleDone == null) handleDone = _StreamHandlerTransformer$()._defaultHandleDone;
        return new (_HandlerEventSink$(S, T))(handleData, handleError, handleDone, outputSink);
      }, EventSink$(S), [EventSink$(T)]));
    }
    bind(stream) {
      dart.as(stream, Stream$(S));
      return super.bind(stream);
    }
    static _defaultHandleData(data, sink) {
      sink.add(data);
    }
    static _defaultHandleError(error, stackTrace, sink) {
      sink.addError(error);
    }
    static _defaultHandleDone(sink) {
      sink.close();
    }
  }
  dart.setSignature(_StreamHandlerTransformer, {
    constructors: () => ({_StreamHandlerTransformer: [_StreamHandlerTransformer$(S, T), [], {handleData: dart.functionType(dart.void, [S, EventSink$(T)]), handleError: dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]), handleDone: dart.functionType(dart.void, [EventSink$(T)])}]}),
    methods: () => ({bind: [Stream$(T), [Stream$(S)]]}),
    statics: () => ({
      _defaultHandleData: [dart.void, [dart.dynamic, EventSink]],
      _defaultHandleError: [dart.void, [dart.dynamic, core.StackTrace, EventSink]],
      _defaultHandleDone: [dart.void, [EventSink]]
    }),
    names: ['_defaultHandleData', '_defaultHandleError', '_defaultHandleDone']
  });
  return _StreamHandlerTransformer;
});
let _StreamHandlerTransformer = _StreamHandlerTransformer$();
const _SubscriptionTransformer$ = dart.generic(function(S, T) {
  const _SubscriptionTransformer = dart.typedef('_SubscriptionTransformer', () => dart.functionType(StreamSubscription$(T), [Stream$(S), core.bool]));
  return _SubscriptionTransformer;
});
let _SubscriptionTransformer = _SubscriptionTransformer$();
const _transformer = Symbol('_transformer');
const _StreamSubscriptionTransformer$ = dart.generic(function(S, T) {
  class _StreamSubscriptionTransformer extends core.Object {
    _StreamSubscriptionTransformer(transformer) {
      this[_transformer] = transformer;
    }
    bind(stream) {
      dart.as(stream, Stream$(S));
      return new (_BoundSubscriptionStream$(S, T))(stream, this[_transformer]);
    }
  }
  _StreamSubscriptionTransformer[dart.implements] = () => [StreamTransformer$(S, T)];
  dart.setSignature(_StreamSubscriptionTransformer, {
    constructors: () => ({_StreamSubscriptionTransformer: [_StreamSubscriptionTransformer$(S, T), [_SubscriptionTransformer$(S, T)]]}),
    methods: () => ({bind: [Stream$(T), [Stream$(S)]]})
  });
  return _StreamSubscriptionTransformer;
});
let _StreamSubscriptionTransformer = _StreamSubscriptionTransformer$();
const __CastType25$ = dart.generic(function(S, T) {
  const __CastType25 = dart.typedef('__CastType25', () => dart.functionType(dart.void, [S, EventSink$(T)]));
  return __CastType25;
});
let __CastType25 = __CastType25$();
const __CastType28$ = dart.generic(function(T) {
  const __CastType28 = dart.typedef('__CastType28', () => dart.functionType(dart.void, [core.Object, core.StackTrace, EventSink$(T)]));
  return __CastType28;
});
let __CastType28 = __CastType28$();
class Timer extends core.Object {
  static new(duration, callback) {
    if (dart.equals(Zone.current, Zone.ROOT)) {
      return Zone.current.createTimer(duration, callback);
    }
    return Zone.current.createTimer(duration, Zone.current.bindCallback(callback, {runGuarded: true}));
  }
  static run(callback) {
    Timer.new(core.Duration.ZERO, callback);
  }
  static _createTimer(duration, callback) {
    let milliseconds = duration.inMilliseconds;
    if (dart.notNull(milliseconds) < 0) milliseconds = 0;
    return new _isolate_helper.TimerImpl(milliseconds, callback);
  }
}
dart.setSignature(Timer, {
  constructors: () => ({new: [Timer, [core.Duration, dart.functionType(dart.void, [])]]}),
  statics: () => ({
    run: [dart.void, [dart.functionType(dart.void, [])]],
    _createTimer: [Timer, [core.Duration, dart.functionType(dart.void, [])]]
  }),
  names: ['run', '_createTimer']
});
const __CastType32 = dart.typedef('__CastType32', () => dart.functionType(dart.void, [Timer]));
const ZoneCallback = dart.typedef('ZoneCallback', () => dart.functionType(dart.dynamic, []));
const ZoneUnaryCallback = dart.typedef('ZoneUnaryCallback', () => dart.functionType(dart.dynamic, [dart.dynamic]));
const ZoneBinaryCallback = dart.typedef('ZoneBinaryCallback', () => dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
const HandleUncaughtErrorHandler = dart.typedef('HandleUncaughtErrorHandler', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]));
const RunHandler = dart.typedef('RunHandler', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]));
const RunUnaryHandler = dart.typedef('RunUnaryHandler', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]));
const RunBinaryHandler = dart.typedef('RunBinaryHandler', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]));
const RegisterCallbackHandler = dart.typedef('RegisterCallbackHandler', () => dart.functionType(ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]));
const RegisterUnaryCallbackHandler = dart.typedef('RegisterUnaryCallbackHandler', () => dart.functionType(ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]));
const RegisterBinaryCallbackHandler = dart.typedef('RegisterBinaryCallbackHandler', () => dart.functionType(ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]));
const ErrorCallbackHandler = dart.typedef('ErrorCallbackHandler', () => dart.functionType(AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]));
const ScheduleMicrotaskHandler = dart.typedef('ScheduleMicrotaskHandler', () => dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]));
const CreateTimerHandler = dart.typedef('CreateTimerHandler', () => dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]));
const CreatePeriodicTimerHandler = dart.typedef('CreatePeriodicTimerHandler', () => dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]));
const PrintHandler = dart.typedef('PrintHandler', () => dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, core.String]));
const ForkHandler = dart.typedef('ForkHandler', () => dart.functionType(Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map]));
class AsyncError extends core.Object {
  AsyncError(error, stackTrace) {
    this.error = error;
    this.stackTrace = stackTrace;
  }
  toString() {
    return dart.toString(this.error);
  }
}
AsyncError[dart.implements] = () => [core.Error];
dart.setSignature(AsyncError, {
  constructors: () => ({AsyncError: [AsyncError, [dart.dynamic, core.StackTrace]]})
});
class _ZoneFunction extends core.Object {
  _ZoneFunction(zone, func) {
    this.zone = zone;
    this.function = func;
  }
}
dart.setSignature(_ZoneFunction, {
  constructors: () => ({_ZoneFunction: [_ZoneFunction, [_Zone, core.Function]]})
});
class ZoneSpecification extends core.Object {
  static new(opts) {
    return new _ZoneSpecification(opts);
  }
}
dart.setSignature(ZoneSpecification, {
  constructors: () => ({new: [ZoneSpecification, [], {handleUncaughtError: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]), run: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]), runUnary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]), runBinary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]), registerCallback: dart.functionType(ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]), registerUnaryCallback: dart.functionType(ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]), registerBinaryCallback: dart.functionType(ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]), errorCallback: dart.functionType(AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]), scheduleMicrotask: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]), createTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]), createPeriodicTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]), print: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, core.String]), fork: dart.functionType(Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map])}]})
});
class _ZoneSpecification extends core.Object {
  _ZoneSpecification({handleUncaughtError = null, run = null, runUnary = null, runBinary = null, registerCallback = null, registerUnaryCallback = null, registerBinaryCallback = null, errorCallback = null, scheduleMicrotask = null, createTimer = null, createPeriodicTimer = null, print = null, fork = null} = {}) {
    this.handleUncaughtError = handleUncaughtError;
    this.run = run;
    this.runUnary = runUnary;
    this.runBinary = runBinary;
    this.registerCallback = registerCallback;
    this.registerUnaryCallback = registerUnaryCallback;
    this.registerBinaryCallback = registerBinaryCallback;
    this.errorCallback = errorCallback;
    this.scheduleMicrotask = scheduleMicrotask;
    this.createTimer = createTimer;
    this.createPeriodicTimer = createPeriodicTimer;
    this.print = print;
    this.fork = fork;
  }
}
_ZoneSpecification[dart.implements] = () => [ZoneSpecification];
dart.setSignature(_ZoneSpecification, {
  constructors: () => ({_ZoneSpecification: [_ZoneSpecification, [], {handleUncaughtError: HandleUncaughtErrorHandler, run: RunHandler, runUnary: RunUnaryHandler, runBinary: RunBinaryHandler, registerCallback: RegisterCallbackHandler, registerUnaryCallback: RegisterUnaryCallbackHandler, registerBinaryCallback: RegisterBinaryCallbackHandler, errorCallback: ErrorCallbackHandler, scheduleMicrotask: ScheduleMicrotaskHandler, createTimer: CreateTimerHandler, createPeriodicTimer: CreatePeriodicTimerHandler, print: PrintHandler, fork: ForkHandler}]})
});
class ZoneDelegate extends core.Object {}
class Zone extends core.Object {
  static get current() {
    return Zone._current;
  }
  static _enter(zone) {
    dart.assert(zone != null);
    dart.assert(!dart.notNull(core.identical(zone, Zone._current)));
    let previous = Zone._current;
    Zone._current = zone;
    return previous;
  }
  static _leave(previous) {
    dart.assert(previous != null);
    Zone._current = previous;
  }
}
dart.setSignature(Zone, {
  statics: () => ({
    _enter: [Zone, [Zone]],
    _leave: [dart.void, [Zone]]
  }),
  names: ['_enter', '_leave']
});
dart.defineLazyProperties(Zone, {
  get ROOT() {
    return _ROOT_ZONE;
  },
  get _current() {
    return _ROOT_ZONE;
  },
  set _current(_) {}
});
class _Zone extends core.Object {
  _Zone() {
  }
  inSameErrorZone(otherZone) {
    return dart.notNull(core.identical(this, otherZone)) || dart.notNull(core.identical(this.errorZone, otherZone.errorZone));
  }
}
_Zone[dart.implements] = () => [Zone];
dart.setSignature(_Zone, {
  constructors: () => ({_Zone: [_Zone, []]}),
  methods: () => ({inSameErrorZone: [core.bool, [Zone]]})
});
function _rootScheduleMicrotask(self, parent, zone, f) {
  if (!dart.notNull(core.identical(_ROOT_ZONE, zone))) {
    let hasErrorHandler = !dart.notNull(_ROOT_ZONE.inSameErrorZone(zone));
    f = zone.bindCallback(f, {runGuarded: hasErrorHandler});
  }
  _scheduleAsyncCallback(f);
}
dart.fn(_rootScheduleMicrotask, dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
const _createTimer = Symbol('_createTimer');
class _RootZone extends _Zone {
  _RootZone() {
    super._Zone();
  }
  get [_createTimer]() {
    return dart.const(new _ZoneFunction(_ROOT_ZONE, _rootCreateTimer));
  }
  get errorZone() {
    return this;
  }
  bindCallback(f, {runGuarded = true} = {}) {
    if (dart.notNull(runGuarded)) {
      return dart.fn((() => this.runGuarded(f)).bind(this));
    } else {
      return dart.fn((() => this.run(f)).bind(this));
    }
  }
  get(key) {
    return null;
  }
  handleUncaughtError(error, stackTrace) {
    return _rootHandleUncaughtError(null, null, this, error, stackTrace);
  }
  fork({specification = null, zoneValues = null} = {}) {
    return _rootFork(null, null, this, specification, zoneValues);
  }
  run(f) {
    if (dart.notNull(core.identical(Zone._current, _ROOT_ZONE))) return f();
    return _rootRun(null, null, this, f);
  }
  runUnary(f, arg) {
    if (dart.notNull(core.identical(Zone._current, _ROOT_ZONE))) return dart.dcall(f, arg);
    return _rootRunUnary(null, null, this, f, arg);
  }
  runBinary(f, arg1, arg2) {
    if (dart.notNull(core.identical(Zone._current, _ROOT_ZONE))) return dart.dcall(f, arg1, arg2);
    return _rootRunBinary(null, null, this, f, arg1, arg2);
  }
  registerCallback(f) {
    return f;
  }
  registerUnaryCallback(f) {
    return f;
  }
  registerBinaryCallback(f) {
    return f;
  }
  errorCallback(error, stackTrace) {
    return null;
  }
  scheduleMicrotask(f) {
    _rootScheduleMicrotask(null, null, this, f);
  }
  createTimer(duration, f) {
    return Timer._createTimer(duration, f);
  }
}
dart.setSignature(_RootZone, {
  constructors: () => ({_RootZone: [_RootZone, []]}),
  methods: () => ({
    bindCallback: [ZoneCallback, [dart.functionType(dart.dynamic, [])], {runGuarded: core.bool}],
    get: [dart.dynamic, [core.Object]],
    handleUncaughtError: [dart.dynamic, [dart.dynamic, core.StackTrace]],
    fork: [Zone, [], {specification: ZoneSpecification, zoneValues: core.Map}],
    run: [dart.dynamic, [dart.functionType(dart.dynamic, [])]],
    runUnary: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]],
    runBinary: [dart.dynamic, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]],
    registerCallback: [ZoneCallback, [dart.functionType(dart.dynamic, [])]],
    registerUnaryCallback: [ZoneUnaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic])]],
    registerBinaryCallback: [ZoneBinaryCallback, [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]],
    errorCallback: [AsyncError, [core.Object, core.StackTrace]],
    scheduleMicrotask: [dart.void, [dart.functionType(dart.void, [])]],
    createTimer: [Timer, [core.Duration, dart.functionType(dart.void, [])]]
  })
});
const _ROOT_ZONE = dart.const(new _RootZone());
const __CastType34 = dart.typedef('__CastType34', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]));
const __CastType40 = dart.typedef('__CastType40', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]));
const __CastType45 = dart.typedef('__CastType45', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]));
const __CastType52 = dart.typedef('__CastType52', () => dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]));
const __CastType61 = dart.typedef('__CastType61', () => dart.functionType(ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]));
const __CastType66 = dart.typedef('__CastType66', () => dart.functionType(ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]));
const __CastType72 = dart.typedef('__CastType72', () => dart.functionType(ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]));
const __CastType79 = dart.typedef('__CastType79', () => dart.functionType(AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]));
const __CastType85 = dart.typedef('__CastType85', () => dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]));
const __CastType90 = dart.typedef('__CastType90', () => dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]));
const __CastType96 = dart.typedef('__CastType96', () => dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]));
const __CastType103 = dart.typedef('__CastType103', () => dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, core.String]));
const __CastType108 = dart.typedef('__CastType108', () => dart.functionType(Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map]));
const __CastType114 = dart.typedef('__CastType114', () => dart.functionType(dart.void, [Timer]));
const __CastType116 = dart.typedef('__CastType116', () => dart.functionType(dart.dynamic, [dart.dynamic]));
// Exports:
exports.Future$ = Future$;
exports.Future = Future;
exports.Completer$ = Completer$;
exports.Completer = Completer;
exports.scheduleMicrotask = scheduleMicrotask;
exports.Stream$ = Stream$;
exports.Stream = Stream;
exports.StreamSubscription$ = StreamSubscription$;
exports.StreamSubscription = StreamSubscription;
exports.EventSink$ = EventSink$;
exports.EventSink = EventSink;
exports.StreamConsumer$ = StreamConsumer$;
exports.StreamConsumer = StreamConsumer;
exports.StreamSink$ = StreamSink$;
exports.StreamSink = StreamSink;
exports.StreamTransformer$ = StreamTransformer$;
exports.StreamTransformer = StreamTransformer;
exports.StreamController$ = StreamController$;
exports.StreamController = StreamController;
exports.Timer = Timer;
exports.ZoneCallback = ZoneCallback;
exports.ZoneUnaryCallback = ZoneUnaryCallback;
exports.ZoneBinaryCallback = ZoneBinaryCallback;
exports.HandleUncaughtErrorHandler = HandleUncaughtErrorHandler;
exports.RunHandler = RunHandler;
exports.RunUnaryHandler = RunUnaryHandler;
exports.RunBinaryHandler = RunBinaryHandler;
exports.RegisterCallbackHandler = RegisterCallbackHandler;
exports.RegisterUnaryCallbackHandler = RegisterUnaryCallbackHandler;
exports.RegisterBinaryCallbackHandler = RegisterBinaryCallbackHandler;
exports.ErrorCallbackHandler = ErrorCallbackHandler;
exports.ScheduleMicrotaskHandler = ScheduleMicrotaskHandler;
exports.CreateTimerHandler = CreateTimerHandler;
exports.CreatePeriodicTimerHandler = CreatePeriodicTimerHandler;
exports.PrintHandler = PrintHandler;
exports.ForkHandler = ForkHandler;
exports.AsyncError = AsyncError;
exports.ZoneSpecification = ZoneSpecification;
exports.ZoneDelegate = ZoneDelegate;
exports.Zone = Zone;
