"use client";

import { Card } from "@/components/ui/card";
import { Shield, Clock, Award, ThumbsUp, BadgeCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    description: "All our service providers are background-verified and trained experts"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "30-day warranty on all services with quality assurance"
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Punctual professionals who respect your time and schedule"
  },
  {
    icon: Award,
    title: "Best Prices",
    description: "Transparent pricing with no hidden charges or surprises"
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We don't rest until you're 100% satisfied with the service"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your queries"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose RKD?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering exceptional home services with professionalism and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}