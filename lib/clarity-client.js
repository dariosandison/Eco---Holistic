export function loadClarity() {
  if (typeof window === 'undefined') return
  const fn = window.__wildwell_load_clarity
  if (typeof fn === 'function') fn()
}
