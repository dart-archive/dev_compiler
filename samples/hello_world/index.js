dart_library.library('hello_world/index', null, /* Imports */[
  "dart_runtime/dart",
  'angular2/src/reflection/reflection_capabilities',
  'angular2/src/reflection/reflection',
  'angular2/src/core/application',
  'hello_world/index_common'
], /* Lazy imports */[
], function(exports, dart, reflection_capabilities, reflection, application, index_common) {
  'use strict';
  let dartx = dart.dartx;
  function main() {
    reflection.reflector.reflectionCapabilities = new reflection_capabilities.ReflectionCapabilities();
    application.bootstrap(index_common.HelloCmp);
  }
  dart.fn(main);
  // Exports:
  exports.main = main;
});
