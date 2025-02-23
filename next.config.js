//@ts-check

// Default fallback functions
const defaultWithNx = (config) => config;
let withNx = defaultWithNx;
let composePlugins = null; // Set to null initially

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

// Export the config, applying plugins only if composePlugins is available
module.exports = composePlugins ? composePlugins(...plugins)(nextConfig) : nextConfig;