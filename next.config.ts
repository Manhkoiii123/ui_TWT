import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newsletters.tkgplatform.com.au",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = ["puppeteer"];
    }
    return config;
  },

  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ["style-loader", "css-loader"],
  //   });
  //   return config;
  // },
};

export default nextConfig;
