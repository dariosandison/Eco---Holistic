// components/Newsletter.js
import { useState } from 'react';

export default function Newsletter({ compact = false }) {
  const [done, setDone] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    if (!email) return;
    try {
      await fetch('/api/subscribe', { method:'POST', body: JSON.stringify({ email }) });
      setDone(true);
    } catch { setDone(true); }
  }

  return (
    <section className={`newsletter ${compact ? 'compact':''}`}>
      <h3 style={{ margin: '0 0 6px' }}>Join our newsletter</h3>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        Actionable tips on wellness & low-tox living. No spam.
      </p>
      {done ? (
        <div style={{ color: 'var(--brand)', fontWeight: 600 }}>Thanks — please check your inbox!</div>
      ) : (
        <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <input className="news-input" type="email" name="email" required placeholder="you@email.com" aria-label="Email" />
          <button className="btn" type="submit">Subscribe</button>
        </form>
      )}
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--muted)' }}>
        By subscribing, you agree to our <a href="/privacy">Privacy Policy</a>.
      </div>
    </section>
  );
}
