/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // Bildgrößen, hier ist es überlegenswert, den größten Wert
    // aus der Standard Konfiguration (3840) zu verkleinern.
    deviceSizes: [640, 768, 1080, 1200, 1920, 2048, 2560],
    formats: ['image/avif', 'image/webp'],
    domains: ['react.webworker.berlin'],
  },
  // Erlaubt die neue Image-Komponente. Künftig prüfen, ob diese noch
  // "experimentell" oder ist! https://nextjs.org/docs/api-reference/next/future/image
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
