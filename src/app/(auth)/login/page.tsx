import AuthBanner from "@/components/auth/AuthBanner";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="grid gap-10 lg:grid-cols-2">

          <AuthBanner />

          <LoginForm />

        </div>

      </div>
    </main>
  );
}