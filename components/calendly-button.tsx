export function CalendlyButton() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center justify-center w-2 h-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 pulse-ring"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500 pulse-dot"></span>
      </div>
      <span className="text-xs font-medium text-[#464646] tracking-widest uppercase">Available for work</span>
    </div>
  )
}
