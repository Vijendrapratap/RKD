"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105 shadow-lg w-fit">
                <Image
                  src="/logo.png"
                  alt="RKD - Repair ki Dukaan"
                  width={160}
                  height={55}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-100">
              Your trusted partner for all home services. Quality, reliability, and satisfaction guaranteed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-100">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-100">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-100">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-100">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-100 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-100 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-sm text-gray-100 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/dashboard" className="text-sm text-gray-100 hover:text-primary transition-colors">My Bookings</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-100 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/plumbing" className="text-sm text-gray-100 hover:text-primary transition-colors">Plumbing</Link></li>
              <li><Link href="/services/electrician" className="text-sm text-gray-100 hover:text-primary transition-colors">Electrician</Link></li>
              <li><Link href="/services/cleaning" className="text-sm text-gray-100 hover:text-primary transition-colors">Home Cleaning</Link></li>
              <li><Link href="/services/ac-repair" className="text-sm text-gray-100 hover:text-primary transition-colors">AC Repair</Link></li>
              <li><Link href="/services/painting" className="text-sm text-gray-100 hover:text-primary transition-colors">Painting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-100">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-100">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>support@rkd.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-100">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-100">
              © 2025 RKD - Repair ki Dukaan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-100 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-100 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;