// components/SEO.js
import Head from 'next/head';
import site from '@/../site.config';

export default function SEO({
  title,
  description,
  image,
  canonical,
  noindex = false,
}) {
  const metaTitle = title ? `${title} • ${site.shortName}` : site.defaultTitle;
  const metaDesc = description || site.defaultDescription;
  const metaImg = image || site.defaultImage;
  const url = canonical || site.domain;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="theme-color" content={site.color} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImg} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {site.twitter && <meta name="twitter:site" content={site.twitter} />}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImg} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
