dart_library.library('language/async_star_await_pauses_test', null, /* Imports */[
  'dart_sdk',
  'async_helper',
  'expect'
], function load__async_star_await_pauses_test(exports, dart_sdk, async_helper, expect) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const async_helper$ = async_helper.async_helper;
  const expect$ = expect.expect;
  const async_star_await_pauses_test = Object.create(null);
  let FutureOfint = () => (FutureOfint = dart.constFn(async.Future$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let dynamicToFutureOfint = () => (dynamicToFutureOfint = dart.constFn(dart.definiteFunctionType(FutureOfint(), [dart.dynamic])))();
  let intTodynamic = () => (intTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [core.int])))();
  async_star_await_pauses_test.main = function() {
    let sc = null;
    let i = 0;
    function send() {
      if (i == 5) {
        dart.dsend(sc, 'close');
      } else {
        dart.dsend(sc, 'add', i++);
      }
    }
    dart.fn(send, VoidTovoid());
    sc = async.StreamController.new({onListen: send, onResume: send});
    function f(s) {
      return dart.async(function*(s) {
        let r = 0;
        let it = async.StreamIterator.new(async.Stream._check(s));
        try {
          while (yield it.moveNext()) {
            let i = it.current;
            r = dart.notNull(r) + dart.notNull(core.int._check(yield async.Future.delayed(new core.Duration({milliseconds: 10}), dart.fn(() => i, VoidTodynamic()))));
          }
        } finally {
          yield it.cancel();
        }
        return r;
      }, core.int, s);
    }
    dart.fn(f, dynamicToFutureOfint());
    async_helper$.asyncStart();
    f(dart.dload(sc, 'stream')).then(dart.dynamic)(dart.fn(v => {
      expect$.Expect.equals(10, v);
      async_helper$.asyncEnd();
    }, intTodynamic()));
  };
  dart.fn(async_star_await_pauses_test.main, VoidTodynamic());
  // Exports:
  exports.async_star_await_pauses_test = async_star_await_pauses_test;
});
