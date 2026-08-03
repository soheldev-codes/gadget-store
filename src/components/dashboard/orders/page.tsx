import Link from "next/link";

import {
  FiEye,
  FiPackage,
} from "react-icons/fi";

const orders = [
  {
    id: "#ORD-1001",
    product: "Logitech G Pro X Superlight",
    date: "20 Jul 2026",
    amount: "৳12,999",
    status: "Delivered",
  },
  {
    id: "#ORD-1002",
    product: "Redragon K617 Keyboard",
    date: "15 Jul 2026",
    amount: "৳4,999",
    status: "Processing",
  },
  {
    id: "#ORD-1003",
    product: "Sony WH-1000XM5",
    date: "10 Jul 2026",
    amount: "৳39,999",
    status: "Pending",
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          My Orders
        </h2>

        <p className="mt-2 text-slate-500">
          Track all your recent purchases.
        </p>
      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Order ID
              </th>

              <th className="px-6 py-4 text-left">
                Product
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-left">
                Amount
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr
                key={order.id}
                className="border-t border-slate-200"
              >

                <td className="px-6 py-5 font-medium">
                  {order.id}
                </td>

                <td className="px-6 py-5">
                  {order.product}
                </td>

                <td className="px-6 py-5">
                  {order.date}
                </td>

                <td className="px-6 py-5 font-semibold text-blue-600">
                  {order.amount}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      order.status ===
                      "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status ===
                            "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <Link
                    href="#"
                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition hover:bg-blue-600 hover:text-white"
                  >
                    <FiEye size={18} />
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="space-y-4 lg:hidden">

        {orders.map((order) => (

          <div
            key={order.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

                <FiPackage size={22} />

              </div>

              <div>

                <h3 className="font-semibold">
                  {order.product}
                </h3>

                <p className="text-sm text-slate-500">
                  {order.id}
                </p>

              </div>

            </div>

            <div className="mt-5 space-y-2 text-sm">

              <div className="flex justify-between">
                <span>Date</span>
                <span>{order.date}</span>
              </div>

              <div className="flex justify-between">
                <span>Amount</span>
                <span>{order.amount}</span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>

                <span>{order.status}</span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}