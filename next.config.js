// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        pathname: '/**',
      }
    ],
    unoptimized: true,
  },
  
  // WAJIB untuk Cloudflare Pages SPA routing
  trailingSlash: false,
  
  // Untuk fix 404 issues
  skipTrailingSlashRedirect: true,
  
  // Experimental untuk Cloudflare
  experimental: {
    scrollRestoration: true,
  },
  
  // HAPUS: output: 'export'
}

module.exports = nextConfig