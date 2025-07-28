// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/temple-run-jing' : '',
  assetPrefix: isProd ? '/temple-run-jing/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
