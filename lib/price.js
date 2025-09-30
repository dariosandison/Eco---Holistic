// lib/price.js
export function formatPrice(value, currency = 'USD', locale) {
  if (value == null || isNaN(Number(value))) return null;
  try {
    return new Intl.NumberFormat(locale || undefined, {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(Number(value));
  } catch {
    return `${currency} ${Number(value).toFixed(2)}`;
  }
}

export function calcDiscount(msrp, price) {
  const p = Number(price);
  const m = Number(msrp);
  if (!isFinite(p) || !isFinite(m) || m <= 0 || p <= 0 || p >= m) {
    return { percent: 0, amount: 0 };
  }
  const amount = m - p;
  const percent = Math.round((amount / m) * 100);
  return { percent, amount };
}

export function makeDealBadge(msrp, price, minPercent = 5) {
  const { percent } = calcDiscount(msrp, price);
  return percent >= minPercent ? `-${percent}%` : null;
}

export function coerceCurrency(cur) {
  if (typeof cur !== 'string') return 'USD';
  const c = cur.trim().toUpperCase();
  return c.length === 3 ? c : 'USD';
}
