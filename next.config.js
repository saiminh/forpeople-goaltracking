/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ca.slack-edge.com', 'slack-imgs.com'],
  },
}

module.exports = nextConfig
