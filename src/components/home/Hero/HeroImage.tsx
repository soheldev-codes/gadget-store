import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex h-[450px] items-center justify-center">

      <Image
        src="/hero/hero-1.png"
        alt="Gaming Accessories"
        fill
        priority
        className="object-contain"
      />

    </div>
  );
}