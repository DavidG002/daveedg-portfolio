// src\app\layout.tsx

import './global.css'
import { Inter } from 'next/font/google'
import ClientLayout from '../components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David Ghazy - My Portfolio',
  description: 'Portfolio and CV of David Ghazy',
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