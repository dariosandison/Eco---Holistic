// lib/markdown.js
export function renderMarkdown(md) {
  if (!md) return '';

  // Normalize line endings
  md = md.replace(/\r\n/g, '\n');

  // Code blocks (```) – keep as <pre><code>
  md = md.replace(/```([\s\S]*?)```/g, (_, code) => `<pre><code>${escapeHtml(code.trim())}</code></pre>`);

  // Headings
  md = md.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  md = md.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  md = md.replace(/^# (.*)$/gm, '<h1>$1</h1>');

  // Bold / italic
  md = md.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  md = md.replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>');

  // Links
  md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Ordered lists
  md = md.replace(/(^\d+\.\s.*(\n\d+\.\s.*)*)/gm, (block) => {
    const items = block.trim().split('\n').map(l => l.replace(/^\d+\.\s/, '').trim());
    return `<ol>${items.map(i => `<li>${i}</li>`).join('')}</ol>`;
  });

  // Unordered lists
  md = md.replace(/(^-\s.*(\n-\s.*)*)/gm, (block) => {
    const items = block.trim().split('\n').map(l => l.replace(/^-+\s/, '').replace(/^- \s?/, '').trim());
    return `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  });

  // Paragraphs (lines that are not HTML blocks, lists, headings)
  const lines = md.split('\n').map(l => l.trim());
  const html = [];
  let para = [];
  const isBlock = (l) => /^<(h\d|ul|ol|pre|blockquote)/.test(l) || l === '';
  for (const l of lines) {
    if (isBlock(l)) {
      if (para.length) { html.push(`<p>${para.join(' ')}</p>`); para = []; }
      if (l) html.push(l);
    } else {
      para.push(l);
    }
  }
  if (para.length) html.push(`<p>${para.join(' ')}</p>`);

  return html.join('\n');
}

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
