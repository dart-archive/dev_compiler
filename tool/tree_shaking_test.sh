#!/bin/bash
set -e
# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

[[ -d example/tree_shaking ]] || mkdir -p example/tree_shaking

./tool/build_sdk.sh \
  --tree-shaking=all \
  --destructure-named-params \
  --modules=node \
  -o example/tree_shaking \
  test/codegen/language/hello_dart_test.dart \
  test/codegen/language/hello_dart_test.html

NODE_PATH=example/tree_shaking \
  node \
  --harmony \
  --harmony_destructuring \
  --harmony_default_parameters \
  -e "require('dart/_isolate_helper').startRootIsolate(require('hello_dart_test').main, []);"
