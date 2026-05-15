"use client"

import Image from "next/image"
import { useState } from "react"
import { CalendlyButton } from "@/components/calendly-button"

const PHOTOS = [
  { src: "/assets/peopleonpismo.jpeg", alt: "People on Pismo", location: "Pismo Beach, CA" },
  { src: "/assets/band.jpeg",          alt: "Band",            location: "Punk Show" },
  { src: "/assets/sunsetstroll.jpeg",  alt: "Sunset stroll",   location: "Sunset Stroll" },
  { src: "/assets/centralpark.jpeg",   alt: "Central Park",    location: "Central Park, NYC" },
  { src: "/assets/tanisha_upd.jpeg",   alt: "Tanisha Naik",    location: "Me :D" },
]

// Desktop fan — spreads LEFT, stack sits on right
const FAN = [
  { r: -16, x: -300 },
  { r:  -8, x: -220 },
  { r:   0, x: -120 },
  { r:   8, x:  -60 },
  { r:  16, x:   40 },
]

// Mobile fan — centered, compact to stay on screen
const MOBILE_FAN = [
  { r: -15, x: -104 },
  { r:  -7, x:  -52 },
  { r:   2, x:    0 },
  { r:   9, x:   52 },
  { r:  17, x:  104 },
]

const CARD_W        = 140
const MOBILE_CARD_W = 90

function PolaroidStack() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: CARD_W, height: 190 }}
    >
      {PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          className="absolute top-0 left-0 bg-white shadow-md p-1.5 pb-5 cursor-pointer"
          onMouseEnter={() => setActiveCard(i)}
          onMouseLeave={() => setActiveCard(null)}
          onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
          style={{
            width: CARD_W,
            willChange: "transform",
            transform: `translateX(${FAN[i].x}px) translateY(${activeCard === i ? -14 : 0}px) rotate(${FAN[i].r}deg) scale(${activeCard === i ? 1.04 : 1})`,
            transition: activeCard === i
              ? "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            zIndex: activeCard === i ? PHOTOS.length + 1 : i + 1,
          }}
        >
          <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={`${CARD_W}px`}
              priority={i === PHOTOS.length - 1}
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {activeCard !== null && (
        <div
          className="fixed pointer-events-none z-[100] bg-black text-white text-xs px-2 py-1 whitespace-nowrap"
          style={{ left: mousePos.x + 14, top: mousePos.y + 14 }}
        >
          {PHOTOS[activeCard].location}
        </div>
      )}
    </div>
  )
}

function MobilePolaroidFan() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  // card height: photo (90 * 4/3 = 120px) + 6px top pad + 20px bottom pad = 146px
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-full mt-4" style={{ height: 150 }}>
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.src}
            className="absolute bg-white shadow-md p-1.5 pb-5 cursor-pointer"
            style={{
              width: MOBILE_CARD_W,
              left: "50%",
              marginLeft: -MOBILE_CARD_W / 2,
              top: 0,
              willChange: "transform",
              transform: `translateX(${MOBILE_FAN[i].x}px) translateY(${activeCard === i ? -12 : 0}px) rotate(${MOBILE_FAN[i].r}deg) scale(${activeCard === i ? 1.05 : 1})`,
              transition: activeCard === i
                ? "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              zIndex: activeCard === i ? PHOTOS.length + 1 : i + 1,
            }}
            onClick={() => setActiveCard(activeCard === i ? null : i)}
          >
            <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={`${MOBILE_CARD_W}px`}
                priority={i === PHOTOS.length - 1}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#7f7f7f] text-center h-4">
        {activeCard !== null ? PHOTOS[activeCard].location : "Tap a photo"}
      </p>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="about" className="p-4 md:p-8 bg-white overflow-visible">

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-4">
        <h1
          className="leading-[0.9] text-[#464646]"
          style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(48px, 14vw, 72px)" }}
        >
          Tanisha Naik
        </h1>
        <p className="text-sm text-[#7f7f7f] leading-relaxed">
          Product designer & creative technologist, currently designing AI systems for enterprise at AiFA Labs.
        </p>
        <p className="text-sm text-[#7f7f7f] leading-relaxed">
          Interested in working in Media, Fashion, & Art.
        </p>
        <div className="w-fit">
          <CalendlyButton />
        </div>
        <MobilePolaroidFan />
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-start mr-8 gap-16">
        <div className="flex flex-col gap-4">
          <h1
            className="leading-[0.9] text-[#464646]"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(48px, 9vw, 88px)" }}
          >
            Tanisha Naik
          </h1>
          <p className="text-sm text-[#7f7f7f] leading-relaxed max-w-lg">
            Product designer & creative technologist, currently designing AI systems for enterprise at AiFA Labs. I help product teams move from ideas to intentional, interactive experiences through design and code.
          </p>
          <p className="text-sm text-[#7f7f7f] leading-relaxed max-w-lg">
            Interested in working in Media, Fashion, & Art.
          </p>
          <div className="w-fit">
            <CalendlyButton />
          </div>
        </div>
        <div className="ml-auto mr-4 mt-4 flex-shrink-0">
          <PolaroidStack />
        </div>
      </div>

    </section>
  )
}
