import Head from 'next/head';

export default function SEO({
  title = 'Wild & Well',
  description = 'Eco-living, holistic health, and mindful wellness—made simple.',
  canonical,
  image = '/cover.png',
  noindex = false
}) {
  const site = 'https://www.wild-and-well.store';
  const url = canonical || site;

  const fullTitle = title ? `${title} | Wild & Well` : 'Wild & Well';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Wild & Well',
    url: site,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site}/search?q={query}`,
      'query-input': 'required name=query'
    }
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${site}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${site}${image}`} />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
}
