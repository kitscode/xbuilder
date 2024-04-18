/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'alternative.me'
            }
        ]
    }
};

export default nextConfig;
