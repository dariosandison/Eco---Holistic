import SEO from "../components/SEO";
<SEO title="Affiliate Disclosure" path="/disclosure" noindex />

// lib/affiliates.js
export function getAmazonUrl(rawUrl) {
  try {
    const u = new URL(rawUrl);
    const m = u.hostname.match(/amazon\.(co\.uk|com|de|fr|it|es)$/i);
    if (!m) return rawUrl;

    const tld = m[1].toLowerCase();
    const TAGS = {
      'co.uk': process.env.NEXT_PUBLIC_AMAZON_UK,
      'com'  : process.env.NEXT_PUBLIC_AMAZON_US,
      'de'   : process.env.NEXT_PUBLIC_AMAZON_DE,
      'fr'   : process.env.NEXT_PUBLIC_AMAZON_FR,
      'it'   : process.env.NEXT_PUBLIC_AMAZON_IT,
      'es'   : process.env.NEXT_PUBLIC_AMAZON_ES,
    };

    const tag = TAGS[tld];
    if (tag) u.searchParams.set('tag', tag);

    // optional niceties that don't hurt:
    u.searchParams.set('linkCode', 'll1');
    u.searchParams.set('camp', '1634');
    u.searchParams.set('creative', '6738');

    return u.toString();
  } catch {
    return rawUrl;
  }
}
