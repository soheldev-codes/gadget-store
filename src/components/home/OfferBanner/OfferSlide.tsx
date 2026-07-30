"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

type Offer = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  discount: string;
  image: string;
  button: string;
  href: string;
  bg: string;
};

type Props = {
  product: Offer;
};

export default function OfferSlide({ product }: Props) {
  return (
    <section
      className={`relative overflow-hidden rounded-[36px] bg-gradient-to-br ${product.bg}`}
    >
      {/* Background Glow */}

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="grid items-center gap-12 p-8 md:p-12 lg:grid-cols-2">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            {product.discount}
          </span>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[4px] text-blue-700">
            {product.subtitle}
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl">
            {product.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {product.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={product.href}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
            >
              {product.button}

              <ArrowRight size={18} />
            </Link>

            <Link
              href={product.href}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              <Eye size={18} />

              View Details
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <div className="relative h-[420px] w-[420px] rounded-[36px] border border-white/40 bg-white/50 p-8 shadow-2xl backdrop-blur-xl">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              priority
            />

            {/* Shadow */}

            <div className="absolute bottom-8 left-1/2 h-8 w-48 -translate-x-1/2 rounded-full bg-black/15 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}