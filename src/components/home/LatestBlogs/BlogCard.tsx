"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";

type Blog = {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
};

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
        {/* Image */}

        <div className="relative overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={400}
            className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
            {blog.category}
          </span>
        </div>

        {/* Content */}

        <div className="space-y-5 p-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{blog.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{blog.author}</span>
            </div>
          </div>

          <Link href={`/blogs/${blog.slug}`}>
            <h3 className="text-2xl font-bold leading-8 text-slate-900 transition hover:text-blue-600">
              {blog.title}
            </h3>
          </Link>

          <p className="line-clamp-3 leading-7 text-slate-600">
            {blog.excerpt}
          </p>

          <Link
            href={`/blogs/${blog.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
          >
            Read More

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}