#!/bin/bash
set -e
# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

module_format=closure
output_dir=tmp/$module_format
options="--modules=$module_format --closure -o $output_dir"

[[ -d $output_dir ]] || mkdir -p $output_dir

if [[ ! -f $output_dir/compiler.jar ]]; then
  (
    cd $output_dir
    curl https://dl.google.com/closure-compiler/compiler-latest.zip > compiler-latest.zip
    unzip -o compiler-latest.zip
  )
fi

echo "Compiling SDK for node to $output_dir"

./tool/build_sdk.sh $options

function compile() {
  local dart_file=$1
  local name=$2
  ./bin/dartdevc.dart $options $dart_file

  (
    cd $output_dir
    echo "
      import {startRootIsolate} from './dart/_isolate_helper';
      import {main} from './$name';
      startRootIsolate(main, []);
    " > $name.main.js

    java -jar ./compiler.jar \
      --language_in=ES6 \
      --language_out=ES5 \
      --formatting=PRETTY_PRINT \
      --dart_pass \
      dart/*.js \
      $name.js \
      $name.main.js > $name.min.js
  )
}
function run() {
    NODE_PATH=$output_dir node --harmony \
        -e "import {startRootIsolate} from './dart/_isolate_helper'; import {main} from './$1'; startRootIsolate(main, []);"
}

# TODO(ochafik): Add full language tests (in separate Travis env/matrix config).

echo "Now compiling hello_dart_test"
compile test/codegen/language/hello_dart_test.dart hello_dart_test
ls -l $output_dir/hello_dart_test.min.js
node $output_dir/hello_dart_test.min.js

# run hello_dart_test

# echo "Now compiling DeltaBlue"
# compile test/codegen/DeltaBlue.dart
# run DeltaBlue
