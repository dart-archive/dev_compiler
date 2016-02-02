'use strict';
let dart = require("./dart/_runtime");
let core = require("./dart/core");
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
