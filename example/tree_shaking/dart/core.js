dart_library.library('dart/core', null, /* Imports */[
  'dart/_runtime'
], /* Lazy imports */[
  'dart/_js_helper',
  'dart/_interceptors',
  'dart/_internal',
  'dart/collection'
], function(exports, dart, _js_helper, _interceptors, _internal, collection) {
  'use strict';
  let dartx = dart.dartx;
  class Object {
    constructor() {
      let name = this.constructor.name;
      let result = void 0;
      if (name in this) result = this[name](...arguments);
      return result === void 0 ? this : result;
    }
    get hashCode() {
      return _js_helper.Primitives.objectHashCode(this);
    }
    toString() {
      return _js_helper.Primitives.objectToString(this);
    }
  }
  dart.setSignature(Object, {
    constructors: () => ({Object: [Object, []]}),
    methods: () => ({toString: [String, []]})
  });
  dart.defineExtensionNames([
    'toString'
  ]);
  class bool extends Object {
    toString() {
      return this ? "true" : "false";
    }
  }
  const Comparator$ = dart.generic(function(T) {
    const Comparator = dart.typedef('Comparator', () => dart.functionType(int, [T, T]));
    return Comparator;
  });
  let Comparator = Comparator$();
  const Comparable$ = dart.generic(function(T) {
    class Comparable extends Object {
      static compare(a, b) {
        return a[dartx.compareTo](b);
      }
    }
    dart.setSignature(Comparable, {
      statics: () => ({compare: [int, [Comparable$(), Comparable$()]]}),
      names: ['compare']
    });
    return Comparable;
  });
  let Comparable = Comparable$();
  class DateTime extends Object {
    DateTime(year, month, day, hour, minute, second, millisecond) {
      if (month === void 0) month = 1;
      if (day === void 0) day = 1;
      if (hour === void 0) hour = 0;
      if (minute === void 0) minute = 0;
      if (second === void 0) second = 0;
      if (millisecond === void 0) millisecond = 0;
      this._internal(year, month, day, hour, minute, second, millisecond, false);
    }
    fromMillisecondsSinceEpoch(millisecondsSinceEpoch, {isUtc = false} = {}) {
      this.millisecondsSinceEpoch = millisecondsSinceEpoch;
      this.isUtc = isUtc;
      if (dart.notNull(millisecondsSinceEpoch[dartx.abs]()) > dart.notNull(DateTime._MAX_MILLISECONDS_SINCE_EPOCH)) {
        dart.throw(new ArgumentError(millisecondsSinceEpoch));
      }
      if (isUtc == null) dart.throw(new ArgumentError(isUtc));
    }
    isBefore(other) {
      return dart.notNull(this.millisecondsSinceEpoch) < dart.notNull(other.millisecondsSinceEpoch);
    }
    isAfter(other) {
      return dart.notNull(this.millisecondsSinceEpoch) > dart.notNull(other.millisecondsSinceEpoch);
    }
    isAtSameMomentAs(other) {
      return this.millisecondsSinceEpoch == other.millisecondsSinceEpoch;
    }
    compareTo(other) {
      return this.millisecondsSinceEpoch[dartx.compareTo](other.millisecondsSinceEpoch);
    }
    get hashCode() {
      return this.millisecondsSinceEpoch;
    }
    toLocal() {
      if (dart.notNull(this.isUtc)) {
        return new DateTime.fromMillisecondsSinceEpoch(this.millisecondsSinceEpoch, {isUtc: false});
      }
      return this;
    }
    toUtc() {
      if (dart.notNull(this.isUtc)) return this;
      return new DateTime.fromMillisecondsSinceEpoch(this.millisecondsSinceEpoch, {isUtc: true});
    }
    toString() {
      let y = DateTime._fourDigits(this.year);
      let m = DateTime._twoDigits(this.month);
      let d = DateTime._twoDigits(this.day);
      let h = DateTime._twoDigits(this.hour);
      let min = DateTime._twoDigits(this.minute);
      let sec = DateTime._twoDigits(this.second);
      let ms = DateTime._threeDigits(this.millisecond);
      if (dart.notNull(this.isUtc)) {
        return `${y}-${m}-${d} ${h}:${min}:${sec}.${ms}Z`;
      } else {
        return `${y}-${m}-${d} ${h}:${min}:${sec}.${ms}`;
      }
    }
    add(duration) {
      let ms = this.millisecondsSinceEpoch;
      return new DateTime.fromMillisecondsSinceEpoch(dart.notNull(ms) + dart.notNull(duration.inMilliseconds), {isUtc: this.isUtc});
    }
    subtract(duration) {
      let ms = this.millisecondsSinceEpoch;
      return new DateTime.fromMillisecondsSinceEpoch(dart.notNull(ms) - dart.notNull(duration.inMilliseconds), {isUtc: this.isUtc});
    }
    difference(other) {
      let ms = this.millisecondsSinceEpoch;
      let otherMs = other.millisecondsSinceEpoch;
      return new Duration({milliseconds: dart.notNull(ms) - dart.notNull(otherMs)});
    }
    _internal(year, month, day, hour, minute, second, millisecond, isUtc) {
      this.isUtc = typeof isUtc == 'boolean' ? isUtc : dart.throw(new ArgumentError(isUtc));
      this.millisecondsSinceEpoch = dart.as(_js_helper.checkInt(_js_helper.Primitives.valueFromDecomposedDate(year, month, day, hour, minute, second, millisecond, isUtc)), int);
    }
    get timeZoneName() {
      if (dart.notNull(this.isUtc)) return "UTC";
      return _js_helper.Primitives.getTimeZoneName(this);
    }
    get timeZoneOffset() {
      if (dart.notNull(this.isUtc)) return new Duration();
      return new Duration({minutes: _js_helper.Primitives.getTimeZoneOffsetInMinutes(this)});
    }
  }
  DateTime[dart.implements] = () => [Comparable];
  dart.defineNamedConstructor(DateTime, 'fromMillisecondsSinceEpoch');
  dart.defineNamedConstructor(DateTime, '_internal');
  dart.setSignature(DateTime, {
    constructors: () => ({
      DateTime: [DateTime, [int], [int, int, int, int, int, int]],
      fromMillisecondsSinceEpoch: [DateTime, [int], {isUtc: bool}],
      _internal: [DateTime, [int, int, int, int, int, int, int, bool]]
    }),
    methods: () => ({
      isBefore: [bool, [DateTime]],
      isAfter: [bool, [DateTime]],
      isAtSameMomentAs: [bool, [DateTime]],
      compareTo: [int, [DateTime]],
      toLocal: [DateTime, []],
      toUtc: [DateTime, []],
      add: [DateTime, [Duration]],
      subtract: [DateTime, [Duration]],
      difference: [Duration, [DateTime]]
    })
  });
  dart.defineExtensionMembers(DateTime, ['compareTo']);
  DateTime.MONDAY = 1;
  DateTime.FRIDAY = 5;
  DateTime.JANUARY = 1;
  DateTime.AUGUST = 8;
  DateTime._MAX_MILLISECONDS_SINCE_EPOCH = 8640000000000000;
  class num extends Object {}
  num[dart.implements] = () => [Comparable$(num)];
  class double extends num {}
  const _duration = dart.JsSymbol('_duration');
  class Duration extends Object {
    Duration({days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0} = {}) {
      this._microseconds(dart.notNull(days) * dart.notNull(Duration.MICROSECONDS_PER_DAY) + dart.notNull(hours) * dart.notNull(Duration.MICROSECONDS_PER_HOUR) + dart.notNull(minutes) * dart.notNull(Duration.MICROSECONDS_PER_MINUTE) + dart.notNull(seconds) * dart.notNull(Duration.MICROSECONDS_PER_SECOND) + dart.notNull(milliseconds) * dart.notNull(Duration.MICROSECONDS_PER_MILLISECOND) + dart.notNull(microseconds));
    }
    _microseconds(duration) {
      this[_duration] = duration;
    }
    get inDays() {
      return (dart.notNull(this[_duration]) / dart.notNull(Duration.MICROSECONDS_PER_DAY))[dartx.truncate]();
    }
    get inMilliseconds() {
      return (dart.notNull(this[_duration]) / dart.notNull(Duration.MICROSECONDS_PER_MILLISECOND))[dartx.truncate]();
    }
    get hashCode() {
      return dart.hashCode(this[_duration]);
    }
    compareTo(other) {
      return this[_duration][dartx.compareTo](other[_duration]);
    }
    toString() {
      function sixDigits(n) {
        if (dart.notNull(n) >= 100000) return `${n}`;
        if (dart.notNull(n) >= 10000) return `0${n}`;
        if (dart.notNull(n) >= 1000) return `00${n}`;
        if (dart.notNull(n) >= 100) return `000${n}`;
        if (dart.notNull(n) >= 10) return `0000${n}`;
        return `00000${n}`;
      }
      dart.fn(sixDigits, String, [int]);
      function twoDigits(n) {
        if (dart.notNull(n) >= 10) return `${n}`;
        return `0${n}`;
      }
      dart.fn(twoDigits, String, [int]);
      if (dart.notNull(this.inMicroseconds) < 0) {
        return `-${this['unary-']()}`;
      }
      let twoDigitMinutes = twoDigits(dart.asInt(this.inMinutes[dartx.remainder](Duration.MINUTES_PER_HOUR)));
      let twoDigitSeconds = twoDigits(dart.asInt(this.inSeconds[dartx.remainder](Duration.SECONDS_PER_MINUTE)));
      let sixDigitUs = sixDigits(dart.asInt(this.inMicroseconds[dartx.remainder](Duration.MICROSECONDS_PER_SECOND)));
      return `${this.inHours}:${twoDigitMinutes}:${twoDigitSeconds}.${sixDigitUs}`;
    }
    abs() {
      return new Duration._microseconds(this[_duration][dartx.abs]());
    }
  }
  Duration[dart.implements] = () => [Comparable$(Duration)];
  dart.defineNamedConstructor(Duration, '_microseconds');
  dart.setSignature(Duration, {
    constructors: () => ({
      Duration: [Duration, [], {days: int, hours: int, minutes: int, seconds: int, milliseconds: int, microseconds: int}],
      _microseconds: [Duration, [int]]
    }),
    methods: () => ({
      compareTo: [int, [Duration]],
      abs: [Duration, []]
    })
  });
  dart.defineExtensionMembers(Duration, ['compareTo']);
  Duration.MICROSECONDS_PER_MILLISECOND = 1000;
  Duration.MILLISECONDS_PER_SECOND = 1000;
  Duration.SECONDS_PER_MINUTE = 60;
  Duration.MINUTES_PER_HOUR = 60;
  Duration.HOURS_PER_DAY = 24;
  dart.defineLazyProperties(Duration, {
    get MICROSECONDS_PER_SECOND() {
      return dart.notNull(Duration.MICROSECONDS_PER_MILLISECOND) * dart.notNull(Duration.MILLISECONDS_PER_SECOND);
    },
    get MICROSECONDS_PER_MINUTE() {
      return dart.notNull(Duration.MICROSECONDS_PER_SECOND) * dart.notNull(Duration.SECONDS_PER_MINUTE);
    },
    get MICROSECONDS_PER_HOUR() {
      return dart.notNull(Duration.MICROSECONDS_PER_MINUTE) * dart.notNull(Duration.MINUTES_PER_HOUR);
    },
    get MICROSECONDS_PER_DAY() {
      return dart.notNull(Duration.MICROSECONDS_PER_HOUR) * dart.notNull(Duration.HOURS_PER_DAY);
    },
    get ZERO() {
      return dart.const(new Duration({seconds: 0}));
    }
  });
  class Error extends Object {
    Error() {
    }
    get stackTrace() {
      return _js_helper.Primitives.extractStackTrace(this);
    }
  }
  dart.setSignature(Error, {
    constructors: () => ({Error: [Error, []]})
  });
  class AssertionError extends Error {
    AssertionError() {
      super.Error();
    }
  }
  class CastError extends Error {
    CastError() {
      super.Error();
    }
  }
  class NullThrownError extends Error {
    NullThrownError() {
      super.Error();
    }
    toString() {
      return "Throw of null.";
    }
  }
  const _hasValue = dart.JsSymbol('_hasValue');
  class ArgumentError extends Error {
    ArgumentError(message) {
      if (message === void 0) message = null;
      this.message = message;
      this.invalidValue = null;
      this[_hasValue] = false;
      this.name = null;
      super.Error();
    }
    toString() {
      if (!dart.notNull(this[_hasValue])) {
        let result = "Invalid arguments(s)";
        if (this.message != null) {
          result = `${result}: ${this.message}`;
        }
        return result;
      }
      let nameString = "";
      if (this.name != null) {
        nameString = ` (${this.name})`;
      }
      return `${this.message}${nameString}: ${Error.safeToString(this.invalidValue)}`;
    }
  }
  dart.setSignature(ArgumentError, {
    constructors: () => ({ArgumentError: [ArgumentError, [], [dart.dynamic]]})
  });
  class RangeError extends ArgumentError {
    RangeError(message) {
      this.start = null;
      this.end = null;
      super.ArgumentError(message);
    }
    toString() {
      if (!dart.notNull(this[_hasValue])) return `RangeError: ${this.message}`;
      let value = Error.safeToString(this.invalidValue);
      let explanation = "";
      if (this.start == null) {
        if (this.end != null) {
          explanation = `: Not less than or equal to ${this.end}`;
        }
      } else if (this.end == null) {
        explanation = `: Not greater than or equal to ${this.start}`;
      } else if (dart.notNull(this.end) > dart.notNull(this.start)) {
        explanation = `: Not in range ${this.start}..${this.end}, inclusive.`;
      } else if (dart.notNull(this.end) < dart.notNull(this.start)) {
        explanation = ": Valid value range is empty";
      } else {
        explanation = `: Only valid value is ${this.start}`;
      }
      return `RangeError: ${this.message} (${value})${explanation}`;
    }
  }
  dart.setSignature(RangeError, {
    constructors: () => ({RangeError: [RangeError, [dart.dynamic]]})
  });
  const _receiver = dart.JsSymbol('_receiver');
  const _memberName = dart.JsSymbol('_memberName');
  const _arguments = dart.JsSymbol('_arguments');
  const _namedArguments = dart.JsSymbol('_namedArguments');
  const _existingArgumentNames = dart.JsSymbol('_existingArgumentNames');
  class NoSuchMethodError extends Error {
    NoSuchMethodError(receiver, memberName, positionalArguments, namedArguments, existingArgumentNames) {
      if (existingArgumentNames === void 0) existingArgumentNames = null;
      this[_receiver] = receiver;
      this[_memberName] = memberName;
      this[_arguments] = positionalArguments;
      this[_namedArguments] = namedArguments;
      this[_existingArgumentNames] = existingArgumentNames;
      super.Error();
    }
    toString() {
      let sb = new StringBuffer();
      let i = 0;
      if (this[_arguments] != null) {
        for (; i < dart.notNull(this[_arguments][dartx.length]); i++) {
          if (i > 0) {
            sb.write(", ");
          }
          sb.write(Error.safeToString(this[_arguments][dartx.get](i)));
        }
      }
      if (this[_namedArguments] != null) {
        this[_namedArguments].forEach(dart.fn((key, value) => {
          if (i > 0) {
            sb.write(", ");
          }
          sb.write(_symbolToString(key));
          sb.write(": ");
          sb.write(Error.safeToString(value));
          i++;
        }, dart.void, [Symbol, dart.dynamic]));
      }
      if (this[_existingArgumentNames] == null) {
        return `NoSuchMethodError : method not found: '${this[_memberName]}'\n` + `Receiver: ${Error.safeToString(this[_receiver])}\n` + `Arguments: [${sb}]`;
      } else {
        let actualParameters = dart.toString(sb);
        sb = new StringBuffer();
        for (let i = 0; i < dart.notNull(this[_existingArgumentNames][dartx.length]); i++) {
          if (i > 0) {
            sb.write(", ");
          }
          sb.write(this[_existingArgumentNames][dartx.get](i));
        }
        let formalParameters = dart.toString(sb);
        return "NoSuchMethodError: incorrect number of arguments passed to " + `method named '${this[_memberName]}'\n` + `Receiver: ${Error.safeToString(this[_receiver])}\n` + `Tried calling: ${this[_memberName]}(${actualParameters})\n` + `Found: ${this[_memberName]}(${formalParameters})`;
      }
    }
  }
  dart.setSignature(NoSuchMethodError, {
    constructors: () => ({NoSuchMethodError: [NoSuchMethodError, [Object, Symbol, List, Map$(Symbol, dart.dynamic)], [List]]})
  });
  class UnsupportedError extends Error {
    UnsupportedError(message) {
      this.message = message;
      super.Error();
    }
    toString() {
      return `Unsupported operation: ${this.message}`;
    }
  }
  dart.setSignature(UnsupportedError, {
    constructors: () => ({UnsupportedError: [UnsupportedError, [String]]})
  });
  class StateError extends Error {
    StateError(message) {
      this.message = message;
      super.Error();
    }
    toString() {
      return `Bad state: ${this.message}`;
    }
  }
  dart.setSignature(StateError, {
    constructors: () => ({StateError: [StateError, [String]]})
  });
  class ConcurrentModificationError extends Error {
    ConcurrentModificationError(modifiedObject) {
      if (modifiedObject === void 0) modifiedObject = null;
      this.modifiedObject = modifiedObject;
      super.Error();
    }
    toString() {
      if (this.modifiedObject == null) {
        return "Concurrent modification during iteration.";
      }
      return "Concurrent modification during iteration: " + `${Error.safeToString(this.modifiedObject)}.`;
    }
  }
  dart.setSignature(ConcurrentModificationError, {
    constructors: () => ({ConcurrentModificationError: [ConcurrentModificationError, [], [Object]]})
  });
  class Exception extends Object {
    static new(message) {
      if (message === void 0) message = null;
      return new _ExceptionImplementation(message);
    }
  }
  dart.setSignature(Exception, {
    constructors: () => ({new: [Exception, [], [dart.dynamic]]})
  });
  class _ExceptionImplementation extends Object {
    _ExceptionImplementation(message) {
      if (message === void 0) message = null;
      this.message = message;
    }
    toString() {
      if (this.message == null) return "Exception";
      return `Exception: ${this.message}`;
    }
  }
  _ExceptionImplementation[dart.implements] = () => [Exception];
  dart.setSignature(_ExceptionImplementation, {
    constructors: () => ({_ExceptionImplementation: [_ExceptionImplementation, [], [dart.dynamic]]})
  });
  class FormatException extends Object {
    FormatException(message, source, offset) {
      if (message === void 0) message = "";
      if (source === void 0) source = null;
      if (offset === void 0) offset = -1;
      this.message = message;
      this.source = source;
      this.offset = offset;
    }
    toString() {
      let report = "FormatException";
      if (this.message != null && "" != this.message) {
        report = `${report}: ${this.message}`;
      }
      let offset = this.offset;
      if (!(typeof this.source == 'string')) {
        if (offset != -1) {
          report = report + ` (at offset ${offset})`;
        }
        return report;
      }
      if (offset != -1 && (dart.notNull(offset) < 0 || dart.notNull(offset) > dart.notNull(dart.as(dart.dload(this.source, 'length'), num)))) {
        offset = -1;
      }
      if (offset == -1) {
        let source = dart.as(this.source, String);
        if (dart.notNull(source[dartx.length]) > 78) {
          source = dart.notNull(source[dartx.substring](0, 75)) + "...";
        }
        return `${report}\n${source}`;
      }
      let lineNum = 1;
      let lineStart = 0;
      let lastWasCR = null;
      for (let i = 0; i < dart.notNull(offset); i++) {
        let char = dart.as(dart.dsend(this.source, 'codeUnitAt', i), int);
        if (char == 10) {
          if (lineStart != i || !dart.notNull(lastWasCR)) {
            lineNum++;
          }
          lineStart = i + 1;
          lastWasCR = false;
        } else if (char == 13) {
          lineNum++;
          lineStart = i + 1;
          lastWasCR = true;
        }
      }
      if (lineNum > 1) {
        report = report + ` (at line ${lineNum}, character ${dart.notNull(offset) - lineStart + 1})\n`;
      } else {
        report = report + ` (at character ${dart.notNull(offset) + 1})\n`;
      }
      let lineEnd = dart.as(dart.dload(this.source, 'length'), int);
      for (let i = offset; dart.notNull(i) < dart.notNull(dart.as(dart.dload(this.source, 'length'), num)); i = dart.notNull(i) + 1) {
        let char = dart.as(dart.dsend(this.source, 'codeUnitAt', i), int);
        if (char == 10 || char == 13) {
          lineEnd = i;
          break;
        }
      }
      let length = dart.notNull(lineEnd) - lineStart;
      let start = lineStart;
      let end = lineEnd;
      let prefix = "";
      let postfix = "";
      if (length > 78) {
        let index = dart.notNull(offset) - lineStart;
        if (index < 75) {
          end = start + 75;
          postfix = "...";
        } else if (dart.notNull(end) - dart.notNull(offset) < 75) {
          start = dart.notNull(end) - 75;
          prefix = "...";
        } else {
          start = dart.notNull(offset) - 36;
          end = dart.notNull(offset) + 36;
          prefix = postfix = "...";
        }
      }
      let slice = dart.as(dart.dsend(this.source, 'substring', start, end), String);
      let markOffset = dart.notNull(offset) - start + dart.notNull(prefix[dartx.length]);
      return `${report}${prefix}${slice}${postfix}\n${" "[dartx['*']](markOffset)}^\n`;
    }
  }
  FormatException[dart.implements] = () => [Exception];
  dart.setSignature(FormatException, {
    constructors: () => ({FormatException: [FormatException, [], [String, dart.dynamic, int]]})
  });
  const _getKey = dart.JsSymbol('_getKey');
  const Expando$ = dart.generic(function(T) {
    class Expando extends Object {
      Expando(name) {
        if (name === void 0) name = null;
        this.name = name;
      }
      toString() {
        return `Expando:${this.name}`;
      }
      get(object) {
        let values = _js_helper.Primitives.getProperty(object, Expando$()._EXPANDO_PROPERTY_NAME);
        return dart.as(values == null ? null : _js_helper.Primitives.getProperty(values, this[_getKey]()), T);
      }
      set(object, value) {
        dart.as(value, T);
        let values = _js_helper.Primitives.getProperty(object, Expando$()._EXPANDO_PROPERTY_NAME);
        if (values == null) {
          values = new Object();
          _js_helper.Primitives.setProperty(object, Expando$()._EXPANDO_PROPERTY_NAME, values);
        }
        _js_helper.Primitives.setProperty(values, this[_getKey](), value);
        return value;
      }
    }
    dart.setSignature(Expando, {
      constructors: () => ({Expando: [Expando$(T), [], [String]]}),
      methods: () => ({
        get: [T, [Object]],
        set: [dart.void, [Object, T]]
      })
    });
    return Expando;
  });
  let Expando = Expando$();
  class Function extends Object {
    static apply(f, positionalArguments, namedArguments) {
      if (namedArguments === void 0) namedArguments = null;
      return dart.dcall.apply(null, [f].concat(positionalArguments));
    }
  }
  dart.setSignature(Function, {
    statics: () => ({apply: [dart.dynamic, [Function, List], [Map$(Symbol, dart.dynamic)]]}),
    names: ['apply']
  });
  function identical(a, b) {
    return _js_helper.Primitives.identicalImplementation(a, b);
  }
  dart.fn(identical, bool, [Object, Object]);
  function identityHashCode(object) {
    return _js_helper.objectHashCode(object);
  }
  dart.fn(identityHashCode, () => dart.definiteFunctionType(int, [Object]));
  class int extends num {}
  const Iterable$ = dart.generic(function(E) {
    class Iterable extends Object {
      Iterable() {
      }
      [dart.JsSymbol.iterator]() {
        return new dart.JsIterator(this[dartx.iterator]);
      }
    }
    dart.setSignature(Iterable, {
      constructors: () => ({Iterable: [Iterable$(E), []]})
    });
    return Iterable;
  });
  let Iterable = Iterable$();
  const _Generator$ = dart.generic(function(E) {
    const _Generator = dart.typedef('_Generator', () => dart.functionType(E, [int]));
    return _Generator;
  });
  let _Generator = _Generator$();
  const Iterator$ = dart.generic(function(E) {
    class Iterator extends Object {}
    return Iterator;
  });
  let Iterator = Iterator$();
  const List$ = dart.generic(function(E) {
    class List extends Object {
      static new(length) {
        if (length === void 0) length = null;
        let list = null;
        if (length == null) {
          list = [];
        } else {
          if (!(typeof length == 'number') || dart.notNull(length) < 0) {
            dart.throw(new ArgumentError(`Length must be a non-negative integer: ${length}`));
          }
          list = _interceptors.JSArray.markFixedList(dart.as(new Array(length), List$()));
        }
        return _interceptors.JSArray$(E).typed(list);
      }
      static from(elements, {growable = true} = {}) {
        let list = List$(E).new();
        for (let e of elements) {
          list[dartx.add](dart.as(e, E));
        }
        if (dart.notNull(growable)) return list;
        return dart.as(_internal.makeListFixedLength(list), List$(E));
      }
      [dart.JsSymbol.iterator]() {
        return new dart.JsIterator(this[dartx.iterator]);
      }
    }
    List[dart.implements] = () => [Iterable$(E)];
    dart.setSignature(List, {
      constructors: () => ({
        new: [List$(E), [], [int]],
        from: [List$(E), [Iterable], {growable: bool}]
      })
    });
    return List;
  });
  let List = List$();
  const Map$ = dart.generic(function(K, V) {
    class Map extends Object {
      static new() {
        return collection.LinkedHashMap$(K, V).new();
      }
      static identity() {
        return collection.LinkedHashMap$(K, V).identity();
      }
    }
    dart.setSignature(Map, {
      constructors: () => ({
        new: [Map$(K, V), []],
        identity: [Map$(K, V), []]
      })
    });
    return Map;
  });
  let Map = Map$();
  class Null extends Object {
    toString() {
      return "null";
    }
  }
  class Pattern extends Object {}
  function print(object) {
    let line = `${object}`;
    if (_internal.printToZone == null) {
      _internal.printToConsole(line);
    } else {
      dart.dcall(_internal.printToZone, line);
    }
  }
  dart.fn(print, dart.void, [Object]);
  class Match extends Object {}
  class RegExp extends Object {
    static new(source, {multiLine = false, caseSensitive = true} = {}) {
      return new _js_helper.JSSyntaxRegExp(source, {multiLine: multiLine, caseSensitive: caseSensitive});
    }
  }
  RegExp[dart.implements] = () => [Pattern];
  dart.setSignature(RegExp, {
    constructors: () => ({new: [RegExp, [String], {multiLine: bool, caseSensitive: bool}]})
  });
  const Set$ = dart.generic(function(E) {
    class Set extends collection.IterableBase$(E) {
      static new() {
        return collection.LinkedHashSet$(E).new();
      }
      static identity() {
        return collection.LinkedHashSet$(E).identity();
      }
    }
    Set[dart.implements] = () => [_internal.EfficientLength];
    dart.setSignature(Set, {
      constructors: () => ({
        new: [exports.Set$(E), []],
        identity: [exports.Set$(E), []]
      })
    });
    return Set;
  });
  dart.defineLazyClassGeneric(exports, 'Set', {get: Set$});
  const Sink$ = dart.generic(function(T) {
    class Sink extends Object {}
    return Sink;
  });
  let Sink = Sink$();
  class StackTrace extends Object {}
  class Stopwatch extends Object {
    Stopwatch() {
      Stopwatch._initTicker();
    }
    static _initTicker() {
      _js_helper.Primitives.initTicker();
      Stopwatch._frequency = _js_helper.Primitives.timerFrequency;
    }
  }
  dart.setSignature(Stopwatch, {
    constructors: () => ({Stopwatch: [Stopwatch, []]}),
    statics: () => ({_initTicker: [dart.void, []]}),
    names: ['_initTicker']
  });
  Stopwatch._frequency = null;
  class String extends Object {}
  String[dart.implements] = () => [Comparable$(String), Pattern];
  const _contents = dart.JsSymbol('_contents');
  class StringBuffer extends Object {
    StringBuffer(content) {
      if (content === void 0) content = "";
      this[_contents] = `${content}`;
    }
    get isEmpty() {
      return this.length == 0;
    }
    get isNotEmpty() {
      return !dart.notNull(this.isEmpty);
    }
    clear() {
      this[_contents] = "";
    }
    toString() {
      return _js_helper.Primitives.flattenString(this[_contents]);
    }
  }
  StringBuffer[dart.implements] = () => [StringSink];
  dart.setSignature(StringBuffer, {
    constructors: () => ({StringBuffer: [StringBuffer, [], [Object]]}),
    methods: () => ({clear: [dart.void, []]})
  });
  class StringSink extends Object {}
  class Symbol extends Object {
    static new(name) {
      return new _internal.Symbol(name);
    }
  }
  dart.setSignature(Symbol, {
    constructors: () => ({new: [Symbol, [String]]})
  });
  class Type extends Object {}
  // Exports:
  exports.Object = Object;
  exports.bool = bool;
  exports.Comparator$ = Comparator$;
  exports.Comparator = Comparator;
  exports.Comparable$ = Comparable$;
  exports.Comparable = Comparable;
  exports.DateTime = DateTime;
  exports.num = num;
  exports.double = double;
  exports.Duration = Duration;
  exports.Error = Error;
  exports.AssertionError = AssertionError;
  exports.CastError = CastError;
  exports.NullThrownError = NullThrownError;
  exports.ArgumentError = ArgumentError;
  exports.RangeError = RangeError;
  exports.NoSuchMethodError = NoSuchMethodError;
  exports.UnsupportedError = UnsupportedError;
  exports.StateError = StateError;
  exports.ConcurrentModificationError = ConcurrentModificationError;
  exports.Exception = Exception;
  exports.FormatException = FormatException;
  exports.Expando$ = Expando$;
  exports.Expando = Expando;
  exports.Function = Function;
  exports.identical = identical;
  exports.identityHashCode = identityHashCode;
  exports.int = int;
  exports.Iterable$ = Iterable$;
  exports.Iterable = Iterable;
  exports.Iterator$ = Iterator$;
  exports.Iterator = Iterator;
  exports.List$ = List$;
  exports.List = List;
  exports.Map$ = Map$;
  exports.Map = Map;
  exports.Null = Null;
  exports.Pattern = Pattern;
  exports.print = print;
  exports.Match = Match;
  exports.RegExp = RegExp;
  exports.Set$ = Set$;
  exports.Sink$ = Sink$;
  exports.Sink = Sink;
  exports.StackTrace = StackTrace;
  exports.Stopwatch = Stopwatch;
  exports.String = String;
  exports.StringBuffer = StringBuffer;
  exports.StringSink = StringSink;
  exports.Symbol = Symbol;
  exports.Type = Type;
});
