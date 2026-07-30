import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionHeader() {
  return (
    <div className="mb-12 flex flex-col items-center justify-between gap-5 md:flex-row">
      <div>
        <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600">
          Featured Collection
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Featured Products
        </h2>

        <p className="mt-3 max-w-xl text-slate-500">
          Explore our handpicked collection of premium gadgets, accessories and
          electronics for your everyday needs.
        </p>
      </div>

      <Link
        href="/products"
        className="group flex items-center gap-2 font-semibold text-blue-600 transition"
      >
        View All

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}