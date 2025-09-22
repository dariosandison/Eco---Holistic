// /components/ContactForm.js
import { useState, useEffect } from 'react';
import * as gtag from '../src/lib/gtag';
import { captureUtmFromUrl, getUtm } from '../src/lib/utm';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    captureUtmFromUrl();
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    if (!/^\S+@\S+\.\S+$/.test(form.email) || form.message.trim().length < 10) {
      setErr('Please provide a valid email and a message (min 10 chars).');
      return;
    }
    setBusy(true);
    try {
      // GA4 (no PII)
      gtag.event('generate_lead', {
        method: 'contact_form',
        form_location: 'contact_page',
      });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          page_path: typeof window !== 'undefined' ? window.location.pathname : '',
          utm: getUtm(),
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setOk(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setErr('Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  if (ok) {
    return (
      <div style={noticeOk}>
        <h3 style={{ marginTop: 0 }}>Thanks!</h3>
        <p>We received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={formWrap}>
      <div style={row}>
        <label style={label}>Name</label>
        <input
          style={input}
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Jane Doe"
        />
      </div>
      <div style={row}>
        <label style={label}>Email *</label>
        <input
          style={input}
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="you@example.com"
          required
        />
      </div>
      <div style={row}>
        <label style={label}>Message *</label>
        <textarea
          style={{ ...input, minHeight: 120, resize: 'vertical' }}
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="How can we help?"
          required
        />
      </div>
      {err ? <p style={error}>{err}</p> : null}
      <button type="submit" disabled={busy} style={submit}>
        {busy ? 'Sending…' : 'Send message'}
      </button>
      <p style={small}>
        By sending, you agree to our <a href="/privacy" style={link}>Privacy Policy</a>.
      </p>
    </form>
  );
}

const formWrap = { maxWidth: 720, margin: '0 auto', display: 'grid', gap: 12 };
const row = { display: 'grid', gap: 6 };
const label = { fontSize: 14, color: '#0f172a' };
const input = {
  borderRadius: 8,
  border: '1px solid #cbd5e1',
  padding: '10px 12px',
  outline: 'none',
  fontSize: 14,
};
const submit = {
  width: 'fit-content',
  padding: '10px 16px',
  borderRadius: 8,
  border: '1px solid #22c55e',
  background: '#22c55e',
  color: '#052e12',
  fontWeight: 600,
  cursor: 'pointer',
};
const error = { margin: '0 0 6px', color: '#b91c1c' };
const small = { fontSize: 12, color: '#475569' };
const noticeOk = {
  maxWidth: 720,
  margin: '0 auto',
  background: '#ecfdf5',
  border: '1px solid #bbf7d0',
  color: '#064e3b',
  borderRadius: 10,
  padding: 16,
};
const link = { color: '#0369a1', textDecoration: 'underline' };
