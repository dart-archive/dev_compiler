#!/bin/bash
set -eu
DIR=$(dirname "${BASH_SOURCE[0]}")

# TODO(ochafik): Run pub serve + launch a browser on
# http://localhost:8080/ddc_example_transformer_app/web/
cd example/transformer/app
pub get
pub build

expected_files=(
  build/web/ddc_example_transformer_app/web/main.js
  build/web/ddc_example_transformer_dep/simple.js
  build/web/ddc_example_transformer_dep/utils.js
  # This is not an exhaustive check:
  build/web/dev_compiler/runtime/dart/_runtime.js
)

for file in "${expected_files[@]}" ; do
  if [[ ! -f $file ]]; then
    echo "Didn't find $file in build:"
    find build | grep -v /packages/
    exit 1
  fi
done
