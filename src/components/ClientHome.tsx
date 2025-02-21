"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import ExpandableProjectCard from "./ExpandableProjectCard"

export default function ClientHome() {
  const quotes = [
    '"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt',
    '"Code is like humor. When you have to explain it, it’s bad." — Cory House',
    '"The only way to do great work is to love what you do." — Steve Jobs',
    '"Simplicity is the soul of efficiency." — Austin Freeman',
    '"The universe is a place where prickly people want to make everything straight, and gooey people want to let it flow." — Alan Watts',
    '"The steps of man are set by the Lord; how then can he grasp his own way?" — King David',
    '"The imagination is the golden pathway to everywhere." — Terence McKenna',
    '"The pendulum of the mind swings between sense and nonsense, not between right and wrong." — Carl Jung',
    '"If I am not for myself, who will be for me? If I am only for myself, what am I?" — Rabbi Hillel',
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8" // Increased margin-bottom from mb-4 to mb-8
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            David Ghazy
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              className="text-xl md:text-2xl text-gray-300 italic font-poetic" // Added custom poetic font class
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 1.2, ease: "easeInOut" } // Fade in over 1.2s
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 1.2, delay: 3, ease: "easeInOut" } // Hold 2.6s, then fade out 1.2s
              }}
            >
              {quotes[currentQuoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Section - Unchanged */}
      <section id="projects" className="py-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <ExpandableProjectCard
              title="Music Library App"
              description="Connect your music Library and create your own playlist with the help of Ai"
              isLibPly={true}
              fullDescription="A powerful music library application that integrates with your existing music collection and uses AI to generate personalized playlists based on your listening habits and preferences."
              links={[
                { title: "GitHub", url: "https://github.com/DavidG002/music-library-app" },
                { title: "Docs", url: "https://docs.musiclibraryapp.com" },
              ]}
            />
          </div>
          <ExpandableProjectCard
            title="Bazel MonoRepo"
            description="Start-App"
            imageUrl="/projects/monorepo.png"
            fullDescription="A monorepo setup using Bazel to manage multiple projects efficiently, with streamlined builds and deployments for a startup-focused application ecosystem."
            links={[
              { title: "GitHub", url: "https://github.com/DavidG002/bazel-monorepo" },
            ]}
          />
          <ExpandableProjectCard
            title="ClickPulse"
            description="real-time analytics"
            imageUrl="/projects/clickhouse_place.png"
            fullDescription="An experimental project exploring new technologies and workflows to solve real-world problems. More details to come as it develops!"
            links={[
              { title: "GitHub", url: "https://clickpulse.daveedg.com/api/analytics/grafana/" },
            ]}
          />
        </div>
      </section>
    </>
  )
}