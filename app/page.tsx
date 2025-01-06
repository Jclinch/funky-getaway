"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HolidayPackages from "@/components/HolidayPackages";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import SocialMedia from "@/components/SocialMedia";
import { SuccessStats } from "@/components/success-stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HolidayPackages />
      <PopularDestinations />
      <SuccessStats />
      <Testimonials />
      <SocialMedia />
    </main>
  );
}