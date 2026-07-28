"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/nav-links";
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-blue-600",
            pathname === item.href && "text-blue-600"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}