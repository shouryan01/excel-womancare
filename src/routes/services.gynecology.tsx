import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export const Route = createFileRoute('/services/gynecology')({
  component: GynecologyServices,
})

function GynecologyServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gynecology Services</h1>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Comprehensive Gynecological Care</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              At Excel Womancare, we offer a wide range of gynecological services to support women's health at every stage of life. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Routine gynecological check-ups</li>
              <li>Contraception counseling and management</li>
              <li>Menstrual disorder treatment</li>
              <li>Fertility assessment and management</li>
              <li>Menopause management</li>
              <li>Gynecological surgery</li>
              <li>Adolescent gynecology</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              We are dedicated to providing expert gynecological care in a comfortable and supportive environment. Our approach combines medical expertise with a deep understanding of women's unique health needs, ensuring you receive the highest quality of care tailored to your individual circumstances.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
