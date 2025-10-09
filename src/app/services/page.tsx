"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Wrench,
  Zap,
  Droplet,
  Sparkles,
  Wind,
  Paintbrush,
  Hammer,
  Sofa,
  Bug,
  Leaf,
  Refrigerator,
  Tv,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "plumbing",
    name: "Plumbing Services",
    icon: Droplet,
    description: "Professional plumbing solutions for all your needs",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80",
    color: "bg-blue-500",
    features: ["Leak repairs", "Pipe installation", "Drain cleaning", "Bathroom fittings"]
  },
  {
    id: "electrician",
    name: "Electrical Services",
    icon: Zap,
    description: "Licensed electricians for safe and reliable work",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
    color: "bg-yellow-500",
    features: ["Wiring & rewiring", "Switch repairs", "Light installation", "Emergency fixes"]
  },
  {
    id: "ac-repair",
    name: "AC Repair & Service",
    icon: Wind,
    description: "Keep your space cool with expert AC services",
    image: "https://images.unsplash.com/photo-1631545806609-4b8d76c23b5e?w=400&q=80",
    color: "bg-cyan-500",
    features: ["Gas filling", "Deep cleaning", "Installation", "Maintenance"]
  },
  {
    id: "cleaning",
    name: "Home Cleaning",
    icon: Sparkles,
    description: "Spotless homes with professional cleaning",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
    color: "bg-green-500",
    features: ["Deep cleaning", "Regular maintenance", "Kitchen cleaning", "Bathroom sanitization"]
  },
  {
    id: "painting",
    name: "Painting Services",
    icon: Paintbrush,
    description: "Transform your space with quality painting",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
    color: "bg-purple-500",
    features: ["Interior painting", "Exterior painting", "Texture work", "Color consultation"]
  },
  {
    id: "carpentry",
    name: "Carpentry Services",
    icon: Hammer,
    description: "Expert woodwork and furniture solutions",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80",
    color: "bg-orange-500",
    features: ["Furniture repair", "Custom carpentry", "Door & window work", "Cabinet installation"]
  },
  {
    id: "appliance",
    name: "Appliance Repair",
    icon: Refrigerator,
    description: "Fix your appliances with skilled technicians",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&q=80",
    color: "bg-red-500",
    features: ["Washing machine", "Refrigerator", "Microwave", "Dishwasher"]
  },
  {
    id: "pest-control",
    name: "Pest Control",
    icon: Bug,
    description: "Safe and effective pest elimination",
    image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&q=80",
    color: "bg-pink-500",
    features: ["Cockroach control", "Termite treatment", "Rodent control", "Mosquito control"]
  },
  {
    id: "home-renovation",
    name: "Home Renovation",
    icon: Wrench,
    description: "Complete home transformation services",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80",
    color: "bg-indigo-500",
    features: ["Complete makeover", "Modular solutions", "Interior design", "Project management"]
  },
  {
    id: "gardening",
    name: "Gardening Services",
    icon: Leaf,
    description: "Keep your garden beautiful and healthy",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    color: "bg-emerald-500",
    features: ["Lawn maintenance", "Plant care", "Landscaping", "Garden design"]
  },
  {
    id: "tv-installation",
    name: "TV Installation",
    icon: Tv,
    description: "Professional TV mounting and setup",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    color: "bg-slate-500",
    features: ["Wall mounting", "Cable management", "Setup & calibration", "Sound system"]
  },
  {
    id: "upholstery",
    name: "Upholstery Cleaning",
    icon: Sofa,
    description: "Deep cleaning for sofas and furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    color: "bg-amber-500",
    features: ["Sofa cleaning", "Chair cleaning", "Stain removal", "Fabric protection"]
  }
];

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const locationQuery = searchParams.get("location") || "";

  // Filter services based on search query
  const filteredServices = useMemo(() => {
    if (!searchQuery && !locationQuery) {
      return services;
    }

    return services.filter((service) => {
      const matchesSearch = !searchQuery ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesSearch;
    });
  }, [searchQuery, locationQuery]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Our Services"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {searchQuery
                ? `Found ${filteredServices.length} service${filteredServices.length !== 1 ? 's' : ''} matching your search`
                : "Professional home services delivered by verified experts. Choose from our comprehensive range of services to keep your home in perfect condition."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No services found matching your search.</p>
              <p className="text-muted-foreground">Try searching for something else or browse all our services below.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className={`absolute top-4 left-4 ${service.color} p-3 rounded-lg`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Book Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Card>
              </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to ensure your complete satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Professionals",
                description: "All service providers are background-checked, trained, and certified",
                icon: "🔒"
              },
              {
                title: "Transparent Pricing",
                description: "No hidden charges. Get clear pricing before you book",
                icon: "💰"
              },
              {
                title: "Quality Guarantee",
                description: "30-day service warranty on all work completed",
                icon: "✅"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support for your convenience",
                icon: "🕐"
              },
              {
                title: "Instant Booking",
                description: "Book services in minutes through our easy platform",
                icon: "⚡"
              },
              {
                title: "Insured Services",
                description: "All services covered by comprehensive insurance",
                icon: "🛡️"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book a Service?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get instant quotes from verified professionals in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground/10 border-2 border-white rounded-lg hover:bg-primary-foreground/20 transition-colors font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
