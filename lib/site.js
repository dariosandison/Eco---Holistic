// Central site configuration used across the app.
// Exports BOTH a named and a default export to support either import style.

const normalizedUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com')
  .replace(/\/+$/, ''); // remove trailing slash(es)

const site = {
  name: 'Wild & Well',
  siteUrl: normalizedUrl, // absolute origin, e.g. https://your-domain.com
  description:
    'Guides, reviews, and practical tools for clean living, sleep, and everyday wellness.',
  logo: `${normalizedUrl}/favicon.ico`,
  socials: {
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/',
  },
};

export { site };
export default site;
