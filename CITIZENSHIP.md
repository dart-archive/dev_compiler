# Strengthening Dart as a good citizen of the JS ecosystem

DDC aims to generate idiomatic ES6+ code that behaves well in a variety of use-case / tooling setups, so that Dart is a good JS citizen.

## Interop

DDC supports both the legacy [dart:js](https://api.dartlang.org/stable/dart-js/dart-js-library.html) package and [package:js](https://pub.dartlang.org/packages/js), which allows for lighter-weight interop with existing JavaScript code.

## Tooling integration

Here are some tools which we might like to be able to consume DDC's output:

| Tool | Modules | Module Cycles | Type System | [Decorators](https://github.com/wycats/javascript-decorators) | DDC support |
| ---- | ------- | ------------- | ----------- | ---------- | ----------- |
| [node.js](https://nodejs.org) | node ([es6](https://github.com/ModuleLoader/es6-module-loader) with polyfill) | yes | no | n/a | [experimental](https://github.com/dart-lang/dev_compiler/blob/master/tool/node_test.sh) |
| [rollup.js](https://github.com/rollup/rollup) ([demo](https://rollupjs.org)) | es6 | yes | n/a | no | [experimental since 0.25.4](https://github.com/rollup/rollup/pull/506) |
| [Babel](https://babeljs.io) ([demo](https://babeljs.io/repl/)) | node, es6 | ? | Flow | [yes](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.wz7l9gni2) | ? |
| [Closure Compiler](https://developers.google.com/closure/compiler/) ([demo](http://closure-compiler.appspot.com/home#code%3D%252F%252F%2520%253D%253DClosureCompiler%253D%253D%250A%252F%252F%2520%2540compilation_level%2520SIMPLE_OPTIMIZATIONS%250A%252F%252F%2520%2540language_in%253DES6%250A%252F%252F%2520%2540language_out%253DES6%250A%252F%252F%2520%253D%253D%252FClosureCompiler%253D%253D%250A%250A%252F%252F%2520ADD%2520YOUR%2520CODE%2520HERE%250Afunction%2520hello(name)%2520%257B%250A%2520%2520alert('Hello%252C%2520'%2520%252B%2520name)%253B%250A%257D%250Ahello('New%2520user')%253B%250A%250A)) | closure, es6 | no | Closure | ? | [in progress](https://github.com/dart-lang/dev_compiler/issues/312) |
| [Flow](https://flowtype.org) ([demo](http://tryflow.org/)) | es6 | yes | Flow | ? | no |
| [TypeScript](https://babeljs.io://typescriptlang.org) ([demo](http://www.typescriptlang.org/Playground)) | TS, es6 | yes? | TypeScript | yes | in progress |
| [Traceur](https://github.com/google/traceur-compiler) ([demo](http://google.github.io/traceur-compiler/demo/repl.html#)) | es6 | yes? | n/a | [experimental](https://github.com/google/traceur-compiler/wiki/LanguageFeatures#annotations-experimental) | ? |

### Module formats

We currently support the following module formats
- Custom Dart modules (_default_, with `--modules=legacy`)
- [node.js modules](https://nodejs.org/api/modules.html) (with `--modules=node`)
- [ES6 modules](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import) (experimental, with `--modules=es6`)

We hope to be able to default to ES6 modules when Chrome and node.js support them.

### Types

JavaScript does not currently support static types, but there are a few vendor-specific language extensions that allow static type checks and/or type-based optimizations.

| Type System | Generics | Type Syntax | primitive nullability | Object nullability | `?nullable` | `!notNullable` |
| ----------- | -------- | ----------- | ------------------ | --------------- | ----------- | -------------- |
| [Dart](https://www.dartlang.org/docs/spec/) | covariant | Dart | yes | yes | `no(*)` | `no(*)` |
| [Flow](https://flowtype.org/docs/type-annotations.html#_) | ? | TS / comment | non-nullable | non-nullable | [yes](https://flowtype.org/docs/nullable-types.html) | no |
| [TypeScript](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md) | bivariant | TS | nullable | nullable | no | no |
| [Closure](https://developers.google.com/closure/compiler/docs/js-for-compiler) | invariant | comment | non-nullable | nullable | yes | yes |
| [V8's SoundScript](https://developers.google.com/v8/experiments) | ? | TS | ? | ? | ? | ? |

Notes:
- _Type Syntax: TS_ means TypeScript / ActionScript 3 / Scala-like syntax for types:

  ```typescript
    function foo<T>(x: T): void {}
    type SomeCallbackType = (x: Object) => number;
  ```

- `(*)`: Dart will soon support nullable types, although that might be a breaking language change.
- Closure supports a TypeScript-like syntax with `--language_in=ES6_TYPED`, but it still warns about assigning nullable values to primitives.
- There are more differences between these type-systems (intersection types, interface types...) but the ones highlighted above seem the most relevant to Dart -> JS compilation.
- Nullability:

  - `?nullable` means any type `t` can be made nullable as `?t`.
  - `!nullable` means any type `t` can be made non-nullable as `!t`.
  - In TypeScript, the `Null` type is a subtype of all types.

- Generics 101:

  - _bivariant_ means `List<number>` variables accept both `Iterable<number>` and `List<int>` values.
  - _covariant_ means `List<number>` variables accept `List<int>` values but not `Iterable<number>`.
  - _contravariant_ means `List<number>` variables accept `Iterable<number>` values but not `List<int>`.
  - _invariant_ means `List<number>` vars only accept `List<number>` values.

TODO(ochafik): Decorators (ES7 / TypeScript / AtScript)
