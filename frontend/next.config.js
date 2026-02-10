/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'your-cloud-storage-domain.com']
  }
}

module.exports = nextConfig
