class _DropAnnotation1 {
  const _DropAnnotation1();
}
const _dropAnnotation2 = const _DropAnnotation1();
class _KeepAnnotation1 {
  const _KeepAnnotation1();
}
const _keepAnnotation2 = const _KeepAnnotation1();

@_DropAnnotation1()
@_dropAnnotation2
class _Drop1 {
  keepMethod1() {}
}
_drop2() {}
var _drop3;
final _drop4 = 0;
const _drop5 = 0;

@_KeepAnnotation1()
@_keepAnnotation2
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
  _keepMethod2() {
    _keepStaticMethod2();
  }

  static dropStaticMethod1() {}
  static _keepStaticMethod1() {}
  static _keepStaticMethod2() {}
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



class _RetainedByArg1 {}
class _RetainedByArg2 {}
class _RetainedByRetType1 {}

abstract class _Base {
  _Base._();
  _Base.dropped() : this._();
  _Base.kept(_RetainedByArg1 arg) : this._();

  _RetainedByRetType1 report(_RetainedByArg2 arg) {
    measure();
  }
  measure() {
    run();
  }
  run();
}

class _Sub extends _Base {
  _Sub() : super.kept(null);
  _Sub.dropped() : super.dropped();
  run() => print('Sub');
}

class _KeepEx extends Error {}
class _DropEx extends Error {}

_testInheritance(args) {
  new _Sub().report(null);
}

main(args) {
  try {
    _testRefs(args);
    _testInheritance(args);
    new _MyMap();
  } catch (e) {
    if (e is _KeepEx) print(e);
  }
}

class _MyMap<K, V> {
  factory _MyMap() => new _MyMapImpl<K, V>();
}

class _MyMapImpl<K, V> extends _MyMapBase<K, V> implements _MyMap<K, V> {}

abstract class _MyMapMixin<K, V> implements _MyMap<K, V> {}

abstract class _MyMapBase<K, V> = Object with _MyMapMixin<K, V>;
