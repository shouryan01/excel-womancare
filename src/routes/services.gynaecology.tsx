import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/gynaecology')({
  component: GynaecologyServices,
})

function GynaecologyServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Gynaecology
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive care for women's health at every stage of life
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-violet-50 border-l-4 border-violet-400 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              I provide comprehensive care across a broad range of gynaecological conditions, ensuring personalized treatment plans for each patient's unique needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As an advanced laparoscopic surgeon, I offer minimally invasive surgery which facilitates reduced recovery time, less pain, and minimal scarring for patients.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center mt-20">
          <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
          General Gynaecology
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Menstrual abnormalities</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Pelvic pain - endometriosis, PID</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Infertility</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Ovarian cysts</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">PCOS</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Uterovaginal Prolapse</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Urinary incontinence</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Cervical screening</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2">
            <div className="flex items-start mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mr-3 mt-1.5"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Additional Services</h3>
                <p className="text-gray-600 text-sm">
                  Menopause management, post menopausal bleeding, contraception including permanent sterilisation, sexual health issues, recurrent pregnancy loss, and early pregnancy complications
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
          Adolescent Gynaecology
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Menstrual abnormalities</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Menstrual suppression</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Vulvovaginitis</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Labial adhesions</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Precocious puberty</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Pelvic pain</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">PCOS</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
              <h3 className="font-semibold text-gray-800">Anatomical abnormalities</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2">
            <div className="flex items-start mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mr-3 mt-1.5"></div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Contraception counselling</h3>
                <p className="text-gray-600 text-sm">
                  Including contraception for young women with medical problems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
