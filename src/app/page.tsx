'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import CVSection from '../components/CVSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            John Doe
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Developer | UI/UX Enthusiast
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
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
        <p className="text-xl mb-4">Email: john.doe@example.com</p>
        <p className="text-xl mb-4">LinkedIn: linkedin.com/in/johndoe</p>
        <p className="text-xl">GitHub: github.com/johndoe</p>
      </section>
    </>
  )
}