/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader:'cloudinary',
    path:['res.cloudinary.com/dm23ad88l/image/upload']
  }
}

module.exports = nextConfig
