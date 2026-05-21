"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const SKILLS: Record<string, string[]> = {
  Design:      ["Figma", "Adobe Premiere Pro", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Prototyping"],
  Development: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "React", "Next.js", "Claude"],
  Skillsets:   ["Video Editing", "Photography", "Digital Marketing", "SEO Analytics", "Social Media"],
}

const TAB_COLOR: Record<string, { bg: string; ring: string }> = {
  Design:      { bg: "#f256dc", ring: "#f256dc" },
  Development: { bg: "#a5b941", ring: "#a5b941" },
  Skillsets:   { bg: "#5db3f1", ring: "#5db3f1" },
}

const EXPERIENCE = [
  {
    role: "Cognitive Product Designer",
    company: "AiFA Labs",
    date: "2023 – Present",
    description: "Designing interfaces across a 17+ AI product suite — chatbots, dashboards, and document editors — while contributing to a shared component library and collaborating with PMs and engineers end-to-end.",
  },
  {
    role: "Product Design Intern, Ideation Lead",
    company: "Infilla",
    date: "Oct 2025 – Feb 2026",
    description: "Led ideation and design for a multi-source AI search interface for city planners, applying explainable AI principles to surface citation-backed results and reduce cognitive load in civic decision-making.",
  },
  {
    role: "Webmaster",
    company: "Titan Radio",
    date: "2023 – 2025",
    description: "Designed and maintained the web experience for 120+ DJs and 2,000+ monthly visitors, building custom WordPress themes and plugins with WCAG 2.1 AA accessibility compliance.",
  },
  {
    role: "Digital Content Coordinator & Chief Website Editor",
    company: "Titan Universe",
    date: "2023 – 2024",
    description: "Shaped digital content strategy and web presence for student-produced media, growing social engagement by 40%+ through data-informed publishing and consistent brand voice.",
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Design")

  return (
    <div className="w-full bg-white px-4 py-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link href="/">
          <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Hero */}
        <section className="pb-12">
          <div className="bg-white shadow-md p-2 pb-8 mb-8" style={{ width: 200 }}>
            <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/assets/tanisha_upd.jpeg"
                alt="Tanisha Naik"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1
            className="leading-none text-[#464646]"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(56px, 10vw, 100px)" }}
          >
            Tanisha Naik
          </h1>
          <p className="text-sm text-[#aaaaaa] mt-1 tracking-wide">
            Product Designer &amp; Creative Technologist
          </p>

          <div className="w-8 h-px bg-[#e8e8e8] my-6" />

          <p className="text-sm text-[#7f7f7f] leading-relaxed mb-4">
            Based in Southern California. Passionate about bridging creative &amp; technical skills to craft intentional digital experiences. Lifelong learner, expanding my toolkit to shape tomorrow&apos;s design solutions.
          </p>
          <p className="text-sm text-[#7f7f7f] leading-relaxed mb-4">
            I currently design at AiFA Labs for AI systems in enterprise. Previously, I worked in TV &amp; Radio — from producing social content to making creative code for live music events. Studied computer science at Cal State Fullerton. Hosted workshops &amp; designathons to encourage students in art, design, &amp; code. Recently finished a project designing for an AI research tool in civic tech.
          </p>
          <p className="text-sm font-medium text-[#464646] mb-6">
            Let&apos;s chat about building meaningful digital experiences.
          </p>

          <div className="flex flex-row gap-2 flex-wrap">
            <a href="https://drive.google.com/file/d/11GP1chV1n9Q8DssKWrSvD3_Ej_q1IgTU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Badge className="gap-1 px-3 py-1.5 font-medium bg-[#42C97E] text-[#252422] hover:bg-[#42C97E]/80 rounded-full">
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 rotate-45">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                </svg>
              </Badge>
            </a>
            <a href="mailto:tanishapnaik@gmail.com?subject=Interested%20in%20your%20work...&body=Let's%20Connect!">
              <Badge className="gap-1 px-3 py-1.5 bg-[#F7DD43] text-[#252422] hover:bg-[#F7DD43]/80 rounded-full">
                Email
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </Badge>
            </a>
            <a href="https://www.linkedin.com/in/tanishanaik/" target="_blank" rel="noopener noreferrer">
              <Badge className="gap-1 px-3 py-1.5 bg-[#FF82E0] text-[#252422] hover:bg-[#FF82E0]/80 rounded-full">
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" className="size-4">
                  <g fill="#320e3b" fillRule="nonzero">
                    <g transform="scale(4,4)">
                      <path d="M40.227,12c10.918,0 11.773,0.854 11.773,11.773v16.453c0,10.919 -0.855,11.774 -11.773,11.774h-16.454c-10.918,0 -11.773,-0.855 -11.773,-11.773v-16.454c0,-10.919 0.855,-11.773 11.773,-11.773zM25.029,43v-16.272h-5.057v16.272zM22.501,24.401c1.625,0 2.947,-1.322 2.947,-2.949c0,-1.625 -1.322,-2.947 -2.947,-2.947c-1.629,0 -2.949,1.32 -2.949,2.947c0,1.627 1.318,2.949 2.949,2.949zM44,43v-8.925c0,-4.382 -0.946,-7.752 -6.067,-7.752c-2.46,0 -4.109,1.349 -4.785,2.628h-0.068v-2.223h-4.851v16.272h5.054v-8.05c0,-2.122 0.405,-4.178 3.036,-4.178c2.594,0 2.628,2.427 2.628,4.315v7.913z" />
                    </g>
                  </g>
                </svg>
              </Badge>
            </a>
          </div>
        </section>

        <div className="border-t border-[#f0f0f0]" />

        {/* Skills */}
        <section className="py-12">
          <h2
            className="text-[#464646] mb-6"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Skills
          </h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(SKILLS).map((tab) => {
              const isActive = activeTab === tab
              const { bg, ring } = TAB_COLOR[tab]
              return (
                <div
                  key={tab}
                  onClick={() => !isActive && setActiveTab(tab)}
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "ring-2 ring-offset-2 text-[#252422]"
                      : "hover:opacity-80 text-[#7f7f7f] cursor-pointer"
                  }`}
                  style={{
                    backgroundColor: isActive ? bg : `${bg}90`,
                    cursor: isActive ? "default" : "pointer",
                    ["--tw-ring-color" as string]: ring,
                  }}
                >
                  {tab}
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            {SKILLS[activeTab].map((skill) => (
              <div
                key={skill}
                className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-[#FAFAFA] text-[#464646] border border-[#d9d9d9] cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#f0f0f0]" />

        {/* Experience */}
        <section className="py-12">
          <h2
            className="text-[#464646] mb-8"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Experience
          </h2>

          <div>
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="grid grid-cols-[40px_1fr] gap-2 py-8 border-b border-[#f0f0f0] last:border-b-0 last:pb-0 first:pt-0">
                <span
                  className="text-2xl font-medium text-[#d9d9d9] leading-none mt-0.5"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-2xl font-medium text-[#464646]">{job.company}</h3>
                    <span className="text-xs text-[#aaaaaa] whitespace-nowrap">{job.date}</span>
                  </div>
                  <p className="text-xs text-[#aaaaaa] mb-3">{job.role}</p>
                  <p className="text-sm text-[#7f7f7f] leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[#f0f0f0]" />

        {/* Education */}
        <section className="py-12">
          <h2
            className="text-[#464646] mb-6"
            style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(28px, 5vw, 42px)" }}
          >
            Education
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 md:gap-12">
              <div>
                <h3 className="text-sm font-semibold text-[#464646]">Pratt Institute</h3>
                <p className="text-xs text-[#aaaaaa]">M.S. Information Experience Design</p>
              </div>
              <p className="text-xs text-[#aaaaaa] md:text-right whitespace-nowrap">Present</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 md:gap-12">
              <div>
                <h3 className="text-sm font-semibold text-[#464646]">California State University, Fullerton</h3>
                <p className="text-xs text-[#aaaaaa]">B.S. Computer Science</p>
              </div>
              <p className="text-xs text-[#aaaaaa] md:text-right whitespace-nowrap">May 2025</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
