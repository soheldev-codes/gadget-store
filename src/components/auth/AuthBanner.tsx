import Link from "next/link";

export default function AuthBanner() {
  return (
    <div className="hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-12 text-white lg:flex lg:flex-col lg:justify-between">

      <div>
        <Link
          href="/"
          className="text-3xl font-bold"
        >
          Arif Gadget
        </Link>

        <h2 className="mt-16 text-5xl font-bold leading-tight">
          Welcome Back!
        </h2>

        <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">
          Discover premium gadgets, accessories and smart electronics at the best prices with secure shopping and fast delivery across Bangladesh.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">
              10K+
            </h3>

            <p className="mt-2 text-blue-100">
              Happy Customers
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">
              2K+
            </h3>

            <p className="mt-2 text-blue-100">
              Products
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">
              64
            </h3>

            <p className="mt-2 text-blue-100">
              Brands
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <h3 className="text-3xl font-bold">
              99%
            </h3>

            <p className="mt-2 text-blue-100">
              Positive Reviews
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}