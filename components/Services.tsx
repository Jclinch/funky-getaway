"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Plane,
  Hotel,
  CreditCard,
  Shield,
  Calendar,
  Package,
  BadgeCheck,
  HelpingHand,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Holiday Packages",
    icon: Package,
    description: "Curated luxury vacation packages for unforgettable experiences",
    image: "https://plus.unsplash.com/premium_photo-1661964304872-7b715cf38cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Ticketing and Reservation",
    icon: Calendar,
    description: "Premium flight and activity booking services",
    image: "https://media.gettyimages.com/id/1207226731/photo/young-woman-looking-for-airline-tickets-on-laptop.jpg?s=612x612&w=0&k=20&c=t3wlxtNZWNeTiFVQVAmekHWBPN87SbXPGFZsFnGSaAE="
  },
  {
    title: "Visa Assistance",
    icon: HelpingHand,
    description: "Expert guidance for visa application process",
    image: "https://plus.unsplash.com/premium_photo-1663100435889-832993ab7547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlzYSUyMGFzc2lzdGFuY2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Travel Insurance",
    icon: Shield,
    description: "Comprehensive travel protection plans",
    image: "https://images.unsplash.com/photo-1534387435-e9ff5846dac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZsaWdodCUyMGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Approved Visas",
    icon: BadgeCheck,
    description: "High success rate in visa approvals",
    image: "https://images.unsplash.com/photo-1654163600175-efc47ce20b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFwcHJvdmVkJTIwdmlzYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Flight Booking",
    icon: Plane,
    description: "Access to exclusive flight deals and business class options",
    image: "https://plus.unsplash.com/premium_photo-1684407617010-4ba587dc20f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcHJvdmVkJTIwdmlzYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Hotel Booking",
    icon: Hotel,
    description: "Luxury accommodation arrangements worldwide",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww"
  },
  {
    title: "Payment",
    icon: CreditCard,
    description: "Secure and flexible payment options",
    image: "https://plus.unsplash.com/premium_photo-1681336549302-194665803444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBheW1lbnR8ZW58MHx8MHx8fDA%3D"
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-in-out",
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-800">
            Comprehensive travel solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
           <Card
           key={service.title}
           className="relative border-none shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 group rounded-lg" // Add `group` for hover effects
           data-aos="fade-up"
         >
           {/* Overlay */}
           <div
             className="absolute inset-0 hover:bg-orange/40 transition-colors duration-300 z-50 rounded-lg"
            //  style={{
            //    backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.5), rgba(255, 165, 0, 0.5))`,
            //  }}
           ></div>
         
           {/* Background Image */}
           <div
             className="absolute inset-0 rounded-lg"
             style={{
               backgroundImage: `url(${service.image})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               zIndex: 10, // Lower z-index than overlay
             }}
           ></div>
         
           {/* Content */}
           <CardContent className="py-6 px-0 flex flex-col items-center text-center relative z-40 hover:text-blue-base w-full">
  <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md mb-4">
    <service.icon className="w-8 h-8 text-blue-dark" strokeWidth={1.5} />
  </div>

  {/* Title with full-width black background */}
  <div className="text-xl text-gray-100 font-semibold  z-50 bg-black/40 w-full px-4 py-2">
    {service.title}
  </div>

  {/* Description with full-width black background */}
  <p className="text-sm text-gray-200 bg-black/40 w-full px-4 py-2">
    {service.description}
  </p>
</CardContent>

         </Card>
         
          
          
          ))}
        </div>
      </div>
    </section>
  );
}
