// components/mdx/Disclosure.jsx
import React from 'react';

export default function Disclosure({ title = 'Details', defaultOpen = false, children }) {
  return (
    <details className="rounded-2xl border p-4" open={defaultOpen}>
      <summary className="cursor-pointer list-none font-semibold">{title}</summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}
