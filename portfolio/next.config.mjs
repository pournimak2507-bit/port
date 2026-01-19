/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: "export", // static export enable
  images: {
    unoptimized: true, // disables Image Optimization for static export
  },
};
export default nextConfig;
