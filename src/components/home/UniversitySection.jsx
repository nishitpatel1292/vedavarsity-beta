"use client"

import { useState } from "react"
import { Calendar, Settings, GraduationCap, Presentation } from "lucide-react"
import SectionTitle from "../shared/SectionTitle"

export default function UniversitySection() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const cards = [
    {
      icon: Calendar,
      title: "Program",
      description: "The technical writing profession is continuously evolving as technical logitech...",
    },
    {
      icon: Settings,
      title: "Affordability",
      description: "We're committed to your success, and part of that is providing a quality...",
    },
    {
      icon: GraduationCap,
      title: "Certification",
      description: "Professional certificates add valuable credentials to a resume by showing logitech...",
    },
    {
      icon: Presentation,
      title: "Courses",
      description: "If you want the convenience of self-study, but still want to select course...",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <SectionTitle title={'WELCOME TO UNIVERSITY'}/>
        <p className="text-gray-600 max-w-3xl mx-auto">
          The Campus is an education platform that partners with top universities and organizations worldwide, to offer
          courses online for anyone to take.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 transition-all duration-300 h-full"
            style={{
              backgroundColor: hoveredCard === index ? "#6cc51d" : "white",
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="mb-4 p-3 rounded-full"
              style={{
                color: hoveredCard === index ? "white" : "#9ca3af",
              }}
            >
              <card.icon size={40} />
            </div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{
                color: hoveredCard === index ? "white" : "#0a3254",
              }}
            >
              {card.title}
            </h3>
            <p
              className="mb-6 flex-grow"
              style={{
                color: hoveredCard === index ? "white" : "#4b5563",
              }}
            >
              {card.description}
            </p>
            {/* <a
              href="#"
              className="uppercase font-bold text-sm tracking-wider mt-auto"
              style={{
                color: hoveredCard === index ? "white" : "#0a3254",
              }}
            >
              Learn More
            </a> */}
          </div>
        ))}
      </div>
    </section>
  )
}

