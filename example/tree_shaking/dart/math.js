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
let dartx = dart.dartx;
class Random extends core.Object {
  static new(seed) {
    if (seed === void 0) seed = null;
    return seed == null ? dart.const(new _JSRandom()) : new _Random(seed);
  }
}
dart.setSignature(Random, {
  constructors: () => ({new: [Random, [], [core.int]]})
});
const _POW2_32 = 4294967296;
class _JSRandom extends core.Object {
  _JSRandom() {
  }
}
_JSRandom[dart.implements] = () => [Random];
dart.setSignature(_JSRandom, {
  constructors: () => ({_JSRandom: [_JSRandom, []]})
});
const _lo = Symbol('_lo');
const _hi = Symbol('_hi');
const _nextState = Symbol('_nextState');
class _Random extends core.Object {
  _Random(seed) {
    this[_lo] = 0;
    this[_hi] = 0;
    let empty_seed = 0;
    if (dart.notNull(seed) < 0) {
      empty_seed = -1;
    }
    do {
      let low = dart.notNull(seed) & dart.notNull(_Random._MASK32);
      seed = ((dart.notNull(seed) - low) / dart.notNull(_POW2_32))[dartx.truncate]();
      let high = dart.notNull(seed) & dart.notNull(_Random._MASK32);
      seed = ((dart.notNull(seed) - high) / dart.notNull(_POW2_32))[dartx.truncate]();
      let tmplow = low << 21;
      let tmphigh = high << 21 | low >> 11;
      tmplow = (~low & dart.notNull(_Random._MASK32)) + tmplow;
      low = tmplow & dart.notNull(_Random._MASK32);
      high = ~high + tmphigh + ((tmplow - low) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
      tmphigh = high >> 24;
      tmplow = low >> 24 | high << 8;
      low = low ^ tmplow;
      high = high ^ tmphigh;
      tmplow = low * 265;
      low = tmplow & dart.notNull(_Random._MASK32);
      high = high * 265 + ((tmplow - low) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
      tmphigh = high >> 14;
      tmplow = low >> 14 | high << 18;
      low = low ^ tmplow;
      high = high ^ tmphigh;
      tmplow = low * 21;
      low = tmplow & dart.notNull(_Random._MASK32);
      high = high * 21 + ((tmplow - low) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
      tmphigh = high >> 28;
      tmplow = low >> 28 | high << 4;
      low = low ^ tmplow;
      high = high ^ tmphigh;
      tmplow = low << 31;
      tmphigh = high << 31 | low >> 1;
      tmplow = tmplow + low;
      low = tmplow & dart.notNull(_Random._MASK32);
      high = high + tmphigh + ((tmplow - low) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
      tmplow = dart.notNull(this[_lo]) * 1037;
      this[_lo] = tmplow & dart.notNull(_Random._MASK32);
      this[_hi] = dart.notNull(this[_hi]) * 1037 + ((tmplow - dart.notNull(this[_lo])) / 4294967296)[dartx.truncate]() & dart.notNull(_Random._MASK32);
      this[_lo] = dart.notNull(this[_lo]) ^ low;
      this[_hi] = dart.notNull(this[_hi]) ^ high;
    } while (seed != empty_seed);
    if (this[_hi] == 0 && this[_lo] == 0) {
      this[_lo] = 23063;
    }
    this[_nextState]();
    this[_nextState]();
    this[_nextState]();
    this[_nextState]();
  }
  [_nextState]() {
    let tmpHi = 4294901760 * dart.notNull(this[_lo]);
    let tmpHiLo = tmpHi & dart.notNull(_Random._MASK32);
    let tmpHiHi = tmpHi - tmpHiLo;
    let tmpLo = 55905 * dart.notNull(this[_lo]);
    let tmpLoLo = tmpLo & dart.notNull(_Random._MASK32);
    let tmpLoHi = tmpLo - tmpLoLo;
    let newLo = tmpLoLo + tmpHiLo + dart.notNull(this[_hi]);
    this[_lo] = newLo & dart.notNull(_Random._MASK32);
    let newLoHi = newLo - dart.notNull(this[_lo]);
    this[_hi] = ((tmpLoHi + tmpHiHi + newLoHi) / dart.notNull(_POW2_32))[dartx.truncate]() & dart.notNull(_Random._MASK32);
    dart.assert(dart.notNull(this[_lo]) < dart.notNull(_POW2_32));
    dart.assert(dart.notNull(this[_hi]) < dart.notNull(_POW2_32));
  }
}
_Random[dart.implements] = () => [Random];
dart.setSignature(_Random, {
  constructors: () => ({_Random: [_Random, [core.int]]}),
  methods: () => ({[_nextState]: [dart.void, []]})
});
_Random._MASK32 = 4294967295;
// Exports:
exports.Random = Random;
