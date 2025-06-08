import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/fertility')({
  component: FertilityServices,
})

function FertilityServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Fertility Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive fertility care and support for your journey to parenthood
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-violet-50 border-l-4 border-violet-400 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              I provide comprehensive fertility care, offering personalized treatment plans and support throughout your journey to parenthood.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With expertise in both medical and surgical fertility treatments, I ensure you receive the most appropriate care for your unique situation.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center mt-20">
          <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
          Available Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Fertility Assessment</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Comprehensive evaluation of both partners to identify potential fertility issues
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Ovulation Induction</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Medical treatment to stimulate egg production and improve chances of conception
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Intrauterine Insemination (IUI)</h3>
            </div>
            <p className="text-gray-600 text-sm">
              A fertility treatment that places sperm directly into the uterus
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">In Vitro Fertilization (IVF)</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Advanced fertility treatment combining eggs and sperm outside the body
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Surgical Fertility Treatments</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Minimally invasive procedures to address structural fertility issues
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Fertility Preservation</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Options for preserving fertility before medical treatments
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
          Support Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Counseling</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Emotional support and guidance throughout your fertility journey
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Nutritional Guidance</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Dietary recommendations to optimize fertility and pregnancy outcomes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Lifestyle Support</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Guidance on lifestyle factors that can impact fertility
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Support Groups</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Connection with others on similar fertility journeys
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
