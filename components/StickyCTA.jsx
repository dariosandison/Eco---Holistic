// components/StickyCTA.jsx
import { useEffect, useState } from 'react';

export default function StickyCTA({
  href,
  label = 'View price',
  sublabel = 'Top pick',
  visibleOffset = 500,     // px scrolled before showing
  mobileBreakpoint = 820,   // px (show on mobile/tablet only)
}) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!href) return;
    const onScroll = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= mobileBreakpoint;
      setShow(!dismissed && isMobile && window.scrollY > visibleOffset);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [href, dismissed, visibleOffset, mobileBreakpoint]);

  if (!href || !show) return null;

  const clickTrack = () => {
    try {
      if (typeof window !== 'undefined' && window.plausible) {
        window.plausible('Sticky CTA Click', { props: { href, page: location.pathname } });
      }
    } catch {}
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 60,
        background: '#0f172a',
        color: 'white',
        borderRadius: 14,
        padding: '12px 14px',
        boxShadow: '0 10px 30px rgba(0,0,0,.25)',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}
      role="region"
      aria-label="Quick action"
    >
      <div style={{ flex: '1 1 auto' }}>
        <div style={{ fontSize: 12, opacity: 0.8, lineHeight: 1 }}>{sublabel}</div>
        <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>{label}</div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        onClick={clickTrack}
        style={{
          background: 'white',
          color: '#0f172a',
          borderRadius: 12,
          padding: '10px 14px',
          fontWeight: 700,
          textDecoration: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        Shop →
      </a>
      <button
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
        style={{
          border: 'none',
          background: 'transparent',
          color: 'white',
          fontSize: 18,
          lineHeight: 1,
          padding: 8,
          cursor: 'pointer'
        }}
      >
        ×
      </button>
    </div>
  );
}
