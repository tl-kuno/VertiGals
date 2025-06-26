import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
}

export default nextConfig
