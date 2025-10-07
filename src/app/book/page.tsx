"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Clock, MapPin, User, Phone, Mail, CheckCircle } from "lucide-react";
import { format } from "date-fns";

const services = [
  { id: "plumbing", name: "Plumbing" },
  { id: "electrician", name: "Electrician" },
  { id: "cleaning", name: "Cleaning" },
  { id: "ac-repair", name: "AC Repair" },
  { id: "painting", name: "Painting" },
  { id: "carpentry", name: "Carpentry" },
  { id: "appliance", name: "Appliance Repair" },
  { id: "pest-control", name: "Pest Control" }
];

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM"
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    timeSlot: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle booking submission
      console.log("Booking submitted:", { ...formData, date });
      setStep(4);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (step === 4) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 bg-gradient-to-br from-primary/5 to-secondary/20 flex items-center justify-center py-16 px-4">
          <Card className="max-w-lg w-full p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-500/10 p-4 rounded-full">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Your service has been scheduled successfully. We'll send you a confirmation email shortly.
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-6 text-left">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-semibold">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-semibold">{date ? format(date, "PPP") : "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-semibold">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Booking ID:</span>
                  <span className="font-semibold">RKD{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" onClick={() => window.location.href = "/dashboard"}>
                View Booking
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => window.location.href = "/"}>
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-secondary/10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`rounded-full h-10 w-10 flex items-center justify-center font-semibold ${
                    s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`h-1 w-12 mx-2 ${s < step ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <p className="text-sm text-muted-foreground">
                Step {step} of 3: {step === 1 ? "Service Details" : step === 2 ? "Schedule" : "Contact Info"}
              </p>
            </div>
          </div>

          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Select Service</h2>
                    <p className="text-muted-foreground mb-6">Choose the service you need</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service">Service Type *</Label>
                      <Select value={formData.service} onValueChange={(value) => updateFormData("service", value)} required>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.name}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the issue or service needed..."
                        value={formData.description}
                        onChange={(e) => updateFormData("description", e.target.value)}
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Schedule Appointment</h2>
                    <p className="text-muted-foreground mb-6">Pick your preferred date and time</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Select Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="timeSlot">Time Slot *</Label>
                      <Select value={formData.timeSlot} onValueChange={(value) => updateFormData("timeSlot", value)} required>
                        <SelectTrigger id="timeSlot">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                    <p className="text-muted-foreground mb-6">Provide your details for service delivery</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Service Address *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="address"
                          placeholder="Enter your complete address..."
                          className="pl-10"
                          value={formData.address}
                          onChange={(e) => updateFormData("address", e.target.value)}
                          rows={3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                    Back
                  </Button>
                )}
                <Button type="submit" className="flex-1">
                  {step === 3 ? "Confirm Booking" : "Continue"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}