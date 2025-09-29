// lib/affiliate.js
export function appendParams(base, params = {}) {
  const url = new URL(base);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  });
  return url.toString();
}

export function buildAffiliateUrl({ base, params = {}, utm = {}, slug }) {
  const merged = {
    ...params,
    utm_source: 'wildandwell',
    utm_medium: 'affiliate',
    ...(utm || {}),
    from: slug || undefined
  };
  return appendParams(base, merged);
}
