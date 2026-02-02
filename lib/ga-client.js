export function loadGA() {
  if (typeof window === 'undefined') return
  const fn = window.__wildwell_load_ga
  if (typeof fn === 'function') fn()
}
