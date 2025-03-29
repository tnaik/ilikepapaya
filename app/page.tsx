import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen Instrument-Serif">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-80 bg-[#FAFAFA] p-8 border-r border-[#d9d9d9 to-40%] md:sticky md:top-0 md:h-screen relative">
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

        <nav className="space-y-4">
          <Link href="#about" className="block text-[#464646] hover:text-black">
            About
          </Link>
          <Link href="#work" className="block text-[#464646] hover:text-black">
            Work
          </Link>
          <Link href="#projects" className="block text-[#464646] hover:text-black">
            Projects
          </Link>
          <ul className="pl-4 space-y-1 text-sm text-[#7f7f7f]">
            <Link href="#titan-radio" className="block hover:text-black"><li>• Titan Radio <sup>(WIP)</sup></li></Link>
            <Link href="#titan-universe" className="block hover:text-black"><li>• Titan Universe</li></Link>
            <Link href="#acm" className="block hover:text-black"><li>• ACM <sup>(Associated Works)</sup></li></Link>
            <Link href="#memory-box" className="block hover:text-black"><li>• MemoryBox</li></Link>
          </ul>
        </nav>
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
                className="rounded-sm object-cover w-full h-full"
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
                  <span className="font-medium text-[#7f7f7f]">Development:</span> HTML/CSS/JS, React, Wordpress
                </p>
                <p className="text-[#7f7f7f]">
                  <span className="font-medium text-[#7f7f7f]">Skillsets:</span> Video Editing, Photography, Digital
                  Marketing, SEO
                </p>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-4 gap-2 mt-6">
                <Image
                  src="/assets/peopleonpismo.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Gallery image"
                  className="rounded-sm object-cover w-full h-full"
                />
                <Image
                  src="/assets/centralpark.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Gallery image"
                  className="rounded-sm object-cover w-full h-full"
                />
                <Image
                  src="/assets/band.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Gallery image"
                  className="rounded-sm object-cover w-full h-full"
                />
                <Image
                  src="/assets/pismo.jpeg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Gallery image"
                  className="rounded-sm object-cover w-full h-full"
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
        <h2 className="text-3xl font-medium text-[#464646] pl-8 pr-8">Projects</h2>

          {/* Titan Radio Project */}
          <section id="titan-radio" className="p-8 bg-[#ffffff]">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl text-[#464646]">TITAN RADIO</h3>
              <a href="https://titanradio.org" target="_blank" rel="noopener noreferrer"><Image
                src="/assets/new_window.svg"
                width={20}
                height={20}
                alt="New window"
                className="rounded-sm object-cover"
              /></a>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
              College radio website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS.
              <br />
              Media rich platform for campus shows, local artists, United Media & Creative Coding.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#5db3f1] text-[#2a6da3] hover:bg-[#5db3f1]/80">Wordpress</Badge>
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#a5b941] text-[#5a6824] hover:bg-[#a5b941]/80">Web Development</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-md"
              />
            </div>
          </div>
          </section>

          {/* Titan Universe Project */}
          <section id="titan-universe" className="p-8 bg-[#ffffff]">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl text-[#464646]">TITAN UNIVERSE</h3>
              <span className="text-sm">🌐</span>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
              College blog website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS.
              <br />
              Media rich media graphics for Instagram, built using Canva & Figma.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#5db3f1] text-[#2a6da3] hover:bg-[#5db3f1]/80">Wordpress</Badge>
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#f56a6a] text-[#a03636] hover:bg-[#f56a6a]/80">Digital Marketing</Badge>
              <Badge className="bg-[#a5b941] text-[#5a6824] hover:bg-[#a5b941]/80">Web Development</Badge>
              <Badge className="bg-[#FFDE7C] text-[#DA7D51] hover:bg-[#ffde7c]/80">Social Media</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Universe project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Universe project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Universe project"
                className="rounded-md"
              />
            </div>
          </div>
          </section>

          {/* ACM Project */}
          <section id="acm" className="p-8 bg-[#ffffff]">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl text-[#464646]">ACM Associated Works</h3>
            </div>
            <p className="text-sm text-[#7f7f7f] mb-4">
              Designs for the Computer Science & Engineering chapters at Cal State University, Fullerton. Designed
              <br />
              apps, flyers, websites, & graphics. Hosted several workshops related to Design & Technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#e5f2a5] text-[#a5b941] hover:bg-[#e5f2a5]/80">Graphic Design</Badge>
              <Badge className="bg-[#a5b941] text-[#5a6824] hover:bg-[#a5b941]/80">Web Development</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="ACM project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="ACM project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Titan Radio project"
                className="rounded-md"
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
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#f256dc] text-[#a02a8f] hover:bg-[#f256dc]/80">UX Design</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="MemoryBox project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="MemoryBox project"
                className="rounded-md"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="MemoryBox project"
                className="rounded-md"
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

