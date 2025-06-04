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
        <CloudinaryDemo />
      </div>
    </div>
  );
}