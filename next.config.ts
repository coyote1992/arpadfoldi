import type { NextConfig } from "next";

// A static site: `next build` writes plain HTML to ./out, which any host can serve.
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default config;
