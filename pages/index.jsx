import Layout from '@/components/Layout';
import ShuffleText from '@/components/ShuffleText';

export default function Home() {
  return (
    <Layout title="Home">
      <p>Willkommen zu Next!</p>
      <a href="https://nextjs.org">Next.js</a>
      <ShuffleText />
    </Layout>
  );
}
