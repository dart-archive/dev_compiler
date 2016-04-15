dart_library.library('hello', null, /* Imports */[
  'dart_sdk',
  'hello_lib'
], function(exports, dart_sdk, hello_lib) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hello_lib$ = hello_lib.hello_lib;
  const hello = Object.create(null);
  hello.main = function() {
    return core.print(hello_lib$.greeting);
  };
  dart.fn(hello.main);
  // Exports:
  exports.hello = hello;
});

//# sourceMappingURL=hello.js.map
