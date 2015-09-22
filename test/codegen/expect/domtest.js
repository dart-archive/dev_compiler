dart_library.library('domtest', null, /* Imports */[
  "dart_runtime/dart",
  'sunflower/dom',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, dom, core) {
  'use strict';
  let dartx = dart.dartx;
  function testNativeIndexers() {
    let nodes = dom.document.querySelector('body').childNodes;
    for (let i = 0; dart.notNull(i) < dart.notNull(dart.as(dart.dload(nodes, 'length'), core.num)); i = dart.notNull(i) + 1) {
      let old = dart.dindex(nodes, i);
      dart.dsetindex(nodes, i, dom.document.createElement('div'));
      core.print(dart.equals(dart.dindex(nodes, i), old));
    }
  }
  dart.fn(testNativeIndexers);
  // Exports:
  exports.testNativeIndexers = testNativeIndexers;
});
