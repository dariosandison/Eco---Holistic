// /src/lib/utm.js
const KEY = 'eh_utm_v1';

const UTM_KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];

export function captureUtmFromUrl() {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    const found = {};
    UTM_KEYS.forEach((k) => {
      const v = url.searchParams.get(k);
      if (v) found[k] = v;
    });
    if (document.referrer && !found.utm_source) {
      found.referrer = document.referrer;
    }
    if (Object.keys(found).length) {
      localStorage.setItem(KEY, JSON.stringify(found));
    }
  } catch {}
}

export function getUtm() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
