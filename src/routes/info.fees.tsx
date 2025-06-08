import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/info/fees')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Fees
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Understanding our fee structure and payment options
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">
                  Please contact our friendly reception team for the detailed fee structure.
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">
                  Please note we are not a Bulk Billing practice. Sarika Bhadange is a known gap provider.
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">
                  Patients requiring an operation will be subject to a surgical gap fee. This fee does not attract a rebate and is a patient 'out of pocket cost'.
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">
                  The amount will be communicated to you by reception staff at the time of scheduling your operative appointment.
                </p>
              </div>

              <div className="flex items-start">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 mt-1.5"></div>
                <p className="text-gray-700 leading-relaxed">
                  Your Anaesthetist will call you prior to the surgery. They will charge an 'out of pocket fee' for their services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
