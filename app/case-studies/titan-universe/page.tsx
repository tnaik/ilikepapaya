import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function TitanUniverseCaseStudy() {
  return (
    <div className="w-full bg-white overflow-y-auto px-4 py-4 md:p-8">
      <GoogleAnalytics />
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/#titan-universe">
          <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">TITAN UNIVERSE</h3>
        <p className="text-base text-[#7f7f7f] mb-6">
        College blog website for Cal State University, Fullerton. Built using Wordpress, HTML, CSS, & JS. Along with social media graphics for Instagram, built using Canva & Figma. 
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
            src="/assets/TU/TU1.png?height=500&width=1000"
            width={1000}
            height={500}
            alt="Titan Universe landing thumbnail"
            className="rounded-md w-full h-auto"
          />
          <p className="text-sm text-center text-gray-500 mt-2">
              Titan Universe — Landing
            </p>
        </div>

        {/* Case study content */}
        <div className="prose prose-gray max-w-none my-8">
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Project Overview</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          Titan Universe is Cal State Fullerton’s digital media hub. It features multimedia content related to news, entertainment, music, sports, and more.
          <br></br>
          <br></br>
          It houses various shows and programs produced by students, from Titan TV, Titan Radio, and OC News, among others. Serving as a platform for students to showcase their work and keep the campus community informed and entertained.
          </p>

          <div className="my-8">
            <Image
              src="/assets/TU/TU2.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="Titan Universe landing thumbnail"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Landing Features & Widgets
            </p>
          </div>

          {/* DESIGN PROCESS */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Design Process</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          To initiate the redesign process, my first steps were to examine pain points within the site. I gathered responses from colleagues discussing changes to be made visually, heuristically, & efficiently without disabling the site for other users. With the research gathered, I narrowed my approach to 3 main pain points:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20 my-8">
            <div>
              <ol className="text-lg text-left text-[#464646] mt-2">Visually Unbalanced</ol>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Heavy visual weight, leaning to the left side due to list of social icons</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Mix of color palettes in use (green/sea-foam colors + CSUF’s colors)</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Too much whitespace—does not utilize elements in hierarchical way</li>
            </div>
            <div>
              <ol className="text-lg text-left text-[#464646] mt-2">Repetitive Information</ol>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Descriptions of Titan Communications  branches are unnecessary, feels more like an about page rather than home page</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Lots of text rather than visuals</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Header is repetitive, displaying icon and name twice</li>
            </div>
            <div>
              <ol className="text-lg text-left text-[#464646] mt-2">Lacking Engagement</ol>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Not enough cues, visuals, or CTA buttons to draw user into exploring the site or finding their go to media</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Does not match use case (displaying playable content)</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Not enough “clickable” media</li>
            </div>
          </div>

          <div className="my-8">
            <Image
              src="/assets/TU/old.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="Titan Universe landing thumbnail"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Old Landing Page (in need of revamp)
            </p>
          </div>

          {/* CHANGES MADE */}

          <div className="my-8">
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Changes Made</h3>
          <p className="text-base text-[#7f7f7f] mb-4">
          With multiple iterations throughout the semester, changes ranging from small visual to large hierarchical were made. As well as web redesign, there were several social media content changes made too. 
          </p>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Accessibility</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Added Visuals & Graphics</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">New Social Media Assets + Design Library on Canva</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Clickable CTA Content—New Shows & Content</li>
              <li className="text-sm text-left text-[#7f7f7f] mt-2">Organized Navigation Bar</li>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
          <div className="my-8">
            <Image
              src="/assets/TU/gallery.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="TU Gallery"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Gallery Page
            </p>
            </div>

            <div className="my-8">
            <Image
              src="/assets/TU/mid2.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="Titan Universe Mid Homepage"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Carousel with Recent BTS images
            </p>
            </div>

            <div className="my-8">
            <Image
              src="/assets/TU/home.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="Titan Universe landing"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Revamped landing
            </p>
          </div>
          </div>

          {/* FUTURE IDEAS & PROSPECTS */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Future Ideas & Prospects</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          Home page—feature articles or interactivity
          <br></br> 
          People can "buy ad space" to promote student films, podcasts, art, shows, and more
          <br></br> 
          Provide more resources on campus
          <br></br> 
          Humans of Titan Comms—feature real stories of people who work there, encourage more people to join
          <br></br> 
          About Page describing the team (WIP)
          <br></br> 
          Extra content only found on TU—blog post, interpersonal stories, articles, short form content
          <br></br> 
          Notion implementation for more collaborative processes & workflow
          <br></br> 
          </p>

          {/* WHAT I LEARNED */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">What I Learned</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          Time management - posting consistently 
          <br></br> 
          Developed learning for Wordpress mechanics & techniques
          <br></br> 
          Visual Design—How can users effectively & efficiently navigate the site?
          <br></br> 
          Skill Sets:  Wordpress, Canva, Instagram, Twitter, Youtube Studio, Figma, Collaboration, Task Delegation, Clear Communication
          <br></br> 
          Monitor engagement within social media & site analytics
          <br></br> 
          </p>

          <div className="my-8">
            <Image
              src="/assets/TU/flyer.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="Titan Universe landing thumbnail"
              className="rounded-md w-full h-auto"
            />
          </div>

          {/* TOOLS & TECHNOLOGIES */}

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="mt-0 text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Tools & Technologies Used</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[#464646]">
              <li>WordPress</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Adobe InDesign</li>
              <li>Canva</li>
              <li>Capcut</li>
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
