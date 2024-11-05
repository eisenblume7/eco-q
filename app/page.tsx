import {HeroSection} from "@/app/components/Hero";
import CatalogSection from "@/app/components/Section";
import KegiatanSection from "@/app/components/kegiatanSection";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
        <HeroSection/>
        <CatalogSection/>
      <KegiatanSection/>
    </div>
  );
}
