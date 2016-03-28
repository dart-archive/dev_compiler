dart_library.library('sunflower/circle', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  exports[dart.uri] = 'file:///usr/local/google/vsm/dev_compiler/test/codegen/sunflower/circle.dart';
  class Circle extends core.Object {
    Circle(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  }
  dart.setSignature(Circle, {
    constructors: () => ({Circle: [Circle, [core.num, core.num, core.num]]})
  });
  Circle[dart.owner] = exports;
  // Exports:
  exports.Circle = Circle;
});
