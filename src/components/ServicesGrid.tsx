"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
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
  Tv
} from "lucide-react";

const services = [
  {
    id: "plumbing",
    name: "Plumbing",
    icon: Droplet,
    description: "Pipe repair, tap fixing, drainage",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80",
    color: "bg-blue-500"
  },
  {
    id: "electrician",
    name: "Electrician",
    icon: Zap,
    description: "Wiring, switches, fixture installation",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
    color: "bg-yellow-500"
  },
  {
    id: "cleaning",
    name: "Cleaning",
    icon: Sparkles,
    description: "Deep cleaning, regular maintenance",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
    color: "bg-green-500"
  },
  {
    id: "ac-repair",
    name: "AC Repair",
    icon: Wind,
    description: "Service, repair, installation",
    image: "https://images.unsplash.com/photo-1631545806609-4b8d76c23b5e?w=400&q=80",
    color: "bg-cyan-500"
  },
  {
    id: "painting",
    name: "Painting",
    icon: Paintbrush,
    description: "Interior & exterior painting",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
    color: "bg-purple-500"
  },
  {
    id: "carpentry",
    name: "Carpentry",
    icon: Hammer,
    description: "Furniture repair & installation",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80",
    color: "bg-orange-500"
  },
  {
    id: "appliance",
    name: "Appliance Repair",
    icon: Refrigerator,
    description: "Washing machine, fridge, microwave",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&q=80",
    color: "bg-red-500"
  },
  {
    id: "pest-control",
    name: "Pest Control",
    icon: Bug,
    description: "Cockroach, termite, rodent control",
    image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&q=80",
    color: "bg-pink-500"
  },
  {
    id: "home-renovation",
    name: "Home Renovation",
    icon: Wrench,
    description: "Complete home makeover",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80",
    color: "bg-indigo-500"
  },
  {
    id: "gardening",
    name: "Gardening",
    icon: Leaf,
    description: "Lawn care, plant maintenance",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    color: "bg-emerald-500"
  },
  {
    id: "tv-installation",
    name: "TV Installation",
    icon: Tv,
    description: "Wall mounting, setup, calibration",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
    color: "bg-slate-500"
  },
  {
    id: "upholstery",
    name: "Upholstery",
    icon: Sofa,
    description: "Sofa, chair, cushion cleaning",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    color: "bg-amber-500"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional home services at your fingertips. Choose from our wide range of trusted services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-3 left-3 ${service.color} p-2 rounded-lg`}>
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}