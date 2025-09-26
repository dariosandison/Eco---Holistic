// components/SearchModal.js
'use client';
import { useEffect, useMemo, useState } from 'react';

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('open-search', openHandler);
    return () => window.removeEventListener('open-search', openHandler);
  }, []);

  useEffect(() => {
    if (!q) { setResults([]); return; }
    const id = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`).then(r => r.json());
      setResults(res.results || []);
    }, 250);
    return () => clearTimeout(id);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 p-4" onClick={() => setOpen(false)}>
      <div className="mx-auto mt-20 max-w-2xl rounded-xl bg-white p-4" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search guides, blogs, deals…"
          className="w-full rounded-lg border px-3 py-2"
        />
        <ul className="mt-3 divide-y">
          {results.map((r) => (
            <li key={r.url} className="py-2">
              <a href={r.url} className="block hover:underline">
                <div className="font-medium">{r.title}</div>
                <div className="text-sm opacity-70">{r.snippet}</div>
              </a>
            </li>
          ))}
          {q && results.length === 0 && <li className="py-4 text-center opacity-60">No results</li>}
        </ul>
      </div>
    </div>
  );
}
