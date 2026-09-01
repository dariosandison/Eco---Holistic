export const OFFERS = []

export function getLiveOffers(now = new Date()) {
  const timestamp = now.getTime()
  return OFFERS.filter((offer) => {
    const starts = offer.startsAt ? new Date(offer.startsAt).getTime() : -Infinity
    const ends = offer.endsAt ? new Date(offer.endsAt).getTime() : Infinity
    return offer.status === 'active' && starts <= timestamp && timestamp <= ends
  }).sort((a, b) => (b.priority || 0) - (a.priority || 0))
}

// Add an offer only after checking the advertiser terms and landing page.
// Operational fields: id, advertiser, title, description, href, category,
// startsAt, endsAt, status, priority, terms, lastVerifiedAt and clickref.
