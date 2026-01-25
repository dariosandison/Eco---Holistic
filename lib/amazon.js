import { withAmazonTag } from './affiliates'

export function amazonSearchUrl(query = '') {
  const q = encodeURIComponent(query || '')
  return withAmazonTag(`https://www.amazon.co.uk/s?k=${q}`)
}

export function amazonDpUrl(asin = '') {
  return withAmazonTag(`https://www.amazon.co.uk/dp/${asin || ''}`)
}
