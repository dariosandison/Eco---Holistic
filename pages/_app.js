// pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as gtag from '../lib/gtag';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Track pageviews without blocking navigation
  useEffect(() => {
    const onRoute = (url) => gtag.pageview(url);
    router.events.on('routeChangeComplete', onRoute);
    return () => router.events.off('routeChangeComplete', onRoute);
  }, [router.events]);

  return (
    <>
      {/* GA4 (loads after interactive to avoid delaying LCP) */}
      {gtag.GA_MEASUREMENT_ID ? (
        <>
          <Script
            id="ga4-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      ) : null}

      <div className="page-shell">
        <Nav />
        <main className="page-main">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
