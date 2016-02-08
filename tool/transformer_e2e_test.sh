#!/bin/bash
set -e

# switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

pub run test test/transformer_e2e_test.dart
