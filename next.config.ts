import type { NextConfig } from "next";

const repoName = "NPC-Forge";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  images: { unoptimized: true },
};

export default nextConfig;
