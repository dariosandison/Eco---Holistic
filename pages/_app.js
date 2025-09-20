
// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SITE } from "../lib/site";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />

        {/* Fonts (optional) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* Organization JSON-LD (once, site-wide) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/favicon.ico`,
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourhandle",
                "https://www.pinterest.com/yourhandle",
              ],
            }),
          }}
        />
      </Head>

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
