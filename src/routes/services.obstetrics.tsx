import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/obstetrics')({
  component: ObstetricsServices,
})

function ObstetricsServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Obstetrics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive care for your pregnancy journey with expertise and compassion
          </p>
        </div>
        <div className="prose prose-lg max-w-none">
          <div className="bg-violet-50 border-l-4 border-violet-400 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              I provide antenatal care for expectant mothers who plan to give birth at public hospitals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through this <span className="font-semibold text-violet-700">"shared care model"</span> of obstetric care, I work closely with public teams to ensure a safe, supported and seamless pregnancy journey - for women without private health insurance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center mt-20">
          <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
          Services I Provide
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Pre-pregnancy counselling</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Prenatal genetic and chromosomal testing</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Management of early pregnancy complications</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Routine antenatal care</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2">
            <div className="flex items-start mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mr-3 mt-1.5"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Management of high-risk pregnancies and pregnancy complications</h3>
                <p className="text-gray-600 text-sm">
                  Including pre-existing medical conditions, hypertension in pregnancy, diabetes in pregnancy, and multiple pregnancies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
