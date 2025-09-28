// components/StarRating.jsx
export default function StarRating({ value = 0, outOf = 5 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = Math.max(0, outOf - full - half);
  const Star = ({ fill = 'currentColor' }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill={fill} d="M12 17.27l6.18 3.73-1.64-7.03L21.9 9.24l-7.19-.62L12 2 9.29 8.62 2.1 9.24l5.36 4.73L5.82 21z"/>
    </svg>
  );
  const Half = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path fill="url(#half)" stroke="currentColor" d="M12 17.27l6.18 3.73-1.64-7.03L21.9 9.24l-7.19-.62L12 2 9.29 8.62 2.1 9.24l5.36 4.73L5.82 21z"/>
    </svg>
  );
  return (
    <span className="stars" aria-label={`${value} out of ${outOf} stars`}>
      {Array.from({ length: full }).map((_,i)=><Star key={`f${i}`} />)}
      {half ? <Half /> : null}
      {Array.from({ length: empty }).map((_,i)=><Star key={`e${i}`} fill="none" />)}
      <span className="stars-text">{value.toFixed(1)}</span>
    </span>
  );
}
