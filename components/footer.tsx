import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white">
      
           

      {/* Main Footer */}
      <div className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 relative z-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-fuchsia-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">GC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Golden Crust</h3>
                <p className="text-xs text-white/70">Bakery</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Serving Sweet Valley with fresh, artisanal baked goods since 1985. Made with love, served with pride.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-white/70 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-fuchsia-400" />
                <span>123 Baker Street, Sweet Valley, CA 90210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-fuchsia-400" />
                <span>(555) 123-BAKE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-fuchsia-400" />
                <span>info@goldencrustbakery.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-fuchsia-400" />
                <span>Mon-Fri: 6AM-8PM, Sat-Sun: 7AM-9PM</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <Button
                variant="outline"
                size="icon"
                className="border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-fuchsia-900"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-fuchsia-900"
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-white/70 text-sm">@goldencrustbakery</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-fuchsia-900/50 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Golden Crust Bakery. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
