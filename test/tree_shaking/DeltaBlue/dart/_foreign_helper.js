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
function JS(typeDescription, codeTemplate, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
  if (arg0 === void 0) arg0 = null;
  if (arg1 === void 0) arg1 = null;
  if (arg2 === void 0) arg2 = null;
  if (arg3 === void 0) arg3 = null;
  if (arg4 === void 0) arg4 = null;
  if (arg5 === void 0) arg5 = null;
  if (arg6 === void 0) arg6 = null;
  if (arg7 === void 0) arg7 = null;
  if (arg8 === void 0) arg8 = null;
  if (arg9 === void 0) arg9 = null;
  if (arg10 === void 0) arg10 = null;
  if (arg11 === void 0) arg11 = null;
}
dart.fn(JS, dart.dynamic, [core.String, core.String], [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic]);
// /* Incoming: JSExportName. (ConstructorElementImpl @ dart:_foreign_helper), async_ (FunctionElementImpl @ dart:_runtime/generators.dart), assert_ (FunctionElementImpl @ dart:_runtime/operations.dart), throw_ (FunctionElementImpl @ dart:_runtime/operations.dart), const_ (FunctionElementImpl @ dart:_runtime/operations.dart), export_ (FunctionElementImpl @ dart:_runtime/utils.dart) */
class JSExportName extends core.Object {
  JSExportName(name) {
    this.name = name;
  }
}
dart.setSignature(JSExportName, {
  constructors: () => ({JSExportName: [JSExportName, [core.String]]})
});
function JS_CURRENT_ISOLATE_CONTEXT() {
}
dart.fn(JS_CURRENT_ISOLATE_CONTEXT, () => dart.definiteFunctionType(IsolateContext, []));
// /* Incoming: JS_CURRENT_ISOLATE_CONTEXT (FunctionElementImpl @ dart:_foreign_helper), _IsolateContext (ClassElementImpl @ dart:_isolate_helper), context (LocalVariableElementImpl @ dart:_isolate_helper), context (LocalVariableElementImpl @ dart:_isolate_helper) */
class IsolateContext extends core.Object {}
function JS_SET_CURRENT_ISOLATE(isolate) {
}
dart.fn(JS_SET_CURRENT_ISOLATE, dart.void, [dart.dynamic]);
function JS_CREATE_ISOLATE() {
}
dart.fn(JS_CREATE_ISOLATE);
function JS_EMBEDDED_GLOBAL(typeDescription, name) {
}
dart.fn(JS_EMBEDDED_GLOBAL, dart.dynamic, [core.String, core.String]);
function JS_STRING_CONCAT(a, b) {
  return a + b;
}
dart.fn(JS_STRING_CONCAT, core.String, [core.String, core.String]);
// /* Incoming: _Rest. (ConstructorElementImpl @ dart:_foreign_helper), rest (ConstTopLevelVariableElementImpl @ dart:_foreign_helper), mixin (FunctionElementImpl @ dart:_runtime/classes.dart), syncStar (FunctionElementImpl @ dart:_runtime/generators.dart), async_ (FunctionElementImpl @ dart:_runtime/generators.dart), asyncStar (FunctionElementImpl @ dart:_runtime/generators.dart), dcall (FunctionElementImpl @ dart:_runtime/operations.dart), dsend (FunctionElementImpl @ dart:_runtime/operations.dart), nullSafe (FunctionElementImpl @ dart:_runtime/operations.dart), fn (FunctionElementImpl @ dart:_runtime/rtti.dart) */
class _Rest extends core.Object {
  _Rest() {
  }
}
dart.setSignature(_Rest, {
  constructors: () => ({_Rest: [_Rest, []]})
});
const rest = dart.const(new _Rest());
// Exports:
exports.JS = JS;
exports.JSExportName = JSExportName;
exports.JS_CURRENT_ISOLATE_CONTEXT = JS_CURRENT_ISOLATE_CONTEXT;
exports.IsolateContext = IsolateContext;
exports.JS_SET_CURRENT_ISOLATE = JS_SET_CURRENT_ISOLATE;
exports.JS_CREATE_ISOLATE = JS_CREATE_ISOLATE;
exports.JS_EMBEDDED_GLOBAL = JS_EMBEDDED_GLOBAL;
exports.JS_STRING_CONCAT = JS_STRING_CONCAT;
exports.rest = rest;
