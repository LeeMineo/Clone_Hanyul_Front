// next.config.js
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['main--illustrious-cascaron-5fdfb3.netlify.app'],
    path: '/_next/image',
    loader: 'default',
  },
  async rewrites() {
    return [
      {
        source: '/products/:id',
        destination: '/product/:id',
      },
    ];
  },
};

module.exports = nextConfig;