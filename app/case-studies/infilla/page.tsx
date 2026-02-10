'use client'

import { useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Eye, Users, ShieldCheck, Quote, Lightbulb, Wrench, Search, PanelLeft, Sparkles, Layers, Highlighter, MapPin, BookOpen, MessageSquare, Layout, HelpCircle } from "lucide-react"
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function InfillaCaseStudy() {
  useEffect(() => {
    const videos = document.querySelectorAll('video')

    const handlePlay = (e: Event) => {
      const currentVideo = e.target as HTMLVideoElement
      videos.forEach(video => {
        if (video !== currentVideo) {
          video.pause()
        }
      })
    }

    videos.forEach(video => {
      video.addEventListener('play', handlePlay)
    })

    return () => {
      videos.forEach(video => {
        video.removeEventListener('play', handlePlay)
      })
    }
  }, [])

  return (
    <div className="w-full bg-white overflow-y-auto px-4 py-4 md:p-8">
      <GoogleAnalytics />
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link href="/#infilla">
          <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">INFILLA</h3>
        <p className="text-base text-[#7f7f7f] mb-6">
          Civic tech research project redesigning AI-enhanced search for Infilla Forum, a Q&A platform used by city planners in NYC and SF.
          Led research and ideation for a 13-week project with Infilla, helping planners find zoning answers faster by using AI to surface regulatory information.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-[#4ecdc4] text-[#252422] hover:bg-[#4ecdc4]/80">User Research</Badge>
          <Badge className="bg-[#f256dc] text-[#252422] hover:bg-[#f256dc]/80">UX Design</Badge>
          <Badge className="bg-[#a78bfa] text-[#252422] hover:bg-[#a78bfa]/80">Ideation</Badge>
          <Badge className="bg-[#ff9f6d] text-[#252422] hover:bg-[#ff9f6d]/80">Prototyping</Badge>
        </div>

        {/* Featured Image */}
        <div className="my-8">
          <Image
            src="/assets/presentInfilla.jpg"
            width={1000}
            height={500}
            alt="Presenting Infilla Project in SF"
            className="rounded-md w-full h-auto"
          />
          <p className="text-sm text-center text-gray-500 mt-2">
            Presenting the Infilla project in San Francisco
          </p>
        </div>

        {/* Case study content */}
        <div className="prose prose-gray max-w-none my-8">
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Project Overview</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            When city planners need answers about zoning regulations, they turn to Infilla Forum—a Q&A platform where they can ask questions and search past discussions to get expert-reviewed answers. However, the issue was that <strong>38.5% of searches were failing</strong>. Users either got zero relevant results or got lost in 51+ irrelevant ones.
            <br /><br />
            During the 13-week project duration, I led feature ideation with a 6-person design team to figure out how AI could enhance the search experience. Making it easier for busy civic planners to find the answers to their questions intuitively, with confidence and transparency in the system.
            <br /><br />
            The platform is deployed in major cities such as NYC and San Francisco, directly impacting public service delivery and urban development decisions. When search doesn't work, questions get duplicated, answers get buried, and planners waste time hunting for information that already exists.
          </p>

          {/* DISCOVERY & RESEARCH */}
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Discovery & Research</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            To understand the problem at hand, my team started by analyzing 2,455 search events from the SF Forum. The data told a clear story: <strong>12% of searches returned zero results</strong> due to keyword matching issues (hyphens, abbreviations, typos), and <strong>26.5% returned so many results (51+)</strong> that users couldn't find what they needed. Combined, that's the 38.5% failure rate we needed to fix.
            <br /><br />
            Our first step was understanding the market landscape. We analyzed 10+ AI platforms including ChatGPT, Gemini, Perplexity, and NYC's MyCity Chatbot to see how others were building LLM-enhanced search experiences. Since AI-enhanced search is still relatively new—especially in civic and government spaces—there weren't many established patterns to learn from. We had to pull insights from adjacent experiences and piece together patterns, to figure out what would mesh.
          </p>

          <div className="my-8">
            <Image
              src="/assets/infilla/Competitive%20analysis.png"
              width={1000}
              height={600}
              alt="Competitive analysis of AI platforms"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Competitive analysis of 10+ AI platforms
            </p>
          </div>

          <p className="text-base text-[#7f7f7f] mb-6">
            Congruently, we needed to figure out what was happening during the search process that led to this rate of search failure. So we ran a survey with planning professionals to understand their relationship with AI and how they actually search for information in the system. The survey results sparked our ideation stage for initial designs as to how to make the search experience intuitive, responsive, and trustworthy to support the AI results. Along with the survey, we also conducted concept testing with 5 planners (30-minute sessions using think-aloud protocol) to get a deeper insight on natural searching processes.
          </p>

          <div className="my-8 p-6 bg-gray-50 border-l-4 border-[#4ecdc4]">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-[#4ecdc4]" />
              <p className="text-base text-[#464646] font-medium">Key Insight Leading to Our Pivot:</p>
            </div>
            <p className="text-base text-[#7f7f7f] mb-4">
              Our research revealed that planners don't trust AI to interpret or explain regulations. They want to read and verify the actual code themselves.
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-[#7f7f7f]">
              "I've run into situations at work where a member of the public shows me an AI generated answer that is incorrect, and explaining the issue/providing the correct information can be difficult. Permitting is already confusing for many people, and I'm concerned that any sort of generative AI responses might cause more confusion."
              <br />
              <span className="text-sm">— Survey Respondent</span>
            </blockquote>
          </div>

          <p className="text-base text-[#7f7f7f] mb-6">
            Planning decisions have real consequences—legal issues, project delays, professional credibility. Planners prefer to read quoted citations and have traceability to documents in reference to their questions.
            <br /><br />
            Recent and relevant results also matter, code and regulations change, so users need to know if the sources they're looking at are current and applicable to the premise. Different users search differently—some rely on filters, some type keywords, some do both. There's no single "right" way to search, and there are a variety of searching habits that should be accommodated by the new search experience.
          </p>

          {/* THE PIVOT */}
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">The Pivot</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            We originally assumed we'd design something like a chatbot—an AI that could interpret regulations and explain them to users in plain natural language. In the competitive analysis we conducted, that was the playing field.
            <br /><br />
            However, our survey insights and stakeholder feedback concluded that planners didn't want AI to explain findings to them. They work in a very self-sufficient manner in which they verify quoted citations themselves, and want to be able to trace the exact parts of code citations for their question.
            <br /><br />
            We saw they want to use AI search as a way to surface relevant results and a research tool rather than an AI assistant that will guide them to an answer. So we pivoted to what we called an <strong>"invisible AI" approach</strong>. Instead of putting AI front and center as an interpreter, we used it behind the scenes to enhance search quality—catching keyword variations, surfacing relevant sources from multiple places, generating quick highlights—while letting users stay in control of the actual verification process.
          </p>

          {/* DESIGN PROCESS */}
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Design Process</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            With our new direction set, we established three design principles to guide every decision:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-8">
            <div className="p-4 bg-gray-50 rounded-lg">
              <Eye className="w-8 h-8 text-[#4ecdc4] mb-2"/>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-md font-medium text-[#464646]">01 Transparency over automation</p>
              </div>
              <p className="text-sm text-[#7f7f7f]">
                AI enhances search quality but doesn't replace human judgment. Always show sources, citations, and evidence trails so users can verify information themselves.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <Users className="w-8 h-8 text-[#e3360f] mb-2" />
              <div className="flex items-center gap-2 mb-2">
                <p className="text-md font-medium text-[#464646]">02 Guidance and support</p>
              </div>
              <p className="text-sm text-[#7f7f7f]">
                Support users across different tech literacy levels. Provide clear interaction points and don't force everyone into one search pattern.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-[#1bc53d] mb-2"/>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-md font-medium text-[#464646]">03 Trust & Safety</p>
              </div>
              <p className="text-sm text-[#7f7f7f]">
                AI can highlight relevant information, but it shouldn't interpret legal nuance. Include clear disclaimers and always link back to original sources.
              </p>
            </div>
          </div>

          <p className="text-base text-[#7f7f7f] mb-6">
            From there, we ran Crazy 8 sketching sessions to rapidly explore concepts, then narrowed down through team critique and client feedback. Our competitive analysis helped us identify core patterns that worked well elsewhere—inline citations, expandable source panels, confidence indicators, suggested follow-up questions.
          </p>

          <div className="my-8">
            <Image
              src="/assets/infilla/tpivotsketches.png"
              width={1000}
              height={600}
              alt="Design sketches and ideation"
              className="rounded-md w-full h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Early design sketches and concept exploration
            </p>
          </div>

          <p className="text-base text-[#7f7f7f] mb-4">The concepts we explored included:</p>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-xs">
              <PanelLeft className="w-8 h-8 text-[#4ecdc4] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Side panel previews for quick source evaluation</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-xs">
              <Sparkles className="w-8 h-8 text-[#a78bfa] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">AI-suggested filter chips based on query analysis</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-xs">
              <Layers className="w-8 h-8 text-[#f256dc] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Multi-source results combining Forum posts, codes, and laws</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-lg">
              <Highlighter className="w-8 h-8 text-[#ff9f6d] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Quick highlights for external documents</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-lg">
              <MapPin className="w-8 h-8 text-[#1bc53d] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Address and attachment-based search filters</p>
            </div>
          </div>

          {/* THE SOLUTION */}
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">The Solution</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            The final design transforms Forum's keyword search into an AI-enhanced experience that prioritizes transparency over automation.
          </p>

          <p className="text-md font-medium text-[#464646] mb-3 mt-8">Enhanced Search Bar</p>
          <p className="text-base text-[#7f7f7f] mb-6">
            The redesigned search bar addresses the core usability issues. Semantic search catches keyword variations (hyphens, abbreviations, typos) without requiring exact matches. Smart filter suggestions appear based on what you're searching for. We added new filters—Add Attachment and Add Address—for context-specific searching. Overall, we organized everything into References, Categories, and More Filters dropdowns to reduce cognitive load.
          </p>

          <div className="my-8">
            <video
              src="/assets/infilla/Infilla%20-%20Suggested%20Filters%20(Edited).mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full rounded-sm"
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-center text-gray-500 mt-2">
              Smart filter suggestions based on search query
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <video
                src="/assets/infilla/Infilla%20-%20Add%20Attachment%20(edited).mp4"
                autoPlay
                muted
                controls
                className="w-full rounded-sm"
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
              <p className="text-sm text-center text-gray-500 mt-2">
                Add Attachment filter for document-specific search
              </p>
            </div>
            <div>
              <video
                src="/assets/infilla/Infilla%20-%20Add%20Adress%20(edited).mp4"
                autoPlay
                muted
                controls
                className="w-full rounded-sm"
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
              <p className="text-sm text-center text-gray-500 mt-2">
                Add Address filter for location-based search
              </p>
            </div>
          </div>

          <p className="text-md font-medium text-[#464646] mb-3 mt-8">Multi-Source Results</p>
          <p className="text-base text-[#7f7f7f] mb-6">
            Search results now pull from multiple source types in one unified view, with relevant results populated at the top: Forum posts with expert-reviewed answers, local code sections, state law references, and external documents. Horizontal navigation tabs let users filter by source type if they want to focus on just codes or just Forum discussions. Each result shows a preview snippet explaining why it matched the search.
          </p>

          <p className="text-md font-medium text-[#464646] mb-3 mt-8">Side Panel Preview</p>
          <p className="text-base text-[#7f7f7f] mb-4">
            This became the standout feature. When you click a result, a side panel opens with a preview—you can see AI-generated highlights, understand why this source was surfaced for your query, and click through to the full document if it looks relevant. All without leaving the search results page.
          </p>

          <div className="my-8">
            <video
              src="/assets/infilla/Infilla%20-%20Side%20Panel%20(edited).mp4"
              controls
              className="w-full rounded-md"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-center text-gray-500 mt-2">
              Side panel preview showing AI-generated highlights and source information
            </p>
          </div>

          <div className="my-8 p-6 bg-gray-50 border-l-4 border-[#a78bfa]">
            <Quote className="w-8 h-8 text-[#a78bfa] mb-3" />
            <blockquote className="italic text-[#7f7f7f]">
              "I like the side panel because I can see what's in [the document] without committing to opening it."
              <br />
              <span className="text-sm">— Concept Test Participant</span>
            </blockquote>
          </div>

          <p className="text-md font-medium text-[#464646] mb-3 mt-8">Trust Signals</p>
          <p className="text-base text-[#7f7f7f] mb-4">We wove trust-building elements throughout the search experience:</p>
          <ul className="text-[#7f7f7f] mb-6 space-y-2">
            <li>• "Last updated" timestamps on all sources</li>
            <li>• Expert review badges on Forum answers that have been verified</li>
            <li>• AI disclaimer: "Highlights are AI-generated for discovery, not legal advice. Verify details in official text."</li>
            <li>• Every AI-generated highlight links directly to the source text</li>
          </ul>

          {/* VALIDATION & TESTING */}
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Validation & Testing</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            We tested the designs with 5 planning professionals in 30-minute moderated sessions. Using think-aloud protocol, we walked them through an interactive Figma prototype and observed how they searched, what confused them, and what resonated.
          </p>

          <p className="text-md font-medium text-[#464646] mb-3">What we tested:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="p-4 bg-gray-50 rounded-lg">
              <Search className="w-8 h-8 text-[#4ecdc4] mb-3" />
              <p className="text-md font-medium text-[#464646] mb-2">Concept 1</p>
              <p className="text-sm text-[#7f7f7f]">
                Enhanced search experience (search bar + filters)
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <PanelLeft className="w-8 h-8 text-[#a78bfa] mb-3" />
              <p className="text-md font-medium text-[#464646] mb-2">Concept 2</p>
              <p className="text-sm text-[#7f7f7f]">
                Search output experience (results layout + side panel)
              </p>
            </div>
          </div>

          <p className="text-md font-medium text-[#464646] mb-3">What we learned:</p>
          <p className="text-base text-[#7f7f7f] mb-4">
            Users search in diverse ways—some rely heavily on filters, others type keywords, and some switch between both. So we made sure to support multiple entry points rather than forcing one pattern.
            <br /><br />
            The side panel got strong positive feedback across the board. Users liked being able to preview sources without committing to opening them. This became a priority feature.
            <br /><br />
            There was initial confusion about the new filters (Add Attachment, Add Address). Users weren't sure what they did at first, though they could imagine how they'd use them once explained. This led us to add onboarding tooltips and hover explanations.
          </p>

          <div className="my-8 flex flex-col items-center">
            <Image
              src="/assets/infilla/Onboarding-%20Add%20attachment%201.png"
              width={400}
              height={200}
              alt="Onboarding tooltip for Add Attachment filter"
              className="rounded-md w-full sm:w-3/4 md:w-2/3 h-auto"
            />
            <p className="text-sm text-center text-gray-500 mt-2">
              Onboarding tooltip explaining the Add Attachment filter
            </p>
          </div>

          <p className="text-base text-[#7f7f7f] mb-4">
            <br /><br />
            Users expressed concern about AI accuracy when it comes to legal documents. They worried about nuances in interpretation that AI might miss. So we were careful to position AI features as "highlights" for discovery, not "summaries" or legal advice—and we added clear disclaimers.
            <br /><br />
            Recency came up repeatedly as critical for trust. If users can't tell when a source was last updated, they don't know if they can rely on it. We made timestamps prominent.
          </p>

          <div className="my-8 p-6 bg-gray-50 border-l-4 border-[#f256dc]">
            <Quote className="w-8 h-8 text-[#f256dc] mb-3" />
            <blockquote className="italic text-[#7f7f7f]">
              "Quick highlight is helpful as long as it's semi-accurate."
              <br />
              <span className="text-sm">— Concept Test Participant</span>
            </blockquote>
          </div>

          <p className="text-md font-medium text-[#464646] mb-3 mt-8">Iterations we made:</p>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-xs">
              <BookOpen className="w-8 h-8 text-[#4ecdc4] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Added onboarding flow for new filter features</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-md">
              <HelpCircle className="w-8 h-8 text-[#1bc53d] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Added "Why this appears" explanation section in side panel</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] md:max-w-xs">
              <MessageSquare className="w-8 h-8 text-[#a78bfa] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Added tooltip on hover for filter buttons</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(45%-1rem)] md:max-w-md">
              <Layers className="w-8 h-8 text-[#ff9f6d] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Improved visual hierarchy in side panel (clearer separation between metadata and content)</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(45%-1rem)] md:max-w-xs">
              <Layout className="w-8 h-8 text-[#f256dc] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#7f7f7f]">Explored search bar layout variants to reduce visual clutter</p>
            </div>
          </div>

          {/* FUTURE IDEAS & PROSPECTS */}
          <h3 className="text-2xl md:text-3xl font-medium font-serif mb-4 text-[#464646]">Future Ideas & Prospects</h3>
          <p className="text-base text-[#7f7f7f] mb-6">
            There's a plethora of avenues to take this platform. One participant mentioned that planners and citizens would probably review results differently—planners might want to see codes first, citizens might gravitate toward Forum posts. Adaptive result ordering based on user role could be interesting to explore.
            <br /><br />
            Source freshness detection is another opportunity. If AI could flag potentially outdated laws or codes, that would address a key trust concern users raised.
            <br /><br />
            Mobile optimization would be key for accessibility for on-the-ground support or even different user roles such as citizens who are primarily using tablets or phones. The side panel experience would make the design more practical for real-world use.
          </p>

          {/* CREDITS */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="mt-0 text-2xl md:text-3xl font-medium font-serif text-[#464646]">Team Credits</h3>
            </div>
             <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[#464646]">
              <li>Tanisha Naik</li>
              <li>Adrian Cardova</li>
              <li>Job Llorente</li>
              <li>Madhuri Sharma</li>
              <li>Maria Elvina</li>
              <li>Kristine Jiao</li>
            </ul>
          </div>

          {/* TOOLS & TECHNOLOGIES */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="mt-0 text-2xl md:text-3xl font-medium font-serif text-[#464646]">Tools & Technologies Used</h3>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[#464646]">
              <li>Figma</li>
              <li>FigJam</li>
              <li>User Research</li>
              <li>Competitive Analysis</li>
              <li>Think-Aloud Concept Testing</li>
              <li>Crazy 8 Sketching</li>
              <li>Prototyping</li>
              <li>Usability Testing</li>
              <li>v0</li>
              <li>Claude Code</li>
              <li>Presentation Decks</li>
            </ul>
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="mt-12 mb-8">
          <Link href="/#infilla">
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
