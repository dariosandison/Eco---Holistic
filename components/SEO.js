import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({
  title = "Wild & Well — Eco + Holistic Blog",
  description = "Your guide to eco-friendly living, holistic health, and mindful wellness.",
  image = "/cover.jpg"
}) {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const url = siteUrl ? siteUrl + (router.asPath || "/") : (router.asPath || "/");
  const imageUrl = siteUrl ? siteUrl + image : image;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {siteUrl ? <meta property="og:url" content={url} /> : null}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="icon" href="/favicon.ico" />
      {siteUrl ? <link rel="canonical" href={url} /> : null}
    </Head>
  );
}

