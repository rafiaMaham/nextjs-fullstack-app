/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "http",
                hostname: "www.images.pexels.com"
            }
        ]
    }
};

export default nextConfig;
