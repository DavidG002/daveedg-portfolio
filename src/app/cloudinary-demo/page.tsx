// C:\Users\David\Apps-Start\Start-Portfolio\src\app\cloudinary-demo\page.tsx

import CloudinaryDemo from '../../components/CloudinaryDemo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloudinary Demo - DaveedG Portfolio',
  description: 'Showcasing Cloudinary integration with Next.js for optimized media management.',
  openGraph: {
    title: 'Cloudinary Demo - DaveedG Portfolio',
    description: 'Explore Cloudinary features like image optimization, uploads, and dynamic OG images.',
    images: [
      {
        url: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_1200,h_630,q_auto,f_auto/v1/portfolio/og-image`,
        width: 1200,
        height: 630,
        alt: 'Cloudinary Demo OG Image',
      },
    ],
  },
};

export default function CloudinaryDemoPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Cloudinary Demo</h1>
        <section className="mb-12">
          <p className="text-lg text-gray-600 text-center mb-6 max-w-3xl mx-auto">
            Discover the power of Cloudinary’s media management tools. Below, explore optimized image galleries, seamless uploads, and high-quality video delivery, all designed to enhance your media experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Optimized Image Gallery</h3>
              <p className="text-gray-600 text-sm">
                Showcase stunning images with real-time transformations, optimized for speed and quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Interactive Image Upload</h3>
              <p className="text-gray-600 text-sm">
                Upload or select images effortlessly with an intuitive, user-friendly interface.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Optimized Video Delivery</h3>
              <p className="text-gray-600 text-sm">
                Deliver high-quality videos with smooth, adaptive streaming for all devices.
              </p>
            </div>
          </div>
        </section>
        <CloudinaryDemo />
      </div>
    </div>
  );
}