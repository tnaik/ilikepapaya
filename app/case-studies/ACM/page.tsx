import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ACMCaseStudy() {
  return (
    <div className="w-full bg-white overflow-y-auto p-2 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/#acm">
          <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">ACM—Associated Works</h3>
        <p className="text-base text-[#7f7f7f] mb-6">
        Creatively engineered & demonstrated concepts for the largest tech club at Cal State University, Fullerton. <br />
        Designed apps, flyers, websites, & graphics. Hosted several workshops related to Design & Technology.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
          <Badge className="bg-[#e5f2a5] text-[#252422] hover:bg-[#e5f2a5]/80">Graphic Design</Badge>
          <Badge className="bg-[#a5b941] text-[#252422] hover:bg-[#a5b941]/80">Web Development</Badge>
        </div>

        {/* Featured Image */}
        <div className="my-8">
          <Image
            src="/assets/ACM/pres2.jpeg?height=500&width=1000"
            width={1000}
            height={500}
            alt="Creative Coding Workshop"
            className="rounded-md w-full h-auto"
          />
          <p className="text-sm text-center text-gray-500 mt-2">
              Creative Coding Workshop
            </p>
        </div>

        {/* Case study content */}
        <div className="prose prose-gray max-w-none my-8">
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Club Overview</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          At California State University, Fullerton, ACM (Association for Computing Machinery) serves as a vibrant community fostering innovation, collaboration, creativity, and inclusivity in technology. We're dedicated to building future industry leaders by developing both technical and professional skills through free workshops, social events, guest speaker sessions, and other valuable resources. ACM consists of 5 pillars/sectors: Design, Algorithms, Development, NodeBuds, & General. 
          <br></br>
          <br></br>
          Through these diverse programs, members have the opportunity to explore various technology fields, helping them discover which pathway best aligns with their interests and career goals in the tech industry.
          </p>

          <div className="my-8">
            <Image
              src="/assets/ACM/pres1.jpg?height=500&width=1000"
              width={1000}
              height={500}
              alt="Titan Universe landing thumbnail"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Me presenting Figma Basics Workshop
            </p>
          </div>

          {/* DESIGN PROCESS */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Personal Contribution</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          Starting 2022, I participated in various design workshops and learned many unique skills such as 3D modeling using Spline, navigating user experience design, & discovering design trends. In the following semesters, I applied as a Design Officer and was able to contribute to the workshop curriculum and further enhance my design skills. 
          <br></br>
          <br></br>
          As the Design Team Lead since 2023, I deliver engaging design and front-end development workshops to audiences of 30+ students. My responsibilities include creating comprehensive educational content on UI/UX principles, developing prototypes and wireframes for web and app products using Figma, and strategically planning workshop curriculum covering visual design fundamentals and front-end development techniques. Through this leadership role, I help equip fellow students with essential design skills while managing educational content development across multiple technical design disciplines.
          </p>

          <div className="my-8">
            <Image
              src="/assets/ACM/vinyl.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="100 Days of Design — Vinyl E-commerce storefront"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              100 Days of Design — Vinyl E-commerce storefront
            </p>
          </div>

          {/* WORKSHOPS & ACTIVITIES */}

          <div className="my-8">
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Workshops & Activities</h3>
          <p className="text-base text-[#7f7f7f] mb-4">
          As the Design Team Lead for ACM at CSUF, I've developed and presented a diverse series alongside my board team of educational workshops including: Intro to CSS, Creative Coding, Redesigning Favorite Websites, Drafting UX Case Studies, Figma Basics, and How to Win a Designathon. 
          <br></br>
          <br></br>
          Beyond these technical sessions, our chapter has enriched the student experience through competitive events like Mini Portfolio Competitions, professional development opportunities via Guest Speaker Q&A Sessions with industry professionals, and expanded our reach through strategic collaborations with organizations like <a className="hover:text-[#f256dc]" href="https://fullybeyond.acmcsuf.com">FullyBeyond</a> to host online designathons. This comprehensive programming creates multiple pathways for students to develop practical skills, build portfolios, connect with professionals, and apply their knowledge in competitive settings.
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="my-8">
            <Image
              src="/assets/ACM/NW1.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="NatureWonders Example Hero"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              NatureWonders Example Hero
            </p>
          </div>
          
          <div className="my-8">
            <Image
              src="/assets/ACM/NTI1.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="NovaTech Innovations Example Hero"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
            NovaTech Innovations Example Hero 
            </p>
            </div>

          <div className="my-8">
            <Image
              src="/assets/ACM/bisou 1.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="100 Days of Design — Bisou Hero"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              100 Days of Design — Bisou Hero
            </p>
          </div>
          </div>

          {/* TOOLS & TECHNOLOGIES */}

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="mt-0 text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Tools & Technologies Used</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[#464646]">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Figma</li>
              <li>Google Suite</li>
              <li>Presentation & Public Speaking</li>
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
