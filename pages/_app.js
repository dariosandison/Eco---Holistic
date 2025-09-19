import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // set later in Vercel

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Wild & Well – eco-friendly living and holistic health." />
        <meta property="og:image" content="/cover.jpg" />
      </Head>

      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      <Nav />
<Component {...pageProps} />
<Footer />   {/* 👈 add this */}

    </>
  );
}
