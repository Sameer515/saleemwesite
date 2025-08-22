const withNextIntl = require('next-intl/plugin')('./i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
}

module.exports = withNextIntl(nextConfig);
