'use strict';
let dart = require("dart/_runtime");
let core = require("dart/core");
let dartx = dart.dartx;
// /* Incoming: BenchmarkBase. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/BenchmarkBase.dart), BenchmarkBase.measure (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/BenchmarkBase.dart), result (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/BenchmarkBase.dart), DeltaBlue (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class BenchmarkBase extends core.Object {
  BenchmarkBase(name) {
    this.name = name;
  }
  run() {}
  warmup() {
    this.run();
  }
  exercise() {
    for (let i = 0; i < 10; i++) {
      this.run();
    }
  }
  setup() {}
  teardown() {}
  static measureFor(f, timeMinimum) {
    let time = 0;
    let iter = 0;
    let watch = new core.Stopwatch();
    watch.start();
    let elapsed = 0;
    while (dart.notNull(elapsed) < dart.notNull(timeMinimum)) {
      dart.dcall(f);
      elapsed = watch.elapsedMilliseconds;
      iter++;
    }
    return 1000.0 * dart.notNull(elapsed) / iter;
  }
  measure() {
    this.setup();
    BenchmarkBase.measureFor(dart.fn(() => {
      this.warmup();
    }), 100);
    let result = BenchmarkBase.measureFor(dart.fn(() => {
      this.exercise();
    }), 2000);
    this.teardown();
    return result;
  }
  report() {
    let score = this.measure();
    core.print(`${this.name}(RunTime): ${score} us.`);
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
exports.BenchmarkBase = BenchmarkBase;
