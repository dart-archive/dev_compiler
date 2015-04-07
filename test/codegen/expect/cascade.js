var cascade;
(function(exports) {
  'use strict';
  class A extends core.Object {
    A() {
      this.x = null;
    }
  }
  // Function test_closure_with_mutate: () → void
  function test_closure_with_mutate() {
    let a = new A();
    a.x = () => {
      core.print("hi");
      a = null;
    };
    let _ = a;
    dart.dinvoke(_, 'x');
    dart.dinvoke(_, 'x');
    core.print(a);
  }
  // Function test_closure_without_mutate: () → void
  function test_closure_without_mutate() {
    let a = new A();
    a.x = () => {
      core.print(a);
    };
    dart.dinvoke(a, 'x');
    dart.dinvoke(a, 'x');
    core.print(a);
  }
  // Function test_mutate_inside_cascade: () → void
  function test_mutate_inside_cascade() {
    let a = null;
    let _ = new A();
    _.x = a = null;
    _.x = a = null;
    a = _;
    core.print(a);
  }
  // Function test_mutate_outside_cascade: () → void
  function test_mutate_outside_cascade() {
    let a = null, b = null;
    a = new A();
    a.x = b = null;
    a.x = b = null;
    a = null;
    core.print(a);
  }
  // Function test_VariableDeclaration_single: () → void
  function test_VariableDeclaration_single() {
    let a = new core.List.from([]);
    a[core.$length] = 2;
    a[core.$add](42);
    core.print(a);
  }
  // Function test_VariableDeclaration_last: () → void
  function test_VariableDeclaration_last() {
    let a = 42, b = ((_) => {
      _ = new core.List.from([]);
      _[core.$length] = 2;
      _[core.$add](a);
      return _;
    })();
    core.print(b);
  }
  // Function test_VariableDeclaration_first: () → void
  function test_VariableDeclaration_first() {
    let a = ((_) => {
      _ = new core.List.from([]);
      _[core.$length] = 2;
      _[core.$add](3);
      return _;
    })(), b = 2;
    core.print(a);
  }
  let Base$ = dart.generic(function(T) {
    class Base extends core.Object {
      Base() {
        this.x = new core.List$(T).from([]);
      }
    }
    return Base;
  });
  let Base = Base$();
  class Foo extends Base$(core.int) {
    test_final_field_generic(t) {
      this.x[core.$add](1);
      this.x[core.$add](2);
      this.x[core.$add](3);
      this.x[core.$add](4);
    }
  }
  // Exports:
  exports.A = A;
  exports.test_closure_with_mutate = test_closure_with_mutate;
  exports.test_closure_without_mutate = test_closure_without_mutate;
  exports.test_mutate_inside_cascade = test_mutate_inside_cascade;
  exports.test_mutate_outside_cascade = test_mutate_outside_cascade;
  exports.test_VariableDeclaration_single = test_VariableDeclaration_single;
  exports.test_VariableDeclaration_last = test_VariableDeclaration_last;
  exports.test_VariableDeclaration_first = test_VariableDeclaration_first;
  exports.Base$ = Base$;
  exports.Base = Base;
  exports.Foo = Foo;
})(cascade || (cascade = {}));
