"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TopSellingCard from "./TopSellingCard";
import { topSellingProducts } from "./TopSellingData";

export default function TopSellingSlider() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Keyboard]}
      loop
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      spaceBetween={24}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },

        640: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },
      }}
      className="top-selling-swiper"
    >
      {topSellingProducts.map((product) => (
        <SwiperSlide key={product.id} className="h-auto">
          <TopSellingCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}