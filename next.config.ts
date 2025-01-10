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
      {
        protocol: "https",
        hostname: "twt-agent-portal.s3.ap-southeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname:
          "microservice-master-crm-public.s3.ap-southeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
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
