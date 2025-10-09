import { NextRequest, NextResponse } from "next/server";

// Mock database - Replace with actual database queries
const citiesData = [
  {
    id: "1",
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    description: "Professional home services in Lucknow. Book verified experts for plumbing, electrical, AC repair, and more. Available 24/7.",
    phoneNumber: "+91 98765 43210",
    coordinates: { lat: 26.8467, lng: 80.9462 },
    status: "active",
    services: [
      { id: "srv_1", service: "Plumbing", status: "active" },
      { id: "srv_2", service: "Electrician", status: "active" },
      { id: "srv_3", service: "AC Repair", status: "active" },
      { id: "srv_4", service: "Cleaning", status: "active" },
      { id: "srv_5", service: "Painting", status: "active" }
    ],
    customHeading: "Professional Home Services in Lucknow",
    customContent: "Welcome to RKD's comprehensive home services in Lucknow. We offer a wide range of services including plumbing, electrical work, AC repair, cleaning, and painting. Our verified professionals ensure quality work at competitive prices.",
    metadata: {
      title: "Home Services in Lucknow | RKD - Repair ki Dukaan",
      description: "Professional home services in Lucknow. Book verified experts for plumbing, electrical, AC repair, and more. Available 24/7.",
      keywords: "home services lucknow, plumber lucknow, electrician lucknow, AC repair lucknow"
    }
  },
  {
    id: "2",
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    description: "Reliable home repair services in Delhi NCR",
    phoneNumber: "+91 98765 43211",
    coordinates: { lat: 28.7041, lng: 77.1025 },
    status: "active",
    services: [
      { id: "srv_1", service: "Plumbing", status: "active" },
      { id: "srv_2", service: "Electrician", status: "active" },
      { id: "srv_3", service: "AC Repair", status: "active" },
      { id: "srv_7", service: "Appliance Repair", status: "active" }
    ],
    customHeading: "Trusted Home Repair Services in Delhi NCR",
    customContent: "RKD brings reliable home services to Delhi NCR. From emergency plumbing to appliance repairs, our skilled technicians are ready to help 24/7.",
    metadata: {
      title: "Home Services in Delhi NCR | RKD - Expert Home Repairs",
      description: "Get trusted home services in Delhi NCR. Plumbing, electrical work, appliance repair, and more at your doorstep.",
      keywords: "home services delhi, plumber delhi, electrician delhi, repair services delhi"
    }
  },
  {
    id: "3",
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    description: "Expert home services in Mumbai",
    phoneNumber: "+91 98765 43212",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    status: "active",
    services: [
      { id: "srv_1", service: "Plumbing", status: "active" },
      { id: "srv_2", service: "Electrician", status: "active" },
      { id: "srv_4", service: "Cleaning", status: "active" },
      { id: "srv_5", service: "Painting", status: "active" },
      { id: "srv_8", service: "Pest Control", status: "active" }
    ],
    customHeading: "Expert Home Services Across Mumbai",
    customContent: "Experience hassle-free home maintenance in Mumbai with RKD. Our services include plumbing, painting, cleaning, and pest control by verified professionals.",
    metadata: {
      title: "Mumbai Home Services | RKD - Professional Repair Services",
      description: "Quality home services across Mumbai. Experienced professionals for all your home repair and maintenance needs.",
      keywords: "home services mumbai, plumber mumbai, painting services mumbai, cleaning services mumbai"
    }
  },
  {
    id: "4",
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    description: "Top-rated home services in Bangalore",
    phoneNumber: "+91 98765 43213",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    status: "active",
    services: [
      { id: "srv_2", service: "Electrician", status: "active" },
      { id: "srv_3", service: "AC Repair", status: "active" },
      { id: "srv_7", service: "Appliance Repair", status: "active" },
      { id: "srv_10", service: "TV Installation", status: "active" }
    ],
    customHeading: "Smart Home Services in Bangalore",
    customContent: "Bangalore's trusted platform for home repairs and maintenance. Book electricians, AC technicians, and appliance repair experts instantly.",
    metadata: {
      title: "Bangalore Home Services | RKD - Tech-Enabled Repairs",
      description: "Smart home services in Bangalore. Quick booking, verified professionals, and transparent pricing for all repairs.",
      keywords: "home services bangalore, electrician bangalore, AC service bangalore, appliance repair bangalore"
    }
  },
  {
    id: "5",
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    description: "Quality home services in Hyderabad",
    phoneNumber: "+91 98765 43214",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    status: "active",
    services: [
      { id: "srv_1", service: "Plumbing", status: "active" },
      { id: "srv_3", service: "AC Repair", status: "active" },
      { id: "srv_4", service: "Cleaning", status: "active" },
      { id: "srv_6", service: "Carpentry", status: "active" }
    ],
    customHeading: "Quality Home Services in Hyderabad",
    customContent: "Get professional home services in Hyderabad. Our verified experts provide quality plumbing, AC repair, cleaning, and carpentry services.",
    metadata: {
      title: "Home Services in Hyderabad | RKD - Repair ki Dukaan",
      description: "Quality home services in Hyderabad. Book verified experts for all your home maintenance needs.",
      keywords: "home services hyderabad, plumber hyderabad, AC repair hyderabad, cleaning hyderabad"
    }
  },
  {
    id: "6",
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    description: "Comprehensive home services in Pune",
    phoneNumber: "+91 98765 43215",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    status: "active",
    services: [
      { id: "srv_2", service: "Electrician", status: "active" },
      { id: "srv_4", service: "Cleaning", status: "active" },
      { id: "srv_5", service: "Painting", status: "active" },
      { id: "srv_9", service: "Gardening", status: "active" }
    ],
    customHeading: "Comprehensive Home Services in Pune",
    customContent: "RKD offers comprehensive home services in Pune. From electrical work to gardening, we've got all your home maintenance needs covered.",
    metadata: {
      title: "Home Services in Pune | RKD - Repair ki Dukaan",
      description: "Comprehensive home services in Pune. Verified professionals for electrical, cleaning, painting, and more.",
      keywords: "home services pune, electrician pune, painting pune, cleaning services pune"
    }
  },
  {
    id: "7",
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    description: "Professional home services in Kolkata",
    phoneNumber: "+91 98765 43216",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    status: "active",
    services: [
      { id: "srv_1", service: "Plumbing", status: "active" },
      { id: "srv_2", service: "Electrician", status: "active" },
      { id: "srv_8", service: "Pest Control", status: "active" }
    ],
    customHeading: "Professional Home Services in Kolkata",
    customContent: "Find reliable home services in Kolkata. We provide expert plumbing, electrical, and pest control services.",
    metadata: {
      title: "Home Services in Kolkata | RKD - Repair ki Dukaan",
      description: "Professional home services in Kolkata. Book verified experts for plumbing, electrical, and pest control.",
      keywords: "home services kolkata, plumber kolkata, electrician kolkata, pest control kolkata"
    }
  },
  {
    id: "8",
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    description: "Expert home services in Chennai",
    phoneNumber: "+91 98765 43217",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    status: "active",
    services: [
      { id: "srv_3", service: "AC Repair", status: "active" },
      { id: "srv_4", service: "Cleaning", status: "active" },
      { id: "srv_5", service: "Painting", status: "active" },
      { id: "srv_7", service: "Appliance Repair", status: "active" },
      { id: "srv_10", service: "TV Installation", status: "active" }
    ],
    customHeading: "Expert Home Services in Chennai",
    customContent: "Chennai's most trusted home services platform. We provide AC repair, cleaning, painting, appliance repair, and TV installation services.",
    metadata: {
      title: "Home Services in Chennai | RKD - Repair ki Dukaan",
      description: "Expert home services in Chennai. Verified professionals for all your home maintenance needs.",
      keywords: "home services chennai, AC repair chennai, cleaning chennai, appliance repair chennai"
    }
  }
];

/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Get all active cities
 *     description: Retrieve a list of all active cities with their associated services
 *     tags:
 *       - Cities
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         description: Filter by city slug (e.g., "lucknow", "delhi")
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       slug:
 *                         type: string
 *                       name:
 *                         type: string
 *                       state:
 *                         type: string
 *                       description:
 *                         type: string
 *                       phoneNumber:
 *                         type: string
 *                       coordinates:
 *                         type: object
 *                         properties:
 *                           lat:
 *                             type: number
 *                           lng:
 *                             type: number
 *                       services:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                             service:
 *                               type: string
 *                             status:
 *                               type: string
 *                       customHeading:
 *                         type: string
 *                       customContent:
 *                         type: string
 *                       metadata:
 *                         type: object
 *       404:
 *         description: City not found
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      // Return specific city by slug
      const city = citiesData.find(c => c.slug === slug && c.status === "active");

      if (!city) {
        return NextResponse.json(
          { success: false, error: "City not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: city
      });
    }

    // Return all active cities
    const activeCities = citiesData.filter(c => c.status === "active");

    return NextResponse.json({
      success: true,
      data: activeCities,
      count: activeCities.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
