const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || process.env.NEXT_PUBLIC_AMAZON_UK || process.env.NEXT_PUBLIC_AMAZON_US || process.env.NEXT_PUBLIC_AMAZON_EU;
export function withAmazonTag(href) {
  try {
    const u = new URL(href)
    const isAmazon = /amazon\./i.test(u.hostname) || /amzn\.to/i.test(u.hostname)
    if (!isAmazon) return href
    const tag = AMAZON_TAG
    if (tag && !u.searchParams.has('tag')) u.searchParams.set('tag', tag)
    return u.toString()
  } catch {
    return href
  }
}