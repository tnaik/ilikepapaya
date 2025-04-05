import type { Metadata } from 'next'
import './globals.css'

import { Inter, Instrument_Serif } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ilikepapaya',
  description: 'tanisha naik - creative technologist',
  generator: 'v0.dev',
  openGraph: {
    title: 'Your Site Title',
    description: 'Your site description',
    images: [{
      url: '/assets/tanisha.jpeg',
      width: 1200,
      height: 630,
      alt: 'Site preview image',
    }],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth overscroll-none'>
      <body className={'${inter.className} font-sans'}>{children}</body>
    </html>
  )
}

