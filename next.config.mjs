/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'calculating-gazelle-232.convex.cloud',
          },
        ],
      },
};

export default nextConfig;
