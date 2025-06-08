import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Separator } from '../components/ui/separator'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Ipswich Location */}
        <Card>
          <CardHeader>
            <CardTitle>Ipswich Location</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Suite 5, 16 Limestone Street<br />
              Ipswich 4300
            </p>
            <Separator className="my-4" />
            <div className="space-y-2">
              <p><strong>Phone:</strong> 07 3444 4870</p>
              <p><strong>Fax:</strong> 07 3444 4869</p>
              <p><strong>Email:</strong> reception@excelwomancare.com.au</p>
            </div>
          </CardContent>
        </Card>

        {/* Springfield Location */}
        <Card>
          <CardHeader>
            <CardTitle>Springfield Location</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Mater Hub<br />
              95 Southern Cross Circuit<br />
              Springfield Central QLD 4300
            </p>
            <Separator className="my-4" />
            <div className="space-y-2">
              <p><strong>Phone:</strong> 07 3444 4870</p>
              <p><strong>Fax:</strong> 07 3444 4869</p>
              <p><strong>Email:</strong> reception@excelwomancare.com.au</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Office Hours */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Office Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">8am - 1pm, Monday to Wednesday</p>
          <Separator className="my-4" />
          <p className="text-muted-foreground">
            Please leave a message or send an email on excelwomancare@gmail.com for any enquiries outside office hours and we will try to get back to you as soon as possible.
          </p>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="mt-8 bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Emergency Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">
            For medical emergencies out of hours contact St Andrew's Ipswich Private Hospital on 07 3816 9999 or "000".
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
