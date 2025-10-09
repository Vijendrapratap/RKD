import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, getAllLocationSlugs } from "@/lib/locations";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

interface LocationPageProps {
  params: Promise<{
    location: string;
  }>;
}

// Generate static params for all locations
export async function generateStaticParams() {
  const locationSlugs = getAllLocationSlugs();
  return locationSlugs.map((slug) => ({
    location: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  const title = `Home Services in ${location.name} | RKD - Repair ki Dukaan`;
  const description = `${location.description} Book verified professionals for AC repair, plumbing, electrical work, appliance repair, and more in ${location.name}, ${location.state}.`;

  return {
    title,
    description,
    keywords: [
      `home services ${location.name}`,
      `repair services ${location.name}`,
      `plumber ${location.name}`,
      `electrician ${location.name}`,
      `AC repair ${location.name}`,
      `appliance repair ${location.name}`,
      `home maintenance ${location.name}`,
      `${location.name} home services`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_IN",
      siteName: "RKD - Repair ki Dukaan",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Same content as homepage */}
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Hidden SEO content for location-specific keywords and services */}
      <div className="sr-only">
        <h1>{location.customHeading || `Home Services in ${location.name}, ${location.state}`}</h1>
        <p>{location.customContent || location.description}</p>
        <p>Contact us at {location.phoneNumber} for home services in {location.name}</p>
        {location.services && location.services.length > 0 && (
          <div>
            <h2>Services Available in {location.name}:</h2>
            <ul>
              {location.services.map((service) => (
                <li key={service.id}>
                  {service.service} in {location.name}, {location.state}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `RKD - Repair ki Dukaan ${location.name}`,
            "description": location.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location.name,
              "addressRegion": location.state,
              "addressCountry": "IN"
            },
            "telephone": location.phoneNumber,
            "url": `https://yourwebsite.com/${location.slug}`,
            "priceRange": "₹₹",
            "areaServed": {
              "@type": "City",
              "name": location.name
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Services",
              "itemListElement": location.services?.map(service => ({
                "@type": "OfferCatalog",
                "name": service.service,
                "itemListElement": []
              })) || []
            }
          })
        }}
      />
    </div>
  );
}
