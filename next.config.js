/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
      locales: ["en"],
      defaultLocale: "en"
  },
  images: {
    domains: ['i.scdn.co'],
  }
}
module.exports = nextConfig