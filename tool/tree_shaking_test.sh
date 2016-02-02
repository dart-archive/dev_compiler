#!/bin/bash
set -e
# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

output_dir=example/tree_shaking
[[ -d $output_dir ]] || mkdir -p $output_dir

ddc_options=(
  --tree-shaking=all
  --destructure-named-params
  # --modules=node
  -o $output_dir
)
./tool/build_sdk.sh "${ddc_options[@]}" \
  test/codegen/language/hello_dart_test.dart \
  test/codegen/language/hello_dart_test.html

# node_harmony_options=(
#   --debug_code
#   --harmony
#   --harmony_destructuring
#   --harmony_default_parameters
# )
#
# NODE_PATH=$output_dir \
#   node "${node_harmony_options[@]}" -e \
#   "require('dart/_isolate_helper').startRootIsolate(require('$1').main, []);"
