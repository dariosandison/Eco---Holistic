// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";
  const proto = req.headers.get("x-forwarded-proto") || "http";

  // Force HTTPS
  if (proto !== "https") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  // Canonical host: send everything to www.wild-and-well.store
  const canonicalHost = "www.wild-and-well.store";
  if (host !== canonicalHost) {
    url.host = canonicalHost;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Run on all pages and assets
export const config = {
  matcher: ["/:path*"],
};
