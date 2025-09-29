// pages/go/[slug].js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import { buildAffiliateUrl } from '../../lib/affiliate';

const MAP_PATH = path.join(process.cwd(), 'data', 'go.json');

function readMap() {
  if (!fs.existsSync(MAP_PATH)) return {};
  return JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
}

export async function getStaticPaths() {
  const map = readMap();
  const paths = Object.keys(map).map(slug => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const map = readMap();
  const item = map[params.slug] || null;

  // Build final URL with params + UTM. If missing, send to homepage.
  const target = item
    ? buildAffiliateUrl({
        base: item.url,
        params: item.params || {},
        utm: item.utm || {},
        slug: params.slug
      })
    : 'https://www.wild-and-well.store/';

  return {
    props: {
      slug: params.slug,
      target
    }
  };
}

export default function GoPage({ slug, target }) {
  const safeTarget = target || '/';

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        {/* Meta refresh as a fallback */}
        <meta httpEquiv="refresh" content={`0;url=${safeTarget}`} />
        <title>Redirecting…</title>
      </Head>
      <div className="container" style={{ padding: '24px 16px' }}>
        <p className="post-meta">Taking you to the retailer…</p>
        <p>
          If you’re not redirected,{' '}
          <a
            href={safeTarget}
            rel="nofollow sponsored noopener noreferrer"
            onClick={() => {
              try {
                if (window.gtag) {
                  window.gtag('event', 'affiliate_click', {
                    event_category: 'affiliate',
                    event_label: slug,
                    value: 1
                  });
                }
              } catch {}
            }}
          >
            click here
          </a>.
        </p>
        <p className="post-meta">
          Or go back <Link href="/">home</Link>.
        </p>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              try {
                if (window.gtag) {
                  window.gtag('event','affiliate_click',{event_category:'affiliate',event_label:${JSON.stringify(
                    slug
                  )},value:1});
                }
              } catch(e){}
              window.location.replace(${JSON.stringify(safeTarget)});
            })();
          `
        }}
      />
    </>
  );
}
