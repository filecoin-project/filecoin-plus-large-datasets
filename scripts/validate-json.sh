#!/bin/bash
set -e

if ! [ -x "$(command -v jsonlint)" ]; then
  echo 'jsonlint is not installed, installing now...'
  if ! npm install -g jsonlint >&2; then
    echo 'error: Failed to install jsonlint, exiting.' >&2
    exit 1
  fi
fi

ERRORS=0
for file in $(git diff --name-only --diff-filter=AM origin/${GITHUB_BASE_REF} | grep .json); do
  jsonlint "$file" || ERRORS=$((ERRORS+1))
done
if [[ "$ERRORS" -ne "0" ]]; then
  echo "$ERRORS errors found during JSON validation"
  exit 1
fi
