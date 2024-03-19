/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/index',
        },
      ];
    },
    trailingSlash: true
  };
export default nextConfig;
