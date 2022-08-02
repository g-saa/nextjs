/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/Layout';

import Image from 'next/future/image';

import hongKong from '@/img/hong-kong.jpg';

export default function bilder() {
  return (
    <Layout title="Bilder">
      {/* 
      Wenn man ein Bild, das auf dem Server liegt, zuvor importiert
      und bei src einsetzt, kann man width und height weglassen.
      placeholder="blur" erzeugt eine verschwommene sehr kleine
      Variante des Bildes, die sofort sichtbar ist und dann später
      durch das volle Bild ausgetauscht wird.
      */}
      <Image
        src={hongKong}
        alt="Hong Kong"
        sizes="(max-width: 50rem) 90vw, 48rem"
        placeholder="blur"
      />

      <img
        className="logo"
        src="/img/logo@1x.jpg"
        srcSet="/img/logo@1x.jpg 1x, /img/logo@2x.jpg 2x"
        alt="Bildbeschreibung"
        loading="lazy"
        width="320"
        height="100"
      />

      <img
        src="https://picsum.photos/id/1011/900/450"
        srcSet="https://picsum.photos/id/1011/450/225 450w, https://picsum.photos/id/1011/900/450 900w, https://picsum.photos/id/1011/1350/675 1350w, https://picsum.photos/id/1011/1800/900 1800w"
        sizes="(max-width: 50rem) 90vw, 48rem"
        alt="Frau im Kanu"
        className="image"
        width="2"
        height="1"
        loading="lazy"
      />

      <picture>
        <source
          media="(max-width: 30rem) and (orientation: portrait)"
          srcSet="/img/header-image-portrait.jpg"
        />
        <source
          media="(max-width: 40rem) and (orientation: portrait)"
          srcSet="/img/header-image-square.jpg"
        />
        <img
          className="image"
          src="/img/header-image-landscape@1000.jpg"
          srcSet="/img/header-image-landscape@1000.jpg 1000w,/img/header-image-landscape@1500.jpg 1500w,/img/header-image-landscape@2000.jpg 2000w"
          sizes="(max-width: 52rem) 90vw, 50rem"
          loading="lazy"
          alt="Mann mit Kind am Strand"
        />
      </picture>

      <picture>
        <source type="image/avif" srcSet="/img/herbst.avif" />
        <source type="image/webp" srcSet="/img/herbst.webp" />
        <img
          className="image"
          src="/img/herbst.jpg"
          alt="Herbstliche Blätter"
          loading="lazy"
          width="4"
          height="3"
        />
      </picture>

      <Image
        src="/img/hong-kong.jpg"
        width={5184}
        height={3456}
        alt="Hong Kong"
        sizes="(max-width: 50rem) 90vw, 48rem"
      />
    </Layout>
  );
}
