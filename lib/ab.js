// lib/ab.js
import { useEffect, useMemo, useState } from 'react';

const VISITOR_COOKIE = 'v_id';
const ONE_YEAR = 365 * 24 * 60 * 60;

function readCookie(name) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}
function writeCookie(name, value, maxAge = ONE_YEAR) {
  if (typeof document === 'undefined') return;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}
function uuid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'v-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}
export function getOrCreateVisitorId() {
  if (typeof window === 'undefined') return 'ssr';
  let v = readCookie(VISITOR_COOKIE);
  if (!v) {
    v = uuid();
    writeCookie(VISITOR_COOKIE, v);
  }
  return v;
}
function hashString(str) {
  // djb2
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = (h * 33) ^ str.charCodeAt(i);
  return h >>> 0;
}

/**
 * Deterministic bucketing for A/B tests.
 * @param {string} slot - Unique test slot id, e.g. 'cta_label_nov'
 * @param {Array} variants - e.g. ['Get deal','See price']
 * @returns {{index:number, name:any}}
 */
export function pickVariant(slot, variants) {
  if (!Array.isArray(variants) || variants.length === 0) return { index: 0, name: variants?.[0] };
  const vId = getOrCreateVisitorId();
  const h = hashString(`${slot}:${vId}`);
  const index = h % variants.length;
  return { index, name: variants[index] };
}

export function useAB(slot, variants, { onExpose } = {}) {
  const [exposed, setExposed] = useState(false);
  const choice = useMemo(() => pickVariant(slot, variants), [slot, JSON.stringify(variants)]);

  useEffect(() => {
    if (exposed) return;
    setExposed(true);
    try {
      // Hook for analytics—replace with GA/Segment/etc
      if (typeof window !== 'undefined') {
        const payload = { type: 'ab_expose', slot, variantIndex: choice.index, variant: choice.name };
        window.dispatchEvent(new CustomEvent('ab:expose', { detail: payload }));
        console.log('[AB] expose', payload);
      }
      onExpose && onExpose(choice);
    } catch {}
  }, [exposed, choice, onExpose, slot]);

  return choice;
}
