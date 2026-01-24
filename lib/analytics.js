export function trackEvent(name, data = {}) {
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", name, data);
  if (window.plausible) window.plausible(name, { props: data });
}