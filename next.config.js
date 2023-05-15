const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/chat-app-client' : '',
  assetPrefix: isProd ? '/chat-app-client/' : '',
  publicRuntimeConfig: {
    assetPrefix: isProd ? '/chat-app-client/' : '',
  },
  images: {
    loader: 'imgix',
    path: isProd ? 'https://muath4.github.io/chat-app-client/' : '/',
  },
};
