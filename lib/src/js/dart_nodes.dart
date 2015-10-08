// Copyright (c) 2012, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

/// The pseudo-nodes defined here are not JS [Node] subclasses, but they are
/// still [Visitable] as they may contain nested JS [Node].
///
/// For instance, a [DartClassDeclaration] will contain JS [Fun] bodies for
/// its converted methods. A [DartMethodCall] will contain the converted JS
/// arguments of the method call, etc.
library dart_ast;

import '../js/js_ast.dart' as JS;
import 'js_types.dart';
import 'package:analyzer/src/generated/element.dart';
import 'package:dev_compiler/src/info.dart';
import 'package:analyzer/analyzer.dart';

part 'dart_visitor.dart';

enum DartMethodCallType {
  dsend, dcall, directDispatch, staticDispatch
}

abstract class DartNode {
  var sourceInformation;
  acceptDart(DartVisitor visitor);
}

class DartMethodCall extends JS.Node with DartNode {
  /// Can be this, an expression or null (for global functions).
  final JS.Expression target;
  //final SimpleIdentifier memberName;
  final JS.Expression memberName;
  final List<JS.Expression> arguments;
  /// Prepare for generic method calls.
  final List<TypeRef> typeArguments;
  /// If true, some dynamic call will be needed (which might involve a reference
  /// to the signature).
  final DartMethodCallType callType;
  DartMethodCall(this.callType, this.target, this.memberName, this.arguments,
      [this.typeArguments = const<TypeRef>[]]);

  @override accept(JS.NodeVisitor visitor) => null;
  @override acceptDart(DartVisitor visitor) =>
      visitor.visitDartMethodCall(this);

  @override void visitChildren(JS.NodeVisitor visitor) {
    target?.accept(visitor);
    arguments.forEach((a) => a.accept(visitor));
    typeArguments.forEach((a) => a.accept(visitor));
  }
}

/// TODO(ochafik): Store [LibraryElement]?
class DartLibrary extends DartNode {
  final LibraryUnit libraryUnit;
  final List<DartLibraryPart> parts;
  DartLibrary(this.libraryUnit, this.parts);

  @override
  acceptDart(DartVisitor visitor) => visitor.visitDartLibrary(this);
}

class DartLibraryPart extends DartNode {
  /// Note: has uri.
  final CompilationUnitElement compilationUnitElement;
  final List<DartDeclaration> declarations;
  DartLibraryPart(this.compilationUnitElement, this.declarations);

  @override
  acceptDart(DartVisitor visitor) => visitor.visitDartLibraryPart(this);
}

abstract class DartDeclaration extends JS.Visitable with DartNode {
  Element get element;
  // String get name => element.name;
  List<String> get genericTypeNames;
}

/// TODO(ochafik): Remove this once all top-level statements are migrated.
class OpaqueDartDeclaration extends DartDeclaration {
  JS.Statement statement;
  OpaqueDartDeclaration(this.statement);

  Element get element => null;
  List<String> get genericTypeNames => const[];

  @override accept(JS.NodeVisitor visitor) => statement.accept(visitor);
  @override acceptDart(DartVisitor visitor) => visitor.visitOpaqueDartDeclaration(this);

  @override void visitChildren(JS.NodeVisitor visitor) {
    statement.visitChildren(visitor);
  }
}

class DartTypedef extends DartDeclaration {
  final FunctionTypeAliasElement element;
  final TypeRef returnType;
  final List<TypeRef> paramTypes;
  List<String> get genericTypeNames => const<String>[];

  DartTypedef(this.element, this.returnType, this.paramTypes);

  @override
  acceptDart(DartVisitor visitor) => visitor.visitDartTypedef(this);

  @override accept(JS.NodeVisitor visitor) => null;

  @override void visitChildren(JS.NodeVisitor visitor) {
    returnType?.accept(visitor);
    paramTypes.forEach((a) => a.accept(visitor));
  }
}

/// JS node that gathers the JS output of a Dart class.
/// This output is kept abstract in this node and needs to be lowered down to
/// "normal" JS nodes like [ClassDeclaration] and potentially other support
/// statements / function calls.
///
/// TODO(ochafik): Store [ClassElement]?
class DartClassDeclaration extends DartDeclaration {
  final ClassElement element;
  final JS.Expression jsPeerName;
  final TypeRef parentRef;
  final TypeRef deferredParentRef;
  final List<TypeRef> mixinRefs;
  final List<TypeRef> implementedRefs;
  final List<String> genericTypeNames;
  final List<DartCallableDeclaration> members;
  final List<JS.Expression> dartxNames;
  final List<JS.Expression> overrideFields;
  final List<JS.Expression> extensionNames;
  final List<JS.Expression> metadataExpressions;
  final List<JS.Expression> constructorNames;
  JS.Expression signature;
  JS.Expression deferredSuperType;

  DartClassDeclaration(
      {this.element,
      this.jsPeerName,
      this.parentRef,
      this.deferredParentRef,
      this.mixinRefs,
      this.implementedRefs,
      this.genericTypeNames,
      this.dartxNames,
      this.overrideFields,
      this.extensionNames,
      this.metadataExpressions,
      this.constructorNames,
      this.signature,
      this.deferredSuperType,
      this.members});

  @override
  acceptDart(DartVisitor visitor) => visitor.visitDartClassDeclaration(this);

  @override accept(JS.NodeVisitor visitor) => null;

  @override void visitChildren(JS.NodeVisitor visitor) {
    parentRef?.accept(visitor);
    mixinRefs.forEach((a) => a.accept(visitor));
    implementedRefs.forEach((a) => a.accept(visitor));
    members.forEach((a) => a.accept(visitor));
  }
}

enum DartCallableKind {
  constructor,
  namedConstructor,
  function,
  /// Note that the body of static fields is lazy.
  value,
  getter,
  setter
}

enum DartCallableStorage {
  topLevel,
  instanceMember,
  classMember
}

class DartModifiers {
  // final bool isStatic;
  final bool isConst;
  final bool isFinal;
  DartModifiers(
      {this.isConst : false,
      this.isFinal : false});
}

/// Representation of a "callable" Dart element such as fields, top-level values
/// and functions, constructors, methods, accessors.
/// TODO(ochafik): Store [ExecutableElement]?
class DartCallableDeclaration extends DartDeclaration {
  /// A [ClassMemberElement] or [VariableElement].
  final Element element;
  final JS.Expression name;
  final DartCallableStorage storage;
  final DartCallableKind kind;
  List<String> get genericTypeNames => const<String>[];
  /// Can be a [Fun] for executable declarations (getters, functions), or any
  /// expression for fields / top-level vars.
  final JS.Expression body;

  /// Left intentionally mutable for now. Some passes will update this.
  String comment;

  DartCallableDeclaration._(this.element, this.kind, this.storage, this.name, this.body) {
    // assert(element is PropertyAccessorElement || element is || element is VariableElement);
    // Check body type.
    assert(body is JS.Fun);
    // assert((body is JS.Fun) || (kind == DartCallableKind.value));
    // Check params.
    switch (kind) {
      case DartCallableKind.getter:
        assert(name != null);
        assert(body is JS.Fun && (body as JS.Fun).params.isEmpty);
        break;
      case DartCallableKind.setter:
        assert(name != null);
        assert(body is JS.Fun && (body as JS.Fun).params.length == 1);
        break;
      case DartCallableKind.function:
        assert(name != null);
        assert(body is JS.Fun);
        break;
      default:
        break;
    }
  }

  @override
  acceptDart(DartVisitor visitor) => visitor.visitDartCallableDeclaration(this);

  @override accept(JS.NodeVisitor visitor) => null;

  @override void visitChildren(JS.NodeVisitor visitor) {
    body?.accept(visitor);
  }
}

// // Dart AST creation helpers.
// // TODO(ochafik): Simplify? Remove? Beautify?
//
// /// [element] is a [ClassElement] or a [ConstructorElement].
// /// [body] is null for redirected factory constructors.
DartCallableDeclaration newDartConstructor(Element element, JS.Expression name, JS.Expression body) =>
    new DartCallableDeclaration._(
        element,
        DartCallableKind.constructor,
        DartCallableStorage.topLevel,
        name,
        body);

DartCallableDeclaration newDartNamedConstructor(Element element, JS.Expression name, JS.Expression body) =>
    new DartCallableDeclaration._(
        element,
        DartCallableKind.constructor,
        DartCallableStorage.topLevel,
        name,
        body);

// DartCallableDeclaration newDartField(FieldElement element, JS.Expression body) =>
//     new DartCallableDeclaration._(
//         element,
//         DartCallableKind.value,
//         element.isStatic ? DartCallableStorage.classMember : DartCallableStorage.instanceMember,
//         body);
//
// DartCallableDeclaration newDartTopLevelValue(TopLevelVariableElement element, JS.Expression body) =>
//     new DartCallableDeclaration._(element, DartCallableKind.value, DartCallableStorage.topLevel, body);
//
// DartCallableDeclaration newDartTopLevelFunction(FunctionElement element, JS.Fun body) =>
//     new DartCallableDeclaration._(element, DartCallableKind.function, DartCallableStorage.topLevel, body);
//
DartCallableDeclaration newDartMethod(ExecutableElement element, JS.Expression name, JS.Fun body) =>
    new DartCallableDeclaration._(
        element,
        DartCallableKind.function,
        element?.isStatic == true ? DartCallableStorage.classMember : DartCallableStorage.instanceMember,
        name,
        body);
//
// DartCallableDeclaration newDartSyntheticMethod(String name, DartType returnType, Map<String, DartType> paramTypes, JS.Fun body) {
//   var params = <ParameterElement>[];
//   paramTypes.forEach((name, type) {
//     params.add(new ParameterElementImpl(name, -1)..synthetic = true..type = type);
//   });
//   var element = new MethodElementImpl(name, -1)
//     ..synthetic = true
//     ..returnType = returnType
//     ..parameters = params;
//   element.type = new FunctionTypeImpl(element);
//   return newDartMethod(element, body);
// }
//
// DartCallableDeclaration newDartGetter(PropertyAccessorElement element, JS.Fun body) =>
//     new DartCallableDeclaration._(
//         element,
//         DartCallableKind.getter,
//         element.isStatic ? DartCallableStorage.classMember : DartCallableStorage.instanceMember,
//         body);
//
// DartCallableDeclaration newDartSetter(PropertyAccessorElement element, JS.Fun body) =>
//     new DartCallableDeclaration._(
//         element,
//         DartCallableKind.setter,
//         element.isStatic ? DartCallableStorage.classMember : DartCallableStorage.instanceMember,
//         body);
//
// JS.Expression newDartTypeExpression(DartType type) =>
//     new JS.PlaceholderExpression(new DartTypeRef(type));
