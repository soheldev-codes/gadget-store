import Link from "next/link";

import { FiPlus, FiSearch } from "react-icons/fi";

export default function ProductToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Search */}

      <div className="relative w-full md:max-w-md">
        <FiSearch
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-600"
        />
      </div>

      {/* Add Product */}

      <Link
        href="/dashboard/admin/products/add"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        <FiPlus size={20} />

        Add Product
      </Link>
    </div>
  );
}