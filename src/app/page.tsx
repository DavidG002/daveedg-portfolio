// src\app\page.tsx

import ClientHome from "../components/ClientHome"
import CVSection from "../components/CVSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <ClientHome />

      {/* CV Section */}
      <section id="cv" className="py-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My CV</h2>
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



