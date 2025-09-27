// components/SeoHead.js
import Head from 'next/head';

export default function SeoHead({
  title = 'Wild & Well',
  description = 'No-nonsense wellness guides, clean product picks, and smart habits.',
  url = '',
  type = 'website',
  images,
}) {
  // Guard against undefined / non-array
  const ogImages = Array.isArray(images) ? images : [];

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:type" content={type} />

      {/* Safely render up to 3 OG images if provided */}
      {ogImages.slice(0, 3).map((img, i) => (
        <meta key={i} property="og:image" content={typeof img === 'string' ? img : (img?.url || '')} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImages[0] ? (
        <meta
          name="twitter:image"
          content={typeof ogImages[0] === 'string' ? ogImages[0] : (ogImages[0]?.url || '')}
        />
      ) : null}

      {/* Canonical (only if URL provided) */}
      {url ? <link rel="canonical" href={url} /> : null}

      {/* Favicon fallbacks */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
