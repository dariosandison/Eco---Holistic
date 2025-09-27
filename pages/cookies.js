export default function Cookies() { return null; }

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/legal/cookies',
      permanent: true,
    },
  };
}

