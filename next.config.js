const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true, // 소스 맵 활성화
  basePath: '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://main--illustrious-cascaron-5fdfb3.netlify.app' : '',
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
