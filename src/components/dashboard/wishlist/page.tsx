import Image from "next/image";
import Link from "next/link";

import { FiShoppingCart, FiTrash2 } from "react-icons/fi";

const wishlist = [
  {
    id: 1,
    title: "Logitech G Pro X Superlight",
    image: "/images/products/mouse-1.png",
    price: "৳12,999",
    stock: true,
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Headphone",
    image: "/images/products/headphone-1.png",
    price: "৳39,999",
    stock: false,
  },
];

export default function WishlistPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          My Wishlist
        </h2>

        <p className="mt-2 text-slate-500">
          Products you've saved for later.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex gap-5">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl bg-slate-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link href="#">
                    <h3 className="font-semibold text-slate-900 hover:text-blue-600">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-lg font-bold text-blue-600">
                    {item.price}
                  </p>

                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      item.stock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.stock
                      ? "In Stock"
                      : "Out of Stock"}
                  </span>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
                    disabled={!item.stock}
                  >
                    <FiShoppingCart />

                    Add To Cart
                  </button>

                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-200 text-red-600 transition hover:bg-red-600 hover:text-white"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}