/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
  theme: {
    extend: {
      grayscale: {
        50: "50%",
      },
    },
  },
};

module.exports = nextConfig;
