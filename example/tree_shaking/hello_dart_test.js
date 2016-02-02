dart_library.library('hello_dart_test', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  class HelloDartTest extends core.Object {
    static testMain() {
      core.print("Hello, Darter!");
    }
  }
  dart.setSignature(HelloDartTest, {
    statics: () => ({testMain: [dart.dynamic, []]}),
    names: ['testMain']
  });
  function main() {
    HelloDartTest.testMain();
  }
  dart.fn(main);
  // Exports:
  exports.HelloDartTest = HelloDartTest;
  exports.main = main;
});
