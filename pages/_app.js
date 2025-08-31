import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Default site-wide SEO */}
        <title>Eco + Holistic Blog | Wild & Well</title>
        <meta
          name="description"
          content="Wild & Well – Natural living, eco-friendly health, and mindful wellness tips for a balanced lifestyle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wild & Well" />
        <meta property="og:title" content="Eco + Holistic Blog | Wild & Well" />
        <meta
          property="og:description"
          content="Explore natural living, eco-friendly health, and holistic wellness guides."
        />
        <meta property="og:url" content="https://www.wild-and-well.store" />
        <meta property="og:image" content="https://www.wild-and-well.store/cover.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eco + Holistic Blog | Wild & Well" />
        <meta
          name="twitter:description"
          content="Natural remedies, eco-friendly habits, and holistic wellness tips."
        />
        <meta name="twitter:image" content="https://www.wild-and-well.store/cover.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
