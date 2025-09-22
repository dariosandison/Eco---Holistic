// /components/StickyNewsletter.js
import { useEffect, useState } from 'react';
import * as gtag from '../src/lib/gtag';
import { captureUtmFromUrl, getUtm } from '../src/lib/utm';

export default function StickyNewsletter() {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    captureUtmFromUrl();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErr('Please enter a valid email.');
      return;
    }
    setBusy(true);
    try {
      // Fire GA4 (no PII — do NOT send email to GA)
      gtag.event('sign_up', {
        method: 'newsletter_form',
        form_location: 'sticky_newsletter',
      });

      // Send to lightweight API (no provider yet; success placeholder)
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          page_path: typeof window !== 'undefined' ? window.location.pathname : '',
          utm: getUtm(),
          source: 'sticky_newsletter',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setDone(true);
      setEmail('');
    } catch {
      setErr('Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  if (!open) return null;

  return (
    <aside style={wrap}>
      <button
        onClick={() => setOpen(false)}
        aria-label="Close newsletter signup"
        style={closeBtn}
      >
        ×
      </button>
      <h3 style={title}>Join our newsletter</h3>
      <p style={copy}>Actionable tips on health & low-tox living. No spam.</p>

      {done ? (
        <p style={success}>Thanks! Please check your inbox.</p>
      ) : (
        <form onSubmit={onSubmit} style={form}>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            required
            style={input}
          />
          <button type="submit" disabled={busy} style={cta}>
            {busy ? 'Submitting…' : 'Subscribe'}
          </button>
        </form>
      )}
      {err ? <p style={error}>{err}</p> : null}
      <p style={fineprint}>
        By subscribing, you agree to our <a href="/privacy" style={link}>Privacy Policy</a>.
      </p>
    </aside>
  );
}

const wrap = {
  position: 'fixed',
  right: '16px',
  bottom: '16px',
  zIndex: 1000,
  width: '320px',
  maxWidth: 'calc(100vw - 32px)',
  background: '#0f172a',
  color: '#e5e7eb',
  border: '1px solid #23304f',
  borderRadius: '14px',
  padding: '16px',
  boxShadow: '0 8px 22px rgba(0,0,0,0.35)',
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
};
const closeBtn = {
  position: 'absolute',
  top: 8,
  right: 8,
  background: 'transparent',
  border: 'none',
  color: '#94a3b8',
  fontSize: '20px',
  cursor: 'pointer',
};
const title = { margin: '0 0 6px', fontSize: '18px', lineHeight: 1.2, color: '#fff' };
const copy = { margin: '0 0 12px', fontSize: '14px', color: '#cbd5e1' };
const form = { display: 'flex', gap: '8px' };
const input = {
  flex: 1,
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #334155',
  background: '#0b1224',
  color: '#e5e7eb',
  outline: 'none',
};
const cta = {
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1px solid #22c55e',
  background: '#22c55e',
  color: '#052e12',
  fontWeight: 600,
  cursor: 'pointer',
};
const success = { margin: '6px 0 0', color: '#86efac', fontSize: '14px' };
const error = { margin: '6px 0 0', color: '#fca5a5', fontSize: '13px' };
const fineprint = { margin: '8px 0 0', fontSize: '12px', color: '#94a3b8' };
const link = { color: '#93c5fd', textDecoration: 'underline' };
