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
            About Us
          </h1>
          {/* <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            MBBS, FRANZCOG
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Specialist Obstetrician and Gynaecologist
          </p> */}
        </div>

        {/* Image and Quote Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Image Column */}
          <div className="md:w-2/3 w-full">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                <img
                  src="/about-headshot.png"
                  alt="Dr. Sarika Bhadange"
                  className="object-contain w-full h-full transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0  transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Quote Column */}
          <div className="md:w-1/3 w-full">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full">
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



        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-base text-gray-600 space-y-4">
                <p>
                I always aspired to become an Obstetrician-Gynaecologist.
                </p>

                <p>After completing my MBBS and post-graduation in Obstetrics and Gynaecology from a prestigious University in Mumbai, India, I came to Australia in 2006 with my family. I fell in love with this country and found my purpose in building a       career for its women.</p>

                <p>I worked in many Queensland Hospitals like QEll Hospital, Redland Hospital, Royal Brisbane and
Women Hospital and Mackay Base Hospital to complete my fellowship of Royal Australian New Zealand College of Obstetrics and Gynaecology.</p>

                <p>I was honoured to be awarded with fellowship - FRANZCOG - in 2017. The following year, I completed my Fellowship year in Paediatric and Adolescent Gynaecology (PAG) at Royal Brisbane and Women's Hospital (RBWH) and Queensland Children Hospital (QCH).</p>
                <p>Creating my own Gynaecology practice "Excel Womancare Pty Ltd" was more than a career goal. It was a lifelong passion rooted in a belief that every woman deserves dignified, expert gynaecology care.</p>
                <p>I joined Ipswich Hospital as a Consultant in 2019, which fulfils my other passion -participation in research and guiding the next generation of doctors through mentorship and hands-on training.</p>
              </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6 mt-12">
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
          I maintain work life balance through simple, grounded activities like daily exercise, meditation and spending quality time with my two beautiful boys and lovely husband.
          I love doing in nature whether it's hiking, walking, gardening or simply being outdoors.
          </p>
        </div>
      </div>
    </div>
  )
}
