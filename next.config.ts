import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        qualities: [90],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
        ],
    },
};

export default nextConfig;
