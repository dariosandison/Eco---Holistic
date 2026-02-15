# Implemented upgrades (13 Feb 2026)

This patch applies the “site audit” fixes directly into the project.

## 1) Privacy + consent
- Expanded **Privacy Policy** with UK‑friendly sections (emails, analytics, affiliate tracking, rights).
- Kept existing **Consent Banner** + **Cookies preferences** flow.

Files:
- `app/privacy/page.jsx`

## 2) Authors / E‑E‑A‑T wiring
- Fixed author routing so Author pages correctly list posts, even when posts used inconsistent author strings.
- Standardised blog post frontmatter authors to the canonical slug: `wild-and-well-editorial`.
- Added a founder-authored post so the Founder profile is not empty.

Files:
- `lib/authors.js`
- `app/authors/[slug]/page.jsx`
- `content/blog/*.mdx` (author field normalised)
- `content/blog/why-wild-and-well-exists.mdx` (new)

## 3) Topic hub conversion (“pick a goal”)
- Added a “Pick a goal (fast path)” section to `/topics` to guide readers into the right hub quickly.

Files:
- `app/topics/page.jsx`

## 4) Topic cluster support (new Insight posts)
- Added 3 supporting explainers and linked them from relevant topic hubs:
  - `/blog/filter-replacement-costs-uk`
  - `/blog/hard-water-uk-myths-and-comfort`
  - `/blog/morning-light-sleep-10-minute-plan`

Files:
- `content/blog/*.mdx` (new posts)
- `app/topics/air-quality/page.jsx`
- `app/topics/water/page.jsx`
- `app/topics/sleep/page.jsx`
- `app/topics/skin-health/page.jsx`

## 5) Email onboarding
- Upgraded the Beehiiv starter sequence from 4 emails to a 7‑day flow.

Files:
- `email/starter-sequence.md`
