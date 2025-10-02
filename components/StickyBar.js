// components/StickyBar.js
import { useEffect, useState } from 'react';

export default function StickyBar() {
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem('ww_sticky_dismissed');
      if (s === '1') setHidden(true);
    } catch {}
  }, []);

  function dismiss() {
    setHidden(true);
    try { localStorage.setItem('ww_sticky_dismissed', '1'); } catch {}
  }

  async function onSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    if (!email) return;
    try {
      await fetch('/api/subscribe', { method:'POST', body: JSON.stringify({ email }) });
      setDone(true);
      setTimeout(dismiss, 2500);
    } catch {
      setDone(true);
      setTimeout(dismiss, 2500);
    }
  }

  if (hidden) return null;

  return (
    <aside className="stickybar" role="complementary" aria-label="Newsletter and quick links">
      <div className="sticky-inner container">
        <div className="sticky-left">
          <strong>Get the good stuff</strong>
          <span className="sticky-sub">1–2 emails/month. No spam.</span>
        </div>

        {done ? (
          <div className="sticky-done" aria-live="polite">Thanks — check your inbox!</div>
        ) : (
          <form className="sticky-form" onSubmit={onSubmit}>
            <input className="sticky-input" type="email" name="email" placeholder="you@email.com" required aria-label="Email"/>
            <button className="sticky-btn" type="submit">Subscribe</button>
          </form>
        )}

        <div className="sticky-links">
          <a href="https://instagram.com/wildandwell_uk" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram" className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <circle cx="17.5" cy="6.5" r="0.9"></circle>
            </svg>
          </a>
          <a href="https://pinterest.com/wildandwell_uk/" target="_blank" rel="noopener noreferrer" title="Pinterest" aria-label="Pinterest" className="icon">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C7.03 2 3 5.94 3 10.78c0 3.67 2.14 6.83 5.23 7.95-.07-.67-.13-1.7.03-2.43.14-.66.93-4 .93-4s-.24-.49-.24-1.22c0-1.14.66-1.99 1.48-1.99.7 0 1.04.52 1.04 1.15 0 .7-.44 1.77-.66 2.75-.19.84.42 1.51 1.24 1.51 1.49 0 2.64-1.57 2.64-3.83 0-2-1.44-3.39-3.49-3.39-2.38 0-3.78 1.78-3.78 3.62 0 .72.28 1.48.63 1.89.06.07.07.13.06.2-.07.22-.21.7-.23.8-.03.11-.12.14-.26.08-.97-.4-1.58-1.69-1.58-2.72 0-2.22 1.62-4.25 4.69-4.25 2.46 0 4.37 1.76 4.37 4.12 0 2.45-1.54 4.42-3.69 4.42-.72 0-1.39-.38-1.62-.83l-.44 1.69c-.16 .6-.59 1.37-.87 1.83 .66 .2 1.36 .31 2.09 .31 4.97 0 9-3.94 9-8.78C21 5.94 16.97 2 12 2z"/>
            </svg>
          </a>
        </div>

        <button className="sticky-close" onClick={dismiss} aria-label="Dismiss newsletter bar">×</button>
      </div>
    </aside>
  );
}
