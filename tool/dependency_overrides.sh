#!/bin/bash

function add_dependency_override() {
  local name=$1
  local path=$2
  if ! cat pubspec.yaml | grep "dependency_overrides:" ; then
    echo "dependency_overrides:" >> pubspec.yaml
  fi
  local pubspec=`cat pubspec.yaml | grep -v "$name: .path: "`
  echo "$pubspec" > pubspec.yaml
  if [[ -n "$path" ]]; then
    echo "  $name: {path: $path}" >> pubspec.yaml
  fi
}

function checkout_dependency_override_from_github() {
  local dependency_name=$1
  local org_project=$2
  local branch=$3
  local path=${4:-/}

  local url=https://github.com/$org_project

  echo "dependency_name = $dependency_name"
  echo "url = $url$path"
  echo "branch = $branch"

  [[ -d dependency_overrides ]] || mkdir dependency_overrides

  rm -fR dependency_overrides/$dependency_name

  if [[ "$path" == "/" ]]; then
    git clone --depth 1 --branch $branch $url dependency_overrides/$dependency_name
  else
    (
      mkdir dependency_overrides/$dependency_name
      cd dependency_overrides/$dependency_name

      git init
      git remote add origin $url
      git config core.sparsecheckout true
      echo $path >> .git/info/sparse-checkout
      git pull --depth=1 origin $branch
    )
  fi
  add_dependency_override $dependency_name dependency_overrides/$dependency_name$path
}
