import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs' module on the client to prevent this error
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve?.fallback,
          fs: false,
          path: false,
          os: false,
          crypto: false,
          stream: false,
          http: false,
          https: false,
          zlib: false,
        },
      };
    }
    return config;
  },
  // Add this to ensure server-only modules aren't bundled for the client
  experimental: {
    serverComponentsExternalPackages: ['@nodelib/fs.scandir'],
  },
};

export default nextConfig;
