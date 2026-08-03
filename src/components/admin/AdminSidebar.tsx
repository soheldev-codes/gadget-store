"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FiGrid,
  FiPackage,
  FiLayers,
  FiTag,
  FiUsers,
  FiShoppingBag,
  FiGift,
  FiImage,
  FiFileText,
  FiStar,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const adminMenus = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: FiGrid,
  },
  {
    title: "Products",
    href: "/dashboard/admin/products",
    icon: FiPackage,
  },
  {
    title: "Categories",
    href: "/dashboard/admin/categories",
    icon: FiLayers,
  },
  {
    title: "Brands",
    href: "/dashboard/admin/brands",
    icon: FiTag,
  },
  {
    title: "Users",
    href: "/dashboard/admin/users",
    icon: FiUsers,
  },
  {
    title: "Orders",
    href: "/dashboard/admin/orders",
    icon: FiShoppingBag,
  },
  {
    title: "Coupons",
    href: "/dashboard/admin/coupons",
    icon: FiGift,
  },
  {
    title: "Banners",
    href: "/dashboard/admin/banners",
    icon: FiImage,
  },
  {
    title: "Blogs",
    href: "/dashboard/admin/blogs",
    icon: FiFileText,
  },
  {
    title: "Reviews",
    href: "/dashboard/admin/reviews",
    icon: FiStar,
  },
  {
    title: "Analytics",
    href: "/dashboard/admin/analytics",
    icon: FiBarChart2,
  },
  {
    title: "Settings",
    href: "/dashboard/admin/settings",
    icon: FiSettings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8 border-b border-slate-200 pb-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-3xl font-bold text-white">
          A
        </div>

        <h2 className="mt-4 text-lg font-bold">
          Admin Panel
        </h2>

        <p className="text-sm text-slate-500">
          Arif Gadget Store
        </p>
      </div>

      <nav className="space-y-2">
        {adminMenus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />
              {menu.title}
            </Link>
          );
        })}
      </nav>

      <button
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 text-red-600 transition hover:bg-red-600 hover:text-white"
      >
        <FiLogOut />
        Logout
      </button>
    </aside>
  );
}