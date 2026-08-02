"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Eye, Heart, Star } from "lucide-react";

import ProductCardActions from "./ProductCardActions";
import ProductPrice from "./ProductPrice";

type Product = {
  _id: string;
  title: string;
  slug: string;
  brand: string;
  category: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  sold: number;
  stock: number;
};

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {

  const discount =
    product.discountPrice &&
    product.discountPrice < product.price
      ? Math.round(
          ((product.price - product.discountPrice) /
            product.price) *
            100
        )
      : 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">

        {/* Image */}

        <div className="relative overflow-hidden bg-slate-50 p-6">

          {discount > 0 && (
  <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
    -{discount}% OFF
  </span>
)}

          <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-blue-600 hover:text-white"
            >
              <Heart size={18} />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-blue-600 hover:text-white"
            >
              <Eye size={18} />
            </button>

          </div>

          <Link href={`/products/${product.slug}`}>
            <div className="relative mx-auto h-64 w-full">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
          </Link>

        </div>

        {/* Content */}

        <div className="space-y-4 p-6">

          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
            {product.brand}
          </p>

          <Link href={`/products/${product.slug}`}>
            <h3 className="line-clamp-2 min-h-[56px] text-lg font-bold text-slate-900 transition hover:text-blue-600">
              {product.title}
            </h3>
          </Link>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-1 text-yellow-500">
              <Star
                size={16}
                fill="currentColor"
              />

              <span className="font-medium">
                {product.rating}
              </span>

              <span className="text-sm text-slate-500">
                ({product.reviewCount})
              </span>
            </div>

            <span className="text-sm text-slate-500">
              Sold {product.sold}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                product.stock > 0
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {product.stock > 0
                ? "In Stock"
                : "Out of Stock"}
            </span>

            <span className="text-sm text-slate-500">
              {product.stock} Left
            </span>

          </div>

          <ProductPrice
            price={product.price}
            discountPrice={product.discountPrice}
          />

         <ProductCardActions
    disabled={product.stock === 0}
/>

        </div>
      </div>
    </motion.div>
  );
}