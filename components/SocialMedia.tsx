import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
  },
  {
    name: "Youtube",
    icon: Youtube,
    href: "#",
  },
];

export default function SocialMedia() {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
          <p className="text-lg text-neutral-400">
            Follow our social media for travel inspiration and updates
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-white hover:text-[#9A7B4F] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}