class _Drop1 {
  keepMethod1() {}
}
_drop2() {}
var _drop3;
final _drop4 = 0;
const _drop5 = 0;

class _Keep1 {}
_keep2() {}
var _keep3;
final _keep4 = 0;
const _keep5 = 0;

class _Foo {
  _Foo();
  _Foo.dropped();
  _Foo.keep();

  _dropMethod1() {}
  keepMethod1() {}
  _keepMethod2() {}

  static dropStaticMethod1() {}
  static _keepStaticMethod1() {}
}

class _Bar {
  dropMethod1() {}
  keepMethod1() {}
}

_testRefs(args) {
  new _Keep1();
  _keep2();
  _keep3;
  _keep4;
  _keep5;

  var foo = new _Foo();
  foo = new _Foo.keep();
  foo.keepMethod1();
  foo._keepMethod2();

  var fooBar = (args.length == 1 ? new _Foo() : new _Bar()) as dynamic;
  fooBar.keepMethod1();

  _Foo._keepStaticMethod1();
}

abstract class _Base {
  _Base._();
  _Base.dropped() : this._();
  _Base.kept() : this._();

  report() {
    measure();
  }
  measure() {
    run();
  }
  run();
}

class _Sub extends _Base {
  _Sub() : super.kept();
  _Sub.dropped() : super.dropped();
  run() => print('Sub');
}

_testInheritance(args) {
  new _Sub().report();
}

main(args) {
  _testRefs(args);
  _testInheritance(args);
}
