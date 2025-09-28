// components/ProsCons.jsx
export default function ProsCons({ pros = [], cons = [] }) {
  if (!pros.length && !cons.length) return null;
  return (
    <div className="proscons">
      <div>
        <h4>Pros</h4>
        <ul>{pros.map((p,i)=><li key={i}>✓ {p}</li>)}</ul>
      </div>
      <div>
        <h4>Cons</h4>
        <ul>{cons.map((c,i)=><li key={i}>– {c}</li>)}</ul>
      </div>
    </div>
  );
}
