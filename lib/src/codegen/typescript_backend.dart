// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'es6_backend.dart';
import 'module_builder.dart';
import '../utils.dart';
import '../compiler.dart';

class TypeScriptBackend extends Es6Backend {
  TypeScriptBackend(
      AbstractCompiler compiler, ModuleBuilderFactory moduleBuilderFactory)
          : super(compiler, moduleBuilderFactory);
}
