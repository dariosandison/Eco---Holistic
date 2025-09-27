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
      } catch {
        setResults([]); setOpen(false);
      }
    }, 220);
    return () => clearTimeout(t.current);
  }, [q]);

  return (
    <div className="searchbox" onFocus={()=>setOpen(!!results.length)} onBlur={()=>setTimeout(()=>setOpen(false),150)}>
      <input
        className="search-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search guides…"
        aria-label="Search guides"
      />
      {open && results.length > 0 && (
        <div className="search-results" role="listbox">
          <ul>
            {results.map((r) => (
              <li key={r.slug}>
                <Link href={`/guides/${r.slug}`}>
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
