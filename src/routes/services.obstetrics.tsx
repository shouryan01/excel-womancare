import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/obstetrics')({
  component: ObstetricsServices,
})

function ObstetricsServices() {
  return (
    <div className="min-h-screen">
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


          {/* Mobile Image */}
          <div className="md:hidden mt-8 text-center mb-8">
            <img src="/operating_obstetrics.jpg" alt="Operating Room" className="rounded-lg shadow-lg h-[300px] object-contain inline-block" />
          </div>

          {/* Services List */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="space-y-6 flex-1">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Pre-pregnancy counselling</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Prenatal genetic and chromosomal testing</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Management of early pregnancy complications</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Routine antenatal care</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 aspect-square bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Management of high-risk pregnancies and pregnancy complications, such as pre-existing medical conditions, Hypertension in pregnancy, diabetes in pregnancy, Multiple pregnancies</p>
              </div>
            </div>
            <div className="hidden md:block flex-1">
              <img src="/operating_obstetrics.jpg" alt="Operating Room" className="rounded-lg shadow-lg max-h-[400px] -mt-16 ml-auto object-cover" />
            </div>
          </div>


          <div className="text-center mb-12 mt-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Fertility
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-violet-50 border-l-4 border-violet-400 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
              I offer counselling and assessment for your fertility issues.

              </p>
              <p className="text-gray-700 leading-relaxed">
              I will thoroughly investigate the reasons for fertility problems and help you manage them with medications or refer you to the appropriate fertility services for further treatments such as In Utero Insemination (IUI) or In Vitro fertilisation (IVF).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
