// /components/SEO.js
import React from "react";
import Head from "next/head";

const SITE_URL = "https://www.wild-and-well.store";

export default function SEO({
  title = "Wild & Well",
  description = "Bite-size, practical reads for eco-friendly living and holistic wellness.",
  path = "/",
  cover = "/cover.png",
  noindex = false,
  social = {
    instagram: "https://instagram.com/yourhandle",
    pinterest: "https://pinterest.com/yourhandle",
    facebook: "https://www.facebook.com/yourpage",
    tiktok: "https://www.tiktok.com/@yourhandle",
    youtube: "https://www.youtube.com/@yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
}) {
  const url = `${SITE_URL}${path}`;
  const image = cover.startsWith("http") ? cover : `${SITE_URL}${cover}`;
  const sameAs = Object.values(social).filter(Boolean);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wild & Well",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    sameAs,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Wild & Well" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Wild & Well cover" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Fonts/Favicon (safe to repeat site-wide) */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </Head>
  );
}
