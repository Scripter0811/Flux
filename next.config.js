/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack completely
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Required for Cloudflare Pages static hosting
  output: 'export'
};

module.exports = nextConfig;
