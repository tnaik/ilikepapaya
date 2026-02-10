"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"


interface GalleryImage {
  src: string
  alt: string
  link?: string
}

interface CollapsibleGalleryProps {
  images: GalleryImage[]
}

// Helper function to detect if file is a video
const isVideoFile = (src: string): boolean => {
  const videoExtensions = ['.mov', '.mp4', '.webm', '.ogg']
  return videoExtensions.some(ext => src.toLowerCase().endsWith(ext))
}

export function CollapsibleGallery({ images }: CollapsibleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const router = useRouter()

  const handleClick = (index: number, link?: string) => {
    if (activeIndex === index && link) {
      router.push(link)
    } else {
      setActiveIndex(activeIndex === index ? null : index)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-1 w-full h-[800px] md:h-full">
      {images.map((image, index) => {
        const isActive = activeIndex === index
        const hasActive = activeIndex !== null
        const isVideo = isVideoFile(image.src)

        return (
          <div
            key={index}
            onClick={() => handleClick(index, image.link)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`
              transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
              min-w-0
              ${isActive ? 'flex-[3] md:h-auto md:flex-[3]' : hasActive ? 'flex-1 md:h-auto md:flex-1' : 'flex-1 md:h-auto md:flex-1'}
            `}
          >
            <div className="flex flex-col h-full">
              <div className="relative overflow-hidden flex-1 min-h-0 md:h-[400px] md:flex-none">
                {isVideo ? (
                  <video
                    src={image.src}
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <Image
                    src={image.src}
                    width={800}
                    height={600}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
              {/* Caption below each media item */}
              <div className="mt-2 shrink-0 min-h-[12px]">
                <div className={`flex items-center gap-2 text-sm text-[#7f7f7f] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="flex-1">{image.alt}</p>
                  {image.link && (
                    <ArrowRight size={16} className="hover:text-[#464646] transition-colors" />
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
