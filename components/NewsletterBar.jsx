'use client';
import { useEffect, useState } from 'react';

export default function NewsletterBar() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const closed = window.localStorage.getItem('newsletterClosed');
    if (closed === '1') setVisible(false);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky top-0 z-50 bg-emerald-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-3">
        <p className="text-sm">Get new guides in your inbox — no spam.</p>
        <form action={process.env.NEXT_PUBLIC_NEWSLETTER_ACTION || '#'} method="post" className="flex gap-2">
          <input required name="email" type="email" placeholder="you@email.com" className="rounded px-3 py-1 text-black"/>
          <button className="rounded bg-black/90 text-white px-3 py-1">Subscribe</button>
        </form>
        <button aria-label="Close" onClick={() => { localStorage.setItem('newsletterClosed','1'); setVisible(false); }}>✕</button>
      </div>
    </div>
  );
}
