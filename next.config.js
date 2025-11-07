// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 80],
  },
  // Add empty Turbopack config to explicitly enable it
  turbopack: {},
  // Keep webpack config for backward compatibility
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
