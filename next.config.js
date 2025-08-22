/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/construction-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/construction-website/' : '',
}

module.exports = nextConfig;
