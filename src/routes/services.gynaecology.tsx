import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/gynaecology')({
  component: GynaecologyServices,
})

function GynaecologyServices() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a4 4 0 100 8 4 4 0 000-8zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11v10M9 18h6" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Gynaecology
            </h1>
          </div>

          <div className="prose prose-lg max-w-none mb-4">
          I provide care across a broad range of Gynaecological conditions including:
          </div>

          {/* Services List */}
          <div className="flex gap-8 items-start">
            <div className="space-y-6 mb-12 flex-1">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Menstrual abnormalities</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Pelvic pain- endometriosis, Pelvic inflammatory disease</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Infertility</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Ovarian cysts</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Polycystic ovarian syndrome- PCOS</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Uterovaginal Prolapse</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Urinary incontinence</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Colposcopy and Cervical screening test abnormalities</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Menopause</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Post menopausal bleeding</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Contraception including permanent sterilisation</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Sexual health issues</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Recurrent pregnancy loss</p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">Early pregnancy complications- Miscarriage, Ectopic pregnancy</p>
              </div>
            </div>
            <div className="hidden md:block flex-1">
              <img src="/operating.png" alt="Operating Room" className="rounded-lg shadow-lg" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
            Adolescent Gynaecology
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Menstrual abnormalities</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Menstrual suppression</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Vulvovaginitis</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Labial adhesions</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Precoucious puberty</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Pelvic pain</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">PCOS</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Anatomical abnormalities</p>
            </div>

            <div className="flex items-start">
              <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
              <p className="text-gray-700 leading-relaxed">Contraception counselling (incl. Contraception for young women with medical problems)</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-violet-50 border-l-4 border-violet-400 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                I operate at St. Andrew's Ipswich Private Hospital and Mater Private Hospital, Springfield.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As an advanced laparoscopic surgeon, I offer minimally invasive surgery which essentially facilitates reduced recovery time, less pain and minimal scarring for patients.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
