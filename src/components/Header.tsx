import { Link } from '@tanstack/react-router'
import { Navigation } from './Navigation'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Dr. Sarika Bhadange
        </Link>
        <Navigation />
      </div>
    </header>
  )
}
