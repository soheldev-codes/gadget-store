import DashboardStats from "@/components/dashboard/DashboardStats";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome Back 👋
        </h2>

        <p className="mt-2 text-slate-500">
          Here's a quick overview of your account.
        </p>
      </div>

      <DashboardStats />

      <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
        <h3 className="text-xl font-semibold text-slate-900">
          Recent Orders
        </h3>

        <p className="mt-3 text-slate-500">
          Your recent orders will appear here after backend integration.
        </p>
      </div>

    </div>
  );
}