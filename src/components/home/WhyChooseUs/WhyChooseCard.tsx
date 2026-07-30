import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export default function WhyChooseCard({
  title,
  description,
  Icon,
}: Props) {
  return (
    <div className="group h-full transition-all duration-300 hover:-translate-y-2">
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        {/* Icon */}
        <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
          <Icon size={30} />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Description */}
        <p className="flex-1 leading-7 text-slate-600">
          {description}
        </p>

        {/* Bottom Line */}
        <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}