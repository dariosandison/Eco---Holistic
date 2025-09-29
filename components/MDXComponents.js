// components/MDXComponents.js
import NextImage from 'next/image';
import SmartLink from './SmartLink';

// Optional custom components you already have; keep imports if present.
// If you don’t have these components, you can safely remove their lines here.
import Callout from './Callout';
import CompareInline from './CompareInline';
import CompareTable from './CompareTable';

// Image component that avoids CLS and works with static export.
// If width/height aren’t provided in MDX, we fall back to a plain <img>.
function MdxImage(props) {
  const { src = '', alt = '', width, height, ...rest } = props;

  if (!width || !height) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ maxWidth: '100%', height: 'auto' }}
        {...rest}
      />
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...rest}
    />
  );
}

const MDXComponents = {
  a: SmartLink,
  img: (props) => <MdxImage {...props} />,
  Image: (props) => <MdxImage {...props} />,

  // Only exported if they exist in your repo
  Callout,
  CompareInline,
  CompareTable
};

export default MDXComponents;
