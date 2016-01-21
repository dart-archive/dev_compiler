dart_library.library('hello_world/index_common', null, /* Imports */[
  "dart_runtime/dart",
  'dart/core',
  'angular2/src/di/annotations_impl',
  'angular2/src/core/compiler/element_ref',
  'angular2/src/render/api',
  'angular2/src/core/annotations_impl/annotations',
  'angular2/src/core/annotations_impl/view'
], /* Lazy imports */[
], function(exports, dart, core, annotations_impl, element_ref, api, annotations, view) {
  'use strict';
  let dartx = dart.dartx;
  class GreetingService extends core.Object {
    GreetingService() {
      this.greeting = "hello";
    }
  }
  GreetingService[dart.metadata] = () => [dart.const(new annotations_impl.Injectable())];
  class RedDec extends core.Object {
    RedDec(el, renderer) {
      renderer.setElementStyle(el, "color", "red");
    }
  }
  dart.setSignature(RedDec, {
    constructors: () => ({RedDec: [RedDec, [element_ref.ElementRef, api.Renderer]]})
  });
  RedDec[dart.metadata] = () => [dart.const(new annotations.Directive({selector: "[red]"}))];
  class HelloCmp extends core.Object {
    HelloCmp(service) {
      this.greeting = null;
      this.greeting = service.greeting;
    }
    changeGreeting() {
      this.greeting = "howdy";
    }
  }
  dart.setSignature(HelloCmp, {
    constructors: () => ({HelloCmp: [HelloCmp, [GreetingService]]}),
    methods: () => ({changeGreeting: [dart.void, []]})
  });
  HelloCmp[dart.metadata] = () => [dart.const(new annotations.Component({selector: "hello-app", viewInjector: dart.const([GreetingService])})), dart.const(new view.View({template: '<div class="greeting">{{greeting}} <span red>world</span>!</div>\n           <button class="changeButton" (click)="changeGreeting()">change greeting</button>', directives: dart.const([RedDec])}))];
  // Exports:
  exports.GreetingService = GreetingService;
  exports.RedDec = RedDec;
  exports.HelloCmp = HelloCmp;
});
