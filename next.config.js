/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || 'https://event-planner-pro.vercel.app/',
  generateRobotsTxt: true,
}

module.exports = nextConfig
