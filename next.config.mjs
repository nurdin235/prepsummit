/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Support image loading from unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
