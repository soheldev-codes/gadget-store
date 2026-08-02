
import ProductBreadcrumb from "@/components/product-details/ProductBreadcrumb/ProductBreadcrumb";
import ProductGallery from "@/components/product-details/ProductGallery";
import ProductInfo from "@/components/product-details/ProductInfo";
import ProductTabs from "@/components/product-details/ProductTabs";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  // Backend আসলে এটা Replace হবে
  const product = {
    title: "Logitech G Pro X Superlight",
    slug: "logitech-g-pro-x-superlight",
  };

  if (slug !== product.slug) {
    notFound();
  }

  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-4">
         <ProductBreadcrumb
        title={product.title}
      />

      <ProductGallery />

      <ProductInfo
  product={{
    title: product.title,
    brand: "Logitech",
    category: "Mouse",
    price: 14999,
    discountPrice: 12999,
    rating: 4.9,
    reviewCount: 245,
    stock: 18,
  }}
/>

<ProductTabs />

<RelatedProducts />
      </div>
    </main>
  );
}