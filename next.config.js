//@ts-check

// Default fallback functions (identity)
let composePlugins = (config) => config;
let withNx = (config) => config;

try {
  // Try to load the NX Next plugin for development
  ({ composePlugins, withNx } = require('@nx/next'));
} catch (error) {
  console.warn("Warning: @nx/next not found. Using fallback Next.js configuration.");
}

// No custom distDir; use Next.js default (.next)
const nextConfig = {};

const plugins = [];
if (withNx !== ((config) => config)) {
  plugins.push(withNx);
}

module.exports = composePlugins(...plugins)(nextConfig);