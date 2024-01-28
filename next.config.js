/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "img.icons8.com", "back-end-cepd.onrender.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    urlApi: process.env.API_BACK,
    urlApiSocket: process.env.SOCKET,
  },
};

module.exports = nextConfig;
