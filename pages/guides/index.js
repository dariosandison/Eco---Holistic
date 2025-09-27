// pages/guides/index.js
import { useMemo, useState } from 'react';
import Link from 'next/link';
import SeoHead from '../../components/SeoHead';
import Card from '../../components/Card';
import { getAllDocs } from '../../lib/content';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

export async function getStaticProps() {
  const docs = getAllDocs({
    dir: 'content/guides',
    fields: ['slug','title','excerpt','date','badge','deal','category','image'],
  });
  // newest first
  docs.sort((a,b) => new Date(b.date || 0) - new Date(a.date || 0));
  return { props: { docs } };
}

export default function GuidesIndex({ docs }) {
  const categories = useMemo(() => {
    const set = new Set();
    docs.forEach(d => d.category && set.add(d.category));
    return ['All', ...Array.from(set).sort()];
  }, [docs]);

  const [active, setActive] = useState('All');
  const [limit, setLimit] = useState(12);

  const filtered = useMemo(() => {
    return active === 'All' ? docs : docs.filter(d => d.category === active);
  }, [docs, active]);

  const visible = filtered.slice(0, limit);
  const hasMore = filtered.length > visible.length;

  return (
    <>
      <SeoHead
        title="Guides — Wild & Well"
        description="Browse actionable wellness guides and clean product picks."
        url={`${SITE}/guides`}
        type="website"
        breadcrumbs={[
          { name: 'Home', url: SITE },
          { name: 'Guides', url: `${SITE}/guides` }
        ]}
      />

      <header className="hero" style={{ textAlign: 'center' }}>
        <h1>Guides</h1>
        <p>Skimmable, evidence-informed guides with clean product picks.</p>

        {/* Category chips */}
        <div className="chips" role="tablist" aria-label="Filter guides by category">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`chip ${active === cat ? 'is-active' : ''}`}
              onClick={() => { setActive(cat); setLimit(12); }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid */}
      <h2 className="section-title" style={{ marginTop: 18 }}>All {active === 'All' ? '' : active} Guides</h2>
      {visible.length === 0 ? (
        <p style={{ color:'#f6f1e3' }}>No guides yet.</p>
      ) : (
        <div className="grid">
          {visible.map(p => <Card key={p.slug} {...p} />)}
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div style={{ display:'flex', justifyContent:'center', marginTop: 16 }}>
          <button className="btn btn--ghost" onClick={() => setLimit(l => l + 12)}>
            Load more
          </button>
        </div>
      )}

      {/* Back to home */}
      <p style={{ textAlign:'center', marginTop: 16 }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </>
  );
}
