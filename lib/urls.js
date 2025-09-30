// lib/urls.js
export function isExternal(href) {
  try {
    const u = new URL(href, 'http://x');
    return !!u.host && u.protocol !== 'http:' && u.protocol !== 'https:' ? false : !!u.host;
  } catch {
    return false;
  }
}

export function withUtm(href, { source, medium = 'affiliate', campaign, content } = {}) {
  try {
    const url = new URL(href, typeof window !== 'undefined' ? window.location.origin : 'https://example.com');
    if (source) url.searchParams.set('utm_source', source);
    if (medium) url.searchParams.set('utm_medium', medium);
    if (campaign) url.searchParams.set('utm_campaign', campaign);
    if (content) url.searchParams.set('utm_content', content);
    return url.toString();
  } catch {
    return href;
  }
}

export function toAbsolute(href) {
  try {
    return new URL(href, typeof window !== 'undefined' ? window.location.origin : 'https://example.com').toString();
  } catch {
    return href;
  }
}
