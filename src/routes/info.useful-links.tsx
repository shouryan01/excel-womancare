import { createFileRoute } from '@tanstack/react-router'
import { SquareArrowOutUpRight } from 'lucide-react'

export const Route = createFileRoute('/info/useful-links')({
  component: UsefulLinks,
})

function UsefulLinks() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Useful Links
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Helpful resources and information for your healthcare journey
            </p>
          </div>

          <div className="space-y-8">
            {/* Hospitals */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-800">Hospitals</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.standrewsipswich.com.au"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      St Andrew's Hospital, Ipswich
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mater.org.au/health/hospitals/mater-private-hospital-springfield"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Mater Springfield Private Hospital
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Pregnancy & Women's Health */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-800">Pregnancy & Women's Health</h2>
              </div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="http://www.betterhealth.vic.gov.au/bhcv2/bhcarticles.nsf/pages/Pregnancy_and_diet?"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Food Guidelines in Pregnancy
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.sma.org.au/information/women_in_sport.asp"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Exercise in Pregnancy/Sport
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ivf.com.au"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Assisted Reproduction Information
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.medicareaustralia.gov.au/"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Medicare & Safety Net Information
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://breastfeeding.asn.au"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Australian Breastfeeding Association
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.menopause.org.au"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Menopause Information
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.jeanhailes.org.au"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Jean Hailes (Menopause)
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.isge.org/"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Laparoscopic Information
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.cdc.gov/travel/"
                    className="group flex items-center p-3 rounded-lg hover:bg-violet-50 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                    <span className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-200">
                      Travel Advice (General)
                    </span>
                    <SquareArrowOutUpRight className="w-4 h-4 ml-2 text-gray-400 group-hover:text-violet-600 transition-colors duration-200" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
