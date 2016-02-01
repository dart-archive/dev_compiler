class _Drop1 {}
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

  _drop1() {}
  _keep1() {}
}

main() {
  new _Keep1();
  _keep2();
  _keep3;
  _keep4;
  _keep5;

  var foo = new _Foo();
  foo = new _Foo.keep();
  foo._keep1();
}
