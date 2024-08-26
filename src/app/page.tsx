import Image from "next/image";
import Hero from "./components/hero";
import DealsIn from "./components/deals-in";
import ServicesOffered from "./components/services-offered";
import TyresSold from "./components/tyres-sold";
import Footer from "./components/footer";
import PaymentMode from "./components/payment-mode";

export default function Home() {
  return (
    <main className="p-10 max-w-[1440px] mx-auto">
      <Hero />  
      <DealsIn />
      <ServicesOffered />
      <TyresSold />
      <PaymentMode />
      <Footer />
    </main>
  );
}
