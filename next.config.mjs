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
      }
    ];
  }
};

export default nextConfig;
