/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  experimental: {
    appDir: true,
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
