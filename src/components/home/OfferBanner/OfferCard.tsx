"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Offer = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  button: string;
  href: string;
  gradient: string;
};

type Props = {
  offer: Offer;
};

export default function OfferCard({ offer }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${offer.gradient} p-6 text-white shadow-xl`}
    >
      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="max-w-[55%]">
          <p className="text-sm opacity-90">
            {offer.subtitle}
          </p>

          <h3 className="mt-2 text-2xl font-bold leading-tight">
            {offer.title}
          </h3>

          <Link
            href={offer.href}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105"
          >
            {offer.button}

            <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="relative h-36 w-36"
        >
          <Image
            src={offer.image}
            alt={offer.title}
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}