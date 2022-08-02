import Layout from '@/components/Layout';
import Image from 'next/future/image';
import { useRouter } from 'next/router';

const graphQlPath = 'https://react.webworker.berlin/graphql';

/* Wenn man einen dynamischen Pfad hat, muss man Next mitteilen,
welche Pfade das System statisch generieren soll, hier also
eine Liste der vorhanden Blog-Slugs übergeben. */
export async function getStaticPaths() {
  let paths = [];

  try {
    const query = `{
  posts {
    nodes {
      slug
    }
  }
}`;

    const response = await fetch(`${graphQlPath}?query=${query}`);

    const posts = await response.json();

    /* 
    Der Schlüsselname "params" ist vorgegeben. Der Schlüsselname
    "slug" entspricht dem Platzhalter [slug] im Dateinamen von [slug].jsx
    Die Einträge im paths-Array werden an getStaticProps übergeben,
    so dass für jeden Eintrag eine Seite generiert werden kann.
    https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
    */
    paths = posts.data.posts.nodes.map(({ slug }) => ({ params: { slug } }));
  } catch (e) {
    console.log(e);
  }

  /* fallback legt fest, dass ein neuer und noch nicht in paths
  enthaltene Slug frisch von WordPress geholt werden soll.
  Wenn man für paths einen leeren Array zurückgibt, werden
  also alle Blogbeiträge erst statisch generiert, wenn sie
  zum ersten Mal angefordert werden. Man könnte in paths
  auch nur z.B. die 20 neuesten Blogbeiträge übergeben. */
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let post = {};

  const query = `{
    post(id: "${params.slug}", idType: SLUG) {
      title
      content
      featuredImage {
        node {
          altText
          guid
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }`;

  try {
    const response = await fetch(`${graphQlPath}?query=${query}`);
    if (!response.ok) {
      throw new Error('Problem!');
    }

    const jsonData = await response.json();

    post = jsonData.data.post;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      post,
    },
    revalidate: 3600, // Einmal pro Stunde aktualisieren
  };
}

export default function BlogPost({ post }) {
  // https://nextjs.org/docs/basic-features/data-fetching#fallback-pages
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <strong>Wird geladen…</strong>
      </Layout>
    );
  }

  const { title, content, featuredImage } = post;

  return (
    <Layout title={title}>
      {featuredImage && (
        <Image
          src={featuredImage.node.guid}
          alt={featuredImage.node.altText}
          width={featuredImage.node.mediaDetails.width}
          height={featuredImage.node.mediaDetails.height}
          sizes="(max-width: 50rem) 90vw, 48rem"
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}
