import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#9A7B4F] mb-6">
              Funky Getaway
            </h3>
            <p className="text-neutral-400">
              Your premium travel partner for extraordinary experiences and luxury
              destinations worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-neutral-400 hover:text-white"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/study-abroad"
                  className="text-neutral-400 hover:text-white"
                >
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link
                  href="/e-visa"
                  className="text-neutral-400 hover:text-white"
                >
                  E-visa Services
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="text-neutral-400 hover:text-white"
                >
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/flights"
                  className="text-neutral-400 hover:text-white"
                >
                  Flight Booking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={20} className="text-[#9A7B4F] mr-2" />
                <span className="text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#9A7B4F] mr-2" />
                <span className="text-neutral-400">info@funkygetaway.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="text-[#9A7B4F] mr-2" />
                <span className="text-neutral-400">
                  123 Luxury Avenue, Suite 456, New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-neutral-400">
            © {new Date().getFullYear()} Funky Getaway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}