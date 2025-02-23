// src/components/ProjectPopup.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface ProjectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fullDescription: string;
  popupImageUrl?: string;
  isLibPly?: boolean;
  links: { title: string; url: string }[];
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ isOpen, onClose, title, fullDescription, popupImageUrl, isLibPly, links }) => {
  const libPlyGradient = {
    background: `linear-gradient(135deg, 
      rgba(255, 229, 208, 1) 0%, 
      rgba(247, 76, 6, 0.58) 50%, 
      rgba(249, 188, 44, 1) 100%)`,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
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
              <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
                <X size={24} />
              </button>
            </div>
            <div className="w-full h-64 rounded-lg mb-6 flex items-center justify-center">
              {popupImageUrl ? (
                <Image
                  src={popupImageUrl}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-full object-contain rounded-lg"
                  quality={85}
                  unoptimized={popupImageUrl.endsWith(".gif")} // Enable GIF animation
                />
              ) : isLibPly ? (
                <div className="w-full h-full flex items-center justify-center rounded-lg" style={libPlyGradient}>
                  <span className="text-7xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F74C06] to-[#F74C06]">Lib</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F9BC2C] to-[#F9BC2C]">Ply</span>
                  </span>
                </div>
              ) : (
                <Image
                  src="/Projects/ch-logo.gif" // Fallback
                  alt="Placeholder"
                  width={600}
                  height={400}
                  className="w-full h-full object-contain rounded-lg"
                  quality={85}
                  unoptimized // Enable GIF animation
                />
              )}
            </div>
            <p className="text-base leading-relaxed mb-6 text-gray-300">{fullDescription}</p>
            <div className="flex flex-wrap gap-3">
              {links.map((link, i) => (
                <a
                  key={i}
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
  );
};

export default ProjectPopup;