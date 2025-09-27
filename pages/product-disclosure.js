export default function ProductDisclosure() { return null; }

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/legal/product-disclosure',
      permanent: true,
    },
  };
}
