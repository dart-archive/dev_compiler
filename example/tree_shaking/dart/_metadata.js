'use strict';
require("./_debugger");
require("./html_common");
require("./html");
require("./_metadata");
require("./js");
require("./_js_mirrors");
require("./mirrors");
require("./convert");
require("./_js_primitives");
require("./_isolate_helper");
require("./_native_typed_data");
require("./typed_data");
require("./isolate");
require("./_js_helper");
require("./_js_embedded_names");
require("./_foreign_helper");
require("./async");
require("./_interceptors");
require("./math");
require("./_internal");
require("./collection");
require("./core");
let dart = require("./_runtime");
let core = require("./core");
let dartx = dart.dartx;
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
class DomName extends core.Object {
  DomName(name) {
    this.name = name;
  }
}
dart.setSignature(DomName, {
  constructors: () => ({DomName: [DomName, [core.String]]})
});
class DocsEditable extends core.Object {
  DocsEditable() {
  }
}
dart.setSignature(DocsEditable, {
  constructors: () => ({DocsEditable: [DocsEditable, []]})
});
class Unstable extends core.Object {
  Unstable() {
  }
}
dart.setSignature(Unstable, {
  constructors: () => ({Unstable: [Unstable, []]})
});
// Exports:
exports.SupportedBrowser = SupportedBrowser;
exports.Experimental = Experimental;
exports.DomName = DomName;
exports.DocsEditable = DocsEditable;
exports.Unstable = Unstable;
