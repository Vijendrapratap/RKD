import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, Target, Award, Heart, Shield } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - RKD | Repair ki Dukaan",
  description: "Learn about RKD's mission to provide reliable, professional home services across India. Our story, values, and commitment to excellence.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About RKD - Repair ki Dukaan
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your trusted partner in home services, connecting you with skilled professionals
              who care about quality and your satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a simple vision - to make quality home services accessible,
                  reliable, and hassle-free for everyone. RKD (Repair ki Dukaan) started as
                  a small team of passionate professionals who understood the frustration of
                  finding trustworthy service providers.
                </p>
                <p>
                  Today, we've grown into India's leading home services platform, connecting
                  thousands of verified professionals with homeowners across major cities. Our
                  journey has been driven by one core belief: every home deserves the best care.
                </p>
                <p>
                  From emergency plumbing repairs to complete home renovations, we've facilitated
                  over 100,000+ successful service bookings, earning the trust of families across
                  the nation.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Reliability",
                description: "Every professional is thoroughly verified, background-checked, and trained to deliver exceptional service.",
                color: "text-blue-600"
              },
              {
                icon: Heart,
                title: "Customer First",
                description: "Your satisfaction is our priority. We go above and beyond to ensure every service exceeds expectations.",
                color: "text-red-600"
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "We maintain the highest standards of workmanship and use only quality materials and tools.",
                color: "text-yellow-600"
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "Building lasting relationships with our customers and empowering local service professionals.",
                color: "text-green-600"
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Leveraging technology to make home services more accessible, transparent, and efficient.",
                color: "text-purple-600"
              },
              {
                icon: CheckCircle2,
                title: "Transparency",
                description: "Clear pricing, honest communication, and no hidden charges. What you see is what you get.",
                color: "text-cyan-600"
              }
            ].map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                <value.icon className={`h-12 w-12 ${value.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Making a difference, one service at a time
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "100K+", label: "Happy Customers" },
              { number: "5000+", label: "Verified Professionals" },
              { number: "15+", label: "Cities Covered" },
              { number: "4.8/5", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg opacity-90">
                To revolutionize the home services industry by creating a seamless,
                trustworthy platform that connects homeowners with skilled professionals,
                ensuring quality service delivery at fair prices while empowering local
                service providers to grow their businesses.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg opacity-90">
                To become India's most trusted and comprehensive home services platform,
                where every household has instant access to reliable, professional services
                and every service provider has the opportunity to build a thriving business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the difference of working with verified professionals who care about quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              Book a Service
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
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
