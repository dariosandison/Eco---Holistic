// lib/analytics.js
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Lightweight GA4 helpers
export function gtag(){ 
  if (typeof window === "undefined" || !GA_ID || !window.dataLayer) return;
  window.dataLayer.push(arguments);
}

export function initGA() {
  if (typeof window === "undefined" || !GA_ID) return;
  window.dataLayer = window.dataLayer || [];
  // Default Consent Mode: denied until user accepts
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  gtag('js', new Date());
  gtag('config', GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    transport_type: 'beacon'
  });
}

export function grantAnalyticsConsent() {
  gtag('consent', 'update', {
    analytics_storage: 'granted',
  });
}

export function revokeAnalyticsConsent() {
  gtag('consent', 'update', {
    analytics_storage: 'denied',
  });
}

export function trackAffiliateClick({ href, slug }) {
  if (!GA_ID) return;
  gtag('event', 'affiliate_click', {
    event_category: 'engagement',
    event_label: slug || href,
    destination: href,
  });
}

export function trackAffiliateRedirect({ href, slug }) {
  if (!GA_ID) return;
  gtag('event', 'affiliate_redirect', {
    event_category: 'engagement',
    event_label: slug || href,
    destination: href,
  });
}

