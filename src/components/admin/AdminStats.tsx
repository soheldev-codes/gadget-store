import {
  FiDollarSign,
  FiPackage,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Sales",
    value: "৳8,52,400",
    icon: FiDollarSign,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Total Orders",
    value: "152",
    icon: FiShoppingBag,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Products",
    value: "68",
    icon: FiPackage,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Customers",
    value: "421",
    icon: FiUsers,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function AdminStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
            >
              <Icon size={26} />
            </div>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}