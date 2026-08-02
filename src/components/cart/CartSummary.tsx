"use client";

import Link from "next/link";

export default function CartSummary() {
  const subtotal = 42997;
  const shipping = 120;
  const total = subtotal + shipping;

  return (
    <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Order Summary
      </h2>

      {/* Coupon */}

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        <button
          type="button"
          className="rounded-xl bg-slate-900 px-5 text-white transition hover:bg-blue-600"
        >
          Apply
        </button>
      </div>

      {/* Summary */}

      <div className="space-y-4 border-y border-slate-200 py-6">

        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Subtotal
          </span>

          <span className="font-semibold">
            ৳{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Shipping
          </span>

          <span className="font-semibold">
            ৳{shipping}
          </span>
        </div>

      </div>

      {/* Total */}

      <div className="flex items-center justify-between py-6">

        <span className="text-xl font-bold">
          Total
        </span>

        <span className="text-2xl font-bold text-blue-600">
          ৳{total.toLocaleString()}
        </span>

      </div>

      <Link
        href="/checkout"
        className="block rounded-xl bg-blue-600 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        Proceed To Checkout
      </Link>

    </div>
  );
}