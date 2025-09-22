// /pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as gtag from '../src/lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Send GA4 page_view on route changes
  useEffect(() => {
    const handleRouteChange = (url) => gtag.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  // Auto-tag & track affiliate links across the whole site
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Domains/networks & patterns commonly used for affiliate links.
    const AFFILIATE_HOST_TOKENS = [
      // big networks
      'amzn.to', 'amazon.', 'shareasale.com', 'awin1.com', 'cj.com',
      'impact.com', 'impactradius.com', 'rakutenlinkshare.com', 'linksynergy.com',
      'rstyle.me', 'anrdoezrs.net', 'tkqlhce.com', 'sovrn.co',
      // direct/creator platforms
      'refersion.com', 'everflowclient.io', 'gumroad.com', 'lemonsqueezy.com',
      // misc shorteners sometimes used for affiliate
      'bit.ly', 'shorturl.at',
    ];

    const AFFILIATE_QUERY_KEYS = [
      'aff', 'aff_id', 'affid', 'affiliate', 'ref', 'refid', 'referral',
      'tag', 'utm_source', 'utm_medium', 'coupon', 'coupon_code',
    ];

    const isExternal = (url) => url.host !== window.location.host;

    const isAffiliateUrl = (url) => {
      const host = url.hostname.toLowerCase();
      if (AFFILIATE_HOST_TOKENS.some((t) => host.includes(t))) return true;
      const p = url.searchParams;
      for (const key of AFFILIATE_QUERY_KEYS) {
        if (p.has(key)) return true;
      }
      return false;
    };

    const tagLink = (a) => {
      if (!a || a.dataset._affInit === '1') return;
      a.dataset._affInit = '1';

      try {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

        const url = new URL(href, window.location.origin);
        if (!isExternal(url)) return;

        // If it either matches known affiliate patterns or is already explicitly tagged, mark it.
        const shouldTag = a.dataset.affiliate === 'true' || isAffiliateUrl(url);
        if (shouldTag) {
          a.dataset.affiliate = 'true';
          // Hardening: add recommended attributes
          const currentRel = (a.getAttribute('rel') || '').toLowerCase();
          const relParts = new Set(currentRel.split(/\s+/).filter(Boolean));
          relParts.add('sponsored');
          relParts.add('noopener');
          a.setAttribute('rel', Array.from(relParts).join(' '));
          if (!a.getAttribute('target')) a.setAttribute('target', '_blank');
        }
      } catch {
        // ignore bad hrefs
      }
    };

    const scan = (root = document) => {
      root.querySelectorAll('a[href]').forEach(tagLink);
    };

    // Initial scan
    scan();

    // Watch for new links being added to the DOM (client-side nav, CMS blocks, etc.)
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches && node.matches('a[href]')) tagLink(node);
          else scan(node);
        }
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    // Track clicks on affiliate links
    const onClick = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;

      try {
        const href = a.getAttribute('href');
        if (!href) return;
        const url = new URL(href, window.location.origin);
        if (!isExternal(url)) return;

        const isAff = a.dataset.affiliate === 'true' || isAffiliateUrl(url);
        if (!isAff) return;

        const linkText = (a.textContent || '').trim().slice(0, 200);
        gtag.event('affiliate_click', {
          link_url: url.href,
          link_domain: url.hostname,
          link_text: linkText || undefined,
          page_path: window.location.pathname,
        });
      } catch {
        // ignore parse issues
      }
    };

    document.addEventListener('click', onClick, true);

    // Cleanup
    return () => {
      mo.disconnect();
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  return (
    <>
      {/* GA4 loader + config (no auto page_view; we send it manually on route changes) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${gtag.GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
