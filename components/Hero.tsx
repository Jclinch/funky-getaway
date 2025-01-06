import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80"
        alt="Luxury Travel"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experience Luxury Travel
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover extraordinary destinations with our premium travel services
          </p>
          <Button
            size="lg"
            className="bg-orange hover:bg-blue-base text-white px-8 py-6 text-lg"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
}