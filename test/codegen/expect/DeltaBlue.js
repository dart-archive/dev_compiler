dart_library.library('DeltaBlue', null, /* Imports */[
  "dart_runtime/dart",
  'BenchmarkBase',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, BenchmarkBase, core) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    dart.dcall(new DeltaBlue().report);
  }
  dart.fn(main);
  class DeltaBlue extends BenchmarkBase.BenchmarkBase {
    DeltaBlue() {
      super.BenchmarkBase("DeltaBlue");
    }
    run() {
      dart.dcall(chainTest, 100);
      dart.dcall(projectionTest, 100);
    }
  }
  dart.setSignature(DeltaBlue, {
    constructors: () => ({DeltaBlue: [DeltaBlue, []]})
  });
  class Strength extends core.Object {
    Strength(value, name) {
      this.value = value;
      this.name = name;
    }
    nextWeaker() {
      return dart.const(dart.list([dart.as(STRONG_PREFERRED, Strength), dart.as(PREFERRED, Strength), dart.as(STRONG_DEFAULT, Strength), dart.as(NORMAL, Strength), dart.as(WEAK_DEFAULT, Strength), dart.as(WEAKEST, Strength)], Strength))[dartx.get](this.value);
    }
    static stronger(s1, s2) {
      return dart.notNull(s1.value) < dart.notNull(s2.value);
    }
    static weaker(s1, s2) {
      return dart.notNull(s1.value) > dart.notNull(s2.value);
    }
    static weakest(s1, s2) {
      return dart.notNull(dart.dcall(Strength.weaker, s1, s2)) ? s1 : s2;
    }
    static strongest(s1, s2) {
      return dart.notNull(dart.dcall(Strength.stronger, s1, s2)) ? s1 : s2;
    }
  }
  dart.setSignature(Strength, {
    constructors: () => ({Strength: [Strength, [core.int, core.String]]}),
    methods: () => ({nextWeaker: [Strength, []]}),
    statics: () => ({
      stronger: [core.bool, [Strength, Strength]],
      weaker: [core.bool, [Strength, Strength]],
      weakest: [Strength, [Strength, Strength]],
      strongest: [Strength, [Strength, Strength]]
    }),
    names: ['stronger', 'weaker', 'weakest', 'strongest']
  });
  let REQUIRED = dart.const(new Strength(0, "required"));
  let STRONG_PREFERRED = dart.const(new Strength(1, "strongPreferred"));
  let PREFERRED = dart.const(new Strength(2, "preferred"));
  let STRONG_DEFAULT = dart.const(new Strength(3, "strongDefault"));
  let NORMAL = dart.const(new Strength(4, "normal"));
  let WEAK_DEFAULT = dart.const(new Strength(5, "weakDefault"));
  let WEAKEST = dart.const(new Strength(6, "weakest"));
  class Constraint extends core.Object {
    Constraint(strength) {
      this.strength = strength;
    }
    addConstraint() {
      dart.dcall(this.addToGraph);
      dart.dcall(exports.planner.incrementalAdd, this);
    }
    satisfy(mark) {
      dart.dcall(this.chooseMethod, mark);
      if (!dart.notNull(dart.dcall(this.isSatisfied))) {
        if (dart.equals(this.strength, REQUIRED)) {
          dart.dcall(core.print, "Could not satisfy a required constraint!");
        }
        return null;
      }
      dart.dcall(this.markInputs, mark);
      let out = dart.dcall(this.output);
      let overridden = out.determinedBy;
      if (overridden != null)
        dart.dcall(overridden.markUnsatisfied);
      out.determinedBy = this;
      if (!dart.notNull(dart.dcall(exports.planner.addPropagate, this, mark)))
        dart.dcall(core.print, "Cycle encountered");
      out.mark = dart.as(mark, core.int);
      return overridden;
    }
    destroyConstraint() {
      if (dart.notNull(dart.dcall(this.isSatisfied)))
        dart.dcall(exports.planner.incrementalRemove, this);
      dart.dcall(this.removeFromGraph);
    }
    isInput() {
      return false;
    }
  }
  dart.setSignature(Constraint, {
    constructors: () => ({Constraint: [Constraint, [Strength]]}),
    methods: () => ({
      addConstraint: [dart.void, []],
      satisfy: [Constraint, [dart.dynamic]],
      destroyConstraint: [dart.void, []],
      isInput: [core.bool, []]
    })
  });
  class UnaryConstraint extends Constraint {
    UnaryConstraint(myOutput, strength) {
      this.myOutput = myOutput;
      this.satisfied = false;
      super.Constraint(strength);
      dart.dcall(this.addConstraint);
    }
    addToGraph() {
      dart.dcall(this.myOutput.addConstraint, this);
      this.satisfied = false;
    }
    chooseMethod(mark) {
      this.satisfied = this.myOutput.mark != mark && dart.notNull(dart.dcall(Strength.stronger, this.strength, this.myOutput.walkStrength));
    }
    isSatisfied() {
      return this.satisfied;
    }
    markInputs(mark) {}
    output() {
      return this.myOutput;
    }
    recalculate() {
      this.myOutput.walkStrength = this.strength;
      this.myOutput.stay = !dart.notNull(dart.dcall(this.isInput));
      if (dart.notNull(this.myOutput.stay))
        dart.dcall(this.execute);
    }
    markUnsatisfied() {
      this.satisfied = false;
    }
    inputsKnown(mark) {
      return true;
    }
    removeFromGraph() {
      if (this.myOutput != null)
        dart.dcall(this.myOutput.removeConstraint, this);
      this.satisfied = false;
    }
  }
  dart.setSignature(UnaryConstraint, {
    constructors: () => ({UnaryConstraint: [UnaryConstraint, [Variable, Strength]]}),
    methods: () => ({
      addToGraph: [dart.void, []],
      chooseMethod: [dart.void, [core.int]],
      isSatisfied: [core.bool, []],
      markInputs: [dart.void, [core.int]],
      output: [Variable, []],
      recalculate: [dart.void, []],
      markUnsatisfied: [dart.void, []],
      inputsKnown: [core.bool, [core.int]],
      removeFromGraph: [dart.void, []]
    })
  });
  class StayConstraint extends UnaryConstraint {
    StayConstraint(v, str) {
      super.UnaryConstraint(v, str);
    }
    execute() {}
  }
  dart.setSignature(StayConstraint, {
    constructors: () => ({StayConstraint: [StayConstraint, [Variable, Strength]]}),
    methods: () => ({execute: [dart.void, []]})
  });
  class EditConstraint extends UnaryConstraint {
    EditConstraint(v, str) {
      super.UnaryConstraint(v, str);
    }
    isInput() {
      return true;
    }
    execute() {}
  }
  dart.setSignature(EditConstraint, {
    constructors: () => ({EditConstraint: [EditConstraint, [Variable, Strength]]}),
    methods: () => ({execute: [dart.void, []]})
  });
  let NONE = 1;
  let FORWARD = 2;
  let BACKWARD = 0;
  class BinaryConstraint extends Constraint {
    BinaryConstraint(v1, v2, strength) {
      this.v1 = v1;
      this.v2 = v2;
      this.direction = NONE;
      super.Constraint(strength);
      dart.dcall(this.addConstraint);
    }
    chooseMethod(mark) {
      if (this.v1.mark == mark) {
        this.direction = this.v2.mark != mark && dart.notNull(dart.dcall(Strength.stronger, this.strength, this.v2.walkStrength)) ? FORWARD : NONE;
      }
      if (this.v2.mark == mark) {
        this.direction = this.v1.mark != mark && dart.notNull(dart.dcall(Strength.stronger, this.strength, this.v1.walkStrength)) ? BACKWARD : NONE;
      }
      if (dart.notNull(dart.dcall(Strength.weaker, this.v1.walkStrength, this.v2.walkStrength))) {
        this.direction = dart.notNull(dart.dcall(Strength.stronger, this.strength, this.v1.walkStrength)) ? BACKWARD : NONE;
      } else {
        this.direction = dart.notNull(dart.dcall(Strength.stronger, this.strength, this.v2.walkStrength)) ? FORWARD : BACKWARD;
      }
    }
    addToGraph() {
      dart.dcall(this.v1.addConstraint, this);
      dart.dcall(this.v2.addConstraint, this);
      this.direction = NONE;
    }
    isSatisfied() {
      return this.direction != NONE;
    }
    markInputs(mark) {
      dart.dcall(this.input).mark = mark;
    }
    input() {
      return this.direction == FORWARD ? this.v1 : this.v2;
    }
    output() {
      return this.direction == FORWARD ? this.v2 : this.v1;
    }
    recalculate() {
      let ihn = dart.dcall(this.input), out = dart.dcall(this.output);
      out.walkStrength = dart.dcall(Strength.weakest, this.strength, ihn.walkStrength);
      out.stay = ihn.stay;
      if (dart.notNull(out.stay))
        dart.dcall(this.execute);
    }
    markUnsatisfied() {
      this.direction = NONE;
    }
    inputsKnown(mark) {
      let i = dart.dcall(this.input);
      return i.mark == mark || dart.notNull(i.stay) || i.determinedBy == null;
    }
    removeFromGraph() {
      if (this.v1 != null)
        dart.dcall(this.v1.removeConstraint, this);
      if (this.v2 != null)
        dart.dcall(this.v2.removeConstraint, this);
      this.direction = NONE;
    }
  }
  dart.setSignature(BinaryConstraint, {
    constructors: () => ({BinaryConstraint: [BinaryConstraint, [Variable, Variable, Strength]]}),
    methods: () => ({
      chooseMethod: [dart.void, [core.int]],
      addToGraph: [dart.void, []],
      isSatisfied: [core.bool, []],
      markInputs: [dart.void, [core.int]],
      input: [Variable, []],
      output: [Variable, []],
      recalculate: [dart.void, []],
      markUnsatisfied: [dart.void, []],
      inputsKnown: [core.bool, [core.int]],
      removeFromGraph: [dart.void, []]
    })
  });
  class ScaleConstraint extends BinaryConstraint {
    ScaleConstraint(src, scale, offset, dest, strength) {
      this.scale = scale;
      this.offset = offset;
      super.BinaryConstraint(src, dest, strength);
    }
    addToGraph() {
      dart.dcall(super.addToGraph);
      dart.dcall(this.scale.addConstraint, this);
      dart.dcall(this.offset.addConstraint, this);
    }
    removeFromGraph() {
      dart.dcall(super.removeFromGraph);
      if (this.scale != null)
        dart.dcall(this.scale.removeConstraint, this);
      if (this.offset != null)
        dart.dcall(this.offset.removeConstraint, this);
    }
    markInputs(mark) {
      dart.dcall(super.markInputs, mark);
      this.scale.mark = this.offset.mark = mark;
    }
    execute() {
      if (this.direction == FORWARD) {
        this.v2.value = dart.notNull(this.v1.value) * dart.notNull(this.scale.value) + dart.notNull(this.offset.value);
      } else {
        this.v1.value = ((dart.notNull(this.v2.value) - dart.notNull(this.offset.value)) / dart.notNull(this.scale.value))[dartx.truncate]();
      }
    }
    recalculate() {
      let ihn = dart.dcall(this.input), out = dart.dcall(this.output);
      out.walkStrength = dart.dcall(Strength.weakest, this.strength, ihn.walkStrength);
      out.stay = dart.notNull(ihn.stay) && dart.notNull(this.scale.stay) && dart.notNull(this.offset.stay);
      if (dart.notNull(out.stay))
        dart.dcall(this.execute);
    }
  }
  dart.setSignature(ScaleConstraint, {
    constructors: () => ({ScaleConstraint: [ScaleConstraint, [Variable, Variable, Variable, Variable, Strength]]}),
    methods: () => ({execute: [dart.void, []]})
  });
  class EqualityConstraint extends BinaryConstraint {
    EqualityConstraint(v1, v2, strength) {
      super.BinaryConstraint(v1, v2, strength);
    }
    execute() {
      dart.dcall(this.output).value = dart.dcall(this.input).value;
    }
  }
  dart.setSignature(EqualityConstraint, {
    constructors: () => ({EqualityConstraint: [EqualityConstraint, [Variable, Variable, Strength]]}),
    methods: () => ({execute: [dart.void, []]})
  });
  class Variable extends core.Object {
    Variable(name, value) {
      this.constraints = dart.list([], Constraint);
      this.walkStrength = dart.as(WEAKEST, Strength);
      this.name = name;
      this.value = value;
      this.determinedBy = null;
      this.mark = 0;
      this.stay = true;
    }
    addConstraint(c) {
      dart.dcall(this.constraints[dartx.add], c);
    }
    removeConstraint(c) {
      dart.dcall(this.constraints[dartx.remove], c);
      if (dart.equals(this.determinedBy, c))
        this.determinedBy = null;
    }
  }
  dart.setSignature(Variable, {
    constructors: () => ({Variable: [Variable, [core.String, core.int]]}),
    methods: () => ({
      addConstraint: [dart.void, [Constraint]],
      removeConstraint: [dart.void, [Constraint]]
    })
  });
  class Planner extends core.Object {
    Planner() {
      this.currentMark = 0;
    }
    incrementalAdd(c) {
      let mark = dart.dcall(this.newMark);
      for (let overridden = dart.dcall(c.satisfy, mark); overridden != null; overridden = dart.dcall(overridden.satisfy, mark))
        ;
    }
    incrementalRemove(c) {
      let out = dart.dcall(c.output);
      dart.dcall(c.markUnsatisfied);
      dart.dcall(c.removeFromGraph);
      let unsatisfied = dart.dcall(this.removePropagateFrom, out);
      let strength = dart.as(REQUIRED, Strength);
      do {
        for (let i = 0; dart.notNull(i) < dart.notNull(unsatisfied[dartx.length]); i = dart.notNull(i) + 1) {
          let u = unsatisfied[dartx.get](i);
          if (dart.equals(u.strength, strength))
            dart.dcall(this.incrementalAdd, u);
        }
        strength = dart.dcall(strength.nextWeaker);
      } while (!dart.equals(strength, WEAKEST));
    }
    newMark() {
      return this.currentMark = dart.notNull(this.currentMark) + 1;
    }
    makePlan(sources) {
      let mark = dart.dcall(this.newMark);
      let plan = new Plan();
      let todo = sources;
      while (dart.notNull(todo[dartx.length]) > 0) {
        let c = dart.dcall(todo[dartx.removeLast]);
        if (dart.dcall(c.output).mark != mark && dart.notNull(dart.dcall(c.inputsKnown, mark))) {
          dart.dcall(plan.addConstraint, c);
          dart.dcall(c.output).mark = mark;
          dart.dcall(this.addConstraintsConsumingTo, dart.dcall(c.output), todo);
        }
      }
      return plan;
    }
    extractPlanFromConstraints(constraints) {
      let sources = dart.list([], Constraint);
      for (let i = 0; dart.notNull(i) < dart.notNull(constraints[dartx.length]); i = dart.notNull(i) + 1) {
        let c = constraints[dartx.get](i);
        if (dart.notNull(dart.dcall(c.isInput)) && dart.notNull(dart.dcall(c.isSatisfied)))
          dart.dcall(sources[dartx.add], c);
      }
      return dart.dcall(this.makePlan, sources);
    }
    addPropagate(c, mark) {
      let todo = dart.list([c], Constraint);
      while (dart.notNull(todo[dartx.length]) > 0) {
        let d = dart.dcall(todo[dartx.removeLast]);
        if (dart.dcall(d.output).mark == mark) {
          dart.dcall(this.incrementalRemove, c);
          return false;
        }
        dart.dcall(d.recalculate);
        dart.dcall(this.addConstraintsConsumingTo, dart.dcall(d.output), todo);
      }
      return true;
    }
    removePropagateFrom(out) {
      out.determinedBy = null;
      out.walkStrength = dart.as(WEAKEST, Strength);
      out.stay = true;
      let unsatisfied = dart.list([], Constraint);
      let todo = dart.list([out], Variable);
      while (dart.notNull(todo[dartx.length]) > 0) {
        let v = dart.dcall(todo[dartx.removeLast]);
        for (let i = 0; dart.notNull(i) < dart.notNull(v.constraints[dartx.length]); i = dart.notNull(i) + 1) {
          let c = v.constraints[dartx.get](i);
          if (!dart.notNull(dart.dcall(c.isSatisfied)))
            dart.dcall(unsatisfied[dartx.add], c);
        }
        let determining = v.determinedBy;
        for (let i = 0; dart.notNull(i) < dart.notNull(v.constraints[dartx.length]); i = dart.notNull(i) + 1) {
          let next = v.constraints[dartx.get](i);
          if (!dart.equals(next, determining) && dart.notNull(dart.dcall(next.isSatisfied))) {
            dart.dcall(next.recalculate);
            dart.dcall(todo[dartx.add], dart.dcall(next.output));
          }
        }
      }
      return unsatisfied;
    }
    addConstraintsConsumingTo(v, coll) {
      let determining = v.determinedBy;
      for (let i = 0; dart.notNull(i) < dart.notNull(v.constraints[dartx.length]); i = dart.notNull(i) + 1) {
        let c = v.constraints[dartx.get](i);
        if (!dart.equals(c, determining) && dart.notNull(dart.dcall(c.isSatisfied)))
          dart.dcall(coll[dartx.add], c);
      }
    }
  }
  dart.setSignature(Planner, {
    methods: () => ({
      incrementalAdd: [dart.void, [Constraint]],
      incrementalRemove: [dart.void, [Constraint]],
      newMark: [core.int, []],
      makePlan: [Plan, [core.List$(Constraint)]],
      extractPlanFromConstraints: [Plan, [core.List$(Constraint)]],
      addPropagate: [core.bool, [Constraint, core.int]],
      removePropagateFrom: [core.List$(Constraint), [Variable]],
      addConstraintsConsumingTo: [dart.void, [Variable, core.List$(Constraint)]]
    })
  });
  class Plan extends core.Object {
    Plan() {
      this.list = dart.list([], Constraint);
    }
    addConstraint(c) {
      dart.dcall(this.list[dartx.add], c);
    }
    size() {
      return this.list[dartx.length];
    }
    execute() {
      for (let i = 0; dart.notNull(i) < dart.notNull(this.list[dartx.length]); i = dart.notNull(i) + 1) {
        dart.dcall(this.list[dartx.get](i).execute);
      }
    }
  }
  dart.setSignature(Plan, {
    methods: () => ({
      addConstraint: [dart.void, [Constraint]],
      size: [core.int, []],
      execute: [dart.void, []]
    })
  });
  function chainTest(n) {
    exports.planner = new Planner();
    let prev = null, first = null, last = null;
    for (let i = 0; dart.notNull(i) <= dart.notNull(n); i = dart.notNull(i) + 1) {
      let v = new Variable("v", 0);
      if (prev != null)
        new EqualityConstraint(prev, v, dart.as(REQUIRED, Strength));
      if (i == 0)
        first = v;
      if (i == n)
        last = v;
      prev = v;
    }
    new StayConstraint(last, dart.as(STRONG_DEFAULT, Strength));
    let edit = new EditConstraint(first, dart.as(PREFERRED, Strength));
    let plan = dart.dcall(exports.planner.extractPlanFromConstraints, dart.list([edit], Constraint));
    for (let i = 0; dart.notNull(i) < 100; i = dart.notNull(i) + 1) {
      first.value = i;
      dart.dcall(plan.execute);
      if (last.value != i) {
        dart.dcall(core.print, "Chain test failed:");
        dart.dcall(core.print, `Expected last value to be ${i} but it was ${last.value}.`);
      }
    }
  }
  dart.fn(chainTest, dart.void, [core.int]);
  function projectionTest(n) {
    exports.planner = new Planner();
    let scale = new Variable("scale", 10);
    let offset = new Variable("offset", 1000);
    let src = null, dst = null;
    let dests = dart.list([], Variable);
    for (let i = 0; dart.notNull(i) < dart.notNull(n); i = dart.notNull(i) + 1) {
      src = new Variable("src", i);
      dst = new Variable("dst", i);
      dart.dcall(dests[dartx.add], dst);
      new StayConstraint(src, dart.as(NORMAL, Strength));
      new ScaleConstraint(src, scale, offset, dst, dart.as(REQUIRED, Strength));
    }
    dart.dcall(change, src, 17);
    if (dst.value != 1170)
      dart.dcall(core.print, "Projection 1 failed");
    dart.dcall(change, dst, 1050);
    if (src.value != 5)
      dart.dcall(core.print, "Projection 2 failed");
    dart.dcall(change, scale, 5);
    for (let i = 0; dart.notNull(i) < dart.notNull(n) - 1; i = dart.notNull(i) + 1) {
      if (dests[dartx.get](i).value != dart.notNull(i) * 5 + 1000)
        dart.dcall(core.print, "Projection 3 failed");
    }
    dart.dcall(change, offset, 2000);
    for (let i = 0; dart.notNull(i) < dart.notNull(n) - 1; i = dart.notNull(i) + 1) {
      if (dests[dartx.get](i).value != dart.notNull(i) * 5 + 2000)
        dart.dcall(core.print, "Projection 4 failed");
    }
  }
  dart.fn(projectionTest, dart.void, [core.int]);
  function change(v, newValue) {
    let edit = new EditConstraint(v, dart.as(PREFERRED, Strength));
    let plan = dart.dcall(exports.planner.extractPlanFromConstraints, dart.list([edit], EditConstraint));
    for (let i = 0; dart.notNull(i) < 10; i = dart.notNull(i) + 1) {
      v.value = newValue;
      dart.dcall(plan.execute);
    }
    dart.dcall(edit.destroyConstraint);
  }
  dart.fn(change, dart.void, [Variable, core.int]);
  exports.planner = null;
  // Exports:
  exports.main = main;
  exports.DeltaBlue = DeltaBlue;
  exports.Strength = Strength;
  exports.REQUIRED = REQUIRED;
  exports.STRONG_PREFERRED = STRONG_PREFERRED;
  exports.PREFERRED = PREFERRED;
  exports.STRONG_DEFAULT = STRONG_DEFAULT;
  exports.NORMAL = NORMAL;
  exports.WEAK_DEFAULT = WEAK_DEFAULT;
  exports.WEAKEST = WEAKEST;
  exports.Constraint = Constraint;
  exports.UnaryConstraint = UnaryConstraint;
  exports.StayConstraint = StayConstraint;
  exports.EditConstraint = EditConstraint;
  exports.NONE = NONE;
  exports.FORWARD = FORWARD;
  exports.BACKWARD = BACKWARD;
  exports.BinaryConstraint = BinaryConstraint;
  exports.ScaleConstraint = ScaleConstraint;
  exports.EqualityConstraint = EqualityConstraint;
  exports.Variable = Variable;
  exports.Planner = Planner;
  exports.Plan = Plan;
  exports.chainTest = chainTest;
  exports.projectionTest = projectionTest;
  exports.change = change;
});
