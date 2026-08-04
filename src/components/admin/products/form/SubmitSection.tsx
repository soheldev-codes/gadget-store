"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";

export default function SubmitSection() {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:justify-end">
      <Link
        href="/dashboard/admin/products"
        className="rounded-xl border border-slate-300 px-6 py-3 text-center font-medium transition hover:bg-slate-100"
      >
        Cancel
      </Link>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Publishing..." : "Publish Product"}
      </button>
    </section>
  );
}