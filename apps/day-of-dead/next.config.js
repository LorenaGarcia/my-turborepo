/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["styled-components", "@repo/ui"],
};

module.exports = nextConfig;
