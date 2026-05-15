"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
]

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeLabel, setActiveLabel] = useState("About")

  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120)
      setAtBottom(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        })
        const active = SECTIONS.filter(s => visible.has(s.id)).at(-1)
        if (active) setActiveLabel(active.label)
      },
      { rootMargin: "-5% 0px -45% 0px" }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-2 hover:bg-[#464646] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <ArrowUp size={12} strokeWidth={2.5} />
      <span>{atBottom ? "Jump to top" : activeLabel}</span>
    </button>
  )
}
