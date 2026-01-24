export function trackEvent(name, data = {}) {
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", name, data);
  if (window.plausible) window.plausible(name, { props: data });
}

export function trackAffiliateClick({ href = "", label = "", merchant = "" } = {}) {
  trackEvent("affiliate_click", { href, label, merchant });
}
