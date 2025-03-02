/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  serverExternalPackages: ["sharp"],
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // Add custom headers for long requests
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Connection",
            value: "keep-alive",
          },
        ],
      },
    ];
  },
  webpack(config: { module: { rules: { test: RegExp; use: string[] }[] } }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
