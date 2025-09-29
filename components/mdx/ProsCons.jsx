// components/mdx/ProsCons.jsx
import React from 'react';

function normalizeList(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') {
    // allow "a | b | c" shorthand
    return val.split('|').map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

export default function ProsCons({ pros, cons, children }) {
  const prosList = normalizeList(pros);
  const consList = normalizeList(cons);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border p-4">
        <h4 className="mb-2 font-semibold">Pros</h4>
        {prosList.length ? (
          <ul className="list-disc pl-5">
            {prosList.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">—</p>
        )}
      </div>
      <div className="rounded-2xl border p-4">
        <h4 className="mb-2 font-semibold">Cons</h4>
        {consList.length ? (
          <ul className="list-disc pl-5">
            {consList.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">—</p>
        )}
      </div>

      {children ? <div className="sm:col-span-2">{children}</div> : null}
    </div>
  );
}
