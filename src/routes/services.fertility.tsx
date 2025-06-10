import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/fertility')({
  component: FertilityServices,
})

function FertilityServices() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}

        </div>
      </div>
    </div>
  )
}
