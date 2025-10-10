'use client';
import { useMemo } from 'react';

export default function AmazonLink({ asin, children }){
  const tag = process.env.NEXT_PUBLIC_AMAZON_UK || process.env.NEXT_PUBLIC_AMAZON_TAG || '';
  const subParam = process.env.NEXT_PUBLIC_SUBID_PARAM || 's1';
  const href = useMemo(() => {
    const url = new URL(`https://www.amazon.co.uk/dp/${asin}/`);
    if (tag) url.searchParams.set('tag', tag);
    try{
      const params = new URLSearchParams(window.location.search);
      const sub = params.get(subParam);
      if (sub) url.searchParams.set('ascsubtag', sub);
    }catch(e){}
    return url.toString();
  }, [asin, tag, subParam]);
  return <a href={href} target="_blank" rel="nofollow sponsored noopener">{children || 'View on Amazon'}</a>
}
