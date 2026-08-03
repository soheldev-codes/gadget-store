export default function InventorySection() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">
        Inventory
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Manage product inventory and stock information.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* SKU */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            SKU
          </label>

          <input
            type="text"
            name="sku"
            placeholder="SKU-1001"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Stock */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Stock Quantity
          </label>

          <input
            type="number"
            name="stock"
            min="0"
            placeholder="0"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Low Stock Alert */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Low Stock Alert
          </label>

          <input
            type="number"
            name="lowStockAlert"
            min="0"
            placeholder="5"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Warranty */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Warranty (Months)
          </label>

          <input
            type="number"
            name="warranty"
            min="0"
            placeholder="12"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-700">
          <strong>Tip:</strong> When stock falls below the Low Stock Alert
          value, the product can later be highlighted in the Admin Dashboard.
        </p>
      </div>
    </section>
  );
}