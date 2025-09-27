// components/SearchBox.js
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function SearchBox() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const t = useRef();

  useEffect(() => {
    if (!q) { setResults([]); setOpen(false); return; }
    clearTimeout(t.current);
    t.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setResults(data.items || []);
        setOpen(true);
      } catch (e) { setResults([]); setOpen(false); }
    }, 250);
    return () => clearTimeout(t.current);
  }, [q]);

  return (
    <div style={{ position: 'relative' }}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search guides…"
        aria-label="Search"
        style={{
          height: 34, padding: '0 10px', borderRadius: 8, border: '1px solid #cbd5e1',
          outline: 'none', width: 220
        }}
      />
      {open && results.length > 0 && (
        <div
          style={{
            position: 'absolute', top: 40, right: 0, width: 320, background: '#fff',
            border: '1px solid #e5e7eb', borderRadius: 8, boxShadow: '0 10px 20px rgba(0,0,0,.08)', zIndex: 20
          }}
          onMouseLeave={() => setOpen(false)}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 8, maxHeight: 320, overflowY: 'auto' }}>
            {results.map((r) => (
              <li key={r.slug} style={{ padding: 8, borderRadius: 6 }}>
                <Link href={`/guides/${r.slug}`} style={{ textDecoration: 'none', color: '#111' }}>
                  <div style={{ fontWeight: 600 }}>{r.title || r.slug}</div>
                  {r.excerpt && <div style={{ color: '#6b7280', fontSize: 13, marginTop: 2 }}>{r.excerpt}</div>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
