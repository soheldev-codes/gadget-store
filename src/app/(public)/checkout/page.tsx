import CheckoutForm from "@/components/checkout/CheckoutForm";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        <h1 className="mb-10 text-4xl font-bold text-slate-900">
          Checkout
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* Left Side */}

          <div className="space-y-8">
            <CheckoutForm />

            <PaymentMethod />
          </div>

          {/* Right Side */}

          <OrderSummary />

        </div>

      </div>
    </main>
  );
}