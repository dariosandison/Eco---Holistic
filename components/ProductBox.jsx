import Image from 'next/image';
import AmazonLink from './AmazonLink';

export default function ProductBox({ title, image, pros = [], watchout, href }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm flex flex-col gap-3">
      {image && (
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      {pros.length > 0 && (
        <ul className="list-disc pl-5 text-sm">
          {pros.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      )}
      {watchout && (
        <p className="text-sm"><span className="font-semibold">Watch out:</span> {watchout}</p>
      )}
      {href && (
        <AmazonLink href={href} className="inline-block mt-2 px-4 py-2 bg-black text-white rounded-md text-sm text-center">
          View on Amazon
        </AmazonLink>
      )}
    </div>
  );
}
