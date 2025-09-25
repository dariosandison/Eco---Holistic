import Head from 'next/head';

const SITE_NAME = 'Wild & Well';
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
const DEFAULT_DESC =
  'Practical, low-tox wellness guides, simple habits, and vetted product picks.';
const DEFAULT_IMAGE = '/og-default.jpg'; // in /public

export default function SEO({
  title,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  urlPath = '',
  noindex = false,
}) {
  const fullTitle = title ? `${title} • ${SITE_NAME}` : SITE_NAME;
  const canonical = `${SITE_URL}${urlPath.startsWith('/') ? urlPath : `/${urlPath}`}`;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} cover`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
