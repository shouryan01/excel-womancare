import { Link } from '@tanstack/react-router'
import { Navigation } from './Navigation'

export default function Header() {
  return (
    <header className="border-b shadow-lg rounded-2xl bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row items-center justify-between gap-4">
          <Link to="/" className="h-12">
            <img src="/logo.png" alt="Dr. Sarika Bhadange" className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Navigation menu - hidden on mobile, shown between logo and text on desktop */}
          <div className="hidden md:block flex-1">
            <Navigation />
          </div>

          <div className="text-center md:text-right mt-3 md:mt-0">
            <h1 className="text-sm sm:text-sm md:text-md lg:text-xl xl:text-2xl font-bold text-[#6A5391]">Dr Sarika Bhadange</h1>
            <p className="text-xs sm:text-xs lg:text-sm text-gray-600">MBBS, FRANZCOG</p>
          </div>
        </div>

        {/* Navigation menu - shown on mobile, hidden on desktop */}
        <div className="md:hidden mt-4">
          <Navigation />
        </div>
      </div>
    </header>
  )
}
