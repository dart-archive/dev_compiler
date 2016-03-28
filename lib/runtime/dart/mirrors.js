dart_library.library('dart/mirrors', null, /* Imports */[
  'dart/_runtime',
  'dart/core'
], /* Lazy imports */[
  'dart/_js_mirrors'
], function(exports, dart, core, _js_mirrors) {
  'use strict';
  let dartx = dart.dartx;
  exports[dart.uri] = 'dart:mirrors';
  class MirrorSystem extends core.Object {
    findLibrary(libraryName) {
      return this.libraries[dartx.values][dartx.singleWhere](dart.fn(library => dart.equals(library.simpleName, libraryName), core.bool, [LibraryMirror]));
    }
    static getName(symbol) {
      return _js_mirrors.getName(symbol);
    }
    static getSymbol(name, library) {
      if (library === void 0) library = null;
      return _js_mirrors.getSymbol(name, library);
    }
  }
  dart.setSignature(MirrorSystem, {
    methods: () => ({findLibrary: [LibraryMirror, [core.Symbol]]}),
    statics: () => ({
      getName: [core.String, [core.Symbol]],
      getSymbol: [core.Symbol, [core.String], [LibraryMirror]]
    }),
    names: ['getName', 'getSymbol']
  });
  MirrorSystem[dart.owner] = exports;
  function currentMirrorSystem() {
    return dart.as(_js_mirrors.currentJsMirrorSystem, MirrorSystem);
  }
  dart.fn(currentMirrorSystem, MirrorSystem, []);
  function reflect(reflectee) {
    return _js_mirrors.reflect(reflectee);
  }
  dart.fn(reflect, () => dart.definiteFunctionType(InstanceMirror, [core.Object]));
  function reflectClass(key) {
    if (!dart.is(key, core.Type) || dart.equals(key, dart.dynamic)) {
      dart.throw(new core.ArgumentError(`${key} does not denote a class`));
    }
    let tm = reflectType(key);
    if (!dart.is(tm, ClassMirror)) {
      dart.throw(new core.ArgumentError(`${key} does not denote a class`));
    }
    return dart.as(dart.as(tm, ClassMirror).originalDeclaration, ClassMirror);
  }
  dart.fn(reflectClass, () => dart.definiteFunctionType(ClassMirror, [core.Type]));
  function reflectType(key) {
    if (dart.equals(key, dart.dynamic)) {
      return currentMirrorSystem().dynamicType;
    }
    return _js_mirrors.reflectType(key);
  }
  dart.fn(reflectType, () => dart.definiteFunctionType(TypeMirror, [core.Type]));
  class Mirror extends core.Object {}
  Mirror[dart.owner] = exports;
  class IsolateMirror extends core.Object {}
  IsolateMirror[dart.implements] = () => [Mirror];
  IsolateMirror[dart.owner] = exports;
  class DeclarationMirror extends core.Object {}
  DeclarationMirror[dart.implements] = () => [Mirror];
  DeclarationMirror[dart.owner] = exports;
  class ObjectMirror extends core.Object {}
  ObjectMirror[dart.implements] = () => [Mirror];
  ObjectMirror[dart.owner] = exports;
  class InstanceMirror extends core.Object {}
  InstanceMirror[dart.implements] = () => [ObjectMirror];
  InstanceMirror[dart.owner] = exports;
  class ClosureMirror extends core.Object {}
  ClosureMirror[dart.implements] = () => [InstanceMirror];
  ClosureMirror[dart.owner] = exports;
  class LibraryMirror extends core.Object {}
  LibraryMirror[dart.implements] = () => [DeclarationMirror, ObjectMirror];
  LibraryMirror[dart.owner] = exports;
  class LibraryDependencyMirror extends core.Object {}
  LibraryDependencyMirror[dart.implements] = () => [Mirror];
  LibraryDependencyMirror[dart.owner] = exports;
  class CombinatorMirror extends core.Object {}
  CombinatorMirror[dart.implements] = () => [Mirror];
  CombinatorMirror[dart.owner] = exports;
  class TypeMirror extends core.Object {}
  TypeMirror[dart.implements] = () => [DeclarationMirror];
  TypeMirror[dart.owner] = exports;
  class ClassMirror extends core.Object {}
  ClassMirror[dart.implements] = () => [TypeMirror, ObjectMirror];
  ClassMirror[dart.owner] = exports;
  class FunctionTypeMirror extends core.Object {}
  FunctionTypeMirror[dart.implements] = () => [ClassMirror];
  FunctionTypeMirror[dart.owner] = exports;
  class TypeVariableMirror extends TypeMirror {}
  TypeVariableMirror[dart.owner] = exports;
  class TypedefMirror extends core.Object {}
  TypedefMirror[dart.implements] = () => [TypeMirror];
  TypedefMirror[dart.owner] = exports;
  class MethodMirror extends core.Object {}
  MethodMirror[dart.implements] = () => [DeclarationMirror];
  MethodMirror[dart.owner] = exports;
  class VariableMirror extends core.Object {}
  VariableMirror[dart.implements] = () => [DeclarationMirror];
  VariableMirror[dart.owner] = exports;
  class ParameterMirror extends core.Object {}
  ParameterMirror[dart.implements] = () => [VariableMirror];
  ParameterMirror[dart.owner] = exports;
  class SourceLocation extends core.Object {}
  SourceLocation[dart.owner] = exports;
  class Comment extends core.Object {
    Comment(text, trimmedText, isDocComment) {
      this.text = text;
      this.trimmedText = trimmedText;
      this.isDocComment = isDocComment;
    }
  }
  dart.setSignature(Comment, {
    constructors: () => ({Comment: [Comment, [core.String, core.String, core.bool]]})
  });
  Comment[dart.owner] = exports;
  class MirrorsUsed extends core.Object {
    MirrorsUsed(opts) {
      let symbols = opts && 'symbols' in opts ? opts.symbols : null;
      let targets = opts && 'targets' in opts ? opts.targets : null;
      let metaTargets = opts && 'metaTargets' in opts ? opts.metaTargets : null;
      let override = opts && 'override' in opts ? opts.override : null;
      this.symbols = symbols;
      this.targets = targets;
      this.metaTargets = metaTargets;
      this.override = override;
    }
  }
  dart.setSignature(MirrorsUsed, {
    constructors: () => ({MirrorsUsed: [MirrorsUsed, [], {symbols: dart.dynamic, targets: dart.dynamic, metaTargets: dart.dynamic, override: dart.dynamic}]})
  });
  MirrorsUsed[dart.owner] = exports;
  // Exports:
  exports.MirrorSystem = MirrorSystem;
  exports.currentMirrorSystem = currentMirrorSystem;
  exports.reflect = reflect;
  exports.reflectClass = reflectClass;
  exports.reflectType = reflectType;
  exports.Mirror = Mirror;
  exports.IsolateMirror = IsolateMirror;
  exports.DeclarationMirror = DeclarationMirror;
  exports.ObjectMirror = ObjectMirror;
  exports.InstanceMirror = InstanceMirror;
  exports.ClosureMirror = ClosureMirror;
  exports.LibraryMirror = LibraryMirror;
  exports.LibraryDependencyMirror = LibraryDependencyMirror;
  exports.CombinatorMirror = CombinatorMirror;
  exports.TypeMirror = TypeMirror;
  exports.ClassMirror = ClassMirror;
  exports.FunctionTypeMirror = FunctionTypeMirror;
  exports.TypeVariableMirror = TypeVariableMirror;
  exports.TypedefMirror = TypedefMirror;
  exports.MethodMirror = MethodMirror;
  exports.VariableMirror = VariableMirror;
  exports.ParameterMirror = ParameterMirror;
  exports.SourceLocation = SourceLocation;
  exports.Comment = Comment;
  exports.MirrorsUsed = MirrorsUsed;
});
