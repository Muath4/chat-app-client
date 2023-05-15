/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: '',
  output: "export",
  distDir: 'docs',
};

export default   nextConfig;