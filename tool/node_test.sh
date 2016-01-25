#!/bin/bash
set -e
# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

output_dir=tmp/node
options="--modules=node -o $output_dir"

[[ -d $output_dir ]] || mkdir -p $output_dir

echo "Compiling SDK for node to $output_dir"

./tool/build_sdk.sh $options

function compile() {
    ./bin/dartdevc.dart $options $1
}
function run() {
    NODE_PATH=$output_dir node --harmony \
        -e "require('dart/_isolate_helper').startRootIsolate(require('$1').main, []);"
}

echo "Now compiling hello_dart_test"
compile test/codegen/language/hello_dart_test.dart
run hello_dart_test



#  ./tool/build_sdk.sh --modules=node && \
#    bin/dartdevc.dart -o lib/runtime/ --modules=node test/codegen/DeltaBlue.dart && \
#    bin/dartdevc.dart -o lib/runtime/ --modules=node test/codegen/language/hello_dart_test.dart

#    NODE_PATH=lib/runtime node --harmony lib/runtime/DeltaBlue.js
#    NODE_PATH=lib/runtime node --harmony lib/runtime/hello_dart_test.js
