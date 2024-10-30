import {NavDesktop} from "@/app/components/NavDesktop";
import {HeroSection} from "@/app/components/Hero";
import CatalogSection from "@/app/components/Section";
import KegiatanSection from "@/app/components/kegiatanSection";

export default function Home() {
  return (
    <div>
      <NavDesktop/>
        <HeroSection/>
        <CatalogSection/>
      <KegiatanSection/>
    </div>
  );
}
