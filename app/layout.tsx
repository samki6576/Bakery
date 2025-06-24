import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Golden Crust Bakery - Fresh Artisanal Baked Goods Since 1985",
  description:
    "Discover Golden Crust Bakery's fresh breads, pastries, cakes, and cookies. Serving Sweet Valley with artisanal baked goods made daily with the finest ingredients.",
  keywords: "bakery, fresh bread, pastries, cakes, cookies, artisanal, Sweet Valley, custom orders",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
