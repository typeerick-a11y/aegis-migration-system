import Navbar from "@/components/layout/Navbar";
import HeroContainer from "@/components/home/HeroContainer";
import Footer from "@/components/layout/Footer";
import KingdomLegacy from "@/components/home/KingdomLegacy";

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