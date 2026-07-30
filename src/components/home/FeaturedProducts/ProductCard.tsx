"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

type Product = {
  id: number;
  title: string;
  slug: string;
  category: string;
  brand: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  stock: number;
  badge: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl">
        {/* ================= IMAGE ================= */}

        <div className="relative overflow-hidden rounded-b-3xl bg-gradient-to-br from-slate-100 via-white to-blue-50 p-6">
          {/* Discount Badge */}

          <span className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold tracking-wide text-white shadow">
            SAVE {product.badge.replace("-", "")}
          </span>

          {/* Wishlist */}

          <button
            type="button"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            <Heart
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* Image */}

          <Link href={`/products/${product.slug}`}>
            <div className="relative mx-auto flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </Link>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="flex flex-1 flex-col p-5">
          {/* Brand */}

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {product.brand}
          </p>

          {/* Title */}

          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-2 min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition-colors duration-300 hover:text-blue-600">
              {product.title}
            </h3>
          </Link>

          {/* Rating */}

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
              <Star
                size={15}
                fill="currentColor"
                className="text-yellow-500"
              />

              <span className="text-sm font-semibold text-yellow-700">
                {product.rating}
              </span>
            </div>

            <span className="text-sm text-slate-500">
              ({product.reviews} Reviews)
            </span>
          </div>

          {/* Price */}

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-900">
              ৳{product.price.toLocaleString()}
            </span>

            <span className="text-sm text-slate-400 line-through">
              ৳{product.oldPrice.toLocaleString()}
            </span>
          </div>

          {/* Stock */}

          <div className="mt-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
              In Stock ({product.stock})
            </span>
          </div>

          {/* Button */}

          <button
            type="button"
            className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 active:scale-95"
          >
            <ShoppingCart
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

            Add To Cart
          </button>
        </div>
      </div>
    </motion.article>
  );
}