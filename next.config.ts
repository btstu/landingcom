import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['feather.so', 'i.ibb.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'feather.so',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      }
    ],
  },
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
  // Updated from serverComponentsExternalPackages to serverExternalPackages
  serverExternalPackages: ['@nodelib/fs.scandir'],
};

export default nextConfig;
