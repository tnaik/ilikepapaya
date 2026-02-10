import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpenText } from "lucide-react"
import { CircleArrowRight } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Mail } from "lucide-react"
import { BackToTop } from "@/components/bring-to-top"
import { SkillsTabs } from "@/components/skills-tabs"
import { CalendlyButton } from "@/components/calendly-button"
import { CollapsibleGallery } from "@/components/collapsible-gallery"
import { transform } from "next/dist/build/swc/generated-native"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full">
      {/* Main Content */}
      <div className="flex-1 bg-[#fafafa] overflow-y-auto overscroll-none">

        {/* About Section */}
        <section id="about" className="p-4 md:p-8 bg-[#ffffff]">
          <div className="flex flex-col items-left gap-8">
            <div className="w-32 sm:w-36 md:w-40 h-auto mb-4">
              <Image
                src="/assets/tanisha_upd.jpeg"
                width={200}
                height={200}
                alt="Profile"
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="w:full">
              <h2 className="text-xl sm:text-2xl font-medium mb-4 text-[#464646]">Product Designer, Creative Technologist</h2>
              <div className="">
              <p className="mb-4 text-[#7f7f7f]">
              Based in Southern California. Passionate about bridging creative & technical skills to craft intentional digital experiences.
              <br></br>Lifelong learner, expanding my toolkit to shape tomorrow’s design solutions. 
              </p>
              <p className="mb-4 text-[#7f7f7f]">
                I currently design at AiFA Labs for AI systems in enterprise. Previously, I worked in TV & Radio from producing social content to making creative code for live music events. 
                Studied computer science at Cal State Fullerton. Hosted workshops & designathons to encourage students in art, design, & code. 
                Recently finished a project designing for an AI research tool in civic tech. 
              </p>
              <p className="text-[#7f7f7f] mb-4">Let's chat about building meaningful digital experiences.</p>
              <div className="flex flex-row flex-wrap gap-2">
                {/* New Open to Projects Button */}
                <CalendlyButton />
              </div>
              </div>
              <h2 className="text-2xl font-medium mt-6 text-[#464646]">Skills</h2>
              <SkillsTabs />
            </div>
          </div>
        </section>

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

        {/* Projects Section */}
        <section id="projects" className="bg-[#ffffff]">
        <h2 className="text-2xl font-medium text-[#464646] pb-4 px-4 md:px-8">Projects</h2>

        {/* Infilla */}
        <section id="infilla" className="px-4 md:px-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl md:text-2xl text-[#464646]">01 INFILLA</h3>
              <a href="https://www.infilla.com" target="_blank" rel="noopener noreferrer" aria-label="Infilla website">
              <CircleArrowRight size={20} color="#464646" strokeWidth={3} />
              </a>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
            Civic tech research project redesigning AI-enhanced search for Infilla Forum, a Q&A platform used by city planners in NYC and SF.
            <br></br>Led research and ideation for a 13-week project with Infilla, helping planners find zoning answers faster by using AI to surface regulatory information.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#4ecdc4] text-[#252422] hover:bg-[#4ecdc4]/80">User Research</Badge>
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#a78bfa] text-[#252422] hover:bg-[#a78bfa]/80">Ideation</Badge>
              <Badge className="bg-[#ff9f6d] text-[#252422] hover:bg-[#ff9f6d]/80">Prototyping</Badge>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/assets/infilla/thumbnail.png"
                width={1000}
                height={500}
                alt="Infilla Thumbnail"
                className="object-contain max-h-[500px] sm:max-h-[350px] md:max-h-[400px] w-auto hover:scale-105 transition-transform duration-300"
                quality={85}
                sizes="(max-width: 768px) 100vw, 1000px"
              />
              <video
                src="/assets/infilla/Infilla%20-%20Side%20Panel%20(edited).mp4"
                autoPlay
                loop
                muted
                controls
                className="object-contain max-h-[250px] sm:max-h-[350px] md:max-h-[400px] w-auto rounded-sm hover:scale-105 transition-transform duration-300"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <video
                src="/assets/infilla/Infilla%20-%20Suggested%20Filters%20(Edited).mp4"
                controls
                autoPlay
                loop
                muted
                className="object-cover max-h-[250px] sm:max-h-[350px] md:max-h-[400px] w-auto rounded-sm hover:scale-105 transition-transform duration-300"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Case Study Button */}
            <Link href="/case-studies/infilla">
              <Button variant="outline" className="mb-4 text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
                <h3 className="text-xl">Case Study</h3>
                <BookOpen size={18} strokeWidth={2.5}/>
              </Button>
            </Link>
          </div>
          </section>

          {/* Titan Radio Project */}
          <section id="titan-radio" className="px-4 md:px-8 bg-[#ffffff]">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl md:text-2xl text-[#464646]">02 TITAN RADIO<sup>(WIP)</sup></h3>
              <a href="https://titanradio.org" target="_blank" rel="noopener noreferrer" aria-label="Titan Radio website">
              <CircleArrowRight size={20} color="#464646" strokeWidth={3} />
              </a>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
            College radio website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS.
            <br></br>Along with graphics for concerts/shows, using Mixed Media & Creative Coding.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#5db3f1] text-[#252422] hover:bg-[#5db3f1]/80">Wordpress</Badge>
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#a5b941] text-[#252422] hover:bg-[#a5b941]/80">Web Development</Badge>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/assets/TR/TR1.png"
                width={1000}
                height={500}
                alt="Titan Radio project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
                quality={85}
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          </div>
          </section>

          {/* Titan Universe Project */}
          <section id="titan-universe" className="p-4 md:p-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl md:text-2xl text-[#464646]">03 TITAN UNIVERSE</h3>
              <a href="https://titanuniverse.org" target="_blank" rel="noopener noreferrer" aria-label="Titan Universe website">
              <CircleArrowRight size={20} color="#464646" strokeWidth={3} />
              </a>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
            College blog website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS.
            <br></br>Along with social media graphics for Instagram, built using Canva & Figma. 
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#5db3f1] text-[#252422] hover:bg-[#5db3f1]/80">Wordpress</Badge>
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#f56a6a] text-[#252422] hover:bg-[#f56a6a]/80">Digital Marketing</Badge>
              <Badge className="bg-[#a5b941] text-[#252422] hover:bg-[#a5b941]/80">Web Development</Badge>
              <Badge className="bg-[#FFDE7C] text-[#252422] hover:bg-[#ffde7c]/80">Social Media</Badge>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/assets/TU/TU1.png"
                width={1000}
                height={500}
                alt="Titan Universe project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/TU/TU2.png"
                width={1000}
                height={500}
                alt="Titan Universe project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Case Study Button */}
            <Link href="/case-studies/titan-universe">
            <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
              <h3 className="text-xl">Case Study</h3>
              <BookOpen size={18} strokeWidth={2.5}/>
            </Button>
          </Link>
          </div>
          </section>

          {/* ACM Project */}
          <section id="acm" className="p-4 md:p-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl md:text-2xl text-[#464646]">04 ACM — Associated Works</h3>
              <a href="https://acmcsuf.com" target="_blank" rel="noopener noreferrer" aria-label="Titan Universe website">
              <CircleArrowRight size={20} color="#464646" strokeWidth={3} />
              </a>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
              Creatively engineered & demonstrated concepts for the largest tech club at Cal State University, Fullerton. <br />
              Designed apps, flyers, websites, & graphics. Hosted several workshops related to Design & Technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#e5f2a5] text-[#252422] hover:bg-[#e5f2a5]/80">Graphic Design</Badge>
              <Badge className="bg-[#a5b941] text-[#252422] hover:bg-[#a5b941]/80">Web Development</Badge>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/assets/ACM/NW1.png"
                width={1000}
                height={500}
                alt="NatureWonders hero"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/ACM/vinyl.png"
                width={1000}
                height={500}
                alt="Vinyl E-commerce site"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/ACM/bisou 1.png"
                width={1000}
                height={500}
                alt="Bisou"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/ACM/NTI1.png"
                width={1000}
                height={500}
                alt="NovaTech header"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
                />
            </div>
            {/* Case Study Button */}
            <Link href="/case-studies/ACM">
            <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
              <h3 className="text-xl">Case Study</h3>
              <BookOpen size={18} strokeWidth={2.5}/>
            </Button>
            </Link>
          </div>
          </section>

          {/* MemoryBox Project */}
          <section id="memory-box" className="p-4 md:p-8 bg-[#ffffff]">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl md:text-2xl mb-2 text-[#464646]">05 MemoryBox</h3>
            <p className="text-sm text-[#7f7f7f] mb-4">
              Web project designed using Figma for Code&Crush Designathon (presented by CSUF Society of Women Engineers), placing 3rd. 
              <br />Reimagining means of preserving love, virtually. 
            </p>
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/assets/MemoryBox/Memorybox1.png"
                width={1000}
                height={500}
                alt="MemoryBox project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/MemoryBox/memorybox2.png"
                width={1000}
                height={500}
                alt="MemoryBox project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Case Study Button */}
            <Link href="/case-studies/memory-box">
            <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
              <h3 className="text-xl">Case Study</h3>
              <BookOpen size={18} strokeWidth={2.5}/>
            </Button>
          </Link>
          </div>
          </section>

          <section id="BlogIt" className="p-4 md:p-8 bg-[#ffffff]">
          <div className="mt-2">
            <h3 className="text-xl sm:text-2xl md:text-2xl mb-2 text-[#464646]">06 BlogIt!</h3>
            <p className="text-sm text-[#7f7f7f] mb-4">
              Web app designed using Figma for Software Engineering (CPSC362). 
              <br />Reinventing blogging platforms for the new age. 
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#a5b941] text-[#252422] hover:bg-[#a5b941]/80">Web Development</Badge>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/assets/BlogIt/BlogIt1.png"
                width={1000}
                height={500}
                alt="BlogIt project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/BlogIt/BlogIt2.png"
                width={1000}
                height={500}
                alt="BlogIt project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/BlogIt/BlogIt3.png"
                width={1000}
                height={500}
                alt="BlogIt project"
                className="object-cover w-full md:w-auto md:max-w-[1000px] h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          </section>

          <section id="coming-soon" className="p-4 md:p-8 bg-[#ffffff]">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl md:text-2xl mb-2 text-[#464646]">Coming soon</h3>
            <p className="text-sm text-[#7f7f7f]">Designing, tinkering, creating more projects...</p>
          </div>
          </section>
        </section>
        <BackToTop />
      </div>
    </div>
  )
}
