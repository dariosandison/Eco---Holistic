export default function ShareBar({ url, title }) {
  const u = encodeURIComponent(url || '');
  const t = encodeURIComponent(title || 'Wild & Well');
  const share = [
    { name: 'X', href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { name: 'Pinterest', href: `https://pinterest.com/pin/create/button/?url=${u}&description=${t}` }
  ];
  return (
    <div className="flex gap-3 items-center">
      <span className="text-sm text-gray-600">Share:</span>
      {share.map(s => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener" className="text-sm underline">
          {s.name}
        </a>
      ))}
    </div>
  );
}
