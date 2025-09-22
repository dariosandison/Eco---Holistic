// /components/ConsentBanner.js
import { useEffect, useState } from 'react';
import * as gtag from '../src/lib/gtag';

const STORAGE_KEY = 'eh_consent_choice_v1';

function applyConsent(state) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('consent', 'update', {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(STORAGE_KEY); // 'granted' | 'denied' | null
    if (saved === 'granted' || saved === 'denied') {
      // Ensure GA gets the persisted choice on load
      applyConsent(saved);
      setShow(false);
    } else {
      // No choice yet — show banner (defaults are set to "denied" in _app.js)
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'granted');
    } catch {}
    applyConsent('granted');
    gtag.event('consent_accept', { page_path: typeof window !== 'undefined' ? window.location.pathname : undefined });
    setShow(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'denied');
    } catch {}
    applyConsent('denied');
    gtag.event('consent_decline', { page_path: typeof window !== 'undefined' ? window.location.pathname : undefined });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={barStyle} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div style={innerStyle}>
        <p style={textStyle}>
          We use cookies to analyze traffic and improve your experience. You can accept or decline. See our{' '}
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>.
        </p>
        <div style={btnWrap}>
          <button onClick={decline} style={{ ...btnBase, ...btnGhost }} aria-label="Decline analytics cookies">
            Decline
          </button>
          <button onClick={accept} style={{ ...btnBase, ...btnPrimary }} aria-label="Accept analytics cookies">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

const barStyle = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  background: 'rgba(18,18,18,0.98)',
  backdropFilter: 'saturate(180%) blur(8px)',
  color: '#fff',
  padding: '16px',
};

const innerStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const textStyle = { margin: 0, lineHeight: 1.4, fontSize: '14px' };
const linkStyle = { color: '#8dd3ff', textDecoration: 'underline' };

const btnWrap = { display: 'flex', gap: '8px' };
const btnBase = {
  borderRadius: '8px',
  padding: '10px 14px',
  fontSize: '14px',
  cursor: 'pointer',
  border: '1px solid transparent',
};
const btnPrimary = { background: '#34c759', color: '#0b270f' };
const btnGhost = { background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' };
