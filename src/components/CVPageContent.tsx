"use client"

import type React from "react"
import dynamic from "next/dynamic"

const DynamicCVSection = dynamic(() => import("./CVSection"), { ssr: false })

const CVPageContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <DynamicCVSection />
    </div>
  )
}

export default CVPageContent

