// components/GuideFilters.js
import React from "react";

export default function GuideFilters({
  categories = [],
  active = "All",
  setActive = () => {},
  query = "",
  setQuery = () => {},
}) {
  const cats = ["All", ...categories.filter(Boolean)];

  return (
    <div className="bar">
      <div className="tabs" role="tablist" aria-label="Categories">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            className={`chip ${active === c ? "active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="search">
        <span className="icon" aria-hidden>🔎</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides…"
          aria-label="Search guides"
        />
      </div>

      <style jsx>{`
        .bar {
          display: grid;
          gap: 12px;
          margin: 12px 0 8px;
        }
        .tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 2px;
        }
        .chip {
          border: 1px solid #e5e7eb;
          background: #fff;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 0.95rem;
          cursor: pointer;
          white-space: nowrap;
        }
        .chip.active {
          border-color: #0f766e;
          color: #0f766e;
          font-weight: 700;
          background: #ecfdf5;
        }
        .search {
          position: relative;
        }
        .icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.7;
        }
        input {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 10px 12px 10px 34px;
          font-size: 1rem;
        }
        input:focus {
          outline: none;
          border-color: #0f766e;
          box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.15);
        }
      `}</style>
    </div>
  );
}
