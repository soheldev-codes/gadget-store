"use client";

import { useFormContext } from "react-hook-form";

export default function PricingSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">
        Pricing
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Set the product pricing information.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Regular Price */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Regular Price (৳)
          </label>

          <input
            type="number"
            min={0}
            placeholder="0"
            {...register("price", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.price && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.price.message)}
            </p>
          )}
        </div>

        {/* Discount Price */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Discount Price (৳)
          </label>

          <input
            type="number"
            min={0}
            placeholder="0"
            {...register("discountPrice", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.discountPrice && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.discountPrice.message)}
            </p>
          )}
        </div>

        {/* Cost Price */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Cost Price (৳)
          </label>

          <input
            type="number"
            min={0}
            placeholder="0"
            {...register("costPrice", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.costPrice && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.costPrice.message)}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> Cost Price is only for admin calculations.
          Customers will never see this value.
        </p>
      </div>
    </section>
  );
}