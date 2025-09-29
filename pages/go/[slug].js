// pages/go/[slug].js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';

const ROOT = process.cwd();

function readAffiliateMap() {
  const p = path.join(ROOT, 'data', 'affiliates.json');
  if (!fs.existsSync(p)) return [];
  const raw = fs.readFileSync(p, 'utf8');
  try { return JSON.parse(raw); } catch { return []; }
}

export async function getStaticPaths() {
  const rows = readAffiliateMap();
  return {
    paths: rows.map((r) => ({ params: { slug: r.slug } })),
    fallback: false, // export-friendly
  };
}

export async function getStaticProps({ params }) {
  const rows = readAffiliateMap();
  const found = rows.find((r) => r.slug === params.slug);
  const url = found?.url || 'https://www.wild-and-well.store/';
  return {
    props: {
      slug: params.slug,
      url
    }
  };
}

export default function GoRedirect({ slug, url }) {
  // Minimal, index-safe redirect page
  return (
    <>
      <Head>
        <title>Leaving — Wild &amp; Well</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="refresh" content={`0;url=${url}`} />
        <link rel="canonical" href={`https://www.wild-and-well.store/go/${slug}`} />
      </Head>
      <div style={{
        minHeight: '60vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: 24, textAlign: 'center'
      }}>
        <div>
          <h1 style={{ marginBottom: 8 }}>Taking you to the shop…</h1>
          <p style={{ marginBottom: 16 }}>If you’re not redirected automatically, use the button below.</p>
          <a
            rel="nofollow sponsored noopener noreferrer"
            href={url}
            style={{
              display: 'inline-block', padding: '10px 16px',
              borderRadius: 8, border: '1px solid #ddd', textDecoration: 'none'
            }}
          >
            Continue
          </a>
        </div>
      </div>
    </>
  );
}
