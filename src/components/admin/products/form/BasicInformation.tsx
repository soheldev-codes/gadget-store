"use client";

import { useFormContext } from "react-hook-form";

export default function BasicInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">
        Basic Information
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Enter the basic information about the product.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Product Name */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Product Name
          </label>

          <input
            {...register("title")}
            placeholder="Enter product name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.title.message)}
            </p>
          )}
        </div>

        {/* Slug */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Product Slug
          </label>

          <input
            {...register("slug")}
            placeholder="logitech-g-pro-x-superlight"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Brand
          </label>

          <select
            {...register("brand")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Brand</option>
            <option value="Logitech">Logitech</option>
            <option value="Sony">Sony</option>
            <option value="Apple">Apple</option>
            <option value="Redragon">Redragon</option>
            <option value="Razer">Razer</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            {...register("category")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Category</option>
            <option value="Mouse">Mouse</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Headphone">Headphone</option>
            <option value="Earbuds">Earbuds</option>
            <option value="Smart Watch">Smart Watch</option>
          </select>
        </div>

        {/* Short Description */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Short Description
          </label>

          <textarea
            rows={4}
            {...register("shortDescription")}
            placeholder="Write a short product description..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>
      </div>
    </section>
  );
}