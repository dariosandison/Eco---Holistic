// Future-facing product model. The live site remains affiliate-only until
// checkout, fulfilment, legal and customer-service readiness are approved.
export const COMMERCE_CHANNELS = ['affiliate', 'supplier_direct', 'owned_stock']
export const AVAILABILITY_STATES = ['researching', 'available', 'out_of_stock', 'discontinued']

export function validateCommerceProduct(product) {
  const required = ['id', 'name', 'category', 'channel', 'availability']
  const missing = required.filter((field) => !product?.[field])
  if (!COMMERCE_CHANNELS.includes(product?.channel)) missing.push('valid channel')
  if (!AVAILABILITY_STATES.includes(product?.availability)) missing.push('valid availability')
  return { valid: missing.length === 0, missing: [...new Set(missing)] }
}

export const SUPPLIER_OPPORTUNITIES = []
// Research fields: supplier, categories, tradeTerms, minimumOrder,
// directFulfilment, shipping, returns, integration, margin, privateLabel,
// contact, evidenceUrl, lastVerifiedAt, assessment and nextAction.
