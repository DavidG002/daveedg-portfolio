//@ts-check

// Default fallback functions
const defaultWithNx = (config) => config;
let withNx = defaultWithNx;
let composePlugins = (config) => config;

try {
  // Load NX Next plugin
  ({ composePlugins, withNx } = require('@nx/next'));
} catch (error) {
  console.warn("Warning: @nx/next not found. Details:", error.message);
}

// Build plugins array
const plugins = [];
if (withNx !== defaultWithNx) {
  plugins.push(withNx);
}

// Next.js config
const nextConfig = {};

module.exports = composePlugins(...plugins)(nextConfig);