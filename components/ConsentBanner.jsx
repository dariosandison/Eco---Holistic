'use client';
import { useEffect, useState } from 'react';

export default function ConsentBanner(){
  const requireConsent = process.env.NEXT_PUBLIC_REQUIRE_CONSENT === 'true';
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!requireConsent) return;
    const v = localStorage.getItem('consent_analytics');
    if (!v) setOpen(true);
  }, [requireConsent]);
  if (!requireConsent || !open) return null;
  return (
    <div className="fixed bottom-3 inset-x-0 z-50">
      <div className="mx-auto max-w-3xl card px-4 py-3 bg-white shadow">
        <p className="text-sm text-neutral-700">
          We use cookies for analytics to improve our content. You can accept or decline analytics cookies.
        </p>
        <div className="mt-3 flex gap-2">
          <button className="btn" onClick={() => { localStorage.setItem('consent_analytics','granted'); setOpen(false); location.reload(); }}>Accept</button>
          <button className="btn" style={{background:'#e5e7eb', color:'#0b1415'}} onClick={() => { localStorage.setItem('consent_analytics','denied'); setOpen(false); }}>Decline</button>
        </div>
      </div>
    </div>
  );
}
