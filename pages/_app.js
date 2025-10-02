// pages/_app.js
import React from "react";
import { MDXProvider } from "@mdx-js/react";

// MDX shortcodes/components if you have them (otherwise remove this line)
import mdxComponents from "../components/mdx";

// ✅ Global CSS (if your build errors on ui.css, just delete that import)
import "../styles/globals.css";
import "../styles/ui.css";

// ✅ Site chrome
import Layout from "../components/Layout";

// ✅ Consent-gated GA4
import Analytics from "../components/Analytics";

// ✅ Load “public/assets/js/*” helpers with Next Script
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Consent & config first */}
      <Script src="/assets/js/siteconfig.js" strategy="beforeInteractive" />
      <Script src="/assets/js/consent-banner.js" strategy="afterInteractive" />

      {/* Click & affiliate tracking (fires after consent unlocks analytics) */}
      <Script src="/assets/js/click-tracking.js" strategy="afterInteractive" />
      <Script src="/assets/js/affiliate-links.js" strategy="afterInteractive" />
      <Script src="/assets/js/comparison-table.js" strategy="afterInteractive" />
      <Script src="/assets/js/email-capture.js" strategy="afterInteractive" />

      <Analytics />

      <MDXProvider components={mdxComponents || {}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  );
}
