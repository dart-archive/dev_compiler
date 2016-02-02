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
let async = require("./async");
let dartx = dart.dartx;
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
class ByteConversionSink extends ChunkedConversionSink$(core.List$(core.int)) {
  ByteConversionSink() {
    super.ChunkedConversionSink();
  }
}
dart.setSignature(ByteConversionSink, {
  constructors: () => ({ByteConversionSink: [ByteConversionSink, []]})
});
class ByteConversionSinkBase extends ByteConversionSink {
  ByteConversionSinkBase() {
    super.ByteConversionSink();
  }
}
const _sink = Symbol('_sink');
class _ByteAdapterSink extends ByteConversionSinkBase {
  _ByteAdapterSink(sink) {
    this[_sink] = sink;
  }
  add(chunk) {
    return this[_sink].add(chunk);
  }
  close() {
    return this[_sink].close();
  }
}
dart.setSignature(_ByteAdapterSink, {
  constructors: () => ({_ByteAdapterSink: [_ByteAdapterSink, [core.Sink$(core.List$(core.int))]]}),
  methods: () => ({
    add: [dart.void, [core.List$(core.int)]],
    close: [dart.void, []]
  })
});
const _callback = Symbol('_callback');
const _buffer = Symbol('_buffer');
const _bufferIndex = Symbol('_bufferIndex');
class _ByteCallbackSink extends ByteConversionSinkBase {
  _ByteCallbackSink(callback) {
    this[_callback] = callback;
  }
  add(chunk) {
    let freeCount = dart.notNull(this[_buffer][dartx.length]) - dart.notNull(this[_bufferIndex]);
    if (dart.notNull(chunk[dartx.length]) > freeCount) {
      let oldLength = this[_buffer][dartx.length];
      let newLength = dart.notNull(_ByteCallbackSink._roundToPowerOf2(dart.notNull(chunk[dartx.length]) + dart.notNull(oldLength))) * 2;
      let grown = typed_data.Uint8List.new(newLength);
      grown[dartx.setRange](0, this[_buffer][dartx.length], this[_buffer]);
      this[_buffer] = grown;
    }
    this[_buffer][dartx.setRange](this[_bufferIndex], dart.notNull(this[_bufferIndex]) + dart.notNull(chunk[dartx.length]), chunk);
    this[_bufferIndex] = dart.notNull(this[_bufferIndex]) + dart.notNull(chunk[dartx.length]);
  }
  close() {
    this[_callback](this[_buffer][dartx.sublist](0, this[_bufferIndex]));
  }
}
dart.setSignature(_ByteCallbackSink, {
  constructors: () => ({_ByteCallbackSink: [_ByteCallbackSink, [dart.functionType(dart.void, [core.List$(core.int)])]]}),
  methods: () => ({
    add: [dart.void, [core.Iterable$(core.int)]],
    close: [dart.void, []]
  })
});
const _ChunkedConversionCallback$ = dart.generic(function(T) {
  const _ChunkedConversionCallback = dart.typedef('_ChunkedConversionCallback', () => dart.functionType(dart.void, [T]));
  return _ChunkedConversionCallback;
});
let _ChunkedConversionCallback = _ChunkedConversionCallback$();
const _accumulated = Symbol('_accumulated');
const _SimpleCallbackSink$ = dart.generic(function(T) {
  class _SimpleCallbackSink extends ChunkedConversionSink$(T) {
    _SimpleCallbackSink(callback) {
      this[_callback] = callback;
      super.ChunkedConversionSink();
    }
    add(chunk) {
      dart.as(chunk, T);
      this[_accumulated][dartx.add](chunk);
    }
    close() {
      this[_callback](this[_accumulated]);
    }
  }
  dart.setSignature(_SimpleCallbackSink, {
    constructors: () => ({_SimpleCallbackSink: [_SimpleCallbackSink$(T), [_ChunkedConversionCallback$(core.List$(T))]]}),
    methods: () => ({
      add: [dart.void, [T]],
      close: [dart.void, []]
    })
  });
  return _SimpleCallbackSink;
});
let _SimpleCallbackSink = _SimpleCallbackSink$();
const Codec$ = dart.generic(function(S, T) {
  class Codec extends core.Object {
    Codec() {
    }
    encode(input) {
      dart.as(input, S);
      return this.encoder.convert(input);
    }
  }
  dart.setSignature(Codec, {
    constructors: () => ({Codec: [Codec$(S, T), []]}),
    methods: () => ({encode: [T, [S]]})
  });
  return Codec;
});
let Codec = Codec$();
const Converter$ = dart.generic(function(S, T) {
  class Converter extends core.Object {
    Converter() {
    }
    bind(source) {
      dart.as(source, async.Stream$(S));
      return async.Stream$(T).eventTransformed(source, dart.fn((sink => new _ConverterStreamEventSink(this, sink)).bind(this), _ConverterStreamEventSink, [async.EventSink]));
    }
  }
  Converter[dart.implements] = () => [async.StreamTransformer$(S, T)];
  dart.setSignature(Converter, {
    constructors: () => ({Converter: [Converter$(S, T), []]}),
    methods: () => ({bind: [async.Stream$(T), [async.Stream$(S)]]})
  });
  return Converter;
});
let Converter = Converter$();
class Encoding extends Codec$(core.String, core.List$(core.int)) {
  Encoding() {
    super.Codec();
  }
}
dart.setSignature(Encoding, {
  constructors: () => ({Encoding: [Encoding, []]})
});
const _reviver = Symbol('_reviver');
const _toEncodable = Symbol('_toEncodable');
class JsonCodec extends Codec$(core.Object, core.String) {
  JsonCodec({reviver = null, toEncodable = null} = {}) {
    this[_reviver] = reviver;
    this[_toEncodable] = toEncodable;
    super.Codec();
  }
  encode(value, {toEncodable = null} = {}) {
    if (toEncodable == null) toEncodable = this[_toEncodable];
    if (toEncodable == null) return this.encoder.convert(value);
    return new JsonEncoder(dart.as(toEncodable, __CastType0)).convert(value);
  }
}
dart.setSignature(JsonCodec, {
  constructors: () => ({JsonCodec: [JsonCodec, [], {reviver: dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]), toEncodable: dart.functionType(dart.dynamic, [dart.dynamic])}]}),
  methods: () => ({encode: [core.String, [core.Object], {toEncodable: dart.functionType(dart.dynamic, [dart.dynamic])}]})
});
const JSON = dart.const(new JsonCodec());
const _Reviver = dart.typedef('_Reviver', () => dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic]));
const _ToEncodable = dart.typedef('_ToEncodable', () => dart.functionType(dart.dynamic, [dart.dynamic]));
class JsonEncoder extends Converter$(core.Object, core.String) {
  JsonEncoder(toEncodable) {
    if (toEncodable === void 0) toEncodable = null;
    this.indent = null;
    this[_toEncodable] = toEncodable;
    super.Converter();
  }
  convert(object) {
    return _JsonStringStringifier.stringify(object, dart.as(this[_toEncodable], __CastType2), this.indent);
  }
  bind(stream) {
    return super.bind(stream);
  }
}
dart.setSignature(JsonEncoder, {
  constructors: () => ({JsonEncoder: [JsonEncoder, [], [dart.functionType(core.Object, [core.Object])]]}),
  methods: () => ({
    convert: [core.String, [core.Object]],
    bind: [async.Stream$(core.String), [async.Stream$(core.Object)]]
  })
});
class JsonDecoder extends Converter$(core.String, core.Object) {
  JsonDecoder(reviver) {
    if (reviver === void 0) reviver = null;
    this[_reviver] = reviver;
    super.Converter();
  }
  convert(input) {
    return _parseJson(input, this[_reviver]);
  }
  bind(stream) {
    return super.bind(stream);
  }
}
dart.setSignature(JsonDecoder, {
  constructors: () => ({JsonDecoder: [JsonDecoder, [], [dart.functionType(dart.dynamic, [dart.dynamic, dart.dynamic])]]}),
  methods: () => ({
    convert: [dart.dynamic, [core.String]],
    bind: [async.Stream$(core.Object), [async.Stream$(core.String)]]
  })
});
const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.Object, [core.Object]));
const __CastType2 = dart.typedef('__CastType2', () => dart.functionType(dart.dynamic, [dart.dynamic]));
const __CastType4 = dart.typedef('__CastType4', () => dart.functionType(dart.dynamic, [core.Object]));
class StringConversionSink extends ChunkedConversionSink$(core.String) {
  StringConversionSink() {
    super.ChunkedConversionSink();
  }
}
dart.setSignature(StringConversionSink, {
  constructors: () => ({StringConversionSink: [StringConversionSink, []]})
});
class ClosableStringSink extends core.StringSink {}
const _StringSinkCloseCallback = dart.typedef('_StringSinkCloseCallback', () => dart.functionType(dart.void, []));
class _ClosableStringSink extends core.Object {
  _ClosableStringSink(sink, callback) {
    this[_sink] = sink;
    this[_callback] = callback;
  }
  close() {
    return this[_callback]();
  }
  writeCharCode(charCode) {
    return this[_sink].writeCharCode(charCode);
  }
  write(o) {
    return this[_sink].write(o);
  }
  writeAll(objects, separator) {
    if (separator === void 0) separator = "";
    return this[_sink].writeAll(objects, separator);
  }
}
_ClosableStringSink[dart.implements] = () => [ClosableStringSink];
dart.setSignature(_ClosableStringSink, {
  constructors: () => ({_ClosableStringSink: [_ClosableStringSink, [core.StringSink, _StringSinkCloseCallback]]}),
  methods: () => ({
    close: [dart.void, []],
    writeCharCode: [dart.void, [core.int]],
    write: [dart.void, [core.Object]],
    writeAll: [dart.void, [core.Iterable], [core.String]]
  })
});
class StringConversionSinkMixin extends core.Object {
  add(str) {
    return this.addSlice(str, 0, str[dartx.length], false);
  }
}
StringConversionSinkMixin[dart.implements] = () => [StringConversionSink];
dart.setSignature(StringConversionSinkMixin, {
  methods: () => ({add: [dart.void, [core.String]]})
});
class StringConversionSinkBase extends StringConversionSinkMixin {}
const _stringSink = Symbol('_stringSink');
class _StringSinkConversionSink extends StringConversionSinkBase {
  _StringSinkConversionSink(stringSink) {
    this[_stringSink] = stringSink;
  }
  close() {}
  add(str) {
    return this[_stringSink].write(str);
  }
}
dart.setSignature(_StringSinkConversionSink, {
  constructors: () => ({_StringSinkConversionSink: [_StringSinkConversionSink, [core.StringSink]]}),
  methods: () => ({close: [dart.void, []]})
});
class _StringCallbackSink extends _StringSinkConversionSink {
  _StringCallbackSink(callback) {
    this[_callback] = callback;
    super._StringSinkConversionSink(new core.StringBuffer());
  }
  close() {
    let buffer = dart.as(this[_stringSink], core.StringBuffer);
    let accumulated = dart.toString(buffer);
    buffer.clear();
    this[_callback](accumulated);
  }
}
dart.setSignature(_StringCallbackSink, {
  constructors: () => ({_StringCallbackSink: [_StringCallbackSink, [_ChunkedConversionCallback$(core.String)]]})
});
class _StringAdapterSink extends StringConversionSinkBase {
  _StringAdapterSink(sink) {
    this[_sink] = sink;
  }
  add(str) {
    return this[_sink].add(str);
  }
  close() {
    return this[_sink].close();
  }
}
dart.setSignature(_StringAdapterSink, {
  constructors: () => ({_StringAdapterSink: [_StringAdapterSink, [core.Sink$(core.String)]]}),
  methods: () => ({close: [dart.void, []]})
});
const UNICODE_REPLACEMENT_CHARACTER_RUNE = 65533;
const UNICODE_BOM_CHARACTER_RUNE = 65279;
const _allowMalformed = Symbol('_allowMalformed');
class Utf8Codec extends Encoding {
  Utf8Codec({allowMalformed = false} = {}) {
    this[_allowMalformed] = allowMalformed;
    super.Encoding();
  }
  decode(codeUnits, {allowMalformed = null} = {}) {
    if (allowMalformed == null) allowMalformed = this[_allowMalformed];
    return new Utf8Decoder({allowMalformed: allowMalformed}).convert(codeUnits);
  }
  get decoder() {
    return new Utf8Decoder({allowMalformed: this[_allowMalformed]});
  }
}
dart.setSignature(Utf8Codec, {
  constructors: () => ({Utf8Codec: [Utf8Codec, [], {allowMalformed: core.bool}]}),
  methods: () => ({decode: [core.String, [core.List$(core.int)], {allowMalformed: core.bool}]})
});
const UTF8 = dart.const(new Utf8Codec());
const _fillBuffer = Symbol('_fillBuffer');
const _writeSurrogate = Symbol('_writeSurrogate');
class Utf8Encoder extends Converter$(core.String, core.List$(core.int)) {
  Utf8Encoder() {
    super.Converter();
  }
  convert(string, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = null;
    let stringLength = string[dartx.length];
    core.RangeError.checkValidRange(start, end, stringLength);
    if (end == null) end = stringLength;
    let length = dart.notNull(end) - dart.notNull(start);
    if (length == 0) return typed_data.Uint8List.new(0);
    let encoder = new _Utf8Encoder.withBufferSize(length * 3);
    let endPosition = encoder[_fillBuffer](string, start, end);
    dart.assert(dart.notNull(endPosition) >= dart.notNull(end) - 1);
    if (endPosition != end) {
      let lastCodeUnit = string[dartx.codeUnitAt](dart.notNull(end) - 1);
      dart.assert(_isLeadSurrogate(lastCodeUnit));
      let wasCombined = encoder[_writeSurrogate](lastCodeUnit, 0);
      dart.assert(!dart.notNull(wasCombined));
    }
    return encoder[_buffer][dartx.sublist](0, encoder[_bufferIndex]);
  }
  bind(stream) {
    return super.bind(stream);
  }
}
dart.setSignature(Utf8Encoder, {
  constructors: () => ({Utf8Encoder: [Utf8Encoder, []]}),
  methods: () => ({
    convert: [core.List$(core.int), [core.String], [core.int, core.int]],
    bind: [async.Stream$(core.List$(core.int)), [async.Stream$(core.String)]]
  })
});
class Utf8Decoder extends Converter$(core.List$(core.int), core.String) {
  Utf8Decoder({allowMalformed = false} = {}) {
    this[_allowMalformed] = allowMalformed;
    super.Converter();
  }
  convert(codeUnits, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = null;
    let length = codeUnits[dartx.length];
    core.RangeError.checkValidRange(start, end, length);
    if (end == null) end = length;
    let buffer = new core.StringBuffer();
    let decoder = new _Utf8Decoder(buffer, this[_allowMalformed]);
    decoder.convert(codeUnits, start, end);
    decoder.close();
    return dart.toString(buffer);
  }
  bind(stream) {
    return super.bind(stream);
  }
}
dart.setSignature(Utf8Decoder, {
  constructors: () => ({Utf8Decoder: [Utf8Decoder, [], {allowMalformed: core.bool}]}),
  methods: () => ({
    convert: [core.String, [core.List$(core.int)], [core.int, core.int]],
    bind: [async.Stream$(core.String), [async.Stream$(core.List$(core.int))]]
  })
});
const _ONE_BYTE_LIMIT = 127;
const _TWO_BYTE_LIMIT = 2047;
const _THREE_BYTE_LIMIT = 65535;
const _FOUR_BYTE_LIMIT = 1114111;
const _isFirstCharacter = Symbol('_isFirstCharacter');
const _value = Symbol('_value');
const _expectedUnits = Symbol('_expectedUnits');
const _extraUnits = Symbol('_extraUnits');
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
// Exports:
exports.ChunkedConversionSink$ = ChunkedConversionSink$;
exports.ChunkedConversionSink = ChunkedConversionSink;
exports.ByteConversionSink = ByteConversionSink;
exports.ByteConversionSinkBase = ByteConversionSinkBase;
exports.Codec$ = Codec$;
exports.Codec = Codec;
exports.Converter$ = Converter$;
exports.Converter = Converter;
exports.Encoding = Encoding;
exports.JsonCodec = JsonCodec;
exports.JSON = JSON;
exports.JsonEncoder = JsonEncoder;
exports.JsonDecoder = JsonDecoder;
exports.StringConversionSink = StringConversionSink;
exports.ClosableStringSink = ClosableStringSink;
exports.StringConversionSinkMixin = StringConversionSinkMixin;
exports.StringConversionSinkBase = StringConversionSinkBase;
exports.UNICODE_REPLACEMENT_CHARACTER_RUNE = UNICODE_REPLACEMENT_CHARACTER_RUNE;
exports.UNICODE_BOM_CHARACTER_RUNE = UNICODE_BOM_CHARACTER_RUNE;
exports.Utf8Codec = Utf8Codec;
exports.UTF8 = UTF8;
exports.Utf8Encoder = Utf8Encoder;
exports.Utf8Decoder = Utf8Decoder;
