import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/info/appointments')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Appointments
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation with Dr. Sarika Bhadange
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                  <p className="text-gray-700 leading-relaxed">
                    It is usual for a general practitioner to refer you to Dr Sarika Bhadange to enable you to claim from Medicare.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                  <p className="text-gray-700 leading-relaxed">
                    You should bring your referral letter, test results, ultrasound report, Medicare card and private health insurance card to your first appointment.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Generally, referrals from general practitioners are current for 12 months from the date you are first seen and 3 months if the referral is from another specialist.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                  <p className="text-gray-700 leading-relaxed">
                    All in room consultations are classed as outpatient services; they can be claimed through Medicare for a partial refund. Private health insurance provides cover for inpatient care only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
