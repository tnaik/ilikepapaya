import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpenText } from "lucide-react"
import { Mail } from "lucide-react"
import { BackToTop } from "@/components/bring-to-top"
import { transform } from "next/dist/build/swc/generated-native"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full">
      {/* Main Content */}
      <div className="flex-1 bg-[#fafafa] overflow-y-auto overscroll-none">

        {/* About Section */}
        <section id="about" className="p-8 bg-[#ffffff]">
          <div className="flex flex-col items-left gap-8">
            <div className="w-40 h-auto mb-4">
              <Image
                src="/assets/tanisha_upd.jpeg?height=200&width=200"
                width={200}
                height={200}
                alt="Profile"
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="w:full">
              <h2 className="text-3xl font-medium mb-4 text-[#464646]">About</h2>
              <p className="mb-4 text-[#7f7f7f]">
                Passionate about bridging creative & technical skills to craft thoughtful digital experiences. An avid
                learner, constantly expanding my toolkit to shape tomorrow's design solutions.
              </p>
              <p className="mb-4 text-[#7f7f7f]">
                Currently looking for freelance projects for empathetic & creative digital spaces. 
              </p>
              <p className="text-[#7f7f7f]">Aside from design — I enjoy rock climbing, taking photos, & swimming!</p>

              <h2 className="text-3xl font-medium mt-8 mb-4 text-[#464646]">Skills</h2>
                <div className="grid grid-cols-3 md:grid-cols-3 mt-6 justify-stretch">
                  <p className="text-[#7f7f7f]">
                    <span className="font-medium text-[#7f7f7f]">Design:<br></br></span> Figma, Adobe Creative Cloud (Premiere Pro,
                    Illustrator, Photoshop, InDesign)
                  </p>
                  <p className="text-[#7f7f7f]">
                    <span className="font-medium text-[#7f7f7f]">Development:<br></br></span> HTML/CSS/JS, React, Next.js, TailwindCSS, Wordpress
                  </p>
                  <p className="text-[#7f7f7f]">
                    <span className="font-medium text-[#7f7f7f]">Skillsets:<br></br></span> Video Editing, Photography, Digital
                    Marketing, SEO Analytics
                  </p>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-4 gap-1 mt-6">
                <Image
                  src="/assets/peopleonpismo.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="People on Pismo Beach"
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/assets/centralpark.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Central Park, New York City"
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/assets/band.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Band & Crowd for Girls Just Wanna Have Punk show"
                  className="object-cover w-full h-full"
                />
                <Image
                  src="/assets/pismo.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Pismo Beach during Sunset"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="p-8 bg-white">
          <h2 className="text-3xl font-medium mb-6 text-[#464646]">Work</h2>
          <div className="space-y-4">
            <div>
              <p className="text-[#7f7f7f]">Product designer building intuitive solutions @ <u>AIFA Labs</u>.</p>
            </div>
            <div>
              <p className="text-[#7f7f7f] mb-4">Open for freelance projects, from branding, interface design, even marketing assets!</p>
              <a
                  href="mailto:tanishapnaik@gmail.com?subject=Interested%20in%20your%20work...&body=Let's%20Connect!"
                  aria-label="Link to email draft"
              >
              <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
              Contact
              <Mail className="h-4 w-4" />
              </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-[#ffffff]">
        <h2 className="text-3xl font-medium text-[#464646] pt-8 pl-8 pr-8">Projects</h2>

          {/* Titan Radio Project */}
          <section id="titan-radio" className="p-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl text-[#464646]">TITAN RADIO<sup>(WIP)</sup></h3>
              <a href="https://titanradio.org" target="_blank" rel="noopener noreferrer" aria-label="Titan Radio website">
              <Image
                src="/assets/new_window.svg"
                width={20}
                height={20}
                alt="New window"
                className="rounded-sm object-cover"
              />
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
                src="/assets/TR/TR1.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="Titan Radio project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          </section>

          {/* Titan Universe Project */}
          <section id="titan-universe" className="p-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl text-[#464646]">TITAN UNIVERSE</h3>
              <a href="https://titanuniverse.org" target="_blank" rel="noopener noreferrer" aria-label="Titan Universe website">
              <Image
                src="/assets/new_window.svg"
                width={20}
                height={20}
                alt="New window"
                className="rounded-sm object-cover"
              />
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
                src="/assets/TU/TU1.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="Titan Universe project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/TU/TU2.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="Titan Universe project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Case Study Button */}
            <Link href="/case-studies/titan-universe">
            <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
              See Case Study
              <BookOpenText className="h-4 w-4" />
            </Button>
          </Link>
          </div>
          </section>

          {/* ACM Project */}
          <section id="acm" className="p-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl text-[#464646]">ACM — Associated Works</h3>
              <a href="https://acmcsuf.com" target="_blank" rel="noopener noreferrer" aria-label="Titan Universe website">
              <Image
                src="/assets/new_window.svg"
                width={20}
                height={20}
                alt="New window"
                className="rounded-none object-cover w-full h-full"
              />
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
                src="/assets/ACM/NW1.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="NatureWonders hero"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/ACM/vinyl.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="Vinyl E-commerce site"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/ACM/bisou 1.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="Bisou"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/ACM/NTI1.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="NovaTech header"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"              
                />
            </div>
            {/* Case Study Button */}
            <Link href="/case-studies/ACM">
            <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
              See Case Study
              <BookOpenText className="h-4 w-4" />
            </Button>
            </Link>
          </div>
          </section>

          {/* MemoryBox Project */}
          <section id="memory-box" className="p-8 bg-[#ffffff]">
          <div className="mb-8">
            <h3 className="text-2xl mb-2 text-[#464646]">MemoryBox</h3>
            <p className="text-sm text-[#7f7f7f] mb-4">
              Web project designed using Figma for Code&Crush Designathon (presented by CSUF Society of Women Engineers), placing 3rd. 
              <br />Reimagining means of preserving love, virtually. 
            </p>
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/assets/MemoryBox/Memorybox1.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="MemoryBox project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/MemoryBox/memorybox2.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="MemoryBox project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Case Study Button */}
            <Link href="/case-studies/memory-box">
            <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white] gap-2">
              See Case Study
              <BookOpenText className="h-4 w-4" />
            </Button>
          </Link>
          </div>
          </section>

          <section id="BlogIt" className="p-8 bg-[#ffffff]">
          <div className="mt-2">
            <h3 className="text-2xl mb-2 text-[#464646]">BlogIt!</h3>
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
                src="/assets/BlogIt/BlogIt1.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="BlogIt project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/BlogIt/BlogIt2.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="BlogIt project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
              <Image
                src="/assets/BlogIt/BlogIt3.png?height=500&width=1000"
                width={1000}
                height={500}
                alt="BlogIt project"
                className="object-cover w-1000 h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          </section>

          <section id="coming-soon" className="p-8 bg-[#ffffff]">
          <div className="mt-2">
            <h3 className="text-2xl mb-2 text-[#464646]">Coming soon...</h3>
            <p className="text-sm text-[#7f7f7f]">Designing, tinkering, creating more projects...</p>
          </div>
          </section>
        </section>
        <BackToTop />
      </div>
    </div>
  )
}
