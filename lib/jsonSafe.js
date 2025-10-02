// lib/jsonSafe.js
// Remove all `undefined` values (deep), and sanitize non-JSON values.
export function jsonSafe(value) {
  const prune = (v) => {
    if (v === undefined) return undefined;               // drop it
    if (v === null) return null;
    if (typeof v === 'number' && !Number.isFinite(v)) return null;
    if (Array.isArray(v)) {
      const arr = v.map(prune).filter((x) => x !== undefined);
      return arr;
    }
    if (v && typeof v === 'object' && !(v instanceof Date)) {
      const out = {};
      for (const [k, vv] of Object.entries(v)) {
        const cleaned = prune(vv);
        if (cleaned !== undefined) out[k] = cleaned;     // omit undefined keys
      }
      return out;
    }
    return v;
  };
  return prune(value);
}
