dart_library.library('dart/_metadata', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
], function(exports, dart, core) {
  'use strict';
  let dartx = dart.dartx;
  exports[dart.uri] = 'dart:_metadata';
  class SupportedBrowser extends core.Object {
    SupportedBrowser(browserName, minimumVersion) {
      if (minimumVersion === void 0) minimumVersion = null;
      this.browserName = browserName;
      this.minimumVersion = minimumVersion;
    }
  }
  dart.setSignature(SupportedBrowser, {
    constructors: () => ({SupportedBrowser: [SupportedBrowser, [core.String], [core.String]]})
  });
  SupportedBrowser[dart.owner] = exports;
  SupportedBrowser.CHROME = "Chrome";
  SupportedBrowser.FIREFOX = "Firefox";
  SupportedBrowser.IE = "Internet Explorer";
  SupportedBrowser.OPERA = "Opera";
  SupportedBrowser.SAFARI = "Safari";
  class Experimental extends core.Object {
    Experimental() {
    }
  }
  dart.setSignature(Experimental, {
    constructors: () => ({Experimental: [Experimental, []]})
  });
  Experimental[dart.owner] = exports;
  class DomName extends core.Object {
    DomName(name) {
      this.name = name;
    }
  }
  dart.setSignature(DomName, {
    constructors: () => ({DomName: [DomName, [core.String]]})
  });
  DomName[dart.owner] = exports;
  class DocsEditable extends core.Object {
    DocsEditable() {
    }
  }
  dart.setSignature(DocsEditable, {
    constructors: () => ({DocsEditable: [DocsEditable, []]})
  });
  DocsEditable[dart.owner] = exports;
  class Unstable extends core.Object {
    Unstable() {
    }
  }
  dart.setSignature(Unstable, {
    constructors: () => ({Unstable: [Unstable, []]})
  });
  Unstable[dart.owner] = exports;
  // Exports:
  exports.SupportedBrowser = SupportedBrowser;
  exports.Experimental = Experimental;
  exports.DomName = DomName;
  exports.DocsEditable = DocsEditable;
  exports.Unstable = Unstable;
});
