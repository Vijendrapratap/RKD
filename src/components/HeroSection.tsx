"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🏆 India's Most Trusted Home Services
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quality Home Services{" "}
              <span className="text-primary">At Your Doorstep</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Book verified professionals for plumbing, electrical, cleaning, and more. 
              Available 24/7 with transparent pricing and quality guarantee.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 border rounded-lg">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for services..."
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border rounded-lg sm:w-auto">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter location"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 sm:w-32"
                />
              </div>
              <Button size="lg" className="sm:w-auto">
                Search
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2K+</div>
                <div className="text-sm text-muted-foreground">Verified Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              alt="Professional technician"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Floating Cards */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Available Now</div>
                <div className="font-semibold">24/7 Service</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Booking Time</div>
                <div className="font-semibold">Under 60 Sec</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}