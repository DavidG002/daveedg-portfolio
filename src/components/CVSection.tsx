"use client"

import type React from "react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const DynamicDetailedCV = dynamic(() => import("./DetailedCV"), { ssr: false })

const CVSection: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch("/api/check-auth")
      if (res.ok) {
        setIsAuthenticated(true)
      }
    }
    checkAuth()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  return (
    <section id="cv" className="py-20 px-4 md:px-20 bg-gray-800">
      {/* Title is always visible */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
        Course of Life - CV
      </h2>

      {isAuthenticated ? (
        // Authenticated: display the detailed CV content
        <DynamicDetailedCV />
      ) : (
        // Not authenticated: display the login form in a centered container
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-white">Enter Password to View CV</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-600 text-white rounded"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  )
}

export default CVSection
