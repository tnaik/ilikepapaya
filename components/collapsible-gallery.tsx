"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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

  return (
    <div className="flex flex-col md:flex-row gap-1 w-full h-full">
      {images.map((image, index) => {
        const isActive = activeIndex === index
        const hasActive = activeIndex !== null
        const isVideo = isVideoFile(image.src)

        const content = (
          <>
            <div className="relative overflow-hidden h-[400px]">
              {isVideo ? (
                <video
                  src={image.src}
                  className="object-cover w-full h-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={image.src}
                  width={200}
                  height={200}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                  quality={85}
                  sizes={isActive ? "50vw" : "25vw"}
                />
              )}
            </div>
            {/* Caption below each media item */}
            <div className="mt-2 min-h-[24px]">
              {isActive && (
                <div className="flex items-center gap-2 text-sm text-[#7f7f7f] transition-opacity duration-300">
                  <p className="flex-1">{image.alt}</p>
                  {image.link && (
                    <ArrowRight size={16} className="hover:text-[#464646] transition-colors" />
                  )}
                </div>
              )}
            </div>
          </>
        )

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(isActive ? null : index)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`
              transition-all duration-500 ease-in-out cursor-pointer
              ${isActive ? 'h-full md:h-auto md:w-1/2' : hasActive ? 'h-1/6 md:h-auto md:w-1/6' : 'h-1/4 md:h-auto md:w-1/4'}
            `}
          >
            {image.link ? (
              <Link href={image.link} className="block" aria-label={`View ${image.alt} project`}>
                {content}
              </Link>
            ) : (
              <div>
                {content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
