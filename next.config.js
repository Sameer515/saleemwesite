/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/saleemwesite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/saleemwesite/' : '',
  distDir: 'out',
  experimental: {
    allowedDevOrigins: ['192.168.40.197'],
  },
}

module.exports = nextConfig;
