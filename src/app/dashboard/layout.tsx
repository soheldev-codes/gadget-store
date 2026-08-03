import type { ReactNode } from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4">

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

          {/* Sidebar */}

          <DashboardSidebar />

          {/* Content */}

          <section>

            <DashboardHeader />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {children}
            </div>

          </section>

        </div>

      </div>
    </main>
  );
}