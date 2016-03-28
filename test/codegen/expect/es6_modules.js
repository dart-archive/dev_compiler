const exports = {};
import dart from "./dart/_runtime";
import core from "./dart/core";
let dartx = dart.dartx;
exports[dart.uri] = 'file:///usr/local/google/vsm/dev_compiler/test/codegen/es6_modules.dart';
const Callback = dart.typedef('Callback', () => dart.functionType(dart.void, [], {i: core.int}));
class A extends core.Object {}
A[dart.owner] = exports;
class _A extends core.Object {}
_A[dart.owner] = exports;
const B$ = dart.generic(function(T) {
  class B extends core.Object {}
  B[dart.owner] = exports;
  return B;
});
let B = B$();
const _B$ = dart.generic(function(T) {
  class _B extends core.Object {}
  _B[dart.owner] = exports;
  return _B;
});
let _B = _B$();
function f() {
}
dart.fn(f);
function _f() {
}
dart.fn(_f);
const constant = "abc";
exports.finalConstant = "abc";
dart.defineLazyProperties(exports, {
  get lazy() {
    return dart.fn(() => {
      core.print('lazy');
      return "abc";
    }, core.String, [])();
  }
});
exports.mutable = "abc";
dart.defineLazyProperties(exports, {
  get lazyMutable() {
    return dart.fn(() => {
      core.print('lazyMutable');
      return "abc";
    }, core.String, [])();
  },
  set lazyMutable(_) {}
});
// Exports:
exports.Callback = Callback;
exports.A = A;
exports.B$ = B$;
exports.B = B;
exports.f = f;
exports.constant = constant;
export default exports;
