import AuthBanner from "@/components/auth/AuthBanner";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="grid gap-10 lg:grid-cols-2">

          <AuthBanner />

          <RegisterForm />

        </div>

      </div>
    </main>
  );
}