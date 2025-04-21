import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TitanUniverseCaseStudy() {
  return (
    <div className="w-full bg-white overflow-y-auto p-2 md:p-8">
      <div className="max-w-3xl mx-left">
        {/* Back button */}
        <Link href="/#titan-universe">
          <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">TITAN UNIVERSE</h3>
        <p className="text-base text-[#7f7f7f] mb-6">
        College blog website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS.
        <br></br>
        Along social media graphics for Instagram, built using Canva & Figma.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#5db3f1] text-[#252422] hover:bg-[#5db3f1]/80">Wordpress</Badge>
              <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
              <Badge className="bg-[#f56a6a] text-[#252422] hover:bg-[#f56a6a]/80">Digital Marketing</Badge>
              <Badge className="bg-[#a5b941] text-[#252422] hover:bg-[#a5b941]/80">Web Development</Badge>
              <Badge className="bg-[#FFDE7C] text-[#252422] hover:bg-[#ffde7c]/80">Social Media</Badge>
        </div>

        {/* Featured Image */}
        <div className="my-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            width={800}
            height={400}
            alt="Titan Radio website mockup"
            className="rounded-md w-full h-auto"
          />
        </div>

        {/* Case study content */}
        <div className="prose prose-gray max-w-none">
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Project Overview</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            Titan Radio is the official radio station of California State University, Fullerton. The project involved
            redesigning their website to create a modern, user-friendly platform that showcases radio shows, events, and
            music content while maintaining the station's brand identity.
          </p>

          <div className="my-8">
            <Image
              src="/placeholder.svg?height=400&width=800"
              width={800}
              height={400}
              alt="Titan Radio website mockup"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Homepage design showcasing featured shows and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Wireframe"
                className="rounded-md w-full h-auto"
              />
              <p className="text-sm text-center text-gray-500 mt-2">Initial wireframes</p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="High-fidelity mockup"
                className="rounded-md w-full h-auto"
              />
              <p className="text-sm text-center text-gray-500 mt-2">High-fidelity mockups</p>
            </div>
          </div>

          <div className="my-8">
            <Image
              src="/placeholder.svg?height=500&width=800"
              width={800}
              height={500}
              alt="Titan Radio website on multiple devices"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">The responsive design works across all devices</p>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="mt-0 text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Tools & Technologies Used</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <li>WordPress</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Git</li>
            </ul>
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="mt-12 mb-8">
          <Link href="/#titan-universe">
            <Button variant="outline" className="text-black ring-1 ring-black hover:bg-[black] hover:text-[white]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
