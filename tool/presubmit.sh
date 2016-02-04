#!/bin/bash
set -e
DIR=$(dirname "${BASH_SOURCE[0]}")

tests=(
  build_sdk
  test
  browser_test
  node_test
  analyze
  format
  transformer_test
)
if [[ "$TRAVIS" == "true" ]]; then
  # On Travis, run coverage.sh unless it's skipped.
  tests+=( coverage )
fi

TEST_ONLY="${TEST_ONLY:-}"
SKIP_TESTS="${SKIP_TESTS:-}"

IFS=',' read -a skipped_tests <<< "${SKIP_TESTS:-}"
IFS=',' read -a test_only_tests <<< "${TEST_ONLY:-}"

contains_string() {
  local e
  for e in "${@:2}"; do
    [[ "$e" == "$1" ]] && return 0
  done
  return 1
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

for test in "${test[@]}" ; do
  if is_skipped "$test" ; then
    echo "Test $test is in SKIP_TESTS"
  elif has_test_only && ! is_test_only "$test" ; then
    echo "Test $test is not in TEST_ONLY ($TEST_ONLY)"
  else
    echo "Running test $test"
    $DIR/$test.sh
  fi
done
