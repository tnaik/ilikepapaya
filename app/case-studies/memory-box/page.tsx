import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"

export default function MemoryBoxCaseStudy() {
  return (
    <div className="w-full bg-white overflow-y-auto p-2 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/#memory-box">
          <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Memory Box</h3>
        <p className="text-base text-[#7f7f7f] mb-6">
        Web project designed using Figma for Code&Crush Designathon (presented by CSUF Society of Women Engineers), placing 3rd. 
        Reimagining means of preserving love, virtually. 
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
        </div>

        {/* Featured Image */}
        <div className="my-8">
          <Image
            src="/assets/MemoryBox/Memorybox1.png?height=500&width=1000"
            width={1000}
            height={500}
            alt="MemoryBox Screens"
            className="rounded-md w-full h-auto"
          />
          <p className="text-sm text-center text-gray-500 mt-2">
              MemoryBox Screens
            </p>
        </div>

        {/* Case study content */}
        <div className="prose prose-gray max-w-none my-8">
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Code&Crush Designathon Details</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          Prompt: 
          <br></br>
          Design a digital experience that celebrates the spirit of White Day (March 14). Your design can take the form of a website, or a mobile application. Focus on creating a unique and engaging experience that resonates with users and captures the essence of love and connection.
          </p>
          <p className="text-base text-[#7f7f7f]">
            Judging Criteria:
          </p>
            <li className="text-md text-left text-[#7f7f7f] mt-2">Accessibility</li>
            <li className="text-md text-left text-[#7f7f7f] mt-2">Added Visuals & Graphics</li>
            <li className="text-md text-left text-[#7f7f7f] mt-2">New Social Media Assets + Design Library on Canva</li>
            <li className="text-md text-left text-[#7f7f7f] mt-2">Clickable CTA Content—New Shows & Content</li>
            <li className="text-md text-left text-[#7f7f7f] mt-2">Organized Navigation Bar</li>

          <div className="my-8">
            <Image
              src="/assets/MemoryBox/Memorybox2.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="MemorBox Mockup"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              MemorBox Mockup
            </p>
          </div>

          {/* Project Overview */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Project Overview</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          This digital time capsule addresses the problem of preserving personal memories and experiences in a way that can be easily accessed and shared over time. Many meaningful moments, stories, and connections can be lost or forgotten as technology and life evolve. By creating a digital space to store these memories, it ensures that they are not only kept safe but also accessible to future generations, allowing us to maintain a connection to our past and loved ones in a tangible way.
          <br></br>
          <br></br>
          The purpose of this digital time capsule is to preserve and share meaningful memories, stories, and moments in a way that makes them accessible for future generations. It allows people to capture what they love, ensuring that their experiences, connections, and milestones are not forgotten over time. By creating a lasting digital archive, it helps keep those memories alive and connected to the people who matter most. With that goal in mind, my team, Yulie L. & I were able to place 3rd within the competition.
          </p>

          {/* Discovery & Research */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Discovery & Research</h3>
          <p className="text-base text-[#7f7f7f] mb-4">
          To start brainstorming potential digital solutions, I had conducted a survey specifically to my close friends and had asked the following question: when you think of love, what do you think of?
          <br></br>
          <br></br>
          Our research revealed that while physical mementos hold significant emotional value, they can deteriorate or be lost over time. Digital solutions often lack emotional depth or become inaccessible as platforms evolve. Memory Box bridges this gap by creating a permanent digital space that captures both the content and emotional context of meaningful memories, particularly focusing on relationships and love connections to align with the White Day theme.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="my-8">
            <Image
              src="/assets/MemoryBox/res1.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="NatureWonders Example Hero"
              className="rounded-md w-full h-auto"
            />
          </div>
          
          <div className="my-8">
            <Image
              src="/assets/MemoryBox/res2.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="NovaTech Innovations Example Hero"
              className="rounded-md w-full h-auto"
            />
            </div>

          <div className="my-8">
            <Image
              src="/assets/MemoryBox/res3.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="100 Days of Design — Bisou Hero"
              className="rounded-md w-full h-auto"
            />
          </div>
          </div>

          {/* Design Process */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Design Process</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          Memory Box was designed as an intuitive platform where users can create personalized digital time capsules for specific relationships, whether it be platonic or romantic. The interface prioritizes simplicity and emotional resonance, using soft colors and intuitive navigation. Each memory capsule contains multimedia content including photos, messages, & stickers. The design incorporates thoughtful animations that evoke nostalgia and warmth when interacting with memories.
          <br></br>
          </p>
          <div className="my-8">
            <Image
              src="/assets/MemoryBox/F4.png?height=500&width=1000"
              width={1000}
              height={500}
              alt="MemoryBox"
              className="rounded-md w-500 h-auto"
            />
          </div>

          {/* Features */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif text-[#464646]">Features</h3>
          
          {/* Video Section */}
        <div className="my-12 bg-[#fafafa] p-6 rounded-lg">
          <h2 className="text-2xl font-medium text-[#464646] mb-4">Feature 1 — Menu & Home Interface</h2>
          <p className="text-[#7f7f7f] mb-6">
            Watch a brief walkthrough of navigating the main app homepage.
          </p>

          <div className="relative aspect-video bg-black rounded-md overflow-hidden">
            {/* Video Element */}
            <video className="w-full h-full object-cover" controls poster="/assets/MemoryBox/F1.png" preload="metadata" muted>
              <source src="/assets/MemoryBox/MB1_Feature1.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-sm text-center text-[#7f7f7f] mt-3">
            Titan Universe website walkthrough showcasing responsive design and content features
          </p>
        </div>

        <div className="my-12 bg-[#fafafa] p-6 rounded-lg">
          <h2 className="text-2xl font-medium text-[#464646] mb-4">Feature 2 — Mailbox Page</h2>
          <p className="text-[#7f7f7f] mb-6">
            Watch a brief walkthrough of navigating the mailbox page where users can see their chats & sent gifts from their added loved ones.
          </p>

          <div className="relative aspect-video bg-black rounded-md overflow-hidden">
            {/* Video Element */}
            <video className="w-full h-full object-cover" controls poster="/assets/MemoryBox/F2.png" preload="metadata" muted>
              <source src="/assets/MemoryBox/MB1_Feature2.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="my-12 bg-[#fafafa] p-6 rounded-lg">
          <h2 className="text-2xl font-medium text-[#464646] mb-4">Feature 3 — Find Loved Ones Page</h2>
          <p className="text-[#7f7f7f] mb-6">
            Watch a brief walkthrough of navigating the loved ones page where users can send digital motifs & add more loved ones.
          </p>

          <div className="relative aspect-video bg-black rounded-md overflow-hidden">
            {/* Video Element */}
            <video className="w-full h-full object-cover" controls poster="/assets/MemoryBox/F3.png" preload="metadata" muted>
              <source src="/assets/MemoryBox/MB1_Feature3.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

          {/* Future Ideas & Prospects */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Future Ideas & Prospects</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          Future development could include sending songs, videos, and important milestone markers on specific dates/times, collaborative capsules for shared memories, and location-based memory triggers.          <br></br>
          </p>

          {/* What I Learned */}

          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">What I Learned</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
          This project reinforced the importance of emotional design in digital experiences and highlighted how technology can preserve human connections across time. The challenge of balancing technological functionality with emotional resonance provided valuable insights into creating digital experiences that feel deeply personal and meaningful. Creating a full fledged project within the span of 3 hours was difficult but allowed my team to understand how to prioritize important features and highlight the main concept rather than focusing on miniscule details that can be refined later.
          </p>

          {/* TOOLS & TECHNOLOGIES */}

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="mt-0 text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Tools & Technologies Used</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[#464646]">
              <li>Figma</li>
              <li>Presentation & Public Speaking</li>
            </ul>
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="mt-12 mb-8">
          <Link href="/#memory-box">
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
