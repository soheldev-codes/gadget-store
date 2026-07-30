"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { offerProducts } from "./OfferData";
import OfferSlide from "./OfferSlide";

export default function OfferSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Keyboard]}
      slidesPerView={1}
      spaceBetween={30}
      loop
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="offer-swiper"
    >
      {offerProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <OfferSlide product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}