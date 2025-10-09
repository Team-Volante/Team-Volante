/** @type {import('next').NextConfig} */
// Using hard-coded value for GitHub Pages deployment to ensure consistency
const base = "/Team-Volante"; // Exact case as your repository name
const path = require("path");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // When deploying to GitHub Pages under a repository (e.g. /Team-Volante/)
  // The basePath and assetPrefix must match the exact case of your repository name
  basePath: base,
  assetPrefix: base,
  // Silence the warning about multiple lockfiles
  outputFileTracingRoot: path.join(__dirname, ".."),
};

module.exports = nextConfig;
