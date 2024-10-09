/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.110.52',
        port: '4000',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_CONFIG,
      },
      {
        protocol: 'https',
        hostname: 'd1r4bqac11v6zn.cloudfront.net',
      },
    ],
  },
 
  webpack: (config) => {
    config.resolve.alias.canvas = false
 
    return config
  },
}
 
module.exports = nextConfig
 
