dart_library.library('todo/services/TodoStore', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core',
  'angular2/src/di/annotations_impl',
  'angular2/src/facade/collection'
], /* Lazy imports */[
], function(exports, dart, core, annotations_impl, collection) {
  'use strict';
  let dartx = dart.dartx;
  class KeyModel extends core.Object {
    KeyModel(key) {
      this.key = key;
    }
  }
  dart.setSignature(KeyModel, {
    constructors: () => ({KeyModel: [KeyModel, [core.num]]})
  });
  class Todo extends KeyModel {
    Todo(key, title, completed) {
      this.title = title;
      this.completed = completed;
      super.KeyModel(key);
      ;
    }
  }
  dart.setSignature(Todo, {
    constructors: () => ({Todo: [Todo, [core.num, core.String, core.bool]]})
  });
  let _uid = Symbol('_uid');
  class TodoFactory extends core.Object {
    TodoFactory() {
      this[_uid] = 0;
    }
    nextUid() {
      return this[_uid] = dart.notNull(this[_uid]) + 1;
    }
    create(title, isCompleted) {
      return new Todo(this.nextUid(), title, isCompleted);
    }
  }
  dart.setSignature(TodoFactory, {
    methods: () => ({
      nextUid: [core.num, []],
      create: [Todo, [core.String, core.bool]]
    })
  });
  TodoFactory[dart.metadata] = () => [dart.const(new annotations_impl.Injectable())];
  let _spliceOut = Symbol('_spliceOut');
  let _indexFor = Symbol('_indexFor');
  class Store extends core.Object {
    Store() {
      this.list = dart.list([], KeyModel);
    }
    add(record) {
      this.list[dartx.add](record);
    }
    remove(record) {
      this[_spliceOut](record);
    }
    removeBy(callback) {
      let records = collection.ListWrapper.filter(this.list, dart.as(callback, __CastType0));
      collection.ListWrapper.removeAll(this.list, records);
    }
    [_spliceOut](record) {
      let i = this[_indexFor](record);
      if (dart.notNull(dart.as(dart.dsend(i, '>', -1), core.bool))) {
        return collection.ListWrapper.splice(this.list, dart.as(i, core.int), 1)[dartx.get](0);
      }
      return null;
    }
    [_indexFor](record) {
      return this.list[dartx.indexOf](record);
    }
  }
  dart.setSignature(Store, {
    methods: () => ({
      add: [dart.void, [KeyModel]],
      remove: [dart.void, [KeyModel]],
      removeBy: [dart.void, [core.Function]],
      [_spliceOut]: [dart.dynamic, [KeyModel]],
      [_indexFor]: [dart.dynamic, [KeyModel]]
    })
  });
  Store[dart.metadata] = () => [dart.const(new annotations_impl.Injectable())];
  let __CastType0 = dart.typedef('__CastType0', () => dart.functionType(core.bool, [dart.dynamic]));
  // Exports:
  exports.KeyModel = KeyModel;
  exports.Todo = Todo;
  exports.TodoFactory = TodoFactory;
  exports.Store = Store;
});
