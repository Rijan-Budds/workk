/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/*`,
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
