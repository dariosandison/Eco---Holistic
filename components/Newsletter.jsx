// components/Newsletter.jsx
import { useEffect, useState } from "react";

export default function Newsletter() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  // Show the sticky bar after a short delay, unless the user closed it recently
  useEffect(() => {
    const dismissedUntil = localStorage.getItem("nw_dismiss_until");
    if (dismissedUntil && Date.now() < Number(dismissedUntil)) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  function dismiss(minutes = 60 * 24 * 7) { // 7 days
    localStorage.setItem("nw_dismiss_until", String(Date.now() + minutes * 60 * 1000));
    setOpen(false);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Enter a valid email");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (data?.ok) {
        setDone(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  // Footer block (always visible)
  const FooterBlock = (
    <section className="nw-footer">
      <h2>Get the best of Wild &amp; Well</h2>
      <p>Actionable tips, product picks &amp; guides. No spam. Unsubscribe anytime.</p>
      {done ? (
        <p className="nw-ok" role="status">Thanks! Please check your inbox. 🎉</p>
      ) : (
        <form onSubmit={onSubmit} className="nw-form" aria-label="Subscribe to newsletter">
          <label className="sr-only" htmlFor="nw-email">Email</label>
          <input
            id="nw-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={!!error}
          />
          <button type="submit" disabled={busy}>
            {busy ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      )}
      {error ? <p className="nw-error" role="alert">{error}</p> : null}
    </section>
  );

  return (
    <>
      {/* Sticky bar (can be dismissed) */}
      {open && !done && (
        <aside className="nw-sticky" role="region" aria-label="Newsletter sign-up">
          <div className="nw-wrap">
            <span className="nw-title">Join Wild &amp; Well</span>
            <form onSubmit={onSubmit} className="nw-inline" aria-label="Subscribe to newsletter">
              <label className="sr-only" htmlFor="nw-email-top">Email</label>
              <input
                id="nw-email-top"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={!!error}
              />
              <button type="submit" disabled={busy}>
                {busy ? "…" : "Subscribe"}
              </button>
            </form>
            <button className="nw-close" aria-label="Dismiss" onClick={() => dismiss()}>
              ✕
            </button>
          </div>
          {error ? <p className="nw-error nw-error-top" role="alert">{error}</p> : null}
        </aside>
      )}

      {/* Footer block */}
      {FooterBlock}

      <style jsx>{`
        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }
        .nw-sticky {
          position: sticky;
          bottom: 0;
          z-index: 50;
          background: #0b1f17; /* deep olive/green-black */
          color: #e7f2ec;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 10px 12px;
        }
        .nw-wrap {
          display: flex; gap: 12px; align-items: center; max-width: 1100px; margin: 0 auto;
        }
        .nw-title { font-weight: 600; }
        .nw-inline { display: flex; gap: 8px; flex: 1; }
        .nw-inline input {
          flex: 1; min-width: 200px; height: 40px; padding: 0 12px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.06);
          color: #fff;
        }
        .nw-inline input::placeholder { color: #cfe0d7; }
        .nw-inline button {
          height: 40px; padding: 0 16px; border-radius: 8px; border: none; cursor: pointer;
          background: #3b7a57; color: #fff; font-weight: 600;
        }
        .nw-inline button[disabled] { opacity: 0.6; cursor: default; }
        .nw-close {
          background: transparent; color: #e7f2ec; border: none; cursor: pointer; font-size: 18px;
          line-height: 1; opacity: 0.8;
        }
        .nw-error-top { margin: 6px auto 0; max-width: 1100px; color: #ffd5d5; }
        /* Footer block */
        .nw-footer {
          max-width: 900px; margin: 48px auto; padding: 28px; border-radius: 16px;
          background: #f3f7f5; border: 1px solid #e0ece6;
          text-align: center;
        }
        .nw-footer h2 { margin: 0 0 8px; font-size: 24px; }
        .nw-footer p { margin: 0 0 16px; color: #2e443a; }
        .nw-form { display: flex; gap: 8px; justify-content: center; }
        .nw-form input {
          width: min(420px, 80%); height: 44px; padding: 0 12px; border-radius: 10px;
          border: 1px solid #cfe0d7; background: white;
        }
        .nw-form button {
          height: 44px; padding: 0 18px; border-radius: 10px; border: none; cursor: pointer;
          background: #3b7a57; color: #fff; font-weight: 600;
        }
        .nw-ok { color: #2e6b4f; font-weight: 600; }
        .nw-error { color: #b00020; margin-top: 6px; }
        @media (max-width: 640px) {
          .nw-wrap { flex-direction: column; align-items: stretch; }
          .nw-inline { width: 100%; }
          .nw-close { position: absolute; right: 10px; top: 8px; }
        }
      `}</style>
    </>
  );
}
