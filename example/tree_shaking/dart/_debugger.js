dart_library.library('dart/_debugger', null, /* Imports */[
  'dart/_runtime'
], /* Lazy imports */[
], function(exports, dart) {
  'use strict';
  let dartx = dart.dartx;
  function registerDevtoolsFormatter() {
    let formatters = [exports._devtoolsFormatter];
    window.devtoolsFormatters = formatters;
  }
  dart.fn(registerDevtoolsFormatter);
  // Exports:
  exports.registerDevtoolsFormatter = registerDevtoolsFormatter;
});
