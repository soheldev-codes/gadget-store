"use client";

import Container from "@/components/shared/Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-20">
      <Container>
        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Customer Reviews
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by thousands of happy customers across Bangladesh.
            Read what they say about our products and services.
          </p>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="h-auto"
            >
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}