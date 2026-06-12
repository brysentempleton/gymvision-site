import { HeroSection } from "@/components/hero";
import { WedgeSection } from "@/components/wedge";
import { DemoCallWidget } from "@/components/demo-call";
import { PricingSection } from "@/components/pricing";
import { CaseStudySection } from "@/components/case-study";
import { MigrationSection } from "@/components/migration";
import { WaitlistSection } from "@/components/waitlist";
import { NavBar } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <WedgeSection />
        <DemoCallWidget />
        <PricingSection />
        <CaseStudySection />
        <MigrationSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
