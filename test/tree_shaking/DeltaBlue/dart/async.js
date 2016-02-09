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
// /* Incoming: _BroadcastSubscriptionLink._next (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastSubscriptionLink._previous (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastSubscription (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastSubscription._next (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastSubscription._previous (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastSubscription. (ConstructorElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._next (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._previous (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController. (ConstructorElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._hasOneListener (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._isEmpty (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._addListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._removeListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), previous (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), next (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._subscribe (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._recordCancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), link (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._forEachListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), link (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController._sendData (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), link (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController._sendError (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), link (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController._sendDone (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart) */
class _BroadcastSubscriptionLink extends core.Object {
  _BroadcastSubscriptionLink() {}
}
const _onListen = Symbol('_onListen');
const _onCancel = Symbol('_onCancel');
const _state = Symbol('_state');
const _next = Symbol('_next');
const _previous = Symbol('_previous');
const _isFiring = Symbol('_isFiring');
const _isAddingStream = Symbol('_isAddingStream');
const _mayAddEvent = Symbol('_mayAddEvent');
const _addEventError = Symbol('_addEventError');
const _sendData = Symbol('_sendData');
// /* Incoming: _BroadcastStreamController. (ConstructorElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.stream (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.sink (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._hasOneListener (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._isEmpty (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._addListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._removeListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.addStream (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._forEachListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController._sendData (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.close (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), onError (FunctionElementImpl @ dart:async/stream.dart), StreamController.broadcast (ConstructorElementImpl @ dart:async/stream_controller.dart) */
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
    get isClosed() {
      return (dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_CLOSED)) != 0;
    }
    get [_isFiring]() {
      return (dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_FIRING)) != 0;
    }
    get [_isAddingStream]() {
      return (dart.notNull(this[_state]) & dart.notNull(_BroadcastStreamController$()._STATE_ADDSTREAM)) != 0;
    }
    get [_mayAddEvent]() {
      return dart.notNull(this[_state]) < dart.notNull(_BroadcastStreamController$()._STATE_CLOSED);
    }
    [_addEventError]() {
      if (dart.notNull(this.isClosed)) {
        return new core.StateError("Cannot add new events after calling close");
      }
      dart.assert(this[_isAddingStream]);
      return new core.StateError("Cannot add new events while doing an addStream");
    }
    add(data) {
      dart.as(data, T);
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_addEventError]());
      this[_sendData](data);
    }
  }
  _BroadcastStreamController[dart.implements] = () => [StreamController$(T), _StreamControllerLifecycle$(T), _BroadcastSubscriptionLink, _EventSink$(T), _EventDispatch$(T)];
  dart.setSignature(_BroadcastStreamController, {
    constructors: () => ({_BroadcastStreamController: [_BroadcastStreamController$(T), [_NotificationHandler, _NotificationHandler]]}),
    methods: () => ({
      [_addEventError]: [core.Error, []],
      add: [dart.void, [T]]
    })
  });
  _BroadcastStreamController._STATE_INITIAL = 0;
  _BroadcastStreamController._STATE_FIRING = 2;
  _BroadcastStreamController._STATE_CLOSED = 4;
  _BroadcastStreamController._STATE_ADDSTREAM = 8;
  return _BroadcastStreamController;
});
let _BroadcastStreamController = _BroadcastStreamController$();
// /* Incoming: _SyncBroadcastStreamController. (ConstructorElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), Stream.timeout (MethodElementImpl @ dart:async/stream.dart), StreamController.broadcast (ConstructorElementImpl @ dart:async/stream_controller.dart) */
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
const _pending = Symbol('_pending');
const _hasPending = Symbol('_hasPending');
const _addPendingEvent = Symbol('_addPendingEvent');
// /* Incoming: _AsBroadcastStreamController. (ConstructorElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.add (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.addError (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.close (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), result (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController._callOnCancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStream._controller (FieldElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream. (ConstructorElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream.listen (MethodElementImpl @ dart:async/stream_impl.dart), shutdown (LocalVariableElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._cancelSubscription (MethodElementImpl @ dart:async/stream_impl.dart) */
const _AsBroadcastStreamController$ = dart.generic(function(T) {
  class _AsBroadcastStreamController extends _SyncBroadcastStreamController$(T) {
    _AsBroadcastStreamController(onListen, onCancel) {
      this[_pending] = null;
      super._SyncBroadcastStreamController(onListen, onCancel);
    }
    get [_hasPending]() {
      return this[_pending] != null && !dart.notNull(this[_pending].isEmpty);
    }
    [_addPendingEvent](event) {
      if (this[_pending] == null) {
        this[_pending] = new _StreamImplEvents();
      }
      this[_pending].add(event);
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
  }
  _AsBroadcastStreamController[dart.implements] = () => [_EventDispatch$(T)];
  dart.setSignature(_AsBroadcastStreamController, {
    constructors: () => ({_AsBroadcastStreamController: [_AsBroadcastStreamController$(T), [dart.functionType(dart.void, []), dart.functionType(dart.void, [])]]}),
    methods: () => ({
      [_addPendingEvent]: [dart.void, [_DelayedEvent]],
      add: [dart.void, [T]]
    })
  });
  return _AsBroadcastStreamController;
});
let _AsBroadcastStreamController = _AsBroadcastStreamController$();
const _complete = Symbol('_complete');
// /* Incoming: Isolate.spawn (MethodElementImpl @ dart:isolate), Isolate.spawnUri (MethodElementImpl @ dart:isolate), IsolateNatives.handleSpawnWorkerRequest (MethodElementImpl @ dart:_isolate_helper), IsolateNatives.spawnFunction (MethodElementImpl @ dart:_isolate_helper), IsolateNatives.spawnUri (MethodElementImpl @ dart:_isolate_helper), IsolateNatives.spawn (MethodElementImpl @ dart:_isolate_helper), ReceivePortImpl.close (MethodElementImpl @ dart:_isolate_helper), _BroadcastStreamController._subscribe (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._recordCancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.close (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), doneFuture (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.done (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.addStream (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._callOnCancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.close (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), result (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _DoneSubscription.pause (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _DoneSubscription.cancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _DoneSubscription.asFuture (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), DeferredLibrary.load (MethodElementImpl @ dart:async/deferred_load.dart), Future. (ConstructorElementImpl @ dart:async/future.dart), Future.microtask (ConstructorElementImpl @ dart:async/future.dart), Future.sync (ConstructorElementImpl @ dart:async/future.dart), Future.value (ConstructorElementImpl @ dart:async/future.dart), Future.error (ConstructorElementImpl @ dart:async/future.dart), Future.delayed (ConstructorElementImpl @ dart:async/future.dart), Future.wait (MethodElementImpl @ dart:async/future.dart), handleError (FunctionElementImpl @ dart:async/future.dart), future (LocalVariableElementImpl @ dart:async/future.dart), Future.forEach (MethodElementImpl @ dart:async/future.dart), Future.doWhile (MethodElementImpl @ dart:async/future.dart), Future.then (MethodElementImpl @ dart:async/future.dart), Future.catchError (MethodElementImpl @ dart:async/future.dart), Future.whenComplete (MethodElementImpl @ dart:async/future.dart), Future.timeout (MethodElementImpl @ dart:async/future.dart), Completer.future (FieldElementImpl @ dart:async/future.dart), _Future (ClassElementImpl @ dart:async/future_impl.dart), _Future.then (MethodElementImpl @ dart:async/future_impl.dart), _Future.catchError (MethodElementImpl @ dart:async/future_impl.dart), _Future.whenComplete (MethodElementImpl @ dart:async/future_impl.dart), _Future._chainForeignFuture (MethodElementImpl @ dart:async/future_impl.dart), _Future._complete (MethodElementImpl @ dart:async/future_impl.dart), _Future._completeWithValue (MethodElementImpl @ dart:async/future_impl.dart), _Future._asyncComplete (MethodElementImpl @ dart:async/future_impl.dart), typedFuture (LocalVariableElementImpl @ dart:async/future_impl.dart), coreFuture (LocalVariableElementImpl @ dart:async/future_impl.dart), handleWhenCompleteCallback (FunctionElementImpl @ dart:async/future_impl.dart), _Future._propagateToListeners (MethodElementImpl @ dart:async/future_impl.dart), chainSource (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future.timeout (MethodElementImpl @ dart:async/future_impl.dart), Stream.fromFuture (ConstructorElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), Stream.asyncMap (MethodElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), Stream.asyncExpand (MethodElementImpl @ dart:async/stream.dart), Stream.pipe (MethodElementImpl @ dart:async/stream.dart), Stream.reduce (MethodElementImpl @ dart:async/stream.dart), Stream.fold (MethodElementImpl @ dart:async/stream.dart), Stream.join (MethodElementImpl @ dart:async/stream.dart), Stream.contains (MethodElementImpl @ dart:async/stream.dart), Stream.forEach (MethodElementImpl @ dart:async/stream.dart), Stream.every (MethodElementImpl @ dart:async/stream.dart), Stream.any (MethodElementImpl @ dart:async/stream.dart), Stream.length (FieldElementImpl @ dart:async/stream.dart), Stream.isEmpty (FieldElementImpl @ dart:async/stream.dart), Stream.toList (MethodElementImpl @ dart:async/stream.dart), Stream.toSet (MethodElementImpl @ dart:async/stream.dart), Stream.drain (MethodElementImpl @ dart:async/stream.dart), Stream.first (FieldElementImpl @ dart:async/stream.dart), Stream.last (FieldElementImpl @ dart:async/stream.dart), Stream.single (FieldElementImpl @ dart:async/stream.dart), Stream.firstWhere (MethodElementImpl @ dart:async/stream.dart), Stream.lastWhere (MethodElementImpl @ dart:async/stream.dart), Stream.singleWhere (MethodElementImpl @ dart:async/stream.dart), Stream.elementAt (MethodElementImpl @ dart:async/stream.dart), onDone (FunctionElementImpl @ dart:async/stream.dart), onCancel (FunctionElementImpl @ dart:async/stream.dart), result (LocalVariableElementImpl @ dart:async/stream.dart), StreamSubscription.cancel (MethodElementImpl @ dart:async/stream.dart), StreamSubscription.pause (MethodElementImpl @ dart:async/stream.dart), StreamSubscription.asFuture (MethodElementImpl @ dart:async/stream.dart), StreamConsumer.addStream (MethodElementImpl @ dart:async/stream.dart), StreamConsumer.close (MethodElementImpl @ dart:async/stream.dart), StreamSink.close (MethodElementImpl @ dart:async/stream.dart), StreamSink.done (FieldElementImpl @ dart:async/stream.dart), StreamIterator.moveNext (MethodElementImpl @ dart:async/stream.dart), StreamIterator.cancel (MethodElementImpl @ dart:async/stream.dart), StreamController.addStream (MethodElementImpl @ dart:async/stream_controller.dart), _StreamControllerLifecycle._recordCancel (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController.addStream (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController.done (FieldElementImpl @ dart:async/stream_controller.dart), _StreamController._ensureDoneFuture (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController.close (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._subscribe (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._recordCancel (MethodElementImpl @ dart:async/stream_controller.dart), result (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._recordPause (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._recordResume (MethodElementImpl @ dart:async/stream_controller.dart), _runGuarded (FunctionElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._onCancel (MethodElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.close (MethodElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.addStream (MethodElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.done (FieldElementImpl @ dart:async/stream_controller.dart), _AddStreamState.cancel (MethodElementImpl @ dart:async/stream_controller.dart), cancel2 (LocalVariableElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription._cancelFuture (FieldElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.pause (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.cancel (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.asFuture (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._cancel (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._onCancel (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._sendError (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._sendDone (MethodElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription.pause (MethodElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription.cancel (MethodElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription.asFuture (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._onCancel (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._cancelSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._pauseSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _BroadcastSubscriptionWrapper.pause (MethodElementImpl @ dart:async/stream_impl.dart), _BroadcastSubscriptionWrapper.cancel (MethodElementImpl @ dart:async/stream_impl.dart), _BroadcastSubscriptionWrapper.asFuture (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl.moveNext (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl.cancel (MethodElementImpl @ dart:async/stream_impl.dart), cancelFuture (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _cancelAndError (FunctionElementImpl @ dart:async/stream_pipe.dart), cancelFuture (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _cancelAndValue (FunctionElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription._onCancel (MethodElementImpl @ dart:async/stream_pipe.dart), _SinkTransformerStreamSubscription._onCancel (MethodElementImpl @ dart:async/stream_transformers.dart), async_ (FunctionElementImpl @ dart:_runtime/generators.dart), _AsyncStarStreamController (TopLevelVariableElementImpl @ dart:_runtime/generators.dart), _ignoreTypeFailure (FunctionElementImpl @ dart:_runtime/operations.dart), Encoding.decodeStream (MethodElementImpl @ dart:convert/encoding.dart) */
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
  }
  dart.setSignature(Future, {
    constructors: () => ({new: [Future$(T), [dart.functionType(dart.dynamic, [])]]})
  });
  return Future;
});
let Future = Future$();
// /* Incoming: completer (LocalVariableElementImpl @ dart:_isolate_helper), IsolateNatives.spawn (MethodElementImpl @ dart:_isolate_helper), Completer. (ConstructorElementImpl @ dart:async/future.dart), Completer.sync (ConstructorElementImpl @ dart:async/future.dart), _Completer (ClassElementImpl @ dart:async/future_impl.dart), _AsyncCompleter (ClassElementImpl @ dart:async/future_impl.dart), _SyncCompleter (ClassElementImpl @ dart:async/future_impl.dart), _AsyncStarStreamController (TopLevelVariableElementImpl @ dart:_runtime/generators.dart) */
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
const _completeError = Symbol('_completeError');
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
// /* Incoming: _AsyncCompleter (ClassElementImpl @ dart:async/future_impl.dart), _SyncCompleter (ClassElementImpl @ dart:async/future_impl.dart) */
const _Completer$ = dart.generic(function(T) {
  class _Completer extends core.Object {
    _Completer() {}
  }
  _Completer[dart.implements] = () => [Completer$(T)];
  return _Completer;
});
let _Completer = _Completer$();
// /* Incoming: Completer. (ConstructorElementImpl @ dart:async/future.dart) */
const _AsyncCompleter$ = dart.generic(function(T) {
  class _AsyncCompleter extends _Completer$(T) {
    _AsyncCompleter() {
      super._Completer();
    }
  }
  return _AsyncCompleter;
});
let _AsyncCompleter = _AsyncCompleter$();
const _nextListener = Symbol('_nextListener');
const _zone = Symbol('_zone');
const _onValue = Symbol('_onValue');
const _onError = Symbol('_onError');
const _errorTest = Symbol('_errorTest');
const _whenCompleteAction = Symbol('_whenCompleteAction');
// /* Incoming: _FutureListener._nextListener (FieldElementImpl @ dart:async/future_impl.dart), _FutureListener.then (ConstructorElementImpl @ dart:async/future_impl.dart), _FutureListener.catchError (ConstructorElementImpl @ dart:async/future_impl.dart), _FutureListener.whenComplete (ConstructorElementImpl @ dart:async/future_impl.dart), _FutureListener.chain (ConstructorElementImpl @ dart:async/future_impl.dart), _Future.then (MethodElementImpl @ dart:async/future_impl.dart), _Future.catchError (MethodElementImpl @ dart:async/future_impl.dart), _Future.whenComplete (MethodElementImpl @ dart:async/future_impl.dart), _Future._addListener (MethodElementImpl @ dart:async/future_impl.dart), _Future._removeListeners (MethodElementImpl @ dart:async/future_impl.dart), current (LocalVariableElementImpl @ dart:async/future_impl.dart), prev (LocalVariableElementImpl @ dart:async/future_impl.dart), next (LocalVariableElementImpl @ dart:async/future_impl.dart), listener (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future._chainCoreFuture (MethodElementImpl @ dart:async/future_impl.dart), listeners (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future._complete (MethodElementImpl @ dart:async/future_impl.dart), listeners (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future._completeWithValue (MethodElementImpl @ dart:async/future_impl.dart), listeners (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future._completeError (MethodElementImpl @ dart:async/future_impl.dart), _Future._propagateToListeners (MethodElementImpl @ dart:async/future_impl.dart), listener (LocalVariableElementImpl @ dart:async/future_impl.dart), listener (LocalVariableElementImpl @ dart:async/future_impl.dart), zone (LocalVariableElementImpl @ dart:async/future_impl.dart), handleValueCallback (FunctionElementImpl @ dart:async/future_impl.dart), handleError (FunctionElementImpl @ dart:async/future_impl.dart), test (LocalVariableElementImpl @ dart:async/future_impl.dart), errorCallback (LocalVariableElementImpl @ dart:async/future_impl.dart), handleWhenCompleteCallback (FunctionElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart) */
class _FutureListener extends core.Object {
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
dart.defineNamedConstructor(_FutureListener, 'chain');
dart.setSignature(_FutureListener, {
  constructors: () => ({chain: [_FutureListener, [_Future]]})
});
_FutureListener.MASK_VALUE = 1;
_FutureListener.MASK_ERROR = 2;
_FutureListener.MASK_TEST_ERROR = 4;
_FutureListener.MASK_WHENCOMPLETE = 8;
_FutureListener.STATE_CHAIN = 0;
dart.defineLazyProperties(_FutureListener, {
  get STATE_CATCHERROR_TEST() {
    return dart.notNull(_FutureListener.MASK_ERROR) | dart.notNull(_FutureListener.MASK_TEST_ERROR);
  },
  get STATE_WHENCOMPLETE() {
    return _FutureListener.MASK_WHENCOMPLETE;
  }
});
const _resultOrListeners = Symbol('_resultOrListeners');
const _asyncComplete = Symbol('_asyncComplete');
const _asyncCompleteError = Symbol('_asyncCompleteError');
const _mayComplete = Symbol('_mayComplete');
const _isChained = Symbol('_isChained');
const _isComplete = Symbol('_isComplete');
const _hasError = Symbol('_hasError');
const _markPendingCompletion = Symbol('_markPendingCompletion');
const _error = Symbol('_error');
const _setValue = Symbol('_setValue');
const _setErrorObject = Symbol('_setErrorObject');
const _setError = Symbol('_setError');
const _addListener = Symbol('_addListener');
const _removeListeners = Symbol('_removeListeners');
const _completeWithValue = Symbol('_completeWithValue');
const _value = Symbol('_value');
// /* Incoming: _BroadcastStreamController._doneFuture (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._ensureDoneFuture (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.close (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), doneFuture (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.done (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.addStream (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._callOnCancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController._sendDone (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController._sendDone (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _DoneSubscription.cancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _DoneSubscription.asFuture (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), Future._nullFuture (ConstFieldElementImpl @ dart:async/future.dart), result (LocalVariableElementImpl @ dart:async/future.dart), Future. (ConstructorElementImpl @ dart:async/future.dart), result (LocalVariableElementImpl @ dart:async/future.dart), Future.microtask (ConstructorElementImpl @ dart:async/future.dart), Future.value (ConstructorElementImpl @ dart:async/future.dart), Future.error (ConstructorElementImpl @ dart:async/future.dart), result (LocalVariableElementImpl @ dart:async/future.dart), Future.delayed (ConstructorElementImpl @ dart:async/future.dart), result (LocalVariableElementImpl @ dart:async/future.dart), handleError (FunctionElementImpl @ dart:async/future.dart), Future.wait (MethodElementImpl @ dart:async/future.dart), doneSignal (LocalVariableElementImpl @ dart:async/future.dart), Future.doWhile (MethodElementImpl @ dart:async/future.dart), _completeWithErrorCallback (FunctionElementImpl @ dart:async/future.dart), _Completer.future (ConstFieldElementImpl @ dart:async/future_impl.dart), _Completer.completeError (MethodElementImpl @ dart:async/future_impl.dart), _Completer.isCompleted (FieldElementImpl @ dart:async/future_impl.dart), _AsyncCompleter.complete (MethodElementImpl @ dart:async/future_impl.dart), _AsyncCompleter._completeError (MethodElementImpl @ dart:async/future_impl.dart), _SyncCompleter.complete (MethodElementImpl @ dart:async/future_impl.dart), _SyncCompleter._completeError (MethodElementImpl @ dart:async/future_impl.dart), _FutureListener.result (FieldElementImpl @ dart:async/future_impl.dart), _FutureListener.then (ConstructorElementImpl @ dart:async/future_impl.dart), _FutureListener.catchError (ConstructorElementImpl @ dart:async/future_impl.dart), _FutureListener.whenComplete (ConstructorElementImpl @ dart:async/future_impl.dart), _FutureListener.chain (ConstructorElementImpl @ dart:async/future_impl.dart), _FutureListener._zone (FieldElementImpl @ dart:async/future_impl.dart), _Future. (ConstructorElementImpl @ dart:async/future_impl.dart), _Future.immediate (ConstructorElementImpl @ dart:async/future_impl.dart), _Future.immediateError (ConstructorElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future.then (MethodElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future.catchError (MethodElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future.whenComplete (MethodElementImpl @ dart:async/future_impl.dart), _Future.asStream (MethodElementImpl @ dart:async/future_impl.dart), _Future._addListener (MethodElementImpl @ dart:async/future_impl.dart), _Future._chainForeignFuture (MethodElementImpl @ dart:async/future_impl.dart), _Future._chainCoreFuture (MethodElementImpl @ dart:async/future_impl.dart), listener (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future._complete (MethodElementImpl @ dart:async/future_impl.dart), _Future._completeWithValue (MethodElementImpl @ dart:async/future_impl.dart), _Future._completeError (MethodElementImpl @ dart:async/future_impl.dart), _Future._asyncComplete (MethodElementImpl @ dart:async/future_impl.dart), coreFuture (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future._propagateToListeners (MethodElementImpl @ dart:async/future_impl.dart), hasError (LocalVariableElementImpl @ dart:async/future_impl.dart), asyncError (LocalVariableElementImpl @ dart:async/future_impl.dart), sourceValue (LocalVariableElementImpl @ dart:async/future_impl.dart), asyncError (LocalVariableElementImpl @ dart:async/future_impl.dart), asyncError (LocalVariableElementImpl @ dart:async/future_impl.dart), handleWhenCompleteCallback (FunctionElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future.timeout (MethodElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/future_impl.dart), result (LocalVariableElementImpl @ dart:async/stream.dart), Stream.reduce (MethodElementImpl @ dart:async/stream.dart), result (LocalVariableElementImpl @ dart:async/stream.dart), Stream.fold (MethodElementImpl @ dart:async/stream.dart), result (LocalVariableElementImpl @ dart:async/stream.dart), Stream.join (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.contains (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.forEach (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.every (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.any (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.length (FieldElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.isEmpty (FieldElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.toList (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.toSet (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.first (FieldElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.last (FieldElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.single (FieldElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.firstWhere (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.lastWhere (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.singleWhere (MethodElementImpl @ dart:async/stream.dart), future (LocalVariableElementImpl @ dart:async/stream.dart), Stream.elementAt (MethodElementImpl @ dart:async/stream.dart), _StreamController._doneFuture (FieldElementImpl @ dart:async/stream_controller.dart), _StreamController.addStream (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._ensureDoneFuture (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._recordCancel (MethodElementImpl @ dart:async/stream_controller.dart), complete (FunctionElementImpl @ dart:async/stream_controller.dart), _AddStreamState.addStreamFuture (FieldElementImpl @ dart:async/stream_controller.dart), _AddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart), _AddStreamState.cancel (MethodElementImpl @ dart:async/stream_controller.dart), _AddStreamState.complete (MethodElementImpl @ dart:async/stream_controller.dart), result (LocalVariableElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.asFuture (MethodElementImpl @ dart:async/stream_impl.dart), result (LocalVariableElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription.asFuture (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl.moveNext (MethodElementImpl @ dart:async/stream_impl.dart), hasNext (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl.cancel (MethodElementImpl @ dart:async/stream_impl.dart), hasNext (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._onData (MethodElementImpl @ dart:async/stream_impl.dart), hasNext (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._onError (MethodElementImpl @ dart:async/stream_impl.dart), hasNext (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._onDone (MethodElementImpl @ dart:async/stream_impl.dart), _cancelAndError (FunctionElementImpl @ dart:async/stream_pipe.dart), _cancelAndErrorWithReplacement (FunctionElementImpl @ dart:async/stream_pipe.dart), _cancelAndErrorClosure (FunctionElementImpl @ dart:async/stream_pipe.dart), _cancelAndValue (FunctionElementImpl @ dart:async/stream_pipe.dart) */
const _Future$ = dart.generic(function(T) {
  class _Future extends core.Object {
    _Future() {
      this[_zone] = Zone.current;
      this[_state] = _Future$()._INCOMPLETE;
      this[_resultOrListeners] = null;
    }
    immediate(value) {
      this[_zone] = Zone.current;
      this[_state] = _Future$()._INCOMPLETE;
      this[_resultOrListeners] = null;
      this[_asyncComplete](value);
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
        this[_zone].scheduleMicrotask(dart.fn(() => {
          _Future$()._propagateToListeners(this, listener);
        }, dart.void, []));
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
    [_asyncComplete](value) {
      dart.assert(!dart.notNull(this[_isComplete]));
      if (value == null) {
      } else if (dart.is(value, Future)) {
        let typedFuture = dart.as(value, Future$(T));
        if (dart.is(typedFuture, _Future$())) {
          let coreFuture = dart.as(typedFuture, _Future$(T));
          if (dart.notNull(coreFuture[_isComplete]) && dart.notNull(coreFuture[_hasError])) {
            this[_markPendingCompletion]();
            this[_zone].scheduleMicrotask(dart.fn(() => {
              _Future$()._chainCoreFuture(coreFuture, this);
            }, dart.void, []));
          } else {
            _Future$()._chainCoreFuture(coreFuture, this);
          }
        } else {
          _Future$()._chainForeignFuture(typedFuture, this);
        }
        return;
      } else {
        let typedValue = dart.as(value, T);
      }
      this[_markPendingCompletion]();
      this[_zone].scheduleMicrotask(dart.fn(() => {
        this[_completeWithValue](value);
      }, dart.void, []));
    }
    [_asyncCompleteError](error, stackTrace) {
      dart.assert(!dart.notNull(this[_isComplete]));
      this[_markPendingCompletion]();
      this[_zone].scheduleMicrotask(dart.fn(() => {
        this[_completeError](error, stackTrace);
      }, dart.void, []));
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
  dart.defineNamedConstructor(_Future, 'immediate');
  dart.defineNamedConstructor(_Future, 'immediateError');
  dart.setSignature(_Future, {
    constructors: () => ({
      _Future: [_Future$(T), []],
      immediate: [_Future$(T), [dart.dynamic]],
      immediateError: [_Future$(T), [dart.dynamic], [core.StackTrace]]
    }),
    methods: () => ({
      [_markPendingCompletion]: [dart.void, []],
      [_setValue]: [dart.void, [T]],
      [_setErrorObject]: [dart.void, [AsyncError]],
      [_setError]: [dart.void, [core.Object, core.StackTrace]],
      [_addListener]: [dart.void, [_FutureListener]],
      [_removeListeners]: [_FutureListener, []],
      [_complete]: [dart.void, [dart.dynamic]],
      [_completeWithValue]: [dart.void, [dart.dynamic]],
      [_completeError]: [dart.void, [dart.dynamic], [core.StackTrace]],
      [_asyncComplete]: [dart.void, [dart.dynamic]],
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
  _Future._CHAINED = 2;
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
// /* Incoming: _AsyncCallbackEntry.next (FieldElementImpl @ dart:async/schedule_microtask.dart), _AsyncCallbackEntry. (ConstructorElementImpl @ dart:async/schedule_microtask.dart), _nextCallback (TopLevelVariableElementImpl @ dart:async/schedule_microtask.dart), _lastCallback (TopLevelVariableElementImpl @ dart:async/schedule_microtask.dart), _lastPriorityCallback (TopLevelVariableElementImpl @ dart:async/schedule_microtask.dart), _asyncRunCallbackLoop (FunctionElementImpl @ dart:async/schedule_microtask.dart), entry (LocalVariableElementImpl @ dart:async/schedule_microtask.dart), _asyncRunCallback (FunctionElementImpl @ dart:async/schedule_microtask.dart), _scheduleAsyncCallback (FunctionElementImpl @ dart:async/schedule_microtask.dart), newEntry (LocalVariableElementImpl @ dart:async/schedule_microtask.dart), entry (LocalVariableElementImpl @ dart:async/schedule_microtask.dart), _schedulePriorityAsyncCallback (FunctionElementImpl @ dart:async/schedule_microtask.dart) */
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
// /* Incoming: _asyncRunCallback (FunctionElementImpl @ dart:async/schedule_microtask.dart), _scheduleAsyncCallback (FunctionElementImpl @ dart:async/schedule_microtask.dart) */
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
// /* Incoming: Isolate.errors (FieldElementImpl @ dart:isolate), ReceivePort (ClassElementImpl @ dart:isolate), ReceivePortImpl (ClassElementImpl @ dart:_isolate_helper), ReceivePortImpl.listen (MethodElementImpl @ dart:_isolate_helper), _BroadcastStream (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.stream (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.addStream (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), Future.asStream (MethodElementImpl @ dart:async/future.dart), _Future.asStream (MethodElementImpl @ dart:async/future_impl.dart), Stream. (ConstructorElementImpl @ dart:async/stream.dart), Stream.fromFuture (ConstructorElementImpl @ dart:async/stream.dart), Stream.fromIterable (ConstructorElementImpl @ dart:async/stream.dart), Stream.periodic (ConstructorElementImpl @ dart:async/stream.dart), Stream.eventTransformed (ConstructorElementImpl @ dart:async/stream.dart), Stream.asBroadcastStream (MethodElementImpl @ dart:async/stream.dart), Stream.where (MethodElementImpl @ dart:async/stream.dart), Stream.map (MethodElementImpl @ dart:async/stream.dart), Stream.asyncMap (MethodElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), Stream.asyncExpand (MethodElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), newStream (LocalVariableElementImpl @ dart:async/stream.dart), Stream.handleError (MethodElementImpl @ dart:async/stream.dart), Stream.expand (MethodElementImpl @ dart:async/stream.dart), Stream.pipe (MethodElementImpl @ dart:async/stream.dart), Stream.transform (MethodElementImpl @ dart:async/stream.dart), Stream.reduce (MethodElementImpl @ dart:async/stream.dart), Stream.fold (MethodElementImpl @ dart:async/stream.dart), Stream.join (MethodElementImpl @ dart:async/stream.dart), Stream.contains (MethodElementImpl @ dart:async/stream.dart), Stream.forEach (MethodElementImpl @ dart:async/stream.dart), Stream.every (MethodElementImpl @ dart:async/stream.dart), Stream.any (MethodElementImpl @ dart:async/stream.dart), Stream.length (FieldElementImpl @ dart:async/stream.dart), Stream.isEmpty (FieldElementImpl @ dart:async/stream.dart), Stream.toList (MethodElementImpl @ dart:async/stream.dart), Stream.toSet (MethodElementImpl @ dart:async/stream.dart), Stream.take (MethodElementImpl @ dart:async/stream.dart), Stream.takeWhile (MethodElementImpl @ dart:async/stream.dart), Stream.skip (MethodElementImpl @ dart:async/stream.dart), Stream.skipWhile (MethodElementImpl @ dart:async/stream.dart), Stream.distinct (MethodElementImpl @ dart:async/stream.dart), Stream.first (FieldElementImpl @ dart:async/stream.dart), Stream.last (FieldElementImpl @ dart:async/stream.dart), Stream.single (FieldElementImpl @ dart:async/stream.dart), Stream.firstWhere (MethodElementImpl @ dart:async/stream.dart), Stream.lastWhere (MethodElementImpl @ dart:async/stream.dart), Stream.singleWhere (MethodElementImpl @ dart:async/stream.dart), Stream.elementAt (MethodElementImpl @ dart:async/stream.dart), Stream.timeout (MethodElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), StreamView (ClassElementImpl @ dart:async/stream.dart), StreamView._stream (FieldElementImpl @ dart:async/stream.dart), StreamView. (ConstructorElementImpl @ dart:async/stream.dart), StreamView.isBroadcast (FieldElementImpl @ dart:async/stream.dart), StreamView.asBroadcastStream (MethodElementImpl @ dart:async/stream.dart), StreamView.listen (MethodElementImpl @ dart:async/stream.dart), StreamConsumer.addStream (MethodElementImpl @ dart:async/stream.dart), StreamTransformer. (ConstructorElementImpl @ dart:async/stream.dart), StreamTransformer.bind (MethodElementImpl @ dart:async/stream.dart), StreamIterator. (ConstructorElementImpl @ dart:async/stream.dart), StreamController.stream (FieldElementImpl @ dart:async/stream_controller.dart), StreamController.addStream (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController.stream (FieldElementImpl @ dart:async/stream_controller.dart), _StreamController.addStream (MethodElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _ControllerStream (ClassElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.addStream (MethodElementImpl @ dart:async/stream_controller.dart), _AddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart), _StreamControllerAddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart), _StreamImpl (ClassElementImpl @ dart:async/stream_impl.dart), _GeneratedStreamImpl (ClassElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream (ClassElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._source (FieldElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream. (ConstructorElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream.listen (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl. (ConstructorElementImpl @ dart:async/stream_impl.dart), _ForwardingStream (ClassElementImpl @ dart:async/stream_pipe.dart), _ForwardingStream._source (FieldElementImpl @ dart:async/stream_pipe.dart), _ForwardingStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _ForwardingStream.isBroadcast (FieldElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _WhereStream (ClassElementImpl @ dart:async/stream_pipe.dart), _WhereStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _MapStream (ClassElementImpl @ dart:async/stream_pipe.dart), _MapStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _ExpandStream (ClassElementImpl @ dart:async/stream_pipe.dart), _ExpandStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _HandleErrorStream (ClassElementImpl @ dart:async/stream_pipe.dart), _HandleErrorStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _TakeStream (ClassElementImpl @ dart:async/stream_pipe.dart), _TakeStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _TakeWhileStream (ClassElementImpl @ dart:async/stream_pipe.dart), _TakeWhileStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _SkipStream (ClassElementImpl @ dart:async/stream_pipe.dart), _SkipStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _SkipWhileStream (ClassElementImpl @ dart:async/stream_pipe.dart), _SkipWhileStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _DistinctStream (ClassElementImpl @ dart:async/stream_pipe.dart), _DistinctStream. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _SinkTransformerStreamSubscription. (ConstructorElementImpl @ dart:async/stream_transformers.dart), _StreamSinkTransformer.bind (MethodElementImpl @ dart:async/stream_transformers.dart), _BoundSinkStream (ClassElementImpl @ dart:async/stream_transformers.dart), _BoundSinkStream._stream (FieldElementImpl @ dart:async/stream_transformers.dart), _BoundSinkStream.isBroadcast (FieldElementImpl @ dart:async/stream_transformers.dart), _BoundSinkStream. (ConstructorElementImpl @ dart:async/stream_transformers.dart), subscription (LocalVariableElementImpl @ dart:async/stream_transformers.dart), _StreamHandlerTransformer.bind (MethodElementImpl @ dart:async/stream_transformers.dart), _SubscriptionTransformer (FunctionTypeAliasElementImpl @ dart:async/stream_transformers.dart), _StreamSubscriptionTransformer.bind (MethodElementImpl @ dart:async/stream_transformers.dart), _BoundSubscriptionStream (ClassElementImpl @ dart:async/stream_transformers.dart), _BoundSubscriptionStream._stream (FieldElementImpl @ dart:async/stream_transformers.dart), _BoundSubscriptionStream. (ConstructorElementImpl @ dart:async/stream_transformers.dart), result (LocalVariableElementImpl @ dart:async/stream_transformers.dart), _ignoreTypeFailure (FunctionElementImpl @ dart:_runtime/operations.dart), _UnicodeSubsetEncoder.bind (MethodElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetDecoder.bind (MethodElementImpl @ dart:convert/ascii.dart), Converter.bind (MethodElementImpl @ dart:convert/converter.dart), Encoding.decodeStream (MethodElementImpl @ dart:convert/encoding.dart), JsonEncoder.bind (MethodElementImpl @ dart:convert/json.dart), JsonUtf8Encoder.bind (MethodElementImpl @ dart:convert/json.dart), JsonDecoder.bind (MethodElementImpl @ dart:convert/json.dart), Utf8Encoder.bind (MethodElementImpl @ dart:convert/utf.dart), Utf8Decoder.bind (MethodElementImpl @ dart:convert/utf.dart) */
const Stream$ = dart.generic(function(T) {
  class Stream extends core.Object {
    Stream() {
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
  }
  dart.setSignature(Stream, {
    constructors: () => ({Stream: [Stream$(T), []]}),
    methods: () => ({contains: [Future$(core.bool), [core.Object]]})
  });
  return Stream;
});
let Stream = Stream$();
// /* Incoming: ReceivePort.listen (MethodElementImpl @ dart:isolate), ReceivePortImpl.listen (MethodElementImpl @ dart:_isolate_helper), _BroadcastSubscription (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._subscribe (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._recordCancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._recordPause (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._recordResume (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _DoneSubscription (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), Stream.asBroadcastStream (MethodElementImpl @ dart:async/stream.dart), Stream.listen (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), Stream.asyncMap (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), Stream.asyncExpand (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.reduce (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.fold (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.join (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.contains (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.forEach (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.every (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.any (MethodElementImpl @ dart:async/stream.dart), Stream.length (FieldElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.isEmpty (FieldElementImpl @ dart:async/stream.dart), Stream.toList (MethodElementImpl @ dart:async/stream.dart), Stream.toSet (MethodElementImpl @ dart:async/stream.dart), Stream.drain (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.first (FieldElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.last (FieldElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.single (FieldElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.firstWhere (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.lastWhere (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.singleWhere (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), Stream.elementAt (MethodElementImpl @ dart:async/stream.dart), subscription (LocalVariableElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), result (LocalVariableElementImpl @ dart:async/stream.dart), onCancel (FunctionElementImpl @ dart:async/stream.dart), Stream.timeout (MethodElementImpl @ dart:async/stream.dart), StreamView.asBroadcastStream (MethodElementImpl @ dart:async/stream.dart), StreamView.listen (MethodElementImpl @ dart:async/stream.dart), StreamTransformer. (ConstructorElementImpl @ dart:async/stream.dart), _StreamControllerLifecycle._subscribe (MethodElementImpl @ dart:async/stream_controller.dart), _StreamControllerLifecycle._recordPause (MethodElementImpl @ dart:async/stream_controller.dart), _StreamControllerLifecycle._recordResume (MethodElementImpl @ dart:async/stream_controller.dart), _StreamControllerLifecycle._recordCancel (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._subscribe (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._recordCancel (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._recordPause (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._recordResume (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerStream._createSubscription (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription (ClassElementImpl @ dart:async/stream_controller.dart), _AddStreamState.addSubscription (FieldElementImpl @ dart:async/stream_controller.dart), _AddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart), _AddStreamState.pause (MethodElementImpl @ dart:async/stream_controller.dart), _AddStreamState.resume (MethodElementImpl @ dart:async/stream_controller.dart), cancel2 (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamControllerAddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription (ClassElementImpl @ dart:async/stream_impl.dart), _StreamImpl.listen (MethodElementImpl @ dart:async/stream_impl.dart), subscription (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamImpl._createSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _StreamImpl._onListen (MethodElementImpl @ dart:async/stream_impl.dart), _GeneratedStreamImpl._createSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _broadcastCallback (FunctionTypeAliasElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription (ClassElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._subscription (FieldElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream. (ConstructorElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream.listen (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._onCancel (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._cancelSubscription (MethodElementImpl @ dart:async/stream_impl.dart), subscription (LocalVariableElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._pauseSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._resumeSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._isSubscriptionPaused (FieldElementImpl @ dart:async/stream_impl.dart), _BroadcastSubscriptionWrapper (ClassElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._subscription (FieldElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl. (ConstructorElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl.moveNext (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._clear (MethodElementImpl @ dart:async/stream_impl.dart), subscription (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl.cancel (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._onData (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._onError (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._onDone (MethodElementImpl @ dart:async/stream_impl.dart), _cancelAndError (FunctionElementImpl @ dart:async/stream_pipe.dart), cancelFuture (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _cancelAndErrorWithReplacement (FunctionElementImpl @ dart:async/stream_pipe.dart), _cancelAndErrorClosure (FunctionElementImpl @ dart:async/stream_pipe.dart), _cancelAndValue (FunctionElementImpl @ dart:async/stream_pipe.dart), cancelFuture (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _ForwardingStream.listen (MethodElementImpl @ dart:async/stream_pipe.dart), _ForwardingStream._createSubscription (MethodElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription (ClassElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription._subscription (FieldElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription. (ConstructorElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription._onPause (MethodElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription._onResume (MethodElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription._onCancel (MethodElementImpl @ dart:async/stream_pipe.dart), subscription (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _SinkTransformerStreamSubscription (ClassElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._subscription (FieldElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription. (ConstructorElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._isSubscribed (FieldElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._onPause (MethodElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._onResume (MethodElementImpl @ dart:async/stream_transformers.dart), subscription (LocalVariableElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._onCancel (MethodElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._handleDone (MethodElementImpl @ dart:async/stream_transformers.dart), _BoundSinkStream.listen (MethodElementImpl @ dart:async/stream_transformers.dart), subscription (LocalVariableElementImpl @ dart:async/stream_transformers.dart), _SubscriptionTransformer (FunctionTypeAliasElementImpl @ dart:async/stream_transformers.dart), _BoundSubscriptionStream.listen (MethodElementImpl @ dart:async/stream_transformers.dart), result (LocalVariableElementImpl @ dart:async/stream_transformers.dart), _ignoreTypeFailure (FunctionElementImpl @ dart:_runtime/operations.dart) */
const StreamSubscription$ = dart.generic(function(T) {
  class StreamSubscription extends core.Object {}
  return StreamSubscription;
});
let StreamSubscription = StreamSubscription$();
// /* Incoming: _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), Stream.eventTransformed (ConstructorElementImpl @ dart:async/stream.dart), Stream.timeout (MethodElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), StreamSink (ClassElementImpl @ dart:async/stream.dart), StreamTransformer.fromHandlers (ConstructorElementImpl @ dart:async/stream.dart), _ControllerEventSinkWrapper (ClassElementImpl @ dart:async/stream.dart), _ControllerEventSinkWrapper._sink (FieldElementImpl @ dart:async/stream.dart), _ControllerEventSinkWrapper. (ConstructorElementImpl @ dart:async/stream.dart), _ControllerEventSinkWrapper.add (MethodElementImpl @ dart:async/stream.dart), _ControllerEventSinkWrapper.addError (MethodElementImpl @ dart:async/stream.dart), _ControllerEventSinkWrapper.close (MethodElementImpl @ dart:async/stream.dart), StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper (ClassElementImpl @ dart:async/stream_controller.dart), _EventSinkWrapper (ClassElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._transformerSink (FieldElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription. (ConstructorElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._handleData (MethodElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._handleError (MethodElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription._handleDone (MethodElementImpl @ dart:async/stream_transformers.dart), _SinkMapper (FunctionTypeAliasElementImpl @ dart:async/stream_transformers.dart), _TransformDataHandler (FunctionTypeAliasElementImpl @ dart:async/stream_transformers.dart), _TransformErrorHandler (FunctionTypeAliasElementImpl @ dart:async/stream_transformers.dart), _TransformDoneHandler (FunctionTypeAliasElementImpl @ dart:async/stream_transformers.dart), _HandlerEventSink (ClassElementImpl @ dart:async/stream_transformers.dart), _HandlerEventSink._sink (FieldElementImpl @ dart:async/stream_transformers.dart), _HandlerEventSink. (ConstructorElementImpl @ dart:async/stream_transformers.dart), _HandlerEventSink.add (MethodElementImpl @ dart:async/stream_transformers.dart), _HandlerEventSink.addError (MethodElementImpl @ dart:async/stream_transformers.dart), _HandlerEventSink.close (MethodElementImpl @ dart:async/stream_transformers.dart), _StreamHandlerTransformer. (ConstructorElementImpl @ dart:async/stream_transformers.dart), _StreamHandlerTransformer._defaultHandleData (MethodElementImpl @ dart:async/stream_transformers.dart), _StreamHandlerTransformer._defaultHandleError (MethodElementImpl @ dart:async/stream_transformers.dart), _StreamHandlerTransformer._defaultHandleDone (MethodElementImpl @ dart:async/stream_transformers.dart), _EventSinkAdapter._sink (FieldElementImpl @ dart:convert/chunked_conversion.dart), _EventSinkAdapter. (ConstructorElementImpl @ dart:convert/chunked_conversion.dart), _EventSinkAdapter.add (MethodElementImpl @ dart:convert/chunked_conversion.dart), _EventSinkAdapter.close (MethodElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink (ClassElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink._eventSink (FieldElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink. (ConstructorElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink.addError (MethodElementImpl @ dart:convert/chunked_conversion.dart), Converter.bind (MethodElementImpl @ dart:convert/converter.dart) */
const EventSink$ = dart.generic(function(T) {
  class EventSink extends core.Object {}
  EventSink[dart.implements] = () => [core.Sink$(T)];
  return EventSink;
});
let EventSink = EventSink$();
// /* Incoming: _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), Stream.pipe (MethodElementImpl @ dart:async/stream.dart), StreamSink (ClassElementImpl @ dart:async/stream.dart), StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper (ClassElementImpl @ dart:async/stream_controller.dart) */
const StreamConsumer$ = dart.generic(function(S) {
  class StreamConsumer extends core.Object {}
  return StreamConsumer;
});
let StreamConsumer = StreamConsumer$();
// /* Incoming: _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.sink (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), StreamController (ClassElementImpl @ dart:async/stream_controller.dart), StreamController.sink (FieldElementImpl @ dart:async/stream_controller.dart), _StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamController.sink (FieldElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper (ClassElementImpl @ dart:async/stream_controller.dart) */
const StreamSink$ = dart.generic(function(S) {
  class StreamSink extends core.Object {}
  StreamSink[dart.implements] = () => [StreamConsumer$(S), EventSink$(S)];
  return StreamSink;
});
let StreamSink = StreamSink$();
const __CastType10 = dart.typedef('__CastType10', () => dart.functionType(dart.void, [StreamSubscription]));
const __CastType12 = dart.typedef('__CastType12', () => dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace]));
const __CastType15 = dart.typedef('__CastType15', () => dart.functionType(dart.void, []));
const __CastType16 = dart.typedef('__CastType16', () => dart.functionType(dart.void, [EventSink]));
// /* Incoming: controller (LocalVariableElementImpl @ dart:isolate), handleError (FunctionElementImpl @ dart:isolate), Isolate.errors (FieldElementImpl @ dart:isolate), ReceivePortImpl._controller (FieldElementImpl @ dart:_isolate_helper), ReceivePortImpl.fromRawReceivePort (ConstructorElementImpl @ dart:_isolate_helper), ReceivePortImpl.listen (MethodElementImpl @ dart:_isolate_helper), ReceivePortImpl.close (MethodElementImpl @ dart:_isolate_helper), _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), controller (LocalVariableElementImpl @ dart:async/stream.dart), controller (LocalVariableElementImpl @ dart:async/stream.dart), sendEvent (FunctionElementImpl @ dart:async/stream.dart), Stream.periodic (ConstructorElementImpl @ dart:async/stream.dart), controller (LocalVariableElementImpl @ dart:async/stream.dart), add (LocalVariableElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), eventSink (LocalVariableElementImpl @ dart:async/stream.dart), Stream.asyncMap (MethodElementImpl @ dart:async/stream.dart), controller (LocalVariableElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), eventSink (LocalVariableElementImpl @ dart:async/stream.dart), Stream.asyncExpand (MethodElementImpl @ dart:async/stream.dart), controller (LocalVariableElementImpl @ dart:async/stream.dart), onData (FunctionElementImpl @ dart:async/stream.dart), onError (FunctionElementImpl @ dart:async/stream.dart), eventSink (LocalVariableElementImpl @ dart:async/stream.dart), onDone (FunctionElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), Stream.timeout (MethodElementImpl @ dart:async/stream.dart), StreamController. (ConstructorElementImpl @ dart:async/stream_controller.dart), StreamController.broadcast (ConstructorElementImpl @ dart:async/stream_controller.dart), _StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper._target (FieldElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper. (ConstructorElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.add (MethodElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.addError (MethodElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.close (MethodElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.addStream (MethodElementImpl @ dart:async/stream_controller.dart), _StreamSinkWrapper.done (FieldElementImpl @ dart:async/stream_controller.dart), _AsyncStarStreamController (TopLevelVariableElementImpl @ dart:_runtime/generators.dart) */
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
// /* Incoming: _BroadcastStream. (ConstructorElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastSubscription. (ConstructorElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._removeListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _ControllerStream._controller (FieldElementImpl @ dart:async/stream_controller.dart), _ControllerStream. (ConstructorElementImpl @ dart:async/stream_controller.dart), _ControllerStream._createSubscription (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerStream.hashCode (FieldElementImpl @ dart:async/stream_controller.dart), _ControllerStream.== (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._controller (FieldElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription. (ConstructorElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._onCancel (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._onPause (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._onResume (MethodElementImpl @ dart:async/stream_controller.dart) */
const _StreamControllerLifecycle$ = dart.generic(function(T) {
  class _StreamControllerLifecycle extends core.Object {}
  return _StreamControllerLifecycle;
});
let _StreamControllerLifecycle = _StreamControllerLifecycle$();
const _varData = Symbol('_varData');
const _isCanceled = Symbol('_isCanceled');
const _isInitialState = Symbol('_isInitialState');
const _isInputPaused = Symbol('_isInputPaused');
const _subscription = Symbol('_subscription');
const _ensurePendingEvents = Symbol('_ensurePendingEvents');
const _badEventState = Symbol('_badEventState');
const _add = Symbol('_add');
// /* Incoming: controller (LocalVariableElementImpl @ dart:async/stream.dart), Stream.fromFuture (ConstructorElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), onError (FunctionElementImpl @ dart:async/stream.dart), StreamController. (ConstructorElementImpl @ dart:async/stream_controller.dart), _StreamController. (ConstructorElementImpl @ dart:async/stream_controller.dart), _StreamController.stream (FieldElementImpl @ dart:async/stream_controller.dart), _StreamController.sink (FieldElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _StreamControllerAddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart) */
const _StreamController$ = dart.generic(function(T) {
  class _StreamController extends core.Object {
    _StreamController() {
      this[_varData] = null;
      this[_state] = _StreamController$()._STATE_INITIAL;
    }
    get [_isCanceled]() {
      return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_CANCELED)) != 0;
    }
    get hasListener() {
      return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_SUBSCRIBED)) != 0;
    }
    get [_isInitialState]() {
      return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_SUBSCRIPTION_MASK)) == _StreamController$()._STATE_INITIAL;
    }
    get isClosed() {
      return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_CLOSED)) != 0;
    }
    get isPaused() {
      return dart.notNull(this.hasListener) ? this[_subscription][_isInputPaused] : !dart.notNull(this[_isCanceled]);
    }
    get [_isAddingStream]() {
      return (dart.notNull(this[_state]) & dart.notNull(_StreamController$()._STATE_ADDSTREAM)) != 0;
    }
    get [_mayAddEvent]() {
      return dart.notNull(this[_state]) < dart.notNull(_StreamController$()._STATE_CLOSED);
    }
    [_ensurePendingEvents]() {
      dart.assert(this[_isInitialState]);
      if (!dart.notNull(this[_isAddingStream])) {
        if (this[_varData] == null) this[_varData] = new _StreamImplEvents();
        return dart.as(this[_varData], _StreamImplEvents);
      }
      let state = dart.as(this[_varData], _StreamControllerAddStreamState);
      if (state.varData == null) state.varData = new _StreamImplEvents();
      return dart.as(state.varData, _StreamImplEvents);
    }
    get [_subscription]() {
      dart.assert(this.hasListener);
      if (dart.notNull(this[_isAddingStream])) {
        let addState = dart.as(this[_varData], _StreamControllerAddStreamState);
        return dart.as(addState.varData, _ControllerSubscription);
      }
      return dart.as(this[_varData], _ControllerSubscription);
    }
    [_badEventState]() {
      if (dart.notNull(this.isClosed)) {
        return new core.StateError("Cannot add event after closing");
      }
      dart.assert(this[_isAddingStream]);
      return new core.StateError("Cannot add event while adding a stream");
    }
    add(value) {
      dart.as(value, T);
      if (!dart.notNull(this[_mayAddEvent])) dart.throw(this[_badEventState]());
      this[_add](value);
    }
    [_add](value) {
      dart.as(value, T);
      if (dart.notNull(this.hasListener)) {
        this[_sendData](value);
      } else if (dart.notNull(this[_isInitialState])) {
        this[_ensurePendingEvents]().add(new (_DelayedData$(T))(value));
      }
    }
  }
  _StreamController[dart.implements] = () => [StreamController$(T), _StreamControllerLifecycle$(T), _EventSink$(T), _EventDispatch$(T)];
  dart.setSignature(_StreamController, {
    constructors: () => ({_StreamController: [_StreamController$(T), []]}),
    methods: () => ({
      [_ensurePendingEvents]: [_StreamImplEvents, []],
      [_badEventState]: [core.Error, []],
      add: [dart.void, [T]],
      [_add]: [dart.void, [T]]
    })
  });
  _StreamController._STATE_INITIAL = 0;
  _StreamController._STATE_SUBSCRIBED = 1;
  _StreamController._STATE_CANCELED = 2;
  _StreamController._STATE_SUBSCRIPTION_MASK = 3;
  _StreamController._STATE_CLOSED = 4;
  _StreamController._STATE_ADDSTREAM = 8;
  return _StreamController;
});
let _StreamController = _StreamController$();
// /* Incoming: _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart) */
const _SyncStreamControllerDispatch$ = dart.generic(function(T) {
  class _SyncStreamControllerDispatch extends core.Object {}
  _SyncStreamControllerDispatch[dart.implements] = () => [_StreamController$(T)];
  return _SyncStreamControllerDispatch;
});
let _SyncStreamControllerDispatch = _SyncStreamControllerDispatch$();
// /* Incoming: _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart) */
const _AsyncStreamControllerDispatch$ = dart.generic(function(T) {
  class _AsyncStreamControllerDispatch extends core.Object {}
  _AsyncStreamControllerDispatch[dart.implements] = () => [_StreamController$(T)];
  return _AsyncStreamControllerDispatch;
});
let _AsyncStreamControllerDispatch = _AsyncStreamControllerDispatch$();
const _onPause = Symbol('_onPause');
const _onResume = Symbol('_onResume');
// /* Incoming: StreamController. (ConstructorElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController. (ConstructorElementImpl @ dart:async/stream_controller.dart) */
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
// /* Incoming: Stream.timeout (MethodElementImpl @ dart:async/stream.dart), StreamController. (ConstructorElementImpl @ dart:async/stream_controller.dart), _SyncStreamController. (ConstructorElementImpl @ dart:async/stream_controller.dart) */
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
// /* Incoming: _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart) */
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
const _onData = Symbol('_onData');
const _onDone = Symbol('_onDone');
// /* Incoming: _BroadcastSubscription (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._forEachListener (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController._sendData (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController._sendError (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _ControllerSubscription (ClassElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription. (ConstructorElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._setPendingEvents (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.resume (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._addPending (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._checkState (MethodElementImpl @ dart:async/stream_impl.dart), _StreamImpl._createSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _GeneratedStreamImpl._createSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _ForwardingStreamSubscription (ClassElementImpl @ dart:async/stream_pipe.dart), _SinkTransformerStreamSubscription (ClassElementImpl @ dart:async/stream_transformers.dart) */
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
    get [_isInputPaused]() {
      return (dart.notNull(this[_state]) & dart.notNull(_BufferingStreamSubscription$()._STATE_INPUT_PAUSED)) != 0;
    }
  }
  _BufferingStreamSubscription[dart.implements] = () => [StreamSubscription$(T), _EventSink$(T), _EventDispatch$(T)];
  dart.setSignature(_BufferingStreamSubscription, {
    constructors: () => ({_BufferingStreamSubscription: [_BufferingStreamSubscription$(T), [dart.functionType(dart.void, [T]), core.Function, dart.functionType(dart.void, []), core.bool]]}),
    methods: () => ({
      onData: [dart.void, [dart.functionType(dart.void, [T])]],
      onError: [dart.void, [core.Function]],
      onDone: [dart.void, [dart.functionType(dart.void, [])]]
    })
  });
  _BufferingStreamSubscription._STATE_CANCEL_ON_ERROR = 1;
  _BufferingStreamSubscription._STATE_INPUT_PAUSED = 4;
  return _BufferingStreamSubscription;
});
let _BufferingStreamSubscription = _BufferingStreamSubscription$();
const _controller = Symbol('_controller');
// /* Incoming: _BroadcastSubscription (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _StreamController.isPaused (FieldElementImpl @ dart:async/stream_controller.dart), _StreamController._subscription (FieldElementImpl @ dart:async/stream_controller.dart), subscription (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._subscribe (MethodElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch._sendData (MethodElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch._sendError (MethodElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch._sendDone (MethodElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch._sendData (MethodElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch._sendError (MethodElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch._sendDone (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription. (ConstructorElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._onCancel (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._onPause (MethodElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription._onResume (MethodElementImpl @ dart:async/stream_controller.dart) */
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
const _addError = Symbol('_addError');
const _close = Symbol('_close');
// /* Incoming: _BroadcastStreamController._addStreamState (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.addStream (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController._close (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart), _StreamControllerAddStreamState (ClassElementImpl @ dart:async/stream_controller.dart) */
const _AddStreamState$ = dart.generic(function(T) {
  class _AddStreamState extends core.Object {
    _AddStreamState(controller, source, cancelOnError) {
      this.addStreamFuture = new _Future();
      this.addSubscription = source.listen(dart.bind(controller, _add), {onError: dart.as(dart.notNull(cancelOnError) ? _AddStreamState$().makeErrorHandler(controller) : dart.bind(controller, _addError), core.Function), onDone: dart.bind(controller, _close), cancelOnError: cancelOnError});
    }
    static makeErrorHandler(controller) {
      return dart.fn((e, s) => {
        controller[_addError](e, s);
        controller[_close]();
      }, dart.dynamic, [dart.dynamic, core.StackTrace]);
    }
  }
  dart.setSignature(_AddStreamState, {
    constructors: () => ({_AddStreamState: [_AddStreamState$(T), [_EventSink$(T), Stream, core.bool]]}),
    statics: () => ({makeErrorHandler: [dart.dynamic, [_EventSink]]}),
    names: ['makeErrorHandler']
  });
  return _AddStreamState;
});
let _AddStreamState = _AddStreamState$();
// /* Incoming: state (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._pendingEvents (FieldElementImpl @ dart:async/stream_controller.dart), state (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._ensurePendingEvents (MethodElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._subscription (FieldElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController.addStream (MethodElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._close (MethodElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._subscribe (MethodElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._recordCancel (MethodElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._recordPause (MethodElementImpl @ dart:async/stream_controller.dart), addState (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._recordResume (MethodElementImpl @ dart:async/stream_controller.dart), _StreamControllerAddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart) */
const _StreamControllerAddStreamState$ = dart.generic(function(T) {
  class _StreamControllerAddStreamState extends _AddStreamState$(T) {
    _StreamControllerAddStreamState(controller, varData, source, cancelOnError) {
      this.varData = varData;
      super._AddStreamState(dart.as(controller, _EventSink$(T)), source, cancelOnError);
      if (dart.notNull(controller.isPaused)) {
        this.addSubscription.pause();
      }
    }
  }
  dart.setSignature(_StreamControllerAddStreamState, {
    constructors: () => ({_StreamControllerAddStreamState: [_StreamControllerAddStreamState$(T), [_StreamController, dart.dynamic, Stream, core.bool]]})
  });
  return _StreamControllerAddStreamState;
});
let _StreamControllerAddStreamState = _StreamControllerAddStreamState$();
// /* Incoming: _BroadcastSubscription (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), eventSink (LocalVariableElementImpl @ dart:async/stream.dart), addError (LocalVariableElementImpl @ dart:async/stream.dart), eventSink (LocalVariableElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), eventSink (LocalVariableElementImpl @ dart:async/stream.dart), onError (FunctionElementImpl @ dart:async/stream.dart), _StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription (ClassElementImpl @ dart:async/stream_controller.dart), _AddStreamState. (ConstructorElementImpl @ dart:async/stream_controller.dart), _AddStreamState.makeErrorHandler (MethodElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription (ClassElementImpl @ dart:async/stream_impl.dart), _ForwardingStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _ForwardingStream._handleError (MethodElementImpl @ dart:async/stream_pipe.dart), _ForwardingStream._handleDone (MethodElementImpl @ dart:async/stream_pipe.dart), _ForwardingStreamSubscription (ClassElementImpl @ dart:async/stream_pipe.dart), _addErrorWithReplacement (FunctionElementImpl @ dart:async/stream_pipe.dart), _WhereStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _MapStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _ExpandStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _HandleErrorStream._handleError (MethodElementImpl @ dart:async/stream_pipe.dart), _TakeStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _TakeWhileStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _SkipStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _SkipWhileStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _DistinctStream._handleData (MethodElementImpl @ dart:async/stream_pipe.dart), _EventSinkWrapper._sink (FieldElementImpl @ dart:async/stream_transformers.dart), _EventSinkWrapper. (ConstructorElementImpl @ dart:async/stream_transformers.dart), _EventSinkWrapper.add (MethodElementImpl @ dart:async/stream_transformers.dart), _EventSinkWrapper.addError (MethodElementImpl @ dart:async/stream_transformers.dart), _EventSinkWrapper.close (MethodElementImpl @ dart:async/stream_transformers.dart), _SinkTransformerStreamSubscription (ClassElementImpl @ dart:async/stream_transformers.dart) */
const _EventSink$ = dart.generic(function(T) {
  class _EventSink extends core.Object {}
  return _EventSink;
});
let _EventSink = _EventSink$();
// /* Incoming: _BroadcastSubscription (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _SyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsyncBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController (ClassElementImpl @ dart:async/broadcast_stream_controller.dart), _StreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch (ClassElementImpl @ dart:async/stream_controller.dart), _AsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _SyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackAsyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _NoCallbackSyncStreamController (ClassElementImpl @ dart:async/stream_controller.dart), _ControllerSubscription (ClassElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription (ClassElementImpl @ dart:async/stream_impl.dart), _IterablePendingEvents.handleNext (MethodElementImpl @ dart:async/stream_impl.dart), _DelayedEvent.perform (MethodElementImpl @ dart:async/stream_impl.dart), _DelayedData.perform (MethodElementImpl @ dart:async/stream_impl.dart), _DelayedError.perform (MethodElementImpl @ dart:async/stream_impl.dart), _DelayedDone.perform (MethodElementImpl @ dart:async/stream_impl.dart), _PendingEvents.schedule (MethodElementImpl @ dart:async/stream_impl.dart), _PendingEvents.handleNext (MethodElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents.handleNext (MethodElementImpl @ dart:async/stream_impl.dart), _ForwardingStreamSubscription (ClassElementImpl @ dart:async/stream_pipe.dart), _SinkTransformerStreamSubscription (ClassElementImpl @ dart:async/stream_transformers.dart) */
const _EventDispatch$ = dart.generic(function(T) {
  class _EventDispatch extends core.Object {}
  return _EventDispatch;
});
let _EventDispatch = _EventDispatch$();
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
// /* Incoming: _AsBroadcastStreamController._addPendingEvent (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _BufferingStreamSubscription._addPending (MethodElementImpl @ dart:async/stream_impl.dart), _DelayedEvent.next (FieldElementImpl @ dart:async/stream_impl.dart), _DelayedData (ClassElementImpl @ dart:async/stream_impl.dart), _DelayedError (ClassElementImpl @ dart:async/stream_impl.dart), _DelayedDone (ClassElementImpl @ dart:async/stream_impl.dart), _DelayedDone.next (FieldElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents.firstPendingEvent (FieldElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents.lastPendingEvent (FieldElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents.isEmpty (FieldElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents.add (MethodElementImpl @ dart:async/stream_impl.dart), event (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents.handleNext (MethodElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents.clear (MethodElementImpl @ dart:async/stream_impl.dart) */
const _DelayedEvent$ = dart.generic(function(T) {
  class _DelayedEvent extends core.Object {
    _DelayedEvent() {
      this.next = null;
    }
  }
  return _DelayedEvent;
});
let _DelayedEvent = _DelayedEvent$();
// /* Incoming: _AsyncBroadcastStreamController._sendData (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.add (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _StreamController._add (MethodElementImpl @ dart:async/stream_controller.dart), _AsyncStreamControllerDispatch._sendData (MethodElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription._add (MethodElementImpl @ dart:async/stream_impl.dart), _DelayedData. (ConstructorElementImpl @ dart:async/stream_impl.dart) */
const _DelayedData$ = dart.generic(function(T) {
  class _DelayedData extends _DelayedEvent$(T) {
    _DelayedData(value) {
      this.value = value;
      super._DelayedEvent();
    }
  }
  dart.setSignature(_DelayedData, {
    constructors: () => ({_DelayedData: [_DelayedData$(T), [T]]})
  });
  return _DelayedData;
});
let _DelayedData = _DelayedData$();
// /* Incoming: _StreamController._pendingEvents (FieldElementImpl @ dart:async/stream_controller.dart), pendingEvents (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController._subscribe (MethodElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription._pending (FieldElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._setPendingEvents (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._extractPending (MethodElementImpl @ dart:async/stream_impl.dart), events (LocalVariableElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.pause (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.resume (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._mayResumeInput (FieldElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._cancel (MethodElementImpl @ dart:async/stream_impl.dart), pending (LocalVariableElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._addPending (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._checkState (MethodElementImpl @ dart:async/stream_impl.dart), _EventGenerator (FunctionTypeAliasElementImpl @ dart:async/stream_impl.dart), _GeneratedStreamImpl._createSubscription (MethodElementImpl @ dart:async/stream_impl.dart), _IterablePendingEvents (ClassElementImpl @ dart:async/stream_impl.dart), _StreamImplEvents (ClassElementImpl @ dart:async/stream_impl.dart) */
class _PendingEvents extends core.Object {
  _PendingEvents() {
    this[_state] = _PendingEvents._STATE_UNSCHEDULED;
  }
  get isScheduled() {
    return this[_state] == _PendingEvents._STATE_SCHEDULED;
  }
  cancelSchedule() {
    if (dart.notNull(this.isScheduled)) this[_state] = _PendingEvents._STATE_CANCELED;
  }
}
dart.setSignature(_PendingEvents, {
  methods: () => ({cancelSchedule: [dart.void, []]})
});
_PendingEvents._STATE_UNSCHEDULED = 0;
_PendingEvents._STATE_SCHEDULED = 1;
_PendingEvents._STATE_CANCELED = 3;
// /* Incoming: _AsBroadcastStreamController._pending (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController._hasPending (FieldElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController._addPendingEvent (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.add (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController.addError (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _AsBroadcastStreamController._callOnCancel (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), _StreamController._ensurePendingEvents (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._closeUnchecked (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._add (MethodElementImpl @ dart:async/stream_controller.dart), _StreamController._addError (MethodElementImpl @ dart:async/stream_controller.dart), pending (LocalVariableElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._addPending (MethodElementImpl @ dart:async/stream_impl.dart) */
class _StreamImplEvents extends _PendingEvents {
  _StreamImplEvents() {
    this.firstPendingEvent = null;
    this.lastPendingEvent = null;
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
  handleNext(dispatch) {
    dart.assert(!dart.notNull(this.isScheduled));
    let event = this.firstPendingEvent;
    this.firstPendingEvent = event.next;
    if (this.firstPendingEvent == null) {
      this.lastPendingEvent = null;
    }
    event.perform(dispatch);
  }
  clear() {
    if (dart.notNull(this.isScheduled)) this.cancelSchedule();
    this.firstPendingEvent = this.lastPendingEvent = null;
  }
}
dart.setSignature(_StreamImplEvents, {
  methods: () => ({
    add: [dart.void, [_DelayedEvent]],
    handleNext: [dart.void, [_EventDispatch]],
    clear: [dart.void, []]
  })
});
const _broadcastCallback = dart.typedef('_broadcastCallback', () => dart.functionType(dart.void, [StreamSubscription]));
const __CastType18$ = dart.generic(function(T) {
  const __CastType18 = dart.typedef('__CastType18', () => dart.functionType(dart.void, [T]));
  return __CastType18;
});
let __CastType18 = __CastType18$();
const __CastType20 = dart.typedef('__CastType20', () => dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
const __CastType23 = dart.typedef('__CastType23', () => dart.functionType(dart.dynamic, [dart.dynamic]));
function _runUserCode(userCode, onSuccess, onError) {
  try {
    dart.dcall(onSuccess, userCode());
  } catch (e) {
    let s = dart.stackTrace(e);
    let replacement = Zone.current.errorCallback(e, s);
    if (replacement == null) {
      dart.dcall(onError, e, s);
    } else {
      let error = _nonNullError(replacement.error);
      let stackTrace = replacement.stackTrace;
      dart.dcall(onError, error, stackTrace);
    }
  }

}
dart.fn(_runUserCode, dart.dynamic, [dart.functionType(dart.dynamic, []), dart.functionType(dart.dynamic, [dart.dynamic]), dart.functionType(dart.dynamic, [dart.dynamic, core.StackTrace])]);
function _cancelAndError(subscription, future, error, stackTrace) {
  let cancelFuture = subscription.cancel();
  if (dart.is(cancelFuture, Future)) {
    cancelFuture.whenComplete(dart.fn(() => future[_completeError](error, stackTrace), dart.void, []));
  } else {
    future[_completeError](error, stackTrace);
  }
}
dart.fn(_cancelAndError, dart.void, [StreamSubscription, _Future, dart.dynamic, core.StackTrace]);
function _cancelAndErrorClosure(subscription, future) {
  return dart.fn((error, stackTrace) => _cancelAndError(subscription, future, error, stackTrace), dart.void, [dart.dynamic, core.StackTrace]);
}
dart.fn(_cancelAndErrorClosure, dart.dynamic, [StreamSubscription, _Future]);
function _cancelAndValue(subscription, future, value) {
  let cancelFuture = subscription.cancel();
  if (dart.is(cancelFuture, Future)) {
    cancelFuture.whenComplete(dart.fn(() => future[_complete](value), dart.void, []));
  } else {
    future[_complete](value);
  }
}
dart.fn(_cancelAndValue, dart.void, [StreamSubscription, _Future, dart.dynamic]);
const _Predicate$ = dart.generic(function(T) {
  const _Predicate = dart.typedef('_Predicate', () => dart.functionType(core.bool, [T]));
  return _Predicate;
});
let _Predicate = _Predicate$();
const _Transformation$ = dart.generic(function(S, T) {
  const _Transformation = dart.typedef('_Transformation', () => dart.functionType(T, [S]));
  return _Transformation;
});
let _Transformation = _Transformation$();
const _ErrorTest = dart.typedef('_ErrorTest', () => dart.functionType(core.bool, [dart.dynamic]));
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
const _SubscriptionTransformer$ = dart.generic(function(S, T) {
  const _SubscriptionTransformer = dart.typedef('_SubscriptionTransformer', () => dart.functionType(StreamSubscription$(T), [Stream$(S), core.bool]));
  return _SubscriptionTransformer;
});
let _SubscriptionTransformer = _SubscriptionTransformer$();
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
// /* Incoming: next (FunctionElementImpl @ dart:_isolate_helper), TimerImpl (ClassElementImpl @ dart:_isolate_helper), TimerImpl.periodic (ConstructorElementImpl @ dart:_isolate_helper), Future. (ConstructorElementImpl @ dart:async/future.dart), Future.delayed (ConstructorElementImpl @ dart:async/future.dart), timer (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future.timeout (MethodElementImpl @ dart:async/future_impl.dart), _AsyncRun._scheduleImmediateWithTimer (MethodElementImpl @ dart:async/schedule_microtask.dart), timer (LocalVariableElementImpl @ dart:async/stream.dart), startPeriodicTimer (FunctionElementImpl @ dart:async/stream.dart), Stream.periodic (ConstructorElementImpl @ dart:async/stream.dart), timer (LocalVariableElementImpl @ dart:async/stream.dart), onData (FunctionElementImpl @ dart:async/stream.dart), onError (FunctionElementImpl @ dart:async/stream.dart), onDone (FunctionElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), onCancel (FunctionElementImpl @ dart:async/stream.dart), Stream.timeout (MethodElementImpl @ dart:async/stream.dart), Timer. (ConstructorElementImpl @ dart:async/timer.dart), Timer.periodic (ConstructorElementImpl @ dart:async/timer.dart), Timer.run (MethodElementImpl @ dart:async/timer.dart), Timer._createTimer (MethodElementImpl @ dart:async/timer.dart), Timer._createPeriodicTimer (MethodElementImpl @ dart:async/timer.dart), CreateTimerHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), CreatePeriodicTimerHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ZoneSpecification. (ConstructorElementImpl @ dart:async/zone.dart), ZoneSpecification.from (ConstructorElementImpl @ dart:async/zone.dart), ZoneDelegate.createTimer (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), Zone.createTimer (MethodElementImpl @ dart:async/zone.dart), Zone.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.createTimer (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), _CustomZone.createTimer (MethodElementImpl @ dart:async/zone.dart), _CustomZone.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), _rootCreateTimer (FunctionElementImpl @ dart:async/zone.dart), _rootCreatePeriodicTimer (FunctionElementImpl @ dart:async/zone.dart), _RootZone.createTimer (MethodElementImpl @ dart:async/zone.dart), _RootZone.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart) */
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
// /* Incoming: _UncaughtAsyncError (ClassElementImpl @ dart:async/async_error.dart), replacement (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), _BroadcastStreamController.addError (MethodElementImpl @ dart:async/broadcast_stream_controller.dart), replacement (LocalVariableElementImpl @ dart:async/future.dart), Future.error (ConstructorElementImpl @ dart:async/future.dart), replacement (LocalVariableElementImpl @ dart:async/future.dart), _completeWithErrorCallback (FunctionElementImpl @ dart:async/future.dart), replacement (LocalVariableElementImpl @ dart:async/future_impl.dart), _Completer.completeError (MethodElementImpl @ dart:async/future_impl.dart), _Future._error (FieldElementImpl @ dart:async/future_impl.dart), _Future._setErrorObject (MethodElementImpl @ dart:async/future_impl.dart), _Future._setError (MethodElementImpl @ dart:async/future_impl.dart), asyncError (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future._propagateToListeners (MethodElementImpl @ dart:async/future_impl.dart), asyncError (LocalVariableElementImpl @ dart:async/future_impl.dart), handleValueCallback (FunctionElementImpl @ dart:async/future_impl.dart), asyncError (LocalVariableElementImpl @ dart:async/future_impl.dart), handleError (FunctionElementImpl @ dart:async/future_impl.dart), handleWhenCompleteCallback (FunctionElementImpl @ dart:async/future_impl.dart), asyncError (LocalVariableElementImpl @ dart:async/future_impl.dart), replacement (LocalVariableElementImpl @ dart:async/stream_controller.dart), _StreamController.addError (MethodElementImpl @ dart:async/stream_controller.dart), prefetch (LocalVariableElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl.moveNext (MethodElementImpl @ dart:async/stream_impl.dart), _StreamIteratorImpl._onError (MethodElementImpl @ dart:async/stream_impl.dart), replacement (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _runUserCode (FunctionElementImpl @ dart:async/stream_pipe.dart), error (LocalVariableElementImpl @ dart:async/stream_pipe.dart), stackTrace (LocalVariableElementImpl @ dart:async/stream_pipe.dart), replacement (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _cancelAndErrorWithReplacement (FunctionElementImpl @ dart:async/stream_pipe.dart), replacement (LocalVariableElementImpl @ dart:async/stream_pipe.dart), _addErrorWithReplacement (FunctionElementImpl @ dart:async/stream_pipe.dart), ErrorCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), AsyncError. (ConstructorElementImpl @ dart:async/zone.dart), ZoneSpecification. (ConstructorElementImpl @ dart:async/zone.dart), ZoneSpecification.from (ConstructorElementImpl @ dart:async/zone.dart), ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), Zone.errorCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), _CustomZone.errorCallback (MethodElementImpl @ dart:async/zone.dart), _rootErrorCallback (FunctionElementImpl @ dart:async/zone.dart), _RootZone.errorCallback (MethodElementImpl @ dart:async/zone.dart) */
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
// /* Incoming: _ZoneFunction. (ConstructorElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.run (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.runUnary (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.runBinary (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.createTimer (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.print (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.fork (MethodElementImpl @ dart:async/zone.dart), _Zone._runUnary (FieldElementImpl @ dart:async/zone.dart), _Zone._run (FieldElementImpl @ dart:async/zone.dart), _Zone._runBinary (FieldElementImpl @ dart:async/zone.dart), _Zone._registerCallback (FieldElementImpl @ dart:async/zone.dart), _Zone._registerUnaryCallback (FieldElementImpl @ dart:async/zone.dart), _Zone._registerBinaryCallback (FieldElementImpl @ dart:async/zone.dart), _Zone._errorCallback (FieldElementImpl @ dart:async/zone.dart), _Zone._scheduleMicrotask (FieldElementImpl @ dart:async/zone.dart), _Zone._createTimer (FieldElementImpl @ dart:async/zone.dart), _Zone._createPeriodicTimer (FieldElementImpl @ dart:async/zone.dart), _Zone._print (FieldElementImpl @ dart:async/zone.dart), _Zone._fork (FieldElementImpl @ dart:async/zone.dart), _Zone._handleUncaughtError (FieldElementImpl @ dart:async/zone.dart), _CustomZone._runUnary (FieldElementImpl @ dart:async/zone.dart), _CustomZone._run (FieldElementImpl @ dart:async/zone.dart), _CustomZone._runBinary (FieldElementImpl @ dart:async/zone.dart), _CustomZone._registerCallback (FieldElementImpl @ dart:async/zone.dart), _CustomZone._registerUnaryCallback (FieldElementImpl @ dart:async/zone.dart), _CustomZone._registerBinaryCallback (FieldElementImpl @ dart:async/zone.dart), _CustomZone._errorCallback (FieldElementImpl @ dart:async/zone.dart), _CustomZone._scheduleMicrotask (FieldElementImpl @ dart:async/zone.dart), _CustomZone._createTimer (FieldElementImpl @ dart:async/zone.dart), _CustomZone._createPeriodicTimer (FieldElementImpl @ dart:async/zone.dart), _CustomZone._print (FieldElementImpl @ dart:async/zone.dart), _CustomZone._fork (FieldElementImpl @ dart:async/zone.dart), _CustomZone._handleUncaughtError (FieldElementImpl @ dart:async/zone.dart), _CustomZone. (ConstructorElementImpl @ dart:async/zone.dart), _CustomZone.errorZone (FieldElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.fork (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.run (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runUnary (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runBinary (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.errorCallback (MethodElementImpl @ dart:async/zone.dart), implementationZone (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createTimer (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.print (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _RootZone._run (FieldElementImpl @ dart:async/zone.dart), _RootZone._runUnary (FieldElementImpl @ dart:async/zone.dart), _RootZone._runBinary (FieldElementImpl @ dart:async/zone.dart), _RootZone._registerCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._registerUnaryCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._registerBinaryCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._errorCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._scheduleMicrotask (FieldElementImpl @ dart:async/zone.dart), _RootZone._createTimer (FieldElementImpl @ dart:async/zone.dart), _RootZone._createPeriodicTimer (FieldElementImpl @ dart:async/zone.dart), _RootZone._print (FieldElementImpl @ dart:async/zone.dart), _RootZone._fork (FieldElementImpl @ dart:async/zone.dart), _RootZone._handleUncaughtError (FieldElementImpl @ dart:async/zone.dart) */
class _ZoneFunction extends core.Object {
  _ZoneFunction(zone, func) {
    this.zone = zone;
    this.function = func;
  }
}
dart.setSignature(_ZoneFunction, {
  constructors: () => ({_ZoneFunction: [_ZoneFunction, [_Zone, core.Function]]})
});
// /* Incoming: ForkHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ZoneSpecification. (ConstructorElementImpl @ dart:async/zone.dart), ZoneSpecification.from (ConstructorElementImpl @ dart:async/zone.dart), _ZoneSpecification (ClassElementImpl @ dart:async/zone.dart), ZoneDelegate.fork (MethodElementImpl @ dart:async/zone.dart), Zone.fork (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.fork (MethodElementImpl @ dart:async/zone.dart), _CustomZone. (ConstructorElementImpl @ dart:async/zone.dart), _CustomZone.fork (MethodElementImpl @ dart:async/zone.dart), _rootFork (FunctionElementImpl @ dart:async/zone.dart), _RootZoneSpecification (ClassElementImpl @ dart:async/zone.dart), _RootZone.fork (MethodElementImpl @ dart:async/zone.dart), runZoned (FunctionElementImpl @ dart:async/zone.dart), zone (LocalVariableElementImpl @ dart:async/zone.dart) */
class ZoneSpecification extends core.Object {
  static new(opts) {
    return new _ZoneSpecification(opts);
  }
}
dart.setSignature(ZoneSpecification, {
  constructors: () => ({new: [ZoneSpecification, [], {handleUncaughtError: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.dynamic, core.StackTrace]), run: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]), runUnary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic]), dart.dynamic]), runBinary: dart.functionType(dart.dynamic, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), dart.dynamic, dart.dynamic]), registerCallback: dart.functionType(ZoneCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]), registerUnaryCallback: dart.functionType(ZoneUnaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic])]), registerBinaryCallback: dart.functionType(ZoneBinaryCallback, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]), errorCallback: dart.functionType(AsyncError, [Zone, ZoneDelegate, Zone, core.Object, core.StackTrace]), scheduleMicrotask: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]), createTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [])]), createPeriodicTimer: dart.functionType(Timer, [Zone, ZoneDelegate, Zone, core.Duration, dart.functionType(dart.void, [Timer])]), print: dart.functionType(dart.void, [Zone, ZoneDelegate, Zone, core.String]), fork: dart.functionType(Zone, [Zone, ZoneDelegate, Zone, ZoneSpecification, core.Map])}]})
});
// /* Incoming: ZoneSpecification. (ConstructorElementImpl @ dart:async/zone.dart), _ZoneSpecification. (ConstructorElementImpl @ dart:async/zone.dart), _rootFork (FunctionElementImpl @ dart:async/zone.dart) */
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
// /* Incoming: HandleUncaughtErrorHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RunHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RunUnaryHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RunBinaryHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RegisterCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RegisterUnaryCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RegisterBinaryCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ErrorCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ScheduleMicrotaskHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), CreateTimerHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), CreatePeriodicTimerHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), PrintHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ForkHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ZoneSpecification. (ConstructorElementImpl @ dart:async/zone.dart), ZoneSpecification.from (ConstructorElementImpl @ dart:async/zone.dart), _parentDelegate (FunctionElementImpl @ dart:async/zone.dart), _ZoneDelegate (ClassElementImpl @ dart:async/zone.dart), _ZoneDelegate.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.run (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.runUnary (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.runBinary (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.createTimer (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.print (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.fork (MethodElementImpl @ dart:async/zone.dart), _Zone._delegate (FieldElementImpl @ dart:async/zone.dart), _CustomZone._delegateCache (FieldElementImpl @ dart:async/zone.dart), _CustomZone._delegate (FieldElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.fork (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.run (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runUnary (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runBinary (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.errorCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createTimer (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.print (MethodElementImpl @ dart:async/zone.dart), _rootHandleUncaughtError (FunctionElementImpl @ dart:async/zone.dart), _rootRun (FunctionElementImpl @ dart:async/zone.dart), _rootRunUnary (FunctionElementImpl @ dart:async/zone.dart), _rootRunBinary (FunctionElementImpl @ dart:async/zone.dart), _rootRegisterCallback (FunctionElementImpl @ dart:async/zone.dart), _rootRegisterUnaryCallback (FunctionElementImpl @ dart:async/zone.dart), _rootRegisterBinaryCallback (FunctionElementImpl @ dart:async/zone.dart), _rootErrorCallback (FunctionElementImpl @ dart:async/zone.dart), _rootScheduleMicrotask (FunctionElementImpl @ dart:async/zone.dart), _rootCreateTimer (FunctionElementImpl @ dart:async/zone.dart), _rootCreatePeriodicTimer (FunctionElementImpl @ dart:async/zone.dart), _rootPrint (FunctionElementImpl @ dart:async/zone.dart), _rootFork (FunctionElementImpl @ dart:async/zone.dart), _RootZone._rootDelegate (FieldElementImpl @ dart:async/zone.dart), _RootZone._delegate (FieldElementImpl @ dart:async/zone.dart), runZoned (FunctionElementImpl @ dart:async/zone.dart) */
class ZoneDelegate extends core.Object {}
// /* Incoming: _registerErrorHandler (FunctionElementImpl @ dart:async/async_error.dart), replacement (LocalVariableElementImpl @ dart:async/broadcast_stream_controller.dart), Future.error (ConstructorElementImpl @ dart:async/future.dart), replacement (LocalVariableElementImpl @ dart:async/future.dart), Future.doWhile (MethodElementImpl @ dart:async/future.dart), replacement (LocalVariableElementImpl @ dart:async/future.dart), replacement (LocalVariableElementImpl @ dart:async/future_impl.dart), _FutureListener._zone (FieldElementImpl @ dart:async/future_impl.dart), _Future._zone (ConstFieldElementImpl @ dart:async/future_impl.dart), _Future.then (MethodElementImpl @ dart:async/future_impl.dart), _Future.catchError (MethodElementImpl @ dart:async/future_impl.dart), _Future.whenComplete (MethodElementImpl @ dart:async/future_impl.dart), _Future._addListener (MethodElementImpl @ dart:async/future_impl.dart), _Future._asyncComplete (MethodElementImpl @ dart:async/future_impl.dart), _Future._asyncCompleteError (MethodElementImpl @ dart:async/future_impl.dart), _Future._propagateToListeners (MethodElementImpl @ dart:async/future_impl.dart), zone (LocalVariableElementImpl @ dart:async/future_impl.dart), oldZone (LocalVariableElementImpl @ dart:async/future_impl.dart), handleValueCallback (FunctionElementImpl @ dart:async/future_impl.dart), handleError (FunctionElementImpl @ dart:async/future_impl.dart), handleWhenCompleteCallback (FunctionElementImpl @ dart:async/future_impl.dart), zone (LocalVariableElementImpl @ dart:async/future_impl.dart), _Future.timeout (MethodElementImpl @ dart:async/future_impl.dart), scheduleMicrotask (FunctionElementImpl @ dart:async/schedule_microtask.dart), zone (LocalVariableElementImpl @ dart:async/stream.dart), onData (FunctionElementImpl @ dart:async/stream.dart), onError (FunctionElementImpl @ dart:async/stream.dart), onListen (FunctionElementImpl @ dart:async/stream.dart), Stream.timeout (MethodElementImpl @ dart:async/stream.dart), replacement (LocalVariableElementImpl @ dart:async/stream_controller.dart), _runGuarded (FunctionElementImpl @ dart:async/stream_controller.dart), _BufferingStreamSubscription._zone (ConstFieldElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.onData (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.onError (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription.onDone (MethodElementImpl @ dart:async/stream_impl.dart), _BufferingStreamSubscription._sendData (MethodElementImpl @ dart:async/stream_impl.dart), sendError (FunctionElementImpl @ dart:async/stream_impl.dart), sendDone (FunctionElementImpl @ dart:async/stream_impl.dart), _nullErrorHandler (FunctionElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription._zone (FieldElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription. (ConstructorElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription._schedule (MethodElementImpl @ dart:async/stream_impl.dart), _DoneStreamSubscription._sendDone (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._zone (FieldElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream. (ConstructorElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._onCancel (MethodElementImpl @ dart:async/stream_impl.dart), _AsBroadcastStream._onListen (MethodElementImpl @ dart:async/stream_impl.dart), replacement (LocalVariableElementImpl @ dart:async/stream_pipe.dart), replacement (LocalVariableElementImpl @ dart:async/stream_pipe.dart), replacement (LocalVariableElementImpl @ dart:async/stream_pipe.dart), Timer. (ConstructorElementImpl @ dart:async/timer.dart), Timer.periodic (ConstructorElementImpl @ dart:async/timer.dart), HandleUncaughtErrorHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RunHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RunUnaryHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RunBinaryHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RegisterCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RegisterUnaryCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), RegisterBinaryCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ErrorCallbackHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ScheduleMicrotaskHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), CreateTimerHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), CreatePeriodicTimerHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), PrintHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ForkHandler (FunctionTypeAliasElementImpl @ dart:async/zone.dart), ZoneSpecification. (ConstructorElementImpl @ dart:async/zone.dart), ZoneSpecification.from (ConstructorElementImpl @ dart:async/zone.dart), ZoneDelegate.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.run (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.runUnary (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.runBinary (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.registerCallback (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.createTimer (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.print (MethodElementImpl @ dart:async/zone.dart), ZoneDelegate.fork (MethodElementImpl @ dart:async/zone.dart), Zone._ (ConstructorElementImpl @ dart:async/zone.dart), Zone.ROOT (ConstFieldElementImpl @ dart:async/zone.dart), Zone._current (FieldElementImpl @ dart:async/zone.dart), Zone.current (FieldElementImpl @ dart:async/zone.dart), Zone.parent (FieldElementImpl @ dart:async/zone.dart), Zone.errorZone (FieldElementImpl @ dart:async/zone.dart), Zone.inSameErrorZone (MethodElementImpl @ dart:async/zone.dart), Zone.fork (MethodElementImpl @ dart:async/zone.dart), Zone._enter (MethodElementImpl @ dart:async/zone.dart), previous (LocalVariableElementImpl @ dart:async/zone.dart), Zone._leave (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.run (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.runUnary (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.runBinary (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.createTimer (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.print (MethodElementImpl @ dart:async/zone.dart), _ZoneDelegate.fork (MethodElementImpl @ dart:async/zone.dart), _Zone (ClassElementImpl @ dart:async/zone.dart), _Zone.inSameErrorZone (MethodElementImpl @ dart:async/zone.dart), _CustomZone (ClassElementImpl @ dart:async/zone.dart), _CustomZone.errorZone (FieldElementImpl @ dart:async/zone.dart), _CustomZone.fork (MethodElementImpl @ dart:async/zone.dart), implementationZone (LocalVariableElementImpl @ dart:async/zone.dart), _rootHandleUncaughtError (FunctionElementImpl @ dart:async/zone.dart), _rootRun (FunctionElementImpl @ dart:async/zone.dart), old (LocalVariableElementImpl @ dart:async/zone.dart), _rootRunUnary (FunctionElementImpl @ dart:async/zone.dart), old (LocalVariableElementImpl @ dart:async/zone.dart), _rootRunBinary (FunctionElementImpl @ dart:async/zone.dart), old (LocalVariableElementImpl @ dart:async/zone.dart), _rootRegisterCallback (FunctionElementImpl @ dart:async/zone.dart), _rootRegisterUnaryCallback (FunctionElementImpl @ dart:async/zone.dart), _rootRegisterBinaryCallback (FunctionElementImpl @ dart:async/zone.dart), _rootErrorCallback (FunctionElementImpl @ dart:async/zone.dart), _rootScheduleMicrotask (FunctionElementImpl @ dart:async/zone.dart), hasErrorHandler (LocalVariableElementImpl @ dart:async/zone.dart), _rootCreateTimer (FunctionElementImpl @ dart:async/zone.dart), _rootCreatePeriodicTimer (FunctionElementImpl @ dart:async/zone.dart), _rootPrint (FunctionElementImpl @ dart:async/zone.dart), _printToZone (FunctionElementImpl @ dart:async/zone.dart), _rootFork (FunctionElementImpl @ dart:async/zone.dart), _RootZone (ClassElementImpl @ dart:async/zone.dart), _RootZone.errorZone (FieldElementImpl @ dart:async/zone.dart), _RootZone.runGuarded (MethodElementImpl @ dart:async/zone.dart), _RootZone.runUnaryGuarded (MethodElementImpl @ dart:async/zone.dart), _RootZone.runBinaryGuarded (MethodElementImpl @ dart:async/zone.dart), _RootZone.fork (MethodElementImpl @ dart:async/zone.dart), _RootZone.run (MethodElementImpl @ dart:async/zone.dart), _RootZone.runUnary (MethodElementImpl @ dart:async/zone.dart), _RootZone.runBinary (MethodElementImpl @ dart:async/zone.dart), runZoned (FunctionElementImpl @ dart:async/zone.dart), zone (LocalVariableElementImpl @ dart:async/zone.dart) */
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
// /* Incoming: _ZoneFunction.zone (FieldElementImpl @ dart:async/zone.dart), _ZoneFunction. (ConstructorElementImpl @ dart:async/zone.dart), _parentDelegate (FunctionElementImpl @ dart:async/zone.dart), _ZoneDelegate._delegationTarget (FieldElementImpl @ dart:async/zone.dart), _ZoneDelegate. (ConstructorElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.run (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.runUnary (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.runBinary (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.createTimer (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.print (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), implZone (LocalVariableElementImpl @ dart:async/zone.dart), _ZoneDelegate.fork (MethodElementImpl @ dart:async/zone.dart), _Zone. (ConstructorElementImpl @ dart:async/zone.dart), _Zone.parent (FieldElementImpl @ dart:async/zone.dart), _Zone.inSameErrorZone (MethodElementImpl @ dart:async/zone.dart), _CustomZone (ClassElementImpl @ dart:async/zone.dart), _CustomZone.parent (FieldElementImpl @ dart:async/zone.dart), _CustomZone. (ConstructorElementImpl @ dart:async/zone.dart), _CustomZone.errorZone (FieldElementImpl @ dart:async/zone.dart), _CustomZone.[] (MethodElementImpl @ dart:async/zone.dart), value (LocalVariableElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.fork (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.run (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runUnary (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runBinary (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), implementationZone (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.errorCallback (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createTimer (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), parentDelegate (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.print (MethodElementImpl @ dart:async/zone.dart), _rootFork (FunctionElementImpl @ dart:async/zone.dart), _RootZone (ClassElementImpl @ dart:async/zone.dart), _RootZone.parent (FieldElementImpl @ dart:async/zone.dart) */
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
const _map = Symbol('_map');
const _runUnary = Symbol('_runUnary');
const _run = Symbol('_run');
const _runBinary = Symbol('_runBinary');
const _registerCallback = Symbol('_registerCallback');
const _registerUnaryCallback = Symbol('_registerUnaryCallback');
const _registerBinaryCallback = Symbol('_registerBinaryCallback');
const _errorCallback = Symbol('_errorCallback');
const _scheduleMicrotask = Symbol('_scheduleMicrotask');
const _createTimer = Symbol('_createTimer');
const _createPeriodicTimer = Symbol('_createPeriodicTimer');
const _print = Symbol('_print');
const _fork = Symbol('_fork');
const _handleUncaughtError = Symbol('_handleUncaughtError');
// /* Incoming: _CustomZone._delegate (FieldElementImpl @ dart:async/zone.dart), _CustomZone. (ConstructorElementImpl @ dart:async/zone.dart), _CustomZone.bindCallback (MethodElementImpl @ dart:async/zone.dart), _CustomZone.bindUnaryCallback (MethodElementImpl @ dart:async/zone.dart), _CustomZone.bindBinaryCallback (MethodElementImpl @ dart:async/zone.dart), _CustomZone.[] (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.fork (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.run (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runUnary (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.runBinary (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerUnaryCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.registerBinaryCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.errorCallback (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createTimer (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.createPeriodicTimer (MethodElementImpl @ dart:async/zone.dart), implementation (LocalVariableElementImpl @ dart:async/zone.dart), _CustomZone.print (MethodElementImpl @ dart:async/zone.dart), _rootFork (FunctionElementImpl @ dart:async/zone.dart) */
class _CustomZone extends _Zone {
  _CustomZone(parent, specification, map) {
    this.parent = parent;
    this[_map] = map;
    this[_runUnary] = null;
    this[_run] = null;
    this[_runBinary] = null;
    this[_registerCallback] = null;
    this[_registerUnaryCallback] = null;
    this[_registerBinaryCallback] = null;
    this[_errorCallback] = null;
    this[_scheduleMicrotask] = null;
    this[_createTimer] = null;
    this[_createPeriodicTimer] = null;
    this[_print] = null;
    this[_fork] = null;
    this[_handleUncaughtError] = null;
    super._Zone();
    this[_run] = specification.run != null ? new _ZoneFunction(this, specification.run) : this.parent[_run];
    this[_runUnary] = specification.runUnary != null ? new _ZoneFunction(this, specification.runUnary) : this.parent[_runUnary];
    this[_runBinary] = specification.runBinary != null ? new _ZoneFunction(this, specification.runBinary) : this.parent[_runBinary];
    this[_registerCallback] = specification.registerCallback != null ? new _ZoneFunction(this, specification.registerCallback) : this.parent[_registerCallback];
    this[_registerUnaryCallback] = specification.registerUnaryCallback != null ? new _ZoneFunction(this, specification.registerUnaryCallback) : this.parent[_registerUnaryCallback];
    this[_registerBinaryCallback] = specification.registerBinaryCallback != null ? new _ZoneFunction(this, specification.registerBinaryCallback) : this.parent[_registerBinaryCallback];
    this[_errorCallback] = specification.errorCallback != null ? new _ZoneFunction(this, specification.errorCallback) : this.parent[_errorCallback];
    this[_scheduleMicrotask] = specification.scheduleMicrotask != null ? new _ZoneFunction(this, specification.scheduleMicrotask) : this.parent[_scheduleMicrotask];
    this[_createTimer] = specification.createTimer != null ? new _ZoneFunction(this, specification.createTimer) : this.parent[_createTimer];
    this[_createPeriodicTimer] = specification.createPeriodicTimer != null ? new _ZoneFunction(this, specification.createPeriodicTimer) : this.parent[_createPeriodicTimer];
    this[_print] = specification.print != null ? new _ZoneFunction(this, specification.print) : this.parent[_print];
    this[_fork] = specification.fork != null ? new _ZoneFunction(this, specification.fork) : this.parent[_fork];
    this[_handleUncaughtError] = specification.handleUncaughtError != null ? new _ZoneFunction(this, specification.handleUncaughtError) : this.parent[_handleUncaughtError];
  }
  get(key) {
    let result = this[_map].get(key);
    if (result != null || dart.notNull(this[_map].containsKey(key))) return result;
    if (this.parent != null) {
      let value = this.parent.get(key);
      if (value != null) {
        this[_map].set(key, value);
      }
      return value;
    }
    dart.assert(dart.equals(this, _ROOT_ZONE));
    return null;
  }
}
dart.setSignature(_CustomZone, {
  constructors: () => ({_CustomZone: [_CustomZone, [_Zone, ZoneSpecification, core.Map]]}),
  methods: () => ({get: [dart.dynamic, [core.Object]]})
});
function _rootScheduleMicrotask(self, parent, zone, f) {
  if (!dart.notNull(core.identical(_ROOT_ZONE, zone))) {
    let hasErrorHandler = !dart.notNull(_ROOT_ZONE.inSameErrorZone(zone));
    f = zone.bindCallback(f, {runGuarded: hasErrorHandler});
  }
  _scheduleAsyncCallback(f);
}
dart.fn(_rootScheduleMicrotask, dart.void, [Zone, ZoneDelegate, Zone, dart.functionType(dart.dynamic, [])]);
// /* Incoming: Future.error (ConstructorElementImpl @ dart:async/future.dart), _Future.then (MethodElementImpl @ dart:async/future_impl.dart), _Future.catchError (MethodElementImpl @ dart:async/future_impl.dart), _Future.whenComplete (MethodElementImpl @ dart:async/future_impl.dart), scheduleMicrotask (FunctionElementImpl @ dart:async/schedule_microtask.dart), Zone.ROOT (ConstFieldElementImpl @ dart:async/zone.dart), Zone._current (FieldElementImpl @ dart:async/zone.dart), _ZoneDelegate.errorCallback (MethodElementImpl @ dart:async/zone.dart), _CustomZone.[] (MethodElementImpl @ dart:async/zone.dart), _CustomZone.errorCallback (MethodElementImpl @ dart:async/zone.dart), _rootScheduleMicrotask (FunctionElementImpl @ dart:async/zone.dart), hasErrorHandler (LocalVariableElementImpl @ dart:async/zone.dart), _rootCreateTimer (FunctionElementImpl @ dart:async/zone.dart), _rootCreatePeriodicTimer (FunctionElementImpl @ dart:async/zone.dart), _RootZone. (ConstructorElementImpl @ dart:async/zone.dart), _RootZone._run (FieldElementImpl @ dart:async/zone.dart), _RootZone._runUnary (FieldElementImpl @ dart:async/zone.dart), _RootZone._runBinary (FieldElementImpl @ dart:async/zone.dart), _RootZone._registerCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._registerUnaryCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._registerBinaryCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._errorCallback (FieldElementImpl @ dart:async/zone.dart), _RootZone._scheduleMicrotask (FieldElementImpl @ dart:async/zone.dart), _RootZone._createTimer (FieldElementImpl @ dart:async/zone.dart), _RootZone._createPeriodicTimer (FieldElementImpl @ dart:async/zone.dart), _RootZone._print (FieldElementImpl @ dart:async/zone.dart), _RootZone._fork (FieldElementImpl @ dart:async/zone.dart), _RootZone._handleUncaughtError (FieldElementImpl @ dart:async/zone.dart), _RootZone._delegate (FieldElementImpl @ dart:async/zone.dart), _RootZone.errorZone (FieldElementImpl @ dart:async/zone.dart), _RootZone.runGuarded (MethodElementImpl @ dart:async/zone.dart), _RootZone.runUnaryGuarded (MethodElementImpl @ dart:async/zone.dart), _RootZone.runBinaryGuarded (MethodElementImpl @ dart:async/zone.dart), _RootZone.bindCallback (MethodElementImpl @ dart:async/zone.dart), _RootZone.bindUnaryCallback (MethodElementImpl @ dart:async/zone.dart), _RootZone.bindBinaryCallback (MethodElementImpl @ dart:async/zone.dart), _RootZone.handleUncaughtError (MethodElementImpl @ dart:async/zone.dart), _RootZone.fork (MethodElementImpl @ dart:async/zone.dart), _RootZone.run (MethodElementImpl @ dart:async/zone.dart), _RootZone.runUnary (MethodElementImpl @ dart:async/zone.dart), _RootZone.runBinary (MethodElementImpl @ dart:async/zone.dart), _RootZone.scheduleMicrotask (MethodElementImpl @ dart:async/zone.dart), _ROOT_ZONE (ConstTopLevelVariableElementImpl @ dart:async/zone.dart) */
class _RootZone extends _Zone {
  _RootZone() {
    super._Zone();
  }
  get(key) {
    return null;
  }
}
dart.setSignature(_RootZone, {
  constructors: () => ({_RootZone: [_RootZone, []]}),
  methods: () => ({get: [dart.dynamic, [core.Object]]})
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
