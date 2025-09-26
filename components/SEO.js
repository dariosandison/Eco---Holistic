// components/SEO.js
import Head from 'next/head';
import site from '@/site.config';

export default function SEO({ title, description, image, canonical, noindex }) {
  const t = title ? `${title} | ${site.name}` : site.seoDefaults.title || site.name;
  const d = description || site.seoDefaults.description;
  const img = image || site.seoDefaults.image;

  return (
    <Head>
      <title>{t}</title>
      {d && <meta name="description" content={d} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={t} />
      {d && <meta property="og:description" content={d} />}
      {img && <meta property="og:image" content={img} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={site.locale || 'en_US'} />

      {site.twitter && <meta name="twitter:site" content={site.twitter} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content={site.themeColor || '#C9D8B6'} />
    </Head>
  );
}
