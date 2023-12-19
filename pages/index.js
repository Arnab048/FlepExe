import AboutUs from "@/components/AboutUs";
import Brands from "@/components/Brands";
import FastMarquee from "@/components/FastMarquee";
import HeroSwipper from "@/components/HeroSwipper";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WorkingProcess from "@/components/WorkingProcess";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSwipper />
      <div className="absolute top-0 left-0 z-50">
        <Navbar />
      </div>
      <div className="container">
        <Services />
        <Brands />
      </div>
      <AboutUs />
      <WorkingProcess />
      <Testimonial />
      <FastMarquee />
    </main>
  );
}
