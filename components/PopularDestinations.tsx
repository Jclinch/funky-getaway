import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80",
    description: "Iconic white buildings and stunning sunsets",
  },
  {
    name: "Bora Bora",
    image: "https://media.gettyimages.com/id/157481130/photo/dream-holiday-luxury-resort.jpg?s=612x612&w=0&k=20&c=XvhyClnSR-Ljkg3JP9qXbCK2AHECoGH18Bc4psFSFhQ=",
    description: "Crystal clear waters and overwater bungalows",
  },
  {
    name: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80",
    description: "Romantic canals and historic architecture",
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80",
    description: "Modern city with rich cultural heritage",
  },
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&q=80",
    description: "The city of love with iconic landmarks",
  },
  {
    name: "Maui, Hawaii",
    image: "https://plus.unsplash.com/premium_photo-1669748156838-33fda144e8dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWF1aSUyQyUyMEhhd2FpaSUyMFRyb3BpY2FsJTIwcGFyYWRpc2UlMjB3aXRoJTIwc3R1bm5pbmclMjBiZWFjaGVzfGVufDB8fDB8fHww",
    description: "Tropical paradise with stunning beaches",
  },
  {
    name: "Cappadocia, Turkey",
    image: "https://media.gettyimages.com/id/1175883292/photo/young-woman-and-hot-air-balloons-in-the-evening-goreme-cappadocia-turkey.jpg?s=612x612&w=0&k=20&c=1LpyQ7VmZkBWZq0EiQI5Zkp1LJkQkYx1cbutYGsoQXY=",
    description: "Hot air balloons and unique rock formations",
  },
  {
    name: "New York City, USA",
    image: "https://media.gettyimages.com/id/980839220/photo/the-definition-of-adventure-city-that-never-sleeps-new-york-city.jpg?s=612x612&w=0&k=20&c=D8fSdtwnSpHKqJQcXtOKLaEH47uKnR9YXZjMtFqJodI=",
    description: "The city that never sleeps",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-neutral-600">
            Explore our most sought-after luxury destinations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {destinations.map((destination) => (
            <div key={destination.name} className="relative group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-2xl font-semibold">{destination.name}</h3>
                  <p className="text-lg mt-2">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
