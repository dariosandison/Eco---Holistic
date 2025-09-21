import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* GA4 (optional): set NEXT_PUBLIC_GA_ID in Vercel */}
      {GA_ID && (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script id="ga4-init">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); gtag('config', '${GA_ID}');
              document.addEventListener('click', function(e){
                const el = e.target.closest('[data-cta="affiliate"]');
                if (el && window.gtag) {
                  gtag('event', 'affiliate_click', { link_url: el.href });
                }
              });
            `}
          </Script>
        </>
      )}

      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
