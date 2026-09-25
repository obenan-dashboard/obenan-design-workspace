#!/usr/bin/env bash
set -euo pipefail

if [[ "${1:-}" != "--spec" || -z "${2:-}" ]]; then
  printf 'usage: %s --spec <spec-path>\n' "$0" >&2
  exit 2
fi

spec_path="$2"
if [[ ! -f "$spec_path" ]]; then
  printf 'missing spec: %s\n' "$spec_path" >&2
  exit 1
fi

acceptance_file=$(mktemp)
trap 'rm -f "$acceptance_file"' EXIT
sed -nE 's/^### (AC-[A-Z]+-[0-9]+).*/\1/p' "$spec_path" > "$acceptance_file"

if [[ ! -s "$acceptance_file" ]]; then
  printf 'no acceptance criteria found in %s\n' "$spec_path" >&2
  exit 1
fi

duplicate_ids=$(sort "$acceptance_file" | uniq -d)
if [[ -n "$duplicate_ids" ]]; then
  printf 'duplicate acceptance criteria:\n%s\n' "$duplicate_ids" >&2
  exit 1
fi

missing=0
acceptance_count=0
while IFS= read -r acceptance_id; do
  acceptance_count=$((acceptance_count + 1))
  if ! grep -R -E -q "describe\\(['\"]${acceptance_id}" tests; then
    printf 'missing behavioral test suite for %s\n' "$acceptance_id" >&2
    missing=1
  fi
done < "$acceptance_file"

if [[ "$missing" -ne 0 ]]; then exit 1; fi
printf 'acceptance traceability passed for %s criteria\n' "$acceptance_count"
