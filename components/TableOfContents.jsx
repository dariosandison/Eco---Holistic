'use client';
import { useEffect, useState } from 'react';

export default function TableOfContents({ toc=[] }){
  const [active, setActive] = useState(toc?.[0]?.id);
  useEffect(() => {
    const handler = () => {
      let current = toc?.[0]?.id;
      for (const item of toc){
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = item.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [toc]);
  if (!toc?.length) return <p className="text-sm text-neutral-500">No headings.</p>;
  return (
    <ul className="space-y-2 text-sm">
      {toc.map(item => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={active===item.id ? 'font-semibold text-brand' : 'text-neutral-700'}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
