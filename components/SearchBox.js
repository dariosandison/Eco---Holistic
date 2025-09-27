// components/SearchBox.js
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getAllDocs } from '../lib/content';

export default function SearchBox() {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);

  // Keyboard: '/' focuses, 'Esc' closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault(); inputRef.current?.focus(); setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false); inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Simple in-memory search over titles/excerpts (SSR-provided at build)
  useEffect(() => {
    if (!q) { setResults([]); return; }
    try {
      const all = getAllDocs({ dir:'content/guides', fields:['slug','title','excerpt','category'] }) || [];
      const qq = q.toLowerCase();
      const out = all.filter(p =>
        (p.title||'').toLowerCase().includes(qq) ||
        (p.excerpt||'').toLowerCase().includes(qq) ||
        (p.category||'').toLowerCase().includes(qq)
      ).slice(0,5);
      setResults(out);
    } catch { setResults([]); }
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
        onChange={(e)=>setQ(e.target.value)}
      />
      {open && results.length > 0 && (
        <div className="search-results" role="listbox">
          <ul>
            {results.map(r=>(
              <li key={r.slug} onClick={()=>setOpen(false)}>
                <Link href={`/guides/${r.slug}`}><strong>{r.title}</strong> <span style={{color:'var(--muted)'}}>— {r.category||'Guide'}</span></Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
