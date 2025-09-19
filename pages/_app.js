// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav"; // make sure the file is at components/Nav.js

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
    </>
  );
}
import Script from "next/script";
// inside the App component, just after <Head>…
<Script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXX`} />
<Script id="ga4">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date()); gtag('config', 'G-XXXX');
`}</Script>
