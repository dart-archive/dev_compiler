dart_library.library('dart/html', null, /* Imports */[
  'dart/_runtime',
  'dart/math',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, math, core) {
  'use strict';
  let dartx = dart.dartx;
  dart.export(exports, math, ['Rectangle', 'Point'], []);
  const RequestAnimationFrameCallback = dart.typedef('RequestAnimationFrameCallback', () => dart.functionType(dart.void, [core.num]));
  const EventListener = dart.typedef('EventListener', () => dart.functionType(dart.dynamic, [Event]));
  const _F1 = dart.typedef('_F1', () => dart.functionType(dart.dynamic, [dart.dynamic]));
  const __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.bool, [Element]));
  const __CastType2 = dart.typedef('__CastType2', () => dart.functionType(dart.dynamic, [dart.dynamic]));
  // Exports:
  exports.RequestAnimationFrameCallback = RequestAnimationFrameCallback;
  exports.EventListener = EventListener;
});
