// components/SeoHead.js
import Head from 'next/head';

export default function SeoHead({ title, description, url, type = 'website', image }) {
  const siteName = 'Wild & Well';
  const defaultDesc = description || 'Actionable wellness guides & clean product picks.';
  const defaultUrl = url || 'https://www.wild-and-well.store';
  const defaultImage = image || '/images/placeholder-16x9.jpg';

  return (
    <Head>
      <title>{title || siteName}</title>
      <meta name="description" content={defaultDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* OpenGraph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={defaultDesc} />
      <meta property="og:url" content={defaultUrl} />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={defaultDesc} />
      <meta name="twitter:image" content={defaultImage} />

      <link rel="canonical" href={defaultUrl} />
    </Head>
  );
}
