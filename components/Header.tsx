import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-500">Corruptbox</Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-purple-400">About</Link></li>
          <li><Link href="#features" className="hover:text-purple-400">Features</Link></li>
          <li><Link href="#game-versions" className="hover:text-purple-400">Versions</Link></li>
          <li><Link href="#how-to-play" className="hover:text-purple-400">How to Play</Link></li>
          <li><Link href="#testimonials" className="hover:text-purple-400">Testimonials</Link></li>
          <li><Link href="#faq" className="hover:text-purple-400">FAQ</Link></li>
        </ul>
        <Button variant="outline" className="bg-purple-600 text-white hover:bg-purple-700">Play Now</Button>
      </nav>
    </header>
  )
}

