/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
