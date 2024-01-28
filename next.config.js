/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "img.icons8.com", "back-end-cepd.onrender.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
