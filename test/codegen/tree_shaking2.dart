abstract class Foo {
  foo() => 1;
  operator[](x);
  bar() {}
}

class Bar extends Foo {
  foo() => 2;
  operator[](x) => 2;
  bar() {}
}

class Baz extends Foo {
  foo() => 3;
  operator[](x) => 3;
}

class Constants {
  static final X = 1;
  static final Y = 2;
}

main() {
  Foo foo;// = new Foo();
  foo = new Bar();
  print(foo.foo());
  print(foo[1]());
  print(Constants.X);
}
