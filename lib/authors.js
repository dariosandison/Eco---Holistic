import { SITE_URL } from './site'

export const AUTHORS = [
  {
    slug: 'wild-and-well-founder',
    name: 'Wild & Well Founder',
    role: 'Founder & Editor',
    bio:
      'I built Wild & Well to help UK households make low‑tox and wellness choices with clear trade‑offs and conservative claims. I focus on UK availability and update key pages as products and evidence change.',
    image: '/og-default.jpg',
    url: `${SITE_URL}/authors/wild-and-well-founder`,
  },
  {
    slug: 'wild-and-well-editorial',
    name: 'Wild & Well Editorial Team',
    role: 'Editorial',
    bio:
      'We publish practical wellness content for UK homes: low‑tox living, sleep, food-first nutrition, and simple movement. We keep shortlists small, highlight trade‑offs, and update key pages as products and evidence change.',
    image: '/og-default.jpg',
    url: `${SITE_URL}/authors/wild-and-well-editorial`,
  },
]

export function getAuthor(slugOrName) {
  if (!slugOrName) return AUTHORS[0]
  const s = String(slugOrName).trim()
  // If a post stores a display name, try to match that too.
  return (
    AUTHORS.find((a) => a.slug === s) ||
    AUTHORS.find((a) => a.name.toLowerCase() === s.toLowerCase()) ||
    AUTHORS[0]
  )
}
