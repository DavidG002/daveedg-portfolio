"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"

export default function ClientHome() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            David Ghazy
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            B2B SaaS & Enterprise Sales | Open-Source Enthusiast | Tech Hobbiest | Dog Lover | Skateboarder
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ✅ LibPly (Takes full width on small screens, standard width on large screens) */}
          <div className="col-span-1 lg:col-span-1">
            <ProjectCard
              title="Music Library App"
              description="Connect your music Library and create your own playlist with the help of Ai"
              isLibPly={true}
            />
          </div>

          {/* ✅ Other Projects (Fit properly) */}
          <ProjectCard
            title="Bazel MonoRepo"
            description="Start-App"
            imageUrl="/projects/monorepo.png"
          />
          <ProjectCard
            title="Project 3"
            description="A brief description of Project 3"
           
          />
        </div>
      </section>
    </>
  )
}
