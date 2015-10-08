part of dart_ast;

abstract class DartVisitor<T> {
  T visit(DartNode node) => node.acceptDart(this);

  T visitDartMethodCall(DartMethodCall node);
  T visitDartLibrary(DartLibrary node);
  T visitDartLibraryPart(DartLibraryPart node);
  T visitDartDeclaration(DartDeclaration node);
  T visitOpaqueDartDeclaration(OpaqueDartDeclaration node);
  T visitDartTypedef(DartTypedef node);
  T visitDartClassDeclaration(DartClassDeclaration node);
  T visitDartCallableDeclaration(DartCallableDeclaration node);
}
