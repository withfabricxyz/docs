const withNextra = require('nextra').default({});

module.exports = withNextra({
  turbopack: {
    resolveAlias: {
      components: './components'
    }
  },
  async redirects() {
    return [
      {
        source: '/hypersub_coming_soon',
        destination: '/hypersub/overview',
        permanent: true,
      },
    ]
  },
});
