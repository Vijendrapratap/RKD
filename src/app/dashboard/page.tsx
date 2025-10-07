"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  Settings,
  Heart,
  History
} from "lucide-react";

const mockBookings = [
  {
    id: "RKD123456",
    service: "Plumbing",
    professional: "Ramesh Kumar",
    professionalImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80",
    date: "2025-01-15",
    time: "10:00 AM - 11:00 AM",
    status: "confirmed",
    address: "123 MG Road, Bangalore",
    price: 499
  },
  {
    id: "RKD123455",
    service: "AC Repair",
    professional: "Rajesh Kumar",
    professionalImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "2025-01-12",
    time: "02:00 PM - 03:00 PM",
    status: "in-progress",
    address: "456 Koramangala, Bangalore",
    price: 899
  },
  {
    id: "RKD123454",
    service: "Cleaning",
    professional: "Sunita Devi",
    professionalImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    date: "2025-01-08",
    time: "09:00 AM - 10:00 AM",
    status: "completed",
    address: "789 Indiranagar, Bangalore",
    price: 1999
  },
  {
    id: "RKD123453",
    service: "Electrician",
    professional: "Amit Patel",
    professionalImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    date: "2025-01-05",
    time: "11:00 AM - 12:00 PM",
    status: "cancelled",
    address: "321 Whitefield, Bangalore",
    price: 599
  }
];

const statusConfig = {
  confirmed: {
    label: "Confirmed",
    color: "bg-blue-500/10 text-blue-600",
    icon: CheckCircle,
    iconColor: "text-blue-500"
  },
  "in-progress": {
    label: "In Progress",
    color: "bg-yellow-500/10 text-yellow-600",
    icon: AlertCircle,
    iconColor: "text-yellow-500"
  },
  completed: {
    label: "Completed",
    color: "bg-green-500/10 text-green-600",
    icon: CheckCircle,
    iconColor: "text-green-500"
  },
  cancelled: {
    label: "Cancelled",
    color: "bg-red-500/10 text-red-600",
    icon: XCircle,
    iconColor: "text-red-500"
  }
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bookings");

  const BookingCard = ({ booking }: { booking: any }) => {
    const status = statusConfig[booking.status as keyof typeof statusConfig];
    const StatusIcon = status.icon;

    return (
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <Avatar className="h-12 w-12">
              <AvatarImage src={booking.professionalImage} alt={booking.professional} />
              <AvatarFallback>{booking.professional.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{booking.service}</h3>
                  <p className="text-sm text-muted-foreground">{booking.professional}</p>
                </div>
                <Badge className={status.color}>
                  <StatusIcon className="h-3 w-3 mr-1" />
                  {status.label}
                </Badge>
              </div>
              
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{booking.date} at {booking.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{booking.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">₹{booking.price}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col gap-2">
            {booking.status === "confirmed" && (
              <>
                <Button variant="outline" size="sm" className="flex-1 md:w-32">
                  Reschedule
                </Button>
                <Button variant="outline" size="sm" className="flex-1 md:w-32 text-red-600 hover:text-red-700">
                  Cancel
                </Button>
              </>
            )}
            {booking.status === "completed" && (
              <Button size="sm" className="flex-1 md:w-32">
                Rate Service
              </Button>
            )}
            {booking.status === "in-progress" && (
              <Button size="sm" variant="outline" className="flex-1 md:w-32">
                Track
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-muted-foreground">Booking ID: {booking.id}</p>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-secondary/10 py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Dashboard</h1>
            <p className="text-muted-foreground">Manage your bookings and profile</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-sm text-muted-foreground">john.doe@email.com</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>

                <div className="space-y-2">
                  <Button
                    variant={activeTab === "bookings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("bookings")}
                  >
                    <History className="h-4 w-4 mr-2" />
                    My Bookings
                  </Button>
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button
                    variant={activeTab === "favorites" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("favorites")}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Bookings</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Completed</span>
                      <span className="font-semibold text-green-600">20</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Active</span>
                      <span className="font-semibold text-blue-600">2</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "bookings" && (
                <div className="space-y-6">
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList>
                      <TabsTrigger value="all">All Bookings</TabsTrigger>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                      <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-4 mt-6">
                      {mockBookings.map((booking) => (
                        <BookingCard key={booking.id} booking={booking} />
                      ))}
                    </TabsContent>

                    <TabsContent value="upcoming" className="space-y-4 mt-6">
                      {mockBookings
                        .filter(b => b.status === "confirmed" || b.status === "in-progress")
                        .map((booking) => (
                          <BookingCard key={booking.id} booking={booking} />
                        ))}
                    </TabsContent>

                    <TabsContent value="completed" className="space-y-4 mt-6">
                      {mockBookings
                        .filter(b => b.status === "completed")
                        .map((booking) => (
                          <BookingCard key={booking.id} booking={booking} />
                        ))}
                    </TabsContent>

                    <TabsContent value="cancelled" className="space-y-4 mt-6">
                      {mockBookings
                        .filter(b => b.status === "cancelled")
                        .map((booking) => (
                          <BookingCard key={booking.id} booking={booking} />
                        ))}
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {activeTab === "profile" && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                        <p className="mt-1 font-semibold">John Doe</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="mt-1 font-semibold">john.doe@email.com</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Phone</label>
                        <p className="mt-1 font-semibold">+91 98765 43210</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                        <p className="mt-1 font-semibold">January 2024</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button>Edit Profile</Button>
                    </div>
                  </div>
                </Card>
              )}

              {activeTab === "favorites" && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Favorite Professionals</h2>
                  <div className="space-y-4">
                    {[
                      { name: "Ramesh Kumar", service: "Plumbing", rating: 4.9, image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80" },
                      { name: "Sunita Devi", service: "Cleaning", rating: 4.8, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" }
                    ].map((pro, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={pro.image} />
                            <AvatarFallback>{pro.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{pro.name}</h4>
                            <p className="text-sm text-muted-foreground">{pro.service}</p>
                          </div>
                        </div>
                        <Button size="sm">Book Again</Button>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {activeTab === "settings" && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Notifications</h3>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Email notifications</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">SMS notifications</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Promotional offers</span>
                        </label>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}