// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:analyzer/src/generated/element.dart';
import 'package:analyzer/src/generated/ast.dart' hide ConstantEvaluator;

import '../../js/js_ast.dart' as JS;

abstract class Backend {
  LibraryBuilder libraryBuilder(LibraryElement element);
  // JS.Expression buildTypeLiteral(JS.TypeRef typeRef);
}

abstract class LibraryBuilder {
  LibraryElement get element;
  LibraryPartBuilder libraryPartBuilder(CompilationUnitElement element);

  void build();
}

abstract class LibraryPartBuilder {
  CompilationUnitElement get element;
  void buildTypedef(
      FunctionTypeAliasElement element,
      JS.TypeRef returnType, List<JS.TypeRef> paramTypes);

  ClassBuilder classBuilder(ClassElement element, ClassDeclaration node);
}

abstract class ClassBuilder {
  ClassElement get element;
  ClassDeclaration get node;

  final dartxNames = <JS.Expression>[];
  final overrideFields = <JS.Expression>[];
  final extensionNames = <JS.Expression>[];
  final metadataExpressions = <JS.Expression>[];
  final constructorNames = <JS.Expression>[];

  final mixinTypeRefs = <JS.TypeRef>[];
  final implementedTypeRefs = <JS.TypeRef>[];
  final genericTypeNames = <String>[];

  JS.Expression signature;
  JS.Expression deferredSuperType;
  JS.Expression jsPeerName;
  JS.TypeRef parentTypeRef;
  JS.TypeRef deferredParentTypeRef;

  addConstructor(Element element, JS.Expression name, JS.Expression body);
  addNamedConstructor(Element element, JS.Expression name, JS.Expression body);
  addMethod(MethodElement element, JS.Expression name, JS.Fun body);
  addGetter(MethodElement element, JS.Expression name, JS.Fun body);
  addSetter(MethodElement element, JS.Expression name, JS.Fun body);

  void build();
}

/// Useful base impl class for [ClassBuilder].
abstract class DefaultClassBuilder extends ClassBuilder {
  final constructors = <Element, Map<JS.Expression, JS.Expression>>{};
  final namedConstructors = <Element, Map<JS.Expression, JS.Expression>>{};
  final methods = <MethodElement, Map<JS.Expression, JS.Fun>>{};
  final getters = <MethodElement, Map<JS.Expression, JS.Fun>>{};
  final setters = <MethodElement, Map<JS.Expression, JS.Fun>>{};

  addConstructor(Element element, JS.Expression name, JS.Expression body) =>
      constructors.putIfAbsent(element, () => {})[name] = body;

  addNamedConstructor(Element element, JS.Expression name, JS.Expression body) =>
      namedConstructors.putIfAbsent(element, () => {})[name] = body;

  addMethod(MethodElement element, JS.Expression name, JS.Fun body) =>
      methods.putIfAbsent(element, () => {})[name] = body;

  addGetter(MethodElement element, JS.Expression name, JS.Fun body) =>
      getters.putIfAbsent(element, () => {})[name] = body;

  addSetter(MethodElement element, JS.Expression name, JS.Fun body) =>
      setters.putIfAbsent(element, () => {})[name] = body;
}
