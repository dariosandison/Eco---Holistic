"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function TrackOnLoad({ event, data = {} }) {
  useEffect(() => {
    if (!event) return;
    try {
      trackEvent(event, data);
    } catch {}
  }, [event]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
