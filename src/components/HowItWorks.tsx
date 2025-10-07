"use client";

import { Card } from "@/components/ui/card";
import { Search, Calendar, CheckCircle, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Select Service",
    description: "Choose from our wide range of professional home services",
    color: "bg-blue-500"
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Pick your preferred date and time slot that works for you",
    color: "bg-purple-500"
  },
  {
    icon: CheckCircle,
    title: "Get It Done",
    description: "Our verified professional arrives and completes the job",
    color: "bg-green-500"
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Share your experience and help others make informed decisions",
    color: "bg-orange-500"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your home services done is easy with RKD. Just follow these simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className={`${step.color} p-4 rounded-2xl`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied customers who trust RKD for their home service needs
          </p>
        </div>
      </div>
    </section>
  );
}