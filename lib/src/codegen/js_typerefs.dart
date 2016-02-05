// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:analyzer/src/generated/element.dart';
import 'package:analyzer/src/generated/resolver.dart' show TypeProvider;

import '../js/js_ast.dart' as JS;
import '../options.dart';

abstract class TypeRefs {
  TypeProvider get types;

  Map<DartType, JS.TypeRef> __commonTypes;
  Map<DartType, JS.TypeRef> get _commonTypes {
    if (__commonTypes == null) {
      var numberType = new JS.TypeRef.number().orNull();
      __commonTypes = {
        types.intType: numberType,
        types.numType: numberType,
        types.doubleType: numberType,
        types.boolType: new JS.TypeRef.boolean().orNull(),
        types.stringType: new JS.TypeRef.string(),
      };
    }
    return __commonTypes;
  }

  CodegenOptions get options;
  JS.TypeRef emitTopLevelTypeRef(DartType type);

  JS.TypeRef emitTypeRef(DartType type) {
    // _loader.declareBeforeUse(type.element);
    if (!options.closure) return null;

    var jsType = _commonTypes[type];
    if (jsType != null) return jsType;

    if (type == null) new JS.TypeRef.unknown();
    if (type.isBottom || type.isDynamic) new JS.TypeRef.any();
    if (type.isVoid) return new JS.TypeRef.void_();

    if (type is TypeParameterType) return new JS.TypeRef.named(type.name);
    if (type is ParameterizedType) {
      JS.TypeRef rawType;
      if (type is FunctionType && type.name == null) {
        var args = <JS.TypeRef>[]
          ..addAll(type.normalParameterTypes.map(emitTypeRef))
          ..addAll(type.optionalParameterTypes
              .map((t) => emitTypeRef(t).toOptional()));
        if (type.namedParameterTypes.isNotEmpty) {
          var namedArgs = <JS.Identifier, JS.TypeRef>{};
          type.namedParameterTypes.forEach((n, t) {
            namedArgs[new JS.Identifier(n)] = emitTypeRef(t).toOptional();
          });
          args.add(new JS.TypeRef.record(namedArgs).toOptional());
        }
        rawType = new JS.TypeRef.function(emitTypeRef(type.returnType), args);
      } else {
        var jsTypeRef = _getDartJsTypeRef(type);
        if (jsTypeRef != null) return jsTypeRef;

        rawType = emitTopLevelTypeRef(type);
      }
      return type.typeParameters.isEmpty
          ? rawType
          : new JS.TypeRef.generic(
              rawType, type.typeArguments.map(emitTypeRef));
    }
    return new JS.TypeRef.unknown();
  }

  /// Special treatment of types from dart:js
  /// TODO(ochafik): Is this the right thing to do? And what about package:js?
  JS.TypeRef _getDartJsTypeRef(DartType type) {
    switch (type.element.source.uri.toString()) {
      case 'dart:js':
        switch (type.name) {
          case 'JsArray':
            return new JS.TypeRef.array(
                type is InterfaceType && type.typeArguments.length == 1
                    ? emitTypeRef(type.typeArguments.single)
                    : null);
          case 'JsObject':
            return new JS.TypeRef.object();
          case 'JsFunction':
            return new JS.TypeRef.function();
        }
        break;
    }
    return null;
  }
}
