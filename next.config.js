const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
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
