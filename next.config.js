/** @type {import('next').NextConfig} */
const base = process.env.GH_PAGES_BASE || process.env.PUBLIC_URL || "";
const path = require("path");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // When deploying to GitHub Pages under a repository (e.g. /Team-Volante/)
  // set GH_PAGES_BASE=/Team-Volante to ensure assets and links are prefixed.
  basePath: base || undefined,
  assetPrefix: base || undefined,
  // Silence the warning about multiple lockfiles
  outputFileTracingRoot: path.join(__dirname, ".."),
};

module.exports = nextConfig;
