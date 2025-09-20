import React from "react";
import Head from "next/head";

export default function SEO({
  title = "Wild & Well",
  description = "Your guide to eco-living, holistic health, and mindful wellness.",
  path = "/",
  image = "/cover.jpg",
}) {
  const site = "https://wild-and-well.store";
  const url = `${site}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site}${image}`} />
    </Head>
  );
}
