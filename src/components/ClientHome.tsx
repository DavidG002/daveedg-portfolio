// src/components/ClientHome.tsx
"use client";

import React, { useState, useEffect } from "react"; // Added React import
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";

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
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); // Correct spelling
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const projects = [
    {
      title: "Music Library App",
      description: "Connect your music Library and create your own playlist with the help of Ai",
      cardImageUrl: undefined, // No image, uses LibPly styling
      popupImageUrl: undefined, // No image, uses LibPly styling
      isLibPly: true,
      fullDescription:
        "A powerful music library application that integrates with your existing music collection and uses AI to generate personalized playlists based on your listening habits and preferences.",
      links: [{ title: "GitHub", url: "https://github.com/LibPly" }],
    },
    {
      title: "Bazel MonoRepo",
      description: "Start-App",
      cardImageUrl: "/projects/monorepo.png",
      popupImageUrl: "/projects/monorepo.png", // Same as card for now
      isLibPly: false,
      fullDescription:
        "A monorepo setup using Bazel to manage multiple projects efficiently, with streamlined builds and deployments for a startup-focused application ecosystem.",
      links: [{ title: "GitHub", url: "https://github.com/DavidG002/" }],
    },
    {
      title: "ClickPulse",
      description: "real-time analytics",
      cardImageUrl: "/projects/clickhouse_place2.png",
      popupImageUrl: "/Projects/ch-logo.gif", // Animated GIF
      isLibPly: false,
      fullDescription:
        "An experimental project exploring new technologies and workflows to solve real-world problems. More details to come as it develops!",
      links: [
        { title: "Demo", url: "https://clickpulse.daveedg.com/api/analytics/grafana/" },
        { title: "GitHub", url: "https://github.com/DavidG002/ClickPulse" },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            David Ghazy
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              className="text-xl md:text-2xl text-gray-300 italic font-poetic"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 1.2, ease: "easeInOut" }
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 1.2, delay: 3, ease: "easeInOut" }
              }}
            >
              {quotes[currentQuoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <React.Fragment key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                cardImageUrl={project.cardImageUrl}
                isLibPly={project.isLibPly}
                onClick={() => setOpenPopup(project.title)}
              />
              <ProjectPopup
                isOpen={openPopup === project.title}
                onClose={() => setOpenPopup(null)}
                title={project.title}
                fullDescription={project.fullDescription}
                popupImageUrl={project.popupImageUrl}
                isLibPly={project.isLibPly}
                links={project.links}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}