const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/chat-app-client' : '',
  assetPrefix: isProd ? '/chat-app-client/' : '',
  output: "export",
  publicRuntimeConfig: {
    assetPrefix: isProd ? '/chat-app-client/' : '',
  },
  images: {
    loader: 'imgix',
    path: isProd ? 'https://happy-dune-07f976010.3.azurestaticapps.net/' : '/',
  },
};
