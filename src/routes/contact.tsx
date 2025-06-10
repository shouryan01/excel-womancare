import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '../components/ui/separator'
import { Map } from '../components/Map'
import { Mail, Phone, Printer, Clock, MapPin, AlertTriangle } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team for appointments and inquiries
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            </div>
            <div className="space-y-4">
              <a href="tel:0734444870" className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                <Phone className="w-5 h-5 text-gray-600 mr-3" />
                <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                  07 3444 4870
                </span>
              </a>
              <a href="fax:0734444869" className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                <Printer className="w-5 h-5 text-gray-600 mr-3" />
                <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                  07 3444 4869
                </span>
              </a>
              <a href="mailto:excelwomancare@gmail.com" className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                <Mail className="w-5 h-5 text-gray-600 mr-3" />
                <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                excelwomancare@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">Office Hours</h2>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-violet-50 mb-4">
              <Clock className="w-5 h-5 text-violet-600 mr-3" />
              <span className="font-medium text-gray-800">8am - 1pm, Monday to Wednesday</span>
            </div>
            <p className="text-gray-600">
              Please leave a message or send an email on{' '}
              <a href="mailto:excelwomancare@gmail.com" className="text-violet-600 hover:text-violet-700 hover:underline transition-colors duration-200">
                excelwomancare@gmail.com
              </a>{' '}
              for any enquiries outside office hours and we will try to get back to you as soon as possible.
            </p>
          </div>

          {/* Locations */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Ipswich Location */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-800">Ipswich</h2>
              </div>
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-violet-600 mr-3 mt-1" />
                <p className="text-gray-700">
                  Suite 5, 16 Limestone Street<br />
                  Ipswich 4300
                </p>
              </div>
              <Map
                address="Suite 5, 16 Limestone Street, Ipswich QLD 4300"
                className="rounded-lg"
              />
            </div>

            {/* Springfield Location */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-800">Springfield</h2>
              </div>
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-violet-600 mr-3 mt-1" />
                <p className="text-gray-700">
                  Mater Hub<br />
                  95 Southern Cross Circuit<br />
                  Springfield Central QLD 4300
                </p>
              </div>
              <Map
                address="95 Southern Cross Circuit, Springfield Central QLD 4300"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 rounded-xl shadow-lg p-8 border border-red-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-red-600">Emergency Contact</h2>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-red-100">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
              <p className="text-red-600">
                For medical emergencies or out of hours, contact St Andrew's Ipswich Private Hospital on{' '}
                <span className="font-bold">"0738169999"</span> or <span className="font-bold font-code">"000"</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
