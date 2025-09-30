// pages/go/[slug].js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { useEffect } from 'react';
import { trackAffiliateRedirect } from '../../lib/analytics';

const ROOT = process.cwd();

function readAffiliateMap() {
  const p = path.join(ROOT, 'data', 'affiliates.json');
  if (!fs.existsSync(p)) return [];
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return []; }
}

export async function getStaticPaths() {
  const rows = readAffiliateMap();
  const paths = rows.map(r => ({ params: { slug: r.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const rows = readAffiliateMap();
  const row = rows.find(r => r.slug === params.slug) || null;
  return {
    props: {
      slug: params.slug,
      url: row?.url || null,
      label: row?.label || 'Continue',
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
        {url ? <meta httpEquiv="refresh" content={`0;url=${url}`} /> : null}
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div style={{minHeight:'60vh', display:'grid', placeItems:'center', padding:24}}>
        <div style={{maxWidth:560, textAlign:'center'}}>
          <h1>Taking you to the recommended product…</h1>
          {url ? (
            <>
              <p>If you’re not redirected automatically, click below.</p>
              <a
                rel="nofollow sponsored noopener noreferrer"
                href={url}
                style={{display:'inline-block', padding:'10px 16px', borderRadius:8, border:'1px solid #ddd', textDecoration:'none'}}
              >
                {label || 'Continue'}
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
