// src\components\ProjectCard.tsx

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl?: string
  isLibPly?: boolean
  githubUrl?: string
  docsUrl?: string
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  isLibPly,
  githubUrl = "https://github.com/DavidG002",
  docsUrl 
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const libPlyGradient = {
    background: `linear-gradient(135deg, 
      rgba(255, 229, 208, 1) 0%, 
      rgba(247, 76, 6, 0.58) 50%, 
      rgba(249, 188, 44, 1) 100%)`,
  }

  return (
    <motion.div
      className={`rounded-lg overflow-hidden shadow-lg ${isLibPly ? "text-white" : "bg-gray-800"}`}
      initial={{ opacity: 1 }}
      whileHover={!isExpanded ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      style={isLibPly ? libPlyGradient : {}}
    >
      {/* Header - Clickable to Expand */}
      <div
        className="w-full h-[200px] flex items-center cursor-pointer p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {imageUrl ? (
          <div className="flex items-center w-full">
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image src={imageUrl} alt={title} fill className="object-cover rounded-md" />
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          </div>
        ) : (
          isLibPly ? (
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F74C06] to-[#F74C06]">Lib</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F9BC2C] to-[#F9BC2C]">Ply</span>
              </span>
              <h3 className="text-2xl font-semibold mt-4 text-black">{title}</h3>
              <p className="text-sm text-white mt-2">{description}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-300 mt-2">{description}</p>
            </div>
          )
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-6 ${isLibPly ? 'text-black' : 'bg-gray-700 text-white'}`}
            style={isLibPly ? libPlyGradient : {}}
          >
            <h4 className="text-xl font-semibold mb-4">Project Details</h4>
            <p className="mb-6 text-base leading-relaxed">{description}</p>
            <div className="flex flex-col gap-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${isLibPly ? 'text-blue-600' : 'text-blue-400'}`}
                >
                  View on GitHub
                </a>
              )}
              {docsUrl && (
                <a
                  href={docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${isLibPly ? 'text-blue-600' : 'text-blue-400'}`}
                >
                  Documentation
                </a>
              )}
            </div>
            <p className="mt-6 text-sm italic">
              {isLibPly 
                ? "Built with cutting-edge AI playlist generation."
                : "A cool project with awesome features."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}