"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

type Product = {
    id: number;
    title: string;
    slug: string;
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

export default function TopSellingCard({ product }: Props) {
    return (
        <motion.article
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="group h-full"
        >
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
                {/* Image */}

                <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
                    {/* Badge */}

                    <span className="
absolute
left-4
top-4
z-20
px-3
py-1
text-[11px]
rounded-full
">
                        {product.badge}
                    </span>

                    {/* Wishlist */}

                    <button
                        type="button"
                        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition-all hover:scale-110 hover:bg-red-500 hover:text-white"
                    >
                        <Heart size={18} />
                    </button>

                    <Link href={`/products/${product.slug}`}>
                        <div className="relative mx-auto h-56 w-full">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain transition duration-500 group-hover:scale-110"
                            />
                        </div>
                    </Link>
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                        {product.brand}
                    </p>

                    <Link href={`/products/${product.slug}`}>
                        <h3 className="mt-2 min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition hover:text-blue-600">
                            {product.title}
                        </h3>
                    </Link>

                    {/* Rating */}

                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">
                            <Star
                                size={15}
                                fill="currentColor"
                                className="text-yellow-500"
                            />
                            <span className="text-sm font-semibold">
                                {product.rating}
                            </span>
                        </div>

                        <span className="text-sm text-slate-500">
                            {product.reviews} Reviews
                        </span>
                    </div>

                    {/* Price */}

                    <div className="mt-4 flex items-end gap-3">
                        <span className="text-2xl font-bold text-slate-900">
                            ৳{product.price.toLocaleString()}
                        </span>

                        <span className="text-sm text-slate-400 line-through">
                            ৳{product.oldPrice.toLocaleString()}
                        </span>
                    </div>

                    {/* Stock */}

                    {/* <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
              style={{
                width: `${Math.min(product.stock * 3, 100)}%`,
              }}
            />
          </div> */}

                    <p className="my-2  text-xs text-slate-500">
                        {product.stock} Items Left
                    </p>

                    {/* Button */}

                    <button
                        type="button"
                        className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
                    >
                        <ShoppingCart size={18} />

                        Add To Cart
                    </button>
                </div>
            </div>
        </motion.article>
    );
}