import AdminStats from "@/components/admin/AdminStats";
import RecentOrders from "@/components/admin/RecentOrders";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome Back, Admin 👋
        </h2>

        <p className="mt-2 text-slate-500">
          Here's a quick overview of your store today.
        </p>
      </div>

      {/* Stats */}

      <AdminStats />

      {/* Recent Orders */}

      <RecentOrders />
    </div>
  );
}