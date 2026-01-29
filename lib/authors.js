import { SITE_URL } from './site'

export const AUTHORS = [
  {
    slug: 'wild-and-well-editorial',
    name: 'Wild & Well Editorial Team',
    role: 'Editorial',
    bio:
      'We publish practical wellness content for UK homes: low‑tox living, sleep, food-first nutrition, and simple movement habits. Our goal is to make decisions easier — fewer products, clearer trade‑offs, and conservative claims.',
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
