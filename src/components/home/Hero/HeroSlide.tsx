"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroStats from "./HeroStats";

type HeroSlideProps = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  button1: string;
  button2: string;
};

export default function HeroSlide({
  badge,
  title,
  highlight,
  description,
  image,
  button1,
  button2,
}: HeroSlideProps) {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

      {/* Hero Content */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white px-6 py-10 lg:px-12 lg:py-14">

        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-blue-600 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              {badge}
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
              {title}
              <br />

              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 lg:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {button1}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-blue-600 px-8 py-6 text-base text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                {button2}
              </Button>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="group relative overflow-hidden rounded-md
             border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(37,99,235,.18)]">

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-60" />

              <div className="relative h-[260px] w-[240px] sm:h-[320px] sm:w-[300px] lg:h-[420px] lg:w-[350px]">

                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className=" rounded-md
                   transition-transform duration-500 group-hover:scale-105"
                />

              </div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* Trust Bar */}
      <HeroStats />

    </div>
  );
}