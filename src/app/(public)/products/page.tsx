import ProductHero from "@/components/products/ProductHero";
import ProductFilter from "@/components/products/ProductFilter";
import ProductToolbar from "@/components/products/ProductToolbar";
import ProductGrid from "@/components/products/ProductGrid";
import Pagination from "@/components/products/Pagination";

import Container from "@/components/shared/Container";

export default function ProductsPage() {
  return (
    <>
      <ProductHero />

      <section className="py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <ProductFilter />

            <div>
              <ProductToolbar />

              <ProductGrid />

              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}