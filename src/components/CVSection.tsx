import type React from "react"
import DetailedCV from "./DetailedCV"

const CVSection: React.FC = () => {
  return (
    <section id="cv" className="py-20 px-4 md:px-20 bg-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Course of Life - CV </h2>
      <DetailedCV />
    </section>
  )
}

export default CVSection

