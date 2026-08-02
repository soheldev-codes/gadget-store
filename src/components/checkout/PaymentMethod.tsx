"use client";

import { useState } from "react";

const paymentMethods = [
  {
    id: "cod",
    title: "Cash on Delivery",
    description: "Pay when your order is delivered.",
  },
  {
    id: "sslcommerz",
    title: "SSLCommerz",
    description: "Pay securely using Card, bKash, Nagad or Rocket.",
  },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState("cod");

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Payment Method
      </h2>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
              selected === method.id
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200 hover:border-blue-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="mt-1 h-4 w-4 accent-blue-600"
            />

            <div>
              <h3 className="font-semibold text-slate-900">
                {method.title}
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                {method.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}