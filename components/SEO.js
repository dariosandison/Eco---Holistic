// components/SEO.js
import Head from "next/head";

export default function SEO({
  title = "Wild & Well",
  description = "Your guide to eco-living, holistic health, and mindful wellness.",
  path = "/",
  image = "/cover.png"
}) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wild-and-well.store";
  const url = `${site}${path}`;
  const img = image.startsWith("http") ? image : `${site}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Wild & Well" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Head>
  );
}
