import { Header } from "@/components/header";
import { Announcements } from "@/components/announcements";
import { Hero } from "@/components/hero";
import { Challenge } from "@/components/challenge";
import { Approach } from "@/components/approach";
import { Resources } from "@/components/resources";
import { MobileApp } from "@/components/mobile-app";
import { Audience } from "@/components/audience";
import { Mission } from "@/components/mission";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Announcements />
      <main>
        <Hero />
        <Challenge />
        <Approach />
        <Resources />
        <MobileApp />
        <Audience />
        <Mission />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
