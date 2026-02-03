'use client';

import Link from 'next/link';
import { makeThumbDataUri } from '@/lib/thumb';

export default function Card({ href = '#', title, excerpt, image, tag, date, slug }) {
  const isGeneric =
    !image || image === '/og-default.jpg' || image === '/logo.png' || image === '/placeholder.png';
  const src = isGeneric ? makeThumbDataUri({ title, tag, slug }) : image;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-zinc-100">
        <img
          src={src}
          alt={title || ''}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          onError={(e) => {
            e.currentTarget.src = makeThumbDataUri({ title, tag, slug });
            e.currentTarget.classList.add('opacity-95');
          }}
        />
        {tag ? (
          <span className="absolute left-3 top-3 rounded-full bg-emerald-700/90 px-2.5 py-1 text-xs font-semibold text-white">
            {tag}
          </span>
        ) : null}
      </div>

      <div className="space-y-2 p-4">
        {date ? (
          <span className="text-xs uppercase tracking-wide text-zinc-500">{date}</span>
        ) : null}
        <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
        {excerpt ? (
          <p className="line-clamp-3 text-sm leading-6 text-zinc-600">{excerpt}</p>
        ) : null}
      </div>
    </Link>
  );
}
