import { ArrowRight } from "lucide-react";

export default function HeroOfferCards() {
  return (
    <div className="flex h-full flex-col gap-6">

      <div className="flex-1 rounded-3xl bg-white p-6 shadow-xl">

        <p className="text-sm font-semibold text-blue-600">
          FLASH SALE
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Wireless Earbuds
        </h3>

        <p className="mt-3 text-slate-500">
          Up to 25% OFF
        </p>

        <button className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
          Shop Now
          <ArrowRight size={18} />
        </button>

      </div>

      <div className="flex-1 rounded-3xl bg-blue-600 p-6 text-white shadow-xl">

        <p className="text-sm font-semibold">
          BEST SELLER
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Gaming Mouse
        </h3>

        <p className="mt-3 text-blue-100">
          Official Warranty Included
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold">
          Buy Now
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}