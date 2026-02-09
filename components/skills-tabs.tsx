"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

type SkillCategory = 'design' | 'development' | 'skillsets'

interface SkillsData {
  design: string[]
  development: string[]
  skillsets: string[]
}

export function SkillsTabs() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('design')

  const skillsData: SkillsData = {
    design: [
      'Figma',
      'Adobe Premiere Pro',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe InDesign', 
      'Prototyping'
    ],
    development: [
      'HTML/CSS/JS',
      'React',
      'Next.js',
      'TailwindCSS',
      'Wordpress', 
      'v0', 
      'Claude Code',
    ],
    skillsets: [
      'Video Editing',
      'Photography',
      'Digital Marketing',
      'SEO Analytics',
      'Social Media'
    ]
  }

  const categoryConfig: Record<SkillCategory, { color: string; label: string }> = {
    design: { color: '#f256dc', label: 'Design' },
    development: { color: '#a5b941', label: 'Development' },
    skillsets: { color: '#5db3f1', label: 'Skillsets' }
  }

  return (
    <div className="mt-4">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(categoryConfig) as SkillCategory[]).map((category) => {
          const isActive = activeTab === category
          const { color, label } = categoryConfig[category]

          return (
            <Badge
              key={category}
              onClick={() => setActiveTab(category)}
              style={{
                backgroundColor: isActive ? color : `${color}90`,
                color: isActive ? '#252422' : '#7f7f7f',
                cursor: isActive ? 'default' : 'pointer',
                '--tw-ring-color': color,
              } as React.CSSProperties}
              className={`
                transition-all duration-150
                ${isActive ? 'ring-2 ring-offset-2' : 'hover:opacity-80'}
              `}
            >
              {label}
            </Badge>
          )
        })}
      </div>

      {/* Skills Content */}
      <div className="transition-opacity duration-300 ease-in-out">
        <div className="flex flex-wrap gap-2">
          {skillsData[activeTab].map((skill, index) => (
            <Badge
              key={index}
              className="bg-[#FAFAFA] text-[#464646] hover:bg-[#FAFAFA]/80 border border-[#d9d9d9 to-40%] cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
