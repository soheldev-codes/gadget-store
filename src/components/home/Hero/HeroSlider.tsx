import HeroSlide from "./HeroSlide";
import { heroSlides } from "./HeroData";

export default function HeroSlider() {
  const slide = heroSlides[0];

  return (
    <HeroSlide
      badge={slide.badge}
      title={slide.title}
      highlight={slide.highlight}
      description={slide.description}
      image={slide.image}
      button1={slide.button1}
      button2={slide.button2}
    />
  );
}