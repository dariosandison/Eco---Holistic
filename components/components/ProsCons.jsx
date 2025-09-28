export default function ProsCons({ pros = [], cons = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 my-4">
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
