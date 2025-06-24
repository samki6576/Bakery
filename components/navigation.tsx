"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Clock, Sparkles } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r pink violet to-rose-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(555) 123-BAKE</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Open Daily 6AM - 8PM</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span>123 Baker Street, Sweet Valley, CA</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 bloom-animation hover:scale-105 transition-transform">
            <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-violet-600 rounded-full flex items-center justify-center pulse-glow">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text font-serif">
                Golden Crust
              </h1>
              <p className="text-xs text-fuchsia-600">🌈 Magical Bakery 🌈</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-amber-800 hover:text-amber-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="rainbow-gradient text-white hover:scale-105 transition-transform pulse-glow border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Order Magic
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-amber-300">
                <Menu className="h-6 w-6 text-amber-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-amber-50">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg text-amber-800 hover:text-amber-600 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-amber-600 hover:bg-amber-700 text-white mt-4">Order Online</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
