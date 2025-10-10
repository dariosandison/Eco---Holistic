# Wild & Well — Clean Build

Minimal Next.js 14 + Tailwind setup with:
- Sticky top NewsletterBar (closes & persists, no footer overlap)
- SiteHeader & SiteFooter with navigation, legal pages, and social links
- Hero with centered **Logo.png**
- Card grid sections for Guides & Blog
- Amazon affiliate helper reading `NEXT_PUBLIC_AMAZON_UK`
- Optional Google Analytics via `NEXT_PUBLIC_GA_ID` or `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Environment variables (set these in Vercel project settings)
- `NEXT_PUBLIC_SITE_URL` = https://www.wild-and-well.store
- `NEXT_PUBLIC_AMAZON_UK` = wildandwell0c-21
- `NEXT_PUBLIC_NEWSLETTER_ACTION` = (Beehiiv or other provider subscribe endpoint)
- `NEXT_PUBLIC_GA_ID` or `NEXT_PUBLIC_GA_MEASUREMENT_ID` = G-XXXXXXX
- Optional email vars you already use (CONTACT_* , RESEND_API_KEY) are not required for this build to succeed but can be added later.

## Develop
```bash
npm install
npm run dev
```

## Build (Vercel will run this automatically)
```bash
npm run build
```
