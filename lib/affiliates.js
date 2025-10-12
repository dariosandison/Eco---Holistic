-const AMAZON_TAG = AMAZON_TAG || AMAZON_TAG || AMAZON_TAG || AMAZON_TAG;
+const AMAZON_TAG =
+  process.env.NEXT_PUBLIC_AMAZON_TAG ||
+  process.env.NEXT_PUBLIC_AMAZON_UK ||
+  process.env.NEXT_PUBLIC_AMAZON_US ||
+  process.env.NEXT_PUBLIC_AMAZON_EU;

export function withAmazonTag(href) {
  try {
    const u = new URL(href);
    const host = u.hostname.toLowerCase();
    const isAmazon =
      host.endsWith('amazon.co.uk') ||
      host.endsWith('amazon.com') ||
      host.endsWith('amazon.de') ||
      host.endsWith('amazon.fr') ||
      host.endsWith('amazon.it') ||
      host.endsWith('amazon.es');
    if (AMAZON_TAG && isAmazon && !u.searchParams.has('tag')) {
      u.searchParams.set('tag', AMAZON_TAG);
    }
    return u.toString();
  } catch {
    return href;
  }
}
