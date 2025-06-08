import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent } from '../components/ui/card'
// import { Separator } from '../components/ui/separator'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Dr. Sarika Bhadange</h1>

      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg mb-6">
              I always aspired to become an Obstetrician-Gynaecologist.
            </p>
            <p className="text-lg mb-6">
              Since I was a medical student, I believed that women deserve compassionate and knowledgeable care at every stage of life.
            </p>
            <p className="text-lg mb-6">
              After completing my MBBS and post-graduation in Obstetrics and Gynaecology from a prestigious University in Mumbai, India, I came to Australia in 2006 with my family. I fell in love with this country and found my purpose in building a career for its women.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Professional Journey</h2>
            <p className="text-lg mb-6">
              I worked in many Queensland Hospitals like QEll Hospital, Redland Hospital, Royal Brisbane and Women Hospital and Mackay Base Hospital to complete my fellowship of Royal Australian New Zealand College of Obstetrics and Gynaecology.
            </p>
            <p className="text-lg mb-6">
              I was honoured to be awarded with fellowship - FRANZCOG - in 2017. The following year, I completed my Fellowship year in Paediatric and Adolescent Gynaecology (PAG) at Royal Brisbane and Women's Hospital (RBWH) and Queensland Children Hospital (QCH).
            </p>
            <p className="text-lg mb-6">
              Creating my own Gynaecology practice "Excel Womancare Pty Ltd" was more than a career goal. It was a lifelong passion rooted in a belief that every woman deserves dignified, expert gynaecology care.
            </p>
            <p className="text-lg">
              I joined Ipswich Hospital as a Consultant in 2019, which fulfils my other passion - participation in research and guiding the next generation of doctors through mentorship and hands-on training.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Personal Life</h2>
            <p className="text-lg mb-6">
              I maintain work life balance through simple, grounded activities like daily exercise, meditation and spending quality time with my two beautiful boys and lovely husband.
            </p>
            <p className="text-lg">
              I love doing in nature whether it's hiking, walking, gardening or simply being outdoors.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
