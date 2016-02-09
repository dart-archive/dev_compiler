'use strict';
require("dart/_debugger");
require("dart/html_common");
require("dart/html");
require("dart/_metadata");
require("dart/js");
require("dart/_js_mirrors");
require("dart/mirrors");
require("dart/convert");
require("dart/_js_primitives");
require("dart/_isolate_helper");
require("dart/_native_typed_data");
require("dart/typed_data");
require("dart/isolate");
require("dart/_js_helper");
require("dart/_js_embedded_names");
require("dart/_foreign_helper");
require("dart/async");
require("dart/_interceptors");
require("dart/math");
require("dart/_internal");
require("dart/collection");
require("dart/core");
let dart = require("dart/_runtime");
let core = require("dart/core");
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
