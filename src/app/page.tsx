import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}