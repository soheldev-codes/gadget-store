"use client";

import { RotateCcw } from "lucide-react";

const categories = [
  "Headphones",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Smart Watch",
  "Earbuds",
];

const brands = [
  "Logitech",
  "Razer",
  "Redragon",
  "A4Tech",
  "Apple",
  "Samsung",
];

export default function ProductFilter() {
  return (
    <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Filters
        </h2>

        <button
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      {/* Categories */}

      <div className="border-b border-slate-200 pb-6">
        <h3 className="mb-4 font-semibold text-slate-900">
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded accent-blue-600"
              />

              <span className="text-slate-600">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}

      <div className="border-b border-slate-200 py-6">
        <h3 className="mb-4 font-semibold text-slate-900">
          Brands
        </h3>

        <div className="space-y-3">
          {brands.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded accent-blue-600"
              />

              <span className="text-slate-600">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}

      <div className="border-b border-slate-200 py-6">
        <h3 className="mb-4 font-semibold text-slate-900">
          Price Range
        </h3>

        <input
          type="range"
          min={0}
          max={100000}
          className="w-full accent-blue-600"
        />

        <div className="mt-3 flex justify-between text-sm text-slate-500">
          <span>৳0</span>
          <span>৳100000</span>
        </div>
      </div>

      {/* Availability */}

      <div className="py-6">
        <h3 className="mb-4 font-semibold text-slate-900">
          Availability
        </h3>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            className="accent-blue-600"
          />

          <span>In Stock Only</span>
        </label>
      </div>
    </aside>
  );
}