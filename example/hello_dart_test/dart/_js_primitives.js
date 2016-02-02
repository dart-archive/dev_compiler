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
function printString(string) {
  if (typeof dartPrint == "function") {
    dartPrint(string);
    return;
  }
  if (typeof console == "object" && typeof console.log != "undefined") {
    console.log(string);
    return;
  }
  if (typeof window == "object") {
    return;
  }
  if (typeof print == "function") {
    print(string);
    return;
  }
  throw "Unable to print message: " + String(string);
}
dart.fn(printString, dart.void, [core.String]);
// Exports:
exports.printString = printString;
