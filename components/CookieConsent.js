// /components/CookieConsent.js
import { useEffect, useState } from "react";

const KEY = "ww_cookie_consent_v1";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only run on client
    try {
      const val = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : "accepted";
      if (!val) setShow(true);
    } catch {
      // If localStorage isn't available, don't block the page
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(KEY, "accepted");
    } catch {}
    setShow(false);
  };

  const dismiss = () => {
    // Dismiss without storing if you want, but never block the page
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-[60] max-w-sm rounded-xl border border-gray-200 bg-white shadow-lg"
      style={{ pointerEvents: "auto" }}
    >
      <div className="p-4">
        <p className="text-sm text-gray-800">
          We use cookies to improve your experience and analyze traffic. By clicking “Accept” you consent.
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={accept}
            className="inline-flex items-center rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-white"
            style={{ background: "#0ea5e9" }}
          >
            Accept
          </button>
          <button
            onClick={dismiss}
            className="inline-flex items-center rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
