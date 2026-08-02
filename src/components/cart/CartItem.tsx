"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

type CartItemProps = {
  item: {
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
    price: number;
    discountPrice?: number;
    quantity: number;
    stock: number;
  };
};

export default function CartItem({
  item,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const price = item.discountPrice ?? item.price;
  const total = price * quantity;

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center">

      {/* Image */}

      <Link href={`/products/${item.slug}`}>
        <div className="relative h-28 w-28 overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-contain p-3"
          />
        </div>
      </Link>

      {/* Info */}

      <div className="flex-1">

        <Link href={`/products/${item.slug}`}>
          <h3 className="text-lg font-semibold text-slate-900 hover:text-blue-600">
            {item.title}
          </h3>
        </Link>

        <p className="mt-2 text-blue-600 font-bold text-xl">
          ৳{price.toLocaleString()}
        </p>

      </div>

      {/* Quantity */}

      <div className="flex items-center overflow-hidden rounded-xl border border-slate-300">

        <button
          type="button"
          onClick={() =>
            quantity > 1 &&
            setQuantity(quantity - 1)
          }
          className="h-11 w-11 hover:bg-slate-100"
        >
          -
        </button>

        <span className="flex h-11 w-14 items-center justify-center font-semibold">
          {quantity}
        </span>

        <button
          type="button"
          onClick={() =>
            quantity < item.stock &&
            setQuantity(quantity + 1)
          }
          className="h-11 w-11 hover:bg-slate-100"
        >
          +
        </button>

      </div>

      {/* Total */}

      <div className="w-32 text-center">
        <p className="text-xl font-bold text-slate-900">
          ৳{total.toLocaleString()}
        </p>
      </div>

      {/* Remove */}

      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
      >
        <FiTrash2 size={20} />
      </button>

    </div>
  );
}