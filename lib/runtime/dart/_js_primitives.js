dart_library.library('dart/_js_primitives', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  function printString(string) {
    if (dart.notNull(dart.as(typeof dartPrint == "function", core.bool))) {
      dartPrint(string);
      return;
    }
    if (dart.notNull(dart.as(typeof console == "object", core.bool)) && dart.notNull(dart.as(typeof console.log != "undefined", core.bool))) {
      console.log(string);
      return;
    }
    if (dart.notNull(dart.as(typeof window == "object", core.bool))) {
      return;
    }
    if (dart.notNull(dart.as(typeof print == "function", core.bool))) {
      print(string);
      return;
    }
    throw "Unable to print message: " + String(string);
  }
  dart.fn(printString, dart.void, [core.String]);
  // Exports:
  exports.printString = printString;
});
