import Head from "next/head";

export default function Layout({ children, title, description }) {
  const siteTitle = title
    ? `${title} | Eco + Holistic Blog`
    : "Eco + Holistic Blog 🌿";

  const siteDescription =
    description ||
    "Natural living, eco-friendly health, and mindful wellness tips for a balanced life.";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (for social media) */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wild-and-well.store" />
        <meta property="og:image" content="/cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content="/cover.jpg" />
      </Head>
      <main>{children}</main>
    </>
  );
}
