import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // optional

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Simple GA pageview tracking (optional)
  useEffect(() => {
    if (!GA_ID) return;
    const handleRouteChange = (url) => {
      window.gtag?.('config', GA_ID, { page_path: url });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `
              }}
            />
          </>
        )}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
