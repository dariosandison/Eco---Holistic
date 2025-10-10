export default function ProsCons({ pros = [], cons = [] }){
  return (
    <div className="grid md:grid-cols-2 gap-4 my-4">
      <div className="card p-4">
        <h4 className="font-semibold mb-2">Pros</h4>
        <ul className="list-disc pl-5 space-y-1">{pros.map((p,i)=>(<li key={i}>{p}</li>))}</ul>
      </div>
      <div className="card p-4">
        <h4 className="font-semibold mb-2">Cons</h4>
        <ul className="list-disc pl-5 space-y-1">{cons.map((c,i)=>(<li key={i}>{c}</li>))}</ul>
      </div>
    </div>
  );
}
