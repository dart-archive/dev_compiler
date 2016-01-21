dart_library.library('todo/index', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core',
  'todo/services/TodoStore',
  'dom_experimental/dom',
  'angular2/src/core/annotations_impl/annotations',
  'angular2/src/core/annotations_impl/view',
  'angular2/src/directives/ng_for',
  'angular2/src/reflection/reflection_capabilities',
  'angular2/src/reflection/reflection',
  'angular2/src/core/application'
], /* Lazy imports */[
], function(exports, dart, core, TodoStore, dom, annotations, view, ng_for, reflection_capabilities, reflection, application) {
  'use strict';
  let dartx = dart.dartx;
  class TodoApp extends core.Object {
    TodoApp(todoStore, factory) {
      this.todoStore = todoStore;
      this.factory = factory;
      this.todoEdit = null;
    }
    enterTodo(inputElement) {
      this.addTodo(inputElement.value[dartx.toLowerCase]());
      inputElement.value = "";
    }
    editTodo(todo) {
      this.todoEdit = todo;
    }
    doneEditing($event, todo) {
      let which = dart.dload($event, 'which');
      let target = dart.dload($event, 'target');
      if (dart.notNull(core.identical(which, 13))) {
        todo.title = dart.as(dart.dload(target, 'value'), core.String);
        this.todoEdit = null;
      } else if (dart.notNull(core.identical(which, 27))) {
        this.todoEdit = null;
        dart.dput(target, 'value', todo.title);
      }
    }
    addTodo(newTitle) {
      this.todoStore.add(this.factory.create(newTitle, false));
    }
    completeMe(todo) {
      todo.completed = !dart.notNull(todo.completed);
    }
    deleteMe(todo) {
      this.todoStore.remove(todo);
    }
    toggleAll($event) {
      let isComplete = dart.dload(dart.dload($event, 'target'), 'checked');
      this.todoStore.list[dartx.forEach](dart.as(dart.fn(todo => {
        todo.completed = dart.as(isComplete, core.bool);
      }, dart.dynamic, [TodoStore.Todo]), __CastType0));
    }
    clearCompleted() {
      this.todoStore.removeBy(dart.fn(todo => dart.dload(todo, 'completed')));
    }
  }
  dart.setSignature(TodoApp, {
    constructors: () => ({TodoApp: [TodoApp, [TodoStore.Store, TodoStore.TodoFactory]]}),
    methods: () => ({
      enterTodo: [dart.void, [dom.HTMLInputElement]],
      editTodo: [dart.void, [TodoStore.Todo]],
      doneEditing: [dart.void, [dart.dynamic, TodoStore.Todo]],
      addTodo: [dart.void, [core.String]],
      completeMe: [dart.void, [TodoStore.Todo]],
      deleteMe: [dart.void, [TodoStore.Todo]],
      toggleAll: [dart.void, [dart.dynamic]],
      clearCompleted: [dart.void, []]
    })
  });
  TodoApp[dart.metadata] = () => [dart.const(new annotations.Component({selector: "todo-app", viewInjector: dart.const([TodoStore.Store, TodoStore.TodoFactory])})), dart.const(new view.View({templateUrl: "todo.html", directives: dart.const([ng_for.NgFor])}))];
  function main() {
    reflection.reflector.reflectionCapabilities = new reflection_capabilities.ReflectionCapabilities();
    application.bootstrap(TodoApp);
  }
  dart.fn(main);
  let __CastType0 = dart.typedef('__CastType0', () => dart.functionType(dart.void, [TodoStore.KeyModel]));
  // Exports:
  exports.TodoApp = TodoApp;
  exports.main = main;
});
