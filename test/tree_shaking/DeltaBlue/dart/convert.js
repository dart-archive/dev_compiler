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
let typed_data = require("dart/typed_data");
let _internal = require("dart/_internal");
let collection = require("dart/collection");
let dartx = dart.dartx;
const _ASCII_MASK = 127;
// /* Incoming: _JsonDecoderSink (ClassElementImpl @ dart:convert), _UnicodeSubsetEncoderSink (ClassElementImpl @ dart:convert/ascii.dart), _ErrorHandlingAsciiDecoderSink (ClassElementImpl @ dart:convert/ascii.dart), _SimpleAsciiDecoderSink (ClassElementImpl @ dart:convert/ascii.dart), ByteConversionSink (ClassElementImpl @ dart:convert/byte_conversion.dart), ByteConversionSinkBase (ClassElementImpl @ dart:convert/byte_conversion.dart), _ByteAdapterSink (ClassElementImpl @ dart:convert/byte_conversion.dart), _ByteCallbackSink (ClassElementImpl @ dart:convert/byte_conversion.dart), ChunkedConversionSink. (ConstructorElementImpl @ dart:convert/chunked_conversion.dart), ChunkedConversionSink.withCallback (ConstructorElementImpl @ dart:convert/chunked_conversion.dart), _SimpleCallbackSink (ClassElementImpl @ dart:convert/chunked_conversion.dart), _EventSinkAdapter (ClassElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink._chunkedSink (FieldElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink. (ConstructorElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink.add (MethodElementImpl @ dart:convert/chunked_conversion.dart), _ConverterStreamEventSink.close (MethodElementImpl @ dart:convert/chunked_conversion.dart), Converter.startChunkedConversion (MethodElementImpl @ dart:convert/converter.dart), _FusedConverter.startChunkedConversion (MethodElementImpl @ dart:convert/converter.dart), _HtmlEscapeSink (ClassElementImpl @ dart:convert/html_escape.dart), JsonEncoder.startChunkedConversion (MethodElementImpl @ dart:convert/json.dart), JsonUtf8Encoder.startChunkedConversion (MethodElementImpl @ dart:convert/json.dart), _JsonEncoderSink (ClassElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink (ClassElementImpl @ dart:convert/json.dart), _Latin1DecoderSink (ClassElementImpl @ dart:convert/latin1.dart), _Latin1AllowInvalidDecoderSink (ClassElementImpl @ dart:convert/latin1.dart), _LineSplitterSink (ClassElementImpl @ dart:convert/line_splitter.dart), StringConversionSink (ClassElementImpl @ dart:convert/string_conversion.dart), StringConversionSinkBase (ClassElementImpl @ dart:convert/string_conversion.dart), StringConversionSinkMixin (ClassElementImpl @ dart:convert/string_conversion.dart), _StringSinkConversionSink (ClassElementImpl @ dart:convert/string_conversion.dart), _StringCallbackSink (ClassElementImpl @ dart:convert/string_conversion.dart), _StringAdapterSink (ClassElementImpl @ dart:convert/string_conversion.dart), _Utf8StringSinkAdapter (ClassElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink (ClassElementImpl @ dart:convert/string_conversion.dart) */
const ChunkedConversionSink$ = dart.generic(function(T) {
  class ChunkedConversionSink extends core.Object {
    ChunkedConversionSink() {
    }
  }
  ChunkedConversionSink[dart.implements] = () => [core.Sink$(T)];
  dart.setSignature(ChunkedConversionSink, {
    constructors: () => ({ChunkedConversionSink: [ChunkedConversionSink$(T), []]})
  });
  return ChunkedConversionSink;
});
let ChunkedConversionSink = ChunkedConversionSink$();
// /* Incoming: _UnicodeSubsetEncoder.startChunkedConversion (MethodElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetEncoderSink._sink (FieldElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetEncoderSink. (ConstructorElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetEncoderSink.close (MethodElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetEncoderSink.addSlice (MethodElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetDecoder.startChunkedConversion (MethodElementImpl @ dart:convert/ascii.dart), AsciiDecoder.startChunkedConversion (MethodElementImpl @ dart:convert/ascii.dart), _ErrorHandlingAsciiDecoderSink (ClassElementImpl @ dart:convert/ascii.dart), _ErrorHandlingAsciiDecoderSink._utf8Sink (FieldElementImpl @ dart:convert/ascii.dart), _ErrorHandlingAsciiDecoderSink. (ConstructorElementImpl @ dart:convert/ascii.dart), _ErrorHandlingAsciiDecoderSink.close (MethodElementImpl @ dart:convert/ascii.dart), _ErrorHandlingAsciiDecoderSink.addSlice (MethodElementImpl @ dart:convert/ascii.dart), _SimpleAsciiDecoderSink (ClassElementImpl @ dart:convert/ascii.dart), ByteConversionSink. (ConstructorElementImpl @ dart:convert/byte_conversion.dart), ByteConversionSink.withCallback (ConstructorElementImpl @ dart:convert/byte_conversion.dart), ByteConversionSink.from (ConstructorElementImpl @ dart:convert/byte_conversion.dart), ByteConversionSinkBase (ClassElementImpl @ dart:convert/byte_conversion.dart), _ByteAdapterSink (ClassElementImpl @ dart:convert/byte_conversion.dart), _ByteCallbackSink (ClassElementImpl @ dart:convert/byte_conversion.dart), JsonEncoder.startChunkedConversion (MethodElementImpl @ dart:convert/json.dart), byteSink (LocalVariableElementImpl @ dart:convert/json.dart), JsonUtf8Encoder.startChunkedConversion (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink._sink (FieldElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink. (ConstructorElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink._addChunk (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink.add (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink.close (MethodElementImpl @ dart:convert/json.dart), Latin1Decoder.startChunkedConversion (MethodElementImpl @ dart:convert/latin1.dart), _Latin1DecoderSink (ClassElementImpl @ dart:convert/latin1.dart), _Latin1AllowInvalidDecoderSink (ClassElementImpl @ dart:convert/latin1.dart), StringConversionSink.asUtf8Sink (MethodElementImpl @ dart:convert/string_conversion.dart), StringConversionSinkMixin.asUtf8Sink (MethodElementImpl @ dart:convert/string_conversion.dart), _StringSinkConversionSink.asUtf8Sink (MethodElementImpl @ dart:convert/string_conversion.dart), _StringCallbackSink.asUtf8Sink (MethodElementImpl @ dart:convert/string_conversion.dart), _Utf8StringSinkAdapter (ClassElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink (ClassElementImpl @ dart:convert/string_conversion.dart), Utf8Encoder.startChunkedConversion (MethodElementImpl @ dart:convert/utf.dart), _Utf8EncoderSink._sink (FieldElementImpl @ dart:convert/utf.dart), _Utf8EncoderSink. (ConstructorElementImpl @ dart:convert/utf.dart), _Utf8EncoderSink.close (MethodElementImpl @ dart:convert/utf.dart), _Utf8EncoderSink.addSlice (MethodElementImpl @ dart:convert/utf.dart), Utf8Decoder.startChunkedConversion (MethodElementImpl @ dart:convert/utf.dart) */
class ByteConversionSink extends ChunkedConversionSink$(core.List$(core.int)) {
  ByteConversionSink() {
    super.ChunkedConversionSink();
  }
}
dart.setSignature(ByteConversionSink, {
  constructors: () => ({ByteConversionSink: [ByteConversionSink, []]})
});
const _ChunkedConversionCallback$ = dart.generic(function(T) {
  const _ChunkedConversionCallback = dart.typedef('_ChunkedConversionCallback', () => dart.functionType(dart.void, [T]));
  return _ChunkedConversionCallback;
});
let _ChunkedConversionCallback = _ChunkedConversionCallback$();
// /* Incoming: JsonUnsupportedObjectError. (ConstructorElementImpl @ dart:convert/json.dart), JsonCyclicError (ClassElementImpl @ dart:convert/json.dart), _JsonStringifier.writeObject (MethodElementImpl @ dart:convert/json.dart) */
class JsonUnsupportedObjectError extends core.Error {
  JsonUnsupportedObjectError(unsupportedObject, {cause = null} = {}) {
    this.unsupportedObject = unsupportedObject;
    this.cause = cause;
    super.Error();
  }
  toString() {
    if (this.cause != null) {
      return "Converting object to an encodable object failed.";
    } else {
      return "Converting object did not return an encodable object.";
    }
  }
}
dart.setSignature(JsonUnsupportedObjectError, {
  constructors: () => ({JsonUnsupportedObjectError: [JsonUnsupportedObjectError, [dart.dynamic], {cause: dart.dynamic}]})
});
// /* Incoming: JsonCyclicError. (ConstructorElementImpl @ dart:convert/json.dart), _JsonStringifier._checkCycle (MethodElementImpl @ dart:convert/json.dart) */
class JsonCyclicError extends JsonUnsupportedObjectError {
  JsonCyclicError(object) {
    super.JsonUnsupportedObjectError(object);
  }
  toString() {
    return "Cyclic error in JSON stringify";
  }
}
dart.setSignature(JsonCyclicError, {
  constructors: () => ({JsonCyclicError: [JsonCyclicError, [core.Object]]})
});
const _Reviver = dart.typedef('_Reviver', () => dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
const _ToEncodable = dart.typedef('_ToEncodable', () => dart.functionType(dart.dynamic, [dart.dynamic]));
function _defaultToEncodable(object) {
  return dart.dsend(object, 'toJson');
}
dart.fn(_defaultToEncodable, core.Object, [dart.dynamic]);
const _seen = Symbol('_seen');
const _toEncodable = Symbol('_toEncodable');
const _checkCycle = Symbol('_checkCycle');
const _removeSeen = Symbol('_removeSeen');
// /* Incoming: _JsonStringifier. (ConstructorElementImpl @ dart:convert/json.dart), _JsonPrettyPrintMixin (ClassElementImpl @ dart:convert/json.dart), _JsonStringStringifier (ClassElementImpl @ dart:convert/json.dart), _JsonStringStringifierPretty (ClassElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier (ClassElementImpl @ dart:convert/json.dart), _JsonUtf8StringifierPretty (ClassElementImpl @ dart:convert/json.dart) */
class _JsonStringifier extends core.Object {
  _JsonStringifier(_toEncodable) {
    this[_seen] = core.List.new();
    this[_toEncodable] = _toEncodable != null ? _toEncodable : _defaultToEncodable;
  }
  static hexDigit(x) {
    return dart.notNull(x) < 10 ? 48 + dart.notNull(x) : 87 + dart.notNull(x);
  }
  writeStringContent(s) {
    let offset = 0;
    let length = s[dartx.length];
    for (let i = 0; i < dart.notNull(length); i++) {
      let charCode = s[dartx.codeUnitAt](i);
      if (dart.notNull(charCode) > dart.notNull(_JsonStringifier.BACKSLASH)) continue;
      if (dart.notNull(charCode) < 32) {
        if (i > offset) this.writeStringSlice(s, offset, i);
        offset = i + 1;
        this.writeCharCode(_JsonStringifier.BACKSLASH);
        switch (charCode) {
          case _JsonStringifier.BACKSPACE:
          {
            this.writeCharCode(_JsonStringifier.CHAR_b);
            break;
          }
          case _JsonStringifier.TAB:
          {
            this.writeCharCode(_JsonStringifier.CHAR_t);
            break;
          }
          case _JsonStringifier.NEWLINE:
          {
            this.writeCharCode(_JsonStringifier.CHAR_n);
            break;
          }
          case _JsonStringifier.FORM_FEED:
          {
            this.writeCharCode(_JsonStringifier.CHAR_f);
            break;
          }
          case _JsonStringifier.CARRIAGE_RETURN:
          {
            this.writeCharCode(_JsonStringifier.CHAR_r);
            break;
          }
          default:
          {
            this.writeCharCode(_JsonStringifier.CHAR_u);
            this.writeCharCode(_JsonStringifier.CHAR_0);
            this.writeCharCode(_JsonStringifier.CHAR_0);
            this.writeCharCode(_JsonStringifier.hexDigit(dart.notNull(charCode) >> 4 & 15));
            this.writeCharCode(_JsonStringifier.hexDigit(dart.notNull(charCode) & 15));
            break;
          }
        }
      } else if (charCode == _JsonStringifier.QUOTE || charCode == _JsonStringifier.BACKSLASH) {
        if (i > offset) this.writeStringSlice(s, offset, i);
        offset = i + 1;
        this.writeCharCode(_JsonStringifier.BACKSLASH);
        this.writeCharCode(charCode);
      }
    }
    if (offset == 0) {
      this.writeString(s);
    } else if (offset < dart.notNull(length)) {
      this.writeStringSlice(s, offset, length);
    }
  }
  [_checkCycle](object) {
    for (let i = 0; i < dart.notNull(this[_seen][dartx.length]); i++) {
      if (dart.notNull(core.identical(object, this[_seen][dartx.get](i)))) {
        dart.throw(new JsonCyclicError(object));
      }
    }
    this[_seen][dartx.add](object);
  }
  [_removeSeen](object) {
    dart.assert(!dart.notNull(this[_seen][dartx.isEmpty]));
    dart.assert(core.identical(this[_seen][dartx.last], object));
    this[_seen][dartx.removeLast]();
  }
  writeObject(object) {
    if (dart.notNull(this.writeJsonValue(object))) return;
    this[_checkCycle](object);
    try {
      let customJson = dart.dcall(this[_toEncodable], object);
      if (!dart.notNull(this.writeJsonValue(customJson))) {
        dart.throw(new JsonUnsupportedObjectError(object));
      }
      this[_removeSeen](object);
    } catch (e) {
      dart.throw(new JsonUnsupportedObjectError(object, {cause: e}));
    }

  }
  writeJsonValue(object) {
    if (typeof object == 'number') {
      if (!dart.notNull(object[dartx.isFinite])) return false;
      this.writeNumber(object);
      return true;
    } else if (dart.notNull(core.identical(object, true))) {
      this.writeString('true');
      return true;
    } else if (dart.notNull(core.identical(object, false))) {
      this.writeString('false');
      return true;
    } else if (object == null) {
      this.writeString('null');
      return true;
    } else if (typeof object == 'string') {
      this.writeString('"');
      this.writeStringContent(object);
      this.writeString('"');
      return true;
    } else if (dart.is(object, core.List)) {
      this[_checkCycle](object);
      this.writeList(object);
      this[_removeSeen](object);
      return true;
    } else if (dart.is(object, core.Map)) {
      this[_checkCycle](object);
      this.writeMap(dart.as(object, core.Map$(core.String, core.Object)));
      this[_removeSeen](object);
      return true;
    } else {
      return false;
    }
  }
  writeList(list) {
    this.writeString('[');
    if (dart.notNull(list[dartx.length]) > 0) {
      this.writeObject(list[dartx.get](0));
      for (let i = 1; i < dart.notNull(list[dartx.length]); i++) {
        this.writeString(',');
        this.writeObject(list[dartx.get](i));
      }
    }
    this.writeString(']');
  }
  writeMap(map) {
    this.writeString('{');
    let separator = '"';
    map.forEach(dart.fn((key, value) => {
      this.writeString(separator);
      separator = ',"';
      this.writeStringContent(key);
      this.writeString('":');
      this.writeObject(value);
    }, dart.void, [core.String, core.Object]));
    this.writeString('}');
  }
}
dart.setSignature(_JsonStringifier, {
  constructors: () => ({_JsonStringifier: [_JsonStringifier, [dart.functionType(core.Object, [core.Object])]]}),
  methods: () => ({
    writeStringContent: [dart.void, [core.String]],
    [_checkCycle]: [dart.void, [dart.dynamic]],
    [_removeSeen]: [dart.void, [dart.dynamic]],
    writeObject: [dart.void, [dart.dynamic]],
    writeJsonValue: [core.bool, [dart.dynamic]],
    writeList: [dart.void, [core.List]],
    writeMap: [dart.void, [core.Map$(core.String, core.Object)]]
  }),
  statics: () => ({hexDigit: [core.int, [core.int]]}),
  names: ['hexDigit']
});
_JsonStringifier.BACKSPACE = 8;
_JsonStringifier.TAB = 9;
_JsonStringifier.NEWLINE = 10;
_JsonStringifier.CARRIAGE_RETURN = 13;
_JsonStringifier.FORM_FEED = 12;
_JsonStringifier.QUOTE = 34;
_JsonStringifier.CHAR_0 = 48;
_JsonStringifier.BACKSLASH = 92;
_JsonStringifier.CHAR_b = 98;
_JsonStringifier.CHAR_f = 102;
_JsonStringifier.CHAR_n = 110;
_JsonStringifier.CHAR_r = 114;
_JsonStringifier.CHAR_t = 116;
_JsonStringifier.CHAR_u = 117;
// /* Incoming: _JsonStringStringifierPretty (ClassElementImpl @ dart:convert/json.dart), _JsonUtf8StringifierPretty (ClassElementImpl @ dart:convert/json.dart) */
class _JsonPrettyPrintMixin extends core.Object {
  _JsonPrettyPrintMixin() {}
}
_JsonPrettyPrintMixin[dart.implements] = () => [_JsonStringifier];
const _sink = Symbol('_sink');
// /* Incoming: JsonEncoder.convert (MethodElementImpl @ dart:convert/json.dart), _JsonEncoderSink.add (MethodElementImpl @ dart:convert/json.dart), _JsonStringStringifier. (ConstructorElementImpl @ dart:convert/json.dart), _JsonStringStringifier.printOn (MethodElementImpl @ dart:convert/json.dart), _JsonStringStringifierPretty (ClassElementImpl @ dart:convert/json.dart) */
class _JsonStringStringifier extends _JsonStringifier {
  _JsonStringStringifier(sink, _toEncodable) {
    this[_sink] = sink;
    super._JsonStringifier(dart.as(_toEncodable, dart.functionType(core.Object, [core.Object])));
  }
  static printOn(object, output, toEncodable, indent) {
    let stringifier = null;
    if (indent == null) {
      stringifier = new _JsonStringStringifier(output, toEncodable);
    } else {
      stringifier = new _JsonStringStringifierPretty(output, toEncodable, indent);
    }
    dart.dsend(stringifier, 'writeObject', object);
  }
}
dart.setSignature(_JsonStringStringifier, {
  constructors: () => ({_JsonStringStringifier: [_JsonStringStringifier, [core.StringSink, dart.dynamic]]}),
  statics: () => ({printOn: [dart.void, [dart.dynamic, core.StringSink, dart.functionType(dart.dynamic, [dart.dynamic]), core.String]]}),
  names: ['printOn']
});
const _indent = Symbol('_indent');
// /* Incoming: _JsonStringStringifier.printOn (MethodElementImpl @ dart:convert/json.dart), _JsonStringStringifierPretty. (ConstructorElementImpl @ dart:convert/json.dart) */
class _JsonStringStringifierPretty extends dart.mixin(_JsonStringStringifier, _JsonPrettyPrintMixin) {
  _JsonStringStringifierPretty(sink, toEncodable, indent) {
    this[_indent] = indent;
    super._JsonStringStringifier(sink, toEncodable);
  }
}
dart.setSignature(_JsonStringStringifierPretty, {
  constructors: () => ({_JsonStringStringifierPretty: [_JsonStringStringifierPretty, [core.StringSink, core.Function, core.String]]})
});
// /* Incoming: JsonUtf8Encoder.convert (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8EncoderSink.add (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier. (ConstructorElementImpl @ dart:convert/json.dart), stringifier (LocalVariableElementImpl @ dart:convert/json.dart), _JsonUtf8Stringifier.stringify (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8StringifierPretty (ClassElementImpl @ dart:convert/json.dart) */
class _JsonUtf8Stringifier extends _JsonStringifier {
  _JsonUtf8Stringifier(toEncodable, bufferSize, addChunk) {
    this.addChunk = addChunk;
    this.bufferSize = bufferSize;
    this.buffer = typed_data.Uint8List.new(bufferSize);
    this.index = 0;
    super._JsonStringifier(dart.as(toEncodable, dart.functionType(core.Object, [core.Object])));
  }
  static stringify(object, indent, toEncodableFunction, bufferSize, addChunk) {
    let stringifier = null;
    if (indent != null) {
      stringifier = new _JsonUtf8StringifierPretty(toEncodableFunction, indent, bufferSize, addChunk);
    } else {
      stringifier = new _JsonUtf8Stringifier(toEncodableFunction, bufferSize, addChunk);
    }
    stringifier.writeObject(object);
    stringifier.flush();
  }
  flush() {
    if (dart.notNull(this.index) > 0) {
      dart.dcall(this.addChunk, this.buffer, 0, this.index);
    }
    this.buffer = null;
    this.index = 0;
  }
}
dart.setSignature(_JsonUtf8Stringifier, {
  constructors: () => ({_JsonUtf8Stringifier: [_JsonUtf8Stringifier, [dart.dynamic, core.int, core.Function]]}),
  methods: () => ({flush: [dart.void, []]}),
  statics: () => ({stringify: [dart.void, [core.Object, core.List$(core.int), dart.functionType(dart.dynamic, [core.Object]), core.int, dart.functionType(dart.void, [typed_data.Uint8List, core.int, core.int])]]}),
  names: ['stringify']
});
// /* Incoming: _JsonUtf8Stringifier.stringify (MethodElementImpl @ dart:convert/json.dart), _JsonUtf8StringifierPretty. (ConstructorElementImpl @ dart:convert/json.dart), indent (LocalVariableElementImpl @ dart:convert/json.dart) */
class _JsonUtf8StringifierPretty extends dart.mixin(_JsonUtf8Stringifier, _JsonPrettyPrintMixin) {
  _JsonUtf8StringifierPretty(toEncodableFunction, indent, bufferSize, addChunk) {
    this.indent = indent;
    super._JsonUtf8Stringifier(toEncodableFunction, dart.as(bufferSize, core.int), dart.as(addChunk, core.Function));
  }
}
dart.setSignature(_JsonUtf8StringifierPretty, {
  constructors: () => ({_JsonUtf8StringifierPretty: [_JsonUtf8StringifierPretty, [dart.dynamic, core.List$(core.int), dart.dynamic, dart.dynamic]]})
});
const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.Object, [core.Object]));
const __CastType2 = dart.typedef('__CastType2', () => dart.functionType(dart.dynamic, [dart.dynamic]));
const __CastType4 = dart.typedef('__CastType4', () => dart.functionType(dart.dynamic, [core.Object]));
const _LATIN1_MASK = 255;
// /* Incoming: _JsonDecoderSink (ClassElementImpl @ dart:convert), _UnicodeSubsetEncoder.startChunkedConversion (MethodElementImpl @ dart:convert/ascii.dart), _UnicodeSubsetEncoderSink (ClassElementImpl @ dart:convert/ascii.dart), stringSink (LocalVariableElementImpl @ dart:convert/ascii.dart), AsciiDecoder.startChunkedConversion (MethodElementImpl @ dart:convert/ascii.dart), HtmlEscape.startChunkedConversion (MethodElementImpl @ dart:convert/html_escape.dart), _HtmlEscapeSink (ClassElementImpl @ dart:convert/html_escape.dart), _HtmlEscapeSink._sink (FieldElementImpl @ dart:convert/html_escape.dart), _HtmlEscapeSink. (ConstructorElementImpl @ dart:convert/html_escape.dart), _HtmlEscapeSink.addSlice (MethodElementImpl @ dart:convert/html_escape.dart), _HtmlEscapeSink.close (MethodElementImpl @ dart:convert/html_escape.dart), JsonEncoder.startChunkedConversion (MethodElementImpl @ dart:convert/json.dart), _JsonEncoderSink._sink (FieldElementImpl @ dart:convert/json.dart), _JsonEncoderSink. (ConstructorElementImpl @ dart:convert/json.dart), stringSink (LocalVariableElementImpl @ dart:convert/json.dart), JsonDecoder.startChunkedConversion (MethodElementImpl @ dart:convert/json.dart), stringSink (LocalVariableElementImpl @ dart:convert/latin1.dart), Latin1Decoder.startChunkedConversion (MethodElementImpl @ dart:convert/latin1.dart), _Latin1DecoderSink._sink (FieldElementImpl @ dart:convert/latin1.dart), _Latin1DecoderSink. (ConstructorElementImpl @ dart:convert/latin1.dart), _Latin1DecoderSink.close (MethodElementImpl @ dart:convert/latin1.dart), _Latin1DecoderSink._addSliceToSink (MethodElementImpl @ dart:convert/latin1.dart), _Latin1AllowInvalidDecoderSink. (ConstructorElementImpl @ dart:convert/latin1.dart), LineSplitter.startChunkedConversion (MethodElementImpl @ dart:convert/line_splitter.dart), _LineSplitterSink (ClassElementImpl @ dart:convert/line_splitter.dart), _LineSplitterSink._sink (FieldElementImpl @ dart:convert/line_splitter.dart), _LineSplitterSink. (ConstructorElementImpl @ dart:convert/line_splitter.dart), _LineSplitterSink.addSlice (MethodElementImpl @ dart:convert/line_splitter.dart), StringConversionSink. (ConstructorElementImpl @ dart:convert/string_conversion.dart), StringConversionSink.withCallback (ConstructorElementImpl @ dart:convert/string_conversion.dart), StringConversionSink.from (ConstructorElementImpl @ dart:convert/string_conversion.dart), StringConversionSink.fromStringSink (ConstructorElementImpl @ dart:convert/string_conversion.dart), _StringConversionSinkAsStringSinkAdapter._chunkedSink (FieldElementImpl @ dart:convert/string_conversion.dart), _StringConversionSinkAsStringSinkAdapter. (ConstructorElementImpl @ dart:convert/string_conversion.dart), _StringConversionSinkAsStringSinkAdapter.close (MethodElementImpl @ dart:convert/string_conversion.dart), _StringConversionSinkAsStringSinkAdapter.write (MethodElementImpl @ dart:convert/string_conversion.dart), _StringConversionSinkAsStringSinkAdapter.writeAll (MethodElementImpl @ dart:convert/string_conversion.dart), _StringConversionSinkAsStringSinkAdapter._flush (MethodElementImpl @ dart:convert/string_conversion.dart), StringConversionSinkBase (ClassElementImpl @ dart:convert/string_conversion.dart), StringConversionSinkMixin (ClassElementImpl @ dart:convert/string_conversion.dart), _StringSinkConversionSink (ClassElementImpl @ dart:convert/string_conversion.dart), _StringCallbackSink (ClassElementImpl @ dart:convert/string_conversion.dart), _StringAdapterSink (ClassElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink._chunkedSink (FieldElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink. (ConstructorElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink._ (ConstructorElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink.close (MethodElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink.addSlice (MethodElementImpl @ dart:convert/string_conversion.dart), Utf8Encoder.startChunkedConversion (MethodElementImpl @ dart:convert/utf.dart), stringSink (LocalVariableElementImpl @ dart:convert/utf.dart), Utf8Decoder.startChunkedConversion (MethodElementImpl @ dart:convert/utf.dart) */
class StringConversionSink extends ChunkedConversionSink$(core.String) {
  StringConversionSink() {
    super.ChunkedConversionSink();
  }
}
dart.setSignature(StringConversionSink, {
  constructors: () => ({StringConversionSink: [StringConversionSink, []]})
});
// /* Incoming: stringSink (LocalVariableElementImpl @ dart:convert/json.dart), _JsonEncoderSink.add (MethodElementImpl @ dart:convert/json.dart), StringConversionSink.asStringSink (MethodElementImpl @ dart:convert/string_conversion.dart), ClosableStringSink.fromStringSink (ConstructorElementImpl @ dart:convert/string_conversion.dart), _ClosableStringSink (ClassElementImpl @ dart:convert/string_conversion.dart), _StringConversionSinkAsStringSinkAdapter (ClassElementImpl @ dart:convert/string_conversion.dart), StringConversionSinkMixin.asStringSink (MethodElementImpl @ dart:convert/string_conversion.dart), _StringSinkConversionSink.asStringSink (MethodElementImpl @ dart:convert/string_conversion.dart) */
class ClosableStringSink extends core.StringSink {}
const _StringSinkCloseCallback = dart.typedef('_StringSinkCloseCallback', () => dart.functionType(dart.void, []));
const UNICODE_REPLACEMENT_CHARACTER_RUNE = 65533;
const UNICODE_BOM_CHARACTER_RUNE = 65279;
const _ONE_BYTE_LIMIT = 127;
const _TWO_BYTE_LIMIT = 2047;
const _THREE_BYTE_LIMIT = 65535;
const _FOUR_BYTE_LIMIT = 1114111;
const _stringSink = Symbol('_stringSink');
const _allowMalformed = Symbol('_allowMalformed');
const _isFirstCharacter = Symbol('_isFirstCharacter');
const _value = Symbol('_value');
const _expectedUnits = Symbol('_expectedUnits');
const _extraUnits = Symbol('_extraUnits');
// /* Incoming: _Utf8StringSinkAdapter._decoder (FieldElementImpl @ dart:convert/string_conversion.dart), _Utf8StringSinkAdapter. (ConstructorElementImpl @ dart:convert/string_conversion.dart), _Utf8StringSinkAdapter.close (MethodElementImpl @ dart:convert/string_conversion.dart), _Utf8StringSinkAdapter.addSlice (MethodElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink._decoder (FieldElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink._ (ConstructorElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink.close (MethodElementImpl @ dart:convert/string_conversion.dart), _Utf8ConversionSink.addSlice (MethodElementImpl @ dart:convert/string_conversion.dart), decoder (LocalVariableElementImpl @ dart:convert/utf.dart), Utf8Decoder.convert (MethodElementImpl @ dart:convert/utf.dart), _Utf8Decoder. (ConstructorElementImpl @ dart:convert/utf.dart) */
class _Utf8Decoder extends core.Object {
  _Utf8Decoder(stringSink, allowMalformed) {
    this[_stringSink] = stringSink;
    this[_allowMalformed] = allowMalformed;
    this[_isFirstCharacter] = true;
    this[_value] = 0;
    this[_expectedUnits] = 0;
    this[_extraUnits] = 0;
  }
  get hasPartialInput() {
    return dart.notNull(this[_expectedUnits]) > 0;
  }
  close() {
    this.flush();
  }
  flush() {
    if (dart.notNull(this.hasPartialInput)) {
      if (!dart.notNull(this[_allowMalformed])) {
        dart.throw(new core.FormatException("Unfinished UTF-8 octet sequence"));
      }
      this[_stringSink].writeCharCode(UNICODE_REPLACEMENT_CHARACTER_RUNE);
      this[_value] = 0;
      this[_expectedUnits] = 0;
      this[_extraUnits] = 0;
    }
  }
  convert(codeUnits, startIndex, endIndex) {
    let value = this[_value];
    let expectedUnits = this[_expectedUnits];
    let extraUnits = this[_extraUnits];
    this[_value] = 0;
    this[_expectedUnits] = 0;
    this[_extraUnits] = 0;
    function scanOneByteCharacters(units, from) {
      let to = endIndex;
      let mask = _ONE_BYTE_LIMIT;
      for (let i = from; dart.notNull(i) < dart.notNull(to); i = dart.notNull(i) + 1) {
        let unit = dart.dindex(units, i);
        if (!dart.equals(dart.dsend(unit, '&', mask), unit)) return dart.notNull(i) - dart.notNull(from);
      }
      return dart.notNull(to) - dart.notNull(from);
    }
    dart.fn(scanOneByteCharacters, core.int, [dart.dynamic, core.int]);
    const addSingleBytes = (function(from, to) {
      dart.assert(dart.notNull(from) >= dart.notNull(startIndex) && dart.notNull(from) <= dart.notNull(endIndex));
      dart.assert(dart.notNull(to) >= dart.notNull(startIndex) && dart.notNull(to) <= dart.notNull(endIndex));
      this[_stringSink].write(core.String.fromCharCodes(codeUnits, from, to));
    }).bind(this);
    dart.fn(addSingleBytes, dart.void, [core.int, core.int]);
    let i = startIndex;
    loop:
      while (true) {
        multibyte:
          if (dart.notNull(expectedUnits) > 0) {
            do {
              if (i == endIndex) {
                break loop;
              }
              let unit = codeUnits[dartx.get](i);
              if ((dart.notNull(unit) & 192) != 128) {
                expectedUnits = 0;
                if (!dart.notNull(this[_allowMalformed])) {
                  dart.throw(new core.FormatException(`Bad UTF-8 encoding 0x${unit[dartx.toRadixString](16)}`));
                }
                this[_isFirstCharacter] = false;
                this[_stringSink].writeCharCode(UNICODE_REPLACEMENT_CHARACTER_RUNE);
                break multibyte;
              } else {
                value = dart.notNull(value) << 6 | dart.notNull(unit) & 63;
                expectedUnits = dart.notNull(expectedUnits) - 1;
                i = dart.notNull(i) + 1;
              }
            } while (dart.notNull(expectedUnits) > 0);
            if (dart.notNull(value) <= dart.notNull(_Utf8Decoder._LIMITS[dartx.get](dart.notNull(extraUnits) - 1))) {
              if (!dart.notNull(this[_allowMalformed])) {
                dart.throw(new core.FormatException(`Overlong encoding of 0x${value[dartx.toRadixString](16)}`));
              }
              expectedUnits = extraUnits = 0;
              value = UNICODE_REPLACEMENT_CHARACTER_RUNE;
            }
            if (dart.notNull(value) > dart.notNull(_FOUR_BYTE_LIMIT)) {
              if (!dart.notNull(this[_allowMalformed])) {
                dart.throw(new core.FormatException("Character outside valid Unicode range: " + `0x${value[dartx.toRadixString](16)}`));
              }
              value = UNICODE_REPLACEMENT_CHARACTER_RUNE;
            }
            if (!dart.notNull(this[_isFirstCharacter]) || value != UNICODE_BOM_CHARACTER_RUNE) {
              this[_stringSink].writeCharCode(value);
            }
            this[_isFirstCharacter] = false;
          }
        while (dart.notNull(i) < dart.notNull(endIndex)) {
          let oneBytes = scanOneByteCharacters(codeUnits, i);
          if (dart.notNull(oneBytes) > 0) {
            this[_isFirstCharacter] = false;
            addSingleBytes(i, dart.notNull(i) + dart.notNull(oneBytes));
            i = dart.notNull(i) + dart.notNull(oneBytes);
            if (i == endIndex) break;
          }
          let unit = codeUnits[dartx.get]((() => {
            let x = i;
            i = dart.notNull(x) + 1;
            return x;
          })());
          if (dart.notNull(unit) < 0) {
            if (!dart.notNull(this[_allowMalformed])) {
              dart.throw(new core.FormatException(`Negative UTF-8 code unit: -0x${(-dart.notNull(unit))[dartx.toRadixString](16)}`));
            }
            this[_stringSink].writeCharCode(UNICODE_REPLACEMENT_CHARACTER_RUNE);
          } else {
            dart.assert(dart.notNull(unit) > dart.notNull(_ONE_BYTE_LIMIT));
            if ((dart.notNull(unit) & 224) == 192) {
              value = dart.notNull(unit) & 31;
              expectedUnits = extraUnits = 1;
              continue loop;
            }
            if ((dart.notNull(unit) & 240) == 224) {
              value = dart.notNull(unit) & 15;
              expectedUnits = extraUnits = 2;
              continue loop;
            }
            if ((dart.notNull(unit) & 248) == 240 && dart.notNull(unit) < 245) {
              value = dart.notNull(unit) & 7;
              expectedUnits = extraUnits = 3;
              continue loop;
            }
            if (!dart.notNull(this[_allowMalformed])) {
              dart.throw(new core.FormatException(`Bad UTF-8 encoding 0x${unit[dartx.toRadixString](16)}`));
            }
            value = UNICODE_REPLACEMENT_CHARACTER_RUNE;
            expectedUnits = extraUnits = 0;
            this[_isFirstCharacter] = false;
            this[_stringSink].writeCharCode(value);
          }
        }
        break loop;
      }
    if (dart.notNull(expectedUnits) > 0) {
      this[_value] = value;
      this[_expectedUnits] = expectedUnits;
      this[_extraUnits] = extraUnits;
    }
  }
}
dart.setSignature(_Utf8Decoder, {
  constructors: () => ({_Utf8Decoder: [_Utf8Decoder, [core.StringSink, core.bool]]}),
  methods: () => ({
    close: [dart.void, []],
    flush: [dart.void, []],
    convert: [dart.void, [core.List$(core.int), core.int, core.int]]
  })
});
_Utf8Decoder._LIMITS = dart.const(dart.list([_ONE_BYTE_LIMIT, _TWO_BYTE_LIMIT, _THREE_BYTE_LIMIT, _FOUR_BYTE_LIMIT], core.int));
function _convertJsonToDartLazy(object) {
  if (object == null) return null;
  if (typeof object != "object") {
    return object;
  }
  if (Object.getPrototypeOf(object) !== Array.prototype) {
    return new _JsonMap(object);
  }
  for (let i = 0; i < object.length; i++) {
    let item = object[i];
    object[i] = _convertJsonToDartLazy(item);
  }
  return object;
}
dart.fn(_convertJsonToDartLazy);
const _processed = Symbol('_processed');
const _original = Symbol('_original');
const _data = Symbol('_data');
const _isUpgraded = Symbol('_isUpgraded');
const _upgradedMap = Symbol('_upgradedMap');
const _process = Symbol('_process');
const _computeKeys = Symbol('_computeKeys');
const _upgrade = Symbol('_upgrade');
// /* Incoming: map (LocalVariableElementImpl @ dart:convert), processed (LocalVariableElementImpl @ dart:convert), keys (LocalVariableElementImpl @ dart:convert), walk (FunctionElementImpl @ dart:convert), _convertJsonToDartLazy (FunctionElementImpl @ dart:convert), _JsonMap. (ConstructorElementImpl @ dart:convert), _JsonMap.keys (FieldElementImpl @ dart:convert), _JsonMap.values (FieldElementImpl @ dart:convert), _JsonMap.addAll (MethodElementImpl @ dart:convert), _JsonMap.containsValue (MethodElementImpl @ dart:convert), _JsonMap.putIfAbsent (MethodElementImpl @ dart:convert), _JsonMap.forEach (MethodElementImpl @ dart:convert), _JsonMap.toString (MethodElementImpl @ dart:convert), _JsonMap._upgrade (MethodElementImpl @ dart:convert), _JsonMapKeyIterable._parent (FieldElementImpl @ dart:convert), _JsonMapKeyIterable. (ConstructorElementImpl @ dart:convert), _JsonMapKeyIterable.length (FieldElementImpl @ dart:convert), _JsonMapKeyIterable.elementAt (MethodElementImpl @ dart:convert), _JsonMapKeyIterable.iterator (FieldElementImpl @ dart:convert), _JsonMapKeyIterable.contains (MethodElementImpl @ dart:convert) */
class _JsonMap extends core.Object {
  _JsonMap(original) {
    this[_processed] = _JsonMap._newJavaScriptObject();
    this[_original] = original;
    this[_data] = null;
  }
  get(key) {
    if (dart.notNull(this[_isUpgraded])) {
      return this[_upgradedMap].get(key);
    } else if (!(typeof key == 'string')) {
      return null;
    } else {
      let result = _JsonMap._getProperty(this[_processed], dart.as(key, core.String));
      if (dart.notNull(_JsonMap._isUnprocessed(result))) result = this[_process](dart.as(key, core.String));
      return result;
    }
  }
  get length() {
    return dart.notNull(this[_isUpgraded]) ? this[_upgradedMap].length : this[_computeKeys]()[dartx.length];
  }
  get isNotEmpty() {
    return dart.notNull(this.length) > 0;
  }
  get keys() {
    if (dart.notNull(this[_isUpgraded])) return this[_upgradedMap].keys;
    return new _JsonMapKeyIterable(this);
  }
  get values() {
    if (dart.notNull(this[_isUpgraded])) return this[_upgradedMap].values;
    return _internal.MappedIterable.new(this[_computeKeys](), dart.fn(each => this.get(each)));
  }
  set(key, value) {
    if (dart.notNull(this[_isUpgraded])) {
      this[_upgradedMap].set(key, value);
    } else if (dart.notNull(this.containsKey(key))) {
      let processed = this[_processed];
      _JsonMap._setProperty(processed, dart.as(key, core.String), value);
      let original = this[_original];
      if (!dart.notNull(core.identical(original, processed))) {
        _JsonMap._setProperty(original, dart.as(key, core.String), null);
      }
    } else {
      this[_upgrade]().set(key, value);
    }
    return value;
  }
  containsKey(key) {
    if (dart.notNull(this[_isUpgraded])) return this[_upgradedMap].containsKey(key);
    if (!(typeof key == 'string')) return false;
    return _JsonMap._hasProperty(this[_original], dart.as(key, core.String));
  }
  remove(key) {
    if (!dart.notNull(this[_isUpgraded]) && !dart.notNull(this.containsKey(key))) return null;
    return this[_upgrade]().remove(key);
  }
  clear() {
    if (dart.notNull(this[_isUpgraded])) {
      this[_upgradedMap].clear();
    } else {
      if (this[_data] != null) {
        dart.dsend(this[_data], 'clear');
      }
      this[_original] = this[_processed] = null;
      this[_data] = dart.map();
    }
  }
  toString() {
    return collection.Maps.mapToString(this);
  }
  get [_isUpgraded]() {
    return this[_processed] == null;
  }
  get [_upgradedMap]() {
    dart.assert(this[_isUpgraded]);
    return dart.as(this[_data], core.Map);
  }
  [_computeKeys]() {
    dart.assert(!dart.notNull(this[_isUpgraded]));
    let keys = dart.as(this[_data], core.List);
    if (keys == null) {
      keys = this[_data] = _JsonMap._getPropertyNames(this[_original]);
    }
    return dart.as(keys, core.List$(core.String));
  }
  [_upgrade]() {
    if (dart.notNull(this[_isUpgraded])) return this[_upgradedMap];
    let result = dart.map();
    let keys = this[_computeKeys]();
    for (let i = 0; i < dart.notNull(keys[dartx.length]); i++) {
      let key = keys[dartx.get](i);
      result.set(key, this.get(key));
    }
    if (dart.notNull(keys[dartx.isEmpty])) {
      keys[dartx.add](null);
    } else {
      keys[dartx.clear]();
    }
    this[_original] = this[_processed] = null;
    this[_data] = result;
    dart.assert(this[_isUpgraded]);
    return result;
  }
  [_process](key) {
    if (!dart.notNull(_JsonMap._hasProperty(this[_original], key))) return null;
    let result = _convertJsonToDartLazy(_JsonMap._getProperty(this[_original], key));
    return _JsonMap._setProperty(this[_processed], key, result);
  }
  static _hasProperty(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
  }
  static _getProperty(object, key) {
    return object[key];
  }
  static _setProperty(object, key, value) {
    return object[key] = value;
  }
  static _getPropertyNames(object) {
    return dart.as(Object.keys(object), core.List);
  }
  static _isUnprocessed(object) {
    return typeof object == "undefined";
  }
  static _newJavaScriptObject() {
    return Object.create(null);
  }
}
_JsonMap[dart.implements] = () => [collection.LinkedHashMap];
dart.setSignature(_JsonMap, {
  constructors: () => ({_JsonMap: [_JsonMap, [dart.dynamic]]}),
  methods: () => ({
    get: [dart.dynamic, [core.Object]],
    set: [dart.void, [dart.dynamic, dart.dynamic]],
    containsKey: [core.bool, [core.Object]],
    remove: [dart.dynamic, [core.Object]],
    clear: [dart.void, []],
    [_computeKeys]: [core.List$(core.String), []],
    [_upgrade]: [core.Map, []],
    [_process]: [dart.dynamic, [core.String]]
  }),
  statics: () => ({
    _hasProperty: [core.bool, [dart.dynamic, core.String]],
    _getProperty: [dart.dynamic, [dart.dynamic, core.String]],
    _setProperty: [dart.dynamic, [dart.dynamic, core.String, dart.dynamic]],
    _getPropertyNames: [core.List, [dart.dynamic]],
    _isUnprocessed: [core.bool, [dart.dynamic]],
    _newJavaScriptObject: [dart.dynamic, []]
  }),
  names: ['_hasProperty', '_getProperty', '_setProperty', '_getPropertyNames', '_isUnprocessed', '_newJavaScriptObject']
});
const _parent = Symbol('_parent');
// /* Incoming: _JsonMap.keys (FieldElementImpl @ dart:convert), _JsonMapKeyIterable. (ConstructorElementImpl @ dart:convert) */
class _JsonMapKeyIterable extends _internal.ListIterable {
  _JsonMapKeyIterable(parent) {
    this[_parent] = parent;
    super.ListIterable();
  }
  get length() {
    return this[_parent].length;
  }
  get iterator() {
    return dart.as(dart.notNull(this[_parent][_isUpgraded]) ? this[_parent].keys[dartx.iterator] : this[_parent][_computeKeys]()[dartx.iterator], core.Iterator);
  }
  contains(key) {
    return this[_parent].containsKey(key);
  }
}
dart.setSignature(_JsonMapKeyIterable, {
  constructors: () => ({_JsonMapKeyIterable: [_JsonMapKeyIterable, [_JsonMap]]})
});
dart.defineExtensionMembers(_JsonMapKeyIterable, ['contains', 'length', 'iterator']);
// Exports:
exports.ChunkedConversionSink$ = ChunkedConversionSink$;
exports.ChunkedConversionSink = ChunkedConversionSink;
exports.ByteConversionSink = ByteConversionSink;
exports.JsonUnsupportedObjectError = JsonUnsupportedObjectError;
exports.JsonCyclicError = JsonCyclicError;
exports.StringConversionSink = StringConversionSink;
exports.ClosableStringSink = ClosableStringSink;
exports.UNICODE_REPLACEMENT_CHARACTER_RUNE = UNICODE_REPLACEMENT_CHARACTER_RUNE;
exports.UNICODE_BOM_CHARACTER_RUNE = UNICODE_BOM_CHARACTER_RUNE;
