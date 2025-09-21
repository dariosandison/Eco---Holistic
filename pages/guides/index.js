import Link from 'next/link';
import { useMemo, useState } from 'react';
import SEO from '../../src/components/SEO';
import { getAllGuides } from '../../src/lib/guides';

export default function GuidesIndex({ guides }) {
  const [q, setQ] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(guides.map(g => (g.category || '').trim()).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [guides]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return guides.filter(g => {
      const inCat = activeCat === 'All' || (g.category || '') === activeCat;
      if (!inCat) return false;
      if (!query) return true;
      const hay = `${g.title || ''} ${g.excerpt || ''} ${g.category || ''} ${g.slug || ''}`.toLowerCase();
      return hay.includes(query);
    });
  }, [guides, q, activeCat]);

  return (
    <>
      <SEO
        title="Guides — Wild & Well"
        description="Browse all Wild & Well guides: eco-living, holistic health, and mindful wellness—without the technical jargon."
        canonical="https://www.wild-and-well.store/guides"
      />

      <main className="wrap">
        <header className="head">
          <h1>Guides</h1>
          <p className="sub">Practical, bite-size reads to help you live well—simply.</p>
        </header>

        <div className="toolbar">
          <div className="search">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search guides (e.g., sleep, water filter, cookware)"
              aria-label="Search guides"
            />
          </div>
          <div className="chips" role="tablist" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={activeCat === c}
                className={`chip ${activeCat === c ? 'active' : ''}`}
                onClick={() => setActiveCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="count">{filtered.length} guide{filtered.length === 1 ? '' : 's'}</div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            <p>No guides match your search.</p>
            <button className="chip" onClick={() => { setQ(''); setActiveCat('All'); }}>Reset filters</button>
          </div>
        ) : (
          <div className="grid">
            {filtered.map((g) => (
              <GuideCard key={g.slug} g={g} />
            ))}
          </div>
        )}
      </main>

      <style jsx>{`
        .wrap { max-width: 1100px; margin: 0 auto; padding: 24px; }
        .head h1 { margin: 0 0 4px; }
        .sub { margin: 0; color: #555; }
        .toolbar { display: grid; gap: 12px; margin: 18px 0 10px; }
        @media (min-width: 800px) {
          .toolbar { grid-template-columns: 1fr; }
        }
        .search input {
          width: 100%;
          font-size: 16px;
          padding: 12px 14px;
          border: 1px solid #e6e6e6;
          border-radius: 10px;
          outline: none;
        }
        .search input:focus { border-color: #0a7; box-shadow: 0 0 0 3px rgba(0,170,119,.08); }
        .chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          border: 1px solid #e6e6e6;
          background: #fff;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 14px;
          cursor: pointer;
        }
        .chip.active { background: #0a7; color: #fff; border-color: #0a7; }
        .count { font-size: 13px; color: #666; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin-top: 8px; }
        .card { display: block; border: 1px solid #eee; border-radius: 10px; overflow: hidden; text-decoration: none; color: inherit; background: #fff; transition: box-shadow .2s ease, transform .02s ease; }
        .card:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.06); transform: translateY(-1px); }
        .thumb { aspect-ratio: 16/9; background: #f6f6f6; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #888; }
        .body { padding: 12px; }
        .title { margin: 0 0 6px; font-size: 16px; line-height: 1.3; }
        .excerpt { margin: 0; font-size: 14px; color: #555; }
        .meta { margin-top: 8px; font-size: 12px; color: #777; }
        .empty { padding: 20px; border: 1px dashed #e6e6e6; border-radius: 12px; background: #fafafa; display: inline-flex; align-items: center; gap: 12px; }
      `}</style>
    </>
  );
}

function GuideCard({ g }) {
  return (
    <Link href={`/guides/${g.slug}`} className="card">
      <div className="thumb">
        {g.cover ? (
          <img src={g.cover} alt={g.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          'Guide'
        )}
      </div>
      <div className="body">
        <h3 className="title">{g.title || g.slug}</h3>
        <p className="excerpt">{g.excerpt || 'Quick, practical tips to get started.'}</p>
        <div className="meta">
          {formatDate(g.date)}{g.category ? ` · ${g.category}` : ''}
        </div>
      </div>
    </Link>
  );
}

function formatDate(s) {
  if (!s) return '';
  try {
    const d = new Date(s);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return s;
  }
}

export async function getStaticProps() {
  const items = await getAllGuides();
  // Already sorted by date in lib; keep serializable-only fields
  const guides = items.map(g => ({
    slug: g.slug,
    title: g.title || '',
    excerpt: g.excerpt || '',
    date: g.date || null,
    cover: g.cover || '',
    category: g.category || '',
    featured: !!g.featured
  }));

  return {
    props: { guides }
  };
}
