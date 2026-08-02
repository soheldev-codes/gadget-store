"use client";

import { Grid2X2, List, Search } from "lucide-react";

export default function ProductToolbar() {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex flex-1 flex-col gap-4 md:flex-row">
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 outline-none transition focus:border-blue-600 focus:bg-white"
            />
          </div>

          {/* Sort */}
          <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-blue-600">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
            <option>Best Selling</option>
          </select>
        </div>

        {/* Right */}
        <div className="flex items-center justify-between gap-5">
          <p className="text-sm font-medium text-slate-500">
            Showing
            <span className="mx-1 font-bold text-slate-900">
              12
            </span>
            of
            <span className="mx-1 font-bold text-slate-900">
              120
            </span>
            Products
          </p>

          <div className="flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              className="rounded-xl bg-blue-600 p-2 text-white"
            >
              <Grid2X2 size={18} />
            </button>

            <button
              type="button"
              className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-200"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}