// pages/go/[slug].js
import Head from "next/head";
import { useEffect } from "react";
import { readAffiliateMap, buildAffiliateUrl, resolveAffiliate } from "../../lib/affiliate-url";
import { trackAffiliateRedirect } from "../../lib/analytics";

export async function getStaticPaths() {
  const rows = readAffiliateMap();
  return { paths: rows.map(r => ({ params: { slug: r.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const row = resolveAffiliate(params.slug);
  const rawUrl = row?.url || null;
  const finalUrl = rawUrl ? buildAffiliateUrl(rawUrl, { slug: params.slug, source: "go" }) : null;

  return {
    props: {
      slug: params.slug,
      url: finalUrl,
      label: row?.label || "Continue",
    },
  };
}

export default function GoPage({ slug, url, label }) {
  useEffect(() => {
    if (!url) return;
    try { trackAffiliateRedirect({ href: url, slug }); } catch {}
    const t = setTimeout(() => { window.location.replace(url); }, 250);
    return () => clearTimeout(t);
  }, [slug, url]);

  return (
    <>
      <Head>
        <title>Redirecting…</title>
        <meta name="robots" content="noindex,nofollow" />
        {url ? <meta httpEquiv="refresh" content={`0;url=${url}`} /> : null}
      </Head>
      <div style={{minHeight:"60vh", display:"grid", placeItems:"center", padding:24}}>
        <div style={{maxWidth:560, textAlign:"center"}}>
          <h1>Taking you to the recommended product…</h1>
          {url ? (
            <>
              <p>If you’re not redirected automatically, click below.</p>
              <a
                href={url}
                rel="nofollow sponsored noopener noreferrer"
                style={{display:"inline-block", padding:"10px 16px", borderRadius:8, border:"1px solid #ddd", textDecoration:"none"}}
              >
                {label}
              </a>
            </>
          ) : (
            <p>Link not found.</p>
          )}
        </div>
      </div>
    </>
  );
}
