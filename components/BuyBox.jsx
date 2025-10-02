// components/BuyBox.jsx
import AffiliateLink from './AffiliateLink';
import StarRating from './StarRating';

export default function BuyBox({
  name,
  rating,
  bullets = [],
  url,
  priceNote = 'See latest price',
}) {
  return (
    <aside className="buybox">
      <div className="buybox-top">
        <strong className="buybox-name">{name}</strong>
        {rating ? <StarRating value={Number(rating)} /> : null}
      </div>
      {bullets.length ? (
        <ul className="buybox-list">
          {bullets.map((b,i)=><li key={i}>{b}</li>)}
        </ul>
      ) : null}
      <div className="buybox-cta">
        <AffiliateLink href={url} className="btn btn-primary">{priceNote}</AffiliateLink>
      </div>
    </aside>
  );
}
