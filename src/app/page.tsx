import { Header } from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold">
            Welcome to Arif Gadget Store
          </h1>

          <p className="mt-4 text-muted-foreground">
            Premium gadgets at the best prices.
          </p>
        </section>
      </main>
    </>
  );
}