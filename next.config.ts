import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray lockfile in the parent folder makes
  // Next.js infer the wrong root otherwise.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
