"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FiGrid,
  FiPackage,
  FiHeart,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const userMenus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    title: "My Orders",
    href: "/dashboard/orders",
    icon: FiPackage,
  },
  {
    title: "Wishlist",
    href: "/dashboard/wishlist",
    icon: FiHeart,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: FiUser,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: FiSettings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* User Info */}

      <div className="mb-8 border-b border-slate-200 pb-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
          S
        </div>

        <h2 className="mt-4 text-lg font-bold text-slate-900">
          Sohel Rana
        </h2>

        <p className="text-sm text-slate-500">
          Customer Account
        </p>
      </div>

      {/* Navigation */}

      <nav className="space-y-2">
        {userMenus.map((menu) => {
          const Icon = menu.icon;

          const isActive =
            pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              <span>{menu.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <button
        type="button"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
      >
        <FiLogOut size={18} />

        Logout
      </button>
    </aside>
  );
}