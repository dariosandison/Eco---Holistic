// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eco + Holistic Blog | Natural Living & Mindful Wellness</title>
        <meta
          name="description"
          content="Wild & Well: Your guide to eco-friendly living, holistic health, and mindful wellness."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
