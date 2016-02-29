import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/type.dart';
import 'package:analyzer/dart/ast/ast.dart';
import 'package:dev_compiler/src/info.dart';
import 'package:analyzer/src/generated/utilities_dart.dart';
import 'dart:io';

enum MemberKind {
  method, getter, setter
}

getMember(ClassElement cls, MemberKind kind, String name) {
  switch (kind) {
    case MemberKind.method:
      return cls.getMethod(name);
    case MemberKind.getter:
      return cls.getGetter(name) ?? cls.getField(name)?.getter;
    case MemberKind.setter:
      return cls.getSetter(name) ?? cls.getField(name)?.setter;
    default:
      throw new ArgumentError.value(kind, 'kind', 'unknown');
  }
}

FunctionElement findMain(LibraryUnit library) {
  for (var unit in library.libraryThenParts) {
    for (var decl in unit.declarations) {
      if (decl.element is FunctionElement && decl.element.name == 'main') {
        return decl.element;
      }
    }
  }
  throw new StateError("Didn't find any main method in $library");
}

bool _isPublic(String name) => !name.startsWith('_');

Iterable<Element> getPublicElements(Element e) sync* {
  if (_isPublic(e.name)) {
    yield e;
    if (e is PropertyInducingElement) {
      if (e.getter != null) yield e.getter;
      if (e.setter != null) yield e.setter;
    } else if (e is ClassElement) {
      for (var m in e.constructors) {
        if (_isPublic(m.name)) yield m;
      }
      for (var m in e.methods) {
        if (_isPublic(m.name)) yield m;
      }
      for (var m in e.fields) {
        yield* getPublicElements(m);
      }
    }
  }
}

class CallSignature {
  final String name;
  final int positionalArgCount;
  final Set<String> namedArgNames;
  CallSignature(this.name, this.positionalArgCount, this.namedArgNames);

  toString() => '$name($positionalArgCount, $namedArgNames)';

  factory CallSignature.forArgs(String name, List<Expression> args) {
    var positionalArgCount = 0;
    var namedArgNames = new Set<String>();
    for (var arg in args) {
      if (arg is NamedExpression) {
        namedArgNames.add(arg.name.label.name);
      } else {
        positionalArgCount++;
      }
    }
    return new CallSignature(name, positionalArgCount, namedArgNames);
  }

  bool matches(ExecutableElement e) {
    int namedFound = 0;
    int reqCount = 0;
    int posCount = 0;
    for (var p in e.parameters) {
      switch (p.parameterKind) {
        case ParameterKind.REQUIRED:
          reqCount++;
          break;
        case ParameterKind.POSITIONAL:
          posCount++;
          break;
        case ParameterKind.NAMED:
          if (namedArgNames.contains(p.name)) namedFound++;
          break;
      }
    }
    var res = positionalArgCount >= reqCount &&
        positionalArgCount <= reqCount + posCount &&
        namedFound == namedArgNames.length;

    if (!res) stderr.writeln('matches($e, $this) = $res\n\t(reqCount = $reqCount, posCount = $posCount, namedFound = $namedFound)');
    return res;
  }
}

abstract class MemberResolver {
  Iterable<DartType> getPossibleTypes(Expression node);
  Iterable<ClassMemberElement> getPossibleMembers(
      Expression target, ClassElement targetElement,
      MemberKind kind, CallSignature callSignature);
}
