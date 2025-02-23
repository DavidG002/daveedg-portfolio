// src/components/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  cardImageUrl?: string;
  isLibPly?: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, cardImageUrl, isLibPly, onClick }) => {
  const libPlyGradient = {
    background: `linear-gradient(135deg, 
      rgba(255, 229, 208, 1) 0%, 
      rgba(247, 76, 6, 0.58) 50%, 
      rgba(249, 188, 44, 1) 100%)`,
  };

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden shadow-lg ${isLibPly ? "text-white" : "bg-gray-800"} cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={isLibPly ? libPlyGradient : {}}
      onClick={onClick}
    >
      <div className="relative w-full h-[320px] flex flex-col justify-center items-center">
        {cardImageUrl ? (
          <>
            <Image
              src={cardImageUrl}
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
        ) : (
          <>
            <Image
              src="/Projects/clickhouse_place.png" // Fallback
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
  );
};

export default ProjectCard;