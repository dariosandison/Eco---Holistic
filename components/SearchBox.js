// components/SearchBox.js
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function SearchBox() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!q) { setResults([]); return; }
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const r = await fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: ctrl.signal });
        const j = await r.json();
        setResults(j.results || []);
        setOpen(true);
      } catch {}
    }, 180);
    return () => { clearTimeout(t); ctrl.abort(); };
  }, [q]);

  return (
    <div className="searchbox" onFocus={()=>setOpen(true)} onBlur={()=>setTimeout(()=>setOpen(false),150)}>
      <input
        ref={inputRef}
        className="search-input"
        placeholder="Search guides & blog…"
        value={q}
        onChange={(e)=>setQ(e.target.value)}
      />
      {open && results.length > 0 && (
        <div className="search-results">
          <ul>
            {results.map((r) => (
              <li key={`${r.type}-${r.slug}`}>
                <Link href={`/${r.type === 'blog' ? 'blog' : 'guides'}/${r.slug}`} onClick={()=>setOpen(false)}>
                  {r.title}
                </Link>
                {r.excerpt ? <div style={{fontSize:12,opacity:.8}}>{r.excerpt}</div> : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
