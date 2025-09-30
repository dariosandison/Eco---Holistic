// components/SiteStructuredData.jsx
import Head from 'next/head';
import { site } from '../lib/site';

export default function SiteStructuredData() {
  const base = site.siteUrl?.replace(/\/+$/, '') || '';
  const logo = site.logo || `${base}/icons/icon-512x512.png`;
  const sameAs = (site.social?.profiles || []).filter(Boolean);

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: base || undefined,
    logo,
    sameAs: sameAs.length ? sameAs : undefined,
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: base || undefined,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${base}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
    </Head>
  );
}
