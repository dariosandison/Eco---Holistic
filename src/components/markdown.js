// Convert MD -> HTML with remark (loaded dynamically)
export async function markdownToHtml(markdown) {
  const { remark } = await import('remark');
  const html = (await import('remark-html')).default;
  const file = await remark().use(html).process(markdown);
  return String(file);
}
