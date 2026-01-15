/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.websensei.fr',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
