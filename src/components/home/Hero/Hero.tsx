import Container from "@/components/shared/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroOfferCards from "./HeroOfferCards";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950">
      <Container>
        <div className="grid min-h-[600px] gap-6 py-8 lg:grid-cols-12">

          {/* Main Hero */}
          <div className="lg:col-span-8">
            <div className="grid h-full items-center gap-8 lg:grid-cols-2">

              <HeroContent />

              <HeroImage />

            </div>
          </div>

          {/* Right Offers */}
          <div className="lg:col-span-4">
            <HeroOfferCards />
          </div>

        </div>
      </Container>
    </section>
  );
}