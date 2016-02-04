#!/bin/bash
set -e
DIR=$(dirname "${BASH_SOURCE[0]}")

tests=(
  build_sdk
  codegen # duplicate: also in test; that's so that browser_test can run.
  test
  browser_test
  node_test
  analyze
  format
  transformer_test
)
if [[ "${TRAVIS:-}" == "true" && "${COVERAGE}" == "true" ]]; then
  tests+=( coverage )
fi

contains_string() {
  local e
  for e in "${@:2}"; do
    [[ "$e" == "$1" ]] && return 0
  done
  return 1
}

TEST_ONLY="${TEST_ONLY:-}"
SKIP_TESTS="${SKIP_TESTS:-}"

IFS=',' read -a skipped_tests <<< "${SKIP_TESTS:-}"
IFS=',' read -a test_only_tests <<< "${TEST_ONLY:-}"

check_valid_test() {
  if ! contains_string "$1" "${tests[@]}" ; then
    echo "No such test: '$test'"
    exit 1
  fi
}

is_skipped() {
  contains_string "$1" "${skipped_tests[@]}"
}
is_test_only() {
  contains_string "$1" "${test_only_tests[@]}"
}
has_test_only() {
  test -n "$TEST_ONLY"
}

main() {
  local test
  for test in "${skipped_tests[@]}" ; do check_valid_test "$test" ; done
  for test in "${test_only_tests[@]}" ; do check_valid_test "$test" ; done
  for test in "${tests[@]}" ; do
    if is_skipped "$test" ; then
      echo "# Test $test is in SKIP_TESTS"
    elif has_test_only && ! is_test_only "$test" ; then
      echo "# Test $test is not in TEST_ONLY ($TEST_ONLY)"
    else
      echo "# Running test $test"
      $DIR/$test.sh
    fi
  done
}

main
