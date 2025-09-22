// ESM-only packages handled via dynamic import to keep Next pages happy
export async function markdownToHtml(markdown) {
  const { remark } = await import('remark');
  const html = (await import('remark-html')).default;
  const file = await remark().use(html).process(markdown);
  return String(file);
}
