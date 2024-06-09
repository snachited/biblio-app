/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'h2.azureedge.net',
                port: '',
                pathname: '/img/product/**'
            }
        ]
    }
};
export default nextConfig;