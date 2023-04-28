/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "http",
        hostname: "uhdtv.io",
      },
      {
        protocol: "https",
        hostname: "uhdtv.io",
      },
      {
        protocol: "https",
        hostname: "mango.blender.org",
      },
      {
        protocol: "https",
        hostname: "download.blender.org",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "ddz4ak4pa3d19.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "www.cartoonbrew.com",
      },
      {
        protocol: "https",
        hostname: "www.blender.org",
      }
    ],
  },
}

module.exports = nextConfig;