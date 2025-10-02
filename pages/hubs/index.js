// pages/hubs/index.js
import Link from 'next/link';
import SEO from '../../components/SEO';
import hubsData from '../../data/hubs';

function normHubs() {
  if (Array.isArray(hubsData)) return hubsData;
  if (hubsData && typeof hubsData === 'object') {
    if (Array.isArray(hubsData.hubs)) return hubsData.hubs;
    return Object.entries(hubsData).map(([slug, v]) => ({ slug, ...(v || {}) }));
  }
  return [];
}

export async function getStaticProps() {
  const hubs = normHubs().map(h => ({
    slug: h.slug,
    title: h.title || (h.slug ? h.slug.replace(/-/g,' ') : ''),
    description: h.description || ''
  }));
  const seo = {
    title: 'Hubs — Wild & Well',
    description: 'Explore our hubs; curated gateways into sleep, clean living, stress, movement, and more.',
    url: 'https://www.wild-and-well.store/hubs',
    breadcrumbs: [
      { name: 'Home', item: 'https://www.wild-and-well.store/' },
      { name: 'Hubs', item: 'https://www.wild-and-well.store/hubs' }
    ]
  };
  return { props: { hubs, seo }, revalidate: 60 * 60 * 12 };
}

export default function HubsIndex({ hubs, seo }) {
  return (
    <>
      <SEO {...seo} />
      <div className="container">
        <article className="post">
          <h1 className="post-title">Hubs</h1>
          <p className="post-meta">Quick doorways into our best guides and reviews.</p>
          <ul>
            {hubs.map(h => (
              <li key={h.slug}>
                <Link href={`/hubs/${h.slug}`}>{h.title}</Link>
                {h.description ? <> — {h.description}</> : null}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
