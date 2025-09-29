// components/MDXComponents.jsx
import NextImage from 'next/image';
import SmartLink from './SmartLink';

// Optional: keep/remove if you don't have these
import Callout from './Callout';
import CompareInline from './CompareInline';
import CompareTable from './CompareTable';

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

const mdxComponents = {
  a: SmartLink,
  img: (props) => <MdxImage {...props} />,
  Image: (props) => <MdxImage {...props} />,
  Callout,
  CompareInline,
  CompareTable
};

export default mdxComponents;   // default import support
export { mdxComponents };       // named import support
