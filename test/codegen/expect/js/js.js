dart_library.library('js/js', null, /* Imports */[
  'dart/_runtime',
  'dart/js',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, js, core) {
  'use strict';
  let dartx = dart.dartx;
  exports[dart.uri] = 'package:js/js.dart';
  dart.export(exports, js, ['allowInterop', 'allowInteropCaptureThis'], []);
  class JS extends core.Object {
    JS(name) {
      if (name === void 0) name = null;
      this.name = name;
    }
  }
  dart.setSignature(JS, {
    constructors: () => ({JS: [JS, [], [core.String]]})
  });
  JS[dart.owner] = exports;
  class _Anonymous extends core.Object {
    _Anonymous() {
    }
  }
  dart.setSignature(_Anonymous, {
    constructors: () => ({_Anonymous: [_Anonymous, []]})
  });
  _Anonymous[dart.owner] = exports;
  const anonymous = dart.const(new _Anonymous());
  // Exports:
  exports.JS = JS;
  exports.anonymous = anonymous;
});
