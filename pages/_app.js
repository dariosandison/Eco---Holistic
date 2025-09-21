// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // optional

  return (
    <>
      {/* Google Analytics (optional, only renders if NEXT_PUBLIC_GA_ID is set) */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wild & Well — Eco Living & Holistic Wellness</title>
        <meta
          name="description"
          content="Bite-size, practical reads for eco-friendly living and holistic wellness."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
