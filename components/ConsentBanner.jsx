// components/ConsentBanner.jsx
import { useEffect, useState } from 'react';
import { grantAnalyticsConsent, revokeAnalyticsConsent } from '../lib/analytics';

const KEY = 'consent.analytics'; // "granted" | "denied" | null

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(KEY) : null;
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, 'granted');
    grantAnalyticsConsent();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(KEY, 'denied');
    revokeAnalyticsConsent();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 'auto 0 0 0', zIndex: 1000,
      background: 'rgba(0,0,0,.85)', color: '#fff', padding: 16
    }}>
      <div style={{maxWidth: 960, margin: '0 auto', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, minWidth: 260}}>
          We use privacy-friendly analytics to improve the site. Accept to help us understand what works.
        </div>
        <div style={{display:'flex', gap:8}}>
          <button onClick={decline} style={{padding:'10px 14px', borderRadius:8, background:'#444', color:'#fff', border:'none'}}>Decline</button>
          <button onClick={accept} style={{padding:'10px 14px', borderRadius:8, background:'#22c55e', color:'#0b1', border:'none'}}>Accept</button>
        </div>
      </div>
    </div>
  );
}
