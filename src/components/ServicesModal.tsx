import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Link } from "@tanstack/react-router"

interface ServicesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  const services = [
    {
      title: "Gynaecology",
      image: "gynaecology.jpg",
      href: "/services/gynaecology"
    },
    {
      title: "Obstetrics",
      image: "obstetrics.jpg",
      href: "/services/obstetrics"
    },
    {
      title: "Fertility",
      image: "fertility.jpg",
      href: "/services/obstetrics#fertility"
    }
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-12">Our Services</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center">
              <Link href={service.href} className="relative w-36 h-36 mb-6 group">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
