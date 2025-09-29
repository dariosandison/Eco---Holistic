// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';
  const proto = req.headers.get('x-forwarded-proto') || 'http';
  const isProd = process.env.NODE_ENV === 'production';

  // Don't redirect during local dev or preview environments
  if (!isProd) {
    return NextResponse.next();
  }

  // Force HTTPS in production
  if (proto !== 'https') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  // Canonical host
  const canonicalHost = 'www.wild-and-well.store';
  if (host !== canonicalHost) {
    url.host = canonicalHost;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*']
};
