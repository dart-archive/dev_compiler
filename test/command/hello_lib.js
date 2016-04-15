dart_library.library('hello_lib', null, /* Imports */[
  'dart_sdk'
], function(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hello_lib = Object.create(null);
  hello_lib.greeting = 'hello!';
  // Exports:
  exports.hello_lib = hello_lib;
});

//# sourceMappingURL=hello_lib.js.map
