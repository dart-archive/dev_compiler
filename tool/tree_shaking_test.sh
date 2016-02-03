#!/bin/bash
set -e
# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

function compile_and_run() {
  local file=$1
  local name=`basename $file | sed 's/\.dart$//' | sed 's/\.html$//'`

  [[ -d example/tree_shaking/$name ]] || mkdir -p example/tree_shaking/$name

  time \
    ./tool/build_sdk.sh \
    --modules=node \
    --tree-shaking=all \
    --destructure-named-params \
    -o example/tree_shaking/$name \
    $file

  # cp lib/runtime/{dart_library,harmony_feature_check}.js example/$name

  NODE_PATH=example/tree_shaking/$name \
    node \
    --harmony \
    --harmony_destructuring \
    --harmony_default_parameters \
    -e "require('dart/_isolate_helper').startRootIsolate(require('$name').main, []);"
}

# compile_and_run test/codegen/language/hello_dart_test.dart
compile_and_run test/codegen/DeltaBlue.dart
# compile_and_run test/codegen/DeltaBlue.html
