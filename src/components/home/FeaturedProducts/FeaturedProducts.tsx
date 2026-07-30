import Container from "@/components/shared/Container";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";
import { featuredProducts } from "./ProductData";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <SectionHeader />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}