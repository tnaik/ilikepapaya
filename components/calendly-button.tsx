"use client"

import { useEffect, useState } from "react"
import { PopupModal } from "react-calendly"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function CalendlyButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setRootElement(document.body)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="bg-[#FAFAFA] text-black ring-1 ring-[#d9d9d9] hover:bg-[#f0f0f0] hover:text-[black] gap-2"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative flex items-center justify-center w-3 h-3">
          {/* Pulsing ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 pulse-ring"></span>
          {/* Inner dot */}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 pulse-dot"></span>
        </div>
        <h3 className="text-xl">Open to New Projects</h3>
        <Calendar size={18} strokeWidth={2.5}/>
      </Button>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/tanishapnaik"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </>
  )
}
