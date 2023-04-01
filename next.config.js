/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  theme: {
    extend: {
      grayscale: {
        50: '50%',
      }
    }
  },
}

module.exports = nextConfig
