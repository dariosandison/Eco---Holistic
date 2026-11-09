# Wild & Well growth changelog — 9 November 2026

## Evidence reviewed

- Google Search Console, 10 October to 6 November 2026 (settled through 7 November).
- Live water-filtration shortlist and current internal journeys.
- Drinking Water Inspectorate and GOV.UK consumer guidance.
- Current manufacturer capacity information for the cited gravity-filter range.

## Improvements implemented locally

- Expanded the gravity-water-filter guide around large-household capacity, usable volume, maintenance, limitations and who should skip the format.
- Added visible official-source links, research/testing limitations and a meaningful updated date.
- Added a large-household 11–12 litre decision section to the water-filtration shortlist.
- Corrected the shortlist taxonomy for a countertop pitcher, two under-sink products and their decision bullets.
- Repaired the bedroom-dehumidifier article's broken condensation-guide link.
- Repaired two broken links in the gravity-filter guide.
- Improved the internal-link validator so dynamic author profiles are checked without a false failure caused by Next.js import resolution.

## Validation

- Frontmatter check: passed across 104 content files.
- Internal-link check: passed across 235 static routes after dependencies were restored.
- Product data JavaScript syntax check: passed.
- Live browser inspection: completed for the water-filtration shortlist; confirmed that production still serves the pre-release version.
- Next.js production compilation and type checking: passed. Local static generation was then stopped by the Codex host's process-memory ceiling; the remote deployment build remains the authoritative full-build check.

## Repository recovery

- Removed a stale zero-byte Git lock after verifying that no Git process was running.
- Preserved the corrupt index as `.git/index.corrupt.2026-11-09` and restored the repository from its validated conflicted-copy index.
- Completed the paused September rebase and retained both the rebase stylesheet work and the later long-form responsive styles.
- Restored project dependencies without changing `package-lock.json`.

## Remaining release limitation

- The local host cannot complete static generation because its worker process is capped at roughly 380 MB. Deploy through the connected remote build, then inspect desktop/mobile before requesting indexing.
