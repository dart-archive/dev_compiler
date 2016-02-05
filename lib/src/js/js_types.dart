// Copyright (c) 2012, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

part of js_ast;

final _listEquality = const ListEquality();
final _any = new AnyTypeRef._();
final _unknown = new UnknownTypeRef._();
final _null = new NullTypeRef();

/// JavaScript type reference.
abstract class TypeRef extends Expression {
  int get precedenceLevel => EXPRESSION;

  TypeRef();
  factory TypeRef.any() => _any;
  factory TypeRef.void_() => null;
  factory TypeRef.unknown() => _unknown;
  factory TypeRef.generic(TypeRef rawType, Iterable<TypeRef> typeParams) =>
    typeParams.isEmpty
        ? rawType
        : new GenericTypeRef(rawType, typeParams.toList());
  factory TypeRef.array([TypeRef elementType]) =>
      elementType == null ? new TypeRef.named('Array') : new ArrayTypeRef(elementType);
  factory TypeRef.object([TypeRef keyType, TypeRef valueType]) {
    var rawType = new TypeRef.named('Object');
    return keyType == null && valueType == null
        ? rawType
        : new GenericTypeRef(rawType, [keyType ?? _any, valueType ?? _any]);
  }
  factory TypeRef.function([TypeRef returnType, List<TypeRef> paramTypes]) =>
      returnType == null && paramTypes == null
          ? new TypeRef.named('Function')
          : new FunctionTypeRef(returnType, paramTypes);
  factory TypeRef.record(Map<Identifier, TypeRef> types) =>
      new RecordTypeRef(types);
  factory TypeRef.string() => new TypeRef.named('string');
  factory TypeRef.number() => new TypeRef.named('number');
  factory TypeRef.undefined() => new TypeRef.named('undefined');
  factory TypeRef.boolean() => new TypeRef.named('boolean');

  static final _namedCache = <String, TypeRef>{};
  factory TypeRef.qualified(List<Identifier> path) =>
      _namedCache.putIfAbsent(
          path.map((p) => p.name).join('.'),
          () => new QualifiedTypeRef(path));
  factory TypeRef.named(String name) =>
      new TypeRef.qualified([new Identifier(name)]);

  bool get isAny => this is AnyTypeRef;
  bool get isUnknown => this is UnknownTypeRef;
  bool get isNull => this is NullTypeRef;

  TypeRef or(TypeRef other) => new UnionTypeRef([this, other]);

  TypeRef orUndefined() => or(new TypeRef.undefined());
  TypeRef orNull() => or(_null);

  TypeRef toOptional() =>
      new OptionalTypeRef(this);
}

class AnyTypeRef extends TypeRef {
  AnyTypeRef._() : super();

  factory AnyTypeRef() => _any;
  accept(NodeVisitor visitor) => visitor.visitAnyTypeRef(this);
  void visitChildren(NodeVisitor visitor) {}
  _clone() => new AnyTypeRef();
}

class NullTypeRef extends QualifiedTypeRef {
  NullTypeRef() : super([new Identifier("null")]);
  _clone() => new NullTypeRef();
}

class UnknownTypeRef extends TypeRef {
  UnknownTypeRef._() : super();

  factory UnknownTypeRef() => _unknown;
  accept(NodeVisitor visitor) => visitor.visitUnknownTypeRef(this);
  void visitChildren(NodeVisitor visitor) {}
  _clone() => new UnknownTypeRef();
}

class QualifiedTypeRef extends TypeRef {
  final List<Identifier> path;
  QualifiedTypeRef(this.path);

  accept(NodeVisitor visitor) => visitor.visitQualifiedTypeRef(this);
  void visitChildren(NodeVisitor visitor) =>
      path.forEach((p) => p.accept(visitor));
  _clone() => new QualifiedTypeRef(path);
}

// class NamedTypeRef extends TypeRef {
//   final Expression name;
//   NamedTypeRef(this.name);
//
//   accept(NodeVisitor visitor) => visitor.visitNamedTypeRef(this);
//   void visitChildren(NodeVisitor visitor) =>
//       name.accept(visitor);
//   _clone() => new NamedTypeRef(name);
// }
class ArrayTypeRef extends TypeRef {
  final TypeRef elementType;
  ArrayTypeRef(this.elementType);
  accept(NodeVisitor visitor) => visitor.visitArrayTypeRef(this);
  void visitChildren(NodeVisitor visitor) {
    elementType.accept(visitor);
  }
  _clone() => new ArrayTypeRef(elementType);
}
class GenericTypeRef extends TypeRef {
  final TypeRef rawType;
  final List<TypeRef> typeParams;
  GenericTypeRef(this.rawType, this.typeParams);

  // @override operator==(other) =>
  //     other is GenericTypeRef &&
  //     rawType == other.rawType &&
  //     _listEquality.equals(typeParams, other.typeParams);
  // // TODO(ochafik): Use something else?
  // @override get hashCode =>
  //     ([rawType]..addAll(typeParams ?? [])).map((t) => t.hashCode).reduce((a, b) => a ^ b);

  accept(NodeVisitor visitor) => visitor.visitGenericTypeRef(this);
  void visitChildren(NodeVisitor visitor) {
    rawType.accept(visitor);
    typeParams.forEach((p) => p.accept(visitor));
  }
  _clone() => new GenericTypeRef(rawType, typeParams);
}

class UnionTypeRef extends TypeRef {
  final List<TypeRef> types;
  UnionTypeRef(this.types);

  accept(NodeVisitor visitor) => visitor.visitUnionTypeRef(this);
  void visitChildren(NodeVisitor visitor) {
    types.forEach((p) => p.accept(visitor));
  }
  _clone() => new UnionTypeRef(types);

  @override
  TypeRef or(TypeRef other) {
    if (types.contains(other)) return this;
    return new UnionTypeRef([]..addAll(types)..add(other));
  }
}

class OptionalTypeRef extends TypeRef {
  final TypeRef type;
  OptionalTypeRef(this.type);

  accept(NodeVisitor visitor) => visitor.visitOptionalTypeRef(this);
  void visitChildren(NodeVisitor visitor) {
    type.accept(visitor);
  }
  _clone() => new OptionalTypeRef(type);

  @override
  TypeRef orUndefined() => this;
}

class RecordTypeRef extends TypeRef {
  final Map<Identifier, TypeRef> types;
  RecordTypeRef(this.types);

  accept(NodeVisitor visitor) => visitor.visitRecordTypeRef(this);
  void visitChildren(NodeVisitor visitor) {
    types.values.forEach((p) => p.accept(visitor));
  }
  _clone() => new RecordTypeRef(types);
}

class FunctionTypeRef extends TypeRef {
  final TypeRef returnType;
  final List<TypeRef> paramTypes;
  FunctionTypeRef(this.returnType, this.paramTypes);

  accept(NodeVisitor visitor) => visitor.visitFunctionTypeRef(this);
  void visitChildren(NodeVisitor visitor) {
    returnType.accept(visitor);
    paramTypes.forEach((p) => p.accept(visitor));
  }
  _clone() => new FunctionTypeRef(returnType, paramTypes);
}
