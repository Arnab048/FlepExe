import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSwipper from "@/components/HeroSwipper";
import Services from "@/components/Services";

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
      </div>
    </main>
  );
}
