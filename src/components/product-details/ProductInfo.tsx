"use client";

import { useState } from "react";
import Link from "next/link";

import { FaStar } from "react-icons/fa";

type Product = {
  title: string;
  brand: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
};

type Props = {
  product: Product;
};

export default function ProductInfo({
  product,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Brand */}

      <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
        {product.brand}
      </span>

      {/* Title */}

      <h1 className="text-4xl font-bold text-slate-900">
        {product.title}
      </h1>

      {/* Rating */}

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />

          <span className="font-semibold">
            {product.rating}
          </span>

          <span className="text-slate-500">
            ({product.reviewCount} Reviews)
          </span>
        </div>

        <span className="text-slate-400">|</span>

        <span className="text-slate-600">
          Category : {product.category}
        </span>
      </div>

      {/* Price */}

      <div className="flex items-center gap-3">
        {product.discountPrice ? (
          <>
            <span className="text-4xl font-bold text-blue-600">
              ৳{product.discountPrice.toLocaleString()}
            </span>

            <span className="text-2xl text-slate-400 line-through">
              ৳{product.price.toLocaleString()}
            </span>
          </>
        ) : (
          <span className="text-4xl font-bold text-blue-600">
            ৳{product.price.toLocaleString()}
          </span>
        )}
      </div>

      {/* Stock */}

      <div>
        {product.stock > 0 ? (
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            In Stock ({product.stock})
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Out Of Stock
          </span>
        )}
      </div>

      {/* Description */}

      <p className="leading-8 text-slate-600">
        Premium quality gadget with excellent performance,
        fast delivery and official warranty.
      </p>

      {/* Quantity */}

      <div className="flex items-center gap-4">
        <span className="font-semibold">
          Quantity
        </span>

        <div className="flex items-center overflow-hidden rounded-xl border border-slate-300">
          <button
            type="button"
            onClick={decrease}
            className="h-12 w-12 text-xl hover:bg-slate-100"
          >
            -
          </button>

          <span className="flex h-12 w-14 items-center justify-center font-semibold">
            {quantity}
          </span>

          <button
            type="button"
            onClick={increase}
            className="h-12 w-12 text-xl hover:bg-slate-100"
          >
            +
          </button>
        </div>
      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Add To Cart
        </button>

        <Link
          href="/checkout"
          className="rounded-xl border border-blue-600 px-8 py-4 text-center font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}