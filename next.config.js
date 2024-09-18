/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/public/uploads/:path*',
        destination: 'http://192.168.110.52:4000/public/uploads/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.110.52',
        port: '4000',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false

    return config
  },
}

module.exports = nextConfig
