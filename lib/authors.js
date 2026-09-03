import { SITE_URL } from './site'

export const AUTHORS = [
  {
    slug: 'wild-and-well-founder',
    name: 'Wild & Well Founder',
    role: 'Founder & Editor',
    schemaType: 'Person',
    bio:
      'Wild & Well was founded to make UK healthy-living decisions clearer: understand the problem first, use no-spend steps where they help, and compare products only when they have a useful job. The editorial focus is practical trade-offs, UK availability, ongoing ownership costs and conservative claims rather than personal medical or scientific authority.',
    image: '/og-default.jpg',
    url: `${SITE_URL}/authors/wild-and-well-founder`,
    aliases: ['founder', 'wild and well founder'],
  },
  {
    slug: 'wild-and-well-editorial',
    name: 'Wild & Well Editorial Team',
    role: 'Editorial desk',
    schemaType: 'Organization',
    bio:
      'The Wild & Well editorial desk publishes and maintains practical UK guidance across water, air, sleep, nutrition, movement, healthy homes and practical resilience. Product coverage is research-led unless a page explicitly states that hands-on testing has taken place, and recommendations are built around trade-offs rather than paid ranking positions.',
    image: '/og-default.jpg',
    url: `${SITE_URL}/authors/wild-and-well-editorial`,
    aliases: [
      'wild & well team',
      'wild and well team',
      'wild & well editorial',
      'wild and well editorial',
      'editorial team',
      'team',
    ],
  },
]

export function getAuthor(slugOrName) {
  if (!slugOrName) return AUTHORS.find((a) => a.slug === 'wild-and-well-editorial') || AUTHORS[0]

  const raw = String(slugOrName).trim()
  const s = raw.toLowerCase()

  const bySlug = AUTHORS.find((a) => a.slug === raw)
  if (bySlug) return bySlug

  const byName = AUTHORS.find((a) => a.name.toLowerCase() === s)
  if (byName) return byName

  const byAlias = AUTHORS.find((a) => Array.isArray(a.aliases) && a.aliases.some((x) => String(x).toLowerCase() === s))
  if (byAlias) return byAlias

  if (s.includes('founder')) return AUTHORS.find((a) => a.slug === 'wild-and-well-founder') || AUTHORS[0]
  if (s.includes('editorial') || s.includes('team')) return AUTHORS.find((a) => a.slug === 'wild-and-well-editorial') || AUTHORS[0]

  return AUTHORS.find((a) => a.slug === 'wild-and-well-editorial') || AUTHORS[0]
}
