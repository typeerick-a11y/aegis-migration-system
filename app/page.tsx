import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import KingdomLegacy from "@/components/home/KingdomLegacy";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <KingdomLegacy />
      <Footer />
    </>
  );
}