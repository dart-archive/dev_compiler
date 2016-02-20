#!/bin/bash
#
# See http://rollupjs.org/#%7B%22options%22%3A%7B%22format%22%3A%22cjs%22%2C%22moduleName%22%3A%22myBundle%22%2C%22globals%22%3A%7B%7D%7D%2C%22modules%22%3A%5B%7B%22name%22%3A%22main.js%22%2C%22code%22%3A%22import%20maths%20from%20'.%2Fmaths.js'%3B%5Cnimport%20%7B%20cube%20%7D%20from%20'.%2Fmaths.js'%3B%5Cnconsole.log(%20cube(%205%20)%20)%3B%20%2F%2F%20125%5Cnconsole.log(maths.foo)%3B%22%7D%2C%7B%22name%22%3A%22maths.js%22%2C%22code%22%3A%22%2F%2F%20This%20function%20isn't%20used%20anywhere%2C%20so%5Cn%2F%2F%20Rollup%20excludes%20it%20from%20the%20bundle...%5Cnfunction%20square%20(%20x%20)%20%7B%5Cn%5Ctreturn%20x%20*%20x%3B%5Cn%7D%5Cn%5Cn%2F%2F%20This%20function%20gets%20included%5Cnfunction%20cube%20(%20x%20)%20%7B%5Cn%5Ct%2F%2F%20rewrite%20this%20as%20%60square(%20x%20)%20*%20x%60%5Cn%5Ct%2F%2F%20and%20see%20what%20happens!%5Cn%5Ctreturn%20x%20*%20x%20*%20x%3B%5Cn%7D%3B%5Cnexport%20%7B%20cube%20%7D%3B%5Cnexport%20default%20%7B%5Cn%20%20foo%3A%20bar%5Cn%7D%3B%22%7D%5D%7D
#
set -e
cd $( dirname "${BASH_SOURCE[0]}" )/..

# http://javascriptplayground.com/blog/2016/02/better-bundles-rollup
# babel src --presets es2015 --out-dir=dist && browserify -t uglifyify dist/app.js | uglifyjs -c > dist/bundle.js
# npm install --save-dev babel-preset-es2015-rollup rollup rollup-plugin-babel rollup-plugin-uglify

function get_closure() {
  local closure_dir=$PWD/dependencies/closure
  [[ -d $closure_dir ]] || mkdir -p $closure_dir
  local closure_jar=$closure_dir/compiler.jar

  if [[ ! -f $closure_jar ]]; then
    (
      cd $closure_dir
      curl https://dl.google.com/closure-compiler/compiler-latest.zip > compiler-latest.zip
      unzip -q -o compiler-latest.zip
    )
  fi
  echo $closure_jar
}

CLOSURE_JAR=`get_closure`

function compile_and_run() {
  local file=$1
  local name=`basename $file | sed 's/\.dart$//' | sed 's/\.html$//'`
  local output_dir=test/rollup/$name
  local root_dir=$PWD

  [[ -d $output_dir ]] || mkdir -p $output_dir

  local ddc_opts=(
    --modules=es6
    --closure
    --tree-shaking=all
    --destructure-named-params
    # --no-reify-generic-class-type-args
  )

  local rollup_opts=()

  local closure_opts=(
    --dart_pass
    --language_in=ES6
    --language_out=ES5
    # --formatting=PRETTY_PRINT
    # -O ADVANCED
    # -O WHITESPACE_ONLY
    -O SIMPLE
  )

  local node_opts=(
    --harmony
    --harmony_destructuring
    --harmony_default_parameters
  )

  time ./tool/build_sdk.sh "${ddc_opts[@]}" -o $output_dir $file

  local single_file=$name.single_es6.js
  local closure_file=$name.closure_es5.js
  local babel_file=$name.babel_es5.js
  local ugly_file=$name.ugly_es5.js
  (
    cd $output_dir
    echo "
      import {} from './dart/_isolate_helper';
      import {} from './dart/_debugger';
      import {} from './dart/html';
      import {} from './dart/html_common';
      import {} from './dart/_metadata';
      import {} from './dart/js';
      import {} from './dart/_js_mirrors';
      import {} from './dart/mirrors';
      import {} from './dart/convert';
      import {} from './dart/_js_primitives';
      import {} from './dart/_native_typed_data';
      import {} from './dart/typed_data';
      import {} from './dart/isolate';
      import {} from './dart/_js_helper';
      import {} from './dart/_js_embedded_names';
      import {} from './dart/_foreign_helper';
      import {} from './dart/async';
      import {} from './dart/_interceptors';
      import {} from './dart/math';
      import {} from './dart/_internal';
      import {} from './dart/collection';
      import {} from './dart/core';
      import {} from './dart/_runtime';

      import isolate_helper from './dart/_isolate_helper';
      import main from './$name';
      isolate_helper.startRootIsolate(main.main, []);
    " > ${name}_entry_point.js

    echo '(function() { "use strict"; ' > $single_file
    $root_dir/node_modules/rollup/bin/rollup "${rollup_opts[@]}" ${name}_entry_point.js >> $single_file
    echo "})()" >> $single_file

    echo "Running Babel + UglifyJS"
    cat $single_file | babel --presets es2015 > $babel_file
    cat $babel_file | uglifyjs -c -m > $ugly_file

    echo "Running ClosureJS"
    java -jar $CLOSURE_JAR "${closure_opts[@]}" --js $single_file > $closure_file
  )
  # cp lib/runtime/{dart_library,harmony_feature_check}.js example/$name

  for f in $output_dir/*.js ; do
    echo "Gzipped size of $f: `cat $f | gzip -9 | wc -c`"
  done

  echo "** Running single script"
  node "${node_opts[@]}" $output_dir/$single_file

  echo "** Running closure-minified script"
  # node "${node_opts[@]}" $output_dir/$closure_file
  echo 'var $jscomp = {};' > tmp.js
  cat ../closure-compiler-ochafik/src/com/google/javascript/jscomp/js/es6_runtime.js >> tmp.js
  cat $output_dir/$closure_file >> tmp.js
  node "${node_opts[@]}" tmp.js


  # NODE_PATH=test/tree_shaking/$name \
  #   node \
  #   --harmony \
  #   --harmony_destructuring \
  #   --harmony_default_parameters \
  #   -e "require('dart/_isolate_helper').startRootIsolate(require('$name').main, []);"
}

# compile_and_run test/codegen/language/hello_dart_test.dart
compile_and_run test/codegen/DeltaBlue.dart
# compile_and_run test/codegen/DeltaBlue.html
