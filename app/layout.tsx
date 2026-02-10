import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'
import { NavigationSidebar } from "@/components/navigation-sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tanisha Naik's Portfolio",
  description: "Showcasing UX Design & Graphic Work for Web, App, & More.",
  metadataBase: new URL("https://ilikepapaya.vercel.app"),
  keywords: ["UX Design", "Web Development", "Portfolio", "Branding", "Tanisha Naik"],
  authors: [{ name: "Tanisha Naik" }],
  creator: "Tanisha Naik",
  publisher: "Tanisha Naik",
  openGraph: {
    title: "Tanisha Naik's Portfolio",
    description: "Showcasing Product Design, UX/UI & Branding for Web, App, & Digital Products.",
    type: "website",
    url: "https://ilikepapaya.vercel.app",
    siteName: "ilikepapaya",
    locale: "en_US",
    images: [
      {
        url: "/assets/centralpark.jpeg",
        width: 1200,
        height: 630,
        alt: "Tanisha Naik's Portfolio - Product Design, UX/UI, Branding, & Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanisha Naik's Portfolio",
    description: "Tanisha Naik's Portfolio - Product Design, UX/UI, Branding, & Web Development",
    images: ["/assets/centralpark.jpeg"],
    creator: "@tanishanaik",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <Analytics />
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans`}>
        <div className="flex flex-col md:flex-row min-h-screen Bebas-Neue">
          <NavigationSidebar />

          {/* Main Content */}
          {children}
        </div>
      </body>
    </html>
  )
}
