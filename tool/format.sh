#!/bin/bash
set -e

# Switch to the root directory of dev_compiler
cd $( dirname "${BASH_SOURCE[0]}" )/..

# Run formatter in rewrite mode on all files that are part of the project.
# This checks that all files are commited first to git, so no state is lost.
# The formatter ignores:
#   * local files that have never been added to git,
#   * subdirectories of test/ and tool/, unless explicitly added. Those dirs
#     contain a lot of generated or external source we should not reformat.
file_patterns=(
  'bin/*.dart'
  'lib/*.dart'
  test/*.dart
  test/checker/*.dart
  tool/*.dart
)
files=`git ls-files "${file_patterns[@]}" | grep -v lib/src/js/`
echo "FILES: ${files[*]}"

if git status -s $files | grep -q . ; then
  echo "Did not run the formatter, please commit edited files first."
  exit 1
else
  echo "Running dart formatter"
  pub run dart_style:format -w $files > format.log
  if [[ "$TRAVIS" == "true" ]]; then
    if cat format.log | grep -q Formatted ; then
      echo "Found files that need formatting: please run the presubmit tests before pushing"
      exit 1
    fi
  fi
fi
