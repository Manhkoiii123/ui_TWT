/* eslint-disable @typescript-eslint/no-explicit-any */
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
      config.externals = config.externals.filter(
        (external: any) => external !== "puppeteer"
      );
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
