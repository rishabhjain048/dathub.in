import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**" // * wildcard on dynamic part of domain url
      }
    ]
  }
};

export default nextConfig;
