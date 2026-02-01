#!/usr/bin/env bash
set -euo pipefail

# Replace common verbose affiliate footer notes with a short, neutral line.

while IFS= read -r -d '' f; do
  perl -pi -e 's/Some links may earn us a small commission at no extra cost to you\.?/Some links are affiliate links./g' "$f"
  perl -pi -e 's/Some links may earn us a commission at no extra cost to you\.?/Some links are affiliate links./g' "$f"
  perl -pi -e 's/Some links may earn us a small commission\.?/Some links are affiliate links./g' "$f"
  perl -pi -e 's/Some links may earn us a commission\.?/Some links are affiliate links./g' "$f"
  perl -pi -e 's/Some links on Wild & Well may earn us a small commission at no extra cost to you\.?/Some links are affiliate links./g' "$f"
  perl -pi -e 's/Some links on Wild & Well may earn us a small commission at no extra cost to you\.?/Some links are affiliate links./g' "$f"
  perl -pi -e 's/Some links on Wild & Well may earn us a small commission\.?/Some links are affiliate links./g' "$f"
  perl -pi -e 's/Some links may earn us a small commission at no extra cost to you\.?/Some links are affiliate links./g' "$f"
  # Keep editorial/policy pages as-is if they already mention "affiliate links".
  :
done < <(find app components -type f \( -name '*.jsx' -o -name '*.mdx' \) -print0)
