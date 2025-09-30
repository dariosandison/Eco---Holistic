// components/AffLink.js
import React from 'react';
import Link from 'next/link';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  (typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.host}`
    : '');

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function isInternal(href) {
  if (!isNonEmptyString(href)) return false;
  try {
    const u = new URL(href, siteUrl || 'https://example.com');
    if (!siteUrl) return u.origin === 'https://example.com'; // SSR fallback
    return u.origin === new URL(siteUrl).origin;
  } catch {
    return false;
  }
}

function appendUTM(href, { source, medium, campaign, content } = {}) {
  if (!isNonEmptyString(href)) return href;
  try {
    const url = new URL(href, siteUrl || 'https://example.com');
    if (source) url.searchParams.set('utm_source', source);
    if (medium) url.searchParams.set('utm_medium', medium);
    if (campaign) url.searchParams.set('utm_campaign', campaign);
    if (content) url.searchParams.set('utm_content', content);
    return url.toString();
  } catch {
    return href;
  }
}

/**
 * Centralized affiliate link wrapper.
 *
 * Props:
 * - href (string, required)
 * - children (node)
 * - sponsored (bool, default true)
 * - utm={{source, medium, campaign, content}}
 * - onTrack(eventName?: string, payload?: object) -> optional callback
 * - className, style, any <a> props
 */
export default function AffLink({
  href,
  children,
  sponsored = true,
  utm,
  onTrack,
  ...rest
}) {
  const internal = isInternal(href);
  const finalHref = internal
    ? href
    : appendUTM(href, {
        source: utm?.source || 'site',
        medium: utm?.medium || 'affiliate',
        campaign: utm?.campaign || 'default',
        content: utm?.content,
      });

  const rel = [
    sponsored && !internal ? 'sponsored' : null,
    !internal ? 'nofollow' : null,
    !internal ? 'noopener' : null,
    !internal ? 'noreferrer' : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  const handleClick = (e) => {
    try {
      const payload = {
        href: finalHref,
        text: typeof children === 'string' ? children : undefined,
        ts: Date.now(),
        internal,
      };

      if (typeof onTrack === 'function') onTrack('aff_click', payload);

      if (typeof window !== 'undefined') {
        // GA4
        if (window.gtag) {
          window.gtag('event', 'affiliate_click', {
            event_category: 'affiliate',
            event_label: finalHref,
            value: 1,
            ...payload,
          });
        }
        // dataLayer (GTM)
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({
            event: 'affiliate_click',
            ...payload,
          });
        }
      }
    } catch {
      // swallow
    }
    if (rest.onClick) rest.onClick(e);
  };

  if (internal) {
    return (
      <Link href={finalHref} {...rest} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={finalHref}
      rel={rel}
      target="_blank"
      {...rest}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export { isInternal, appendUTM };
