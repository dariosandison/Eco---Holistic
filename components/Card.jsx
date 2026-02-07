'use client';

import Link from 'next/link';
import { makeThumbDataUri } from '@/lib/thumb';

export default function Card({ href = '#', title, excerpt, desc, image, tag, date, slug, topics, category }) {
  // Treat the older “base” photography set (e.g. /images/photography/water.jpg) as generic for cards.
  // This allows Wellness Insights + related cards to use the newer rotating photo pool.
  const isBasePhotography =
    typeof image === 'string' &&
    image.startsWith('/images/photography/') &&
    !image.includes('/cards/') &&
    !image.includes('/thumbs/cards/');

  const isGeneric =
    !image ||
    image === '/og-default.jpg' ||
    image === '/logo.png' ||
    image === '/placeholder.png' ||
    isBasePhotography;

  function hashToIndex(str, n) {
    if (!str || !n) return 0;
    let h = 0;
    for (let i = 0; i < str.length; i += 1) {
      h = (h * 31 + str.charCodeAt(i)) >>> 0;
    }
    return h % n;
  }

  function pickFallbackPhoto() {
    // Prefer explicit taxonomy over fuzzy keyword matching.
    // We pass tags/category from blog listings so card images match the *actual* topic.
    const topicParts = [];
    if (Array.isArray(topics)) topicParts.push(...topics);
    else if (typeof topics === 'string' && topics.trim()) topicParts.push(topics);
    if (category) topicParts.push(category);

    const key = `${slug || ''} ${title || ''} ${topicParts.join(' ')}`.toLowerCase();
    const tokens = key
      .split(/[^a-z0-9]+/)
      .map((t) => t.trim())
      .filter(Boolean);

    const has = (w) => tokens.includes(w);
    const hasAny = (arr) => arr.some((w) => tokens.includes(w));
    const hasPrefix = (prefixes) => tokens.some((t) => prefixes.some((p) => t.startsWith(p)));

    // Pools (keep small, on-brand, and clearly relevant)
    const pools = {
      air: [
        '/images/photography/thumbs/cards/air-purifier-beside-a-plant-in-a-minimalist-bedroom-daylight-through-curtains.jpg',
        '/images/photography/thumbs/cards/condensation-on-a-window-with-soft-morning-light-minimal-interior-background.jpg',
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
      movement: ['/images/photography/thumbs/cards/movement-hero.jpg'],
      nutrition: [
        '/images/photography/thumbs/cards/cooked-oats-and-seeds-in-small-ceramic-bowls-on-wooden-table-soft-daylight.jpg',
        '/images/photography/thumbs/cards/nutrition-hero.jpg',
      ],
      cleaning: [
        '/images/photography/thumbs/cards/laundry-hero.jpg',
        '/images/photography/thumbs/cards/cleaning-hero.jpg',
      ],
      bathroom: [
        '/images/photography/thumbs/cards/bathroom-extractor-fan-area-no-branding-clean-tiles-natural-daylight.jpg',
        '/images/photography/thumbs/cards/cleaning-hero.jpg',
      ],
      wellness: [
        '/images/photography/thumbs/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg',
        '/images/photography/thumbs/cards/calm-living-room-corner-with-linen-throw-and-houseplant-by-a-window-negative-space.jpg',
        '/images/photography/thumbs/cards/home-hero-small.jpg',
      ],
      home: [
        '/images/photography/thumbs/cards/home-hero-small.jpg',
        '/images/photography/thumbs/cards/calm-living-room-corner-with-linen-throw-and-houseplant-by-a-window-negative-space.jpg',
        '/images/photography/thumbs/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg',
      ],
    };

    // Pillar detection (token-based to avoid substring false-positives)
    const isAir =
      has('air') ||
      has('hepa') ||
      has('purifier') ||
      hasAny(['pollen', 'mould', 'mold', 'damp', 'condensation', 'extractor']) ||
      hasPrefix(['allerg', 'humid', 'dehumid']) ||
      hasAny(['vent', 'ventilation', 'humidity', 'dehumidifier', 'humidifier']);

    const isWater =
      has('water') ||
      hasAny(['filter', 'filters', 'jug', 'hydration', 'shower', 'bottle', 'bottles']) ||
      has('tap');

    const isSleep =
      has('sleep') ||
      hasAny(['insomnia', 'melatonin', 'snore', 'bed', 'bedroom', 'bedding', 'mattress']) ||
      hasAny(['wind', 'routine', 'caffeine', 'magnesium', 'morning', 'light']);

    const isMovement = hasAny([
      'movement',
      'fitness',
      'cardio',
      'hypertrophy',
      'walking',
      'walk',
      'yoga',
      'mobility',
      'strength',
      'stretch',
      'stretches',
      'bands',
      'tracker',
      'trackers',
      'shoes',
      'activewear',
      'roller',
      'rollers',
    ]);

    // Food-first vs supplements/wellness posts
    const isNutrition = hasAny([
      'nutrition',
      'oats',
      'olive',
      'chia',
      'flax',
      'matcha',
      'protein',
      'fermented',
      'ferment',
      'upf',
      'processed',
      'ultra',
      'snacks',
      'food',
      'foods',
      'cooking',
      'oil',
      'oils',
      'seed',
      'seeds',
      'fibre',
      'fiber',
      'gut',
      'sauerkraut',
      'kimchi',
    ]);

    const isWellness = hasAny([
      'supplement',
      'supplements',
      'adaptogen',
      'adaptogens',
      'immune',
      'stress',
      'anxiety',
      'detox',
      'remedy',
      'remedies',
      'herbal',
    ]);

    // Keep cleaning/laundry separate from broader eco/home lifestyle so cards don't look “off-topic”.
    const isBathroom = hasAny(['bathroom', 'toilet']) || (has('paper') && !has('kitchen'));

    // Cleaning/laundry only when the content is *actually* cleaning/laundry.
    // Avoid broad tokens like "non"/"toxic" which can misclassify kitchen or personal-care posts.
    const isCleaning =
      hasAny(['laundry', 'detergent', 'detergents', 'cleaning', 'clean', 'soap', 'dish', 'fragrance']) ||
      (has('kitchen') && has('roll'));

    const isHome = hasAny([
      'compost',
      'composting',
      'reusable',
      'reusables',
      'zero',
      'waste',
      'eco',
      'bamboo',
      'gift',
      'gifts',
      'energy',
      'winter',
      'label',
      'labels',
      'ingredient',
      'ingredients',
      'kids',
      'baby',
      'budget',
      'essentials',
      'starter',
      'grooming',
      'makeup',
      'sunscreen',
      'candle',
      'candles',
      'kitchen',
      'containers',
      'cookware',
      'lunch',
      'box',
      'boxes',
    ]);

    const poolKey = isAir
      ? 'air'
      : isWater
        ? 'water'
        : isSleep
          ? 'sleep'
          : isMovement
            ? 'movement'
            : isNutrition && !isWellness
              ? 'nutrition'
              : isWellness
                ? 'wellness'
                : isBathroom
                  ? 'bathroom'
                  : isCleaning
                    ? 'cleaning'
                    : isHome
                      ? 'home'
                      : 'home';

    const pool = pools[poolKey] || pools.home;
    return pool[hashToIndex(slug || title || 'wild-and-well', pool.length)];
  }

  const src = isGeneric ? pickFallbackPhoto() : image;
  const blurb = excerpt || desc;

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
        {blurb ? <p className="line-clamp-3 text-sm leading-6 text-zinc-600">{blurb}</p> : null}
      </div>
    </Link>
  );
}
