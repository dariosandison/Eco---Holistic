// components/SearchBarTabs.js
import { useMemo } from "react";

export default function SearchBarTabs({ guides, query, setQuery, tag, setTag }) {
  // Collect unique tags from frontmatter (tags: ['Water', 'Kitchen'] etc.)
  const tags = useMemo(() => {
    const t = new Set();
    guides.forEach(g => (g.meta?.tags || []).forEach(x => t.add(x)));
    return ["All", ...Array.from(t)];
  }, [guides]);

  return (
    <div className="container">
      <div className="searchbar" role="search">
        <input
          aria-label="Search guides"
          placeholder="Search guides…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="tab"
          type="button"
          aria-pressed={tag === "All"}
          onClick={() => setTag("All")}
          title="Reset filters"
        >
          Reset
        </button>
      </div>

      <div className="tabbar" role="tablist" aria-label="Filter by tag">
        {tags.map((t) => (
          <button
            key={t}
            className="tab"
            role="tab"
            aria-pressed={tag === t}
            onClick={() => setTag(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
