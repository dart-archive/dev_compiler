'use strict';
let dart = require("dart/_runtime");
let BenchmarkBase = require("BenchmarkBase");
let core = require("dart/core");
let dartx = dart.dartx;
function main() {
  new DeltaBlue().report();
}
dart.fn(main);
// /* Incoming: main (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), DeltaBlue. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class DeltaBlue extends BenchmarkBase.BenchmarkBase {
  DeltaBlue() {
    super.BenchmarkBase("DeltaBlue");
  }
  run() {
    chainTest(100);
    projectionTest(100);
  }
}
dart.setSignature(DeltaBlue, {
  constructors: () => ({DeltaBlue: [DeltaBlue, []]})
});
// /* Incoming: Strength. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Strength.nextWeaker (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Strength.stronger (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Strength.weaker (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Strength.weakest (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Strength.strongest (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), REQUIRED (ConstTopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), STRONG_PREFERRED (ConstTopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), PREFERRED (ConstTopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), STRONG_DEFAULT (ConstTopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), NORMAL (ConstTopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), WEAK_DEFAULT (ConstTopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), WEAKEST (ConstTopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.strength (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.satisfy (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.chooseMethod (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.recalculate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), StayConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EditConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.chooseMethod (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.recalculate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.recalculate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EqualityConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Variable.walkStrength (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), strength (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.incrementalRemove (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.removePropagateFrom (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), chainTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), edit (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), projectionTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), edit (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class Strength extends core.Object {
  Strength(value, name) {
    this.value = value;
    this.name = name;
  }
  nextWeaker() {
    return dart.const(dart.list([STRONG_PREFERRED, PREFERRED, STRONG_DEFAULT, NORMAL, WEAK_DEFAULT, WEAKEST], Strength))[dartx.get](this.value);
  }
  static stronger(s1, s2) {
    return dart.notNull(s1.value) < dart.notNull(s2.value);
  }
  static weaker(s1, s2) {
    return dart.notNull(s1.value) > dart.notNull(s2.value);
  }
  static weakest(s1, s2) {
    return dart.notNull(Strength.weaker(s1, s2)) ? s1 : s2;
  }
  static strongest(s1, s2) {
    return dart.notNull(Strength.stronger(s1, s2)) ? s1 : s2;
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
const REQUIRED = dart.const(new Strength(0, "required"));
const STRONG_PREFERRED = dart.const(new Strength(1, "strongPreferred"));
const PREFERRED = dart.const(new Strength(2, "preferred"));
const STRONG_DEFAULT = dart.const(new Strength(3, "strongDefault"));
const NORMAL = dart.const(new Strength(4, "normal"));
const WEAK_DEFAULT = dart.const(new Strength(5, "weakDefault"));
const WEAKEST = dart.const(new Strength(6, "weakest"));
// /* Incoming: Constraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.addConstraint (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.satisfy (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), overridden (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.destroyConstraint (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), StayConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EditConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.inputsKnown (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EqualityConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Variable.constraints (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Variable.determinedBy (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Variable.addConstraint (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Variable.removeConstraint (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.incrementalAdd (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), overridden (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.incrementalRemove (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), out (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), unsatisfied (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), u (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.makePlan (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), todo (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), c (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.extractPlanFromConstraints (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), sources (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), c (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.addPropagate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), todo (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), d (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.removePropagateFrom (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), unsatisfied (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), c (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), determining (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), next (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.addConstraintsConsumingTo (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), determining (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), c (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Plan.list (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Plan.addConstraint (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Plan.execute (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class Constraint extends core.Object {
  Constraint(strength) {
    this.strength = strength;
  }
  addConstraint() {
    this.addToGraph();
    exports.planner.incrementalAdd(this);
  }
  satisfy(mark) {
    this.chooseMethod(dart.as(mark, core.int));
    if (!dart.notNull(this.isSatisfied())) {
      if (dart.equals(this.strength, REQUIRED)) {
        core.print("Could not satisfy a required constraint!");
      }
      return null;
    }
    this.markInputs(dart.as(mark, core.int));
    let out = this.output();
    let overridden = out.determinedBy;
    if (overridden != null) overridden.markUnsatisfied();
    out.determinedBy = this;
    if (!dart.notNull(exports.planner.addPropagate(this, dart.as(mark, core.int)))) core.print("Cycle encountered");
    out.mark = dart.as(mark, core.int);
    return overridden;
  }
  destroyConstraint() {
    if (dart.notNull(this.isSatisfied())) exports.planner.incrementalRemove(this);
    this.removeFromGraph();
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
// /* Incoming: UnaryConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.addToGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.removeFromGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), StayConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EditConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class UnaryConstraint extends Constraint {
  UnaryConstraint(myOutput, strength) {
    this.myOutput = myOutput;
    this.satisfied = false;
    super.Constraint(strength);
    this.addConstraint();
  }
  addToGraph() {
    this.myOutput.addConstraint(this);
    this.satisfied = false;
  }
  chooseMethod(mark) {
    this.satisfied = this.myOutput.mark != mark && dart.notNull(Strength.stronger(this.strength, this.myOutput.walkStrength));
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
    this.myOutput.stay = !dart.notNull(this.isInput());
    if (dart.notNull(this.myOutput.stay)) this.execute();
  }
  markUnsatisfied() {
    this.satisfied = false;
  }
  inputsKnown(mark) {
    return true;
  }
  removeFromGraph() {
    if (this.myOutput != null) this.myOutput.removeConstraint(this);
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
// /* Incoming: StayConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), chainTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), projectionTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
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
// /* Incoming: EditConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), edit (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), edit (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), change (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
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
const NONE = 1;
const FORWARD = 2;
const BACKWARD = 0;
// /* Incoming: BinaryConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.addToGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.removeFromGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EqualityConstraint (ClassElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class BinaryConstraint extends Constraint {
  BinaryConstraint(v1, v2, strength) {
    this.v1 = v1;
    this.v2 = v2;
    this.direction = NONE;
    super.Constraint(strength);
    this.addConstraint();
  }
  chooseMethod(mark) {
    if (this.v1.mark == mark) {
      this.direction = this.v2.mark != mark && dart.notNull(Strength.stronger(this.strength, this.v2.walkStrength)) ? FORWARD : NONE;
    }
    if (this.v2.mark == mark) {
      this.direction = this.v1.mark != mark && dart.notNull(Strength.stronger(this.strength, this.v1.walkStrength)) ? BACKWARD : NONE;
    }
    if (dart.notNull(Strength.weaker(this.v1.walkStrength, this.v2.walkStrength))) {
      this.direction = dart.notNull(Strength.stronger(this.strength, this.v1.walkStrength)) ? BACKWARD : NONE;
    } else {
      this.direction = dart.notNull(Strength.stronger(this.strength, this.v2.walkStrength)) ? FORWARD : BACKWARD;
    }
  }
  addToGraph() {
    this.v1.addConstraint(this);
    this.v2.addConstraint(this);
    this.direction = NONE;
  }
  isSatisfied() {
    return this.direction != NONE;
  }
  markInputs(mark) {
    this.input().mark = mark;
  }
  input() {
    return this.direction == FORWARD ? this.v1 : this.v2;
  }
  output() {
    return this.direction == FORWARD ? this.v2 : this.v1;
  }
  recalculate() {
    let ihn = this.input(), out = this.output();
    out.walkStrength = Strength.weakest(this.strength, ihn.walkStrength);
    out.stay = ihn.stay;
    if (dart.notNull(out.stay)) this.execute();
  }
  markUnsatisfied() {
    this.direction = NONE;
  }
  inputsKnown(mark) {
    let i = this.input();
    return i.mark == mark || dart.notNull(i.stay) || i.determinedBy == null;
  }
  removeFromGraph() {
    if (this.v1 != null) this.v1.removeConstraint(this);
    if (this.v2 != null) this.v2.removeConstraint(this);
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
// /* Incoming: ScaleConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.addToGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.removeFromGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.markInputs (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), projectionTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class ScaleConstraint extends BinaryConstraint {
  ScaleConstraint(src, scale, offset, dest, strength) {
    this.scale = scale;
    this.offset = offset;
    super.BinaryConstraint(src, dest, strength);
  }
  addToGraph() {
    super.addToGraph();
    this.scale.addConstraint(this);
    this.offset.addConstraint(this);
  }
  removeFromGraph() {
    super.removeFromGraph();
    if (this.scale != null) this.scale.removeConstraint(this);
    if (this.offset != null) this.offset.removeConstraint(this);
  }
  markInputs(mark) {
    super.markInputs(mark);
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
    let ihn = this.input(), out = this.output();
    out.walkStrength = Strength.weakest(this.strength, ihn.walkStrength);
    out.stay = dart.notNull(ihn.stay) && dart.notNull(this.scale.stay) && dart.notNull(this.offset.stay);
    if (dart.notNull(out.stay)) this.execute();
  }
}
dart.setSignature(ScaleConstraint, {
  constructors: () => ({ScaleConstraint: [ScaleConstraint, [Variable, Variable, Variable, Variable, Strength]]}),
  methods: () => ({execute: [dart.void, []]})
});
// /* Incoming: EqualityConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), chainTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class EqualityConstraint extends BinaryConstraint {
  EqualityConstraint(v1, v2, strength) {
    super.BinaryConstraint(v1, v2, strength);
  }
  execute() {
    this.output().value = this.input().value;
  }
}
dart.setSignature(EqualityConstraint, {
  constructors: () => ({EqualityConstraint: [EqualityConstraint, [Variable, Variable, Strength]]}),
  methods: () => ({execute: [dart.void, []]})
});
// /* Incoming: Constraint.output (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), out (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), overridden (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.satisfy (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.myOutput (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.addToGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.chooseMethod (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.output (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.recalculate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), UnaryConstraint.removeFromGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), StayConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EditConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.v1 (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.v2 (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.chooseMethod (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.addToGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.markInputs (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.input (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.output (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ihn (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), out (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.recalculate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), i (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.inputsKnown (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), BinaryConstraint.removeFromGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.scale (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.offset (FieldElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.addToGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.removeFromGraph (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.markInputs (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.execute (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ihn (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), out (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), ScaleConstraint.recalculate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EqualityConstraint. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), EqualityConstraint.execute (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Variable. (ConstructorElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), out (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), unsatisfied (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.makePlan (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.addPropagate (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.removePropagateFrom (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), todo (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), v (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), c (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), determining (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), next (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.addConstraintsConsumingTo (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), determining (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), c (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), prev (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), first (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), last (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), v (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), chainTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), edit (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), scale (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), offset (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), src (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), dst (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), dests (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), projectionTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), change (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), edit (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class Variable extends core.Object {
  Variable(name, value) {
    this.constraints = dart.list([], Constraint);
    this.name = name;
    this.value = value;
    this.determinedBy = null;
    this.mark = 0;
    this.walkStrength = WEAKEST;
    this.stay = true;
  }
  addConstraint(c) {
    this.constraints[dartx.add](c);
  }
  removeConstraint(c) {
    this.constraints[dartx.remove](c);
    if (dart.equals(this.determinedBy, c)) this.determinedBy = null;
  }
}
dart.setSignature(Variable, {
  constructors: () => ({Variable: [Variable, [core.String, core.int]]}),
  methods: () => ({
    addConstraint: [dart.void, [Constraint]],
    removeConstraint: [dart.void, [Constraint]]
  })
});
// /* Incoming: Constraint.addConstraint (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.satisfy (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Constraint.destroyConstraint (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), chainTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), projectionTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), planner (TopLevelVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class Planner extends core.Object {
  Planner() {
    this.currentMark = 0;
  }
  incrementalAdd(c) {
    let mark = this.newMark();
    for (let overridden = c.satisfy(mark); overridden != null; overridden = overridden.satisfy(mark))
      ;
  }
  incrementalRemove(c) {
    let out = c.output();
    c.markUnsatisfied();
    c.removeFromGraph();
    let unsatisfied = this.removePropagateFrom(out);
    let strength = REQUIRED;
    do {
      for (let i = 0; i < dart.notNull(unsatisfied[dartx.length]); i++) {
        let u = unsatisfied[dartx.get](i);
        if (dart.equals(u.strength, strength)) this.incrementalAdd(u);
      }
      strength = strength.nextWeaker();
    } while (!dart.equals(strength, WEAKEST));
  }
  newMark() {
    return this.currentMark = dart.notNull(this.currentMark) + 1;
  }
  makePlan(sources) {
    let mark = this.newMark();
    let plan = new Plan();
    let todo = sources;
    while (dart.notNull(todo[dartx.length]) > 0) {
      let c = todo[dartx.removeLast]();
      if (c.output().mark != mark && dart.notNull(c.inputsKnown(mark))) {
        plan.addConstraint(c);
        c.output().mark = mark;
        this.addConstraintsConsumingTo(c.output(), todo);
      }
    }
    return plan;
  }
  extractPlanFromConstraints(constraints) {
    let sources = dart.list([], Constraint);
    for (let i = 0; i < dart.notNull(constraints[dartx.length]); i++) {
      let c = constraints[dartx.get](i);
      if (dart.notNull(c.isInput()) && dart.notNull(c.isSatisfied())) sources[dartx.add](c);
    }
    return this.makePlan(sources);
  }
  addPropagate(c, mark) {
    let todo = dart.list([c], Constraint);
    while (dart.notNull(todo[dartx.length]) > 0) {
      let d = todo[dartx.removeLast]();
      if (d.output().mark == mark) {
        this.incrementalRemove(c);
        return false;
      }
      d.recalculate();
      this.addConstraintsConsumingTo(d.output(), todo);
    }
    return true;
  }
  removePropagateFrom(out) {
    out.determinedBy = null;
    out.walkStrength = WEAKEST;
    out.stay = true;
    let unsatisfied = dart.list([], Constraint);
    let todo = dart.list([out], Variable);
    while (dart.notNull(todo[dartx.length]) > 0) {
      let v = todo[dartx.removeLast]();
      for (let i = 0; i < dart.notNull(v.constraints[dartx.length]); i++) {
        let c = v.constraints[dartx.get](i);
        if (!dart.notNull(c.isSatisfied())) unsatisfied[dartx.add](c);
      }
      let determining = v.determinedBy;
      for (let i = 0; i < dart.notNull(v.constraints[dartx.length]); i++) {
        let next = v.constraints[dartx.get](i);
        if (!dart.equals(next, determining) && dart.notNull(next.isSatisfied())) {
          next.recalculate();
          todo[dartx.add](next.output());
        }
      }
    }
    return unsatisfied;
  }
  addConstraintsConsumingTo(v, coll) {
    let determining = v.determinedBy;
    for (let i = 0; i < dart.notNull(v.constraints[dartx.length]); i++) {
      let c = v.constraints[dartx.get](i);
      if (!dart.equals(c, determining) && dart.notNull(c.isSatisfied())) coll[dartx.add](c);
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
// /* Incoming: Planner.makePlan (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), Planner.extractPlanFromConstraints (MethodElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), chainTest (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), plan (LocalVariableElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart), change (FunctionElementImpl @ file:///Users/ochafik/github/dev_compiler2/test/codegen/DeltaBlue.dart) */
class Plan extends core.Object {
  Plan() {
    this.list = dart.list([], Constraint);
  }
  addConstraint(c) {
    this.list[dartx.add](c);
  }
  size() {
    return this.list[dartx.length];
  }
  execute() {
    for (let i = 0; i < dart.notNull(this.list[dartx.length]); i++) {
      this.list[dartx.get](i).execute();
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
  for (let i = 0; i <= dart.notNull(n); i++) {
    let v = new Variable("v", 0);
    if (prev != null) new EqualityConstraint(prev, v, REQUIRED);
    if (i == 0) first = v;
    if (i == n) last = v;
    prev = v;
  }
  new StayConstraint(last, STRONG_DEFAULT);
  let edit = new EditConstraint(first, PREFERRED);
  let plan = exports.planner.extractPlanFromConstraints(dart.list([edit], Constraint));
  for (let i = 0; i < 100; i++) {
    first.value = i;
    plan.execute();
    if (last.value != i) {
      core.print("Chain test failed:");
      core.print(`Expected last value to be ${i} but it was ${last.value}.`);
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
  for (let i = 0; i < dart.notNull(n); i++) {
    src = new Variable("src", i);
    dst = new Variable("dst", i);
    dests[dartx.add](dst);
    new StayConstraint(src, NORMAL);
    new ScaleConstraint(src, scale, offset, dst, REQUIRED);
  }
  change(src, 17);
  if (dst.value != 1170) core.print("Projection 1 failed");
  change(dst, 1050);
  if (src.value != 5) core.print("Projection 2 failed");
  change(scale, 5);
  for (let i = 0; i < dart.notNull(n) - 1; i++) {
    if (dests[dartx.get](i).value != i * 5 + 1000) core.print("Projection 3 failed");
  }
  change(offset, 2000);
  for (let i = 0; i < dart.notNull(n) - 1; i++) {
    if (dests[dartx.get](i).value != i * 5 + 2000) core.print("Projection 4 failed");
  }
}
dart.fn(projectionTest, dart.void, [core.int]);
function change(v, newValue) {
  let edit = new EditConstraint(v, PREFERRED);
  let plan = exports.planner.extractPlanFromConstraints(dart.list([edit], EditConstraint));
  for (let i = 0; i < 10; i++) {
    v.value = newValue;
    plan.execute();
  }
  edit.destroyConstraint();
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
