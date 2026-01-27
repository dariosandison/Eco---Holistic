"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function TrackedLink({
  href,
  children,
  event = "link_click",
  data = {},
  onClick,
  ...props
}) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        try {
          trackEvent(event, { href: typeof href === "string" ? href : "", ...data });
        } catch {}
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
