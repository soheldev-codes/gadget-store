"use client";

import { useFormContext } from "react-hook-form";

export default function InventorySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
          <label className="mb-2 block text-sm font-medium">
            SKU
          </label>

          <input
            type="text"
            placeholder="SKU-1001"
            {...register("sku")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.sku && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.sku.message)}
            </p>
          )}
        </div>

        {/* Stock */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Stock Quantity
          </label>

          <input
            type="number"
            min={0}
            placeholder="0"
            {...register("stock", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.stock && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.stock.message)}
            </p>
          )}
        </div>

        {/* Low Stock Alert */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Low Stock Alert
          </label>

          <input
            type="number"
            min={0}
            placeholder="5"
            {...register("lowStockAlert", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.lowStockAlert && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.lowStockAlert.message)}
            </p>
          )}
        </div>

        {/* Warranty */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Warranty (Months)
          </label>

          <input
            type="number"
            min={0}
            placeholder="12"
            {...register("warranty", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.warranty && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.warranty.message)}
            </p>
          )}
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