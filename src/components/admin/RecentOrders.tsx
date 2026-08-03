const recentOrders = [
  {
    id: "#ORD-1025",
    customer: "Sohel Rana",
    amount: "৳12,999",
    status: "Delivered",
  },
  {
    id: "#ORD-1026",
    customer: "Rahim Ahmed",
    amount: "৳3,999",
    status: "Processing",
  },
  {
    id: "#ORD-1027",
    customer: "Karim Hasan",
    amount: "৳7,499",
    status: "Pending",
  },
];

export default function RecentOrders() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h3 className="text-xl font-semibold">
          Recent Orders
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left">
                Order ID
              </th>

              <th className="px-6 py-4 text-left">
                Customer
              </th>

              <th className="px-6 py-4 text-left">
                Amount
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t border-slate-200"
              >
                <td className="px-6 py-5">
                  {order.id}
                </td>

                <td className="px-6 py-5">
                  {order.customer}
                </td>

                <td className="px-6 py-5 font-semibold text-blue-600">
                  {order.amount}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}