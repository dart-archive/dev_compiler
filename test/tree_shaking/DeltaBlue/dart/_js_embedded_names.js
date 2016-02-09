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
let dartx = dart.dartx;
const GLOBAL_FUNCTIONS = 'globalFunctions';
const CLASS_ID_EXTRACTOR = 'classIdExtractor';
const CLASS_FIELDS_EXTRACTOR = 'classFieldsExtractor';
const INSTANCE_FROM_CLASS_ID = "instanceFromClassId";
const INITIALIZE_EMPTY_INSTANCE = "initializeEmptyInstance";
// Exports:
exports.GLOBAL_FUNCTIONS = GLOBAL_FUNCTIONS;
exports.CLASS_ID_EXTRACTOR = CLASS_ID_EXTRACTOR;
exports.CLASS_FIELDS_EXTRACTOR = CLASS_FIELDS_EXTRACTOR;
exports.INSTANCE_FROM_CLASS_ID = INSTANCE_FROM_CLASS_ID;
exports.INITIALIZE_EMPTY_INSTANCE = INITIALIZE_EMPTY_INSTANCE;
