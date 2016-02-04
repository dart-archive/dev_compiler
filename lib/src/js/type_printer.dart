// Copyright (c) 2012, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

part of js_ast;

enum TypeFormat {
  typeScript, closure
}

abstract class TypePrinter extends TypeRefVisitor {
  Function out;
  Function visit;
  TypePrinter._(this.out, this.visit);
  factory TypePrinter(TypeFormat format, void out(String s), void visit(Node node)) {
    switch (format) {
      case TypeFormat.typeScript:
        return new TypeScriptTypePrinter(out, visit);
      case TypeFormat.closure:
        return new ClosureTypePrinter(out, visit);
      default:
        return null;
    }
  }

  visitSeparated(String separator, List items, [action(dynamic item)]) {
    action ??= visit;
    var first = true;
    for (var item in items) {
      if (first) {
        first = false;
      } else {
        out(separator);
      }
      action(item);
    }
  }
}

class TypeScriptTypePrinter extends TypePrinter implements TypeRefVisitor {
  TypeScriptTypePrinter(out, visit) : super._(out, visit);

  @override
  visitGenericTypeRef(GenericTypeRef node) {
    visit(node.rawType);
    if (node.typeParams.isNotEmpty) {
      out('<');
      visitSeparated(", ", node.typeParams);
      out('>');
    }
  }

  @override
  visitOptionalTypeRef(OptionalTypeRef node) {
    visit(node);
  }

  @override
  visitRecordTypeRef(RecordTypeRef node) {
    out('{');
    visitSeparated(", ", node.types.keys, (Identifier name) {
      var type = node.types[name];
      visit(name);
      if (type is OptionalTypeRef) {
        out("?: ");
        visit(type.type);
      } else {
        out(": ");
        visit(type);
      }
    });
    out('}');
  }

  @override
  visitNamedTypeRef(NamedTypeRef node) {
    visit(node.name);
  }

  @override
  visitUnionTypeRef(UnionTypeRef node) {
    visitSeparated("|", node.types);
  }

  @override
  visitFunctionTypeRef(FunctionTypeRef node) {
    if (node.returnType == null) {
      out('Function');
    } else {
      out('(');
      visitSeparated(", ", node.paramTypes);
      out(') => ');
      visit(node.returnType);
    }
  }

  @override
  visitJsTypeRef(JsTypeRef node) {
    var type = node.type;
    if (type == JsType.null_) type = JsType.any;
    out(getEnumName(type));
  }
}

class ClosureTypePrinter extends TypePrinter implements TypeRefVisitor {
  ClosureTypePrinter(out, visit) : super._(out, visit);

  @override
  visitGenericTypeRef(GenericTypeRef node) {
    visit(node.rawType);
    if (node.typeParams.isNotEmpty) {
      out('<');
      visitSeparated(", ", node.typeParams);
      out('>');
    }
  }

  @override
  visitOptionalTypeRef(OptionalTypeRef node) {
    visit(node);
    out("=");
  }

  @override
  visitRecordTypeRef(RecordTypeRef node) {
    out('{');
    visitSeparated(", ", node.types.keys, (Identifier name) {
      var type = node.types[name];
      visit(name);
      out(": ");
      visit(type is OptionalTypeRef ? type.orUndefined() : type);
    });
    out('}');
  }

  @override
  visitNamedTypeRef(NamedTypeRef node) {
    visit(node.name);
  }

  @override
  visitUnionTypeRef(UnionTypeRef node) {
    out("(");
    visitSeparated("|", node.types);
    out(")");
  }

  @override
  visitFunctionTypeRef(FunctionTypeRef node) {
    out('function(');
    if (node.paramTypes == null) {
      out("...*");
    } else {
      visitSeparated(", ", node.paramTypes);
    }
    out(')');
    if (node.returnType != null) {
      out(":");
      visit(node.returnType);
    }
  }

  @override
  visitJsTypeRef(JsTypeRef node) {
    var type = node.type;
    switch (type) {
      case JsType.null_:
        out("null");
        break;
      case JsType.any:
        out("*");
        break;
      default:
        out(getEnumName(type));
    }
  }
}
