import ProductToolbar from "@/components/admin/products/ProductToolbar";
import ProductTable from "@/components/admin/products/ProductTable";

export default function AdminProductsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Products
        </h2>

        <p className="mt-2 text-slate-500">
          Manage all products in your store.
        </p>
      </div>

      <ProductToolbar />

      <ProductTable />
    </div>
  );
}