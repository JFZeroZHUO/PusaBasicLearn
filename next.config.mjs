/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  },
  basePath: basePath()
}

function basePath() {
  if (process.env.CI_PROJECT_NAMESPACE === undefined) {
    return ''
  }

  const namespace = process.env.CI_PROJECT_NAMESPACE.replace(/\//g, '-')
  return `/${namespace}/${process.env.CI_APP_NAME}`.trim()
}

export default nextConfig
