import { BackToTop } from "@/components/bring-to-top"
import { CollapsibleGallery } from "@/components/collapsible-gallery"
import { ProjectsSection } from "@/components/projects-section"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex-1 min-w-0">
      {/* Main Content */}
      <div className="flex-1 bg-[#fafafa] overflow-y-auto">

        <HeroSection />

        {/* Work Section */}
        <section id="work" className="px-4 md:px-8 pb-8 bg-white">
          <h2 className="text-2xl font-medium mb-4 text-[#464646]">Featured work</h2>
          <CollapsibleGallery
            images={[
              { src: "/assets/TR/TRcode.mov", alt: "Creative Code Boiler Room Graphic for Titan Radio", link: "#titan-radio" },
              { src: "/assets/TU/shoot.jpeg", alt: "Featured content shoot for Titan Universe", link: "#titan-universe" },
              { src: "/assets/presentInfilla.jpg", alt: "Presenting Infilla Project in SF", link: "#infilla" },
              { src: "/assets/MemoryBox/memorybox2.png", alt: "Memorybox Mockup", link: "#memory-box" }
            ]}
          />
        </section>

        <ProjectsSection />
        <BackToTop />
      </div>
    </div>
  )
}
