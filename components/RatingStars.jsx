export default function RatingStars({ value=5, outOf=5 }){
  const pct = Math.max(0, Math.min(1, value / outOf)) * 100;
  return (
    <div className="inline-block relative align-middle" aria-label={`Rating: ${value} out of ${outOf}`}>
      <div className="text-neutral-300">★★★★★</div>
      <div className="absolute inset-0 overflow-hidden" style={{width: pct+'%'}}>
        <div className="text-amber-500">★★★★★</div>
      </div>
    </div>
  );
}
