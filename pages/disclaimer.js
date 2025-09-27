export default function Disclaimer() { return null; }

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/legal/disclaimer',
      permanent: true,
    },
  };
}
