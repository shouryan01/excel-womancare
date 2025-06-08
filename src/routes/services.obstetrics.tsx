import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export const Route = createFileRoute('/services/obstetrics')({
  component: ObstetricsServices,
})

function ObstetricsServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Obstetrics Services</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Comprehensive Obstetric Care</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              At Excel Womancare, we provide comprehensive obstetric care throughout your pregnancy journey. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-pregnancy counseling and planning</li>
              <li>Antenatal care and monitoring</li>
              <li>Pregnancy management</li>
              <li>High-risk pregnancy care</li>
              <li>Delivery services</li>
              <li>Postnatal care</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              We believe in providing personalized care that respects your choices and preferences while ensuring the highest standards of medical care. Our team is committed to supporting you through every step of your pregnancy journey with compassion and expertise.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
