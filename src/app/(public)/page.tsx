import { Header } from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import OfferBanner from "@/components/home/OfferBanner";
import TopSelling from "@/components/home/TopSelling/TopSelling";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Categories />

        <FeaturedProducts />

         <OfferBanner />

         <TopSelling />
      </main>
    </>
  );
}