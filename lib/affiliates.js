export function withAmazonTag(href) {
  try {
    const u = new URL(href)
    const isAmazon = /amazon\./i.test(u.hostname) || /amzn\.to/i.test(u.hostname)
    if (!isAmazon) return href
    const tag = process.env.NEXT_PUBLIC_AMAZON_TAG
    if (tag && !u.searchParams.has('tag')) u.searchParams.set('tag', tag)
    return u.toString()
  } catch {
    return href
  }
}

function cleanClickrefPart(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/^ww_/, '')
    .replace(/[^a-z0-9_-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '')
}

export function withAwinContext(href, context = '') {
  if (!href || !context) return href

  try {
    const u = new URL(href)
    if (!/awin1\.com$/i.test(u.hostname) && !/awin1\.com/i.test(u.hostname)) return href

    const existing = cleanClickrefPart(u.searchParams.get('clickref') || '')
    const source = cleanClickrefPart(context)
    if (!source) return href

    const contextual = `ww_${source}${existing ? `__${existing}` : ''}`.slice(0, 190)
    u.searchParams.set('clickref', contextual)
    return u.toString()
  } catch {
    return href
  }
}
