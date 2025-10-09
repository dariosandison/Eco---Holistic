import { useEffect, useMemo, useState } from "react";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const controller = useMemo(()=> new AbortController(), []);

  useEffect(() => {
    if (!q.trim()) { setResults([]); return; }
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: controller.signal });
        if (res.ok) setResults(await res.json());
      } catch { /* ignore */ }
    }, 200);
    return () => clearTimeout(t);
  }, [q]); // eslint-disable-line

  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Search guides & posts…"
        className="w-full bg-hunter border border-cream/30 rounded-lg px-3 py-2 text-cream placeholder:text-cream/50"
      />
      {results.length > 0 && (
        <div className="absolute mt-1 w-full bg-hunter border border-cream/20 rounded-lg shadow-lg overflow-hidden z-50">
          {results.slice(0,8).map(r => (
            <a key={r.path} href={r.path} className="block px-3 py-2 hover:bg-cream/10">
              <div className="text-cream text-sm">{r.title}</div>
              <div className="text-cream/60 text-xs">{r.section}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
