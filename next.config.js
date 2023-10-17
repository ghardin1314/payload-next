const { withPayload } = require("@payloadcms/next-payload");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPayload(nextConfig, {
  configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
  payloadPath: path.resolve(__dirname, "./src/payload/payloadClient.ts"),
});
