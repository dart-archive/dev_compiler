dart_library.library('js/src/varargs', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  exports[dart.uri] = 'package:js/src/varargs.dart';
  class _Rest extends core.Object {
    _Rest() {
    }
  }
  dart.setSignature(_Rest, {
    constructors: () => ({_Rest: [_Rest, []]})
  });
  _Rest[dart.owner] = exports;
  const rest = dart.const(new _Rest());
  function spread(args) {
    dart.throw(new core.StateError('The spread function cannot be called, ' + 'it should be compiled away.'));
  }
  dart.fn(spread);
  // Exports:
  exports.rest = rest;
  exports.spread = spread;
});
