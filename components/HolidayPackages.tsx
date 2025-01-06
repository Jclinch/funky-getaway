"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Corrected imports
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Maldives Luxury Escape",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80",
    duration: "7 Days",
    price: "$3,999",
  },
  {
    title: "Swiss Alps Adventure",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80",
    duration: "10 Days",
    price: "$4,599",
  },
  {
    title: "Dubai Luxury Tour",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    duration: "5 Days",
    price: "$2,999",
  },
  {
    title: "Paris Romantic Getaway",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80",
    duration: "6 Days",
    price: "$2,799",
  },
  {
    title: "Safari Adventure in Kenya",
    image: "https://images.unsplash.com/photo-1591129250837-b40afb3609e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMG5ha3VydXxlbnwwfHwwfHx8MA%3D%3D", // Fixed image link
    duration: "8 Days",
    price: "$3,199",
  },
  {
    title: "Thailand Tropical Retreat",
    image: "https://images.unsplash.com/photo-1667842288007-ea49b67ce9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D", // Fixed image link
    duration: "5 Days",
    price: "$1,999",
  },
];

export default function HolidayPackages() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-neutral-900 mb-4">
            Holiday Packages
          </h2>
          <p className="text-lg text-neutral-600">
            Exclusive packages for unforgettable experiences
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]} // Enable pagination module
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            type: "bullets",
          }} // Make the pagination dots clickable
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="holiday-carousel"
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <Card className="overflow-hidden border-none shadow-lg mb-12 z-50">
                <div className="relative h-64">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-neutral-600">{pkg.duration}</span>
                    <span className="text-orange font-semibold">
                      {pkg.price}
                    </span>
                  </div>
                  <Button className="w-full bg-orange hover:bg-blue-base">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Position pagination dots below the carousel */}
        <div className="swiper-pagination mt-8" />
      </div>
    </section>
  );
}
