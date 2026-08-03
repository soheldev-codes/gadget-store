import { FiImage, FiUploadCloud } from "react-icons/fi";

export default function ImageSection() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">
        Product Images
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Upload a thumbnail and gallery images for your product.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Thumbnail */}

        <div>
          <label className="mb-3 block text-sm font-medium text-slate-700">
            Thumbnail Image
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 transition hover:border-blue-600 hover:bg-blue-50">
            <FiUploadCloud
              size={42}
              className="text-blue-600"
            />

            <p className="mt-4 font-semibold">
              Click to upload thumbnail
            </p>

            <span className="mt-1 text-sm text-slate-500">
              PNG, JPG or WEBP
            </span>

            <input
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>

        {/* Gallery */}

        <div>
          <label className="mb-3 block text-sm font-medium text-slate-700">
            Gallery Images
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 transition hover:border-blue-600 hover:bg-blue-50">
            <FiImage
              size={42}
              className="text-blue-600"
            />

            <p className="mt-4 font-semibold">
              Upload multiple images
            </p>

            <span className="mt-1 text-sm text-slate-500">
              Select multiple product images
            </span>

            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Preview Placeholder */}

      <div className="mt-8">
        <h4 className="mb-4 font-semibold text-slate-800">
          Image Preview
        </h4>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50"
            >
              <FiImage
                size={28}
                className="text-slate-400"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}