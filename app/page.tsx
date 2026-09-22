import Hero from "@/components/Hero";
import CuriosityFaq from "@/components/CuriosityFaq";
import CarePackages from "@/components/CarePackages";
import PrecisionChronicles from "@/components/PrecisionChronicles";
import BookingForm from "@/components/BookingForm";
import MapSection from "@/components/MapSection";
import FeaturedBlogs from "@/components/FeaturedBlogs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CuriosityFaq />
      <CarePackages />
      <PrecisionChronicles />
      <BookingForm />
      <MapSection />
      <FeaturedBlogs />
    </>
  );
}