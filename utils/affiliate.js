// utils/affiliate.js
const DEFAULT_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || "wildandwell0c-21";

/**
 * Appends the Amazon Associates tag to any amazon.* URL.
 * Keeps existing query params and avoids duplicates.
 */
export function withAmazonTag(rawUrl, tag = DEFAULT_TAG) {
  try {
    const url = new URL(rawUrl);

    // Only tag Amazon domains
    if (!/amazon\./i.test(url.hostname)) return rawUrl;

    // Remove legacy "smile." subdomain if present
    url.hostname = url.hostname.replace(/^smile\./, "");

    // Add tag if missing
    if (!url.searchParams.get("tag")) {
      url.searchParams.set("tag", tag);
    }

    // Ensure affiliate-safe redirects (no ref ids we don’t control)
    url.searchParams.delete("ref");

    return url.toString();
  } catch {
    return rawUrl;
  }
}
