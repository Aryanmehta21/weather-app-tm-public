/** @type {import('next').NextConfig} */


require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'openweathermap.org',
      port: '',
    }]
  }
}

module.exports = nextConfig
