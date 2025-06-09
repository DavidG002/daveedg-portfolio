// C:\Users\David\Apps-Start\Start-Portfolio\src\components\CloudinaryDemo.tsx
'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import {
  CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
  CloudinaryUploadWidgetInfo,
} from 'next-cloudinary';

// Define TypeScript interface for Cloudinary transformations
interface Transformation {
  [key: string]: string | number | boolean;
}

// Define TypeScript interface for Cloudinary Media Library
interface CloudinaryMediaLibrary {
  openMediaLibrary: (
    config: {
      cloud_name: string;
      api_key: string;
      insert_caption?: string;
      max_files?: number;
      multiple?: boolean;
      default_transformations?: Array<Array<Transformation>>;
    },
    callbacks: {
      insertHandler: (data: { assets: Array<{ public_id: string; secure_url: string }> }) => void;
      error?: (error: Error | string) => void;
    }
  ) => void;
}

// Extend Window interface for Cloudinary
declare global {
  interface Window {
    cloudinary: CloudinaryMediaLibrary;
  }
}

export default function CloudinaryDemo() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [publicId, setPublicId] = useState<string>('sample');
  const [selectedImage, setSelectedImage] = useState<{ publicId: string; title: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [usePixelate, setUsePixelate] = useState(false);
  const [useGrayscale, setUseGrayscale] = useState(false);
  const [useSepia, setUseSepia] = useState(false);
  const [useVectorize, setUseVectorize] = useState(false);
  const [useCartoonify, setUseCartoonify] = useState(false);
  const [contrastValue, setContrastValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const cloudinaryRef = useRef<CloudinaryMediaLibrary | null>(null);

  const galleryImages = [
    { publicId: 'sample', alt: 'Sample Image 1', title: 'Beautiful Landscape' },
    { publicId: 'cld-sample', alt: 'Sample Image 2', title: 'City Skyline' },
    { publicId: 'cld-sample-2', alt: 'Sample Image 3', title: 'Mountain Adventure' },
  ];

  // Load Cloudinary Media Library script
  useEffect(() => {
    if (cloudinaryRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://media-library.cloudinary.com/global/all.js';
    script.async = true;

    script.onload = () => {
      cloudinaryRef.current = window.cloudinary;
    };

    script.onerror = () => {
      console.error('Failed to load Cloudinary Media Library script');
      setError('Failed to load Cloudinary Media Library.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Open Media Library Widget
  const openMediaLibrary = useCallback(() => {
    if (!cloudinaryRef.current) {
      console.error('Cloudinary Media Library not loaded');
      setError('Media Library not available. Please try again.');
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    if (!apiKey) {
      console.error('Cloudinary API key is missing');
      setError('Cloudinary API key is not configured. Please contact support.');
      return;
    }

    cloudinaryRef.current.openMediaLibrary(
      {
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dg1jnl6yl',
        api_key: apiKey,
        insert_caption: 'Insert Media',
        max_files: 1,
        multiple: false,
      },
      {
        insertHandler: (data) => {
          if (data.assets && data.assets.length > 0) {
            const asset = data.assets[0];
            setUploadedImageUrl(asset.secure_url);
            setPublicId(asset.public_id);
            setNotification('Media selected from library!');
            console.log('Selected asset:', asset);
          }
        },
        error: (err) => {
          console.error('Media Library error:', err);
          setError('Failed to select media from library.');
        },
      }
    );
  }, []);

  const handleImageClick = useCallback((publicId: string, title: string) => {
    console.log('Image clicked:', publicId);
    try {
      setSelectedImage({ publicId, title });
    } catch (err) {
      console.error('Error setting selected image:', err);
      setError('Failed to open image lightbox.');
    }
  }, []);

  const closeLightbox = useCallback(() => {
    console.log('Closing lightbox');
    try {
      setSelectedImage(null);
    } catch (err) {
      console.error('Error closing lightbox:', err);
      setError('Failed to close lightbox.');
    }
  }, []);

  const handleUploadSuccess = useCallback((result: CloudinaryUploadWidgetResults) => {
    console.log('Upload result:', result);
    try {
      if (result.info && typeof result.info !== 'string') {
        const info = result.info as CloudinaryUploadWidgetInfo;
        setUploadedImageUrl(info.secure_url);
        setPublicId(info.public_id);
        setNotification('Image uploaded successfully!');
        console.log('Upload success:', info);
      }
    } catch (err) {
      console.error('Error handling upload success:', err);
      setError('Failed to process uploaded image.');
    } finally {
      setIsUploading(false);
      setIsDragging(false);
    }
  }, []);

  const handleRemoveImage = useCallback(() => {
    try {
      setUploadedImageUrl(null);
      setPublicId('sample');
      setNotification('Image removed successfully!');
    } catch (err) {
      console.error('Error removing image:', err);
      setError('Failed to remove image.');
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>, open: () => void) => {
    e.preventDefault();
    setIsDragging(false);
    setIsUploading(true);
    open();
  }, []);

  useEffect(() => {
    console.log('CloudinaryDemo component mounted');
    return () => console.log('CloudinaryDemo component unmounted');
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="space-y-4 bg-white p-6 rounded-xl shadow-xl max-w-4xl mx-auto">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}
      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 animate-fade-in">
          {notification}
        </div>
      )}

      {/* Image Gallery */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Optimized Image Gallery</h2>
        <div className="mb-4 flex flex-wrap gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={usePixelate}
              onChange={() => setUsePixelate(!usePixelate)}
            />
            <span>Pixelate</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={useGrayscale}
              onChange={() => setUseGrayscale(!useGrayscale)}
            />
            <span>Grayscale</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={useSepia}
              onChange={() => setUseSepia(!useSepia)}
            />
            <span>Sepia</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={useVectorize}
              onChange={() => setUseVectorize(!useVectorize)}
            />
            <span>Vectorize</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={useCartoonify}
              onChange={() => setUseCartoonify(!useCartoonify)}
            />
            <span>Cartoonify</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Contrast: {contrastValue}</label>
          <input
            type="range"
            min="-100"
            max="100"
            value={contrastValue}
            onChange={(e) => setContrastValue(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>
        <p className="text-gray-600 mb-4">
          Use the controls above to apply transformations to the images:
          <br />
          - <strong>Pixelate</strong>: Applies a pixelation effect for a retro look.
          <br />
          - <strong>Grayscale</strong>: Converts the image to grayscale.
          <br />
          - <strong>Sepia</strong>: Applies a sepia tone for a vintage look.
          <br />
          - <strong>Vectorize</strong>: Converts the image into a vector art style.
          <br />
          - <strong>Cartoonify</strong>: Applies a cartoon-like effect to the image.
          <br />
          - <strong>Contrast</strong>: Adjusts the image contrast (-100 to 100).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <button
              key={img.publicId}
              onClick={() => handleImageClick(img.publicId, img.title)}
              className="relative overflow-hidden rounded-lg shadow-md hover:opacity-90 transition-opacity group pointer-events-auto"
            >
              <CldImage
                src={img.publicId}
                width={400}
                height={300}
                crop="fill"
                gravity="auto"
                alt={img.alt}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                onError={() => console.error('Image load error:', img.publicId)}
                pixelate={usePixelate}
                grayscale={useGrayscale}
                sepia={useSepia}
                vectorize={useVectorize}
                cartoonify={useCartoonify}
                contrast={contrastValue.toString()}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {img.title}
              </div>
            </button>
          ))}
        </div>
        <p className="mt-2 text-gray-600">
          Images are optimized with responsive sizes, AI-based cropping, and lazy loading for
          performance.
        </p>
      </section>

      {/* Image Upload and Media Library */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 border-b-2 border-blue-600 pb-2">Interactive Image Upload</h2>
        <div className="mb-6">
          <CldUploadWidget
            uploadPreset="portfolio_unsigned"
            options={{
              cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dg1jnl6yl',
            }}
            onSuccess={handleUploadSuccess}
            onError={(error) => {
              console.error('Upload Widget Error:', error);
              setError('Failed to initialize upload widget.');
              setIsUploading(false);
              setIsDragging(false);
            }}
            onOpen={() => {
              console.log('Upload widget opened');
              setIsUploading(true);
            }}
            onClose={() => {
              console.log('Upload widget closed');
              setIsUploading(false);
              setIsDragging(false);
            }}
          >
            {({ open }) => (
              <div
                className={`border-4 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300 ${
                  isDragging ? 'border-blue-600 bg-blue-100 shadow-lg' : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
                } ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, open)}
                onClick={() => !isUploading && open()}
              >
                {isUploading ? (
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="animate-spin h-10 w-10 text-blue-600"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8 8 8 0 01-8-8z"
                      />
                    </svg>
                    <p className="text-gray-700 font-medium">Uploading...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <svg
                      className="h-12 w-12 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 4v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m12-4v4m0 0l-3-3m3 3l3-3"
                      />
                    </svg>
                    <p className="text-gray-700 font-medium text-lg">Drag and drop an image here or click to upload</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Attempting to open upload widget');
                        if (open) open();
                      }}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 pointer-events-auto shadow-md transition-all duration-300"
                      disabled={isUploading}
                    >
                      Upload Image
                    </button>
                  </div>
                )}
              </div>
            )}
          </CldUploadWidget>
        </div>
        <div className="flex justify-center">
          <button
            onClick={openMediaLibrary}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-green-800 disabled:opacity-50 pointer-events-auto shadow-md transition-all duration-300"
            disabled={isUploading}
          >
            Open Media Library
          </button>
        </div>
        {uploadedImageUrl && (
          <div className="mt-6">
            <div className="relative group">
              <CldImage
                src={publicId}
                width={400}
                height={300}
                crop="fill"
                radius={20}
                alt="Uploaded Image"
                sizes="(max-width: 640px) 100vw, 400px"
                className="w-full h-auto object-cover aspect-[4/3] rounded-lg shadow-md transition-opacity duration-300 group-hover:opacity-80"
                onError={() => console.error('Uploaded image load error:', publicId)}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                Uploaded Image
              </div>
              <CldImage
                src={publicId}
                width={100}
                height={75}
                crop="thumb"
                alt="Thumbnail Preview"
                className="absolute top-2 right-2 rounded-md shadow-sm border border-gray-200"
              />
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={handleRemoveImage}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-red-800 pointer-events-auto shadow-md transition-all duration-300"
              >
                Remove Image
              </button>
            </div>
            <p className="mt-2 text-gray-600 text-center">
              Uploaded image with rounded corners and thumbnail preview.
            </p>
          </div>
        )}
      </section>

      {/* Video Player */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Optimized Video Delivery</h2>
        <div className="w-full max-w-full aspect-[16/9] overflow-hidden rounded-lg">
          <video
            width="960"
            height="540"
            controls
            className="w-full h-full rounded-lg"
            onError={() => {
              console.error('Static video load error');
              setError('Failed to load video. Please try again later.');
            }}
          >
            <source
              src="https://res.cloudinary.com/dg1jnl6yl/video/upload/v1/samples/cld-sample-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-2 text-gray-600">
          Delivers optimized video with adaptive bitrate streaming.
        </p>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10 pointer-events-auto"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl pointer-events-auto"
              onClick={closeLightbox}
            >
              x
            </button>
            <CldImage
              src={selectedImage.publicId}
              width={1200}
              height={800}
              crop="fit"
              alt="Selected Image"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              pixelate={usePixelate}
              grayscale={useGrayscale}
              sepia={useSepia}
              vectorize={useVectorize}
              cartoonify={useCartoonify}
              contrast={contrastValue.toString()}
            />
            <p className="text-white text-center mt-2">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}