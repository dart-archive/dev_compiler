dart_library.library('notnull', null, /* Imports */[
  "dart/_runtime",
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  function intAssignments() {
    let i = 0;
    i = i & 1;
    i = i | 1;
    i = i ^ 1;
    i = i >> 1;
    i = i << 1;
    i = i - 1;
    i = i % 1;
    i = i + 1;
    let t = i;
    t == null ? i = 1 : t;
    i = i * 1;
    i = (i / 1)[dartx.truncate]();
    i++;
    --i;
    core.print(i + 1);
    let j = 1;
    j = i < 10 ? 1 : 2;
    core.print(dart.notNull(j) + 1);
  }
  dart.fn(intAssignments, dart.void, []);
  function doubleAssignments() {
    let d = 0.0;
    d = d / 1;
    core.print(d + 1);
  }
  dart.fn(doubleAssignments, dart.void, []);
  function boolAssignments() {
    let b = true;
    b != b;
    core.print(b);
  }
  dart.fn(boolAssignments, dart.void, []);
  function nullableLocals(param) {
    core.print(dart.notNull(param) + 1);
    let i = null;
    i = 1;
    core.print(dart.notNull(i) + 1);
    let j = 1;
    j = i == 1 ? 1 : null;
    core.print(dart.notNull(j) + 1);
  }
  dart.fn(nullableLocals, dart.void, [core.int]);
  function forLoops(length) {
    for (let i = 0; i < 10; i++) {
      core.print(i + 1);
    }
    for (let i = 0; i < dart.notNull(length()); i++) {
      core.print(i + 1);
    }
    for (let i = 0, n = length(); i < dart.notNull(n); i++) {
      core.print(i + 1);
    }
    for (let i = 0, n = dart.notNull(length()) + 0; i < n; i++) {
      core.print(i + 1);
    }
  }
  dart.fn(forLoops, dart.void, [dart.functionType(core.int, [])]);
  function test() {
    intAssignments();
    doubleAssignments();
    boolAssignments();
    nullableLocals(1);
    forLoops(dart.fn(() => 10, core.int, []));
  }
  dart.fn(test);
  // Exports:
  exports.intAssignments = intAssignments;
  exports.doubleAssignments = doubleAssignments;
  exports.boolAssignments = boolAssignments;
  exports.nullableLocals = nullableLocals;
  exports.forLoops = forLoops;
  exports.test = test;
});
