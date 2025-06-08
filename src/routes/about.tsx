import { createFileRoute } from '@tanstack/react-router'
import { Quote } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 p-1 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Dr. Sarika Bhadange
          </h1>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            MBBS, FRANZCOG
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Specialist Obstetrician and Gynaecologist
          </p>
        </div>

        {/* Doctor's Image Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 mb-8 overflow-hidden">
          <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
            <img
              src="/about-headshot.png"
              alt="Dr. Sarika Bhadange"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Bio and Quote Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Bio Column */}
          <div className="md:w-2/3 w-full flex flex-col justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-800">Professional Background</h2>
              </div>
              <div className="text-base text-gray-600 space-y-4">
                <p>
                  Dr Sarika Bhadange is a specialist Obstetrician and Gynaecologist. After completing her MBBS and post-graduation in Obstetrics and Gynaecology from a prestigious University in Mumbai, India, she moved to Australia in 2006. She has worked in several Queensland hospitals, including QEII Hospital, Redland Hospital, Royal Brisbane and Women's Hospital, and Mackay Base Hospital, completing her fellowship of the Royal Australian and New Zealand College of Obstetricians and Gynaecologists (FRANZCOG) in 2017. She further completed a Fellowship year in Paediatric and Adolescent Gynaecology at RBWH and QCH.
                </p>
                <p>
                  Dr Bhadange is passionate about providing up-to-date, compassionate, and personalised care for women at every stage of life. She founded Excel Womancare Pty Ltd to offer dignified, expert gynaecology care. She is also a Consultant at Ipswich Hospital, where she enjoys research and mentoring the next generation of doctors.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Column */}
          <div className="md:w-1/3 w-full flex flex-col items-center justify-center mt-8 md:mt-0">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full">
              <Quote className="w-8 h-8 text-violet-600 mb-4" />
              <p className="italic text-lg text-gray-600 mb-4">
                "Since I was a medical student, I believed that women deserve compassionate and knowledgeable care at every stage of life."
              </p>
              <div className="text-right text-base font-medium text-violet-600">
                – Dr Sarika Bhadange
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications and Special Interests */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Qualifications */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Qualifications</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                MBBS, Mumbai, India
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                Post-graduation in Obstetrics and Gynaecology, Mumbai, India
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                FRANZCOG, 2017
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                Fellowship in Paediatric and Adolescent Gynaecology, RBWH & QCH
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                Extensive experience in Queensland hospitals
              </li>
            </ul>
          </div>

          {/* Special Interests */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Special Interest Areas</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-violet-600 mb-3">Obstetrics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Medical disorders in pregnancy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    High and low risk obstetrics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Twin pregnancy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Diabetes in pregnancy (pre-existing and gestational)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-violet-600 mb-3">Gynaecology</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Laparoscopic surgery
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Hysterectomy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Infertility
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Prolapse and urinary incontinence
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Menstrual disorders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Life Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-gray-800">Personal Life</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/hiking.png"
                alt="Hiking"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/photography.png"
                alt="Photography"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <p className="text-gray-600">
            Dr Bhadange maintains work-life balance through daily exercise, meditation, and spending quality time with her family. She enjoys being in nature, hiking, walking, gardening, and photography.
          </p>
        </div>
      </div>
    </div>
  )
}
