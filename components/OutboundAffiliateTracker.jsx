"use client";

import { useEffect } from "react";
import { trackAffiliateClick, trackEvent } from "@/lib/analytics";

function extractMerchantFromAwin(href) {
  try {
    const u = new URL(href);
    const ued = u.searchParams.get("ued");
    if (!ued) return "awin";
    const dest = new URL(decodeURIComponent(ued));
    const host = (dest.hostname || "").replace(/^www\./, "");
    if (!host) return "awin";
    // e.g. zerowater.com -> zerowater
    return host.split(".")[0] || "awin";
  } catch {
    return "awin";
  }
}

export default function OutboundAffiliateTracker() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target?.closest?.("a");
      if (!a) return;

      const href = a.getAttribute("href") || "";
      if (!href) return;

      // Track Awin affiliate links (used for non-Amazon merchants like ZeroWater).
      if (href.includes("awin1.com/cread.php")) {
        const label = (a.textContent || "").trim().slice(0, 120);
        const merchant = extractMerchantFromAwin(href);
        try {
          trackAffiliateClick({ href, label, merchant });
        } catch {
          // ignore
        }
        return;
      }

      // Optional: track mailto clicks as a tiny trust signal.
      if (href.startsWith("mailto:")) {
        try {
          trackEvent("mailto_click", { href });
        } catch {}
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
