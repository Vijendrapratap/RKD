import { NextRequest, NextResponse } from "next/server";

// Master services list
const servicesData = [
  { id: "srv_1", service: "Plumbing", description: "Professional plumbing solutions for all your needs", status: "active" },
  { id: "srv_2", service: "Electrician", description: "Licensed electricians for safe and reliable work", status: "active" },
  { id: "srv_3", service: "AC Repair", description: "Keep your space cool with expert AC services", status: "active" },
  { id: "srv_4", service: "Cleaning", description: "Spotless homes with professional cleaning", status: "active" },
  { id: "srv_5", service: "Painting", description: "Transform your space with quality painting", status: "active" },
  { id: "srv_6", service: "Carpentry", description: "Expert woodwork and furniture solutions", status: "active" },
  { id: "srv_7", service: "Appliance Repair", description: "Fix your appliances with skilled technicians", status: "active" },
  { id: "srv_8", service: "Pest Control", description: "Safe and effective pest elimination", status: "active" },
  { id: "srv_9", service: "Gardening", description: "Keep your garden beautiful and healthy", status: "active" },
  { id: "srv_10", service: "TV Installation", description: "Professional TV mounting and setup", status: "active" }
];

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     description: Retrieve a list of all available services
 *     tags:
 *       - Services
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, inactive]
 *         description: Filter services by status
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
 *                         example: srv_1
 *                       service:
 *                         type: string
 *                         example: Plumbing
 *                       description:
 *                         type: string
 *                       status:
 *                         type: string
 *                         enum: [active, inactive]
 *                 count:
 *                   type: integer
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  try {
    let filteredServices = servicesData;

    if (status) {
      filteredServices = servicesData.filter(s => s.status === status);
    }

    return NextResponse.json({
      success: true,
      data: filteredServices,
      count: filteredServices.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
