"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Attaches a submit listener to a given form (by id) and fires GA4-style events.
 * Useful for server-rendered forms that POST to /api/subscribe.
 */
export default function SignupFormTracker({ formId, placement = "unknown" }) {
  useEffect(() => {
    if (!formId) return;
    const form = document.getElementById(formId);
    if (!form) return;

    const onSubmit = () => {
      try {
        // Recommended GA4 event name
        trackEvent("sign_up", { method: "email", placement });
        // Keep a site-specific event too (handy for funnels)
        trackEvent("newsletter_signup", { placement });
      } catch {
        // ignore
      }
    };

    form.addEventListener("submit", onSubmit, { capture: true });
    return () => form.removeEventListener("submit", onSubmit, { capture: true });
  }, [formId, placement]);

  return null;
}
