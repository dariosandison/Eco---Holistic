export default function AffiliateNote({ compact=false }) {
  return (
    <div className="note" role="note" aria-label="Affiliate notice" style={{margin:'12px 0'}}>
      <strong>Heads up:</strong> Some links are affiliate links. If you buy through them, we may earn a small commission at no extra cost to you. 
      {!compact && ' We only recommend products that match our safety and simplicity criteria.'}
    </div>
  );
}
