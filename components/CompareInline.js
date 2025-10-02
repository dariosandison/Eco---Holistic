// components/CompareInline.js
export default function CompareInline({ a = '', b = '', linkA = '', linkB = '', note = '' }) {
  return (
    <div className="relbox" style={{ borderColor: '#111827' }}>
      <div className="relbox-title">Quick Compare</div>
      <ul className="relbox-grid">
        <li>
          <a className="relbox-card" href={linkA || '#'} target="_blank" rel="nofollow sponsored noopener noreferrer">
            <span className="relbox-name">{a || 'Option A'}</span>
            {note ? <span className="relbox-desc">{note}</span> : null}
          </a>
        </li>
        <li>
          <a className="relbox-card" href={linkB || '#'} target="_blank" rel="nofollow sponsored noopener noreferrer">
            <span className="relbox-name">{b || 'Option B'}</span>
            {note ? <span className="relbox-desc">{note}</span> : null}
          </a>
        </li>
      </ul>
    </div>
  );
}
