// lib/affiliate-url.js
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const AFF_PATH = path.join(ROOT, "data", "affiliates.json");

export function readAffiliateMap() {
  if (!fs.existsSync(AFF_PATH)) return [];
  try { return JSON.parse(fs.readFileSync(AFF_PATH, "utf8")); } catch { return []; }
}

export function resolveAffiliate(slug) {
  const rows = readAffiliateMap();
  return rows.find(r => r.slug === slug) || null;
}

export function buildAffiliateUrl(baseUrl, {
  slug,
  source = "site",
  medium = "affiliate",
  campaign = process.env.NEXT_PUBLIC_UTM_CAMPAIGN || "sitewide",
  content,
} = {}) {
  if (!baseUrl) return null;
  let url;
  try { url = new URL(baseUrl); }
  catch { return baseUrl; }

  const d = url.hostname.toLowerCase();
  const p = url.searchParams;

  // 1) Network/domain tweaks
  if (d.includes("amazon.")) {
    const tag = process.env.NEXT_PUBLIC_AMAZON_TAG;
    if (tag && !p.has("tag")) p.set("tag", tag);
  }

  // Impact/Awin/etc: allow custom subId param name (default s1)
  const subParam = process.env.NEXT_PUBLIC_SUBID_PARAM || "s1";
  const subVal = `${source}:${slug}`;
  if (subVal && !p.has(subParam)) p.set(subParam, subVal);

  // 2) Privacy-safe, consistent UTMs (only if missing)
  const utmSource = process.env.NEXT_PUBLIC_UTM_SOURCE || "eco-holistic";
  if (!p.has("utm_source")) p.set("utm_source", utmSource);
  if (!p.has("utm_medium")) p.set("utm_medium", medium);
  if (!p.has("utm_campaign")) p.set("utm_campaign", campaign);

  const contentLabel = content || slug;
  if (contentLabel && !p.has("utm_content")) p.set("utm_content", contentLabel);

  url.search = p.toString();
  return url.toString();
}
