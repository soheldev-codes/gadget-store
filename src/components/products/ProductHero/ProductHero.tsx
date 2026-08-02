import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <Container>
        <div className="relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="font-medium text-white">
              Products
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Explore Our Products
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover premium gadgets, accessories and electronics at
            unbeatable prices with fast delivery across Bangladesh.
          </p>
        </div>
      </Container>
    </section>
  );
}