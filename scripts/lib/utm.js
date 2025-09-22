export function withUtm(url, source = 'site', medium = 'affiliate', campaign = 'guide') {
  try {
    const u = new URL(url);
    if (!u.searchParams.has('utm_source')) {
      u.searchParams.set('utm_source', source);
      u.searchParams.set('utm_medium', medium);
      u.searchParams.set('utm_campaign', campaign);
    }
    return u.toString();
  } catch {
    return url;
  }
}

export function withAmazonTag(url) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG;
  if (!tag) return url;
  try {
    const u = new URL(url);
    if (!u.searchParams.has('tag')) {
      u.searchParams.set('tag', tag);
    }
    return u.toString();
  } catch {
    return url;
  }
}
