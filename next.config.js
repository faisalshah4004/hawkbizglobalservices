/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'hawkbizglobalservices.com' },
      { protocol: 'https', hostname: 'randomuser.me' },
    ],
  },
}

module.exports = nextConfig
