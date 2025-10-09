"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    service: "Plumbing",
    review: "Excellent service! The plumber arrived on time and fixed my leaking tap within 30 minutes. Very professional and courteous."
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    service: "AC Repair",
    review: "Best AC repair service I've ever used. The technician was knowledgeable and explained everything clearly. Highly recommended!"
  },
  {
    name: "Anita Desai",
    location: "Bangalore",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    service: "Deep Cleaning",
    review: "The cleaning team did an amazing job! My home looks spotless. They were thorough and paid attention to every detail."
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    service: "Electrician",
    review: "Quick and efficient electrical work. The electrician was skilled and completed the wiring job perfectly. Great experience!"
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    service: "Painting",
    review: "Outstanding painting service! The team transformed my living room. Clean work and completed within the promised time."
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    service: "Pest Control",
    review: "Very effective pest control service. Haven't seen a single cockroach since the treatment. Professional and reliable!"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="mb-3">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded">
                  {testimonial.service}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.review}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;