/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['lens', 'data', 'abis'])
const headers = [{ key: 'Cache-Control', value: 'public, max-age=3600' }]

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = withTM(
  withPWA({
    reactStrictMode: false,
    trailingSlash: false,
    experimental: {
      scrollRestoration: true,
      newNextLinkBehavior: true
    },
    maximumFileSizeToCacheInBytes: 8000000,
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: 'https://sitemap.bcharity.net/sitemap.xml'
        },
        {
          source: '/sitemaps/:match*',
          destination: 'https://sitemap.bcharity.net/sitemaps/:match*'
        }
      ];
    },
    async redirects() {
      return [
        { source: '/u/:handle(.+).lens', destination: '/u/:handle', permanent: true },
        { source: '/u/:handle(.+).test', destination: '/u/:handle', permanent: true },
        {
          source: '/discord',
          destination: 'https://discord.com/invite/4vKS59q5kV',
          permanent: true
        },
        {
          source: '/donate',
          destination: 'https://gitcoin.co/grants/5008/bcharity',
          permanent: true
        }
      ];
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-XSS-Protection', value: '1; mode=block' },
            { key: 'Referrer-Policy', value: 'strict-origin' }
          ]
        },
        { source: '/about', headers },
        { source: '/privacy', headers },
        { source: '/thanks', headers }
      ];
    }
  })
);