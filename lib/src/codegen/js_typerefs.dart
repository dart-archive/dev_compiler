// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:analyzer/src/generated/element.dart';
import 'package:analyzer/src/generated/resolver.dart' show TypeProvider;
import 'package:dev_compiler/src/js/js_ast.dart' as JS show TypeRef, Identifier, Expression;

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

  bool get shouldEmitTypes;

  JS.TypeRef emitTypeRef(DartType type) {
    // _loader.declareBeforeUse(type.element);
    if (!shouldEmitTypes) return null;

    var jsType = _commonTypes[type];
    if (jsType != null) return jsType;

    if (type == null || type.isBottom || type.isDynamic) {
      return new JS.TypeRef.any();
    }
    if (type.isVoid) return new JS.TypeRef.void_();

    if (type is TypeParameterType) return new JS.TypeRef.named(type.name);
    if (type is ParameterizedType) {
      JS.TypeRef rawType;
      // Typedefs may have
      if (type is FunctionType && type.name != '') {
        //_emitTopLevelName
      } else {
        rawType = emitTopLevelName(type.element);
      }
      if (type is FunctionType) {

      JS.TypeRef aux() {

        return TODO();
      }
      return new JS.TypeRef.generic(aux(), type.typeParameters.map((p) => emitTypeRef(p.type)));
    }
    // if (type is FunctionType) {
    //   return _emitFunctionTypeRef(type);
    //   if (type.element.name != '') {
    //     return new JS.TypeRef.qualifiedNamed(getQualifiedName(type.element));
    //   }
    //   var args = <JS.TypeRef>[]
    //     ..addAll(type.normalParameterTypes.map(emitTypeRef))
    //     ..addAll(type.optionalParameterTypes
    //         .map((t) => emitTypeRef(t).toOptional()));
    //   if (type.namedParameterTypes.isNotEmpty) {
    //     var namedArgs = <JS.Identifier, JS.TypeRef>{};
    //     type.namedParameterTypes.forEach((n, t) {
    //       namedArgs[new JS.Identifier(n)] = emitTypeRef(t).toOptional();
    //     });
    //     args.add(new JS.TypeRef.record(namedArgs).toOptional());
    //   }
    //   return new JS.TypeRef.function(
    //       emitTypeRef(type.returnType), args);
    // }
    // if (type is InterfaceType) {
    //   var typeRef = _getDartJsTypeRef(type);
    //   if (typeRef != null) return typeRef;
    //
    //   return _typeRefForClass(type.element, type);
    // }
    return new JS.TypeRef.unknown();
  }

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

  /// TODO(ochafik): Use a package-and-file-uri-dependent naming, since libraries can collide.
  // String _getFullName(ClassElement type) =>
  //     type.library.name == '' ? type.name : '${type.library.name}.${type.name}';

  /// Must return a JavaScript qualified name that can be used to refer to [type].
  JS.Expression getQualifiedName(DartType type,
      {bool lowerTypedef: false, bool lowerGeneric: false}) {

    // TODO(jmesserly): like constants, should we hoist function types out of
    // methods? Similar issue with generic types. For all of these, we may want
    // to canonicalize them too, at least when inside the same library.
    var name = type.name;
    var element = type.element;
    if (name == '' || name == null || lowerTypedef) {
      var parts = _emitFunctionTypeParts(type as FunctionType);
      return js.call('dart.functionType(#)', [parts]);
    }
    // For now, reify generic method parameters as dynamic
    // bool _isGenericTypeParameter(DartType type) =>
    //     (type is TypeParameterType) &&
    //     !(type.element.enclosingElement is ClassElement ||
    //         type.element.enclosingElement is FunctionTypeAliasElement);

    // if (_isGenericTypeParameter(type)) {
    //   return js.call('dart.dynamic');
    // }

    if (type is TypeParameterType) {
      return new JS.Identifier(name);
    }

    if (type is ParameterizedType) {
      var args = type.typeArguments;
      var isCurrentClass =
          args.isNotEmpty && _loader.isCurrentElement(type.element);
      Iterable jsArgs = null;
      if (args
          .any((a) => a != types.dynamicType && !_isGenericTypeParameter(a))) {
        jsArgs = args.map(_emitTypeName);
      } else if (lowerGeneric || isCurrentClass) {
        // When creating a `new S<dynamic>` we try and use the raw form
        // `new S()`, but this does not work if we're inside the same class,
        // because `S` refers to the current S<T> we are generating.
        jsArgs = [];
      }
      if (jsArgs != null) {
        var genericName = _emitTopLevelName(element, suffix: '\$');
        return js.call('#(#)', [genericName, jsArgs]);
      }
    }

    return _emitTopLevelName(element);
  }
}
