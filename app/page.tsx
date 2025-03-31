import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "react-day-picker"
import { transform } from "next/dist/build/swc/generated-native"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen Instrument-Serif">

      {/* Sidebar Navigation */}
      <div className="w-full md:w-80 bg-[#FAFAFA] p-8 border-b md:border-r border-[#d9d9d9 to-40%] md:sticky md:top-0 md:h-screen relative">
        <div className="mb-8">
          <div className="flex flex-row gap-2">
          <h1 className="text-2xl font-medium text-[#464646]">Hello! I'm Tanisha</h1>
          <Image
                src="/assets/peace.svg"
                width={30}
                height={30}
                alt="Profile"
                className="rounded-sm object-cover"
              />
          </div>
          <p className="text-sm text-[#7f7f7f] mt-2">
            An aspiring creative technologist, imagining & crafting for digital experiences.
          </p>
        </div>

        {/* Navbar */}

        <nav className="space-y-4">
          <Link href="#about" className="block text-[#464646] hover:text-black" aria-label="Link to About section">
            About
          </Link>
          <Link href="#work" className="block text-[#464646] hover:text-black" aria-label="Link to Work section">
            Work
          </Link>
          <Link href="#projects" className="block text-[#464646] hover:text-black" aria-label="Link to Projects section">
            Projects
          </Link>

          <ul className="pl-2 space-y-1 text-sm text-[#7f7f7f]">
            <li>
              <Link href="#titan-radio" className="block hover:text-black" aria-label="Titan Radio (WIP)">
                • Titan Radio <sup>(WIP)</sup>
              </Link>
            </li>

            <li>
              <Link href="#titan-universe" className="block hover:text-black" aria-label="Titan Universe">
                • Titan Universe
              </Link>
            </li>

            <li>
              <Link href="#acm" className="block hover:text-black" aria-label="ACM (Associated Works)">
                • ACM <sup>(Associated Works)</sup>
              </Link>
            </li>

            <li>
              <Link href="#memory-box" className="block hover:text-black" aria-label="Link to MemoryBox section">
                • MemoryBox
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}

        <p className="text-m mt-8 text-[#464646]">Contact</p>

        <div className="mt-2 flex flex-row gap-2">

          <Badge className="gap-1 font-medium bg-[#4c956c] text-[#1b4332] hover:bg-[#4c956c]/80"> Resume
          <a href="https://drive.google.com/file/d/1NuSAJtLfGgDwauEFxVH1Y4_xS0yQ4oGY/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Link to resume">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 rotate-45">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
          </svg>
          </a>
          </Badge>

          <Badge className="gap-1 bg-[#F7DD43] text-[#a59132] hover:bg-[#F7DD43]/80">
          <a href="mailto:tanishapnaik@gmail.com?subject=Interested%20in%20your%20work...&body=Let's%20Connect!" aria-label="Link to email draft">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          </a>
          </Badge>

          <Badge className="gap-1 bg-[#AF5A9A] text-[#320e3b] hover:bg-[#AF5A9A]/80">
          <a href="https://www.linkedin.com/in/tanishanaik/" target="_blank" rel="noopener noreferrer" aria-label="Link to LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="size-6">
            <g fill="#320e3b" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(4,4)"><path d="M40.227,12c10.918,0 11.773,0.854 11.773,11.773v16.453c0,10.919 -0.855,11.774 -11.773,11.774h-16.454c-10.918,0 -11.773,-0.855 -11.773,-11.773v-16.454c0,-10.919 0.855,-11.773 11.773,-11.773zM25.029,43v-16.272h-5.057v16.272zM22.501,24.401c1.625,0 2.947,-1.322 2.947,-2.949c0,-1.625 -1.322,-2.947 -2.947,-2.947c-1.629,0 -2.949,1.32 -2.949,2.947c0,1.627 1.318,2.949 2.949,2.949zM44,43v-8.925c0,-4.382 -0.946,-7.752 -6.067,-7.752c-2.46,0 -4.109,1.349 -4.785,2.628h-0.068v-2.223h-4.851v16.272h5.054v-8.05c0,-2.122 0.405,-4.178 3.036,-4.178c2.594,0 2.628,2.427 2.628,4.315v7.913z"></path></g></g>
          </svg>
          </a>
          </Badge>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#fafafa] overflow-y-auto ">

        {/* About Section */}
        <section id="about" className="p-8 bg-[#ffffff]">
          <div className="flex flex-col items-left gap-8">
            <div className="w-40 h-auto mb-4">
              <Image
                src="/assets/tanisha.jpeg?height=200&width=200"
                width={200}
                height={200}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w:full">
              <h2 className="text-3xl font-medium mb-4 text-[#464646]">About</h2>
              <p className="mb-4 text-[#7f7f7f]">
                Passionate about bridging creative & technical skills to craft thoughtful digital experiences. An avid
                learner, constantly expanding my toolkit to shape tomorrow's design solutions.
              </p>
              <p className="mb-4 text-[#7f7f7f]">
                Senior Computer Science student at California State University, Fullerton.
              </p>
              <p className="text-[#7f7f7f]">Aside from design — I enjoy rock climbing, taking photos, and swimming!</p>

              <h2 className="text-3xl font-medium mt-8 mb-4 text-[#464646]">Skills</h2>
              <div className="space-y-2">
                <p className="text-[#7f7f7f]">
                  <span className="font-medium text-[#7f7f7f]">Design:</span> Figma, Adobe Creative Cloud (Premiere Pro,
                  Illustrator, Photoshop, InDesign)
                </p>
                <p className="text-[#7f7f7f]">
                  <span className="font-medium text-[#7f7f7f]">Development:</span> HTML/CSS/JS, React, Next.js, TailwindCSS, Wordpress
                </p>
                <p className="text-[#7f7f7f]">
                  <span className="font-medium text-[#7f7f7f]">Skillsets:</span> Video Editing, Photography, Digital
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
              <p className="text-[#7f7f7f]">Digital tinkerer @ <a href="https://titanradio.org" target="_blank" rel="noopener noreferrer"><u>Titan Radio</u></a>, reshaping college radio for the web</p>
            </div>
            <div>
              <p className="text-[#7f7f7f]">Experience designer building intuitive solutions @ <u>AIFA Labs</u></p>
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
              <h3 className="text-2xl text-[#464646]">TITAN RADIO</h3>
              <a href="https://titanradio.org" target="_blank" rel="noopener noreferrer" aria-label="Titan Radio website"><Image
                src="/assets/new_window.svg"
                width={20}
                height={20}
                alt="New window"
                className="rounded-sm object-cover"
              /></a>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
            College radio website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS.
            <br></br>Along with graphics for concerts/shows, using Mixed Media & Creative Coding.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#5db3f1] text-[#2a6da3] hover:bg-[#5db3f1]/80">Wordpress</Badge>
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#a5b941] text-[#5a6824] hover:bg-[#a5b941]/80">Web Development</Badge>
            </div>
            <div className="flex overflow-x-auto gap-1 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-none"
              />
            </div>
          </div>
          </section>

          {/* Titan Universe Project */}
          <section id="titan-universe" className="p-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl text-[#464646]">TITAN UNIVERSE</h3>
              <a href="https://titanuniverse.org" target="_blank" rel="noopener noreferrer" aria-label="Titan Universe website"><Image
                src="/assets/new_window.svg"
                width={20}
                height={20}
                alt="New window"
                className="rounded-sm object-cover"
              /></a>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
            College blog website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS.
            <br></br>Along social media graphics for Instagram, built using Canva & Figma.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#5db3f1] text-[#2a6da3] hover:bg-[#5db3f1]/80">Wordpress</Badge>
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#f56a6a] text-[#a03636] hover:bg-[#f56a6a]/80">Digital Marketing</Badge>
              <Badge className="bg-[#a5b941] text-[#5a6824] hover:bg-[#a5b941]/80">Web Development</Badge>
              <Badge className="bg-[#FFDE7C] text-[#DA7D51] hover:bg-[#ffde7c]/80">Social Media</Badge>
            </div>
            <div className="flex overflow-x-auto gap-1 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Universe project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Universe project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Universe project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Universe project"
                className="rounded-none"
              />
            </div>
          </div>
          </section>

          {/* ACM Project */}
          <section id="acm" className="p-8 bg-[#ffffff]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl text-[#464646]">ACM — Associated Works</h3>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
              Designs for the Computer Science & Engineering chapters at Cal State University, Fullerton. <br />
              Designed apps, flyers, websites, & graphics. Hosted several workshops related to Design & Technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#e5f2a5] text-[#a5b941] hover:bg-[#e5f2a5]/80">Graphic Design</Badge>
              <Badge className="bg-[#a5b941] text-[#5a6824] hover:bg-[#a5b941]/80">Web Development</Badge>
            </div>
            <div className="flex overflow-x-auto gap-1 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="ACM project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="ACM project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="ACM project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="ACM project"
                className="rounded-none"
              />
            </div>
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
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
            </div>
            <div className="flex overflow-x-auto gap-1 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="MemoryBox project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="MemoryBox project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="MemoryBox project"
                className="rounded-none"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="MemoryBox project"
                className="rounded-none"
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
      </div>
    </div>
  )
}

