import Image from "next/image";
import Link from "next/link";

import {
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import ProductStatusBadge from "./ProductStatusBadge";
import DeleteProductButton from "./DeleteProductButton";

const products = [
  {
    id: "1",
    name: "Logitech G Pro X Superlight",
    image: "/images/products/mouse-1.png",
    category: "Mouse",
    brand: "Logitech",
    price: "৳12,999",
    stock: 18,
    status: "In Stock",
  },
  {
    id: "2",
    name: "Sony WH-1000XM5",
    image: "/images/products/headphone-1.png",
    category: "Headphone",
    brand: "Sony",
    price: "৳39,999",
    stock: 0,
    status: "Out of Stock",
  },
];

export default function ProductTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Product
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Brand
              </th>

              <th className="px-6 py-4 text-left">
                Price
              </th>

              <th className="px-6 py-4 text-left">
                Stock
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="border-t border-slate-200"
              >

                {/* Product */}

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />

                    </div>

                    <h3 className="font-semibold text-slate-900">
                      {product.name}
                    </h3>

                  </div>

                </td>

                {/* Category */}

                <td className="px-6 py-5">
                  {product.category}
                </td>

                {/* Brand */}

                <td className="px-6 py-5">
                  {product.brand}
                </td>

                {/* Price */}

                <td className="px-6 py-5 font-semibold text-blue-600">
                  {product.price}
                </td>

                {/* Stock */}

                <td className="px-6 py-5">
                  {product.stock}
                </td>

                {/* Status */}

                <td className="px-6 py-5">

                  <ProductStatusBadge stock={product.stock} />

                </td>

                {/* Actions */}

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/dashboard/admin/products/edit/${product.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition hover:bg-blue-600 hover:text-white"
                    >
                      <FiEdit2 size={18} />
                    </Link>

                    <DeleteProductButton productId={product.id} />

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}