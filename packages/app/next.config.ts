import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@chotospace/ui"],
  output: "standalone",
};

export default nextConfig;
