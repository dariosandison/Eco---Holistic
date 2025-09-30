// components/AffLink.js
'use client';
import React, { useCallback, forwardRef } from 'react';
import { withUtm, isExternal } from '../lib/urls';
import { track } from '../lib/tracking';

function getCampaignFromPath() {
  if (typeof window === 'undefined') return undefined;
  const p = window.location.pathname.replace(/^\/|\/$/g, '');
  return p || undefined;
}

const AffLink = forwardRef(function AffLink(
  {
    href,
    children,
    className,
    rel,
    target,
    onClick,
    dataMerchant,
    dataProduct,
    dataVariant,
    utm = true,
    ...rest
  },
  ref
) {
  const handleClick = useCallback(
    (e) => {
      const text =
        (typeof children === 'string' && children) ||
        (e?.currentTarget?.innerText || '').trim() ||
        undefined;

      const payload = {
        link_url: href,
        link_text: text,
        merchant: dataMerchant,
        product: dataProduct,
        variant: dataVariant,
        page: typeof window !== 'undefined' ? window.location.pathname : undefined,
      };
      track('aff_click', payload);
      onClick && onClick(e);
    },
    [href, children, onClick, dataMerchant, dataProduct, dataVariant]
  );

  const source =
    process.env.NEXT_PUBLIC_SITE_UTM_SOURCE ||
    (typeof window !== 'undefined' ? window.location.hostname : undefined) ||
    'site';

  const decorated = utm ? withUtm(href, { source, campaign: getCampaignFromPath() }) : href;

  const finalRel = (rel ? rel + ' ' : '') + 'nofollow sponsored noopener noreferrer';
  const finalTarget = target || (isExternal(decorated) ? '_blank' : undefined);

  return (
    <a
      ref={ref}
      href={decorated}
      className={className}
      rel={finalRel}
      target={finalTarget}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
});

export default AffLink;
