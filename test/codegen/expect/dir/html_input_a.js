dart_library.library('dir/html_input_a', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core',
  'dir/html_input_b',
  'dir/html_input_c',
  'dir/html_input_d'
], /* Lazy imports */[
], function(exports, dart, core, html_input_b, html_input_c, html_input_d) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    dart.dcall(core.print, `fib(${html_input_b.x} + ${html_input_c.y}) = `);
    dart.dcall(core.print, `  ... ${dart.dcall(html_input_d.fib, dart.notNull(html_input_b.x) + dart.notNull(html_input_c.y))}`);
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
