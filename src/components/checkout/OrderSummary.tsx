"use client";

import Link from "next/link";

const products = [
  {
    id: "1",
    title: "Logitech G Pro X Superlight",
    quantity: 1,
    price: 12999,
  },
  {
    id: "2",
    title: "Redragon K617 RGB Keyboard",
    quantity: 2,
    price: 4299,
  },
];

export default function OrderSummary() {
  const subtotal = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 120;
  const total = subtotal + shipping;

  return (
    <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Order Summary
      </h2>

      {/* Products */}

      <div className="space-y-5">

        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-start justify-between border-b border-slate-100 pb-4"
          >
            <div>
              <h3 className="font-medium text-slate-900">
                {product.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Qty : {product.quantity}
              </p>
            </div>

            <span className="font-semibold">
              ৳
              {(
                product.price * product.quantity
              ).toLocaleString()}
            </span>
          </div>
        ))}

      </div>

      {/* Price */}

      <div className="mt-6 space-y-4 border-t border-slate-200 pt-6">

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

        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
          <span className="text-xl font-bold">
            Total
          </span>

          <span className="text-2xl font-bold text-blue-600">
            ৳{total.toLocaleString()}
          </span>
        </div>

      </div>

      {/* Button */}

      <button
        type="button"
        className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Place Order
      </button>

      <Link
        href="/cart"
        className="mt-4 block text-center text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        ← Back to Cart
      </Link>

    </div>
  );
}