// components/Newsletter.js
import { useState } from 'react';

export default function Newsletter({ compact = false }) {
  const [done, setDone] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    // Stub success UI (wire to your ESP later via /api/subscribe)
    if (email) setDone(true);
  }

  return (
    <section
      style={{
        marginTop: 24,
        padding: compact ? '12px 14px' : '18px 16px',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        background: '#f8fafb'
      }}
    >
      <h3 style={{ margin: '0 0 6px' }}>Join our newsletter</h3>
      <p style={{ margin: '0 0 12px', color: '#6b7280' }}>
        Actionable tips on wellness & low-tox living. No spam.
      </p>
      {done ? (
        <div style={{ color: '#1f4f2a', fontWeight: 600 }}>Thanks — please check your inbox!</div>
      ) : (
        <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            aria-label="Email"
            style={{ height: 38, padding: '0 10px', borderRadius: 8, border: '1px solid #cbd5e1', width: 260 }}
          />
          <button
            type="submit"
            style={{
              height: 38, padding: '0 14px', borderRadius: 8, border: '1px solid #1f4f2a',
              background: '#1f4f2a', color: '#fff', cursor: 'pointer'
            }}
          >
            Subscribe
          </button>
        </form>
      )}
      <div style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>
        By subscribing, you agree to our <a href="/privacy">Privacy Policy</a>.
      </div>
    </section>
  );
}
