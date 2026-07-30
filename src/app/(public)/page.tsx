import { Header } from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import OfferBanner from "@/components/home/OfferBanner";
import TopSelling from "@/components/home/TopSelling/TopSelling";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import LatestBlogs from "@/components/home/LatestBlogs/LatestBlogs";
import Newsletter from "@/components/home/Newsletter/Newsletter";

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

         <WhyChooseUs />
         <Testimonials />

         <LatestBlogs />
         <Newsletter />
      </main>
      
    </>
  );
}