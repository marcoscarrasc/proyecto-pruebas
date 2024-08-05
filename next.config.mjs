/** @type {import('next').NextConfig} */
const nextConfig = {
 
  



    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [{
          protocol: 'https',
          hostname: 'dragonball-api.com',
          port: '',
          pathname: '**'
        }]
      },
};

export default nextConfig;
