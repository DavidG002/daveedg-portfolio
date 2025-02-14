'use client'

import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import CVSection from "../components/CVSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
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
          <ProjectCard
            title="Project 1"
            description="A brief description of Project 1"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <ProjectCard
            title="Project 2"
            description="A brief description of Project 2"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
          <ProjectCard
            title="Project 3"
            description="A brief description of Project 3"
            imageUrl="/placeholder.svg?height=200&width=300"
          />
        </div>
      </section>

      {/* CV Section */}
      <section id="cv">
        <CVSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Get in Touch</h2>
        <p className="text-xl mb-4">
          Email:{" "}
          <a href="mailto:davidghazy@gmail.com" className="text-blue-400 hover:underline">
            davidghazy@gmail.com
          </a>
        </p>
        <p className="text-xl mb-4">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/davidghazy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/davidghazy
          </a>
        </p>
        <p className="text-xl mb-4">Tel: +972 52-801-6968 | US: +1 415-644-5102</p>
        <p className="text-xl">
          GitHub:{" "}
          <a
            href="https://github.com/DavidG002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            github.com/DavidG002
          </a>
        </p>
      </section>
    </main>
  )
}

