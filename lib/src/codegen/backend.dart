// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.codegen.backend;

// TODO(jmesserly): import from its own package
import '../js/dart_nodes.dart';
import '../js/js_ast.dart' as JS;
import 'js_names.dart' as JS;
import 'js_metalet.dart' as JS;

abstract class JsBackend extends DartVisitor<JS.Node> {}
