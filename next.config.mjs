// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  experimental: { output: 'export' },
};

export default nextConfig;
