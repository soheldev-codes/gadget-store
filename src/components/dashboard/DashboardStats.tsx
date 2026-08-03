import {
  FiHeart,
  FiPackage,
  FiShoppingCart,
  FiDollarSign,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Orders",
    value: "24",
    icon: FiPackage,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Wishlist",
    value: "12",
    icon: FiHeart,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Cart Items",
    value: "3",
    icon: FiShoppingCart,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Total Spending",
    value: "৳52,450",
    icon: FiDollarSign,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.color}`}
            >
              <Icon size={26} />
            </div>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {stat.title}
            </p>
          </div>
        );
      })}

    </div>
  );
}