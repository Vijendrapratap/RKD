"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, Phone } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/rkd-logo.png"
              alt="RKD - Repair ki Dukaan"
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
              My Bookings
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <Link 
              href="/book"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/dashboard" 
                className="text-foreground hover:text-primary transition-colors font-medium"
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