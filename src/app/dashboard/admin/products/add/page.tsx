import ProductForm from "@/components/admin/products/form/ProductForm";

export default function AddProductPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">
          Add Product
        </h2>

        <p className="mt-2 text-slate-500">
          Create a new product for your store.
        </p>
      </div>

      <ProductForm />
    </div>
  );
}