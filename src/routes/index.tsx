import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="h-[calc(100vh-5rem)] bg-gradient-to-br from-violet-50 via-white to-pink-50">
      {/* Hero Section with Background Image */}
      <div className="h-full relative">
        <img
          src="landing-image.png"
          alt="Excel Womancare"
          className="w-full h-full object-cover animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 flex items-center justify-center">
          <div className="text-center text-white animate-in slide-in-from-bottom-20 fade-in duration-500 max-w-4xl px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Excel Womancare
            </h1>
            <p className="text-2xl mb-8 text-white/90 leading-relaxed">
              Where expertise meets empathy in women's health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/services/obstetrics"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full transition-all duration-300 font-medium"
              >
                Our Services
              </Link>
              <Link
                to="/info/appointments"
                className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-all duration-300 font-medium"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
