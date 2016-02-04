#!/bin/bash
set -e

# Switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

dart -c test/codegen_test.dart
