// pages/_app.js
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {GA_ID ? (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script id="ga4">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      ) : null}

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
