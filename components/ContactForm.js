// components/ContactForm.js
import { useEffect, useMemo, useState } from "react";
import { pageview, event as gaEvent } from "../lib/gtag";
import { parseUtmFromUrl } from "../lib/utm";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    return parseUtmFromUrl(window.location.search);
  }, []);

  useEffect(() => {
    // safe no-op if GA is not configured
    pageview("/contact");
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const message = form.get("message") || "";

    // Track
    gaEvent({ action: "contact_submit", category: "engagement", label: email });

    // Simple mailto fallback (no server needed)
    const subject = encodeURIComponent(`Wild & Well contact from ${name}`);
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\nMessage:\n${message}\n\nUTM:\n${JSON.stringify(utm, null, 2)}`
    );
    setStatus("submitted");
    window.location.href = `mailto:hello@wild-and-well.store?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" required className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" required className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows={6} required className="mt-1 w-full rounded border px-3 py-2" />
      </div>

      <button type="submit" className="rounded bg-black px-4 py-2 text-white">
        Send
      </button>

      {status === "submitted" && (
        <p className="text-sm text-gray-600">Opening your email app…</p>
      )}
    </form>
  );
}
