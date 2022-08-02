import Layout from '@/components/Layout';
import Link from 'next/link';

const graphQlPath = 'https://react.webworker.berlin/graphql';

export async function getStaticProps() {
  let posts = [];

  try {
    const query = `{
  posts {
    nodes {
      title
      slug
    }
  }
}`;

    const response = await fetch(`${graphQlPath}?query=${query}`);

    if (!response.ok) {
      throw new Error('Problem!');
    }

    const jsonData = await response.json();

    posts = jsonData.data.posts.nodes;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      posts,
    },
    revalidate: 3600, // Einmal pro Stunde aktualisieren
  };
}

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul>
        {posts.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

/* 
// Version mit REST-API:

export async function getStaticProps() {
  let posts = [];

  try {
    const response = await fetch(
      'https://react.webworker.berlin/wp-json/wp/v2/posts'
    );

    if (!response.ok) {
      throw new Error('Problem!');
    }

    posts = await response.json();
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      posts,
    },
    revalidate: 3600, // Einmal pro Stunde aktualisieren
  };
}

*/
