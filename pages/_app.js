import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <title>Eco + Holistic Blog | Natural Living & Mindful Wellness</title>
        <meta
          name="description"
          content="Wild & Well: Your guide to eco-friendly living, holistic health, and mindful wellness. Explore natural remedies, herbal teas, and sustainable habits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Eco + Holistic Blog | Wild & Well" />
        <meta
          property="og:description"
          content="Discover natural remedies, herbal teas, and eco-friendly habits for a healthier, sustainable lifestyle."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wild-and-well.store" />
        <meta property="og:image" content="/cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eco + Holistic Blog | Wild & Well" />
        <meta
          name="twitter:description"
          content="Tips on holistic health, eco-living, and mindful wellness. 🌱"
        />
        <meta name="twitter:image" content="/cover.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
