/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  trailingSlash: true,
  basePath: isDev ? "" : ".",
  assetPrefix: "./",
  // crossOrigin: null,
  // trailingSlash: true,
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
};

module.exports = nextConfig;
