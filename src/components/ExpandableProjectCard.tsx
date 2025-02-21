// src\components\ExpandableProjectCard.tsx

'user client'

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ExpandableProjectCardProps {
  title: string
  description: string
  imageUrl?: string
  isLibPly?: boolean
  fullDescription: string
  links: { title: string; url: string }[]
}

const ExpandableProjectCard: React.FC<ExpandableProjectCardProps> = ({
  title,
  description,
  imageUrl,
  isLibPly,
  fullDescription,
  links,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const libPlyGradient = {
    background: `linear-gradient(135deg, 
      rgba(255, 229, 208, 1) 0%, 
      rgba(247, 76, 6, 0.58) 50%, 
      rgba(249, 188, 44, 1) 100%)`,
  }

  // Debug log to confirm image source
  console.log(`Card: ${title}, imageUrl: ${imageUrl}, isLibPly: ${isLibPly}, using: ${title === "Project 3" ? "/Projects/clickhouse_place.png" : imageUrl || "other"}`);

  return (
    <>
      {/* Card */}
      <motion.div
        className={`relative rounded-lg overflow-hidden shadow-lg project-card ${
          isLibPly ? "text-white" : "bg-gray-800"
        } cursor-pointer`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={isLibPly ? libPlyGradient : {}}
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative w-full h-[320px] flex flex-col justify-center items-center">
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="absolute inset-0 object-cover"
                quality={85}
                priority={true}
              />
              <div className="relative z-10 text-center bg-black/50 text-white p-4 rounded-md">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
              </div>
            </>
          ) : isLibPly ? (
            <div className="text-center p-6">
              <span className="text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F74C06] to-[#F74C06]">Lib</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F9BC2C] to-[#F9BC2C]">Ply</span>
              </span>
              <h3 className="text-2xl font-semibold mt-4 text-black">{title}</h3>
              <p className="text-sm text-white mt-10">{description}</p>
            </div>
          ) : title === "Project 3" ? (
            <>
              <Image
                src="/Projects/clickhouse_place.png" // Static PNG for Card 3
                alt="Project 3"
                fill
                className="absolute inset-0 object-cover"
                quality={85}
                priority={true}
              />
              <div className="relative z-10 text-center bg-black/50 text-white p-4 rounded-md">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
              </div>
            </>
          ) : (
            <>
              <Image
                src="/Projects/clickhouse_place.png" // Fallback static PNG
                alt="Placeholder"
                fill
                className="absolute inset-0 object-cover"
                quality={85}
                priority={true}
              />
              <div className="relative z-10 text-center bg-black/50 text-white p-4 rounded-md">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">{title}</h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X size={24} />
                </button>
              </div>
              {/* Image or Logo Section */}
              <div className="w-full h-64 rounded-lg mb-6 flex items-center justify-center">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-full object-contain rounded-lg"
                    quality={85}
                    priority={true}
                  />
                ) : isLibPly ? (
                  <div className="w-full h-full flex items-center justify-center rounded-lg" style={libPlyGradient}>
                    <span className="text-7xl font-bold">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F74C06] to-[#F74C06]">Lib</span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F9BC2C] to-[#F9BC2C]">Ply</span>
                    </span>
                  </div>
                ) : title === "Project 3" ? (
                  <Image
                    src="/Projects/ch-logo.gif" // Animated GIF for Card 3 popup
                    alt="Project 3"
                    width={600}
                    height={400}
                    className="w-full h-full object-contain rounded-lg"
                    quality={85}
                    unoptimized // Allows GIF animation
                  />
                ) : (
                  <Image
                    src="/Projects/ch-logo.gif" // Fallback animated GIF
                    alt="Placeholder"
                    width={600}
                    height={400}
                    className="w-full h-full object-contain rounded-lg"
                    quality={85}
                    unoptimized // Allows GIF animation
                  />
                )}
              </div>
              <p className="text-base leading-relaxed mb-6 text-gray-300">{fullDescription}</p>
              <div className="flex flex-wrap gap-3">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ExpandableProjectCard