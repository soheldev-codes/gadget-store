import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100">
        <ChevronLeft size={18} />
      </button>

      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          className={`h-11 w-11 rounded-xl font-semibold transition ${
            page === 1
              ? "bg-blue-600 text-white"
              : "border border-slate-200 hover:bg-slate-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100">
        <ChevronRight size={18} />
      </button>
    </div>
  );
}