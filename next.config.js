const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '/' : '',
  output: "export",
  publicRuntimeConfig: {
    assetPrefix: isProd ? '/' : '',
  },
  images: {
    loader: 'imgix',
    path: isProd ? 'https://happy-dune-07f976010.3.azurestaticapps.net/' : '/',
  },
};
