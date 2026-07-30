import Container from "@/components/shared/Container";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-8 lg:py-14">
      {/* Background Blur */}
      <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <Container>
        <HeroSlider />
      </Container>
    </section>
  );
}