"use client";

import Link from "next/link";

import {
  FiBell,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

type DashboardHeaderProps = {
  title?: string;
  description?: string;
};

export default function DashboardHeader({
  title = "Dashboard",
  description = "Welcome back! Here's what's happening with your account.",
}: DashboardHeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {description}
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-4">

        {/* Search */}

        <div className="relative">
          <FiSearch
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Cart */}

        <Link
          href="/cart"
          className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100"
        >
          <FiShoppingCart size={20} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            2
          </span>
        </Link>

        {/* Notification */}

        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100"
        >
          <FiBell size={20} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            3
          </span>
        </button>

      </div>

    </header>
  );
}