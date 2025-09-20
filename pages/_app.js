import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  const siteName = "Wild & Well";
  const siteUrl = "https://www.wild-and-well.store";
  const siteDesc =
    "Eco-friendly living, holistic health, and mindful wellness.";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={siteDesc} />
        <link rel="icon" href="/favicon.ico" />

        {/* Social previews */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:image" content="/cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
