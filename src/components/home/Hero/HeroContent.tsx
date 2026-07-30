export default function HeroContent() {
  return (
    <div className="space-y-6">

      <span className="inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300">
        New Arrival
      </span>

      <h1 className="text-5xl font-extrabold leading-tight text-white">
        Smart Gadgets
        <span className="block text-blue-500">
          Smart Life
        </span>
      </h1>

      <p className="max-w-md text-lg text-slate-300">
        Discover premium gadgets with official warranty,
        cash on delivery and fast shipping all over Bangladesh.
      </p>

      <div className="flex gap-4">

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          Shop Now
        </button>

        <button className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900">
          Explore
        </button>

      </div>

    </div>
  );
}