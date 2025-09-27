// components/SearchBox.js
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function SearchBox() {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Keyboard: '/' focuses, 'Esc' closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Debounced fetch to server API (keeps fs on the server only)
  useEffect(() => {
    if (!q) { setResults([]); return; }
    const t = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setResults(Array.isArray(data?.results) ? data.results.slice(0,5) : []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 150);
    return () => clearTimeout(t);
  }, [q]);

  return (
    <div className="searchbox">
      <input
        ref={inputRef}
        className="search-input"
        type="search"
        placeholder="Search ( / )"
        value={q}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onChange={(e)=>setQ(e.target.value)}
        aria-label="Search Wild & Well"
      />
      {open && (loading || results.length > 0) && (
        <div className="search-results" role="listbox">
          <ul>
            {loading && <li>Searching…</li>}
            {!loading && results.map(r=>(
              <li key={r.slug} onMouseDown={(e)=>e.preventDefault()}>
                <Link href={`/guides/${r.slug}`}>
                  <strong>{r.title}</strong>
                  <span style={{color:'var(--muted)'}}> — {r.category || 'Guide'}</span>
                </Link>
              </li>
            ))}
            {!loading && results.length === 0 && q && <li>No matches</li>}
          </ul>
        </div>
      )}
    </div>
  );
}
