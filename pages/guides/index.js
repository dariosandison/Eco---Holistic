// pages/guides/index.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SEO from '../../components/SEO';

function readGuides() {
  const dir = path.join(process.cwd(), 'content', 'guides');
  if (!fs.existsSync(dir)) return [];

  const items = fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/i.test(f))
    .map((f) => {
      const slug = f.replace(/\.(md|mdx)$/i, '');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data } = matter(raw);
      const date = data?.updated || data?.date || null;
      return {
        slug,
        title: data?.title || slug.replace(/-/g, ' '),
        description: data?.description || '',
        hub: data?.hub || 'General',
        dateISO: date ? new Date(date).toISOString() : null,
      };
    });

  items.sort((a, b) => (b.dateISO || '').localeCompare(a.dateISO || ''));
  return items;
}

export async function getStaticProps() {
  const guides = readGuides();

  // Group by hub (default "General")
  const groupsMap = new Map();
  for (const g of guides) {
    const key = g.hub || 'General';
    if (!groupsMap.has(key)) groupsMap.set(key, []);
    groupsMap.get(key).push(g);
  }

  const groups = Array.from(groupsMap.entries()).map(([key, items]) => ({
    key,
    title:
      key === 'General'
        ? 'All Guides'
        : key.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    items,
  }));

  return {
    props: {
      groups,
      seo: {
        title: 'Guides — Wild & Well',
        description:
          'Actionable guides to help you sleep better, stress less, and m
