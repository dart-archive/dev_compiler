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

# TODO(ochafik): Add full language tests (in separate Travis env/matrix config).

echo "Now compiling hello_dart_test"
compile test/codegen/language/hello_dart_test.dart
run hello_dart_test

echo "Now compiling DeltaBlue"
compile test/codegen/DeltaBlue.dart
run DeltaBlue
