import { NextResponse } from "next/server";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "RKD - Repair ki Dukaan API",
    version: "1.0.0",
    description: "API for managing cities and services for RKD home services platform",
    contact: {
      name: "RKD Support",
      email: "support@rkd.com"
    }
  },
  servers: [
    {
      url: "http://localhost:3002",
      description: "Development server"
    }
  ],
  tags: [
    {
      name: "Cities",
      description: "City management endpoints"
    },
    {
      name: "Services",
      description: "Service management endpoints"
    }
  ],
  paths: {
    "/api/cities": {
      get: {
        summary: "Get all active cities",
        description: "Retrieve a list of all active cities with their associated services",
        tags: ["Cities"],
        parameters: [
          {
            in: "query",
            name: "slug",
            schema: {
              type: "string"
            },
            description: "Filter by city slug (e.g., 'lucknow', 'delhi')",
            example: "lucknow"
          }
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                      example: true
                    },
                    data: {
                      oneOf: [
                        {
                          type: "array",
                          items: {
                            $ref: "#/components/schemas/City"
                          }
                        },
                        {
                          $ref: "#/components/schemas/City"
                        }
                      ]
                    },
                    count: {
                      type: "integer",
                      description: "Total number of cities (only present when fetching all cities)"
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "City not found",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error"
                }
              }
            }
          },
          "500": {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error"
                }
              }
            }
          }
        }
      }
    },
    "/api/services": {
      get: {
        summary: "Get all services",
        description: "Retrieve a list of all available services",
        tags: ["Services"],
        parameters: [
          {
            in: "query",
            name: "status",
            schema: {
              type: "string",
              enum: ["active", "inactive"]
            },
            description: "Filter services by status"
          }
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: {
                      type: "boolean",
                      example: true
                    },
                    data: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Service"
                      }
                    },
                    count: {
                      type: "integer"
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Error"
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      City: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "1"
          },
          slug: {
            type: "string",
            example: "lucknow"
          },
          name: {
            type: "string",
            example: "Lucknow"
          },
          state: {
            type: "string",
            example: "Uttar Pradesh"
          },
          description: {
            type: "string",
            example: "Professional home services in Lucknow"
          },
          phoneNumber: {
            type: "string",
            example: "+91 98765 43210"
          },
          coordinates: {
            type: "object",
            properties: {
              lat: {
                type: "number",
                example: 26.8467
              },
              lng: {
                type: "number",
                example: 80.9462
              }
            }
          },
          status: {
            type: "string",
            enum: ["active", "inactive"],
            example: "active"
          },
          services: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Service"
            }
          },
          customHeading: {
            type: "string",
            example: "Professional Home Services in Lucknow"
          },
          customContent: {
            type: "string",
            example: "Welcome to RKD's comprehensive home services in Lucknow..."
          },
          metadata: {
            type: "object",
            properties: {
              title: {
                type: "string"
              },
              description: {
                type: "string"
              },
              keywords: {
                type: "string"
              }
            }
          }
        }
      },
      Service: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "srv_1"
          },
          service: {
            type: "string",
            example: "Plumbing"
          },
          description: {
            type: "string",
            example: "Professional plumbing solutions for all your needs"
          },
          status: {
            type: "string",
            enum: ["active", "inactive"],
            example: "active"
          }
        }
      },
      Error: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            example: false
          },
          error: {
            type: "string",
            example: "Error message"
          }
        }
      }
    }
  }
};

export async function GET() {
  return NextResponse.json(swaggerDocument);
}
