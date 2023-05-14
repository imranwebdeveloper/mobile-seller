/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    IMGDB_API_KEY: process.env.IMGDB_API_KEY,
    TOKEN_NAME: process.env.TOKEN_NAME,
    LOGO: process.env.LOGO,
  },
};

module.exports = nextConfig;
