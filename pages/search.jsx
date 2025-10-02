import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function SearchPage() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('/feed.xml');
        const xml = await res.text();
        // Parse in browser
        const doc = new window.DOMParser().parseFromString(xml, 'text/xml');
        const nodes = Array.from(doc.querySelectorAll('item'));
        const parsed = nodes.map((n) => ({
          title: n.querySelector('title')?.textContent?.trim() || '',
          url: n.querySelector('link')?.textContent?.trim() || '#',
          description: n.querySelector('description')?.textContent?.trim() || '',
          categories: Array.from(n.querySelectorAll('category')).map((c) => c.textContent?.trim() || ''),
          date: n.querySelector('pubDate')?.textContent?.trim() || '',
        }));
        if (!cancelled) setItems(parsed);
      } catch (e) {
        console.error('Failed to load feed.xml', e);
      }
    }
    if (typeof window !== 'undefined') load();
    return () => { cancelled = true; };
  }, []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((it) => {
      const hay = [
        it.title,
        it.url,
        it.description,
        ...(it.categories || []),
      ].join(' ').toLowerCase();
      return hay.includes(needle);
    });
  }, [q, items]);

  return (
    <>
      <SEO
        title="Search — Wild & Well"
        description="Find guides, reviews, and blog posts on Wild & Well."
      />
      <main className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Search</h1>

        <input
          type="search"
          placeholder="Try: sleep, creatine, cookware, water filters…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search site"
          style={{
            width: '100%',
            padding: '0.9rem 1rem',
            border: '1px solid #ddd',
            borderRadius: 12,
            fontSize: '1rem',
            marginBottom: '1.25rem',
          }}
        />

        <p style={{ color: '#666', marginBottom: '1rem' }}>
          {results.length} result{results.length === 1 ? '' : 's'}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {results.map((r) => (
            <li key={r.url} style={{ padding: '1rem 0', borderTop: '1px solid #eee' }}>
              <Link href={r.url} className="result-link" style={{ textDecoration: 'none' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{r.title}</h3>
              </Link>
              {r.description && (
                <p style={{ margin: '0.35rem 0 0.25rem', color: '#444' }}>
                  {r.description.replace(/<[^>]*>/g, '')}
                </p>
              )}
              {r.categories?.length > 0 && (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 6 }}>
                  {r.categories.map((c, i) => (
                    <span key={i} style={{ fontSize: 12, background: '#f5f5f5', borderRadius: 999, padding: '2px 8px' }}>
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
