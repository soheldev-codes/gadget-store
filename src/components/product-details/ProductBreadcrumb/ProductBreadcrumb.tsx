import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
};

export default function ProductBreadcrumb({
  title,
}: Props) {
  return (
    <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm">
      <Link
        href="/"
        className="text-slate-500 transition hover:text-blue-600"
      >
        Home
      </Link>

      {/* <ChevronRight
        size={16}
        className="text-slate-400"
      /> */}

      <Link
        href="/products"
        className="text-slate-500 transition hover:text-blue-600"
      >
        Products
      </Link>

      <ChevronRight
        size={16}
        className="text-slate-400"
      />

      <span className="font-medium text-slate-900">
        {title}
      </span>
    </nav>
  );
}