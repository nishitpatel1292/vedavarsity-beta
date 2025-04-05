"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Connect with devotees",
    subtitle: "STUDY THE BHAGAVAD-GITA WITH GUIDANCE",
    image: "/hero_banner.jpg",
    buttonText: "VIEW COURSES",
    buttonLink: "/courses",
  },
  {
    id: 2,
    title: "Learn from senior vaishnavas",
    subtitle: "DEEPEN YOUR SPIRITUAL UNDERSTANDING",
    image: "/hero_banner.jpg",
    buttonText: "EXPLORE PROGRAMS",
    buttonLink: "/programs",
  },
  {
    id: 3,
    title: "Awaken your spiritual potential",
    subtitle: "BECOME PART OF THE ISKCON FAMILY",
    image: "/hero_banner.jpg",
    buttonText: "GET STARTED",
    buttonLink: "/register",
  },
]


export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[100vh] md:h-[600px] lg:h-[100vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-20 md:mt-10 flex h-full items-center justify-center text-center">
            <div className="md:max-w-5xl px-4">
              <h3 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white mb-2 capitalize">{slide.title}</h3>
              <h2 className="text-sm md:text-normal lg:text-md font-bold text-[#8BFF00] mb-6">{slide.subtitle}</h2>
              <Link
                href={slide.buttonLink}
                className="inline-block border-2 border-white hover:border-[#003580] hover:bg-[#003580] text-white font-medium py-2 px-4 md:py-3 md:px-8 transition-colors duration-300"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 z-30 -translate-y-1/2 text-white hover:text-black bg-white/20 hover:bg-white p-6 rounded-sm transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-12 w-12  font-thin" strokeWidth={1}/>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 z-30 -translate-y-1/2 text-white hover:text-black bg-white/20 hover:bg-white p-6 rounded-sm transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-12 w-12  font-thin" strokeWidth={1} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

