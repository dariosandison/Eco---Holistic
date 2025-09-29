// components/mdx/BuyBox.jsx
import React from 'react';

export default function BuyBox({
  title,
  subtitle,
  price,
  href,
  cta = 'Buy now',
  image,
  rating, // number 0-5
  children,
}) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="flex gap-4 items-start">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title || 'Product'} className="h-24 w-24 rounded-xl object-cover" />
        ) : null}
        <div className="flex-1">
          {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
          {subtitle ? <p className="text-sm text-gray-500">{subtitle}</p> : null}
          {typeof rating === 'number' ? (
            <div className="mt-1 text-sm" aria-label={`Rating ${rating} out of 5`}>
              {'★'.repeat(Math.round(rating))}{' '}
              <span className="text-gray-400">{'★'.repeat(5 - Math.round(rating))}</span>
            </div>
          ) : null}
          {price ? <p className="mt-2 text-base font-medium">{price}</p> : null}
          {children ? <div className="mt-2 text-sm">{children}</div> : null}
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              {cta}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
