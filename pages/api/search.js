import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const q = String(req.query.q || "").toLowerCase();
  const p = path.join(process.cwd(), "public", "search-index.json");
  const items = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : [];
  if (!q) return res.status(200).json([]);
  const words = q.split(/\s+/).filter(Boolean);
  const hits = items.filter(it => {
    const hay = `${it.title} ${it.description} ${it.section}`.toLowerCase();
    return words.every(w => hay.includes(w));
  });
  res.status(200).json(hits.slice(0, 25));
}
