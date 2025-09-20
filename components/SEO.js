// components/SEO.js
import Head from "next/head";
import { SITE } from "../lib/site";

export default function SEO({
  title,
  description = SITE.description,
  image = SITE.image,
  path = "",
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const url = path ? `${SITE.url}${path}` : SITE.url;
  const imgUrl = image?.startsWith("http") ? image : `${SITE.url}${image}`;

  return (
    <Head>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {SITE.twitter && <meta name="twitter:site" content={SITE.twitter} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
    </Head>
  );
}
