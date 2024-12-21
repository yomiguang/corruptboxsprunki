import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Corruptbox</h3>
            <p className="text-gray-400">Experience the fusion of horror and music in a glitched reality at Corruptboxsprunki.org</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-purple-400">Features</Link></li>
              <li><Link href="#how-to-play" className="hover:text-purple-400">How to Play</Link></li>
              <li><Link href="#testimonials" className="hover:text-purple-400">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:text-purple-400">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Game Versions</h4>
            <ul className="space-y-2">
              <li><Link href="#hero" className="hover:text-purple-400">Corruptbox But Sprunki</Link></li>
              <li><Link href="#hero" className="hover:text-purple-400">Corruptbox 2 But Sprunki</Link></li>
              <li><Link href="#hero" className="hover:text-purple-400">Corruptbox 3 x Sprunki</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><Facebook /></a>
              <a href="#" className="hover:text-purple-400"><Twitter /></a>
              <a href="#" className="hover:text-purple-400"><Instagram /></a>
              <a href="#" className="hover:text-purple-400"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Corruptboxsprunki.org. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

