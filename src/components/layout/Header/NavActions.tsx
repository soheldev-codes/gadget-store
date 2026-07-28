"use client";

import { Heart, Search, ShoppingCart, User } from "lucide-react";

export default function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <button className="transition hover:text-blue-600">
        <Search className="size-5" />
      </button>

      <button className="transition hover:text-blue-600">
        <Heart className="size-5" />
      </button>

      <button className="relative transition hover:text-blue-600">
        <ShoppingCart className="size-5" />

        <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
          0
        </span>
      </button>

      <button className="transition hover:text-blue-600">
        <User className="size-5" />
      </button>
    </div>
  );
}