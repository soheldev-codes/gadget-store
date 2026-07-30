"use client";

import Image from "next/image";
import { Quote, Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
};

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
        {/* Background Glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

        {/* Quote */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
          <Quote size={26} />
        </div>

        {/* Review */}
        <p className="flex-1 text-lg leading-8 text-slate-600">
          "{testimonial.review}"
        </p>

        {/* Rating */}
        <div className="mt-6 flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="currentColor"
              className="text-yellow-400"
            />
          ))}
        </div>

        {/* User */}
        <div className="mt-8 flex items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full border-2 border-blue-100 object-cover"
          />

          <div>
            <h4 className="font-bold text-slate-900">
              {testimonial.name}
            </h4>

            <div className="mt-1 flex items-center gap-1 text-sm text-blue-600">
              <BadgeCheck size={16} />
              <span>{testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}