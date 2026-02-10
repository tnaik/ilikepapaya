"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

export function NavigationSidebar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  return (
    <>
      {/* Accordion-style Navigation for Mobile / Always visible for Desktop */}
      <div className="w-full md:w-80 bg-[#FAFAFA] border-b md:border-r border-[#d9d9d9] md:sticky md:top-0 md:h-screen">
        {/* Header - Always visible, clickable on mobile */}
        <button
          onClick={toggleNav}
          className="w-full p-8 flex items-start justify-between md:pointer-events-none md:cursor-default"
          aria-label="Toggle navigation menu"
          aria-expanded={isNavOpen}
        >
          <div>
            <div className="flex flex-row gap-2">
              <h1 className="text-2xl font-medium text-[#464646]">Tanisha Naik</h1>
            </div>
            <p className="text-sm text-left text-[#7f7f7f] mt-2">
              I help product teams move from ideas to intentional, interactive experiences through design and code.
            </p>
          </div>
          {/* Chevron icon - only visible on mobile */}
          <ChevronDown
            size={24}
            className={`text-[#464646] md:hidden transition-transform duration-300 ease-in-out flex-shrink-0 ml-4 ${
              isNavOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Expandable content - accordion on mobile, always visible on desktop */}
        <div className={`
          overflow-hidden transition-all duration-300 ease-in-out md:max-h-none md:opacity-100
          ${isNavOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100'}
        `}>
          <div className="px-8 pb-8">
            {/* Navbar */}
            <nav className="space-y-4">
          <Link href="/#about" className="block text-[#464646] hover:text-black" aria-label="Link to About section" onClick={closeNav}>
            About
          </Link>
          <Link href="/#work" className="block text-[#464646] hover:text-black" aria-label="Link to Work section" onClick={closeNav}>
            Work
          </Link>
          <Link
            href="/#projects"
            className="block text-[#464646] hover:text-black"
            aria-label="Link to Projects section"
            onClick={closeNav}
          >
            Projects
          </Link>
          <ul className="pl-2 space-y-1 text-sm text-[#7f7f7f]">
            <li>
              <Link href="/#projects" className="block hover:text-black" aria-label="Infilla" onClick={closeNav}>
                01 Infilla
              </Link>
            </li>

            <li>
              <Link href="/#titan-radio" className="block hover:text-black" aria-label="Titan Radio (WIP)" onClick={closeNav}>
                02 Titan Radio <sup>(WIP)</sup>
              </Link>
            </li>

            <li>
              <Link
                href="#titan-universe"
                className="block hover:text-black"
                aria-label="Titan Universe"
                onClick={closeNav}
              >
                03 Titan Universe
              </Link>
            </li>

            <li>
              <Link href="/#acm" className="block hover:text-black" aria-label="ACM (Associated Works)" onClick={closeNav}>
                04 ACM <sup>(Associated Works)</sup>
              </Link>
            </li>

            <li>
              <Link href="/#memory-box" className="block hover:text-black" aria-label="Link to MemoryBox section" onClick={closeNav}>
                05 MemoryBox
              </Link>
            </li>

            <li>
              <Link href="/#BlogIt" className="block hover:text-black" aria-label="Link to BlogIt section" onClick={closeNav}>
                06 BlogIt!
              </Link>
            </li>
          </ul>
            </nav>

            {/* Contact */}
            <p className="text-m mt-8 text-[#464646]">Contact</p>

        <div className="mt-2 flex flex-row gap-2">
          <a
            href="https://drive.google.com/file/d/1gLxHGeQLmNp7gsrbu3GMdWekpYgEYh5G/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to resume">
            <Badge className="gap-1 p-2 font-medium bg-[#42C97E] text-[#252422] hover:bg-[#42C97E]/80">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 rotate-45"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Badge>
          </a>

          <Badge className="gap-1 bg-[#F7DD43] text-[#252422] hover:bg-[#F7DD43]/80">
            <a
              href="mailto:tanishapnaik@gmail.com?subject=Interested%20in%20your%20work...&body=Let's%20Connect!"
              aria-label="Link to email draft"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </a>
          </Badge>

          <Badge className="gap-1 bg-[#FF82E0] text-[#252422] hover:bg-[#FF82E0]/80">
            <a
              href="https://www.linkedin.com/in/tanishanaik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
                className="size-5 sm:size-6"
              >
                <g
                  fill="#320e3b"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(4,4)">
                    <path d="M40.227,12c10.918,0 11.773,0.854 11.773,11.773v16.453c0,10.919 -0.855,11.774 -11.773,11.774h-16.454c-10.918,0 -11.773,-0.855 -11.773,-11.773v-16.454c0,-10.919 0.855,-11.773 11.773,-11.773zM25.029,43v-16.272h-5.057v16.272zM22.501,24.401c1.625,0 2.947,-1.322 2.947,-2.949c0,-1.625 -1.322,-2.947 -2.947,-2.947c-1.629,0 -2.949,1.32 -2.949,2.947c0,1.627 1.318,2.949 2.949,2.949zM44,43v-8.925c0,-4.382 -0.946,-7.752 -6.067,-7.752c-2.46,0 -4.109,1.349 -4.785,2.628h-0.068v-2.223h-4.851v16.272h5.054v-8.05c0,-2.122 0.405,-4.178 3.036,-4.178c2.594,0 2.628,2.427 2.628,4.315v7.913z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
