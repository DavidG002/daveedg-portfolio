import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl?: string
  isLibPly?: boolean
}

export default function ProjectCard({ title, description, imageUrl, isLibPly }: ProjectCardProps) {
  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden shadow-lg project-card ${isLibPly ? "text-white" : "bg-gray-800"}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={
        isLibPly
          ? {
              background: `linear-gradient(135deg, 
                rgba(255, 229, 208, 1) 0%, 
                rgba(247, 76, 6, 0.58) 50%, 
                rgba(249, 188, 44, 1) 100%)`,
            }
          : {}
      }
    >
      <div className="relative w-full h-[320px] flex flex-col justify-center items-center">
        {imageUrl ? (
          <>
            {/* Background Image */}
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="absolute inset-0 object-cover"
            />
            {/* Text Overlay (Title + Description) */}
            <div className="relative z-10 text-center bg-black/50 text-white p-4 rounded-md">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-sm mt-2">{description}</p>
            </div>
          </>
        ) : (
          isLibPly ? (
            <div className="text-center p-6">
              {/* LibPly Logo Text */}
              <span className="text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F74C06] to-[#F74C06]">
                  Lib
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F9BC2C] to-[#F9BC2C]">
                  Ply
                </span>
              </span>
              {/* Title: Black Color */}
              <h3 className="text-2xl font-semibold mt-4 text-black">{title}</h3>
              {/* Extra space if needed can be adjusted */}
              <p className="text-sm text-white mt-10">{description}</p>
            </div>
          ) : (
            // For projects without an image that are not LibPly, render a default layout or placeholder.
            <div className="text-center p-6">
              <h3 className="text-2xl font-semibold mt-4 text-black">{title}</h3>
              <p className="text-sm text-white mt-4">{description}</p>
            </div>
          )
        )}
      </div>
    </motion.div>
  )
}
