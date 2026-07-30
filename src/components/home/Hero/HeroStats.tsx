import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Wallet,
} from "lucide-react";

const items = [
  {
    title: "Free Delivery",
    subtitle: "Across Bangladesh",
    icon: Truck,
  },
  {
    title: "Cash On Delivery",
    subtitle: "Pay After Receive",
    icon: Wallet,
  },
  {
    title: "Official Warranty",
    subtitle: "100% Genuine Products",
    icon: ShieldCheck,
  },
  {
    title: "Easy Return",
    subtitle: "7 Days Replacement",
    icon: RotateCcw,
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 border-t border-slate-200 bg-white lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group flex items-center gap-4 border-b border-r border-slate-200 p-5 transition-all duration-300 hover:bg-blue-50 lg:border-b-0 last:border-r-0"
          >
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Icon size={22} />
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                {item.title}
              </h4>

              <p className="text-sm text-slate-500">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}