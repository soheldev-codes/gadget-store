"use client";

import { Menu } from "lucide-react";

export default function MobileNav() {
  return (
    <button className="lg:hidden">
      <Menu className="size-6" />
    </button>
  );
}