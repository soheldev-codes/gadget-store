import Link from "next/link";

export default function SubmitSection() {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:justify-end">
      <Link
        href="/dashboard/admin/products"
        className="rounded-xl border border-slate-300 px-6 py-3 text-center font-medium transition hover:bg-slate-100"
      >
        Cancel
      </Link>

      <button
        type="button"
        className="rounded-xl border border-amber-300 bg-amber-100 px-6 py-3 font-medium text-amber-800 transition hover:bg-amber-200"
      >
        Save Draft
      </button>

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Publish Product
      </button>
    </section>
  );
}