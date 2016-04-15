#!/bin/bash

set -e # bail on error

# Some tests require being run from the package root
# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..


dartanalyzer --strong --build-mode \
    --build-summary-output=test/command/hello_lib.sum \
    --build-summary-only \
    "file:///Users/jmesserly/src/dev_compiler/test/command/hello_lib.dart|/Users/jmesserly/src/dev_compiler/test/command/hello_lib.dart"

#dartanalyzer --strong --build-mode \
#    --build-summary-input=test/command/hello_lib.sum \
#    "file:///Users/jmesserly/src/dev_compiler/test/command/hello.dart|/Users/jmesserly/src/dev_compiler/test/command/hello.dart"



#dart -c ./bin/dartdevc.dart compile \
#    -o test/command/hello_lib.js test/command/hello_lib.dart

dart -c ./bin/dartdevc.dart compile \
    -o test/command/hello.js \
    -s test/command/hello_lib.sum test/command/hello.dart
