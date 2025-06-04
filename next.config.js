/** @type {import('next').NextConfig} */
const defaultWithNx = (config) => config;
let withNx = defaultWithNx;
let composePlugins = null;

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
const nextConfig = {
  reactStrictMode: false, // Set to false as per your original setup
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// Export the config, applying plugins only if composePlugins is available
module.exports = composePlugins ? composePlugins(...plugins)(nextConfig) : nextConfig;