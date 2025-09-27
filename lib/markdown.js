// lib/markdown.js
function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
export function stripLeadingH1(md) {
  if (!md) return '';
  return md.replace(/^# .*\n+/, '');
}
export function renderMarkdown(src) {
  if (!src) return '';
  let md = src.replace(/\r\n/g, '\n');

  md = md.replace(/```([\s\S]*?)```/g, (_, code) => `<pre><code>${escapeHtml(code.trim())}</code></pre>`);
  md = md.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);

  md = md.replace(/^### (.*)$/gm, '<h3>$1</h3>');
  md = md.replace(/^## (.*)$/gm, '<h2>$1</h2>');
  md = md.replace(/^# (.*)$/gm, '<h1>$1</h1>');

  md = md.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  md = md.replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>');

  md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  md = md.replace(/(^\d+\.\s.*(?:\n\d+\.\s.*)*)/gm, (block) => {
    const items = block.trim().split('\n').map((l) => l.replace(/^\d+\.\s/, '').trim());
    return `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
  });

  md = md.replace(/(^-\s.*(?:\n-\s.*)*)/gm, (block) => {
    const items = block.trim().split('\n').map((l) => l.replace(/^-+\s/, '').replace(/^- \s?/, '').trim());
    return `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
  });

  const lines = md.split('\n');
  const html = [];
  let para = [];
  const isBlock = (l) => /^<(h\d|ul|ol|pre|blockquote)/.test(l) || l.trim() === '';
  for (const raw of lines) {
    const l = raw.trim();
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
