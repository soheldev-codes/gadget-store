"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    products: number;
  };
};

export default function CategoryCard({ category }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      <Link href={`/products/${category.slug}`}>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">

          {/* Background Blur */}
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-100 blur-3xl transition-all duration-500 group-hover:bg-blue-200" />

          {/* Image */}

          <div className="relative flex justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-slate-50 transition-all duration-300 group-hover:scale-105">

              <Image
                src={category.image}
                alt={category.name}
                width={120}
                height={120}
                className="object-contain transition duration-300 group-hover:scale-110"
              />

            </div>
          </div>

          {/* Title */}

          <div className="mt-6 text-center">

            <h3 className="text-lg font-bold text-slate-900">
              {category.name}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {category.products} Products
            </p>

          </div>

          {/* Button */}

          <div className="mt-5 flex items-center justify-center gap-2 font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">

            <span>Browse</span>

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </div>
        </div>
      </Link>
    </motion.div>
  );
}