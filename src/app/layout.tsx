// src\app\layout.tsx

import './global.css'
import { Inter } from 'next/font/google'
import ClientLayout from '../components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Portfolio and CV of John Doe, Full Stack Developer and UI/UX Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}