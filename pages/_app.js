// pages/_app.js
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ConsentBanner from '../components/ConsentBanner';
import { GA_ID, initGA, trackAffiliateClick } from '../lib/analytics';

const mdxComponents = {
  a: (props) => <a {...props} />,
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  p: (props) => <p {...props} />,
  // Add other MDX component mappings as needed
};

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  // Initialize GA + consent defaults once
  useEffect(() => {
    if (!GA_ID) return;
    initGA();
  }, []);

  // Track affiliate clicks to /go/* globally (no per-component changes needed)
  useEffect(() => {
    function onClick(e) {
      if (e.defaultPrevented) return;
      let el = e.target;
      while (el && el.tagName !== 'A') el = el.parentElement;
      if (!el || el.tagName !== 'A') return;

      const href = el.getAttribute('href') || '';
      if (!href.startsWith('/go/')) return;

      const slug = href.replace(/^\/go\//, '');
      try { trackAffiliateClick({ href, slug }); } catch {}
    }
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Optional: pageview tracking (only if you add it later)
  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined') return;
    const handleRouteChange = () => {
      // Basic GA4 page_view: GA automatically tracks single-page apps when using gtag('config')
      // If you want explicit page_view here, you can add it later.
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
    // inside MyApp return, after <Head>...</Head>
import dynamic from 'next/dynamic';
const SiteStructuredData = dynamic(() => import('../components/SiteStructuredData'), { ssr: true });

// then in JSX, right under <Head>…</Head>:
<SiteStructuredData />

        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      {/* GA4 loader (Consent Mode defaults run in initGA) */}
      {GA_ID ? (
        <>
          <Script id="gtm-dataLayer" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);} `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}

      <MDXProvider components={mdxComponents}>
        {getLayout(<Component {...pageProps} />)}
      </MDXProvider>

      <ConsentBanner />
    </>
  );
}

export default MyApp;

