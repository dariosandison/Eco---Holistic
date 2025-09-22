// components/SEO.js
import Head from "next/head";

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  jsonLd, // plain JS object
  noIndex = false,
  siteName = "Eco & Holistic",
}) {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const ldString = jsonLd ? JSON.stringify(jsonLd) : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="article" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* ✅ Correct JSON-LD injection */}
      {ldString && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldString }}
        />
      )}
    </Head>
  );
}
