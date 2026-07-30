import { Mail, ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-8 py-16 text-white shadow-2xl md:px-16">
          {/* Blur Effect */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}

            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <Mail size={30} />
              </div>

              <h2 className="text-4xl font-bold leading-tight">
                Subscribe to Our Newsletter
              </h2>

              <p className="mt-5 max-w-xl text-blue-100">
                Get exclusive deals, new arrivals, special discounts and the
                latest tech updates directly in your inbox.
              </p>
            </div>

            {/* Right */}

            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-14 flex-1 rounded-2xl border border-white/20 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 font-semibold transition hover:bg-black"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}