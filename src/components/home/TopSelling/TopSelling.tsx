import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";
import TopSellingSlider from "./TopSellingSlider";

export default function TopSelling() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-20">
      <Container>
        <div className="mb-10 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🔥 Best Sellers
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Top Selling Products
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Discover our most popular gadgets, trusted and loved by thousands
              of customers.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <TopSellingSlider />
      </Container>
    </section>
  );
}