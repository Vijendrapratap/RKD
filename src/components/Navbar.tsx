"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, Phone, ChevronDown } from "lucide-react";
import { locations } from "@/lib/locations";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105 shadow-lg">
              <Image
                src="/logo.png"
                alt="RKD - Repair ki Dukaan"
                width={160}
                height={55}
                priority
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors font-medium">
              Home
            </Link>

            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                onBlur={() => setTimeout(() => setIsLocationDropdownOpen(false), 200)}
                className="flex items-center space-x-1 text-white hover:text-primary transition-colors font-medium"
              >
                <MapPin className="h-4 w-4" />
                <span>Locations</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLocationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/${location.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                      onClick={() => setIsLocationDropdownOpen(false)}
                    >
                      <div className="font-medium">{location.name}</div>
                      <div className="text-xs text-muted-foreground">{location.state}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/services" className="text-white hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition-colors font-medium">
              About Us
            </Link>
            <Link href="/dashboard" className="text-white hover:text-primary transition-colors font-medium">
              My Bookings
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <Link
              href="/book"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/dashboard"
                className="text-white hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                My Bookings
              </Link>
              <Link
                href="/book"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;