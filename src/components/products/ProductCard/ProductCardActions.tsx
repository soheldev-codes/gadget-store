"use client";

import { ShoppingCart } from "lucide-react";

type Props = {
  onAddToCart?: () => void;
  disabled?: boolean;
};

export default function ProductCardActions({
  onAddToCart,
  disabled = false,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onAddToCart}
      className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <ShoppingCart size={18} />
      {disabled ? "Out of Stock" : "Add To Cart"}
    </button>
  );
}