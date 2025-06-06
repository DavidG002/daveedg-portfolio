// src\components\ClientLayout.tsx
'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import StarsBackground from './StarsBackground';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isCloudinaryDemo = pathname === '/cloudinary-demo';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Stars (excluded for Cloudinary demo) */}
      {!isCloudinaryDemo && <StarsBackground />}

      {/* Sidebar & Main Content */}
      <div className={`relative z-10 flex min-h-screen ${isCloudinaryDemo ? 'bg-gray-100 text-gray-900' : 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="container mx-auto px-4 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}