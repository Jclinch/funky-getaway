import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "The luxury experience provided by Funky Getaway was beyond my expectations. Every detail was perfectly arranged.",
  },
  {
    name: "Michael Chen",
    role: "Travel Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    quote: "Their attention to detail and personalized service made our family vacation truly memorable.",
  },
  {
    name: "Emma Williams",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "Funky Getaway's expertise in luxury travel arrangements is unmatched. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600">
            Hear from our satisfied travelers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-none shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}