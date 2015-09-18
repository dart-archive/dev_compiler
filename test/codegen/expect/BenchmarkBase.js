dart_library.library('BenchmarkBase', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class Expect extends core.Object {
    static equals(expected, actual) {
      if (!dart.equals(expected, actual)) {
        dart.throw(`Values not equal: ${expected} vs ${actual}`);
      }
    }
    static listEquals(expected, actual) {
      if (expected[dartx.length] != actual[dartx.length]) {
        dart.throw(`Lists have different lengths: ${expected[dartx.length]} vs ${actual[dartx.length]}`);
      }
      for (let i = 0; dart.notNull(i) < dart.notNull(actual[dartx.length]); i = dart.notNull(i) + 1) {
        dart.dcall(Expect.equals, expected[dartx.get](i), actual[dartx.get](i));
      }
    }
    fail(message) {
      dart.throw(message);
    }
  }
  dart.setSignature(Expect, {
    methods: () => ({fail: [dart.dynamic, [dart.dynamic]]}),
    statics: () => ({
      equals: [dart.void, [dart.dynamic, dart.dynamic]],
      listEquals: [dart.void, [core.List, core.List]]
    }),
    names: ['equals', 'listEquals']
  });
  class BenchmarkBase extends core.Object {
    BenchmarkBase(name) {
      this.name = name;
    }
    run() {}
    warmup() {
      dart.dcall(this.run);
    }
    exercise() {
      for (let i = 0; dart.notNull(i) < 10; i = dart.notNull(i) + 1) {
        dart.dcall(this.run);
      }
    }
    setup() {}
    teardown() {}
    static measureFor(f, timeMinimum) {
      let time = 0;
      let iter = 0;
      let watch = new core.Stopwatch();
      dart.dcall(watch.start);
      let elapsed = 0;
      while (dart.notNull(elapsed) < dart.notNull(timeMinimum)) {
        dart.dcall(f);
        elapsed = watch.elapsedMilliseconds;
        iter = dart.notNull(iter) + 1;
      }
      return 1000.0 * dart.notNull(elapsed) / dart.notNull(iter);
    }
    measure() {
      dart.dcall(this.setup);
      dart.dcall(BenchmarkBase.measureFor, dart.fn(() => {
        dart.dcall(this.warmup);
      }), 100);
      let result = dart.dcall(BenchmarkBase.measureFor, dart.fn(() => {
        dart.dcall(this.exercise);
      }), 2000);
      dart.dcall(this.teardown);
      return result;
    }
    report() {
      let score = dart.dcall(this.measure);
      dart.dcall(core.print, `${this.name}(RunTime): ${score} us.`);
    }
  }
  dart.setSignature(BenchmarkBase, {
    constructors: () => ({BenchmarkBase: [BenchmarkBase, [core.String]]}),
    methods: () => ({
      run: [dart.void, []],
      warmup: [dart.void, []],
      exercise: [dart.void, []],
      setup: [dart.void, []],
      teardown: [dart.void, []],
      measure: [core.double, []],
      report: [dart.void, []]
    }),
    statics: () => ({measureFor: [core.double, [core.Function, core.int]]}),
    names: ['measureFor']
  });
  // Exports:
  exports.Expect = Expect;
  exports.BenchmarkBase = BenchmarkBase;
});
