// lib/utm.js
export function parseUtmFromUrl(search = "") {
  const params = new URLSearchParams(search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const out = {};
  for (const k of keys) if (params.get(k)) out[k] = params.get(k);
  return out;
}

export function appendUtm(url, utm = {}) {
  try {
    const u = new URL(url, "https://dummy.base");
    Object.entries(utm).forEach(([k, v]) => {
      if (v) u.searchParams.set(k, v);
    });
    // strip dummy base if relative
    return url.startsWith("http") ? u.toString() : u.pathname + u.search + u.hash;
  } catch {
    return url;
  }
}

