'use client';

import Link from 'next/link';
import { makeThumbDataUri } from '@/lib/thumb';

export default function Card({ href = '#', title, excerpt, image, tag, date, slug }) {
  const isGeneric =
    !image || image === '/og-default.jpg' || image === '/logo.png' || image === '/placeholder.png';

  function hashToIndex(str, n) {
    if (!str || !n) return 0;
    let h = 0;
    for (let i = 0; i < str.length; i += 1) {
      h = (h * 31 + str.charCodeAt(i)) >>> 0;
    }
    return h % n;
  }

  function pickFallbackPhoto() {
    const key = `${slug || ''} ${title || ''}`.toLowerCase();

    const pools = {
      air: [
        '/images/photography/thumbs/cards/air-purifier-beside-a-plant-in-a-minimalist-bedroom-daylight-through-curtains.jpg',
        '/images/photography/thumbs/cards/condensation-on-a-window-with-soft-morning-light-minimal-interior-background.jpg',
        '/images/photography/thumbs/cards/bathroom-extractor-fan-area-no-branding-clean-tiles-natural-daylight.jpg',
        '/images/photography/thumbs/cards/air-quality-hero.jpg',
      ],
      water: [
        '/images/photography/thumbs/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg',
        '/images/photography/thumbs/cards/water-hero.jpg',
      ],
      sleep: [
        '/images/photography/thumbs/cards/bedside-table-with-a-book-and-mug-soft-light-through-curtains.jpg',
        '/images/photography/thumbs/cards/calm-evening-routine-scene-with-tea-and-book-on-bed-neutral-tones.jpg',
        '/images/photography/thumbs/cards/sleep-hero.jpg',
      ],
      laundry: [
        '/images/photography/thumbs/cards/laundry-hero.jpg',
        '/images/photography/thumbs/cards/cleaning-hero.jpg',
      ],
      nutrition: [
        '/images/photography/thumbs/cards/cooked-oats-and-seeds-in-small-ceramic-bowls-on-wooden-table-soft-daylight.jpg',
        '/images/photography/thumbs/cards/nutrition-hero.jpg',
      ],
      movement: [
        '/images/photography/thumbs/cards/movement-hero.jpg',
      ],
      general: [
        '/images/photography/thumbs/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg',
        '/images/photography/thumbs/cards/calm-living-room-corner-with-linen-throw-and-houseplant-by-a-window-negative-space.jpg',
        '/images/photography/thumbs/cards/home-hero-small.jpg',
      ],
    };

    const match =
      key.includes('air') ||
      key.includes('purifier') ||
      key.includes('hepa') ||
      key.includes('pollen') ||
      key.includes('allerg') ||
      key.includes('mould') ||
      key.includes('mold') ||
      key.includes('damp') ||
      key.includes('humid') ||
      key.includes('vent') ||
      key.includes('dehumid');

    const water =
      key.includes('water') ||
      key.includes('filter') ||
      key.includes('jug') ||
      key.includes('tap') ||
      key.includes('hydration');

    const sleep =
      key.includes('sleep') ||
      key.includes('bed') ||
      key.includes('insomnia') ||
      key.includes('melatonin') ||
      key.includes('snore');

    const laundry =
      key.includes('laundry') ||
      key.includes('deterg') ||
      key.includes('clean') ||
      key.includes('low-tox') ||
      key.includes('toxic') ||
      key.includes('dish') ||
      key.includes('soap');

    const nutrition =
      key.includes('nutrition') ||
      key.includes('oats') ||
      key.includes('olive') ||
      key.includes('chia') ||
      key.includes('flax') ||
      key.includes('matcha') ||
      key.includes('protein') ||
      key.includes('gut') ||
      key.includes('ferment') ||
      key.includes('supplement');

    const movement =
      key.includes('movement') ||
      key.includes('fitness') ||
      key.includes('cardio') ||
      key.includes('hypertrophy') ||
      key.includes('walk') ||
      key.includes('yoga');

    const pool = match
      ? pools.air
      : water
        ? pools.water
        : sleep
          ? pools.sleep
          : laundry
            ? pools.laundry
            : nutrition
              ? pools.nutrition
              : movement
                ? pools.movement
                : pools.general;

    return pool[hashToIndex(slug || title || 'wild-and-well', pool.length)];
  }

  const src = isGeneric ? pickFallbackPhoto() : image;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md hover:border-[color:var(--brand)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
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
          <span
            className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold text-white shadow-sm"
            style={{ backgroundColor: 'var(--brand)' }}
          >
            {tag}
          </span>
        ) : null}
      </div>

      <div className="space-y-2 p-4">
        {date ? <span className="text-xs uppercase tracking-wide text-zinc-500">{date}</span> : null}
        <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
        {excerpt ? <p className="line-clamp-3 text-sm leading-6 text-zinc-600">{excerpt}</p> : null}
      </div>
    </Link>
  );
}
