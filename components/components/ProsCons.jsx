// components/ProsCons.jsx
export default function ProsCons({
  pros = [],
  cons = [],
  prosTitle = 'Pros',
  consTitle = 'Cons'
}) {
  return (
    <section className="proscons" aria-label="Pros and Cons">
      <div>
        <h4>{prosTitle}</h4>
        {pros.length ? (
          <ul>
            {pros.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        ) : <p>No pros listed.</p>}
      </div>
      <div>
        <h4>{consTitle}</h4>
        {cons.length ? (
          <ul>
            {cons.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        ) : <p>No cons listed.</p>}
      </div>
    </section>
  );
}
