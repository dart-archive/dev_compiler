// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

library dev_compiler.src.codegen.default_backend;

// TODO(jmesserly): import from its own package
import '../js/dart_nodes.dart';
import '../js/js_ast.dart' as JS;
import '../js/js_ast.dart' show js;

import 'backend.dart';
import 'js_names.dart' as JS;
import 'js_metalet.dart' as JS;
import 'package:analyzer/src/generated/element.dart' as analyzer;

const DPUT = 'dput';
const DLOAD = 'dload';
const DINDEX = 'dindex';
const DSETINDEX = 'dsetindex';
const DCALL = 'dcall';
const DSEND = 'dsend';

class DefaultJsBackend extends JsBackend {
  Function _statement;

  DefaultJsBackend(JS.Statement this._statement(List<JS.Statement> statements));

  @override
  JS.Expression visitDartMethodCall(DartMethodCall node) {
    var target = node.target;
    var memberName = node.memberName;
    var arguments = node.arguments;

    switch (node.callType) {
      case DartMethodCallType.dsend:
        return js.call('dart.$DSEND(#, #, #)',
            [target, memberName, arguments]);

      case DartMethodCallType.dcall:
        if (target == null) {
          return js.call('dart.$DCALL(#, #)', [memberName, arguments]);
        } else {
          return js.call('dart.$DCALL(#.#, #)',
                [target, memberName, arguments]);
        }

      case DartMethodCallType.staticDispatch:
        return js.call('dart.#(#, #)',
            [memberName, target, arguments]);

      case DartMethodCallType.directDispatch:
        if (target == null) {
          return js.call('#(#)', [memberName, arguments]);
        } else {
          return js.call('#.#(#)', [target, memberName, arguments]);
        }

      default:
        throw new StateError('Invalid call type: ${node.callType}');
    }
  }

  @override
  JS.Node visitDartCallableDeclaration(DartCallableDeclaration node) {
    JS.Method method;
    var element = node.element;
    // if (element is analyzer.MethodElement) {
    //
    // } else
    if (element is analyzer.PropertyAccessorElement) {
      method = new JS.Method(node.name, node.body,
          isGetter: element.isGetter,
          isSetter: element.isSetter,
          isStatic: element.isStatic);
    } else if (element is analyzer.ConstructorElement) {
      method = new JS.Method(node.name, node.body, isStatic: element.isFactory);
    } else if (element is analyzer.ClassElement) {
      method = new JS.Method(node.name, node.body);
    } else {
      // TODO('visitDartCallableDeclaration: ${element.runtimeType}');
      method = new JS.Method(node.name, node.body,
          isStatic: (element?.isStatic ?? false));
    }
    return //annotate(
          method;//..sourceInformation = node;
          //node.element);
  }

  @override
  JS.Node visitDartClassDeclaration(DartClassDeclaration node) {
    var classElem = node.element;
    var name = classElem.name;
    var body = <JS.Statement>[];

    var cls = new JS.ClassExpression(
        new JS.Identifier(classElem.type.name),
        node.parentRef,
        node.members.map(visit).toList());

    if (node.extensionNames.isNotEmpty) {
      body.add(js.statement('dart.defineExtensionNames(#)',
          [new JS.ArrayInitializer(node.extensionNames, multiline: true)]));
    }

    body.add(new JS.ClassDeclaration(cls));

    // TODO(jmesserly): we should really just extend native Array.
    if (node.jsPeerName != null && classElem.typeParameters.isNotEmpty) {
      body.add(js.statement('dart.setBaseClass(#, dart.global.#);',
          [classElem.name, node.jsPeerName]));
    }

    // Deferred Superclass
    if (node.deferredParentRef != null) {
      body.add(js.statement('#.prototype.__proto__ = #.prototype;',
          [name, node.deferredParentRef]));
    }

    // Interfaces
    if (node.implementedRefs.isNotEmpty) {
      body.add(js.statement('#[dart.implements] = () => #;', [
        name,
        new JS.ArrayInitializer(node.implementedRefs)
      ]));
    }

    // Named constructors
    for (var ctorName in node.constructorNames) {
      body.add(js.statement('dart.defineNamedConstructor(#, #);',
          [name, ctorName]));
    }

    // Instance fields, if they override getter/setter pairs
    for (var overrideField in node.overrideFields) {
      return js.statement('dart.virtualField(#, #)', [cls.name, overrideField]);
    }

    // Emit the signature on the class recording the runtime type information

    if (node.signature != null) {
      var classExpr = new JS.Identifier(name);
      body.add(js.statement('dart.setSignature(#, #);', [classExpr, node.signature]));
    }

    // If a concrete class implements one of our extensions, we might need to
    // add forwarders.
    if (node.extensionNames.isNotEmpty) {
      body.add(js.statement('dart.defineExtensionMembers(#, #);', [
        name,
        new JS.ArrayInitializer(node.extensionNames,
            multiline: node.extensionNames.length > 4)
      ]));
    }

    // TODO(vsm): Make this optional per #268.
    if (node.metadataExpressions.isNotEmpty) {
      body.add(js.statement('#[dart.metadata] = () => #;', [
        name,
        new JS.ArrayInitializer(node.metadataExpressions)
      ]));
    }

    return _statement(body);
  }

  @override
  JS.Node visitDartDeclaration(DartDeclaration node) =>
      TODO('visitDartDeclaration');

  @override
  JS.Node visitDartLibrary(DartLibrary node) =>
      TODO('visitDartLibrary');

  @override
  JS.Node visitDartLibraryPart(DartLibraryPart node) =>
      TODO('visitDartLibraryPart');

  @override
  JS.Node visitDartTypedef(DartTypedef node) =>
      TODO('visitDartTypedef');

  @override
  JS.Node visitOpaqueDartDeclaration(OpaqueDartDeclaration node) =>
      node.statement;

  TODO(String s) => throw new StateError('TODO: $s');
}
