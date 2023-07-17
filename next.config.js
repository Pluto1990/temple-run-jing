/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     domains: ['via.placeholder.com', 'localhost'],
//   },
//   // avoid cors with proxy
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:3005/:path*', // Proxy to Backend
//       },
//     ]
//   },
// }
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/temple-run-jing',
  assetPrefix: '/temple-run-jing',
}
module.exports = nextConfig
