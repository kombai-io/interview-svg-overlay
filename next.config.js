/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //  webpack: (config) => {
  //   config.module.rules.push({
  //     resourceQuery: /raw/,
  //     type: 'asset/source',
  //   });
  //   config.module.rules.push({
  //       test: /\.svg$/,
  //       loader: 'raw-loader',
  //   });

  //   return config;
  // }
}

module.exports = nextConfig
