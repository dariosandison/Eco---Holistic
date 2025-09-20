// lib/affiliates.js
import { AMAZON_TAG } from "./site";

/**
 * Map each Amazon marketplace you use to the tag you own there.
 * You have a UK tag for now; add more later if/when you open them.
 */
const AMAZON_TAGS = {
  "amazon.co.uk": AMAZON_TAG,
  // "amazon.com": "your-com-tag",
  // "amazon.de": "your-de-tag",
  // etc…
};

/** Append your tag to full Amazon URLs (keeps existing query params). */
export function withAffiliateTag(rawUrl) {
  try {
    const u = new URL(rawUrl);
    const host = u.hostname.replace(/^www\./, "");

    // Amazon shortlinks can't be modified – leave them as-is.
    if (host === "amzn.to") return rawUrl;

    const domain = Object.keys(AMAZON_TAGS).find((d) => host.endsWith(d));
    if (!domain) return rawUrl;

    const tag = AMAZON_TAGS[domain];
    if (!tag) return rawUrl;

    if (!u.searchParams.has("tag")) {
      u.searchParams.set("tag", tag);
    }
    return u.toString();
  } catch {
    // Not a valid absolute URL; just return what we got.
    return rawUrl;
  }
}

/** Build a canonical /dp/ link from an ASIN (defaults to UK marketplace). */
export function dp(asin, marketplace = "amazon.co.uk", extraParams = {}) {
  const u = new URL(`https://${marketplace}/dp/${asin}`);
  const tag = AMAZON_TAGS[marketplace] ?? AMAZON_TAG;
  if (tag) u.searchParams.set("tag", tag);
  Object.entries(extraParams).forEach(([k, v]) => u.searchParams.set(k, v));
  return u.toString();
}
