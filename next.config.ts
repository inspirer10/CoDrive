import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
};

module.exports = {
    images: {
        qualities: [90],
    },
};

export default nextConfig;
