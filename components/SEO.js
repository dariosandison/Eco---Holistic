import Head from 'next/head';

export default function SEO({
  title = 'Wild & Well – Eco & Holistic Living',
  description = 'Guides to eco-friendly living, holistic wellness, and simple product picks.',
  path = '/',
  image = '/cover.jpg'
}) {
  const url = `https://www.wild-and-well.store${path}`;
  const fullTitle = title;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Wild & Well',
    url: 'https://www.wild-and-well.store',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.wild-and-well.store/search?q={query}',
      'query-input': 'required name=query'
    }
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
