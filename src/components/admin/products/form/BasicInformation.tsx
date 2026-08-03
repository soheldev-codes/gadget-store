export default function BasicInformation() {
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
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Product Name
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter product name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Slug */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Product Slug
          </label>

          <input
            type="text"
            name="slug"
            placeholder="logitech-g-pro-x-superlight"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Brand */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Brand
          </label>

          <select
            name="brand"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          >
            <option value="">Select Brand</option>
            <option>Logitech</option>
            <option>Sony</option>
            <option>Apple</option>
            <option>Redragon</option>
            <option>Razer</option>
          </select>
        </div>

        {/* Category */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>

          <select
            name="category"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          >
            <option value="">Select Category</option>
            <option>Mouse</option>
            <option>Keyboard</option>
            <option>Headphone</option>
            <option>Earbuds</option>
            <option>Smart Watch</option>
          </select>
        </div>

        {/* Short Description */}

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Short Description
          </label>

          <textarea
            rows={4}
            name="shortDescription"
            placeholder="Write a short product description..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>
      </div>
    </section>
  );
}