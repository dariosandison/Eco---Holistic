import { SITE_URL } from './site'

export const AUTHORS = [
  {
    slug: 'wild-and-well-founder',
    name: 'Wild & Well Founder',
    role: 'Founder & Editor',
    // Keep this “human” (E‑E‑A‑T). It’s okay to be honest about what you do and don’t do.
    bio:
      'I built Wild & Well to help UK households make low‑tox and wellness choices with clear trade‑offs and conservative claims. I focus on UK availability, ongoing costs (filters/refills), and updating key pages as products and evidence change. Nothing here is medical advice — it’s practical, evidence‑aware guidance for everyday homes.',
    image: '/og-default.jpg',
    url: `${SITE_URL}/authors/wild-and-well-founder`,
    aliases: ['founder', 'wild and well founder'],
  },
  {
    slug: 'wild-and-well-editorial',
    name: 'Wild & Well Editorial Team',
    role: 'Editorial',
    bio:
      'We publish practical wellness content for UK homes: low‑tox living, sleep, food‑first nutrition, and simple movement. We keep shortlists small, highlight trade‑offs, and update key pages as products and evidence change.',
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
  // Default to Editorial Team rather than Founder when unspecified.
  if (!slugOrName) return AUTHORS.find((a) => a.slug === 'wild-and-well-editorial') || AUTHORS[0]

  const raw = String(slugOrName).trim()
  const s = raw.toLowerCase()

  // 1) Exact slug
  const bySlug = AUTHORS.find((a) => a.slug === raw)
  if (bySlug) return bySlug

  // 2) Exact display name
  const byName = AUTHORS.find((a) => a.name.toLowerCase() === s)
  if (byName) return byName

  // 3) Aliases (handles “Wild & Well Team”, “Team”, etc.)
  const byAlias = AUTHORS.find((a) => Array.isArray(a.aliases) && a.aliases.some((x) => String(x).toLowerCase() === s))
  if (byAlias) return byAlias

  // 4) Loose intent mapping (avoid breaking pages if author strings vary)
  if (s.includes('founder')) return AUTHORS.find((a) => a.slug === 'wild-and-well-founder') || AUTHORS[0]
  if (s.includes('editorial') || s.includes('team')) return AUTHORS.find((a) => a.slug === 'wild-and-well-editorial') || AUTHORS[0]

  return AUTHORS.find((a) => a.slug === 'wild-and-well-editorial') || AUTHORS[0]
}
