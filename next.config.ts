import type { NextConfig } from "next";
import withTM from "next-transpile-modules";
const withTMConfig = withTM(["grapesjs"]);
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },
};

export default withTMConfig(nextConfig);
