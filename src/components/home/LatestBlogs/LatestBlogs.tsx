import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";

import { blogs } from "./BlogData";
import BlogCard from "./BlogCard";

export default function LatestBlogs() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-blue-50 py-20">
      <Container>
        {/* Header */}

        <div className="mb-14 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Latest Articles
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              News & Buying Guides
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Explore our latest articles, gadget reviews, and buying guides to
              stay informed before your next purchase.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View All

            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}