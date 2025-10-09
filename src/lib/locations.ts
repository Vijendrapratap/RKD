import { ServiceMaster } from './types/database';

export interface Location {
  slug: string;
  name: string;
  state: string;
  description: string;
  phoneNumber: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  services?: ServiceMaster[];  // Services available in this location
  customHeading?: string;  // Custom H1 from database
  customContent?: string;  // Custom content from database
}

// Cache for API data
let citiesCache: any[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchCities() {
  // Check cache
  if (citiesCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return citiesCache;
  }

  try {
    const response = await fetch('http://localhost:3002/api/cities', {
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cities');
    }

    const result = await response.json();
    citiesCache = result.data;
    cacheTimestamp = Date.now();
    return result.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    // Return empty array if API fails
    return [];
  }
}

export async function getLocationBySlug(slug: string): Promise<Location | undefined> {
  try {
    const response = await fetch(`http://localhost:3002/api/cities?slug=${slug.toLowerCase()}`, {
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return undefined;
    }

    const result = await response.json();
    if (!result.success) {
      return undefined;
    }

    const city = result.data;
    return {
      slug: city.slug,
      name: city.name,
      state: city.state,
      description: city.description,
      phoneNumber: city.phoneNumber,
      coordinates: city.coordinates,
      services: city.services,
      customHeading: city.customHeading,
      customContent: city.customContent,
    };
  } catch (error) {
    console.error('Error fetching location:', error);
    return undefined;
  }
}

export async function getAllLocationSlugs(): Promise<string[]> {
  const cities = await fetchCities();
  return cities.map((city: any) => city.slug);
}

// For navbar - need synchronous version with fallback
export const locations: Location[] = [
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", description: "Professional home services in Lucknow", phoneNumber: "+91 98765 43210" },
  { slug: "delhi", name: "Delhi", state: "Delhi", description: "Reliable home repair services in Delhi NCR", phoneNumber: "+91 98765 43211" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", description: "Expert home services in Mumbai", phoneNumber: "+91 98765 43212" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", description: "Top-rated home services in Bangalore", phoneNumber: "+91 98765 43213" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", description: "Quality home services in Hyderabad", phoneNumber: "+91 98765 43214" },
  { slug: "pune", name: "Pune", state: "Maharashtra", description: "Comprehensive home services in Pune", phoneNumber: "+91 98765 43215" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", description: "Professional home services in Kolkata", phoneNumber: "+91 98765 43216" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", description: "Expert home services in Chennai", phoneNumber: "+91 98765 43217" }
];
