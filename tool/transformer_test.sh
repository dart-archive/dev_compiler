#!/bin/bash
set -eu
DIR=$(dirname "${BASH_SOURCE[0]}")

# if [[ "${TRAVIS:-false}" != "true" ]]; then
  echo "*** Testing pub serve + DDC transformer"
  pub run test --timeout 120s test/transformer_e2e_test.dart
# fi

echo "*** Testing pub build + DDC transformer"
cd test/transformer/hello_app
pub get
pub build

expected_files=(
  build/web/hello_app/web/index.html
  build/web/hello_app/web/main.js
  build/web/hello_dep/simple.js
  build/web/hello_dep/utils.js
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
