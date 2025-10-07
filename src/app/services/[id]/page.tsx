"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  CheckCircle, 
  Clock, 
  Shield, 
  IndianRupee,
  ArrowRight
} from "lucide-react";

const serviceData: Record<string, any> = {
  plumbing: {
    name: "Plumbing Services",
    tagline: "Expert plumbers for all your needs",
    description: "Professional plumbing solutions for leaks, installations, repairs, and maintenance. Our certified plumbers ensure quality work with a satisfaction guarantee.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80",
    rating: 4.8,
    reviews: 1250,
    startingPrice: 299,
    services: [
      { name: "Tap Repair & Installation", price: 299 },
      { name: "Pipe Leak Fixing", price: 499 },
      { name: "Toilet Repair", price: 599 },
      { name: "Sink Installation", price: 799 },
      { name: "Water Tank Cleaning", price: 1299 },
      { name: "Drainage Cleaning", price: 899 }
    ],
    features: [
      "Background-verified professionals",
      "30-day service warranty",
      "Emergency 24/7 availability",
      "Transparent pricing"
    ],
    professionals: [
      { name: "Ramesh Kumar", rating: 4.9, jobs: 850, image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80" },
      { name: "Suresh Sharma", rating: 4.8, jobs: 720, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
      { name: "Vijay Singh", rating: 4.7, jobs: 650, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
    ]
  },
  electrician: {
    name: "Electrician Services",
    tagline: "Certified electricians you can trust",
    description: "Safe and reliable electrical services for homes and offices. From wiring to fixture installation, our licensed electricians handle all electrical work.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
    rating: 4.9,
    reviews: 980,
    startingPrice: 349,
    services: [
      { name: "Switch & Socket Repair", price: 349 },
      { name: "Fan Installation", price: 499 },
      { name: "Light Fixture Setup", price: 599 },
      { name: "Wiring Work", price: 1299 },
      { name: "MCB & Fuse Repair", price: 699 },
      { name: "Inverter Installation", price: 1999 }
    ],
    features: [
      "Licensed electricians",
      "Safety-first approach",
      "Quality materials used",
      "Emergency service available"
    ],
    professionals: [
      { name: "Amit Patel", rating: 4.9, jobs: 920, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" },
      { name: "Rohit Verma", rating: 4.8, jobs: 780, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" }
    ]
  },
  cleaning: {
    name: "Cleaning Services",
    tagline: "Professional cleaning for a spotless home",
    description: "Deep cleaning and regular maintenance services to keep your home fresh and hygienic. Our trained cleaners use eco-friendly products.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    rating: 4.7,
    reviews: 2100,
    startingPrice: 599,
    services: [
      { name: "Bathroom Deep Cleaning", price: 599 },
      { name: "Kitchen Cleaning", price: 799 },
      { name: "Full House Cleaning", price: 1999 },
      { name: "Sofa Cleaning", price: 899 },
      { name: "Carpet Cleaning", price: 999 },
      { name: "Window Cleaning", price: 499 }
    ],
    features: [
      "Eco-friendly products",
      "Trained cleaning staff",
      "Flexible scheduling",
      "Satisfaction guaranteed"
    ],
    professionals: [
      { name: "Sunita Devi", rating: 4.8, jobs: 1200, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" },
      { name: "Meena Sharma", rating: 4.7, jobs: 980, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" }
    ]
  },
  "ac-repair": {
    name: "AC Repair & Service",
    tagline: "Keep your space cool and comfortable",
    description: "Complete air conditioning solutions including installation, repair, servicing, and maintenance for all AC types.",
    image: "https://images.unsplash.com/photo-1631545806609-4b8d76c23b5e?w=1200&q=80",
    rating: 4.8,
    reviews: 1450,
    startingPrice: 399,
    services: [
      { name: "AC Gas Refill", price: 1299 },
      { name: "AC Servicing", price: 399 },
      { name: "AC Installation", price: 1999 },
      { name: "AC Repair", price: 699 },
      { name: "AC Deep Cleaning", price: 899 },
      { name: "AC Uninstallation", price: 599 }
    ],
    features: [
      "Expert AC technicians",
      "Genuine spare parts",
      "90-day warranty",
      "All brands serviced"
    ],
    professionals: [
      { name: "Rajesh Kumar", rating: 4.9, jobs: 1100, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
      { name: "Anil Gupta", rating: 4.8, jobs: 890, image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80" }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  const service = serviceData[serviceId] || serviceData.plumbing;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              {service.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{service.rating}</span>
                <span className="text-white/80">({service.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <IndianRupee className="h-4 w-4" />
                <span className="font-semibold">Starting at ₹{service.startingPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>

              {/* Services & Pricing */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Services & Pricing</h2>
                <div className="space-y-3">
                  {service.services.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary font-semibold">
                        <IndianRupee className="h-4 w-4" />
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Features */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Top Professionals */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Top Professionals</h2>
                <div className="space-y-4">
                  {service.professionals.map((pro: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={pro.image} alt={pro.name} />
                          <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{pro.name}</h4>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span>{pro.rating}</span>
                            </div>
                            <span>•</span>
                            <span>{pro.jobs} jobs completed</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Book This Service</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Available 24/7</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Shield className="h-4 w-4" />
                        <span>30-day warranty</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4" />
                        <span>Verified professionals</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold">₹{service.startingPrice}</span>
                      <span className="text-muted-foreground text-sm">onwards</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      Final price may vary based on service requirements
                    </p>
                  </div>

                  <Link href="/book" className="block">
                    <Button className="w-full" size="lg">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <p className="text-xs text-center text-muted-foreground">
                    Get instant confirmation after booking
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}