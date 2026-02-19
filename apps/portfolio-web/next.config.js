/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["styled-components", "motion", "framer-motion"],
};

module.exports = nextConfig;
