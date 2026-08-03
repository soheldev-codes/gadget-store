export default function ProductStatusSection() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">
        Product Status
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Configure how this product will appear in your store.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Featured */}

        <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
          <div>
            <h4 className="font-medium">Featured Product</h4>

            <p className="text-sm text-slate-500">
              Show this product in the Featured section.
            </p>
          </div>

          <input
            type="checkbox"
            name="featured"
            className="h-5 w-5"
          />
        </label>

        {/* Trending */}

        <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
          <div>
            <h4 className="font-medium">Trending Product</h4>

            <p className="text-sm text-slate-500">
              Display this product in Trending Products.
            </p>
          </div>

          <input
            type="checkbox"
            name="trending"
            className="h-5 w-5"
          />
        </label>

        {/* Active */}

        <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
          <div>
            <h4 className="font-medium">Active</h4>

            <p className="text-sm text-slate-500">
              Product will be visible to customers.
            </p>
          </div>

          <input
            type="checkbox"
            name="active"
            defaultChecked
            className="h-5 w-5"
          />
        </label>

        {/* Draft */}

        <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
          <div>
            <h4 className="font-medium">Save as Draft</h4>

            <p className="text-sm text-slate-500">
              Keep this product unpublished.
            </p>
          </div>

          <input
            type="checkbox"
            name="draft"
            className="h-5 w-5"
          />
        </label>
      </div>
    </section>
  );
}