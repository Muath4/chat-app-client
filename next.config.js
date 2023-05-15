module.exports = {
  // Use the prefix for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/chat-app-client' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/chat-app-client/' : '',
  output: 'export',
  publicRuntimeConfig: {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-nchat-app-clientame/' : '',
  },
};