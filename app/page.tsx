
import Navbar from "@/components/layout/Navbar";
import HeroContainer from "@/components/home/HeroContainer";
import KingdomLegacy from "@/components/home/KingdomLegacy";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroContainer />

      <KingdomLegacy />

      <Footer />
    </>
  );
}