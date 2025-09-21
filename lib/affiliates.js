export const AMAZON_TAG = "wildandwell0c-21";

/** Append ?tag= to Amazon links safely */
export function withAmazonTag(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (u.hostname.includes("amazon.")) {
      if (!u.searchParams.get("tag")) u.searchParams.set("tag", AMAZON_TAG);
      return u.toString();
    }
    return url;
  } catch {
    return url;
  }
}
