const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
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
