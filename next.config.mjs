/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/agency',
        destination: 'https://setangle.com',
        permanent: true
      },
      {
        source: '/live',
        destination: 'https://youtube.com/@imsety/live',
        permanent: false
      },
      {
        source: '/chat',
        destination: 'https://cal.com/imsety/podcast-prep',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
