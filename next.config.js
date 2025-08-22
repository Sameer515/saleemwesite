/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/saleemwesite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/saleemwesite/' : '',
}

module.exports = nextConfig;
