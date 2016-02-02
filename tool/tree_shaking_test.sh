#!/bin/bash
set -e
# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

[[ -d example/tree_shaking ]] || mkdir -p example/tree_shaking

function compile_and_run() {
  local file=$1
  local name=`basename $file | sed 's/\.dart$//'`

  ./tool/build_sdk.sh \
    --tree-shaking=all \
    --destructure-named-params \
    --modules=node \
    -o example/$name \
    $file

  NODE_PATH=example/$name \
    node \
    --harmony \
    --harmony_destructuring \
    --harmony_default_parameters \
    -e "require('dart/_isolate_helper').startRootIsolate(require('$name').main, []);"
}

compile_and_run test/codegen/language/hello_dart_test.dart
