// Copyright (c) 2012, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

part of js_ast;

/// JavaScript type reference.
abstract class TypeRef extends Expression {
  int get precedenceLevel => EXPRESSION;

  TypeRef orUndefined() =>
      new UnionTypeRef([this, new JsTypeRef(JsType.undefined)]);
}

enum JsType {
  string, boolean, object, any, undefined, null_
}

class JsTypeRef extends TypeRef {
  final JsType type;
  JsTypeRef(this.type);
  accept(NodeVisitor visitor) => visitor.visitJsTypeRef(this);
  void visitChildren(NodeVisitor visitor) {}
  _clone() => new JsTypeRef(type);
}

class NamedTypeRef extends TypeRef {
  final Identifier name;
  NamedTypeRef(this.name);
  accept(NodeVisitor visitor) => visitor.visitNamedTypeRef(this);
  void visitChildren(NodeVisitor visitor) =>
      name.accept(visitor);
  _clone() => new NamedTypeRef(name);
}

enum Nullability {
  nullable, nonNullable
}

class GenericTypeRef extends TypeRef {
  final TypeRef rawType;
  final List<TypeRef> typeParams;
  final Nullability nullability;
  GenericTypeRef(this.rawType, this.typeParams, [this.nullability]);

  accept(NodeVisitor visitor) => visitor.visitGenericTypeRef(this);
  void visitChildren(NodeVisitor visitor) {
    rawType.accept(visitor);
    typeParams.forEach((p) => p.accept(visitor));
  }
  _clone() => new GenericTypeRef(rawType, typeParams, nullability);
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
  TypeRef orUndefined() {
    if (types.any((t) => t is JsTypeRef && t.type == JsType.undefined)) {
      return this;
    }
    return super.orUndefined();
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
