// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Analytics from '../components/Analytics';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => gtag.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    // fire once on initial load
    gtag.pageview(window.location.pathname + window.location.search);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
