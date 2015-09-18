dart_library.library('script', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  function main(args) {
    let name = dart.dcall(args[dartx.join], ' ');
    if (name == '')
      name = 'world';
    dart.dcall(core.print, `hello ${name}`);
  }
  dart.fn(main, dart.void, [core.List$(core.String)]);
  // Exports:
  exports.main = main;
});
