import Container from "@/components/shared/Container";
import WhyChooseCard from "./WhyChooseCard";

import {
  Truck,
  CreditCard,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

const items = [
  {
    id: 1,
    title: "Free Shipping",
    description:
      "Free delivery on orders over ৳3000 anywhere in Bangladesh.",
    Icon: Truck,
  },
  {
    id: 2,
    title: "Secure Payment",
    description:
      "100% secure checkout with trusted payment methods.",
    Icon: CreditCard,
  },
  {
    id: 3,
    title: "Official Warranty",
    description:
      "All products come with official warranty and authentic quality.",
    Icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Easy Return",
    description:
      "7-day hassle-free return and replacement policy.",
    Icon: RotateCcw,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-blue-50 py-20">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Shop With Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Why Choose Arif Gadget
          </h2>

          <p className="mt-4 text-slate-600">
            We provide genuine gadgets, secure payment, fast delivery,
            and reliable customer support across Bangladesh.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <WhyChooseCard
              key={item.id}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}