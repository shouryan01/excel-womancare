import { Link } from '@tanstack/react-router'
import { Navigation } from './Navigation'

export default function Header() {
  return (
    <header className="border-b shadow-lg rounded-2xl bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="h-12">
          <img src="/logo.png" alt="Dr. Sarika Bhadange" className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
