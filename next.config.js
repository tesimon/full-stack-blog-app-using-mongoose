/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
